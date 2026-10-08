(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./feral-talent-data.js') : root.FOREVER_FERAL_TALENT_DATA);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_TALENTS = api;
})(typeof globalThis === 'object' ? globalThis : this, function (data) {
  'use strict';
  const SOURCE = 'https://github.com/ElliotWood/Forever/tree/df7a2cfd2f7de7325589a567212b39acdd8b0620/sim/druid';
  const nodes = data.trees.flatMap(tree => tree.talents.map(t => ({ ...t, tree: tree.id })));
  const byId = Object.fromEntries(nodes.map(t => [t.id, t]));
  const STAT_IDS = ['heart-of-the-wild', 'living-spirit', 'natures-majesty', 'natures-reach', 'sharpened-claws', 'predatory-strikes', 'leader-of-the-pack'];
  const DEFAULT_BUILD = 'FF4.druid.51.1.genesis:5,natures-majesty:2,natures-reach:2,ferocity:5,heart-of-the-wild:5,shredding-attacks:3,savage-fury:2,sharpened-claws:2,shifting-power:1,predatory-strikes:3,improved-shifting-power:2,leader-of-the-pack:1,predatory-instincts:2,rend-and-tear:5,berserk:1,furor:5,naturalist:5';
  const DEFAULTS = { talentMode: 'legacy', talentBuild: '', talentBaselineBuild: '', talentStats: 'included', talentEffects: null };
  const total = build => Object.values(build).reduce((sum, rank) => sum + rank, 0);
  function validate(build) {
    if (!build || typeof build !== 'object' || Array.isArray(build)) throw new Error('Expected a talent build.');
    for (const [id, rank] of Object.entries(build)) if (!Object.hasOwn(byId, id) || !Number.isInteger(rank) || rank < 0 || rank > byId[id].max) throw new Error(`Invalid talent rank: ${id}.`);
    if (total(build) > 51) throw new Error('A level-60 build can spend at most 51 talent points.');
    for (const node of nodes) {
      if (!build[node.id]) continue;
      const earlier = nodes.filter(t => t.tree === node.tree && t.row < node.row).reduce((sum, t) => sum + (build[t.id] || 0), 0);
      if (earlier < (node.row - 1) * 5) throw new Error(`${node.name} requires ${(node.row - 1) * 5} points in earlier rows of its tree.`);
      if (node.prerequisite && (build[node.prerequisite] || 0) < byId[node.prerequisite].max) throw new Error(`${node.name} requires ${byId[node.prerequisite].name} at maximum rank.`);
    }
    return build;
  }
  function encode(build) {
    validate(build);
    return 'FF4.druid.51.1.' + (nodes.filter(t => build[t.id]).map(t => `${t.id}:${build[t.id]}`).join(',') || '-');
  }
  function decode(code) {
    if (typeof code !== 'string' || code.length > 5000 || !/^FF4\.druid\.51\.1\./.test(code.trim())) throw new Error('Use a Druid FF4 build code with 51-point budget and talent gates enabled.');
    const ranks = code.trim().slice('FF4.druid.51.1.'.length), build = {};
    if (ranks !== '-') for (const entry of ranks.split(',')) {
      const match = /^([a-z][a-z-]*):([1-5])$/.exec(entry);
      if (!match || Object.hasOwn(build, match[1])) throw new Error('Invalid or duplicate talent in build code.');
      build[match[1]] = Number(match[2]);
    }
    return validate(build);
  }
  function fromExport(entries) {
    const build = {};
    for (const entry of entries) {
      const node = nodes.find(t => entry.spellId != null ? entry.spellId === t.spellId : entry.id != null ? entry.id === t.exportId : entry.name?.toLowerCase().replace(/’/g, "'") === t.name.toLowerCase().replace(/’/g, "'"));
      if (!node) throw new Error(`Unrecognized talent: ${entry.name || entry.spellId || entry.id}.`);
      if (Object.hasOwn(build, node.id)) throw new Error(`Duplicate talent: ${node.name}.`);
      build[node.id] = entry.rank;
    }
    return encode(build);
  }
  function change(build, id, delta) {
    const next = { ...build, [id]: (build[id] || 0) + delta }; validate(next); return next;
  }
  function transfer(build, from, to) {
    validate(build);
    if (!Object.hasOwn(byId, from) || !Object.hasOwn(byId, to)) throw new Error('Choose valid source and destination talents.');
    if (from === to) throw new Error('Choose a different destination talent.');
    if (!build[from]) throw new Error(`${byId[from].name} has no points to move.`);
    if ((build[to] || 0) >= byId[to].max) throw new Error(`${byId[to].name} is already at maximum rank.`);
    // Validate only the final allocation, not the temporarily refunded tree.
    const next = { ...build, [from]: build[from] - 1, [to]: (build[to] || 0) + 1 };
    return validate(next);
  }
  function apply(input) {
    if (input.talentMode !== 'build') {
      if (input.talentMode && input.talentMode !== 'legacy') throw new Error('Invalid talent integration mode.');
      return { ...input, talentEffects: null };
    }
    const build = decode(input.talentBuild);
    const excluded = input.talentStats === 'excluded';
    if (!['included', 'excluded'].includes(input.talentStats)) throw new Error('Invalid talent-stat baseline mode.');
    if (excluded && input.statMode !== 'unbuffed') throw new Error('Talent-free stats require Unbuffed baseline mode. Import final totals to change modes safely.');
    if (!excluded) {
      const baseline = decode(input.talentBaselineBuild);
      if (STAT_IDS.some(id => (build[id] || 0) !== (baseline[id] || 0))) throw new Error('This export includes talent stat bonuses. Import talent-free Cat stats before changing stat-affecting talents.');
    }
    const rank = id => build[id] || 0;
    const effects = { ranks: { ...build }, shiftingRank: rank('shifting-power') ? 1 + rank('improved-shifting-power') : 0,
      rakeCost: 40 - rank('ferocity'), shredCost: 60 - 6 * rank('shredding-attacks'),
      shiftingKnown: Boolean(rank('shifting-power')), berserkKnown: Boolean(rank('berserk')), shiftingCooldown: 16 - 4 * rank('improved-shifting-power'),
      crit: 2 * rank('natures-majesty') + 3 * rank('sharpened-claws'), hit: 2 * rank('natures-reach'),
      attackPower: 30 * rank('predatory-strikes'), leader: Boolean(rank('leader-of-the-pack')) };
    return { ...input, talentBuild: encode(build), talentEffects: effects,
      bloodFrenzy: rank('blood-frenzy') * 50, naturalShapeshifter: rank('natural-shapeshifter') * 10,
      reflection: [0, 17, 33, 50][rank('reflection')], naturalist: rank('naturalist'), genesis: rank('genesis'),
      savageFury: rank('savage-fury'), predatoryInstincts: rank('predatory-instincts'), rendAndTear: rank('rend-and-tear'),
      buffHeartOfWild: rank('heart-of-the-wild'), buffLivingSpirit: rank('living-spirit'),
      baseIncludesLeader: !excluded && effects.leader };
  }
  const COVERAGE = {
    ferocity: 'Rake costs 40 minus rank energy. Other affected abilities are not in this rotation.',
    'shredding-attacks': 'Shred costs 60 minus 6 × rank Energy; Lacerate costs 15 minus rank Rage.',
    'shifting-power': 'Unlocks Shifting Power. This is not a shapeshift and does not trigger Furor.',
    'improved-shifting-power': 'Shifting Power: 16 seconds minus 4 × rank, then equipment reductions.',
    berserk: 'Unlocks Berserk, including its configured pre-pull / off-GCD use and dynamic crit effects.',
    'blood-frenzy': 'Builder crits have 0/50/100% chance for an extra combo point.',
    'natural-shapeshifter': 'Reduces Shifting Power mana cost by 10% per rank.',
    reflection: 'Retains 0/17/33/50% of Spirit mana regeneration within the five-second rule.',
    naturalist: 'All modeled damage +1% per rank, including autos and bleed ticks. Healing is outside this model.',
    genesis: 'Periodic bleed damage +1% per rank.',
    'savage-fury': 'Rake initial/ticks, Shred and Maul damage +5% per rank.',
    'predatory-instincts': 'Ability critical damage multiplier +0.1 per rank. White crits are unchanged.',
    'rend-and-tear': 'Modeled melee-special damage +2% per rank while an own bleed is active.',
    'natures-majesty': 'Melee crit +2 percentage points per rank; spell crit is not used by this rotation.',
    'natures-reach': 'Melee and spell hit +2 percentage points per rank.',
    'sharpened-claws': 'Cat melee crit +3 percentage points per rank.',
    'predatory-strikes': 'Cat attack power +30 per rank at level 60.',
    'heart-of-the-wild': 'Cat Strength and Intellect +2% per rank, applied with selected buffs.',
    'living-spirit': 'Spirit +5% per rank, applied with selected buffs.',
    'leader-of-the-pack': 'Own +3% crit aura. Does not stack with the selected external crit aura.',
    furor: 'Bearweave evaluation holds 5/5: 10 Rage on Bear entry. Energy follows the selected Furor variant. Shifting Power is not a form change.',
    'primal-bite': 'Unlocks Primal Bite for experimental Bearweaving.'
  };
  return { SOURCE, DEFAULTS, DEFAULT_BUILD, STAT_IDS, COVERAGE, data, nodes, byId, total, validate, encode, decode, fromExport, change, transfer, apply };
});
