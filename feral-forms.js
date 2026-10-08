// Form mechanics and explicit weave policies. No damage RNG or hidden DPS solver.
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_FORMS = api;
})(globalThis, function() {
  'use strict';
  const REVISION = 'bearweave-v1';
  const CYCLE_REVISION = 'shift-cycle-v1';
  const FUROR = Object.freeze({
    current: Object.freeze({ clearOnBearEntry: true, regenerateInBear: false, rageOnBearEntry: 10 }),
    reverted: Object.freeze({ clearOnBearEntry: false, regenerateInBear: true, rageOnBearEntry: 10 })
  });
  const choice = (label, choices, labels, value, searchable = true) => ({ label, choices, labels, default: value, group: 'bear', searchable });
  const number = (label, min, max, value, values) => ({ label, min, max, default: value, values, group: 'bear' });
  const DEFINITIONS = {
    bearStrategy: choice('Bearweave rotation', ['disabled', 'auto', 'maul', 'lacerate', 'primalBite', 'mixed', 'cycleCat', 'cycleLacerate', 'cyclePrimalBite'], ['Disabled', 'Auto only', 'Maul', 'Lacerate', 'Primal Bite', 'Mixed', 'Shift cycle · Cat-only control', 'Shift cycle · Lacerate', 'Shift cycle · Primal Bite'], 'disabled'),
    furorMode: choice('Furor behavior', ['current', 'reverted'], ['Current beta · Bear clears Energy', 'Reverted · Energy persists'], 'current', false),
    bearSwingRule: choice('Bear entry swing rule', ['carry', 'reset', 'minimum'], ['Carryover', 'Fresh hasted Bear swing', 'Minimum delay'], 'carry', false),
    bearSwingDelay: { ...number('Minimum Bear swing delay (s)', 0, 10, 1.5, [1, 1.25, 1.5, 1.75, 2, 2.5]), searchable: false },
    bearRecentWindow: { ...number('Recent Cat window (s)', 0, 30, 5, [3, 5, 8]), searchable: false },
    bearEnergy: number('Bear entry Energy ceiling', 0, 100, 20, [0, 10, 20, 30, 40]),
    bearRequireShiftCD: choice('Require Shift on cooldown', [false, true], ['Off', 'On'], true),
    bearShiftBuffer: number('Minimum time until Shift (s)', 0, 30, 3, [0, 1.5, 3, 4.5, 6]),
    bearRipBuffer: number('Rip maintenance buffer (s)', 0, 12, 3, [0, 1.5, 3, 4.5]),
    bearRakeBuffer: number('Rake maintenance buffer (s)', 0, 9, 3, [0, 1.5, 3, 4.5]),
    bearAvoidBerserk: choice('Avoid Bear during Berserk', [false, true], ['Off', 'On'], true),
    bearEntryPriority: choice('Bear entry priority', ['pool', 'builders'], ['Pooling / filler only', 'Before ordinary builders'], 'pool'),
    bearExit: choice('Bear return policy', ['stay', 'cancel'], ['Stay Bear until Cat is ready', 'Cancel early, wait in caster'], 'stay'),
    bearEnrage: choice('Use Enrage to fund Bear attacks', [false, true], ['Off', 'On'], false),
    bearMaxDuration: number('Maximum excursion (s)', 1.5, 20, 6, [3, 4.5, 6]),
    bearMixedPriority: choice('Mixed instant-attack priority', ['primalBite', 'lacerate'], ['Primal Bite, then Lacerate', 'Lacerate, then Primal Bite'], 'primalBite')
  };
  const DEFAULTS = Object.freeze(Object.fromEntries(Object.entries(DEFINITIONS).map(([k, p]) => [k, p.default])));
  const CASTS = ['bearForm', 'catForm', 'maul', 'lacerate', 'primalBite', 'enrage'];
  const LABELS = { bearForm: 'Dire Bear Form', catForm: 'Cat Form', cancelForm: 'Cancel form', maul: 'Maul', lacerate: 'Lacerate', primalBite: 'Primal Bite', enrage: 'Enrage' };
  const round = n => Math.round(n * 1e6) / 1e6;
  const rank = (c, id, fallback = 0) => c.talentEffects?.ranks?.[id] ?? fallback;
  const enabled = c => c.bearStrategy && c.bearStrategy !== 'disabled';
  const cycle = c => ['cycleCat', 'cycleLacerate', 'cyclePrimalBite'].includes(c.bearStrategy);
  const cycleAbility = c => c.bearStrategy === 'cyclePrimalBite' ? 'primalBite' : 'lacerate';
  function validate(c) {
    if (!enabled(c)) return;
    if (c.characterMode !== 'gear' || c.talentMode !== 'build') throw new Error('Bearweaving requires gear-calculated stats and a complete talent build.');
    if (rank(c, 'furor') !== 5) throw new Error('This Bearweave experiment holds Furor at 5/5.');
    if (['primalBite', 'cyclePrimalBite'].includes(c.bearStrategy) && !rank(c, 'primal-bite')) throw new Error('Primal Bite weaving requires the Primal Bite talent.');
    if (cycle(c) && c.talentEffects?.shiftingKnown === false) throw new Error('The Shift-cycle rotation requires Shifting Power.');
  }
  const cost = c => (684 - (c.gearIdol === 263411 ? 40 : 0)) * (1 - (c.naturalShapeshifter || 0) / 100);
  const period = (c, form) => c.swingTimer * (form === 'bear' ? 2.5 : form === 'caster' ? c.weaponSpeed : 1);
  const basePeriod = (c, form) => form === 'bear' ? 2.5 : form === 'caster' ? c.weaponSpeed : 1;
  const abilityCost = (c, id) => id === 'lacerate' ? 15 - rank(c, 'shredding-attacks') : (id === 'maul' ? 15 : 20) - rank(c, 'ferocity');
  const clear = s => s.time < s.clearcastingExpires - 1e-9;
  const actualCost = (s, id) => clear(s) ? 0 : abilityCost(s.config, id);
  function stats(c, form = 'cat', mighty = false) {
    const extra = mighty ? c.mightyRageCatAP || 0 : 0;
    if (form === 'cat') return { ap: c.attackPower + extra, crit: c.crit };
    const kings = c.blessingKings ? 1.1 : 1;
    const strength = c.baseStrength + (c.markWild ? 16 : 0) + (c.strengthEarth ? 53 : 0) + (c.jujuPower ? 30 : 0) + (mighty ? 60 : 0);
    const otherStrength = Math.floor(strength * kings + 1e-9);
    const agility = Math.floor((c.baseAgility + (c.markWild ? 16 : 0) + (c.graceAir ? 89 : 0) + (c.mongoose ? 25 : 0) + (c.scorpok ? 25 : 0) + (c.filet ? 25 : 0)) * kings + 1e-9);
    // Start from the calculator's talent-free baseline, not final Cat AP.
    // Remove its known Cat conversion, then build each other form directly.
    const commonAP = c.baseAttackPower - 2 * c.baseStrength - c.baseAgility - 120;
    const buffAP = (c.blessingMight ? 133 : 0) + (c.battleShout ? 139 + (c.battleShout === 2 ? 30 : 0) : 0) + (c.jujuMight ? 40 : 0);
    const ap = commonAP + 2 * otherStrength + buffAP + (form === 'bear' ? 180 + (c.talentEffects?.attackPower || 0) : 0);
    const sheetCrit = c.baseSheetCrit + (agility - c.baseAgility) / 20 + 2 * rank(c, 'natures-majesty')
      + (form === 'bear' ? 3 * rank(c, 'sharpened-claws') : 0)
      + (c.critAura !== 'none' || form === 'bear' && c.talentEffects?.leader ? 3 : 0)
      + (c.mongoose ? 2 : 0) + (c.sharpeningStone ? 2 : 0) + (c.flaskZone && c.naturalFlask === 'aggression' ? 4 : 0);
    return { ap: Math.max(0, ap), crit: Math.max(0, Math.min(100, sheetCrit) - 4.8) };
  }
  function init(s, config = s.config) {
    Object.assign(s, { form: 'cat', rage: 0, lastFeral: 'cat', lastCatExit: -Infinity, bearSwingFloor: -Infinity,
      catEnergyStarted: 0, maulQueuedAt: Infinity, enrageNext: Infinity, enrageExpires: -Infinity, enrageReady: 0, primalBiteReady: 0,
      lacerateExpires: 0, lacerateStacks: 0, excursion: null,
      forms: { time: { cat: 0, bear: 0, caster: 0 }, casts: Object.fromEntries(CASTS.map(k => [k, 0])),
        bearAutos: 0, bearWindfury: 0, casterAutos: 0, entries: 0, completed: 0, aborted: 0, inputs: 0,
        manaSpent: 0, rageGenerated: 0, rageOverflow: 0, rageDiscarded: 0, energyDiscarded: 0,
        reentryEnergy: 0, returns: 0, excursionSeconds: 0, firstSwingDelay: 0, firstSwings: 0,
        windfuryBeforeFloor: 0, rageRefunded: 0, rageSpent: 0, clearcastRageSaved: 0,
        blocked: {}, returnReasons: {}, excursions: [] } });
    if (cycle(config)) {
      s.shiftCycle = null;
      s.forms.cycle = { revision: CYCLE_REVISION, scheduled: 0, entered: 0, attempted: 0, landed: 0,
        missed: 0, unfunded: 0, unavailable: 0, late: 0, onTimeShifts: 0, delayedShifts: 0, shiftDelay: 0, skipped: {} };
    }
  }
  function anchorCycle(s) {
    if (!cycle(s.config)) return;
    const m = s.forms.cycle, old = s.shiftCycle;
    if (old) {
      const delay = Math.max(0, s.time - old.target);
      m[delay > 1e-6 ? 'delayedShifts' : 'onTimeShifts']++; m.shiftDelay += delay;
    }
    const target = s.cooldowns.shiftingPower;
    s.shiftCycle = { target, bearAt: round(target - 4.5), attackAt: round(target - 3), catAt: round(target - 1.5), skipped: s.config.bearStrategy === 'cycleCat', entered: false };
    m.scheduled++;
  }
  function cycleBoundary(s) {
    const p = s.shiftCycle;
    return cycle(s.config) && p && [p.bearAt, p.attackAt, p.catAt, p.target].some(t => Math.abs(t - s.time) < 1e-9);
  }
  function nextCycleEvent(s) {
    const p = s.shiftCycle;
    return !cycle(s.config) || !p ? Infinity : Math.min(...[p.bearAt, p.attackAt, p.catAt, p.target].filter(t => t > s.time + 1e-9));
  }
  function skipCycle(s, reason, h) {
    const p = s.shiftCycle;
    if (p.skipped) return;
    p.skipped = true;
    const m = s.forms.cycle; m.skipped[reason] = (m.skipped[reason] || 0) + 1;
    h.log(s, 'Shift cycle skipped', h.snapshot(s), reason + ' · remain Cat until the next Shift');
  }
  // Called only by live decisions, never by a resource forecast. The clock is
  // authoritative; ordinary bleed/CP priorities cannot move the Bear window.
  function cycleWindow(s, h) {
    const p = s.shiftCycle, c = s.config;
    if (!p) return Infinity;
    if (!p.entered && !p.skipped) {
      const reason = c.bearAvoidBerserk && s.time < s.berserkExpires - 1e-9 ? 'Berserk'
        : p.target >= c.duration - 1e-9 ? 'Fight end' : null;
      // Berserk is checked at the entry boundary, not early in the Cat segment.
      if (reason && (reason === 'Fight end' || s.time >= p.bearAt - 1e-9)) skipCycle(s, reason, h);
      if (!p.skipped && s.time >= p.bearAt - 1e-9) {
        if (s.time > p.bearAt + 1e-6) skipCycle(s, 'Entry window missed', h);
        else if (s.mana + 1e-9 < 3 * cost(c)) {
          s.forms.manaBlockedAt ??= s.time; skipCycle(s, 'Reserve both forms and next Shift', h);
        } else return 'bearForm';
      }
    }
    return p.skipped || p.entered ? p.target : p.bearAt;
  }
  function rage(s, amount) {
    const gain = Math.min(amount, 100 - s.rage);
    s.rage += gain; s.forms.rageGenerated += amount; s.forms.rageOverflow += amount - gain;
  }
  function advance(s, to) {
    const dt = Math.max(0, to - Math.max(0, s.time)); s.forms.time[s.form] += dt;
    if (s.form === 'caster' || s.form === 'bear' && FUROR[s.config.furorMode].regenerateInBear) {
      const amount = dt * 10, gain = Math.min(100 - s.energy, amount);
      s.energy += gain; s.energyStats.natural += amount; s.energyStats.waste += amount - gain;
    }
  }
  function finish(s) {
    if (!s.excursion) return;
    const e = { ...s.excursion, end: s.time, aborted: true, reason: 'Fight ended before Cat return' };
    s.forms.aborted++; s.forms.excursionSeconds += s.time - e.start;
    s.forms.returnReasons[e.reason] = (s.forms.returnReasons[e.reason] || 0) + 1;
    if (s.debug) s.forms.excursions.push(e);
    s.excursion = null;
  }
  function change(s, to, h) {
    const from = s.form;
    if (from === to || (to !== 'caster' && (s.gcdUntil > s.time + 1e-9 || s.mana + 1e-9 < cost(s.config)))) return false;
    const before = h.snapshot(s);
    s.damage?.advance(s.time, s);
    if (from === 'cat') { s.lastCatExit = s.time; s.lastFeral = 'cat'; }
    if (from === 'bear') {
      s.forms.rageDiscarded += s.rage; s.rage = 0; s.maulQueuedAt = Infinity;
      s.enrageNext = Infinity; s.enrageExpires = -Infinity; s.lastFeral = 'bear';
    }
    if (to !== 'caster') {
      const paid = cost(s.config); h.spendMana(s, paid); s.forms.manaSpent += paid;
      s.gcdUntil = round(s.time + 1.5); s.forms.casts[to === 'bear' ? 'bearForm' : 'catForm']++;
    }
    s.form = to; s.forms.inputs++;
    if (to === 'bear') {
      const swap = s.lastFeral === 'cat' && s.time - s.lastCatExit <= s.config.bearRecentWindow + 1e-9;
      if (swap && s.config.bearSwingRule !== 'carry') s.bearSwingFloor = Math.max(s.bearSwingFloor,
        s.time + (s.config.bearSwingRule === 'reset' ? period(s.config, 'bear') : s.config.bearSwingDelay));
      s.nextSwing = round(Math.max(swap && s.config.bearSwingRule === 'reset' ? s.time + period(s.config, 'bear') : s.nextSwing, s.bearSwingFloor));
      const furor = FUROR[s.config.furorMode];
      if (furor.clearOnBearEntry) { s.forms.energyDiscarded += s.energy; s.energy = 0; }
      s.rage = 0; rage(s, furor.rageOnBearEntry); s.forms.entries++; s.lastFeral = 'bear';
      if (!s.excursion) s.excursion = { start: s.time, deadline: s.time + s.config.bearMaxDuration, auto: false, instant: false, goal: false, aborted: false, firstSwing: null, strategy: s.config.bearStrategy };
      if (cycle(s.config) && s.shiftCycle) {
        s.shiftCycle.entered = true; s.forms.cycle.entered++;
        s.excursion.cycle = { ...s.shiftCycle, resolved: false };
      }
    }
    if (to === 'cat') {
      s.catEnergyStarted = s.time;
      s.forms.reentryEnergy += s.energy; s.forms.returns++; s.lastFeral = 'cat';
      if (s.excursion) {
        const e = { ...s.excursion, end: s.time, energy: s.energy, nextCatAction: s.gcdUntil };
        s.forms.excursionSeconds += s.time - e.start; s.forms[e.aborted || !e.goal ? 'aborted' : 'completed']++;
        if (s.debug) s.forms.excursions.push(e);
        s.excursion = null;
      }
    }
    h.log(s, LABELS[to === 'cat' ? 'catForm' : to === 'bear' ? 'bearForm' : 'cancelForm'], before,
      `${from} → ${to}${to === 'caster' ? ' · existing GCD retained' : ` · Mana −${cost(s.config).toFixed(1)} · 1.5s GCD`}`);
    return true;
  }
  function blocked(s, reason, record) { if (record) s.forms.blocked[reason] = (s.forms.blocked[reason] || 0) + 1; return false; }
  function canEnter(s, catAction, record = true) {
    const c = s.config;
    if (!enabled(c) || s.form !== 'cat' || s.gcdUntil > s.time + 1e-9) return false;
    if (catAction && !['faerieFire', 'shred'].includes(catAction)) return blocked(s, 'Cat priority', record);
    if (catAction === 'shred' && c.bearEntryPriority !== 'builders') return blocked(s, 'Builder available', record);
    if (clear(s)) return blocked(s, 'Clearcasting', record);
    if (s.energy > c.bearEnergy + 1e-9) return blocked(s, 'Energy ceiling', record);
    if (c.bearAvoidBerserk && s.time < s.berserkExpires - 1e-9) return blocked(s, 'Berserk', record);
    const known = c.talentEffects?.shiftingKnown !== false;
    if (known && (s.cooldowns.shiftingPower - s.time < c.bearShiftBuffer - 1e-9 || c.bearRequireShiftCD && s.cooldowns.shiftingPower <= s.time + 1e-9)) return blocked(s, 'Shift window', record);
    if (c.bearRipBuffer > 0 && s.ripExpires - s.time < c.bearRipBuffer - 1e-9) return blocked(s, 'Rip maintenance', record);
    if (c.rakeMode === 'maintain' && c.bearRakeBuffer > 0 && s.rakeExpires - s.time < c.bearRakeBuffer - 1e-9) return blocked(s, 'Rake maintenance', record);
    const min = ['auto', 'maul'].includes(c.bearStrategy) ? 3 : 4.5;
    if (c.duration - s.time <= min || c.bearMaxDuration + 1e-9 < min - 1.5) return blocked(s, 'Excursion window', record);
    if (s.mana + 1e-9 < 2 * cost(c)) {
      if (record) s.forms.manaBlockedAt ??= s.time;
      return blocked(s, 'Return mana reserve', record);
    }
    return true;
  }
  function deadline(s) {
    const c = s.config, e = s.excursion;
    return Math.min(e.deadline, c.duration - 1.5,
      c.talentEffects?.shiftingKnown !== false && (c.bearRequireShiftCD || c.bearShiftBuffer > 0) && s.mana >= cost(c) * 2 ? s.cooldowns.shiftingPower - 1.5 : Infinity,
      c.bearRipBuffer > 0 ? s.ripExpires - 1.5 : Infinity,
      c.rakeMode === 'maintain' && c.bearRakeBuffer > 0 ? s.rakeExpires - 1.5 : Infinity);
  }
  function instant(s) {
    const strategy = s.config.bearStrategy;
    const list = strategy === 'mixed' ? (s.config.bearMixedPriority === 'primalBite' ? ['primalBite', 'lacerate'] : ['lacerate', 'primalBite']) : [strategy];
    return list.find(id => ['lacerate', 'primalBite'].includes(id) && (id !== 'primalBite' || rank(s.config, 'primal-bite') && (s.time < s.berserkExpires || s.primalBiteReady <= s.time + 1e-9))) || null;
  }
  function act(s, h) {
    const e = s.excursion, c = s.config;
    if (!e || s.form === 'cat') return;
    if (e.cycle) return actCycle(s, h);
    if (s.time >= deadline(s) - 1e-9 || c.furorMode === 'reverted' && s.energy >= 85) {
      if (!e.exit) { const reason = s.energy >= 85 ? 'Energy cap approaching' : 'Return deadline'; s.forms.returnReasons[reason] = (s.forms.returnReasons[reason] || 0) + 1; }
      e.aborted = !e.goal; e.exit = true;
    }
    if (e.goal && c.bearStrategy !== 'mixed') e.exit = true;
    if (c.bearStrategy === 'mixed' && (e.auto && e.instant || e.goal && s.time + 1.5 > deadline(s))) e.exit = true;
    if (e.exit || s.form === 'caster') {
      if (s.gcdUntil <= s.time + 1e-9) { if (h.timed(s, 'gcd', () => true)) change(s, 'cat', h); }
      else if (s.form === 'bear' && c.bearExit === 'cancel' && h.timed(s, 'cancelForm', () => true)) change(s, 'caster', h);
      return;
    }
    const id = !e.instant && instant(s);
    const needs = id ? actualCost(s, id) : (c.bearStrategy === 'maul' || c.bearStrategy === 'mixed' && !e.auto) ? actualCost(s, 'maul') : 0;
    if (c.bearEnrage && s.enrageReady <= s.time + 1e-9 && s.rage < needs && h.timed(s, 'enrage', () => true)) {
      const before = h.snapshot(s); rage(s, c.wolfsheadHelm ? 15 : 10);
      s.enrageReady = s.time + 60; s.enrageExpires = s.time + 10; s.enrageNext = s.time + 1;
      s.forms.casts.enrage++; s.forms.inputs++; h.log(s, 'Enrage', before, 'Off GCD · immediate Rage + 2 Rage/s while Bear · 60s cooldown');
    }
    if (id && s.gcdUntil <= s.time + 1e-9 && s.rage + 1e-9 >= actualCost(s, id) && s.time + 1.5 <= deadline(s) + 1e-9 && h.timed(s, 'gcd', () => true)) {
      h.bearAttack(s, id); e.instant = true; e.goal = true;
      if (c.bearStrategy !== 'mixed') { e.exit = true; act(s, h); return; }
    }
    if (['maul', 'mixed'].includes(c.bearStrategy) && (!e.auto || c.bearStrategy === 'maul' && !e.goal) && !Number.isFinite(s.maulQueuedAt)
      && s.rage + 1e-9 >= actualCost(s, 'maul') && h.timed(s, 'maulQueue', () => true)) {
      s.maulQueuedAt = round(s.time + .05); s.forms.inputs++;
      h.log(s, 'Queue Maul', h.snapshot(s), 'Next eligible Bear swing · queue active after 50ms');
    }
    if (c.bearStrategy === 'mixed' && e.auto && !id) { e.exit = true; act(s, h); }
  }
  function actCycle(s, h) {
    const e = s.excursion, p = e.cycle, c = s.config, m = s.forms.cycle, id = cycleAbility(c);
    if (s.form === 'bear' && !p.resolved) {
      if (c.bearEnrage && s.enrageReady <= s.time + 1e-9 && s.rage < actualCost(s, id) && s.time < p.attackAt - 1e-9 && h.timed(s, 'enrage', () => true)) {
        const before = h.snapshot(s); rage(s, c.wolfsheadHelm ? 15 : 10);
        s.enrageReady = s.time + 60; s.enrageExpires = s.time + 10; s.enrageNext = s.time + 1;
        s.forms.casts.enrage++; s.forms.inputs++; h.log(s, 'Enrage', before, 'Fund the scheduled Bear ability · no extension of the cycle');
      }
      if (s.time < p.attackAt - 1e-9) return;
      p.resolved = true;
      let reason = s.time > p.attackAt + 1e-6 || s.gcdUntil > s.time + 1e-9 ? 'late'
        : s.rage + 1e-9 < actualCost(s, id) ? 'unfunded'
        : id === 'primalBite' && (!rank(c, 'primal-bite') || s.primalBiteReady > s.time + 1e-9 && s.time >= s.berserkExpires) ? 'unavailable' : null;
      if (reason) { m[reason]++; e.aborted = true; h.log(s, 'Shift cycle failed', h.snapshot(s), `${LABELS[id]} ${reason} · no retry; preserve scheduled Cat return`); }
      else {
        const outcome = h.bearAttack(s, id); m.attempted++; m[outcome.success ? 'landed' : 'missed']++;
        e.instant = true; e.goal = true;
      }
    }
    // Cancelling after the attack is reactive. Its input delay shortens caster
    // recovery, but does not move the independently scheduled Cat return.
    if (s.form === 'bear' && p.resolved && h.timed(s, 'cancelForm', () => true)) change(s, 'caster', h);
    if (s.form === 'caster' && s.time >= p.catAt - 1e-9 && s.gcdUntil <= s.time + 1e-9 && h.timed(s, 'gcd', () => true)) change(s, 'cat', h);
  }
  function swing(s, extra = false) {
    if (s.form !== 'bear') return s.form === 'caster' ? (extra ? 'casterWindfury' : 'casterAuto') : extra ? 'windfury' : 'auto';
    if (extra && s.time < s.bearSwingFloor - 1e-9) s.forms.windfuryBeforeFloor++;
    const e = s.excursion;
    if (e && e.firstSwing === null) { e.firstSwing = s.time; s.forms.firstSwingDelay += s.time - e.start; s.forms.firstSwings++; }
    if (s.maulQueuedAt <= s.time + 1e-9 && s.rage + 1e-9 >= actualCost(s, 'maul')) { s.maulQueuedAt = Infinity; return 'maul'; }
    if (s.maulQueuedAt <= s.time + 1e-9) s.maulQueuedAt = Infinity;
    return extra ? 'bearWindfury' : 'bearAuto';
  }
  function swingDone(s, id, outcome) {
    if (s.form === 'caster') { s.forms.casterAutos++; return; }
    if (s.form !== 'bear') return;
    if (id !== 'maul') {
      s.forms[id === 'bearWindfury' ? 'bearWindfury' : 'bearAutos']++;
      if (outcome.success) rage(s, 3.46 * 2.5 * 2.5 * (outcome.crit ? 2 : 1));
    }
    const e = s.excursion;
    if (e) { e.auto = true; if (['auto', 'mixed'].includes(e.strategy) || e.strategy === 'maul' && id === 'maul') e.goal = true; }
  }
  function recipe(c) {
    if (!enabled(c)) return ['Bearweaving disabled.'];
    if (c.bearStrategy === 'cycleCat') return [
      `Shift-cycle Cat-only control (${CYCLE_REVISION}): use the same on-cooldown Shift and simple Cat attack rules as the weave rotation, but remain Cat for the entire cooldown. No Bear window is reserved.`,
      'Due Rip → due Rake → eligible Bite → Shred. Do not overlap the next Shift with another GCD. No refresh forecast, bleed clipping, or filler. Use this control to distinguish changes to Cat policy from adding a weave.'
    ];
    if (cycle(c)) return [
      `Shift-cycle rotation (${CYCLE_REVISION}): each actual Shift anchors the next cooldown. Bear at −4.5s; ${LABELS[cycleAbility(c)]} and cancelform at −3s; Cat at −1.5s; Shift at 0.`,
      'With an 8s Shift: 0 Shift, 1–3.5 Cat actions, 3.5 Bear, 5 Bear ability/cancel, 6.5 Cat, 8 Shift. Five seconds in Cat includes its 1.5s return GCD; only 2.5s remain for Cat attacks after Shift’s GCD.',
      'Use due Rip, due Rake, eligible Bite, then Shred in the Cat window. Never start an action that crosses the Bear or Shift boundary. No bleed clipping or refresh forecast; the clock takes priority over maintenance.',
      `Immediate cancelform after one Bear attempt; never wait for extra Rage or retry a miss. ${c.bearEnrage ? 'Enrage may fund the scheduled ability.' : 'Enrage disabled.'} Reserve mana for both forms and the next Shift. ${c.bearAvoidBerserk ? 'Skip Bear windows during Berserk.' : 'Bear windows are allowed during Berserk.'} Skip incomplete end-of-fight windows.`,
      'Scheduled GCD inputs are queueable. Cancelform pays the configured reaction delay. At zero delay, current Furor yields 15 Energy on Cat entry, 30 when its GCD ends, 70 after Shift and 80 at the next global. Failed windows and delayed Shifts are recorded.',
      `Furor ${c.furorMode}; swing rule ${c.bearSwingRule}. Existing opportunity-weave energy/buffer/exit settings are inactive.`
    ];
    return [`${c.bearStrategy} weave at ≤${c.bearEnergy} Energy, ${c.bearEntryPriority === 'pool' ? 'only while pooling or using filler' : 'before ordinary builders'}; reserve both form costs.`,
      `Shift buffer ${c.bearShiftBuffer}s${c.bearRequireShiftCD ? ', Shift must be on cooldown when learned' : ''}; Rip/Rake buffers ${c.bearRipBuffer}/${c.bearRakeBuffer}s; ${c.bearAvoidBerserk ? 'outside Berserk' : 'Berserk allowed'}.`,
      `Return: ${c.bearExit === 'cancel' ? 'cancel Bear after its action; wait in caster for the existing GCD, then cast Cat' : 'stay Bear until the GCD permits casting Cat'}. Maximum excursion ${c.bearMaxDuration}s; Cat return has its own 1.5s GCD. Exit earlier for maintenance, an upcoming Shift, fight end, or 85 stored Energy with reverted Furor.`,
      `Enrage ${c.bearEnrage ? 'when needed to fund the chosen attack' : 'disabled'}. Mixed priority: ${c.bearMixedPriority === 'primalBite' ? 'Primal Bite → Lacerate' : 'Lacerate → Primal Bite'}; queue Maul when affordable.`,
      `Furor ${c.furorMode}; natural swing ${c.bearSwingRule}${c.bearSwingRule === 'minimum' ? ` ${c.bearSwingDelay}s` : ''}; recent Cat window ${c.bearRecentWindow}s. Windfury is independent.`];
  }
  return { REVISION, CYCLE_REVISION, FUROR, DEFINITIONS, DEFAULTS, CASTS, LABELS, enabled, cycle, cycleAbility, anchorCycle, cycleBoundary, nextCycleEvent, cycleWindow, validate, rank, cost, period, basePeriod, stats, abilityCost, actualCost, init, rage, advance, finish, change, canEnter, deadline, instant, act, swing, swingDone, recipe };
});
