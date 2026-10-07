// DPS-denominated equivalency weights. Inspired by the pinned Forever
// sim/core/statweight.go: seeded perturbations, paired deltas, fixed rotation.
(function(root, factory) {
  const api = typeof module === 'object' && module.exports
    ? factory(require('./feral-sim.js'), require('./feral-gear.js'), require('./feral-optimizer.js'), require('./feral-buffs.js'), require('./feral-default-weights.js'), require('./feral-idol-benchmarks.js'))
    : factory(root.FOREVER_FERAL_SIM, root.FOREVER_FERAL_GEAR, root.FOREVER_FERAL_OPTIMIZER, root.FOREVER_FERAL_BUFFS, root.FOREVER_FERAL_DEFAULT_WEIGHTS, root.FOREVER_FERAL_IDOL_BENCHMARKS);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_WEIGHTS = api;
})(globalThis, function(sim, gear, optimizer, buffs, defaultData, idolBenchmarks) {
  'use strict';
  const STATS = {
    attackPower: { label: 'Attack power', step: 20, unit: '1 AP' },
    strength: { label: 'Strength', step: 20, unit: '1 Strength' }, agility: { label: 'Agility', step: 20, unit: '1 Agility' },
    intellect: { label: 'Intellect', step: 20, unit: '1 Intellect' }, spirit: { label: 'Spirit', step: 20, unit: '1 Spirit' },
    crit: { label: 'Crit', step: 1, unit: '1 percentage point' }, hit: { label: 'Melee hit', step: 1, unit: '1 percentage point', probe: 'meleeHit' },
    spellHit: { label: 'Spell hit (Faerie Fire)', step: 1, unit: '1 percentage point' },
    expertise: { label: 'Expertise', step: 1, unit: '1 percentage point' }, haste: { label: 'Melee haste', step: 1, unit: '1 percentage point' },
    mp5: { label: 'MP5', step: 10, unit: '1 mana / 5 seconds' }, mana: { label: 'Mana', step: 200, unit: '1 mana' },
    dps: { label: 'Weapon DPS / flat paw damage', step: 5, unit: '1 weapon DPS or +1 paw damage' }, armorPen: { label: 'Armor penetration', step: 100, unit: '1 armor ignored' }
  };
  const clone = v => JSON.parse(JSON.stringify(v));
  function defaults() {
    if (!defaultData) return null;
    return validate({ version: 2, kind: 'preset', presetId: 'jvmes-2026-10-05', unit: 'dps',
      signature: null, config: null, rows: clone(defaultData.measurements), seed: defaultData.seed,
      iterations: defaultData.iterations, revision: gear.data.revision });
  }
  const signature = c => {
    const config = sim.normalize(c);
    return JSON.stringify({ ...config, ...(config.windfury ? { windfuryModel: sim.WINDFURY_MODEL } : {}), ...(config.gearIdol ? { idolModel: sim.IDOL_MODEL } : {}) });
  };
  // These are the existing level-63, behind-the-boss attack-table rules, not
  // new combat mechanics. Melee hit's first point does not reduce boss miss.
  const CAPS = { hit: { limit: 9, minimum: 1, base: 'baseHit', label: 'Melee hit (%)' },
    spellHit: { limit: 16, minimum: 0, base: 'baseSpellHit', label: 'Spell hit (%)' },
    expertise: { limit: 6.5, minimum: 0, base: 'baseExpertise', label: 'Expertise (%)' } };
  const MAX_ITERATIONS = 1041; // At most 24 settings, including re-anchored cap probes.
  const rounded = n => Number(n.toFixed(8));
  const effective = (n, cap) => Math.max(cap.minimum, Math.min(cap.limit, n));
  function capValues(config) {
    const rows = buffs.calculate(config).rows;
    return Object.fromEntries(Object.entries(CAPS).map(([stat, cap]) => [stat, { ...cap,
      current: rounded(rows.find(r => r.label === cap.label).after) }]));
  }
  function plan(input, scale = 1) {
    const config = sim.normalize(input);
    if (config.characterMode !== 'gear' || !config.damageEnabled) throw new Error('Generate DPS weights with Gear-calculated stats and damage enabled.');
    if (input.weightPerturbation) throw new Error('Stat weights require an unmodified reference setup.');
    if (![0.5, 1, 2].includes(scale)) throw new Error('Choose a Small, Standard, or Large stat increment.');
    const caps = capValues(config), tests = [{ key: 'baseline', config, label: 'Baseline' }], rows = [];
    function probe(stat, offset) {
      offset = rounded(offset);
      if (!offset) return 'baseline';
      const key = `${stat}:${offset}`;
      if (!tests.some(t => t.key === key)) tests.push({ key, label: `${STATS[stat].label} ${offset > 0 ? '+' : ''}${offset}`,
        config: sim.normalize({ ...config, weightPerturbation: { stat: STATS[stat].probe || stat, amount: offset } }) });
      return key;
    }
    for (const [stat, meta] of Object.entries(STATS)) {
      const amount = meta.step * scale, cap = caps[stat];
      const plusAmount = cap ? Math.min(amount, 100 - config[cap.base]) : amount;
      const row = { stat, amount, plus: { key: probe(stat, plusAmount), amount: plusAmount }, basis: 'forward' };
      row.range = { fromOffset: 0, toOffset: plusAmount, fromKey: 'baseline', toKey: row.plus.key };
      if (cap) {
        row.cap = cap;
        const minusAmount = -Math.min(amount, config[cap.base]);
        row.minus = { key: probe(stat, minusAmount), amount: minusAmount };
        // Prefer the ordinary forward interval if it is wholly below cap.
        // Otherwise measure backwards; above cap, move BOTH endpoints to the
        // cap region. Never divide a clipped +1 result by its nominal step.
        let from = cap.current, to = rounded(cap.current + plusAmount);
        const floor = Math.max(cap.minimum, rounded(cap.current - config[cap.base]));
        if (from < floor || to > cap.limit || to <= from) {
          to = Math.min(cap.current, cap.limit);
          from = Math.max(floor, rounded(to - amount));
          if (to <= from) { from = floor; to = Math.min(cap.limit, rounded(floor + amount)); }
        }
        row.basis = to > from ? 'below-cap' : 'unavailable';
        row.range = to > from ? { from, to, fromOffset: rounded(from - cap.current), toOffset: rounded(to - cap.current),
          fromKey: probe(stat, from - cap.current), toKey: probe(stat, to - cap.current) } : null;
      }
      rows.push(row);
    }
    return { config, rows, tests };
  }
  function estimate(baseline, candidate, divisor = 1) {
    const paired = optimizer.pairedGain(baseline, candidate, { objective: 'dps' });
    const weight = paired.gain / divisor, se = paired.se / divisor;
    return { weight, se, low: weight - 1.96 * se, high: weight + 1.96 * se };
  }
  function* generate(input, { iterations = 1000, scale = 1, firstIteration = 200001 } = {}) {
    const { config, tests, rows: planned } = plan(input, scale);
    if (!Number.isInteger(iterations) || iterations < 2 || iterations > MAX_ITERATIONS || iterations * tests.length > 25000) throw new Error('Use 2–1,041 paired fights per setting (25,000-fight budget including cap probes).');
    if (!Number.isSafeInteger(firstIteration) || firstIteration < 1 || firstIteration + iterations > 4294967295) throw new Error('Invalid weight iteration range.');
    const results = new Map(), totalFights = iterations * tests.length;
    let completedFights = 0;
    for (const test of tests) {
      const samples = [];
      for (let i = 0; i < iterations; i++) {
        const f = sim.simulateFight(test.config, { iteration: firstIteration + i, debug: false });
        samples.push({ duration: f.duration, damageTotal: f.damage.total });
        yield { phase: test.label, completedFights: ++completedFights, totalFights };
      }
      results.set(test.key, samples);
    }
    const baseline = results.get('baseline');
    const rows = planned.map(row => {
      const { stat, amount, basis, cap, range } = row;
      const change = probe => ({ amount: probe.amount, ...estimate(baseline, results.get(probe.key)),
        ...(cap ? { effectiveAmount: rounded(effective(cap.current + probe.amount, cap) - effective(cap.current, cap)) } : {}) });
      const measurement = range ? estimate(results.get(range.fromKey), results.get(range.toKey), rounded(range.toOffset - range.fromOffset))
        : { weight: 0, se: 0, low: 0, high: 0 };
      return { stat, amount, basis, ...measurement, plus: change(row.plus), ...(cap ? { cap, minus: change(row.minus) } : {}),
        range: range ? Object.fromEntries(Object.entries(range).filter(([key]) => !key.endsWith('Key'))) : null };
    });
    return { version: 2, unit: 'dps', config: clone(config), signature: signature(config), rows, iterations, scale, firstIteration,
      lastIteration: firstIteration + iterations - 1, completedFights, seed: config.seed,
      baselineDps: baseline.reduce((n, s) => n + s.damageTotal, 0) / baseline.reduce((n, s) => n + s.duration, 0), revision: gear.data.revision };
  }
  function validate(result) {
    const stats = Object.keys(STATS).filter(s => result?.version !== 1 || s !== 'spellHit');
    const preset = result?.kind === 'preset';
    if (!result || ![1, 2].includes(result.version) || result.unit !== 'dps' || result.revision !== gear.data.revision || !Array.isArray(result.rows) || result.rows.length !== stats.length
      || (preset ? result.version !== 2 || result.presetId !== 'jvmes-2026-10-05' || result.signature !== null || result.config !== null
        : typeof result.signature !== 'string' || !Number.isSafeInteger(result.firstIteration) || !Number.isSafeInteger(result.lastIteration) || result.firstIteration < 1 || result.lastIteration < result.firstIteration || result.lastIteration - result.firstIteration + 1 !== result.iterations)
      || !Number.isSafeInteger(result.iterations) || result.iterations < 2 || result.iterations > (result.version === 1 ? 1785 : MAX_ITERATIONS)
      || !Number.isInteger(result.seed) || result.seed < 0 || result.seed > 4294967295) throw new Error('Incompatible DPS weights. Generate them again.');
    const ids = new Set();
    for (const row of result.rows) {
      if (!stats.includes(row.stat) || ids.has(row.stat) || !['weight', 'se', 'amount', 'low', 'high'].every(k => Number.isFinite(row[k])) || row.amount <= 0 || row.se < 0) throw new Error('Invalid DPS weight result.');
      if (result.version === 2) {
        const finiteEstimate = p => p && ['amount', 'weight', 'se', 'low', 'high'].every(k => Number.isFinite(p[k])) && p.se >= 0;
        if (!['forward', 'below-cap', 'unavailable'].includes(row.basis) || !finiteEstimate(row.plus) || row.plus.amount < 0
          || (row.basis !== 'unavailable' && !row.range) || (row.basis === 'unavailable' && row.range !== null)
          || (!CAPS[row.stat] && (row.basis !== 'forward' || row.cap))
          || (row.range && (!['fromOffset', 'toOffset'].every(k => Number.isFinite(row.range[k])) || row.range.toOffset <= row.range.fromOffset))) throw new Error('Invalid weight measurement.');
        if (CAPS[row.stat] && (!row.cap || row.cap.limit !== CAPS[row.stat].limit || row.cap.minimum !== CAPS[row.stat].minimum || !Number.isFinite(row.cap.current)
          || !['below-cap', 'unavailable'].includes(row.basis)
          || !finiteEstimate(row.minus) || row.minus.amount > 0 || ![row.minus, row.plus].every(p => Number.isFinite(p.effectiveAmount))
          || (row.basis === 'below-cap' && (!row.range || !Number.isFinite(row.range.from) || !Number.isFinite(row.range.to) || !(row.range.to > row.range.from)
            || row.range.to > row.cap.limit || row.range.from < row.cap.minimum
            || Math.abs(row.range.from - row.cap.current - row.range.fromOffset) > 1e-7 || Math.abs(row.range.to - row.cap.current - row.range.toOffset) > 1e-7)))) throw new Error('Invalid cap measurement.');
      }
      ids.add(row.stat);
    }
    return clone(result);
  }
  function vector(choice, options = {}) {
    const item = gear.data.items[choice.id], variant = item?.variants[choice.variant];
    if (!variant) throw new Error('Unknown item variant.');
    if (item.randomSuffixOptions?.length && !item.randomSuffixOptions.includes(choice.suffix)) throw new Error('Choose a valid suffix before scoring.');
    const enchant = gear.data.enchants[choice.enchant], totals = { ...variant.stats }, pseudo = { ...item.pseudoStats };
    if (enchant?.classAllowlist?.length && !enchant.classAllowlist.includes(11)) throw new Error(`${enchant.name} is class-restricted and unavailable to Druids.`);
    const add = (into, x) => { for (const [id, n] of Object.entries(x || {})) into[id] = (into[id] || 0) + n; };
    add(totals, gear.data.suffixes[choice.suffix]?.stats); add(totals, enchant?.stats); add(pseudo, enchant?.pseudoStats);
    const areas = String(options.gearAreaTypes || '').split(',').map(Number);
    for (const area of variant.areaStats || []) if (areas.includes(area.areaType)) add(totals, area.stats);
    const n = id => totals[id] || 0, p = id => pseudo[id] || 0;
    return { strength: n(0), agility: n(1), intellect: n(3), spirit: n(16), attackPower: n(17),
      crit: (n(21) + n(13)) / 14 + p(14), hit: (n(20) + n(12)) / 10 + p(12), spellHit: (n(20) + n(12)) / 10 + p(13),
      expertise: n(24) / 10 + p(27), haste: n(22) / 10 + p(20), mana: n(33), mp5: n(34), armorPen: n(23),
      dps: (item.weaponSpeed && item.weaponType !== 5 ? (variant.weaponDamageMin + variant.weaponDamageMax) / 2 / item.weaponSpeed + (enchant?.weaponDamage || 0) : 0) + p(0) };
  }
  function score(choice, result, options) {
    const v = vector(choice, options);
    return result.rows.reduce((n, r) => n + (result.version === 2 && r.cap ? effective(r.cap.current + (v[r.stat] || 0), r.cap) - effective(r.cap.current, r.cap) : v[r.stat] || 0) * r.weight, 0);
  }
  function bestVariant(item, result, options) {
    let best = null;
    if (options?.standardOnly && (item.randomSuffixOptions?.length || !Object.hasOwn(item.variants, '0'))) return null;
    const equipped = options?.rankingBuild?.slots[options.rankingSlot];
    if (result.version === 2 && equipped?.id === item.id) {
      // The equipped row is the unchanged item, including its enchant—not an
      // unenchanted replacement. Identity has zero delta regardless of weights.
      gear.validate(options.rankingBuild);
      return { choice: { ...equipped }, score: 0,
        ...(item.id === 8345 ? { effectBonus: wolfsheadEstimate(options.rankingBuild.slots.RANGED?.id === 272427)?.gain || 0 } : {}) };
    }
    for (const variant of options?.standardOnly ? ['0'] : Object.keys(item.variants)) for (const suffix of item.randomSuffixOptions?.length ? item.randomSuffixOptions : [0]) {
      if (suffix && !gear.data.suffixes[suffix]) continue;
      let choice = { id: item.id, variant, suffix }, value, enchantExcluded = false;
      try {
        let reference = options?.rankingBuild, replacement;
        if (reference && options?.rankingSlot) {
          replacement = gear.replace(reference, options.rankingSlot, choice).build;
          choice = replacement.slots[options.rankingSlot];
          // Item rows compare like-for-like, even when a two-hand-only enchant
          // cannot transfer. Never charge only one side for that enchant.
          if (equipped?.enchant && equipped.enchant !== choice.enchant) {
            enchantExcluded = true;
            reference = gear.replace(reference, options.rankingSlot, { ...equipped, enchant: '' }).build;
          }
        } else choice.enchant = '';
        value = result.version === 2 && replacement
          ? rankingScore(replacement, result, options) - rankingScore(reference, result, options)
          : score(choice, result, options) + (item.id === 8345 ? wolfsheadEstimate(reference?.slots.RANGED?.id === 272427)?.gain || 0 : 0);
      } catch (_) { continue; } // Incompatible unique-item replacement.
      if (!best || value > best.score) best = { choice, score: value, enchantExcluded,
        ...(item.id === 8345 ? { effectBonus: wolfsheadEstimate(options?.rankingBuild?.slots.RANGED?.id === 272427)?.gain || 0 } : {}) };
    }
    return best;
  }
  function buildScore(build, result, options = {}) {
    const b = gear.validate(build);
    if (result.version !== 2) return Object.values(b.slots).reduce((n, c) => n + score(c, result, options), 0);
    const linear = { rows: result.rows.filter(r => !r.cap) };
    const capped = capValues(gear.apply({ ...result.config, ...options, characterMode: 'gear', gearBuild: JSON.stringify(b), weightPerturbation: undefined }));
    return Object.values(b.slots).reduce((n, c) => n + score(c, linear, options), 0)
      + result.rows.filter(r => r.cap).reduce((n, r) => n + effective(capped[r.stat].current, r.cap) * r.weight, 0);
  }
  function enchantScores(build, slot, choice, result, options = {}) {
    const item = gear.data.items[choice?.id];
    if (!item) throw new Error('Select an item before evaluating enchants.');
    const plain = { ...choice, enchant: '' };
    const baseline = buildScore(gear.replace(build, slot, plain).build, result, options);
    // Compare on the same candidate item/variant/suffix and full current build,
    // so capped hit/expertise and off-hand conflicts match the detail preview.
    return [{ key: '', score: 0 }, ...Object.entries(gear.data.enchants)
      .filter(([, enchant]) => gear.enchantCompatible(enchant, item, slot))
      .map(([key]) => ({ key, score: buildScore(gear.replace(build, slot, { ...plain, enchant: key }).build, result, options) - baseline }))];
  }
  function wolfsheadEstimate(howling = false) {
    return idolBenchmarks?.wolfshead?.find(row => row.howling === Boolean(howling)) || null;
  }
  function equipmentEffectScore(build) {
    // Add only the helm effect here. Idol replacements already use their own
    // paired benchmarks (measured with Wolfshead); adding both bonuses to a
    // whole-build score would count the Howling/Wolfshead interaction twice.
    return build.slots.HEAD?.id === 8345 ? wolfsheadEstimate(build.slots.RANGED?.id === 272427)?.gain || 0 : 0;
  }
  function rankingScore(build, result, options = {}) {
    const b = gear.validate(build);
    return buildScore(b, result, options) + equipmentEffectScore(b);
  }
  function idolEstimate(id, equippedId = 0) {
    if (!idolBenchmarks) return null;
    const entry = idolBenchmarks.coverage.find(x => x.id === id), equipped = idolBenchmarks.coverage.find(x => x.id === equippedId);
    if (!entry || !equipped) return null; // Unknown is not zero.
    const key = entry.testId, reference = equipped.testId;
    if (key == null || reference == null) return null;
    const result = idolBenchmarks.pairs[`${reference}:${key}`];
    return result ? { ...result, score: result.gain, choice: { id, variant: '0', suffix: 0, enchant: '' }, benchmark: true } : null;
  }
  return { STATS, CAPS, MAX_ITERATIONS, plan, capValues, generate, validate, defaults, signature, vector, score, bestVariant, buildScore, rankingScore, equipmentEffectScore, wolfsheadEstimate, enchantScores, idolBenchmarks, idolEstimate };
});
