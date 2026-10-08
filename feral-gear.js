(function(root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./feral-gear-data.js') : root.FOREVER_FERAL_GEAR_DATA);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_GEAR = api;
})(globalThis, function(data) {
  'use strict';
  const VERSION = 1;
  const STAT_MODEL = 'weapon-scaling-no-feral-ap-v1';
  const SLOTS = { HEAD: [1, 'Head'], NECK: [2, 'Neck'], SHOULDERS: [3, 'Shoulders'], BACK: [4, 'Back'], CHEST: [5, 'Chest'],
    WRISTS: [6, 'Wrists'], HANDS: [7, 'Hands'], WAIST: [8, 'Waist'], LEGS: [9, 'Legs'], FEET: [10, 'Feet'],
    FINGER_1: [11, 'Ring 1'], FINGER_2: [11, 'Ring 2'], TRINKET_1: [12, 'Trinket 1'], TRINKET_2: [12, 'Trinket 2'],
    MAIN_HAND: [13, 'Main hand'], OFF_HAND: [13, 'Off hand'], RANGED: [14, 'Idol'] };
  const RACES = { TAUREN: { name: 'Tauren', faction: 2, offset: [5, -5, 2, -5, 2], hit: 1, health: 1.05, speed: 1 },
    NIGHT_ELF: { name: 'Night Elf', faction: 1, offset: [-3, 5, -1, 0, 0], hit: 0, health: 1, speed: 1 },
    HIGH_ORDER_SKYBORNE: { name: 'High Order Skyborne', faction: 1, offset: [-1, 1, -1, 1, 0], hit: 0, health: 1, speed: 1.01 },
    WINDSHAPER_SKYBORNE: { name: 'Windshaper Skyborne', faction: 2, offset: [-1, 1, -1, 1, 0], hit: 0, health: 1, speed: 1.01 } };
  const AREAS = ['None / unspecified', 'Forest / grassland', 'Mountainous', 'Snowy', 'Desert', 'Swamp', 'Wasteland', 'Haunted', 'Cavernous', 'Volcanic', 'Strongholds / cities'];
  const STAT_NAMES = { 0: 'Strength', 1: 'Agility', 2: 'Stamina', 3: 'Intellect', 4: 'Healing power (not modeled)', 5: 'Spell damage (not modeled)',
    12: 'Spell hit rating', 13: 'Spell crit rating', 14: 'Spell haste rating (Read Ley Line)', 16: 'Spirit', 17: 'Attack power', 18: 'Ranged AP (not modeled)',
    20: 'Melee hit rating', 21: 'Melee crit rating', 22: 'Melee haste rating', 23: 'Armor penetration', 24: 'Expertise rating',
    30: 'Armor (reference)', 31: 'Bonus armor (reference)', 32: 'Health (reference)', 33: 'Mana', 34: 'MP5', 40: 'Physical damage (not modeled)' };
  const clone = v => JSON.parse(JSON.stringify(v));
  const empty = (race = 'TAUREN') => ({ version: VERSION, race, slots: {} });
  function compatible(item, slot, race) {
    if (!item || !SLOTS[slot] || item.type !== SLOTS[slot][0]) return false;
    if (item.factionRestriction && race && item.factionRestriction !== RACES[race]?.faction) return false;
    if (item.classAllowlist?.length && !item.classAllowlist.includes(11)) return false;
    if (item.armorType > 2 || (item.weaponType && ![2, 3, 4, 5, 8].includes(item.weaponType)) || (item.rangedWeaponType && item.rangedWeaponType !== 6)) return false;
    if (slot === 'MAIN_HAND' && (item.handType === 3 || item.weaponType === 5)) return false;
    if (slot === 'OFF_HAND' && item.weaponType !== 5) return false;
    return true;
  }
  function enchantCompatible(e, item, slot) {
    if (!e || !item || ![e.type, ...(e.extraTypes || [])].includes(SLOTS[slot]?.[0])) return false;
    if (e.classAllowlist?.length && !e.classAllowlist.includes(11)) return false;
    if (slot === 'RANGED' && item.rangedWeaponType === 6) return false; // Idols cannot take ranged-weapon scopes, including stat scopes.
    if (e.weaponDamage && slot !== 'MAIN_HAND') return false;
    if (e.enchantType === 1 && item.handType !== 4) return false; // Two-hand-only.
    if (e.enchantType === 2 && item.weaponType !== 7) return false;
    if (e.enchantType === 4 && item.weaponType !== 8) return false;
    if (e.enchantType === 5 && item.weaponType !== 5) return false;
    if (slot === 'OFF_HAND' && e.type === 13 && e.enchantType !== 5) return false;
    return true;
  }
  function validate(input) {
    const b = typeof input === 'string' ? JSON.parse(input) : clone(input);
    if (!b || b.version !== VERSION || !Object.hasOwn(RACES, b.race) || !b.slots || typeof b.slots !== 'object' || Array.isArray(b.slots)) throw new Error('Invalid gear build or race.');
    const ids = new Set(), categories = new Set();
    for (const [slot, choice] of Object.entries(b.slots)) {
      const item = data.items[choice?.id];
      if (data.excludedItems?.[choice?.id]) throw new Error(`Item ${choice.id}: ${data.excludedItems[choice.id]}`);
      if (!compatible(item, slot, b.race)) throw new Error(`Invalid item for ${SLOTS[slot]?.[1] || slot} / ${RACES[b.race].name}.`);
      if (!Object.hasOwn(item.variants, String(choice.variant))) throw new Error(`Choose a valid variant for ${item.name}.`);
      if (choice.suffix && (!item.randomSuffixOptions?.includes(choice.suffix) || !data.suffixes[choice.suffix])) throw new Error(`Invalid suffix for ${item.name}.`);
      if (item.randomSuffixOptions?.length && !choice.suffix) throw new Error(`Choose a suffix for ${item.name}.`);
      if (choice.enchant && !enchantCompatible(data.enchants[choice.enchant], item, slot)) {
        const e = data.enchants[choice.enchant];
        throw new Error(e?.classAllowlist?.length && !e.classAllowlist.includes(11)
          ? `${e.name} is class-restricted and unavailable to Druids. Choose a different enchant for ${item.name}.`
          : `Invalid enchant for ${item.name}.`);
      }
      if (item.unique && ids.has(item.id)) throw new Error(`${item.name} is unique; equip only one.`);
      if (item.limitCategory && categories.has(item.limitCategory)) throw new Error(`${item.name} conflicts with another unique-equipped category.`);
      ids.add(item.id); if (item.limitCategory) categories.add(item.limitCategory);
      b.slots[slot] = { id: item.id, variant: String(choice.variant), suffix: choice.suffix || 0, enchant: choice.enchant || '' };
    }
    if (data.items[b.slots.MAIN_HAND?.id]?.handType === 4 && b.slots.OFF_HAND) throw new Error('A two-handed weapon cannot be equipped with an off hand.');
    return { version: VERSION, race: b.race, slots: b.slots };
  }
  function replace(build, slot, choice) {
    const next = clone(build), changes = [];
    if (!SLOTS[slot]) throw new Error('Unknown equipment slot.');
    if (choice) {
      // Item-only swaps retain the slot's enchant. An explicit empty string is
      // still an intentional removal (enchant selector, imports, benchmarks).
      const previous = build.slots[slot]?.enchant || '';
      const inherits = choice.enchant === undefined;
      const retained = enchantCompatible(data.enchants[previous], data.items[choice.id], slot);
      next.slots[slot] = { ...choice, enchant: inherits ? (retained ? previous : '') : choice.enchant };
      if (inherits && previous && !retained) changes.push(`${data.enchants[previous]?.name || 'Current enchant'} cannot be used on this item; enchant removed.`);
    } else delete next.slots[slot];
    if (choice && slot === 'MAIN_HAND' && data.items[choice.id]?.handType === 4 && next.slots.OFF_HAND) { delete next.slots.OFF_HAND; changes.push('Unequip off hand for the two-handed weapon.'); }
    if (choice && slot === 'OFF_HAND' && data.items[next.slots.MAIN_HAND?.id]?.handType === 4) { delete next.slots.MAIN_HAND; changes.push('Unequip the two-handed main hand.'); }
    return { build: validate(next), changes };
  }
  function warningsFor(item, enchant) {
    const warnings = [];
    for (const e of item.itemEffects || []) if (!((item.id === 8345 && e.buffId === 17768) || (item.id === 272427 && e.buffId === 1291059)
      || (item.id === 22397 && e.buffId === 27851) || (item.id === 263411 && e.buffId === 1270470)
      || (item.id === 249396 && e.buffId === 1248751))) warnings.push(`${item.name}: ${e.buffName || `effect ${e.buffId}`} not simulated.`);
    if (item.id === 263411) warnings.push('Idol of Shifting Tides: −40 base mana on Shifting Power before Natural Shapeshifter. Inferred from matching client spell masks, not a live-server test.');
    if (item.setId || item.setName) warnings.push(`${item.name}: ${item.setName || `set ${item.setId}`} set bonuses not simulated (Tier 1 override is manual).`);
    for (const e of enchant?.enchantEffects || []) warnings.push(`${enchant.name}: ${e.buffName || 'special effect'} not simulated.`);
    if (enchant && !Object.keys(enchant.stats).length && !enchant.weaponDamage && !enchant.enchantEffects?.length) warnings.push(`${enchant.name}: no static stats; use/proc not simulated.`);
    const professions = ['Unknown profession', 'Alchemy', 'Blacksmithing', 'Enchanting', 'Engineering', 'Herbalism', 'Inscription', 'Jewelcrafting', 'Leatherworking', 'Mining', 'Skinning', 'Tailoring'];
    for (const source of [item, enchant]) if (source?.requiredProfession) warnings.push(`${source.name}: requires ${professions[source.requiredProfession] || 'profession ' + source.requiredProfession}; profession eligibility is not simulated.`);
    return warnings;
  }
  function calculate(input, options = {}) {
    const build = validate(input), race = RACES[build.race];
    const totals = {}, pseudo = {}, rows = [], warnings = [], sets = {};
    const areas = String(options.gearAreaTypes || '').split(',').filter(Boolean).map(Number);
    if (areas.some(n => !Number.isInteger(n) || n < 1 || n > 10) || new Set(areas).size !== areas.length) throw new Error('Invalid encounter terrain.');
    const add = (into, values) => { for (const [k, v] of Object.entries(values || {})) into[k] = (into[k] || 0) + v; };
    for (const [slot, choice] of Object.entries(build.slots)) {
      const item = data.items[choice.id], variant = item.variants[choice.variant], enchant = data.enchants[choice.enchant];
      const stats = { ...variant.stats }; add(stats, data.suffixes[choice.suffix]?.stats); add(stats, enchant?.stats);
      for (const area of variant.areaStats || []) {
        if (areas.includes(area.areaType)) add(stats, area.stats);
        warnings.push(`${item.name}: ${AREAS[area.areaType] || `area ${area.areaType}`} bonus ${areas.includes(area.areaType) ? 'active' : 'inactive'}; independent of the flask zone.`);
      }
      // Legacy Feral AP duplicates equipped-weapon scaling. Ignore it even in
      // older/custom catalogs, including conditional, suffix and enchant stats.
      delete stats[19];
      add(totals, stats); add(pseudo, item.pseudoStats); add(pseudo, enchant?.pseudoStats);
      rows.push({ slot, name: item.name, stats }); warnings.push(...warningsFor(item, enchant));
      if (item.setId) sets[item.setId] = (sets[item.setId] || 0) + 1;
    }
    // Generated stat weights use explicit perturbations to this same
    // talent-free baseline. This is not equipment and never edits the build.
    if (options.weightPerturbation) {
      const { stat, amount } = options.weightPerturbation;
      const ids = { strength: 0, agility: 1, intellect: 3, spirit: 16, attackPower: 17, mana: 33, mp5: 34, armorPen: 23 };
      const ratings = { hit: [20, 10], crit: [21, 14], haste: [22, 10], expertise: [24, 10] };
      const separateHit = { meleeHit: 12, spellHit: 13 };
      const signed = ['meleeHit', 'spellHit', 'expertise'].includes(stat);
      if (!Number.isFinite(amount) || amount === 0 || Math.abs(amount) > 1000 || (!signed && amount < 0) || ![...Object.keys(ids), ...Object.keys(ratings), ...Object.keys(separateHit), 'dps'].includes(stat)) throw new Error('Invalid stat-weight perturbation.');
      if (Object.hasOwn(ids, stat)) add(totals, { [ids[stat]]: amount });
      else if (ratings[stat]) add(totals, { [ratings[stat][0]]: amount * ratings[stat][1] });
      else if (Object.hasOwn(separateHit, stat)) add(pseudo, { [separateHit[stat]]: amount });
      else add(pseudo, { 0: amount });
    }
    const n = id => totals[id] || 0, p = id => pseudo[id] || 0;
    const [str, agi, sta, int, spi] = [65, 60, 70, 100, 110].map((n, i) => n + race.offset[i] + (totals[[0, 1, 2, 3, 16][i]] || 0));
    const manaFromInt = x => Math.min(20, x) + Math.max(0, x - 20) * 15;
    const healthFromSta = x => Math.min(20, x) + Math.max(0, x - 20) * 10;
    // Forever core/forever_rules.go unifies physical + spell hit/crit ratings.
    const hit = (n(20) + n(12)) / 10, crit = (n(21) + n(13)) / 14;
    const mh = build.slots.MAIN_HAND, weapon = data.items[mh?.id], v = weapon?.variants[mh.variant], enchant = data.enchants[mh?.enchant];
    // core/attack.go newWeaponFromUnarmed: 0 base damage at 1 second (AP still contributes).
    const speed = weapon?.weaponSpeed || 1, min = weapon ? v.weaponDamageMin : 0, max = weapon ? v.weaponDamageMax : 0;
    if (!Number.isFinite(min) || !Number.isFinite(max)) throw new Error('This weapon variant has no resolved damage range. Choose another variant.');
    if (n(40)) warnings.push('Flat physical spell-damage stat is not modeled; no guessed coefficient is applied.');
    for (const [id, value] of Object.entries(pseudo)) if (value && ![0, 12, 13, 14, 17, 20, 27].includes(Number(id))) warnings.push(`Item pseudo-stat ${id} is reference only, not modeled.`);
    if (build.race === 'TAUREN') warnings.push('War Stomp active racial is not simulated. Passive +1% melee/spell hit is modeled; health is reference only.');
    if (build.race === 'NIGHT_ELF') warnings.push('Elune’s Light is available under Rotation → Active racials; disabled until selected. Dodge/movement racials have no DPS effect in this encounter.');
    if (build.race.includes('SKYBORNE')) warnings.push(`${build.race === 'HIGH_ORDER_SKYBORNE' ? 'Read Ley Line is available under Rotation → Active racials; disabled until selected.' : 'Windshaper’s active movement racial is not simulated.'} Passive 1% attack/cast speed and +5% damage versus Elementals are modeled.`);
    warnings.push('Item armor data may be incomplete in the pinned catalog; armor/health are reference only. Unsupported effects are excluded, not estimated.');
    const probePrecision = n => options.weightPerturbation ? Number(n.toFixed(10)) : n;
    const patch = { statMode: 'unbuffed', talentStats: 'excluded', baseIncludesLeader: false,
      racialRace: build.race, leyLineSpellHaste: n(14) / 10,
      baseStrength: str, baseAgility: agi, baseStamina: sta, baseIntellect: int, baseSpirit: spi,
      baseMana: 1244 + manaFromInt(int) + n(33), baseAttackPower: 100 + 2 * str + agi + n(17),
      baseSheetCrit: 0.9 + agi / 20 + crit + p(14), baseHit: probePrecision(hit + p(12) + race.hit), baseSpellHit: probePrecision(hit + p(13) + race.hit),
      baseExpertise: probePrecision(n(24) / 10 + p(27)), baseSwingTimer: 1 / ((1 + n(22) / 1000 + p(20) / 100) * (p(17) || 1) * race.speed),
      baseHealth: (1483 + healthFromSta(sta) + n(32)) * race.health, baseArmor: n(30) + n(31) + 2 * agi,
      // User-confirmed Forever rule: flat main-hand enchant damage goes on the
      // 1s Cat paws AFTER equipped-weapon DPS normalization. Keep the actual
      // weapon range separate; do not divide Impact/Striking by equipped speed.
      weaponSpeed: speed, weaponMin: min + p(0) * speed, weaponMax: max + p(0) * speed,
      gearPawDamage: enchant?.weaponDamage || 0,
      damageWeaponId: weapon?.id || 0, damageWeaponSource: `Gear builder · Forever ${data.revision.slice(0, 7)} · ${weapon?.name || 'Unarmed'}${enchant ? ' + ' + enchant.name : ''}`,
      wolfsheadHelm: build.slots.HEAD?.id === 8345, howlingIdol: build.slots.RANGED?.id === 272427,
      ...([22397, 263411, 249396].includes(build.slots.RANGED?.id) ? { gearIdol: build.slots.RANGED.id } : {}),
      gearMP5: n(34), gearArmorPen: n(23), gearDamageMultiplier: build.race.includes('SKYBORNE') && options.targetCreature === 'elemental' ? 1.05 : 1 };
    return { build, patch, rows, totals, sets, warnings: [...new Set(warnings)], revision: data.revision };
  }
  function fromExport(input) {
    const errors = [], warnings = [];
    if (!input || input.character?.level !== 60 || String(input.character?.gameClass).toUpperCase() !== 'DRUID') return { errors: ['Gear import requires a level-60 Druid.'], warnings };
    const race = String(input.character.race || '').toUpperCase().replace(/[ -]/g, '_');
    const build = empty(race);
    if (!RACES[race]) errors.push('Export race is missing or unsupported.');
    if (!Array.isArray(input.items)) errors.push('An equipment list is required for gear import.');
    for (const row of Array.isArray(input.items) ? input.items : []) {
      if (!row || typeof row !== 'object') { errors.push('Invalid equipped item.'); continue; }
      const item = data.items[row.id];
      if (data.excludedItems?.[row.id]) { errors.push(`Item ${row.id}: ${data.excludedItems[row.id]}`); continue; }
      if (!item || !compatible(item, row.slot, race)) { errors.push(`Unknown/incompatible item: ${row.name || row.id} (${row.slot}). Use totals import or resolve this item.`); continue; }
      if (build.slots[row.slot]) { errors.push(`Duplicate slot: ${row.slot}.`); continue; }
      const variants = Object.keys(item.variants), variant = row.variant != null ? String(row.variant) : variants.length === 1 ? variants[0] : null;
      if (variant === null) { errors.push(`Ambiguous variant: ${item.name}.`); continue; }
      let enchant = '';
      if (row.enchant) {
        const restricted = Object.values(data.enchants).find(e => e.classAllowlist?.length && !e.classAllowlist.includes(11)
          && (row.enchant.id != null ? e.effectId === row.enchant.id : e.spellId === row.enchant.spellId)
          && (!row.enchant.spellId || e.spellId === row.enchant.spellId));
        if (restricted) { errors.push(`${restricted.name} is class-restricted and unavailable to Druids (${item.name}).`); continue; }
        let candidates = Object.entries(data.enchants).filter(([, e]) => enchantCompatible(e, item, row.slot) &&
          (row.enchant.id != null ? e.effectId === row.enchant.id : e.spellId === row.enchant.spellId));
        if (candidates.length > 1 && row.enchant.spellId) candidates = candidates.filter(([, e]) => e.spellId === row.enchant.spellId);
        if (candidates.length !== 1) { errors.push(`Unknown/ambiguous enchant on ${item.name}.`); continue; }
        enchant = candidates[0][0];
      }
      build.slots[row.slot] = { id: item.id, variant, suffix: row.randomSuffix || row.suffix || 0, enchant };
    }
    if (!errors.length) try { validate(build); } catch (e) { errors.push(e.message); }
    warnings.push('Exported stat totals are reference only. Gear mode recomputes race, gear, and enchant stats, then applies your selected talents and buffs.');
    return { build: errors.length ? null : build, errors, warnings, reference: clone(input) };
  }
  function apply(input) {
    if ((input.characterMode || 'totals') === 'totals') {
      const c = { ...input };
      for (const key of ['gearMP5', 'gearArmorPen', 'gearDamageMultiplier', 'gearPawDamage', 'gearIdol', 'gearWarnings', 'gearRevision', 'gearStatModel']) delete c[key];
      return c;
    }
    if (input.characterMode !== 'gear') throw new Error('Invalid character input mode.');
    const c = calculate(input.gearBuild, input);
    const { gearIdol, ...clean } = input; // Never carry an old idol effect after replacing/unequipping it.
    return { ...clean, ...c.patch, gearBuild: JSON.stringify(c.build), gearWarnings: c.warnings, gearRevision: c.revision, gearStatModel: STAT_MODEL };
  }
  return { VERSION, STAT_MODEL, data, SLOTS, RACES, AREAS, STAT_NAMES, empty, compatible, enchantCompatible, validate, replace, calculate, fromExport, warningsFor, apply };
});
