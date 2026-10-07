(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./feral-damage.js') : root.FOREVER_FERAL_DAMAGE,
    typeof module === 'object' && module.exports ? require('./feral-buffs.js') : root.FOREVER_FERAL_BUFFS,
    typeof module === 'object' && module.exports ? require('./feral-gear.js') : root.FOREVER_FERAL_GEAR,
    typeof module === 'object' && module.exports ? require('./feral-rotation.js') : root.FOREVER_FERAL_ROTATION);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_SIM = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (damage, buffs, gear, rotation) {
  'use strict';

  const ABILITIES = ['rake', 'shred', 'rip', 'bite', 'shiftingPower', 'berserk', 'faerieFire'];
  const LABELS = {
    rake: 'Rake', shred: 'Shred', rip: 'Rip', bite: 'Ferocious Bite',
    shiftingPower: 'Shifting Power', berserk: 'Berserk', faerieFire: 'Faerie Fire'
  };
  const AUTO_ATTACKS = new Set(['auto', 'windfury']);
  const MELEE_ATTACKS = new Set(['auto', 'windfury', 'rake', 'shred', 'rip', 'bite']);
  const attackLabel = ability => ability === 'auto' ? 'Autoattack' : ability === 'windfury' ? 'Windfury attack' : LABELS[ability];
  const OMEN_METRICS = ['attempts', 'procs', 'startingProcs', 'freeCasts', 'consumed', 'expired', 'refreshed', 'costWaived', 'energySaved'];
  // Vanilla WoWSims Classic, not TBC/Wrath: talents.go and core/attack.go at
  // 7779ebbf79dc7f1341e6ab939b28a3402c9a730a. Specials use equipped weapon speed.
  const OMEN_PPM = 2, OMEN_ICD = 10, CLEARCASTING_DURATION = 15;
  // Retain Vanilla Totem proc chance/ICD, with Cat eligibility and the user's
  // confirmed Forever timing: an immediate independent extra attack, no swing
  // reset and no legacy spell-batch delay. Not the two-attack Weapon imbue.
  const WINDFURY_CHANCE = 0.2, WINDFURY_ICD = 1.5;
  const WINDFURY_MODEL = 'forever-independent-extra-v1';
  const IDOL_MODEL = 'forever-cat-idols-v1';
  const WINDFURY_METRICS = ['attempts', 'procs', 'extraAttacks', 'landed'];
  const BERSERK_CRIT_METRICS = ['landed', 'natural', 'created', 'rake', 'shred'];
  const CP_METRICS = ['normal', 'bloodFrenzy', 'waste', 'ripConsumed', 'biteConsumed',
    'atCapCasts', 'atCapWaste', 'rakeAtCapCasts', 'rakeAtCapWaste', 'shredAtCapCasts', 'shredAtCapWaste'];
  const RIP_DURATION = 12;
  const TEA_ENERGY = 100, TEA_COOLDOWN = 300;
  // Unimproved Vanilla Mana Spring: 25 MP5 delivered on 2-second ticks.
  const MANA_SPRING_INTERVAL = 2, MANA_SPRING_AMOUNT = 10;
  const DEFAULTS = Object.freeze({
    ...rotation.DEFAULTS,
    ...damage.DEFAULTS,
    ...buffs.DEFAULTS,
    characterMode: 'totals', gearBuild: '', gearAreaTypes: '', targetCreature: 'other',
    duration: 300, durationVariance: 0, iterations: 1000, seed: 8675309, replayIteration: 1,
    startingMana: 4000, spirit: 200, spiritMode: 'base', crit: 35, miss: 1, dodge: 6.5, parry: 0,
    swingTimer: 1, weaponSpeed: 3, shiftingMode: 'automatic', shiftingThreshold: 50, jowChance: 50, bloodFrenzy: 100,
    biteMaxEnergy: 35, biteRipOutside: 12, biteRipBerserk: 12, ripMinCP: 5, biteMinCP: 5, rakeMode: 'maintain',
    blessingWisdom: false, manaSpring: true, divineSpirit: true,
    howlingIdol: true, wolfsheadHelm: false, tier1Feral5pc: false, startingClearcasting: true,
    judgmentWisdom: true, reflection: 0, omenOfClarity: true, naturalShapeshifter: 0, windfury: true, faerieFire: true, berserkGCD: true,
    usePotions: true, potionPolicy: 'sustain', teaPolicy: 'berserk', debug: false
  });

  function talentPercent(value, ranks, fallback) {
    // Accept old boolean configs: enabled meant the fully ranked talent.
    const percent = value === true ? ranks[ranks.length - 1] : value === false ? 0 : Number(value);
    return ranks.includes(percent) ? percent : fallback;
  }

  function normalize(input = {}) {
    const supplied = { ...DEFAULTS, ...input };
    const c = damage.normalize(buffs.apply(gear ? gear.apply(supplied) : supplied));
    Object.assign(c, rotation.normalize(c));
    c.rotationRevision = rotation.REVISION;
    if (!['other', 'elemental'].includes(c.targetCreature)) throw new Error('Invalid target creature type.');
    // The opener is now determined solely by whether Berserk uses the GCD.
    delete c.preBerserk;
    if (!['automatic', 'manual'].includes(c.shiftingMode)) c.shiftingMode = DEFAULTS.shiftingMode;
    if (!['maintain', 'ripDown'].includes(c.rakeMode)) c.rakeMode = DEFAULTS.rakeMode;
    if (!['base', 'total'].includes(c.spiritMode)) c.spiritMode = DEFAULTS.spiritMode;
    for (const key of ['berserkGCD', 'howlingIdol', 'wolfsheadHelm', 'tier1Feral5pc', 'startingClearcasting']) {
      c[key] = typeof c[key] === 'boolean' ? c[key] : DEFAULTS[key];
    }
    const numeric = {
      duration: [1, 7200], durationVariance: [0, 7200], iterations: [1, 10000], seed: [0, 4294967295], replayIteration: [1, 10000],
      startingMana: [0, 100000], spirit: [0, 5000], crit: [0, 100], miss: [0, 100],
      dodge: [0, 100], parry: [0, 100], swingTimer: [0.1, 10], weaponSpeed: [0.1, 10], shiftingThreshold: [0, 100],
      jowChance: [0, 100], bloodFrenzy: [0, 100], biteMaxEnergy: [35, 100],
      biteRipOutside: [0, 30], biteRipBerserk: [0, 30], ripMinCP: [1, 5], biteMinCP: [1, 5]
    };
    for (const [key, [min, max]] of Object.entries(numeric)) {
      let value = Number(c[key]);
      if (!Number.isFinite(value)) value = DEFAULTS[key];
      c[key] = Math.min(max, Math.max(min, value));
    }
    c.duration = roundTime(c.duration);
    c.durationVariance = roundTime(c.durationVariance);
    c.iterations = Math.round(c.iterations);
    c.replayIteration = Math.round(c.replayIteration);
    c.ripMinCP = Math.round(c.ripMinCP);
    c.biteMinCP = Math.round(c.biteMinCP);
    c.seed = Math.round(c.seed) >>> 0;
    c.bloodFrenzy = [0, 50, 100].includes(c.bloodFrenzy) ? c.bloodFrenzy : DEFAULTS.bloodFrenzy;
    c.naturalShapeshifter = talentPercent(c.naturalShapeshifter, [0, 10, 20, 30], DEFAULTS.naturalShapeshifter);
    c.reflection = talentPercent(c.reflection, [0, 17, 33, 50], DEFAULTS.reflection);
    if (c.miss + c.dodge + c.parry > 100) throw new Error('Miss, dodge, and parry cannot total more than 100%.');
    return c;
  }

  function deriveSeed(seed, iteration) {
    let x = ((seed >>> 0) + Math.imul(iteration >>> 0, 0x9e3779b9)) >>> 0;
    x ^= x >>> 16; x = Math.imul(x, 0x85ebca6b); x ^= x >>> 13;
    x = Math.imul(x, 0xc2b2ae35); x ^= x >>> 16;
    return x >>> 0;
  }

  function createRng(seed) {
    let state = seed >>> 0;
    return function () {
      state = (state + 0x6D2B79F5) >>> 0;
      let t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function blankCounts() { return Object.fromEntries(ABILITIES.map(id => [id, 0])); }
  function roundTime(value) { return Math.round(value * 10) / 10; }
  function eventTime(value) { return Math.round(value * 1000000) / 1000000; }
  function fmt(value) { return Number.isInteger(value) ? String(value) : value.toFixed(1); }

  function sampleFightDuration(config, seed) {
    if (!config.durationVariance) return config.duration;
    // Sample uniformly on the engine's 0.1s grid, within the allowed range.
    // A separate stream preserves combat RNG when only fight length changes.
    const minTick = Math.round(Math.max(1, config.duration - config.durationVariance) * 10);
    const maxTick = Math.round(Math.min(7200, config.duration + config.durationVariance) * 10);
    const random = createRng(deriveSeed(seed, 0x44555241))();
    return (minTick + Math.floor(random * (maxTick - minTick + 1))) / 10;
  }

  function createState(config, rng, debug) {
    return {
      time: 0, energy: 100, mana: config.startingMana, combo: 0, gcdUntil: 0,
      rakeExpires: 0, ripExpires: 0, berserkExpires: -Infinity, lastManaSpend: -Infinity,
      clearcastingExpires: -Infinity, clearcastingId: 0, omenReadyAt: 0,
      omen: Object.fromEntries(OMEN_METRICS.map(key => [key, 0])),
      windfury: Object.fromEntries(WINDFURY_METRICS.map(key => [key, 0])),
      berserkCrits: Object.fromEntries(BERSERK_CRIT_METRICS.map(key => [key, 0])),
      windfuryReadyAt: 0, windfuryPending: false,
      cooldowns: { shiftingPower: 0, berserk: 0, faerieFire: 0, potion: 0, tea: 0 },
      nextEnergyTick: 0.1, nextManaTick: 2, nextWisdomTick: 5, nextSpringTick: MANA_SPRING_INTERVAL,
      nextTideTick: config.manaTide ? Math.min(40, config.duration / 2) + 3 : Infinity, tideTick: 0,
      // Gear haste produces fractional intervals. Start on the same precision
      // as subsequent swings so rounding cannot leave the first event pending.
      nextSwing: eventTime(config.swingTimer), rng, debug, log: [], casts: blankCounts(), berserkCasts: blankCounts(),
      results: { miss: 0, dodge: 0, parry: 0, crit: 0, hit: 0 },
      energyStats: { natural: 0, shifting: 0, tea: 0, waste: 0, shiftingWaste: 0, teaWaste: 0 },
      manaGained: { spirit: 0, blessing: 0, spring: 0, jow: 0, potion: 0, tide: 0, ...(config.gearMP5 ? { gear: 0 } : {}) },
      manaRaw: { spirit: 0, blessing: 0, spring: 0, jow: 0, potion: 0, tide: 0, ...(config.gearMP5 ? { gear: 0 } : {}) },
      manaSpent: 0, manaWaste: 0,
      cp: Object.fromEntries(CP_METRICS.map(key => [key, 0])),
      biteEvents: [], ripApplications: [], ripCP: 0, clipEvents: [],
      bloodFrenzy: { attempts: 0, procs: 0 }, jow: { attempts: 0, procs: 0 },
      potion: { uses: 0, rolled: 0, gained: 0, waste: 0, timestamps: [] },
      potionsUsed: 0, potionSequence: [], mightyRageExpires: -Infinity,
      mightyRage: { uses: 0, uptimeSeconds: 0, timestamps: [], bonusAP: config.statMode === 'unbuffed' ? buffs.mightyRageAP(config) : 0 },
      tea: { uses: 0, gained: 0, waste: 0, timestamps: [] },
      uptime: { rake: 0, rip: 0, berserk: 0, clearcasting: 0 }, oomTime: null, autoattacks: 0
    };
  }

  function snapshot(s) { return { energy: s.energy, mana: s.mana, cp: s.combo }; }
  function addLog(s, action, before = snapshot(s), detail = '') {
    if (!s.debug) return;
    const after = snapshot(s);
    s.log.push({ time: eventTime(s.time), action, detail, before, after });
  }
  function gainEnergy(s, amount, source) {
    const before = s.energy, gained = Math.min(amount, 100 - before), wasted = amount - gained;
    s.energy += gained; s.energyStats[source] += amount; s.energyStats.waste += wasted;
    if (source === 'shifting') s.energyStats.shiftingWaste += wasted;
    if (source === 'tea') s.energyStats.teaWaste += wasted;
    return { gained, wasted };
  }
  function gainMana(s, amount, source) {
    const before = s.mana, gained = Math.min(amount, s.config.startingMana - before), wasted = amount - gained;
    s.mana += gained; s.manaRaw[source] += amount; s.manaGained[source] += gained; s.manaWaste += wasted;
    return { gained, wasted };
  }
  function spendMana(s, amount) {
    if (s.mana + 1e-9 < amount) return false;
    s.mana -= amount; s.manaSpent += amount; s.lastManaSpend = s.time; return true;
  }
  function gainCombo(s, amount, source) {
    const gained = Math.min(amount, 5 - s.combo), wasted = amount - gained;
    s.combo += gained; s.cp[source] += gained; s.cp.waste += wasted;
    return { gained, wasted };
  }
  function spendEnergy(s, amount) { if (s.energy + 1e-9 < amount) return false; s.energy -= amount; return true; }

  function clearcastingActive(s) { return s.time < s.clearcastingExpires - 1e-9; }
  function energyCost(s, baseCost) { return clearcastingActive(s) ? 0 : baseCost; }
  function tryOmen(s, ability) {
    if (!s.config.omenOfClarity || !MELEE_ATTACKS.has(ability) || s.time + 1e-9 < s.omenReadyAt) return;
    // Cat autos always use the un-hasted 1s paw speed, independently of swingTimer.
    const chance = OMEN_PPM * (AUTO_ATTACKS.has(ability) ? 1 : s.config.weaponSpeed) / 60;
    s.omen.attempts++;
    if (s.rng() >= chance) return;
    const refreshed = clearcastingActive(s);
    if (refreshed) s.omen.refreshed++;
    s.omen.procs++; s.clearcastingId++;
    s.clearcastingExpires = s.time + CLEARCASTING_DURATION;
    s.omenReadyAt = s.time + OMEN_ICD;
    addLog(s, 'Clearcasting', snapshot(s), `PROC from ${attackLabel(ability)} · ${refreshed ? 'Refreshed' : 'Applied'} for 15.0s · Omen ICD 10.0s`);
  }
  function applyStartingClearcasting(s) {
    if (!s.config.omenOfClarity || !s.config.startingClearcasting || s.omen.startingProcs) return false;
    // Model a fresh proc at pull, without an extra attack or RNG draw. Keep
    // this assumed buff separate from procs earned by attacks in combat.
    s.omen.startingProcs = 1; s.clearcastingId++;
    s.clearcastingExpires = s.time + CLEARCASTING_DURATION;
    s.omenReadyAt = s.time + OMEN_ICD;
    addLog(s, 'Clearcasting', snapshot(s), `Starting proc at pull · Applied for 15.0s · Omen ICD until ${s.omenReadyAt.toFixed(1)}s`);
    return true;
  }
  function tryWindfury(s, ability) {
    if (!s.config.windfury || !MELEE_ATTACKS.has(ability) || s.time + 1e-9 < s.windfuryReadyAt) return;
    s.windfury.attempts++;
    if (s.rng() >= WINDFURY_CHANCE) return;
    s.windfury.procs++;
    s.damage?.windfury(s.time, ability);
    s.windfuryReadyAt = eventTime(s.time + WINDFURY_ICD);
    s.windfuryPending = true;
    // Flush after the triggering attack has finished CP/Clearcasting handling.
    // This extra attack must never readjust the scheduled natural swing.
    addLog(s, 'Windfury', snapshot(s), `PROC from ${attackLabel(ability)} · 1 immediate extra attack · normal swing unchanged · ICD 1.5s`);
  }
  function finishClearcast(s, procId, baseCost, saved, ability) {
    if (!procId) return;
    s.omen.freeCasts++; s.omen.costWaived += baseCost; s.omen.energySaved += saved;
    // A special can trigger/refresh Omen itself. Do not consume that new proc,
    // but do consume a pre-existing proc, including one from a same-time auto.
    if (s.clearcastingId === procId) {
      s.clearcastingExpires = -Infinity; s.omen.consumed++;
      addLog(s, 'Clearcasting consumed', snapshot(s), `Used by ${LABELS[ability]} · Base cost waived ${fmt(baseCost)}`);
    }
  }

  function tryJudgmentOfWisdom(s, ability, landed) {
    // Vanilla WoWSims Classic debuffs.go at the pinned revision above:
    // white attacks may proc on avoidance; melee specials must land.
    if (!s.config.judgmentWisdom || !MELEE_ATTACKS.has(ability) || (!landed && !AUTO_ATTACKS.has(ability))) return;
    s.jow.attempts++;
    if (s.rng() * 100 < s.config.jowChance) {
      const before = snapshot(s), mana = gainMana(s, 59, 'jow'); s.jow.procs++;
      addLog(s, 'Judgment of Wisdom', before, `PROC · Mana +${fmt(mana.gained)}${mana.wasted ? ` · ${fmt(mana.wasted)} wasted` : ''}`);
    }
  }

  function resolveAttack(s, eligibleCrit, ability) {
    const roll = s.rng() * 100, c = s.config;
    let result = 'hit';
    if (roll < c.miss) result = 'miss';
    else if (roll < c.miss + c.dodge) result = 'dodge';
    else if (roll < c.miss + c.dodge + c.parry) result = 'parry';
    if (result !== 'hit') {
      s.results[result]++;
      s.damage?.attack(s, ability, { success: false, crit: false });
      tryJudgmentOfWisdom(s, ability, false);
      return { success: false, result, crit: false };
    }
    const berserkActive = eligibleCrit && s.time < s.berserkExpires - 1e-9;
    // Reuse the crit roll we already made under Berserk. Do not draw a second
    // roll: this attributes direct conversions without changing combat RNG.
    const critRoll = s.rng() * 100, naturalCrit = critRoll < c.crit;
    const crit = critRoll < Math.min(100, c.crit + (berserkActive ? 100 : 0));
    const berserkCreatedCrit = berserkActive && crit && !naturalCrit;
    if (berserkActive) {
      s.berserkCrits.landed++;
      s.berserkCrits.natural += Number(naturalCrit);
      if (berserkCreatedCrit) {
        s.berserkCrits.created++;
        if (ability === 'rake' || ability === 'shred') s.berserkCrits[ability]++;
      }
    }
    s.results[crit ? 'crit' : 'hit']++;
    // Damage observes pre-proc AP and pre-application bleed state. It never
    // draws from combat RNG or changes the existing attack result.
    s.damage?.attack(s, ability, { success: true, crit });
    tryJudgmentOfWisdom(s, ability, true);
    tryOmen(s, ability);
    tryWindfury(s, ability);
    return { success: true, result: crit ? 'crit' : 'hit', crit, naturalCrit, berserkActive, berserkCreatedCrit };
  }

  function bloodFrenzy(s, attack) {
    if (!attack.success || !attack.crit) return;
    s.bloodFrenzy.attempts++;
    if (s.rng() * 100 < s.config.bloodFrenzy) {
      const before = snapshot(s), cp = gainCombo(s, 1, 'bloodFrenzy'); s.bloodFrenzy.procs++;
      addLog(s, 'Blood Frenzy', before, `PROC · +${cp.gained} CP${cp.wasted ? ' · 1 wasted' : ''}`);
    }
  }

  function recordCast(s, id, usesGCD = true) {
    s.casts[id]++;
    if (s.time < s.berserkExpires - 1e-9) s.berserkCasts[id]++;
    if (usesGCD) s.gcdUntil = s.time + 1;
  }
  function castBuilder(s, id, cost, duration) {
    const procId = clearcastingActive(s) ? s.clearcastingId : 0;
    const actualCost = energyCost(s, cost), before = snapshot(s);
    if (!spendEnergy(s, actualCost)) return false;
    // Classify by CP before the cast, not after the base point is awarded:
    // a builder starting at 4 CP can overflow Blood Frenzy without being a
    // cast at cap. Read the actual waste delta, never roll extra proc RNG.
    const startedAtCap = before.cp === 5, wasteBefore = s.cp.waste;
    recordCast(s, id);
    const attack = resolveAttack(s, true, id);
    if (!attack.success) s.energy += actualCost * 0.8;
    else {
      gainCombo(s, 1, 'normal');
      if (id === 'rake') { s.rakeExpires = s.time + duration; s.damage?.applyBleed('rake', s.time, 0); }
      bloodFrenzy(s, attack);
    }
    const atCapWaste = startedAtCap ? s.cp.waste - wasteBefore : 0;
    if (startedAtCap) {
      s.cp.atCapCasts++; s.cp[`${id}AtCapCasts`]++;
      s.cp.atCapWaste += atCapWaste; s.cp[`${id}AtCapWaste`] += atCapWaste;
    }
    addLog(s, LABELS[id], before, attack.result.toUpperCase() + (attack.berserkCreatedCrit ? ' · Berserk-created crit' : attack.berserkActive && attack.naturalCrit ? ' · Natural crit (Berserk active)' : '') + (procId ? ` · Clearcasting: ${fmt(cost)} base energy waived` : '') + (!attack.success ? ` · Refund ${fmt(actualCost * 0.8)} energy` : id === 'rake' ? ' · Rake applied for 9.0s' : '') + (startedAtCap ? ` · Started at 5 CP · ${atCapWaste} CP wasted` : ''));
    finishClearcast(s, procId, cost, attack.success ? cost : cost * 0.2, id);
    processWindfury(s);
    return true;
  }
  function castFinisher(s, id, cost, duration) {
    const procId = clearcastingActive(s) ? s.clearcastingId : 0;
    let actualCost = energyCost(s, cost);
    const requiredCP = id === 'rip' ? s.config.ripMinCP : s.config.biteMinCP;
    if (s.combo < requiredCP || s.energy + 1e-9 < actualCost) return false;
    const before = snapshot(s);
    spendEnergy(s, actualCost); recordCast(s, id);
    const attack = resolveAttack(s, false, id);
    if (attack.success) {
      if (id === 'rip') {
        s.cp.ripConsumed += s.combo; s.ripCP = s.combo; s.ripExpires = s.time + duration;
        s.damage?.applyBleed('rip', s.time, s.combo);
        s.ripApplications.push({ time: s.time, expires: s.ripExpires });
      }
      else {
        // Bite's bonus-energy drain is separate from its base cost and only
        // occurs on a landed attack, even with Clearcasting.
        actualCost += s.energy; spendEnergy(s, s.energy);
        s.cp.biteConsumed += s.combo;
      }
      s.combo = 0;
    }
    if (id === 'bite') s.biteEvents.push({ time: s.time, landed: attack.success,
      terminal: s.config.duration - s.time < RIP_DURATION - 1e-9,
      energySpent: actualCost, clearcasting: Boolean(procId), berserk: s.time < s.berserkExpires - 1e-9,
      ripExpires: s.ripExpires });
    addLog(s, LABELS[id], before, `${attack.result.toUpperCase()} · ${fmt(actualCost)} energy${procId ? ` · Clearcasting: ${fmt(cost)} base energy waived` : ''}${attack.success ? ` · ${before.cp} CP consumed${id === 'rip' ? ' · Rip applied for 12.0s' : ''}` : ' · CP retained'}`);
    finishClearcast(s, procId, cost, id === 'bite' && attack.success ? 0 : cost, id);
    processWindfury(s);
    return true;
  }
  function shiftingPowerCost(config = DEFAULTS) {
    // Pinned client spell 1270470: -40 flat cost, mask 0xe0000000 matches
    // Shifting Power 1322605 (0x20000000). Fork cost ordering is flat then %.
    return (684 - (config.gearIdol === 263411 ? 40 : 0)) * (100 - talentPercent(config.naturalShapeshifter, [0, 10, 20, 30], DEFAULTS.naturalShapeshifter)) / 100;
  }
  function shiftingPowerCooldown(config = DEFAULTS) {
    return (config.talentEffects?.shiftingCooldown ?? 8) - (config.howlingIdol ? 1 : 0) - (config.tier1Feral5pc ? 1.1 : 0);
  }
  const knowsShift = c => c.talentEffects?.shiftingKnown !== false;
  const knowsBerserk = c => c.talentEffects?.berserkKnown !== false;
  // Idol of Ferocity (Forever items.go / 27851): Rake -2, not Classic's -3.
  // Shared by casting, refresh planning, and free-GCD/shift forecasts.
  const abilityCost = (c, id) => id === 'rake' ? Math.max(0, (c.talentEffects?.rakeCost ?? 35) - (c.gearIdol === 22397 ? 2 : 0)) : id === 'shred' ? (c.talentEffects?.shredCost ?? 42) : id === 'rip' ? 30 : 35;
  function shiftingPowerEnergy(config = DEFAULTS) { return config.wolfsheadHelm ? 60 : 40; }
  function canAffordShiftingPower(s) {
    return knowsShift(s.config) && s.mana + 1e-9 >= shiftingPowerCost(s.config);
  }
  function castShiftingPower(s) {
    if (!knowsShift(s.config)) return false;
    // Forever assumption: Shifting Power neither benefits from nor consumes
    // Clearcasting. Natural Shapeshifter reduces its mana cost, not its FSR reset.
    const cost = shiftingPowerCost(s.config), before = snapshot(s);
    if (!spendMana(s, cost)) return false;
    const cooldown = shiftingPowerCooldown(s.config);
    recordCast(s, 'shiftingPower'); s.cooldowns.shiftingPower = eventTime(s.time + cooldown);
    fulfillClip(s, 'shift');
    const energy = gainEnergy(s, shiftingPowerEnergy(s.config), 'shifting');
    addLog(s, 'Shifting Power', before, `Mana -${fmt(cost)} · Energy +${fmt(energy.gained)}${energy.wasted ? ` · ${fmt(energy.wasted)} wasted` : ''} · Cooldown ${cooldown.toFixed(1)}s`);
    return true;
  }
  function activateBerserk(s) {
    s.berserkExpires = s.time + 15; s.cooldowns.berserk = s.time + 180;
  }
  function offGcdBerserkReady(s) {
    return knowsBerserk(s.config) && !s.config.berserkGCD && s.cooldowns.berserk <= s.time + 1e-9 && s.time < s.config.duration - 1e-9;
  }
  function castBerserk(s) {
    if (!knowsBerserk(s.config)) return false;
    const before = snapshot(s); recordCast(s, 'berserk', s.config.berserkGCD);
    activateBerserk(s);
    addLog(s, 'Berserk', before, `${s.time < 0 ? 'Pre-pull · ' : ''}Applied for 15.0s${s.config.berserkGCD ? '' : ' · off GCD'}`); return true;
  }
  function castFaerieFire(s) {
    const before = snapshot(s); recordCast(s, 'faerieFire'); s.cooldowns.faerieFire = s.time + 6;
    const damageHit = s.damage ? s.damage.faerieFire(s.time) : null;
    addLog(s, 'Faerie Fire', before, `${s.time < 0 ? 'Pre-pull' : 'Free GCD filler'} · Cooldown 6.0s${damageHit === null ? '' : damageHit ? ' · Damage model: landed, −505 armor for 40s' : ' · Damage model: missed'}`); return true;
  }

  function canShredWithoutBreakingRefresh(s) {
    if (!teaSuppressedProjections.has(s)) return projectShredRefresh(s);
    const cache = teaForecastCache(s.config).rotation;
    const key = 'refresh|' + teaForecastKey(s, s.config.duration, false);
    if (!cache.has(key)) cache.set(key, projectShredRefresh(s));
    return cache.get(key);
  }
  function projectShredRefresh(s) {
    if (s.energy + 1e-9 < energyCost(s, abilityCost(s.config, 'shred'))) return false;
    const mandatory = [];
    const guaranteedBonusCP = s.config.bloodFrenzy === 100 && (s.config.crit === 100 || s.time < s.berserkExpires - 1e-9) ? 1 : 0;
    const ripNeeded = s.combo + 1 + guaranteedBonusCP >= s.config.ripMinCP;
    const upcoming = at => at > s.time + 1e-9 && at <= s.time + 4 + 1e-9 && at < s.config.duration - 1e-9;
    const fallbackRake = s.config.rakeMode === 'ripDown';
    // Fallback Rake is not due until both bleeds expire. If this lookahead
    // already protects a Rip refresh, do not also reserve a redundant Rake.
    const rakeAt = fallbackRake ? Math.max(s.rakeExpires, s.ripExpires) : s.rakeExpires;
    const rakeNeeded = !fallbackRake || !(ripNeeded && upcoming(s.ripExpires));
    // Only protect refreshes this fight can actually reach. Rip goes first
    // when both are due, matching the live rotation's priority.
    for (const [id, at, cost, needed] of [['rip', s.ripExpires, 30, ripNeeded], ['rake', rakeAt, abilityCost(s.config, 'rake'), rakeNeeded]]) {
      if (needed && upcoming(at)) mandatory.push({ id, at, cost });
    }
    if (!mandatory.length) return true;
    // Compare against pooling, rather than rejecting an unavoidable overlap
    // between refreshes that already cannot both fit on the GCD.
    const pooled = projectRefreshes(s, mandatory, false);
    const shredded = projectRefreshes(s, mandatory, true);
    return mandatory.every(need => shredded[need.id] <= pooled[need.id] + 1e-9);
  }

  // Private forecast context, never part of a configuration or saved result.
  // Descendant projections must inherit it so comparing Tea cannot recursively
  // ask whether Tea itself should be used.
  const teaSuppressedProjections = new WeakSet();
  const teaForecastCaches = new WeakMap();
  const rotationProjections = new WeakSet(), clipSelections = new WeakMap();
  function policyProjection(s) {
    // Deliberately omit RNG, counters, and logs from the projection.
    const projected = { config: s.config, time: s.time, energy: s.energy, mana: s.mana, combo: s.combo,
      gcdUntil: s.gcdUntil, rakeExpires: s.rakeExpires, ripExpires: s.ripExpires, ripCP: s.ripCP,
      berserkExpires: s.berserkExpires, clearcastingExpires: s.clearcastingExpires,
      lastManaSpend: s.lastManaSpend, cooldowns: { ...s.cooldowns }, potionsUsed: s.potionsUsed,
      nextEnergyTick: s.nextEnergyTick, nextManaTick: s.nextManaTick,
      nextWisdomTick: s.nextWisdomTick, nextSpringTick: s.nextSpringTick, nextTideTick: s.nextTideTick, tideTick: s.tideTick, projectedEnergyWaste: 0 };
    if (teaSuppressedProjections.has(s)) teaSuppressedProjections.add(projected);
    rotationProjections.add(projected);
    return projected;
  }
  function projectedOffGcd(s) {
    // Forecast guaranteed resources only. Never roll RNG or mutate combat
    // counters/logs. A potion is credited only its guaranteed minimum roll.
    if (offGcdBerserkReady(s)) activateBerserk(s);
    const potion = potionChoice(s);
    if (potion) {
      if (potion === 'mana') s.mana = Math.min(s.config.startingMana, s.mana + 1350);
      s.cooldowns.potion = s.time + 120;
      s.potionsUsed++;
    }
    if (shouldTea(s)) projectTea(s);
  }
  function advanceProjection(s, end) {
    const future = time => time > s.time + 1e-9 ? time : Infinity;
    // With Tea suppressed there is no energy-dependent off-GCD decision.
    // Batch energy ticks during a GCD, still stopping at every other event.
    const energyAt = teaSuppressedProjections.has(s) && s.gcdUntil > s.time + 1e-9
      ? Math.max(s.nextEnergyTick, s.gcdUntil) : s.nextEnergyTick;
    const next = Math.min(end, future(energyAt), future(s.nextManaTick),
      s.config.blessingWisdom ? future(s.nextWisdomTick) : Infinity,
      s.config.manaSpring ? future(s.nextSpringTick) : Infinity,
      s.config.manaTide ? future(s.nextTideTick) : Infinity,
      future(s.gcdUntil), future(s.cooldowns.shiftingPower), future(s.cooldowns.berserk), future(s.cooldowns.potion),
      teaSuppressedProjections.has(s) ? Infinity : future(s.cooldowns.tea),
      future(s.rakeExpires), future(s.ripExpires), future(s.berserkExpires), future(s.clearcastingExpires));
    const nextTime = eventTime(next);
    if (nextTime <= s.time + 1e-9) return false;
    s.time = nextTime;
    const energyTicks = Math.max(0, Math.floor((s.time - s.nextEnergyTick) * 10 + 1e-9) + 1);
    if (energyTicks) { s.projectedEnergyWaste += Math.max(0, s.energy + energyTicks - 100); s.energy = Math.min(100, s.energy + energyTicks); s.nextEnergyTick = roundTime(s.nextEnergyTick + energyTicks / 10); }
    if (Math.abs(s.time - s.nextManaTick) < 1e-9) { s.mana = Math.min(s.config.startingMana, s.mana + spiritManaPerTick(s) + (s.config.gearMP5 || 0) * 2 / 5); s.nextManaTick += 2; }
    if (s.config.blessingWisdom && Math.abs(s.time - s.nextWisdomTick) < 1e-9) { s.mana = Math.min(s.config.startingMana, s.mana + 40); s.nextWisdomTick += 5; }
    if (s.config.manaSpring && Math.abs(s.time - s.nextSpringTick) < 1e-9) { s.mana = Math.min(s.config.startingMana, s.mana + springAmount(s.config)); s.nextSpringTick += MANA_SPRING_INTERVAL; }
    if (s.config.manaTide && Math.abs(s.time - s.nextTideTick) < 1e-9) { s.mana = Math.min(s.config.startingMana, s.mana + 290); advanceTide(s); }
    return true;
  }
  function projectRefreshes(state, needs, withShred) {
    const s = policyProjection(state), completed = Object.fromEntries(needs.map(need => [need.id, Infinity]));
    let remaining = needs.length;
    if (withShred) {
      s.energy -= energyCost(s, abilityCost(s.config, 'shred')); s.gcdUntil = s.time + 1;
      s.clearcastingExpires = -Infinity;
    }
    const end = Math.min(s.config.duration, Math.max(...needs.map(need => need.at)) + 4);
    // The pooling comparison only plans these refreshes, not hypothetical
    // extra builders. Give automatic shift timing the same alternative plan.
    const refreshAction = p => {
      if (knowsBerserk(p.config) && p.config.berserkGCD && p.cooldowns.berserk <= p.time + 1e-9) return 'berserk';
      return needs.find(item => completed[item.id] === Infinity && item.at <= p.time + 1e-9
        && p[`${item.id}Expires`] <= item.at + 1e-9 && p.energy + 1e-9 >= energyCost(p, item.cost))?.id || null;
    };
    while (s.time < s.config.duration - 1e-9) {
      projectedOffGcd(s);
      if (s.gcdUntil <= s.time + 1e-9) {
        if (s.cooldowns.shiftingPower <= s.time + 1e-9 && canAffordShiftingPower(s) && shiftEnergyEligible(s, false, refreshAction)) {
          s.mana -= shiftingPowerCost(s.config); s.lastManaSpend = s.time;
          s.energy = Math.min(100, s.energy + shiftingPowerEnergy(s.config));
          s.gcdUntil = s.time + 1; s.cooldowns.shiftingPower = eventTime(s.time + shiftingPowerCooldown(s.config));
        } else if (!shouldWaitForShiftingPower(s, false, refreshAction)) {
          if (knowsBerserk(s.config) && s.config.berserkGCD && s.cooldowns.berserk <= s.time + 1e-9) {
            activateBerserk(s); s.gcdUntil = s.time + 1;
          } else {
            const need = needs.find(item => completed[item.id] === Infinity && item.at <= s.time + 1e-9 && s.energy + 1e-9 >= energyCost(s, item.cost));
            if (need) {
              s.energy -= energyCost(s, need.cost); s.clearcastingExpires = -Infinity;
              s.gcdUntil = s.time + 1; completed[need.id] = s.time; remaining--;
            }
          }
        }
        projectedOffGcd(s);
      }
      if (!remaining || !advanceProjection(s, end)) break;
    }
    return completed;
  }

  function hasFreeFaerieFireGlobal(state) {
    const s = policyProjection(state), end = Math.min(s.time + 1, s.config.duration);
    // Exactly one second is safe. Predict known ticks, auras, cooldowns, and
    // off-GCD resources, but never peek at future Omen/JoW/Windfury RNG.
    while (s.time < end - 1e-9) {
      projectedOffGcd(s);
      // Treat any affordable Shred as a potential priority action, even if
      // refresh pooling might still block it. This keeps filler conservative
      // and avoids recursively running the refresh planner for every tick.
      if (choosePriorityAction(s, false, false)) return false;
      if (!advanceProjection(s, end)) break;
    }
    return true;
  }

  function projectedNonShiftCast(s, action) {
    s.gcdUntil = eventTime(s.time + 1);
    if (action === 'berserk') { activateBerserk(s); return; }
    if (action === 'faerieFire') { s.cooldowns.faerieFire = s.time + 6; return; }
    s.energy -= energyCost(s, abilityCost(s.config, action));
    s.clearcastingExpires = -Infinity;
    // Deterministic lookahead: assume attacks land, credit only guaranteed
    // bonus CP, and never roll or predict new Omen/JoW/Windfury procs.
    if (action === 'rake' || action === 'shred') {
      const bonus = s.config.bloodFrenzy === 100 && (s.config.crit === 100 || s.time < s.berserkExpires - 1e-9) ? 1 : 0;
      s.combo = Math.min(5, s.combo + 1 + bonus);
      if (action === 'rake') s.rakeExpires = s.time + 9;
    } else {
      if (action === 'rip') { s.ripCP = s.combo; s.ripExpires = s.time + RIP_DURATION; }
      else s.energy = 0;
      s.combo = 0;
    }
  }
  function projectedShift(s) {
    s.mana -= shiftingPowerCost(s.config); s.lastManaSpend = s.time;
    const gain = shiftingPowerEnergy(s.config);
    s.projectedEnergyWaste += Math.max(0, s.energy + gain - 100);
    s.energy = Math.min(100, s.energy + gain);
    s.gcdUntil = eventTime(s.time + 1);
    s.cooldowns.shiftingPower = eventTime(s.time + shiftingPowerCooldown(s.config));
  }
  function shiftGcdOverflow(s) {
    // Include ticks through GCD completion: live regeneration happens before
    // the next cast, so energy capped during this lockout is also lost.
    const end = Math.min(s.time + 1, s.config.duration);
    const ticks = Math.max(0, Math.floor((end - s.nextEnergyTick) * 10 + 1e-9) + 1);
    return Math.max(0, s.energy + shiftingPowerEnergy(s.config) + ticks - 100);
  }
  function compareShiftTiming(state, checkShredRefresh = true, alternative) {
    if (!teaSuppressedProjections.has(state) || alternative) return projectShiftTiming(state, checkShredRefresh, alternative);
    const cache = teaForecastCache(state.config).rotation;
    const key = 'shift|' + Number(checkShredRefresh) + '|' + teaForecastKey(state, state.config.duration, false);
    if (!cache.has(key)) cache.set(key, projectShiftTiming(state, checkShredRefresh));
    return cache.get(key);
  }
  function projectShiftTiming(state, checkShredRefresh = true, alternative) {
    if (!knowsShift(state.config)) return { useNow: false, reason: 'not-learned' };
    // Local opportunity-cost heuristic, not a full rotation/CPM optimizer.
    // Shift unless a reachable non-shift plan loses less total energy:
    //   waiting cap loss + later Shift/GCD overflow + delay * gain / cooldown.
    // Re-evaluate after every real event instead of committing to the forecast.
    const readyAt = Math.max(state.time, state.cooldowns.shiftingPower), end = state.config.duration;
    if (readyAt >= end - 1e-9) return { useNow: false, reason: 'fight-end' };
    const now = policyProjection(state);
    projectedOffGcd(now);
    while (now.time < readyAt - 1e-9) {
      if (!advanceProjection(now, readyAt)) break;
      projectedOffGcd(now);
    }
    // No useful energy is gained at the cap; don't spend mana/GCD to gain zero.
    if (now.energy >= 100 - 1e-9) return { useNow: false, reason: 'energy-full' };
    const nowLoss = now.projectedEnergyWaste + shiftGcdOverflow(now);
    const result = { useNow: true, nowLoss, delay: 0, delayLoss: nowLoss, overflowLater: shiftGcdOverflow(now) };
    if (nowLoss <= 1e-9) return result; // No delayed plan can beat zero loss.
    const gainRate = shiftingPowerEnergy(state.config) / shiftingPowerCooldown(state.config) * state.config.shiftDelayPenalty;
    // Once delay alone costs as much as shifting now, later plans cannot win.
    const horizon = eventTime(Math.min(end, readyAt + nowLoss / gainRate));
    const later = policyProjection(state);
    while (later.time < end - 1e-9) {
      projectedOffGcd(later);
      if (later.gcdUntil <= later.time + 1e-9) {
        const delay = later.time - readyAt;
        if (delay > 1e-9 && later.energy < 100 - 1e-9) {
          const overflowLater = later.projectedEnergyWaste + shiftGcdOverflow(later);
          const delayLoss = delay * gainRate + overflowLater;
          if (delayLoss < nowLoss - 1e-9) return { useNow: false, nowLoss, delay, delayLoss, overflowLater };
        }
        const action = alternative ? alternative(later)
          : chooseNonShiftAction(later, checkShredRefresh && later.time === state.time);
        if (action) { projectedNonShiftCast(later, action); projectedOffGcd(later); }
      }
      if (later.projectedEnergyWaste + Math.max(0, later.time - readyAt) * gainRate >= nowLoss - 1e-9
        || !advanceProjection(later, horizon)) break;
    }
    return result; // Ties favor keeping Shift on cooldown.
  }
  function shiftEnergyEligible(s, checkShredRefresh = true, alternative) {
    if (!knowsShift(s.config)) return false;
    return s.config.shiftingMode === 'manual' ? s.energy <= s.config.shiftingThreshold
      : compareShiftTiming(s, checkShredRefresh, alternative).useNow;
  }
  function shouldWaitForShiftingPower(s, checkShredRefresh = true, alternative) {
    const readyAt = s.cooldowns.shiftingPower, wait = readyAt - s.time;
    // Other abilities use a 1s GCD. Reserve it only if it would overlap an
    // affordable shift before combat ends, and the selected timing rule
    // favors taking that upcoming shift instead of starting another GCD.
    if (wait <= 1e-9 || wait >= 1 - 1e-9 || readyAt >= s.config.duration - 1e-9 || !canAffordShiftingPower(s)) return false;
    if (s.config.shiftingMode === 'automatic') return compareShiftTiming(s, checkShredRefresh, alternative).useNow;
    const energyTicks = Math.max(0, Math.floor((readyAt - s.nextEnergyTick) * 10 + 1e-9) + 1);
    const projectedEnergy = Math.min(100, s.energy + energyTicks);
    return projectedEnergy <= s.config.shiftingThreshold;
  }

  function choosePriorityAction(s, recordOom = true, checkShredRefresh = true) {
    if (s.cooldowns.shiftingPower <= s.time + 1e-9 && shiftEnergyEligible(s, checkShredRefresh)) {
      if (canAffordShiftingPower(s)) return 'shiftingPower';
      if (recordOom && s.oomTime === null) s.oomTime = s.time;
    }
    // Re-evaluate every event while waiting. Tea's energy-loss comparison
    // and actual resource changes can both change this reservation.
    if (shouldWaitForShiftingPower(s, checkShredRefresh)) return null;
    return chooseNonShiftAction(s, checkShredRefresh);
  }
  function chooseNonShiftAction(s, checkShredRefresh = true) {
    const c = s.config;
    if (knowsBerserk(c) && c.berserkGCD && s.cooldowns.berserk <= s.time + 1e-9) return 'berserk';
    const biteReady = s.combo >= c.biteMinCP && s.energy >= energyCost(s, 35) && s.energy <= c.biteMaxEnergy;
    // A new Rip cannot run its full duration in this window. Prefer an
    // eligible Bite even with no active Rip, in either Berserk state. Keep
    // normal Rip priority at exactly one full duration remaining, and keep
    // Rip as a fallback if Bite's CP/energy gates are not met.
    if (biteReady && c.duration - s.time < RIP_DURATION - 1e-9) return 'bite';
    if (s.combo >= c.ripMinCP && s.ripExpires <= s.time + 1e-9 && s.energy >= energyCost(s, 30)) return 'rip';
    if (s.rakeExpires <= s.time + 1e-9 && (c.rakeMode !== 'ripDown' || s.ripExpires <= s.time + 1e-9)
      && s.energy >= energyCost(s, abilityCost(c, 'rake'))) return 'rake';
    const ripRemaining = Math.max(0, s.ripExpires - s.time);
    const biteSafety = s.time < s.berserkExpires - 1e-9 ? c.biteRipBerserk : c.biteRipOutside;
    if (biteReady && ripRemaining >= biteSafety) return 'bite';
    if (s.energy >= energyCost(s, abilityCost(c, 'shred')) && (!checkShredRefresh || canShredWithoutBreakingRefresh(s))) return 'shred';
    return null;
  }
  function chooseAction(s, recordOom = true) {
    clipSelections.delete(s);
    const action = choosePriorityAction(s, recordOom);
    if (action) return action;
    const clip = selectClip(s);
    if (clip) { clipSelections.set(s, clip); return clip.bleed; }
    if (s.config.faerieFire && s.cooldowns.faerieFire <= s.time + 1e-9 && hasFreeFaerieFireGlobal(s)) return 'faerieFire';
    return null;
  }

  function selectClip(s) {
    if (rotationProjections.has(s) || !rotation.RULES.some(r => s.config[r.prefix])
      || s.gcdUntil > s.time + 1e-9 || clearcastingActive(s)
      || shouldWaitForShiftingPower(s) || shouldTea(s)) return null;
    for (const rule of rotation.RULES) {
      if (!s.config[rule.prefix]) continue;
      const remaining = s[rule.bleed + 'Expires'] - s.time;
      // Ticks due at this timestamp are already flushed; within one interval
      // of expiration means exactly the final tick remains. No pandemic carry.
      if (remaining <= 1e-9 || remaining > rule.interval + 1e-9 || remaining > s.config[rule.prefix + 'Remaining'] + 1e-9
        || s.time + rule.interval > s.config.duration + 1e-9) continue;
      if (rule.bleed === 'rip' && (s.combo < s.config.ripMinCP || s.combo < s.ripCP)) continue;
      if (rule.bleed === 'rake' && s.config.rakeMode === 'ripDown' && s.ripExpires > s.time + 1e-9) continue;
      const cost = energyCost(s, abilityCost(s.config, rule.bleed));
      if (cost <= 0 || s.energy + 1e-9 < cost) continue;
      const at = eventTime(s.time + (rule.resource === 'shift' ? 1 : 0));
      if (at >= s.config.duration - 1e-9) continue;
      if (rule.resource === 'shift' && (!canAffordShiftingPower(s) || s.cooldowns.shiftingPower > at + 1e-9)) continue;
      const after = policyProjection(s), waiting = policyProjection(s);
      projectedNonShiftCast(after, rule.bleed);
      if (rule.resource === 'shift') {
        projectedOffGcd(after);
        while (after.time < at - 1e-9) { if (!advanceProjection(after, at)) break; projectedOffGcd(after); }
        while (waiting.time < at - 1e-9) if (!advanceProjection(waiting, at)) break;
        if (!canAffordShiftingPower(after) || !shiftEnergyEligible(after)) continue;
      } else if (!teaEligible(after) || !shouldTea(after)) continue;
      if (after.energy > s.config[rule.prefix + 'Energy'] + 1e-9) continue;
      const waste = p => p.projectedEnergyWaste + (rule.resource === 'shift' ? shiftGcdOverflow(p) : p.energy);
      const relief = waste(waiting) - waste(after);
      if (relief <= 1e-9) continue;
      return { rule: rule.id, bleed: rule.bleed, resource: rule.resource, time: s.time, followupAt: at,
        resourceReadyAt: s.cooldowns[rule.resource === 'shift' ? 'shiftingPower' : 'tea'],
        remaining, energyBeforeResource: after.energy, capRelief: relief,
        foregoneTickDamage: s.damage?.foregoneTick(rule.bleed, s) ?? null };
    }
    return null;
  }
  function fulfillClip(s, resource) {
    for (const event of s.clipEvents) if (event.overwrite && !event.fulfilled && event.resource === resource
      && Math.abs(event.followupAt - s.time) < 1e-9) {
      event.fulfilled = true; event.resourceDelay = Math.max(0, s.time - event.resourceReadyAt);
      event.onCooldown = event.resourceDelay < 1e-9;
    }
  }
  function clipDiagnostics(s) {
    return Object.fromEntries(rotation.RULES.map(r => {
      const events = s.clipEvents.filter(e => e.rule === r.id), overwritten = events.filter(e => e.overwrite);
      return [r.id, { attempts: events.length, overwrites: overwritten.length,
        fulfilled: events.filter(e => e.fulfilled).length, ticks: overwritten.length,
        onCooldown: events.filter(e => e.onCooldown).length,
        foregoneTickDamage: s.config.damageEnabled ? overwritten.reduce((n, e) => n + (e.foregoneTickDamage || 0), 0) : null }];
    }));
  }

  function shouldManaPotion(s) {
    if (!s.config.usePotions) return false;
    if (s.cooldowns.potion > s.time + 1e-9 || s.config.startingMana - s.mana < 1350) return false;
    if (s.config.potionPolicy === 'full') return s.config.startingMana - s.mana >= 2250;
    const remaining = s.config.duration - s.time;
    const canGainExtraUse = remaining >= 120 && s.time + 120 < s.config.duration;
    return s.config.startingMana - s.mana >= 2250 || !canAffordShiftingPower(s) || (canGainExtraUse && s.mana + 1e-9 < 2 * shiftingPowerCost(s.config));
  }
  function potionChoice(s) {
    if (!s.config.usePotions || s.cooldowns.potion > s.time + 1e-9) return null;
    const strategy = s.config.potionStrategy;
    if (s.time < s.config.duration - 1e-9 && (strategy === 'rage' || (strategy === 'openerRage' && !s.potionsUsed)
      || (strategy === 'adaptive' && s.config.startingMana > 0 && s.mana / s.config.startingMana * 100 >= s.config.potionManaReserve - 1e-9))) return 'rage';
    // Rage-only never falls through to a mana potion at the fight boundary.
    return strategy !== 'rage' && shouldManaPotion(s) ? 'mana' : null;
  }
  const shouldPotion = s => Boolean(potionChoice(s));
  function usePotion(s, kind = 'mana') {
    const before = snapshot(s);
    s.cooldowns.potion = s.time + 120; s.potionsUsed++;
    if (kind === 'rage') {
      s.mightyRageExpires = s.time + 20; s.mightyRage.uses++; s.mightyRage.timestamps.push(eventTime(s.time));
      s.damage?.mightyRage(s.time, s.mightyRage.bonusAP);
      const reason = s.config.potionStrategy === 'openerRage' ? 'opener; mana thereafter'
        : s.config.potionStrategy === 'adaptive' ? `mana at/above ${fmt(s.config.potionManaReserve)}% reserve` : 'Mighty Rage on cooldown';
      s.potionSequence.push({ time: eventTime(s.time), kind, manaBefore: before.mana, manaAfter: s.mana, reason });
      addLog(s, 'Mighty Rage Potion', before, `+60 Strength · +${fmt(s.mightyRage.bonusAP)} AP for 20s · ${reason} · off GCD · shared potion CD 120s; no Cat energy`);
      return;
    }
    const rolled = 1350 + s.rng() * 900, mana = gainMana(s, rolled, 'potion');
    s.potion.uses++; s.potion.rolled += rolled;
    s.potion.gained += mana.gained; s.potion.waste += mana.wasted; s.potion.timestamps.push(eventTime(s.time));
    s.potionSequence.push({ time: eventTime(s.time), kind, manaBefore: before.mana, manaAfter: s.mana,
      reason: s.config.potionStrategy === 'adaptive' ? `below ${fmt(s.config.potionManaReserve)}% reserve; mana policy eligible` : 'mana policy eligible' });
    addLog(s, 'Major Mana Potion', before, `Rolled ${fmt(rolled)} · Mana +${fmt(mana.gained)}${mana.wasted ? ` · ${fmt(mana.wasted)} wasted` : ''}`);
  }
  function projectTea(s) {
    s.projectedEnergyWaste += s.energy;
    s.energy = 100; s.cooldowns.tea = s.time + TEA_COOLDOWN;
  }
  function teaForecastCache(c) {
    // Per-configuration, bounded and private. Include every rotation/resource
    // input used by these forecasts, so even in-place test edits invalidate it.
    const signature = JSON.stringify([c.duration, c.startingMana, c.spirit, c.spiritMode, c.divineSpirit,
      c.reflection, c.gearMP5, c.blessingWisdom, c.manaSpring, c.manaSpringImproved, c.manaTide,
      c.usePotions, c.potionPolicy, c.potionStrategy, c.potionManaReserve, c.teaPolicy, c.teaTiming, c.teaMaxEnergy, c.teaDelayPenalty, c.shiftDelayPenalty, c.berserkGCD, c.faerieFire,
      c.rakeMode, c.ripMinCP, c.biteMinCP, c.biteMaxEnergy, c.biteRipOutside, c.biteRipBerserk,
      c.bloodFrenzy, c.crit, c.shiftingMode, c.shiftingThreshold, knowsShift(c), knowsBerserk(c),
      shiftingPowerCost(c), shiftingPowerCooldown(c), shiftingPowerEnergy(c), abilityCost(c, 'rake'), abilityCost(c, 'shred')]);
    let cache = teaForecastCaches.get(c);
    if (!cache || cache.signature !== signature) {
      cache = { signature, paths: new Map(), decisions: new Map(), rotation: new Map() }; teaForecastCaches.set(c, cache);
    }
    if (cache.paths.size > 4096) cache.paths.clear();
    if (cache.decisions.size > 4096) cache.decisions.clear();
    if (cache.rotation.size > 4096) cache.rotation.clear();
    return cache;
  }
  function teaForecastKey(s, stop, untilSpend) {
    // Tea is suppressed, so its cooldown cannot affect a branch. Omitting it
    // lets repeated probes share the same deterministic suffix after refilling.
    return [stop, Number(untilSpend), s.time, s.energy, s.mana, s.combo, s.gcdUntil,
      s.rakeExpires, s.ripExpires, s.berserkExpires, s.clearcastingExpires, s.lastManaSpend,
      s.cooldowns.shiftingPower, s.cooldowns.berserk, s.cooldowns.faerieFire, s.cooldowns.potion,
      s.potionsUsed, s.nextEnergyTick, s.nextManaTick, s.nextWisdomTick, s.nextSpringTick, s.nextTideTick, s.tideTick].join('|');
  }
  function forecastTeaBranch(state, end = state.config.duration, teaNow = false, untilSpend = false) {
    const s = policyProjection(state);
    teaSuppressedProjections.add(s);
    if (teaNow) projectTea(s);
    const stop = Math.min(end, s.config.duration);
    const cache = teaForecastCache(s.config).paths, visited = [];
    const finish = result => {
      if (cache.size + visited.length > 4096) cache.clear();
      for (const [key, overflow] of visited.slice(-4096)) cache.set(key, { at: result.at, overflow: result.overflow - overflow });
      return result;
    };
    while (s.time < s.config.duration - 1e-9 && s.time <= stop + 1e-9) {
      const key = teaForecastKey(s, stop, untilSpend), known = cache.get(key);
      if (known) return finish({ at: known.at, overflow: s.projectedEnergyWaste + known.overflow });
      visited.push([key, s.projectedEnergyWaste]);
      projectedOffGcd(s);
      if (s.gcdUntil <= s.time + 1e-9) {
        const action = chooseAction(s, false);
        if (action === 'shiftingPower') return finish({ at: s.time, overflow: s.projectedEnergyWaste + shiftGcdOverflow(s) });
        const energy = s.energy;
        if (action) projectedNonShiftCast(s, action);
        projectedOffGcd(s);
        if (untilSpend && s.energy < energy - 1e-9) break;
      }
      if (!advanceProjection(s, stop)) break;
    }
    return finish({ at: Infinity, overflow: s.projectedEnergyWaste });
  }
  function nextShiftWithoutFurtherTea(state, end = state.config.duration, teaNow = false) {
    if (!knowsShift(state.config) || state.cooldowns.shiftingPower >= state.config.duration - 1e-9) return Infinity;
    return forecastTeaBranch(state, end, teaNow).at;
  }
  function teaEligible(s) {
    return s.config.teaPolicy !== 'disabled' && s.cooldowns.tea <= s.time + 1e-9
      && s.time < s.config.duration - 1e-9 && s.energy < 100 - 1e-9
      && (s.config.teaPolicy === 'any' || s.time < s.berserkExpires - 1e-9);
  }
  function teaTimingLoss(s, withoutTeaAt = nextShiftWithoutFurtherTea(s)) {
    // Cap loss includes Tea, ticks while locked/pooling, and the next Shift's
    // GCD. Without a reachable Shift, stop at the first energy spend instead.
    const branch = forecastTeaBranch(s, s.config.duration, true, !Number.isFinite(withoutTeaAt));
    const shiftDelay = Number.isFinite(withoutTeaAt)
      ? Math.max(0, Math.min(branch.at, s.config.duration) - withoutTeaAt) : 0;
    const shiftLoss = shiftDelay * shiftingPowerEnergy(s.config) / shiftingPowerCooldown(s.config) * s.config.shiftDelayPenalty;
    return { withoutTeaAt, withTeaAt: branch.at, overflow: branch.overflow, shiftDelay, shiftLoss,
      loss: branch.overflow + shiftLoss };
  }
  function cheaperTeaPlan(state, nowLoss, referenceAt, end = state.config.duration) {
    const rate = TEA_ENERGY / TEA_COOLDOWN * state.config.teaDelayPenalty;
    if (nowLoss <= 1e-9) return null;
    const later = policyProjection(state);
    teaSuppressedProjections.add(later);
    let horizon = Math.min(end, state.config.duration, state.time + nowLoss / rate);
    // If the next Berserk cannot start inside the cost bound, time after the
    // current window contains no eligible Tea candidate. Do not replay it.
    if (state.config.teaPolicy !== 'any' && (!knowsBerserk(state.config)
      || state.cooldowns.berserk >= horizon - 1e-9)) horizon = Math.min(horizon, state.berserkExpires);
    while (later.time < state.config.duration - 1e-9) {
      projectedOffGcd(later);
      const check = () => {
        if (!teaEligible(later)) return null;
        const delay = later.time - state.time;
        const waitLoss = delay * rate + later.projectedEnergyWaste;
        // Immediate Tea overflow is a lower bound; avoid expensive forecasts
        // for candidates that cannot beat now even with no Shift delay.
        if (waitLoss + later.energy >= nowLoss - 1e-9) return null;
        if (referenceAt === undefined || referenceAt < later.time - 1e-9) referenceAt = nextShiftWithoutFurtherTea(later);
        const candidate = teaTimingLoss(later, referenceAt), delayLoss = waitLoss + candidate.loss;
        return delayLoss < nowLoss - 1e-9
          ? { delay, delayLoss, teaDelayLoss: delay * rate,
            waitingOverflow: later.projectedEnergyWaste, later: candidate } : null;
      };
      const beforeCast = check(); if (beforeCast) return beforeCast;
      if (later.gcdUntil <= later.time + 1e-9) {
        const action = chooseAction(later, false);
        if (action === 'shiftingPower') { projectedShift(later); referenceAt = -Infinity; }
        else if (action) projectedNonShiftCast(later, action);
        projectedOffGcd(later);
        const afterCast = check(); if (afterCast) return afterCast;
      }
      if (later.time >= horizon - 1e-9
        || later.projectedEnergyWaste + (later.time - state.time) * rate >= nowLoss - 1e-9
        || !advanceProjection(later, horizon)) break;
    }
    return null;
  }
  function compareTeaTiming(state) {
    // Same local opportunity-cost framing as Shift: use now unless a
    // reachable later use loses less. Past cooldown drift is common to both
    // choices; charge only additional waiting, at 100 / 300 energy per second.
    const now = teaTimingLoss(state);
    const result = { useNow: true, ...now, nowLoss: now.loss, delay: 0, delayLoss: now.loss };
    const better = cheaperTeaPlan(state, now.loss, now.withoutTeaAt);
    if (better) return { ...result, ...better, useNow: false };
    return result; // Ties use Tea now; do not indefinitely bank its cooldown.
  }
  function shouldTea(s) {
    if (teaSuppressedProjections.has(s) || !teaEligible(s)) return false;
    if (s.config.teaTiming !== 'loss') {
      if (s.energy > s.config.teaMaxEnergy + 1e-9) return false;
      if (s.config.teaTiming === 'threshold') return true;
      const reference = nextShiftWithoutFurtherTea(s);
      return !Number.isFinite(reference) || nextShiftWithoutFurtherTea(s, reference, true) <= reference + 1e-9;
    }
    const cache = teaForecastCache(s.config).decisions;
    const key = teaForecastKey(s, s.config.duration, false) + '|' + s.cooldowns.tea;
    if (cache.has(key)) return cache.get(key);
    // A nearby spend can often prove holding cheaper than Tea's immediate
    // overflow alone. This is only a fast rejection: all other cases still
    // run the complete cost-bounded comparison, not a fixed hold window.
    const useNow = s.energy >= 20 && cheaperTeaPlan(s, s.energy, undefined, s.time + 2)
      ? false : compareTeaTiming(s).useNow;
    cache.set(key, useNow);
    return useNow;
  }
  function useTea(s) {
    const before = snapshot(s), energy = gainEnergy(s, TEA_ENERGY, 'tea'); s.cooldowns.tea = s.time + TEA_COOLDOWN;
    s.tea.uses++; s.tea.gained += energy.gained; s.tea.waste += energy.wasted; s.tea.timestamps.push(eventTime(s.time));
    fulfillClip(s, 'tea');
    addLog(s, 'Thistle Tea', before, `Energy +${fmt(energy.gained)}${energy.wasted ? ` · ${fmt(energy.wasted)} wasted` : ''} · off GCD`);
  }

  function spiritManaPerTick(s) {
    const spirit = s.config.spirit + (s.config.spiritMode !== 'total' && s.config.divineSpirit ? 40 : 0);
    const raw = 15 + spirit / 5;
    const inside = s.time - s.lastManaSpend < 5 - 1e-9;
    return raw * (inside ? talentPercent(s.config.reflection, [0, 17, 33, 50], DEFAULTS.reflection) / 100 : 1);
  }
  function processManaTick(s) {
    const inside = s.time - s.lastManaSpend < 5 - 1e-9;
    const amount = spiritManaPerTick(s);
    const before = snapshot(s), mana = gainMana(s, amount, 'spirit');
    addLog(s, 'Spirit mana tick', before, `${inside ? 'Inside' : 'Outside'} FSR · Mana +${fmt(mana.gained)}${mana.wasted ? ` · ${fmt(mana.wasted)} wasted` : ''}`);
    if (s.config.gearMP5) processPassiveMana(s, 'gear', s.config.gearMP5 * 2 / 5, 'Gear MP5');
  }
  function processPassiveMana(s, source, amount, label) {
    const before = snapshot(s), mana = gainMana(s, amount, source);
    addLog(s, label, before, `Mana +${fmt(mana.gained)}${mana.wasted ? ` · ${fmt(mana.wasted)} wasted` : ''}`);
  }
  function springAmount(c) { return MANA_SPRING_AMOUNT * (c.manaSpringImproved ? 1.25 : 1); }
  // One external top-rank totem: drop at min(40s, fight/2), four 3s ticks,
  // then the next drop 300s later. It never occupies the Cat's GCD.
  function advanceTide(s) { s.tideTick++; s.nextTideTick = eventTime(s.nextTideTick + (s.tideTick % 4 === 0 ? 291 : 3)); }
  function processAuto(s) {
    s.nextSwing = eventTime(s.time + s.config.swingTimer);
    const before = snapshot(s), attack = resolveAttack(s, false, 'auto'); s.autoattacks++;
    addLog(s, attackLabel('auto'), before, attack.result.toUpperCase());
    processWindfury(s);
  }
  function processWindfury(s) {
    if (!s.windfuryPending) return;
    s.windfuryPending = false;
    const before = snapshot(s), attack = resolveAttack(s, false, 'windfury'); s.autoattacks++;
    s.windfury.extraAttacks++; s.windfury.landed += Number(attack.success);
    addLog(s, attackLabel('windfury'), before, attack.result.toUpperCase());
  }

  function expireAuras(s, previousTime) {
    if (s.clearcastingExpires !== -Infinity && s.clearcastingExpires <= s.time + 1e-9) {
      s.clearcastingExpires = -Infinity; s.omen.expired++;
      addLog(s, 'Clearcasting expired', snapshot(s), 'Unused after 15.0s');
    }
    if (!s.debug) return;
    for (const [name, expires] of [['Rake', s.rakeExpires], ['Rip', s.ripExpires], ['Berserk', s.berserkExpires]]) {
      if (expires > previousTime + 1e-9 && expires <= s.time + 1e-9) addLog(s, `${name} expired`, snapshot(s));
    }
  }

  function executeDecision(s) {
    if (offGcdBerserkReady(s)) castBerserk(s);
    const action = chooseAction(s);
    const clip = clipSelections.get(s), oldExpires = clip ? s[clip.bleed + 'Expires'] : null;
    if (action === 'shiftingPower') castShiftingPower(s);
    else if (action === 'berserk') castBerserk(s);
    else if (action === 'rip') castFinisher(s, 'rip', 30, RIP_DURATION);
    else if (action === 'rake') castBuilder(s, 'rake', abilityCost(s.config, 'rake'), 9);
    else if (action === 'bite') castFinisher(s, 'bite', 35, 0);
    else if (action === 'faerieFire') castFaerieFire(s);
    else if (action === 'shred') castBuilder(s, 'shred', abilityCost(s.config, 'shred'), 0);
    if (clip) {
      const event = { ...clip, overwrite: s[clip.bleed + 'Expires'] > oldExpires + 1e-9, fulfilled: false };
      s.clipEvents.push(event);
      if (s.debug) {
        const entry = s.log.findLast(e => e.time === s.time && e.action === LABELS[clip.bleed]);
        if (entry) entry.detail += ` · Clip for ${clip.resource === 'shift' ? 'Shift' : 'Tea'} · ${fmt(clip.remaining)}s left · predicted cap relief ${fmt(clip.capRelief)} energy${event.overwrite ? ' · 1 tick sacrificed' : ' · avoided: old bleed retained'}`;
      }
    }
    // Off-GCD Tea rechecks the loss comparison immediately after a spend.
    if (shouldTea(s)) useTea(s);
  }

  // Observations only: no decisions, RNG draws, or forecast-state mutation.
  function biteDiagnostics(s) {
    const counts = { attempts: 0, landed: 0, ordinary: 0, terminal: 0, ordinaryLanded: 0, terminalLanded: 0,
      clearcasting: 0, berserk: 0 };
    const recovery = { observed: 0, censored: 0, onTime: 0, delayTotal: 0, gapTotal: 0 };
    let nextRipIndex = 0;
    const events = s.biteEvents.map(event => {
      counts.attempts++; counts.landed += Number(event.landed);
      counts[event.terminal ? 'terminal' : 'ordinary']++;
      if (event.landed) counts[event.terminal ? 'terminalLanded' : 'ordinaryLanded']++;
      counts.clearcasting += Number(event.clearcasting); counts.berserk += Number(event.berserk);
      if (!event.landed || event.terminal) return { ...event, recovery: null };
      while (nextRipIndex < s.ripApplications.length && s.ripApplications[nextRipIndex].time < event.time) nextRipIndex++;
      const next = s.ripApplications[nextRipIndex];
      if (!next) { recovery.censored++; return { ...event, recovery: { censored: true, nextRipAt: null } }; }
      const delay = next.time - event.time, gap = Math.max(0, next.time - event.ripExpires);
      recovery.observed++; recovery.delayTotal += delay; recovery.gapTotal += gap;
      recovery.onTime += Number(next.time <= event.ripExpires + 1e-9);
      return { ...event, recovery: { censored: false, nextRipAt: next.time, delay, gap } };
    });
    const ripDowntime = { opening: 0, maintenance: 0, terminal: 0 };
    const end = s.config.duration, firstRip = s.ripApplications[0]?.time ?? end;
    const terminalStart = Math.max(0, end - RIP_DURATION);
    const addGap = (start, stop) => {
      stop = Math.min(end, stop);
      if (stop <= start) return;
      const openingEnd = Math.min(stop, firstRip);
      ripDowntime.opening += Math.max(0, openingEnd - start);
      const afterOpening = Math.max(start, firstRip);
      ripDowntime.maintenance += Math.max(0, Math.min(stop, terminalStart) - afterOpening);
      ripDowntime.terminal += Math.max(0, stop - Math.max(afterOpening, terminalStart));
    };
    let coveredUntil = 0;
    for (const rip of s.ripApplications) {
      addGap(coveredUntil, rip.time);
      coveredUntil = Math.max(coveredUntil, Math.min(end, rip.expires));
    }
    addGap(coveredUntil, end);
    return { events, counts, energySpent: events.reduce((sum, event) => sum + event.energySpent, 0), recovery, ripDowntime };
  }

  function simulateFight(input = {}, options = {}) {
    const config = normalize(input), iteration = options.iteration || 1;
    // Offline effect-isolation benchmark only: retain the equipped helm and
    // every static stat, but suppress its energy effect. Never persisted as a
    // player setting or inferred from an imported character.
    if (options.suppressWolfsheadEffect === true) config.wolfsheadHelm = false;
    const seed = options.seed === undefined ? deriveSeed(config.seed, iteration) : options.seed >>> 0;
    config.duration = sampleFightDuration(config, seed);
    const s = createState(config, createRng(seed), Boolean(options.debug ?? config.debug));
    s.config = config;
    if (config.damageEnabled) s.damage = damage.create(config, createRng(deriveSeed(seed, 0x444d4745)), s.debug);
    // Pre-pull casts do not advance combat ticks, swings, resources, or RNG.
    // Faerie Fire's GCD ends before prezerk, or at pull for off-GCD Berserk.
    if (config.faerieFire) {
      s.time = config.berserkGCD && knowsBerserk(config) ? -2 : -1;
      castFaerieFire(s);
    }
    s.time = config.berserkGCD ? -1 : 0;
    castBerserk(s);
    s.time = 0;
    applyStartingClearcasting(s);
    if (potionChoice(s) === 'rage') usePotion(s, 'rage');
    executeDecision(s);
    while (s.time < config.duration - 1e-9) {
      const previous = s.time;
      const future = time => time > s.time + 1e-9 ? time : Infinity;
      const next = Math.min(config.duration, s.nextEnergyTick, s.nextManaTick, s.nextSwing,
        config.blessingWisdom ? s.nextWisdomTick : Infinity,
        config.manaSpring ? s.nextSpringTick : Infinity,
        config.manaTide ? s.nextTideTick : Infinity,
        future(s.gcdUntil), ...Object.values(s.cooldowns).map(future),
        ...[s.rakeExpires, s.ripExpires, s.berserkExpires, s.clearcastingExpires].map(future));
      const dt = next - s.time;
      // Flush passive damage on the existing timeline, without adding events
      // to the decision queue or changing the resource RNG stream.
      s.damage?.advance(next, s);
      s.uptime.rake += Math.max(0, Math.min(next, s.rakeExpires) - s.time);
      s.uptime.rip += Math.max(0, Math.min(next, s.ripExpires) - s.time);
      s.uptime.berserk += Math.max(0, Math.min(next, s.berserkExpires) - s.time);
      s.uptime.clearcasting += Math.max(0, Math.min(next, s.clearcastingExpires) - s.time);
      s.mightyRage.uptimeSeconds += Math.max(0, Math.min(next, s.mightyRageExpires) - s.time);
      // Energy ticks on its 0.1s grid; hasted natural swings retain precision.
      s.time = eventTime(next);
      expireAuras(s, previous);
      if (s.time >= s.nextEnergyTick - 1e-9) { gainEnergy(s, 1, 'natural'); s.nextEnergyTick = roundTime(s.nextEnergyTick + 0.1); }
      if (s.time >= s.nextManaTick - 1e-9) { processManaTick(s); s.nextManaTick += 2; }
      if (config.blessingWisdom && s.time >= s.nextWisdomTick - 1e-9) { processPassiveMana(s, 'blessing', 40, 'Blessing of Wisdom'); s.nextWisdomTick += 5; }
      if (config.manaSpring && s.time >= s.nextSpringTick - 1e-9) { processPassiveMana(s, 'spring', springAmount(config), 'Mana Spring Totem'); s.nextSpringTick += MANA_SPRING_INTERVAL; }
      if (config.manaTide && s.time >= s.nextTideTick - 1e-9) { processPassiveMana(s, 'tide', 290, 'Mana Tide Totem'); advanceTide(s); }
      if (offGcdBerserkReady(s)) castBerserk(s);
      if (s.time >= s.nextSwing - 1e-9) processAuto(s);
      const potion = potionChoice(s);
      if (potion) usePotion(s, potion);
      if (shouldTea(s)) useTea(s);
      if (s.time >= s.gcdUntil - 1e-9 && s.time < config.duration - 1e-9) {
        executeDecision(s);
      }
      if (dt < -1e-9) throw new Error('Simulation time moved backwards.');
    }
    s.time = config.duration;
    const damageResult = s.damage ? s.damage.finish(s) : null;
    return {
      damage: damageResult, rotationRevision: rotation.REVISION, clipping: clipDiagnostics(s), clipEvents: s.debug ? s.clipEvents : [], windfuryModel: WINDFURY_MODEL, ...(config.gearIdol ? { idolModel: IDOL_MODEL } : {}),
      iteration, seed, duration: config.duration, casts: s.casts, berserkCasts: s.berserkCasts, berserkCrits: s.berserkCrits,
      energy: s.energyStats, endingEnergy: s.energy, manaGained: s.manaGained, manaRaw: s.manaRaw,
      manaSpent: s.manaSpent, manaWaste: s.manaWaste, endingMana: s.mana, cp: s.cp,
      bloodFrenzy: s.bloodFrenzy, jow: s.jow, potion: s.potion, tea: s.tea,
      mightyRage: s.mightyRage, potionSequence: s.potionSequence,
      omen: { ...s.omen, remaining: Number(clearcastingActive(s)) },
      windfury: { ...s.windfury, pending: Number(s.windfuryPending) },
      uptime: Object.fromEntries(Object.entries(s.uptime).map(([k, v]) => [k, v / config.duration * 100])),
      oomTime: s.oomTime, autoattacks: s.autoattacks, outcomes: s.results, log: s.log,
      biteDiagnostics: biteDiagnostics(s)
    };
  }

  function percentile(sorted, p) {
    if (!sorted.length) return null;
    const index = (sorted.length - 1) * p, lower = Math.floor(index), upper = Math.ceil(index);
    return sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower);
  }
  function stats(values) {
    const sorted = [...values].sort((a, b) => a - b), n = values.length;
    const mean = values.reduce((a, b) => a + b, 0) / n;
    return { mean, sd: Math.sqrt(values.reduce((sum, x) => sum + (x - mean) ** 2, 0) / n),
      median: percentile(sorted, 0.5), p5: percentile(sorted, 0.05), p95: percentile(sorted, 0.95) };
  }
  function metric(fights, getter) { return stats(fights.map(getter)); }
  function aggregate(fights, config) {
    const durations = fights.map(fight => fight.duration);
    const durationStats = { ...stats(durations), min: Math.min(...durations), max: Math.max(...durations),
      total: durations.reduce((sum, duration) => sum + duration, 0) };
    // Pooled rates: total casts / total actual combat time, not the requested
    // base duration (nor an equally weighted average of short/long fight rates).
    const totalCasts = metric(fights, fight => ABILITIES.reduce((sum, id) => sum + fight.casts[id], 0));
    const finisherCasts = metric(fights, fight => fight.casts.rip + fight.casts.bite);
    const abilityStats = Object.fromEntries(ABILITIES.map(id => {
      const perFight = metric(fights, fight => fight.casts[id]);
      return [id, { ...perFight, cpm: perFight.mean * 60 / durationStats.mean }];
    }));
    const oom = fights.filter(f => f.oomTime !== null).map(f => f.oomTime);
    const aggregateObject = (key, names) => Object.fromEntries(names.map(name => [name, metric(fights, f => f[key][name])]));
    const berserkUses = fights.reduce((sum, fight) => sum + fight.casts.berserk, 0);
    // Pool by actual uses, not by fights: variable lengths may contain different
    // numbers of Berserks. Include pre-pull, zero-conversion, and clipped uses.
    const berserkCrits = { ...aggregateObject('berserkCrits', BERSERK_CRIT_METRICS), uses: berserkUses,
      perUse: Object.fromEntries(['created', 'rake', 'shred'].map(key => [key, berserkUses
        ? fights.reduce((sum, fight) => sum + fight.berserkCrits[key], 0) / berserkUses : null])) };
    return {
      config, fights: fights.length, durationStats, abilityStats, berserkCrits, damage: damage.aggregate(fights), windfuryModel: WINDFURY_MODEL, ...(config.gearIdol ? { idolModel: IDOL_MODEL } : {}),
      rotationRevision: rotation.REVISION,
      clipping: Object.fromEntries(rotation.RULES.map(r => [r.id, Object.fromEntries(['attempts', 'overwrites', 'fulfilled', 'onCooldown', 'ticks', 'foregoneTickDamage']
        .map(key => [key, key === 'foregoneTickDamage' && !config.damageEnabled ? null : metric(fights, f => f.clipping[r.id][key])]))])),
      totalCasts: { ...totalCasts, cpm: totalCasts.mean * 60 / durationStats.mean },
      finisherCasts: { ...finisherCasts, cpm: finisherCasts.mean * 60 / durationStats.mean },
      energy: aggregateObject('energy', ['natural', 'shifting', 'tea', 'waste', 'shiftingWaste', 'teaWaste']),
      manaGained: aggregateObject('manaGained', ['spirit', 'blessing', 'spring', 'jow', 'potion', 'tide', ...(config.gearMP5 ? ['gear'] : [])]),
      cp: aggregateObject('cp', CP_METRICS),
      biteDiagnostics: {
        energySpent: metric(fights, fight => fight.biteDiagnostics.energySpent),
        ...Object.fromEntries(['counts', 'recovery', 'ripDowntime'].map(section => [section,
          Object.fromEntries(Object.keys(fights[0].biteDiagnostics[section]).map(key => [key,
            metric(fights, fight => fight.biteDiagnostics[section][key])]))]))
      },
      uptime: aggregateObject('uptime', ['rake', 'rip', 'berserk', 'clearcasting']),
      omen: aggregateObject('omen', [...OMEN_METRICS, 'remaining']),
      windfury: aggregateObject('windfury', [...WINDFURY_METRICS, 'pending']),
      manaSpent: metric(fights, f => f.manaSpent), manaWaste: metric(fights, f => f.manaWaste),
      endingMana: metric(fights, f => f.endingMana),
      oom: { percent: oom.length / fights.length * 100, count: oom.length, mean: oom.length ? stats(oom).mean : null, median: oom.length ? stats(oom).median : null, times: oom },
      bloodFrenzy: { attempts: metric(fights, f => f.bloodFrenzy.attempts), procs: metric(fights, f => f.bloodFrenzy.procs) },
      jow: { attempts: metric(fights, f => f.jow.attempts), procs: metric(fights, f => f.jow.procs) },
      potion: { uses: metric(fights, f => f.potion.uses), rolled: metric(fights, f => f.potion.rolled),
        gained: metric(fights, f => f.potion.gained), waste: metric(fights, f => f.potion.waste) },
      mightyRage: { uses: metric(fights, f => f.mightyRage.uses), uptimeSeconds: metric(fights, f => f.mightyRage.uptimeSeconds),
        bonusAP: fights[0].mightyRage.bonusAP },
      tea: { uses: metric(fights, f => f.tea.uses), gained: metric(fights, f => f.tea.gained), waste: metric(fights, f => f.tea.waste) },
      berserkCasts: Object.fromEntries(ABILITIES.map(id => [id, metric(fights, f => f.berserkCasts[id])])),
      representative: fights[0]
    };
  }
  function runSimulation(input = {}) {
    const config = normalize(input), fights = [];
    for (let iteration = 1; iteration <= config.iterations; iteration++) fights.push(simulateFight(config, { iteration }));
    return aggregate(fights, config);
  }
  function replay(input = {}, iteration) {
    const config = normalize(input), target = iteration || config.replayIteration;
    return simulateFight(config, { iteration: target, debug: true });
  }

  return {
    ABILITIES, LABELS, DEFAULTS, WINDFURY_MODEL, IDOL_MODEL, rotation, normalize, deriveSeed, createRng, shiftingPowerCost, shiftingPowerCooldown, shiftingPowerEnergy, simulateFight, runSimulation, replay, stats,
    testing: { selectClip, clipDiagnostics, biteDiagnostics, sampleFightDuration, createState, gainEnergy, gainMana, gainCombo, resolveAttack, bloodFrenzy, castBuilder, castFinisher,
      castShiftingPower, castBerserk, castFaerieFire, shouldPotion, potionChoice, usePotion, shouldTea, useTea, compareTeaTiming, teaTimingLoss, nextShiftWithoutFurtherTea, processManaTick, policyProjection, projectedOffGcd,
      clearcastingActive, energyCost, abilityCost, applyStartingClearcasting, compareShiftTiming, shiftGcdOverflow, shouldWaitForShiftingPower, chooseAction, choosePriorityAction, hasFreeFaerieFireGlobal, canShredWithoutBreakingRefresh, executeDecision, expireAuras, processAuto, processWindfury }
  };
});
