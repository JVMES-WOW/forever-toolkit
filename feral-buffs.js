(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./feral-talents.js') : root.FOREVER_FERAL_TALENTS);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_BUFFS = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (talents) {
  'use strict';
  // Recipient categories / artwork: raid-data.js and research/raid-buff-audit.md.
  // Amounts: Forever 6601767 sim/core/spelldata/spells_auto_gen.go, buffs/drivers.go.
  // Stat conversions: sim/druid/druid.go, forms.go, core/base_stats_auto_gen.go.
  const SOURCE = 'https://github.com/ElliotWood/Forever/tree/660176710eb13a85eb5b4c3dd8f7de984883c99b/sim/core/buffs';
  const CONSUMABLE_SOURCE = 'https://github.com/ElliotWood/Forever/tree/df7a2cfd2f7de7325589a567212b39acdd8b0620';
  // Client-derived consumes/database at this revision. Hyjal bonuses are from
  // Forever item tooltips (274273–274276); the fork's flask records hold only
  // Stamina. Long-duration consumes are assumed maintained, without Cat GCDs.
  const CONSUMABLE_ICONS = ['mongoose', 'jujuPower', 'jujuMight', 'scorpok', 'filet', 'sharpeningStone',
    'naturalAccuracy', 'naturalAggression', 'naturalPrecision', 'naturalSwiftness', 'mightyRage', 'manaPotion'];
  const BASE = { baseStrength: 'Strength', baseAgility: 'Agility', baseStamina: 'Stamina',
    baseIntellect: 'Intellect', baseSpirit: 'Spirit', baseMana: 'Mana', baseAttackPower: 'Attack Power',
    baseSheetCrit: 'Sheet crit (%)', baseHealth: 'Health', baseArmor: 'Armor',
    baseHit: 'Melee hit (%)', baseExpertise: 'Expertise (%)', baseSpellHit: 'Spell hit (%)', baseSwingTimer: 'Cat swing timer (s)' };
  const DEFAULTS = Object.freeze({ ...talents.DEFAULTS, statMode: 'manual', ...Object.fromEntries(Object.keys(BASE).map(k => [k, null])),
    buffHeartOfWild: 0, buffLivingSpirit: 0, baseIncludesLeader: false,
    markWild: true, arcaneIntellect: true, strengthEarth: true, blessingKings: true, blessingMight: true,
    battleShout: 1, critAura: 'leader', graceAir: false, fortitude: false,
    manaSpringImproved: false, manaTide: false,
    baseHit: 0, baseExpertise: 0, baseSpellHit: 0, baseSwingTimer: 1,
    mongoose: false, jujuPower: false, jujuMight: false, scorpok: false, filet: false, sharpeningStone: false,
    naturalFlask: 'none', flaskZone: false, potionStrategy: 'mana', potionManaReserve: 50 });
  const CONSUMABLE_KEYS = ['mongoose', 'jujuPower', 'jujuMight', 'scorpok', 'filet', 'sharpeningStone', 'naturalFlask', 'flaskZone'];
  const STATIC_KEYS = ['markWild', 'arcaneIntellect', 'strengthEarth', 'blessingKings', 'blessingMight', 'battleShout', 'critAura', 'graceAir', 'fortitude', 'divineSpirit', ...CONSUMABLE_KEYS];
  const DERIVED_KEYS = ['startingMana', 'spirit', 'spiritMode', 'attackPower', 'crit', 'miss', 'dodge', 'parry', 'faerieFireMiss', 'swingTimer'];
  const round = n => Math.round(n * 1e8) / 1e8;
  function normalize(input) {
    const c = talents.apply({ ...DEFAULTS, ...input });
    if (!['manual', 'final', 'unbuffed'].includes(c.statMode)) throw new Error('Invalid stat input mode.');
    for (const [key, fallback] of Object.entries(DEFAULTS)) {
      if (typeof fallback === 'boolean') c[key] = typeof c[key] === 'boolean' ? c[key] : fallback;
    }
    for (const key of Object.keys(BASE)) {
      if (c[key] === '' || c[key] == null) { c[key] = null; continue; }
      c[key] = Number(c[key]);
      if (!Number.isFinite(c[key]) || c[key] < 0 || c[key] > (['baseSheetCrit', 'baseHit', 'baseExpertise', 'baseSpellHit'].includes(key) ? 100 : 100000)) throw new Error(`Invalid unbuffed ${BASE[key]}.`);
    }
    for (const [key, max] of [['buffHeartOfWild', 5], ['buffLivingSpirit', 3], ['battleShout', 2]]) {
      c[key] = Number(c[key]);
      if (!Number.isInteger(c[key]) || c[key] < 0 || c[key] > max) throw new Error(`Invalid buff setting: ${key}.`);
    }
    if (!['none', 'leader', 'moonkin'].includes(c.critAura)) throw new Error('Invalid critical-strike aura.');
    if (!['none', 'accuracy', 'aggression', 'precision', 'swiftness'].includes(c.naturalFlask)) throw new Error('Choose one Natural flask, or None.');
    if (!['mana', 'rage', 'openerRage', 'adaptive'].includes(c.potionStrategy)) throw new Error('Invalid potion strategy.');
    c.potionManaReserve = Number(c.potionManaReserve);
    if (!Number.isFinite(c.potionManaReserve) || c.potionManaReserve < 0 || c.potionManaReserve > 100) throw new Error('Potion mana reserve must be between 0 and 100%.');
    if (c.statMode === 'unbuffed' && (!(c.baseSwingTimer >= 0.1) || c.baseSwingTimer > 10)) throw new Error('Unbuffed Cat swing timer must be 0.1–10 seconds.');
    if (c.usePotions && c.potionStrategy !== 'mana' && c.statMode !== 'unbuffed') throw new Error('Mighty Rage strategies require an unbuffed Cat baseline for Strength scaling. Import unbuffed stats, choose Mana only, or turn potions off.');
    // If both are supplied programmatically, the fork gives Windfury priority.
    // The UI actively deselects the alternative instead of leaving it checked.
    if (c.windfury) c.graceAir = false;
    return c;
  }
  function calculate(input, mightyRage = false) {
    const c = normalize(input);
    if (c.statMode !== 'unbuffed') return null;
    for (const key of ['baseStrength', 'baseAgility', 'baseIntellect', 'baseSpirit', 'baseMana', 'baseAttackPower', 'baseSheetCrit']) {
      if (c[key] == null) throw new Error(`Supply unbuffed ${BASE[key]} (or import an unbuffed Cat export) before applying stat buffs.`);
    }
    // Exported totals already include gear, Cat Form, and self talents. Only new
    // flat buff increments receive the talent multiplier; never reapply it to
    // the baseline. Sheet rounding prevents reconstructing hidden fractions.
    const kings = c.blessingKings ? 1.1 : 1, mark = c.markWild ? 16 : 0;
    const flask = c.flaskZone ? c.naturalFlask : 'none';
    const attributes = {};
    for (const [key, flat, talent] of [
      ['Strength', mark + (c.strengthEarth ? 53 : 0) + (c.jujuPower ? 30 : 0) + (mightyRage ? 60 : 0), 1 + 0.02 * c.buffHeartOfWild],
      ['Agility', mark + (c.graceAir ? 89 : 0) + (c.mongoose ? 25 : 0) + (c.scorpok ? 25 : 0) + (c.filet ? 25 : 0), 1],
      ['Intellect', mark + (c.arcaneIntellect ? 31 : 0), 1 + 0.02 * c.buffHeartOfWild],
      ['Spirit', mark + (c.divineSpirit ? 40 : 0), 1 + 0.05 * c.buffLivingSpirit],
      ['Stamina', mark + (c.fortitude ? 70 : 0) + (c.filet ? 10 : 0) + (c.naturalFlask !== 'none' ? 60 : 0), 1]
    ]) {
      const base = c[`base${key}`];
      // Mystic Mushroom is a total-Spirit multiplier, including flat buffs.
      // It is gear-derived; imported totals never receive it again.
      const relic = key === 'Spirit' && c.characterMode === 'gear' && c.gearIdol === 249396 ? 1.05 : 1;
      attributes[key] = base == null ? null : Math.floor(((c.talentMode === 'build' && c.talentStats === 'excluded' ? base * talent : base) + flat * talent) * kings * relic + 1e-9);
    }
    const delta = name => attributes[name] - c[`base${name}`];
    const freshTalents = c.talentMode === 'build' && c.talentStats === 'excluded';
    const ap = c.baseAttackPower + 2 * delta('Strength') + delta('Agility') + (freshTalents ? c.talentEffects.attackPower : 0) + (c.blessingMight ? 133 : 0) + (c.battleShout ? 139 + (c.battleShout === 2 ? 30 : 0) : 0) + (c.jujuMight ? 40 : 0);
    const sheetCrit = Math.min(100, c.baseSheetCrit + delta('Agility') / 20 + (freshTalents ? c.talentEffects.crit : 0) + ((c.critAura !== 'none' || (freshTalents && c.talentEffects.leader)) && !c.baseIncludesLeader ? 3 : 0)
      + (c.mongoose ? 2 : 0) + (c.sharpeningStone ? 2 : 0) + (flask === 'aggression' ? 4 : 0));
    const hit = c.baseHit + (freshTalents ? c.talentEffects.hit : 0) + (flask === 'accuracy' ? 5 : 0), expertise = c.baseExpertise + (flask === 'precision' ? 5 : 0);
    const spellHit = c.baseSpellHit + (freshTalents ? c.talentEffects.hit : 0) + (flask === 'accuracy' ? 5 : 0), swingTimer = c.baseSwingTimer / (flask === 'swiftness' ? 1.05 : 1);
    const intellectMana = n => Math.min(20, n) + Math.max(0, n - 20) * 15;
    const mana = c.baseMana + intellectMana(attributes.Intellect) - intellectMana(c.baseIntellect);
    const armor = c.baseArmor == null ? null : c.baseArmor + 2 * delta('Agility') + (c.markWild ? 385 : 0);
    return { attributes, sheetCrit: round(sheetCrit), armor,
      patch: { startingMana: round(mana), spirit: attributes.Spirit, spiritMode: 'total', attackPower: round(ap), crit: round(Math.max(0, sheetCrit - 4.8)),
        miss: round(Math.max(0, 8 - Math.max(0, hit - 1))), dodge: round(Math.max(0, 6.5 - expertise)), parry: 0,
        faerieFireMiss: round(Math.max(1, 17 - spellHit)), swingTimer: round(swingTimer) },
      rows: [...Object.entries(attributes).map(([label, value]) => ({ label, before: c[`base${label}`], after: value })),
        { label: 'Mana', before: c.baseMana, after: round(mana) }, { label: 'Attack Power', before: c.baseAttackPower, after: round(ap) },
        { label: 'Sheet crit (%)', before: c.baseSheetCrit, after: round(sheetCrit) },
        { label: 'Crit vs boss (%)', before: round(Math.max(0, c.baseSheetCrit - 4.8)), after: round(Math.max(0, sheetCrit - 4.8)) },
        { label: 'Melee hit (%)', before: c.baseHit, after: hit }, { label: 'Expertise (%)', before: c.baseExpertise, after: expertise },
        { label: 'Spell hit (%)', before: c.baseSpellHit, after: spellHit }, { label: 'Cat swing timer (s)', before: c.baseSwingTimer, after: round(swingTimer) },
        { label: 'Armor (reference)', before: c.baseArmor, after: armor }] };
  }
  const mightyRageAP = c => c.statMode === 'unbuffed' ? round(calculate(c, true).patch.attackPower - calculate(c).patch.attackPower) : 0;
  function apply(input) { const c = normalize(input); return { ...c, ...(calculate(c)?.patch || {}) }; }
  // "All" selects one representative from each exclusive category, never
  // illegal stacking. It deliberately does not change personal cast policies.
  const ALL_BUFFS = { markWild: true, arcaneIntellect: true, strengthEarth: true, blessingKings: true,
    blessingMight: true, battleShout: 1, critAura: 'leader', graceAir: false, windfury: true,
    fortitude: true, divineSpirit: true, blessingWisdom: true, manaSpring: true, manaSpringImproved: true, manaTide: true };
  // Default raid support does not assume Restoration Shaman talents or Wisdom.
  // Explicit "All" remains an opt-in to those additional mana effects.
  const DEFAULT_BUFFS = { ...ALL_BUFFS, blessingWisdom: false, manaSpringImproved: false, manaTide: false };
  const NO_BUFFS = { ...Object.fromEntries(Object.keys(ALL_BUFFS).map(k => [k, false])), battleShout: 0, critAura: 'none', manaSpringImproved: false };
  const ALL_DEBUFFS = { sunderStacks: 5, exposeArmor: false, externalFaerieFire: true, curseRecklessness: false, judgmentWisdom: true, giftOfArthas: true, crystalYield: true };
  const NO_DEBUFFS = { sunderStacks: 0, exposeArmor: false, externalFaerieFire: false, curseRecklessness: false, judgmentWisdom: false, giftOfArthas: false, crystalYield: false };
  return Object.freeze({ SOURCE, CONSUMABLE_SOURCE, CONSUMABLE_ICONS, CONSUMABLE_KEYS, BASE, DEFAULTS, STATIC_KEYS, DERIVED_KEYS, normalize, calculate, mightyRageAP, apply, ALL_BUFFS, DEFAULT_BUFFS, NO_BUFFS, ALL_DEBUFFS, NO_DEBUFFS });
});
