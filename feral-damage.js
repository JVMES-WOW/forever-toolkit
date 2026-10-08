(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./feral-forms.js') : root.FOREVER_FERAL_FORMS);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_DAMAGE = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (forms) {
  'use strict';
  const REVISION = '660176710eb13a85eb5b4c3dd8f7de984883c99b';
  // Adapted under MIT; see feral-damage-LICENSE.txt. Each formula is pinned,
  // not an assertion about the current live server. Overrides are explicit.
  const FORMULAS = Object.freeze({
    paw: 'forms.go: weapon range / equipped speed + AP / 14 (1s Cat base weapon), plus flat main-hand enchant damage directly on paws (user-confirmed Forever rule)',
    shred: 'shred.go: 1.55 * (80 + paw)',
    rakeInitial: 'rake.go: 61, zero AP; community override may bypass armor, still direct damage',
    rakeTick: 'rake.go: flat 34 retained; community override + coefficient * current AP; 3 ticks at 3s',
    rip: 'rip.go: 15 + 25.5 * CP + 0.01 * min(CP, 4) * current AP; 6 ticks at 2s (inherited assumption)',
    bite: 'Rank 4: uniform(45,95) + 128 * CP + 0.03 * CP * AP + 2.5 * excess Energy. Rank 5: uniform(52,112) + 147 * CP + 0.03 * CP * AP + 2.7 * excess Energy.',
    talents: 'talents_balance.go / talents_feral_combat.go: Genesis periodic; Savage Fury Rake/Shred/Maul; Predatory Instincts ability crits; Rend and Tear melee specials with own bleed',
    armor: 'core/spell_resistances.go: max(0.25, 5500/(5500+armor)); periodic bleeds bypass; Crystal Yield is a provisional independent -200 reduction based on Vanilla WoWSims',
    white: 'core/target.go: level 63, 40% glances, uniform 55–75% damage; one-table crit cap',
    windfury: 'User-confirmed Forever timing: immediate independent extra swing, no natural swing reset or batching delay. Retained core/buffs/drivers.go and generated WindfuryTotem damage values: +246 AP, 1s, 2 white-hit charges minus triggering white hit',
    giftOfArthas: 'df7a2cf: core/spelldata/spells_auto_gen.go spell 11374, +8 physical damage taken; core/spell_result.go adds after attacker/armor modifiers, before outcomes and Rend and Tear; includes periodic physical damage'
  });
  const SOURCES = ['auto', 'windfury', 'shred', 'rakeInitial', 'rakeTick', 'rip', 'bite', 'bearAuto', 'bearWindfury', 'casterAuto', 'casterWindfury', 'maul', 'lacerate', 'lacerateTick', 'primalBite'];
  const LABELS = { auto: 'Autoattacks', windfury: 'Windfury attacks', shred: 'Shred', rakeInitial: 'Rake initial', rakeTick: 'Rake ticks', rip: 'Rip', bite: 'Ferocious Bite', bearAuto: 'Bear auto', bearWindfury: 'Bear Windfury', casterAuto: 'Caster auto', casterWindfury: 'Caster Windfury', maul: 'Maul', lacerate: 'Lacerate initial', lacerateTick: 'Lacerate ticks', primalBite: 'Primal Bite' };
  const periodicSource = id => ['rakeTick', 'rip', 'lacerateTick'].includes(id);
  const whiteSource = id => ['auto', 'windfury', 'bearAuto', 'bearWindfury', 'casterAuto', 'casterWindfury'].includes(id);
  const DEFAULTS = Object.freeze({ damageEnabled: false, attackPower: null, weaponMin: null, weaponMax: null,
    damageWeaponId: 0, damageWeaponSource: 'Manual / not supplied', biteRank: 5, genesis: 0, savageFury: 0, predatoryInstincts: 0,
    rendAndTear: 0, naturalist: 0, rakeTickAP: 5.5, rakeInitialIgnoreArmor: true, targetArmor: 3731,
    sunderStacks: 0, exposeArmor: false, curseRecklessness: false, externalFaerieFire: false, giftOfArthas: false, crystalYield: false, faerieFireMiss: 17 });
  const provenance = c => ({ revision: REVISION, mechanicsRevision: 'feral-forms-v1', model: 'forever-damage-v5-forms', biteRank: c.biteRank,
    source: `https://github.com/ElliotWood/Forever/tree/${REVISION}`, formulas: FORMULAS,
    talents: { source: 'https://github.com/ElliotWood/Forever/tree/df7a2cfd2f7de7325589a567212b39acdd8b0620/sim/druid',
      build: c.talentMode === 'build' ? c.talentBuild : 'legacy independent overrides', naturalistRank: c.naturalist || 0,
      note: 'Naturalist adds 1% all damage per rank; active builds control supported Cat/Bear stats, resources, costs and unlocks. Defensive effects and incoming damage are not modeled.' },
    racials: { model: 'forever-active-racials-v1', race: c.racialRace,
      source: 'https://github.com/ElliotWood/Forever/blob/df7a2cfd2f7de7325589a567212b39acdd8b0620/sim/core/racials.go',
      elunesLightTiming: c.elunesLightTiming || 'disabled', leyLineTiming: c.leyLineTiming || 'disabled', nearbyLeyLine: Boolean(c.leyLineNearby),
      note: 'Elune: +10 percentage points of crit for 15s / 180s CD, off GCD. Energized: double passive Spirit/MP5 for 15s; optional nearby-ley-line 900s tooltip override. No potion/JoW/Tide amplification. Ley Line is a hasted 2s cast, 120s CD from completion. Fork-model Cat form/autos continue; unverified on live server.' },
    rake: { tickAPPercent: c.rakeTickAP, initialIgnoresArmor: c.rakeInitialIgnoreArmor,
      evidence: 'User-supplied October 1, 2026 Discord measurements; provisional coefficient and initial armor bypass. Maximum-rank flats retained.' },
    giftOfArthas: { enabled: Boolean(c.giftOfArthas), bonusPhysicalDamageTaken: c.giftOfArthas ? 8 : 0,
      source: 'https://github.com/ElliotWood/Forever/blob/df7a2cfd2f7de7325589a567212b39acdd8b0620/sim/core/spell_result.go#L832',
      note: 'External debuff maintained at full uptime, including beyond 3 minutes. No tank application/proc ramp-up or personal potion use simulated.' },
    crystalYield: { enabled: Boolean(c.crystalYield), armorReduction: c.crystalYield ? 200 : 0,
      source: 'https://www.wowhead.com/forever/item=11565/crystal-yield',
      stackingSource: 'https://github.com/wowsims/classic/blob/master/sim/core/debuffs.go#L898',
      note: 'Provisional Vanilla WoWSims stacking: independent of Sunder/Expose and FF/CoR. Maintained external full uptime; no Cat item use. The pinned Forever fork lists the spell but does not implement it.' },
    pawEnchants: { model: 'flat-paw-v1', bonusDamage: c.gearPawDamage || 0,
      note: 'User-confirmed Forever rule: equipped main-hand flat enchant damage is added directly to Cat paws, after weapon-speed normalization, before ability/talent/armor/outcome modifiers. No AP or bleed/Bite bonus.' },
    windfury: { model: 'forever-independent-extra-v2', enabled: Boolean(c.windfury), resetsSwingTimer: false,
      timingEvidence: 'User confirmation, October 5, 2026: Forever Windfury adds an extra swing mid-swing without resetting the natural swing timer. Resolved immediately after its triggering attack; no batching delay.',
      retainedAssumptions: '20% proc chance on eligible damaging landed melee, 0.1s ICD; +246 AP, 1s and landed-white-hit charges. Rip applications cannot trigger it. Triggering damage is resolved before the proc buff.' },
    consumables: { revision: 'df7a2cfd2f7de7325589a567212b39acdd8b0620',
      source: 'https://github.com/ElliotWood/Forever/tree/df7a2cfd2f7de7325589a567212b39acdd8b0620',
      potionStrategy: c.potionStrategy || 'mana', naturalFlask: c.naturalFlask || 'none', flaskZone: Boolean(c.flaskZone),
      note: 'Mighty Rage adds 60 Strength for 20s on actual use, scaled by imported HotW/Kings; shared 120s potion CD, no Cat energy. Natural flask zone bonuses follow Forever item tooltips; fork static records contain Stamina only.' },
    limitations: 'Experimental mechanics. Omen uses unhasted form speed (Faerie Fire uses 1.5s) with a 10s ICD. No incoming tank damage, Crusader, trinket or other unsupported gear procs. No live-game accuracy guarantee.' });
  function normalize(input) {
    const c = { ...DEFAULTS, ...input };
    c.biteRank = Number(c.biteRank);
    if (![4, 5].includes(c.biteRank)) throw new Error('Bite rank must be 4 or 5.');
    for (const k of ['damageEnabled', 'rakeInitialIgnoreArmor', 'exposeArmor', 'curseRecklessness', 'externalFaerieFire', 'giftOfArthas', 'crystalYield']) c[k] = typeof c[k] === 'boolean' ? c[k] : DEFAULTS[k];
    const bounds = { attackPower: [0, 100000], weaponMin: [0, 100000], weaponMax: [0, 100000],
      genesis: [0, 5], savageFury: [0, 2], predatoryInstincts: [0, 2], rendAndTear: [0, 5], naturalist: [0, 5],
      rakeTickAP: [0, 100], targetArmor: [0, 100000], sunderStacks: [0, 5], faerieFireMiss: [1, 100], damageWeaponId: [0, 2147483647] };
    for (const [k, [min, max]] of Object.entries(bounds)) {
      if (DEFAULTS[k] === null && (c[k] === null || c[k] === undefined || c[k] === '')) { c[k] = null; continue; }
      const n = Number(c[k]);
      if (!Number.isFinite(n) || n < min || n > max || (['genesis', 'savageFury', 'predatoryInstincts', 'rendAndTear', 'naturalist', 'sunderStacks', 'damageWeaponId'].includes(k) && !Number.isInteger(n))) throw new Error(`Invalid damage setting: ${k}.`);
      c[k] = n;
    }
    c.damageWeaponSource = typeof c.damageWeaponSource === 'string' ? c.damageWeaponSource : DEFAULTS.damageWeaponSource;
    return c;
  }
  function validate(c) {
    if (!c.damageEnabled) return;
    if (c.attackPower == null || c.weaponMin == null || c.weaponMax == null) throw new Error('Damage needs final Attack Power and resolved weapon min/max damage. Import a character or enter them manually.');
    if (c.weaponMax < c.weaponMin) throw new Error('Weapon maximum damage must be at least its minimum.');
    if (!(c.weaponSpeed > 0)) throw new Error('Damage needs equipped weapon speed.');
  }
  function armor(c, ownFF = false) {
    return Math.max(0, c.targetArmor - Math.max(450 * c.sunderStacks, c.exposeArmor ? 2250 : 0)
      - (c.curseRecklessness || c.externalFaerieFire || ownFF ? 505 : 0) - (c.crystalYield ? 200 : 0) - (c.gearArmorPen || 0));
  }
  const armorMultiplier = value => Math.max(0.25, 5500 / (5500 + Math.max(0, value)));
  const paw = (c, ap, roll) => (c.weaponMin + (c.weaponMax - c.weaponMin) * roll) / c.weaponSpeed + ap / 14 + (c.gearPawDamage || 0);
  function base(c, id, ap, cp = 0, excessEnergy = 0, roll = 0.5) {
    const bearPaw = () => 2.5 * ((c.weaponMin + (c.weaponMax - c.weaponMin) * roll) / c.weaponSpeed + ap / 14) + (c.gearPawDamage || 0);
    if (id === 'bearAuto' || id === 'bearWindfury') return bearPaw();
    if (id === 'casterAuto' || id === 'casterWindfury') return c.weaponMin + (c.weaponMax - c.weaponMin) * roll + c.weaponSpeed * ap / 14 + (c.gearPawDamage || 0);
    if (id === 'maul') return bearPaw() + 128;
    if (id === 'primalBite') return bearPaw() + 77;
    if (id === 'lacerate') return bearPaw() * .1 * cp;
    if (id === 'lacerateTick') return 15 * cp;
    if (id === 'auto' || id === 'windfury') return paw(c, ap, roll);
    if (id === 'shred') return 1.55 * (80 + paw(c, ap, roll));
    if (id === 'rakeInitial') return 61;
    if (id === 'rakeTick') return 34 + c.rakeTickAP / 100 * ap;
    if (id === 'rip') return 15 + 25.5 * cp + 0.01 * Math.min(cp, 4) * ap;
    if (id === 'bite') return c.biteRank === 4
      ? 45 + 50 * roll + 128 * cp + 0.03 * cp * ap + 2.5 * excessEnergy
      : 52 + 60 * roll + 147 * cp + 0.03 * cp * ap + 2.7 * excessEnergy;
    throw new Error('Unknown damage source.');
  }
  function multiplier(c, id, bleeding, crit, targetArmor) {
    const periodic = periodicSource(id), white = whiteSource(id);
    let m = periodic || (id === 'rakeInitial' && c.rakeInitialIgnoreArmor) ? 1 : armorMultiplier(targetArmor);
    if (['shred', 'rakeInitial', 'rakeTick', 'maul'].includes(id)) m *= 1 + 0.05 * c.savageFury;
    if (periodic) m *= 1 + 0.01 * c.genesis;
    m *= 1 + 0.01 * (c.naturalist || 0);
    m *= c.gearDamageMultiplier || 1;
    // Rend and Tear applies to eligible direct specials, never periodic ticks.
    if (!white && !periodic && bleeding) m *= 1 + 0.02 * c.rendAndTear;
    if (crit) m *= white ? 2 : 2 + 0.1 * c.predatoryInstincts;
    return m;
  }
  function whiteOutcome(c, rng, critBonus = 0) {
    const landed = Math.max(0, 1 - (c.miss + c.dodge + c.parry) / 100);
    const glance = Math.min(0.4, landed), crit = Math.min((c.crit + critBonus) / 100, Math.max(0, landed - glance));
    // Conditional on the existing combat roll having landed. This is the
    // level-63 one-table distribution without changing resource RNG/outcomes.
    const roll = rng() * landed;
    return roll < glance ? 'glance' : roll < glance + crit ? 'crit' : 'hit';
  }
  function giftBonus(c, id, bleeding, crit) {
    if (!c.giftOfArthas) return 0;
    // Fork ordering: flat target bonus is AFTER caster multipliers and armor,
    // but BEFORE hit/crit/glance outcomes and post-outcome Rend and Tear.
    // All modeled damage is physical, including both bleeds; Rip's application
    // and non-damaging actions never call this. Avoided attacks return zero.
    const white = whiteSource(id);
    return 8 * (!white && !periodicSource(id) && bleeding ? 1 + 0.02 * c.rendAndTear : 1)
      * (crit ? (white ? 2 : 2 + 0.1 * c.predatoryInstincts) : 1);
  }
  function create(c, rng, debug = false) {
    validate(c);
    const d = { total: 0, bySource: Object.fromEntries(SOURCES.map(k => [k, { damage: 0, events: 0, hit: 0, crit: 0, glance: 0, avoided: 0 }])),
      events: [], faerieFire: { attempts: 0, landed: 0, uptimeSeconds: 0 }, armorSeconds: 0, mitigationSeconds: 0,
      provenance: provenance(c) };
    const dots = { rakeTick: null, rip: null, lacerateTick: null };
    const racialCrit = (s, t) => t >= (s.elunesLightStarts ?? Infinity) - 1e-9 && t < (s.elunesLightExpires ?? -Infinity) - 1e-9 ? 10 : 0;
    let ffExpires = -Infinity, wfExpires = -Infinity, wfCharges = 0, lastTime = 0;
    let rageStarts = Infinity, rageExpires = -Infinity, rageAP = 0;
    const activeFF = t => c.externalFaerieFire || t < ffExpires - 1e-9;
    const apAt = (t, s = {}) => {
      const mighty = t >= rageStarts - 1e-9 && t < rageExpires - 1e-9;
      return ((!s.form || s.form === 'cat') ? c.attackPower + (mighty ? rageAP : 0) : forms.stats(c, s.form, mighty).ap)
        + (wfCharges > 0 && t < wfExpires - 1e-9 ? 246 : 0);
    };
    const bleedingAt = (t, tick = false) => Object.values(dots).some(dot => dot && (tick ? t <= dot.expires + 1e-9 : t < dot.expires - 1e-9));
    function deal(id, time, outcome, amount, s, periodic = false) {
      const row = d.bySource[id]; row.events++; row[outcome]++; row.damage += amount; d.total += amount;
      const event = { time, source: id, outcome, damage: amount, periodic };
      if (debug) d.events.push(event);
      return event;
    }
    function integrate(to) {
      const from = Math.max(0, lastTime), end = Math.max(from, to), dt = end - from;
      const ffTime = c.externalFaerieFire ? dt : Math.max(0, Math.min(end, ffExpires) - from);
      const on = armor(c, true), off = armor(c, false);
      d.faerieFire.uptimeSeconds += ffTime;
      d.armorSeconds += on * ffTime + off * (dt - ffTime);
      d.mitigationSeconds += (1 - armorMultiplier(on)) * ffTime + (1 - armorMultiplier(off)) * (dt - ffTime);
      lastTime = to;
    }
    function advance(to, s) {
      for (;;) {
        let id = null, next = Infinity;
        for (const key of Object.keys(dots)) if (dots[key] && dots[key].next <= dots[key].expires + 1e-9 && dots[key].next < next) { id = key; next = dots[key].next; }
        if (!id || next > to + 1e-9 || next > c.duration + 1e-9) break;
        const dot = dots[id], berserk = id === 'rakeTick' && next < s.berserkExpires - 1e-9;
        const crit = rng() * 100 < Math.min(100, forms.stats(c, s.form || 'cat').crit + racialCrit(s, next) + (berserk ? 100 : 0));
        const bleeding = bleedingAt(next, true);
        const amount = base(c, id, apAt(next, s), dot.cp) * multiplier(c, id, bleeding, crit, armor(c, activeFF(next)))
          + giftBonus(c, id, bleeding, crit);
        deal(id, next, crit ? 'crit' : 'hit', amount, s, true);
        dot.next = Math.round((dot.next + dot.interval) * 1e6) / 1e6;
      }
      integrate(to);
    }
    function attack(s, ability, outcome) {
      const id = ability === 'rake' ? 'rakeInitial' : ability;
      const white = whiteSource(ability);
      if (!outcome.success) return ability === 'rip' ? null : deal(id, s.time, 'avoided', 0, s);
      if (ability === 'rip') return null; // Application has no direct damage or crit.
      const kind = white ? outcome.kind || whiteOutcome(c, rng, racialCrit(s, s.time)) : outcome.crit ? 'crit' : 'hit';
      const bleeding = bleedingAt(s.time);
      const amount = (base(c, id, apAt(s.time, s), id === 'lacerate' ? s.lacerateStacks : s.combo, ability === 'bite' ? s.energy : 0, rng())
        * multiplier(c, id, bleeding, kind === 'crit', armor(c, activeFF(s.time)))
        + giftBonus(c, id, bleeding, kind === 'crit'))
        * (kind === 'glance' ? 0.55 + 0.2 * rng() : 1);
      const event = deal(id, s.time, kind, amount, s);
      if (white && s.time < wfExpires - 1e-9 && wfCharges > 0) wfCharges--;
      return event;
    }
    function applyBleed(id, time, cp) {
      const key = id === 'rake' ? 'rakeTick' : id === 'lacerate' ? 'lacerateTick' : 'rip', interval = id === 'rip' ? 2 : 3, duration = id === 'rake' ? 9 : id === 'rip' ? 12 : 15;
      dots[key] = { next: time + interval, expires: time + duration, interval, cp };
    }
    function foregoneTick(id, s) {
      const key = id === 'rake' ? 'rakeTick' : 'rip', dot = dots[key];
      if (!dot || dot.next > c.duration + 1e-9) return 0;
      const at = dot.next, crit = Math.min(1, (c.crit + racialCrit(s, at) + (key === 'rakeTick' && at < s.berserkExpires - 1e-9 ? 100 : 0)) / 100);
      const amount = critical => base(c, key, apAt(at), dot.cp) * multiplier(c, key, true, critical, armor(c, activeFF(at))) + giftBonus(c, key, true, critical);
      // Conditional on known buffs surviving to the scheduled tick. No new
      // procs, random draws, or claim of the full counterfactual damage delta.
      return amount(false) * (1 - crit) + amount(true) * crit;
    }
    function windfury(time, trigger) { wfExpires = time + 1; wfCharges = whiteSource(trigger) ? 1 : 2; }
    function mightyRage(time, bonusAP) { rageStarts = time; rageExpires = time + 20; rageAP = bonusAP; }
    function faerieFire(time, outcome) {
      d.faerieFire.attempts++;
      const landed = outcome ?? rng() * 100 >= c.faerieFireMiss;
      if (landed) { ffExpires = time + 40; d.faerieFire.landed++; }
      return landed;
    }
    function finish(s) { advance(c.duration, s); return { ...d, dps: d.total / c.duration }; }
    return { advance, attack, applyBleed, foregoneTick, windfury, mightyRage, faerieFire, finish };
  }
  function aggregate(fights) {
    if (!fights.length || !fights.every(f => f.damage)) return null;
    const n = fights.length, time = fights.reduce((sum, f) => sum + f.duration, 0);
    const total = fights.reduce((sum, f) => sum + f.damage.total, 0), dps = total / time;
    const se = n > 1 ? Math.sqrt(fights.reduce((sum, f) => sum + (f.damage.total - dps * f.duration) ** 2, 0) / (n - 1) / n) / (time / n) : null;
    return { total, meanTotal: total / n, dps, se, provenance: fights[0].damage.provenance,
      bySource: Object.fromEntries(SOURCES.map(id => {
        const row = Object.fromEntries(Object.keys(fights[0].damage.bySource[id]).map(k => [k, fights.reduce((sum, f) => sum + f.damage.bySource[id][k], 0)]));
        return [id, { ...row, meanDamage: row.damage / n, dps: row.damage / time, share: total ? row.damage / total * 100 : 0 }];
      })), meanArmor: fights.reduce((sum, f) => sum + f.damage.armorSeconds, 0) / time,
      mitigation: fights.reduce((sum, f) => sum + f.damage.mitigationSeconds, 0) / time * 100,
      faerieFireUptime: fights.reduce((sum, f) => sum + f.damage.faerieFire.uptimeSeconds, 0) / time * 100 };
  }
  return { REVISION, FORMULAS, SOURCES, LABELS, DEFAULTS, normalize, validate, provenance, armor, armorMultiplier, paw, base, multiplier, whiteOutcome, create, aggregate };
});
