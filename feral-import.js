(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./feral-weapons.js') : root.FOREVER_FERAL_WEAPONS,
    typeof module === 'object' && module.exports ? require('./feral-talents.js') : root.FOREVER_FERAL_TALENTS);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_IMPORT = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (weapons, talents) {
  'use strict';

  const LABELS = Object.freeze({
    characterMode: 'Character input mode', gearBuild: 'Equipment build', gearAreaTypes: 'Encounter terrain', targetCreature: 'Target creature type',
    talentMode: 'Talent integration', talentBuild: 'Selected talent build', talentBaselineBuild: 'Talents included in baseline', talentStats: 'Talent stat contributions', naturalist: 'Naturalist rank',
    startingMana: 'Starting mana', spirit: 'Spirit', spiritMode: 'Spirit input',
    crit: 'Effective crit vs boss (%)', miss: 'Miss (%)', dodge: 'Enemy dodge (%)', parry: 'Parry (%)',
    weaponSpeed: 'Equipped weapon speed (s)', bloodFrenzy: 'Blood Frenzy proc chance (%)',
    naturalShapeshifter: 'Natural Shapeshifter reduction (%)', reflection: 'Reflection (%)',
    howlingIdol: 'Howling Idol', wolfsheadHelm: 'Wolfshead Helm', attackPower: 'Final Attack Power',
    weaponMin: 'Weapon minimum damage', weaponMax: 'Weapon maximum damage', damageWeaponId: 'Damage weapon ID',
    damageWeaponSource: 'Weapon damage source', faerieFireMiss: 'Faerie Fire boss miss (%)',
    genesis: 'Genesis rank', savageFury: 'Savage Fury rank', predatoryInstincts: 'Predatory Instincts rank', rendAndTear: 'Rend and Tear rank',
    statMode: 'Stat input mode', baseStrength: 'Unbuffed Strength', baseAgility: 'Unbuffed Agility', baseStamina: 'Unbuffed Stamina',
    baseIntellect: 'Unbuffed Intellect', baseSpirit: 'Unbuffed Spirit', baseMana: 'Unbuffed mana', baseAttackPower: 'Unbuffed Attack Power',
    baseSheetCrit: 'Unbuffed sheet crit (%)', baseHealth: 'Unbuffed health', baseArmor: 'Unbuffed armor',
    baseHit: 'Unbuffed melee hit (%)', baseExpertise: 'Unbuffed expertise (%)', baseSpellHit: 'Unbuffed spell hit (%)', baseSwingTimer: 'Cat swing timer before flask (s)',
    swingTimer: 'Resulting Cat swing timer (s)',
    buffHeartOfWild: 'Heart of the Wild (buff scaling)', buffLivingSpirit: 'Living Spirit (buff scaling)', baseIncludesLeader: 'Own Leader of the Pack already included'
  });
  const TALENTS = [
    { name: 'Blood Frenzy', spellId: 16958, id: 104947, key: 'bloodFrenzy', values: [0, 50, 100] },
    { name: 'Natural Shapeshifter', spellId: 16833, id: 104919, key: 'naturalShapeshifter', values: [0, 10, 20, 30] },
    { name: 'Reflection', spellId: 17106, key: 'reflection', values: [0, 17, 33, 50] },
    { name: 'Genesis', spellId: 1223081, id: 104924, key: 'genesis', values: [0, 1, 2, 3, 4, 5] },
    { name: 'Savage Fury', spellId: 16998, id: 104948, key: 'savageFury', values: [0, 1, 2] },
    { name: 'Predatory Instincts', spellId: 1223242, id: 104950, key: 'predatoryInstincts', values: [0, 1, 2] },
    { name: 'Rend and Tear', spellId: 1223246, id: 104953, key: 'rendAndTear', values: [0, 1, 2, 3, 4, 5] }
  ];
  const FIXED_TALENTS = [
    { name: 'Ferocity', spellId: 16934, rank: 5 },
    { name: 'Shredding Attacks', spellId: 16966, rank: 3 },
    { name: 'Shifting Power', spellId: 1322605, rank: 1 },
    { name: 'Improved Shifting Power', spellId: 1322670, rank: 2 },
    { name: 'Berserk', spellId: 417141, rank: 1 }
  ];
  const USED_STATS = new Set(['mana', 'spirit', 'crit', 'mainHandSpeed', 'hit', 'expertise', 'attackPower', 'spellHit']);
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const owns = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
  const rounded = value => Math.round(value * 1e8) / 1e8;
  const talentMatches = (talent, spec) => talent.spellId != null ? talent.spellId === spec.spellId
    : (spec.id != null && talent.id === spec.id) || talent.name?.trim().toLowerCase() === spec.name.toLowerCase();

  // Pinned Forever fork assumptions for a level-60 Cat attacking a level-63 boss from behind:
  // https://github.com/ElliotWood/Forever/blob/660176710eb13a85eb5b4c3dd8f7de984883c99b/sim/core/target.go#L410-L426
  // https://github.com/ElliotWood/Forever/blob/660176710eb13a85eb5b4c3dd8f7de984883c99b/sim/core/spell_result.go#L170-L196
  // Import conversion only. Manual sim inputs remain effective probabilities, not sheet stats.
  function bossRates({ hit = 0, expertise = 0, crit }) {
    return {
      miss: rounded(Math.max(0, 8 - Math.max(0, hit - 1))),
      dodge: rounded(Math.max(0, 6.5 - expertise)), parry: 0,
      crit: rounded(Math.max(0, crit - 4.8))
    };
  }

  function parseExport(text, settings = {}) {
    const result = { patch: {}, reference: null, warnings: [], errors: [], requiresCatConfirmation: false };
    const { warnings, errors } = result;
    if (typeof text !== 'string' || !text.trim()) {
      errors.push('Paste a Sixty Upgrades JSON export first.'); return result;
    }
    if (text.length > 1024 * 1024) {
      errors.push('This export is too large (maximum 1 MiB of text).'); return result;
    }
    let data;
    try { data = JSON.parse(text); }
    catch (_) { errors.push('Invalid JSON. Paste the complete export, including its opening and closing braces.'); return result; }
    if (!object(data) || !object(data.stats) || !object(data.character)) {
      errors.push('Expected a Sixty Upgrades export with character and top-level stats objects. Stat weights are not character stats.'); return result;
    }
    if (data.character.gameClass !== 'DRUID') errors.push('Only Druid exports are supported.');
    if (data.character.level !== 60) errors.push('Only level-60 exports are supported.');
    if (owns(data, 'exportOptions') && !object(data.exportOptions)) errors.push('exportOptions must be an object.');
    const options = object(data.exportOptions) ? data.exportOptions : {};
    if (options.form == null || options.form === '') {
      result.requiresCatConfirmation = true;
      warnings.push('The export does not identify Cat Form. Confirm these are Cat Form totals, or re-export with Cat Form selected.');
    } else if (typeof options.form !== 'string' || options.form.toLowerCase() !== 'cat') {
      errors.push('This export is not in Cat Form. Re-export with Cat Form selected.');
    }
    for (const key of ['buffs', 'talents']) {
      if (owns(options, key) && typeof options[key] !== 'boolean') errors.push(`exportOptions.${key} must be true or false.`);
      if (options[key] === false) warnings.push(settings.statMode === 'unbuffed' && key === 'buffs'
        ? 'The export excludes buffs from its totals. Selected simulator buffs will be added to this unbuffed baseline.'
        : `The export says ${key} are excluded from its stat totals. Their stat bonuses will not be added by this importer.`);
    }
    for (const [key, value] of Object.entries(data.stats)) {
      if (typeof value !== 'number' || !Number.isFinite(value)) errors.push(`stats.${key} must be a finite number.`);
    }
    const bounds = { mana: [0, 100000], spirit: [0, 5000], crit: [0, 100], mainHandSpeed: [0.1, 10], hit: [0, 100], expertise: [0, 100], attackPower: [0, 100000], spellHit: [0, 100] };
    for (const [key, [min, max]] of Object.entries(bounds)) {
      if (!owns(data.stats, key)) {
        if (['mana', 'spirit', 'crit'].includes(key)) errors.push(`Missing stats.${key}; export character stat totals, not just equipment or weights.`);
        else if (key === 'mainHandSpeed') warnings.push('Equipped weapon speed is missing; use the pinned lookup if resolved, otherwise preserve the current value and check it manually.');
        else if (key === 'attackPower') warnings.push('Attack Power is missing; damage will need a manually supplied final AP total.');
        else warnings.push(`stats.${key} is absent; using 0% for the boss conversion.`);
      } else if (typeof data.stats[key] === 'number' && (data.stats[key] < min || data.stats[key] > max)) {
        errors.push(`stats.${key} must be between ${min} and ${max}.`);
      }
    }
    for (const key of ['items', 'talents', 'buffs', 'consumables']) {
      if (!owns(data, key)) continue;
      if (!Array.isArray(data[key]) || data[key].some(row => !object(row))) {
        errors.push(`${key} must be an array of records.`); continue;
      }
      for (const row of data[key]) {
        if (owns(row, 'name') && typeof row.name !== 'string') errors.push(`${key} names must be text.`);
        for (const id of ['id', 'spellId']) {
          if (owns(row, id) && (!Number.isInteger(row[id]) || row[id] <= 0)) errors.push(`${key}.${id} must be a positive integer.`);
        }
        if (key === 'talents' && (!Number.isInteger(row.rank) || row.rank < 0)) errors.push('Talent ranks must be nonnegative integers.');
        if (key === 'talents' && !row.spellId && !row.id && typeof row.name !== 'string') errors.push('Each talent needs a spell ID, talent ID, or name.');
        if (key === 'items' && (!Number.isInteger(row.id) || row.id <= 0 || typeof row.slot !== 'string' || !row.slot)) errors.push('Each equipped item needs a positive item ID and an equipment slot.');
      }
    }
    if (errors.length) return result;

    const unbuffed = settings.statMode === 'unbuffed';
    if (unbuffed) {
      // A list can still be present when the exporter explicitly excludes it.
      // Missing metadata is not evidence that active buffs were removed.
      if ((options.buffs !== false && (data.buffs?.length || 0)) || (data.consumables?.length || 0))
        errors.push('This export lists active buffs or consumables. Re-export without them, or choose Final totals import. Do not apply stat buffs twice.');
      if (options.talents === false && !settings.fullTalents) errors.push('Unbuffed import requires Cat Form totals with talents included. Enable talents when exporting.');
      for (const key of ['strength', 'agility', 'intellect', 'attackPower']) {
        if (!Number.isFinite(data.stats[key]) || data.stats[key] < 0 || data.stats[key] > 100000) errors.push(`Unbuffed import requires valid stats.${key}.`);
      }
      for (const key of ['stamina', 'health', 'armor']) if (data.stats[key] != null && (data.stats[key] < 0 || data.stats[key] > 100000)) errors.push(`Invalid stats.${key}.`);
      if (errors.length) return result;
    }

    const patch = {
      statMode: unbuffed ? 'unbuffed' : 'final',
      startingMana: data.stats.mana, spirit: data.stats.spirit, spiritMode: 'total',
      attackPower: data.stats.attackPower ?? null, faerieFireMiss: rounded(Math.max(1, 17 - (data.stats.spellHit ?? 0))),
      ...bossRates(data.stats)
    };
    if (unbuffed) {
      for (const [key, stat] of Object.entries({ baseStrength: 'strength', baseAgility: 'agility', baseStamina: 'stamina',
        baseIntellect: 'intellect', baseSpirit: 'spirit', baseMana: 'mana', baseAttackPower: 'attackPower', baseSheetCrit: 'crit', baseHealth: 'health', baseArmor: 'armor' })) patch[key] = data.stats[stat] ?? null;
      patch.baseHit = data.stats.hit ?? 0; patch.baseExpertise = data.stats.expertise ?? 0; patch.baseSpellHit = data.stats.spellHit ?? 0;
      const rank = (name, spellId, id, max) => {
        const rows = (data.talents || []).filter(t => talentMatches(t, { name, spellId, id }));
        const value = rows[0]?.rank || 0;
        if (rows.length > 1 || value > max) errors.push(`Invalid ${name} rank.`);
        return value;
      };
      if (data.talents) {
        patch.buffHeartOfWild = rank('Heart of the Wild', 17003, 104939, 5);
        patch.buffLivingSpirit = rank('Living Spirit', 1309631, 104911, 3);
        patch.baseIncludesLeader = rank('Leader of the Pack', 17007, 104955, 1) > 0;
      } else warnings.push('No talent list: current buff-scaling settings are preserved. Check Heart of the Wild, Living Spirit, and whether your baseline includes Leader of the Pack.');
      warnings.push('Unbuffed Cat baseline: selected raid buffs will be applied after importing. Gear and existing self-talent contributions are retained, never added twice. Rounded sheet attributes can differ slightly from hidden in-game fractions.');
    }
    if (owns(data.stats, 'mainHandSpeed')) patch.weaponSpeed = data.stats.mainHandSpeed;
    if (data.talents) {
      for (const spec of TALENTS) {
        const matches = data.talents.filter(t => talentMatches(t, spec));
        const rank = matches[0]?.rank ?? 0;
        if (matches.length > 1 || rank >= spec.values.length) errors.push(`Invalid or duplicate ${spec.name} rank (expected 0–${spec.values.length - 1}).`);
        else patch[spec.key] = spec.values[rank];
      }
      for (const spec of FIXED_TALENTS) {
        const rank = data.talents.find(t => talentMatches(t, spec))?.rank ?? 0;
        if (rank !== spec.rank) warnings.push(`${spec.name}: exported rank ${rank}, but the simulation assumes ${spec.rank}. This mechanic is not changed by importing.`);
      }
      const buffTalents = unbuffed ? [{ name: 'Heart of the Wild', spellId: 17003, id: 104939 },
        { name: 'Living Spirit', spellId: 1309631, id: 104911 }, { name: 'Leader of the Pack', spellId: 17007, id: 104955 }] : [];
      const unsupported = data.talents.filter(t => ![...TALENTS, ...buffTalents].some(spec => talentMatches(t, spec))).map(t => t.name || `Spell ${t.spellId || t.id}`);
      if (unsupported.length) warnings.push(`Other talents are reference only, not individually simulated: ${unsupported.join(', ')}. Their existing contributions to exported totals are kept.`);
    } else warnings.push('No talent list supplied; current talent settings are preserved.');
    if (data.items) {
      if (new Set(data.items.map(item => item.slot)).size !== data.items.length) errors.push('The equipment list contains duplicate slots.');
      patch.wolfsheadHelm = data.items.some(item => item.id === 8345 && item.slot === 'HEAD');
      patch.howlingIdol = data.items.some(item => item.id === 272427 && item.slot === 'RANGED');
      const mainHand = data.items.find(item => item.slot === 'MAIN_HAND');
      const weapon = mainHand && weapons.items[mainHand.id];
      patch.damageWeaponId = mainHand?.id ?? 0;
      patch.weaponMin = null; patch.weaponMax = null;
      if (weapon?.variants.length === 1) {
        patch.weaponMin = weapon.variants[0].min; patch.weaponMax = weapon.variants[0].max;
        patch.damageWeaponSource = `Forever ${weapons.revision.slice(0, 7)} · ${weapon.name} (#${mainHand.id})`;
        if (!owns(data.stats, 'mainHandSpeed')) patch.weaponSpeed = weapon.speed;
        if (owns(data.stats, 'mainHandSpeed') && data.stats.mainHandSpeed !== weapon.speed) {
          patch.weaponMin = null; patch.weaponMax = null;
          warnings.push('Exported weapon speed differs from the lookup; confirm min/max damage manually.');
          patch.damageWeaponSource += ' · speed mismatch — manual range required';
        }
      } else {
        patch.damageWeaponSource = 'Unresolved weapon — enter min/max damage manually';
        warnings.push('Weapon damage is unknown or ambiguous; DPS needs manual weapon min/max damage. No substitute weapon is assumed.');
      }
    } else warnings.push('No equipment list supplied; current equipment settings are preserved.');
    warnings.push('Tier 1 Feral 5pc stays manual; set detection is not included.');
    warnings.push('Other item effects and enchants (including Crusader) are not imported as combat effects. Consumable selections here are preserved, not inferred from export names. Use unbuffed exports without consumables to apply them here; final totals are never buffed again.');
    warnings.push(unbuffed ? 'Attack Power starts at the unbuffed exported total; only selected buff contributions are added. Weapon lookup is unenchanted base damage; use Gear-calculated mode for flat paw-damage enchants. Damage stays optional and is not enabled by import.' : 'Attack Power is a final total, not recalculated from attributes or talents. Weapon lookup is unenchanted base damage from the pinned fork; use Gear-calculated mode for flat paw-damage enchants. Damage stays optional and is not enabled by import.');
    warnings.push('Windfury, Judgment of Wisdom, Mana Spring, Blessing of Wisdom, Omen, starting Clearcasting, potion/Tea policies, rotation, seed, and fight settings are preserved.');
    warnings.push(unbuffed ? 'Spirit, mana, AP and crit are recalculated from the saved unbuffed baseline whenever buff selections change. Own Leader of the Pack, when talented, is assumed already included in exported crit; the external aura cannot add another 3%.' : 'Spirit is a final total: no additional Divine Spirit or Kings calculation. Re-export or edit the total to change stat buffs.');
    warnings.push('Equipped weapon speed is not the Cat swing timer. Haste and automatic swing-speed conversion are not imported; check the manual swing timer.');
    if (settings.fullTalents) {
      try {
        if (unbuffed && options.talents === false) {
          const build = data.talents ? talents.fromExport(data.talents) : talents.encode(talents.decode(settings.currentBuild || talents.DEFAULT_BUILD));
          Object.assign(patch, { talentMode: 'build', talentBuild: build, talentBaselineBuild: '', talentStats: 'excluded', baseIncludesLeader: false });
        } else if (data.talents) {
          const build = talents.fromExport(data.talents);
          Object.assign(patch, { talentMode: 'build', talentBuild: build, talentBaselineBuild: build, talentStats: 'included' });
        } else {
          Object.assign(patch, { talentMode: 'legacy', talentBuild: '', talentBaselineBuild: '', talentStats: 'included' });
          warnings.push('Talent stat contributions are not identifiable without a talent list. Full-tree editing is disabled; legacy modeled overrides are preserved. Import talent-free Cat stats to enable the build editor.');
        }
        if (patch.talentMode === 'build') {
          const normalized = talents.apply({ ...patch, statMode: patch.statMode });
          for (const key of ['bloodFrenzy', 'naturalShapeshifter', 'reflection', 'naturalist', 'genesis', 'savageFury', 'predatoryInstincts', 'rendAndTear', 'buffHeartOfWild', 'buffLivingSpirit', 'baseIncludesLeader']) patch[key] = normalized[key];
          // Replace legacy assumptions with the explicitly selected integration mode.
          for (let i = warnings.length - 1; i >= 0; i--) if (/talents are excluded|simulation assumes|Other talents are reference|No talent list|Own Leader of the Pack|Gear and existing self-talent|only selected buff contributions/.test(warnings[i])) warnings.splice(i, 1);
          warnings.push(patch.talentStats === 'excluded' ? 'Talent-free Cat baseline: selected build stats and buffs are applied once. A missing talent list preserves the selected build (or the starting 9/34/8 build).' : 'Talent bonuses are already included. Costs, procs, cooldowns and damage talents use this build; stat-affecting rank changes require a talent-free Cat export.');
          warnings.push('Only effects relevant to this single-target Cat rotation are modeled. Bear, healing, caster, movement, threat and unmodeled-ability talents consume points but have no simulated effect; see Talents for per-talent coverage. Furor does not trigger from Shifting Power.');
        }
      } catch (error) { errors.push(error.message); }
    }
    if (errors.length) return result;
    result.patch = patch;
    result.reference = {
      name: typeof data.name === 'string' ? data.name : data.character.name,
      character: data.character, stats: data.stats, exportOptions: options,
      items: data.items ?? null, talents: data.talents ?? null,
      buffs: data.buffs ?? null, consumables: data.consumables ?? null,
      referenceOnlyStats: Object.fromEntries(Object.entries(data.stats).filter(([key]) => !USED_STATS.has(key)))
    };
    return result;
  }

  return Object.freeze({ parseExport, bossRates, LABELS });
});
