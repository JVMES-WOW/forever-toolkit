(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./feral-sim.js') : root.FOREVER_FERAL_SIM,
    typeof module === 'object' && module.exports ? require('./feral-rotation.js') : root.FOREVER_FERAL_ROTATION);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_OPTIMIZER = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (sim, policies) {
  'use strict';
  policies = policies || sim.rotation;

  const ATTACKS = ['rake', 'shred', 'rip', 'bite'];
  const PARAMETERS = Object.freeze({
    shiftingThreshold: { label: 'Shifting threshold', min: 0, max: 100, values: [20, 30, 40, 45, 50, 55, 60] },
    biteMaxEnergy: { label: 'Bite max energy', min: 35, max: 100, values: [35, 40, 45, 50, 60] },
    biteRipOutside: { label: 'Bite Rip safety', min: 0, max: 30, values: [0, 2, 4, 6, 8, 10, 12] },
    biteRipBerserk: { label: 'Berserk Bite safety', min: 0, max: 30, values: [0, 2, 4, 6, 8, 10, 12] },
    ripMinCP: { label: 'Rip minimum CP', min: 1, max: 5, integer: true, values: [1, 2, 3, 4, 5] },
    biteMinCP: { label: 'Bite minimum CP', min: 1, max: 5, integer: true, values: [1, 2, 3, 4, 5] },
    shiftingMode: { label: 'Shift policy', choices: ['automatic', 'manual'], labels: ['Energy-loss comparison', 'Manual threshold'], values: ['automatic', 'manual'], optional: true },
    ...Object.fromEntries(Object.entries(policies.DEFINITIONS).filter(([, p]) => p.searchable !== false).map(([key, p]) => [key, { ...p, values: p.choices || p.values, optional: true }]))
  });
  const PRESETS = Object.freeze({
    quick: { candidateLimit: 24, screeningIterations: 8, validationIterations: 80, finalists: 3 },
    standard: { candidateLimit: 64, screeningIterations: 20, validationIterations: 200, finalists: 5 },
    thorough: { candidateLimit: 128, screeningIterations: 50, validationIterations: 500, finalists: 8 }
  });

  function normalizeObjective(options = {}) {
    const objective = options.objective || 'attack';
    if (!['attack', 'finishers', 'weightedFinishers', 'dps'].includes(objective)) throw new Error('Unknown optimizer objective.');
    const result = { objective, ripWeight: 1, biteWeight: 1 };
    if (objective === 'weightedFinishers') {
      for (const key of ['ripWeight', 'biteWeight']) {
        const input = options[key] ?? 1, value = Number(input);
        if (String(input).trim() === '' || !Number.isFinite(value) || value < 0 || value > 100) {
          throw new Error('Rip and Bite weights must be numbers between 0 and 100.');
        }
        result[key] = value;
      }
      if (result.ripWeight + result.biteWeight === 0) throw new Error('At least one finisher weight must be greater than zero.');
    }
    return result;
  }
  function objectiveLabel(options = {}) {
    const c = normalizeObjective(options);
    return c.objective === 'dps' ? 'Experimental DPS' : c.objective === 'attack' ? 'Attack CPM' : c.objective === 'finishers' ? 'Finisher CPM'
      : `Weighted finishers (${c.ripWeight} × Rip + ${c.biteWeight} × Bite) / min`;
  }
  function objectiveCount(sample, options = {}) {
    if (options.objective === 'dps') {
      if (!Number.isFinite(sample.damageTotal)) throw new Error('DPS optimization requires enabled damage with valid character inputs.');
      return sample.damageTotal;
    }
    if (!options.objective || options.objective === 'attack') return sample.attacks;
    if (options.objective === 'finishers') return sample.casts.rip + sample.casts.bite;
    return sample.casts.rip * options.ripWeight + sample.casts.bite * options.biteWeight;
  }
  // Attack CPM remains a secondary preference when finisher scores tie.
  function compareScores(a, b) { return b.score - a.score || b.cpm - a.cpm; }

  function parseValues(input, key) {
    const parameter = PARAMETERS[key];
    if (!parameter) throw new Error(`Unknown rotation parameter: ${key}`);
    const items = typeof input === 'string' ? input.split(',').map(item => item.trim()) : input;
    if (!Array.isArray(items) || !items.length || items.length > 32 || items.some(item => item === '' || item == null)) {
      throw new Error(`${parameter.label}: enter 1–32 comma-separated ${parameter.choices ? 'choices' : 'numbers'}.`);
    }
    if (parameter.choices) {
      const values = items.map(value => {
        if (parameter.choices.includes(value)) return value;
        const label = parameter.labels?.findIndex(text => text.toLowerCase() === String(value).toLowerCase()) ?? -1;
        return label >= 0 ? parameter.choices[label] : value === 'true' ? true : value === 'false' ? false : value;
      });
      if (values.some(value => !parameter.choices.includes(value))) throw new Error(`${parameter.label}: choose ${(parameter.labels || parameter.choices).join(', ')}.`);
      return [...new Set(values)];
    }
    const values = items.map(Number);
    if (values.some(value => !Number.isFinite(value) || value < parameter.min || value > parameter.max || (parameter.integer && !Number.isInteger(value)))) {
      throw new Error(`${parameter.label}: values must be ${parameter.integer ? 'whole numbers ' : ''}between ${parameter.min} and ${parameter.max}.`);
    }
    return [...new Set(values)].sort((a, b) => a - b);
  }
  function normalizeOptions(options = {}) {
    const preset = options.preset || 'standard';
    if (!PRESETS[preset]) throw new Error('Unknown optimizer search size.');
    const result = { ...PRESETS[preset], ...options, preset, ...normalizeObjective(options) };
    for (const [key, max] of [['candidateLimit', 256], ['screeningIterations', 500], ['validationIterations', 1000], ['finalists', 16]]) {
      if (!Number.isInteger(result[key]) || result[key] < 1 || result[key] > max) throw new Error(`Invalid optimizer ${key}.`);
    }
    const supplied = options.parameterValues ?? Object.fromEntries(Object.entries(PARAMETERS).filter(([, p]) => !p.optional).map(([key, parameter]) => [key, parameter.values]));
    if (!supplied || !Object.keys(supplied).length) throw new Error('Select at least one parameter to optimize.');
    result.parameterValues = Object.fromEntries(Object.entries(supplied).map(([key, values]) => [key, parseValues(values, key)]));
    if (result.candidateLimit * result.screeningIterations + (result.finalists + 1) * result.validationIterations > 25000) {
      throw new Error('Search is too large: reduce candidates or iterations (25,000-fight limit).');
    }
    return result;
  }
  function rotation(config) {
    return Object.fromEntries(Object.keys(PARAMETERS).map(key => [key, config[key]]));
  }
  function makeCandidates(config, options) {
    const keys = Object.keys(PARAMETERS).filter(key => Object.hasOwn(options.parameterValues, key));
    const domains = Object.fromEntries(keys.map(key => [key, [...new Set([config[key], ...options.parameterValues[key]])]
      .sort((a, b) => PARAMETERS[key].choices ? 0 : a - b)]));
    const candidates = [], seen = new Map();
    if (domains.bearStrategy?.some(v => v !== 'disabled')) sim.forms.validate({ ...config, bearStrategy: 'auto' });
    const base = rotation(config);
    const signature = params => JSON.stringify(Object.fromEntries(Object.entries(params).filter(([key]) => policies.active(key, { ...config, ...params }))));
    const add = (params, reference) => {
      if (['primalBite', 'cyclePrimalBite'].includes(params.bearStrategy) && !sim.forms.rank(config, 'primal-bite')) return;
      if (sim.forms.cycle({ ...config, ...params }) && config.talentEffects?.shiftingKnown === false) return;
      const key = signature(params);
      let item = seen.get(key);
      if (!item) { item = { id: candidates.length, params, references: [] }; seen.set(key, item); candidates.push(item); }
      if (reference && !item.references.includes(reference)) item.references.push(reference);
    };
    // Enumerate only small categorical branches. Numeric cross-products stay
    // lazy, and inactive controls contribute no dimensions or duplicate rows.
    const categorical = keys.filter(k => PARAMETERS[k].choices), groups = [];
    const group = (params, i) => {
      if (i < categorical.length) {
        const key = categorical[i];
        for (const value of policies.active(key, { ...config, ...params }) ? domains[key] : [base[key]]) group({ ...params, [key]: value }, i + 1);
      } else {
        const live = keys.filter(k => !PARAMETERS[k].choices && policies.active(k, { ...config, ...params }));
        groups.push({ params, keys: live, space: live.reduce((n, k) => n * domains[k].length, 1) });
      }
    };
    group(base, 0);
    const space = groups.reduce((n, g) => n + g.space, 0), limit = Math.min(space, options.candidateLimit);
    const decode = (g, index) => {
      const params = { ...g.params };
      for (const key of g.keys) { params[key] = domains[key][index % domains[key].length]; index = Math.floor(index / domains[key].length); }
      return params;
    };
    add(base, 'Current settings');
    if (keys.includes('teaTiming') && config.teaPolicy !== 'disabled') {
      add({ ...base, teaTiming: 'threshold', teaMaxEnergy: 10 }, 'Original Tea timing');
      add({ ...base, teaTiming: 'protectShift', teaMaxEnergy: 10 }, 'Strict Shift protection');
      if (options.candidateLimit < candidates.length) throw new Error('Allow at least three candidates for Tea policy references.');
    }
    for (const [prefix, race] of [['elunesLight', 'NIGHT_ELF'], ['leyLine', 'HIGH_ORDER_SKYBORNE']]) {
      if (policies.race(config) === race && keys.some(k => k.startsWith(prefix))) {
        add({ ...base, [prefix + 'Timing']: 'disabled' }, 'Racial disabled');
        add({ ...base, [prefix + 'Timing']: 'cooldown', [prefix + 'Delay']: 0,
          ...(prefix === 'leyLine' ? { leyLinePrepull: false, leyLineAvoidBerserk: false } : {}) }, 'Racial on cooldown');
      }
    }
    if (candidates.length > options.candidateLimit) throw new Error('Increase candidate limit to include current and racial/Tea references.');
    const referenceCount = candidates.length;
    const target = options.candidateLimit;
    let exhaustive = false;
    if (space <= target) {
      exhaustive = true;
      for (const g of groups) for (let i = 0; i < g.space; i++) {
        const params = decode(g, i);
        if (candidates.length < target || seen.has(signature(params))) add(params);
        else exhaustive = false;
      }
    } else {
      const alternatives = keys.map(key => domains[key].filter(v => v !== base[key]).sort((a, b) => PARAMETERS[key].choices ? 0 : Math.abs(a - base[key]) - Math.abs(b - base[key]) || a - b));
      const axisLimit = Math.ceil(limit / 2);
      for (let row = 0; row < Math.max(0, ...alternatives.map(a => a.length)) && candidates.length < axisLimit; row++) {
        for (let i = 0; i < keys.length && candidates.length < axisLimit; i++) {
          if (row < alternatives[i].length) add({ ...base, [keys[i]]: alternatives[i][row] });
        }
      }
      const rng = sim.createRng(sim.deriveSeed(config.seed, 0x4f505449));
      for (let attempt = 0; candidates.length < limit && attempt < limit * 100; attempt++) {
        if (groups.length === 1 && Number.isSafeInteger(space)) { add(decode(groups[0], Math.floor(rng() * space))); continue; }
        const g = groups[Math.floor(rng() * groups.length)];
        add({ ...g.params, ...Object.fromEntries(g.keys.map(key => [key, domains[key][Math.floor(rng() * domains[key].length)]])) });
      }
    }
    return { candidates, space, exhaustive, referenceCount };
  }
  function attackCount(fight) { return ATTACKS.reduce((sum, id) => sum + fight.casts[id], 0); }
  function summarize(samples, options = {}) {
    const scoring = normalizeObjective(options);
    const duration = samples.reduce((sum, sample) => sum + sample.duration, 0);
    const casts = samples.reduce((sum, sample) => sum + sample.attacks, 0);
    const abilityCPM = Object.fromEntries(ATTACKS.map(id => [id, samples.reduce((sum, sample) => sum + sample.casts[id], 0) * 60 / duration]));
    return { cpm: casts * 60 / duration, duration, casts, iterations: samples.length, abilityCPM,
      finisherCPM: samples.reduce((sum, sample) => sum + sample.casts.rip + sample.casts.bite, 0) * 60 / duration,
      score: samples.reduce((sum, sample) => sum + objectiveCount(sample, scoring), 0) * (scoring.objective === 'dps' ? 1 : 60) / duration,
      dps: samples.every(sample => Number.isFinite(sample.damageTotal)) ? samples.reduce((sum, sample) => sum + sample.damageTotal, 0) / duration : null,
      resourceMetrics: Object.fromEntries(['shifts', 'teaUses', 'energyWaste', 'clips', 'overwrites', 'fulfilled', 'onCooldown', 'ticks', 'foregoneTickDamage', 'elunesLightUses', 'elunesLightOverlap', 'leyLineUses', 'leyLineMana'].map(key => [key,
        key === 'foregoneTickDamage' && samples.some(s => s[key] == null) ? null : samples.reduce((n, s) => n + (s[key] || 0), 0) / samples.length])),
      totalCPM: samples.reduce((sum, sample) => sum + sample.totalCasts, 0) * 60 / duration,
      rakeUptime: samples.reduce((sum, sample) => sum + sample.rakeUptime * sample.duration, 0) / duration,
      ripUptime: samples.reduce((sum, sample) => sum + sample.ripUptime * sample.duration, 0) / duration,
      oomPercent: samples.filter(sample => sample.oom).length * 100 / samples.length };
  }
  function pairedGain(baseline, candidate, options = {}) {
    const scoring = normalizeObjective(options);
    const n = baseline.length, duration = baseline.reduce((sum, sample) => sum + sample.duration, 0);
    const deltas = candidate.map((sample, i) => objectiveCount(sample, scoring) - objectiveCount(baseline[i], scoring));
    const scale = scoring.objective === 'dps' ? 1 : 60;
    const gain = deltas.reduce((sum, delta) => sum + delta, 0) * scale / duration;
    // Paired ratio-estimator SE: preserve pooled-time weighting for varied
    // durations instead of averaging equally weighted per-fight CPMs.
    const residuals = deltas.map((delta, i) => delta - gain * baseline[i].duration / scale);
    const se = n > 1 ? scale * Math.sqrt(residuals.reduce((sum, value) => sum + value * value, 0) / (n - 1) / n) / (duration / n) : null;
    return { gain, se };
  }

  // Each yield follows one fight, allowing the browser to render progress and
  // cancel between fights. This also works from local file previews: no worker
  // URL, server, dependency, or network access is needed.
  function* optimize(input = {}, inputOptions = {}) {
    const config = sim.normalize(input);
    const activeInput = { ...inputOptions };
    if (config.shiftingMode === 'automatic' && inputOptions.parameterValues && !inputOptions.parameterValues.shiftingMode) {
      activeInput.parameterValues = Object.fromEntries(Object.entries(inputOptions.parameterValues).filter(([key]) => key !== 'shiftingThreshold'));
      if (!Object.keys(activeInput.parameterValues).length) throw new Error('Automatic shifting has no threshold to optimize. Select another parameter or use manual shifting.');
    }
    const options = normalizeOptions(activeInput);
    if (options.objective === 'dps' && !config.damageEnabled) throw new Error('Enable experimental damage and supply AP and weapon damage before optimizing DPS.');
    if (config.shiftingMode === 'automatic' && !options.parameterValues.shiftingMode) delete options.parameterValues.shiftingThreshold;
    const { candidates, space, exhaustive, referenceCount } = makeCandidates(config, options);
    const finalistCount = Math.min(candidates.length, Math.max(referenceCount, options.finalists + 1));
    let completedFights = 0;
    let totalFights = candidates.length * options.screeningIterations + finalistCount * options.validationIterations;
    if (totalFights > 25000) throw new Error('Search including policy references exceeds the 25,000-fight limit.');
    function* evaluate(candidate, iterations, offset, phase, candidateIndex, candidateCount) {
      const samples = [], candidateConfig = { ...config, ...candidate.params, debug: false };
      for (let i = 1; i <= iterations; i++) {
        const fight = sim.simulateFight(candidateConfig, { iteration: offset + i, debug: false });
        const clips = Object.values(fight.clipping || {});
        samples.push({ duration: fight.duration, attacks: attackCount(fight), casts: Object.fromEntries(ATTACKS.map(id => [id, fight.casts[id]])),
          shifts: fight.casts.shiftingPower, teaUses: fight.tea?.uses || 0, energyWaste: fight.energy?.waste || 0,
          elunesLightUses: fight.racials?.elunesLight.uses || 0, elunesLightOverlap: fight.racials?.elunesLight.berserkOverlapSeconds || 0,
          leyLineUses: fight.racials?.leyLine.uses || 0, leyLineMana: fight.racials?.leyLine.manaGained || 0,
          ...Object.fromEntries([['clips', 'attempts'], ['overwrites', 'overwrites'], ['fulfilled', 'fulfilled'], ['onCooldown', 'onCooldown'], ['ticks', 'ticks'], ['foregoneTickDamage', 'foregoneTickDamage']]
            .map(([key, field]) => [key, field === 'foregoneTickDamage' && !candidateConfig.damageEnabled ? null : clips.reduce((n, r) => n + r[field], 0)])),
          damageTotal: fight.damage?.total ?? null,
          totalCasts: sim.ABILITIES.reduce((sum, id) => sum + fight.casts[id], 0),
          rakeUptime: fight.uptime.rake, ripUptime: fight.uptime.rip, oom: fight.oomTime !== null });
        completedFights++;
        yield { phase, candidateIndex, candidateCount, completedFights, totalFights, seed: config.seed };
      }
      return { candidate, samples, summary: summarize(samples, options) };
    }
    const screened = [];
    for (let i = 0; i < candidates.length; i++) screened.push(yield* evaluate(candidates[i], options.screeningIterations, 0, 'Screening', i + 1, candidates.length));
    screened.sort((a, b) => compareScores(a.summary, b.summary) || a.candidate.id - b.candidate.id);
    const finalists = [...candidates.slice(0, referenceCount), ...screened.filter(item => item.candidate.id >= referenceCount).slice(0, finalistCount - referenceCount).map(item => item.candidate)];
    totalFights = completedFights + finalists.length * options.validationIterations;
    const validated = [];
    for (let i = 0; i < finalists.length; i++) validated.push(yield* evaluate(finalists[i], options.validationIterations, options.screeningIterations, 'Validation', i + 1, finalists.length));
    const baseline = validated[0];
    const ranked = validated.map(item => {
      const scoreDelta = pairedGain(baseline.samples, item.samples, options);
      const dpsDelta = config.damageEnabled ? pairedGain(baseline.samples, item.samples, { objective: 'dps' }) : null;
      return { id: item.candidate.id, params: item.candidate.params, references: item.candidate.references,
        recipe: policies.recipe({ ...config, ...item.candidate.params }), ...item.summary,
        dpsGain: dpsDelta?.gain ?? null, dpsSe: dpsDelta?.se ?? null,
        ...pairedGain(baseline.samples, item.samples), scoreGain: scoreDelta.gain, scoreSe: scoreDelta.se };
    }).sort((a, b) => compareScores(a, b) || a.id - b.id);
    return { config, options, mechanicsRevision: sim.MECHANICS_REVISION, rotationRevision: policies.REVISION, screeningFirstIteration: 1, screeningLastIteration: options.screeningIterations,
      candidatesTested: candidates.length, space, exhaustive, completedFights,
      validationFirstIteration: options.screeningIterations + 1, validationLastIteration: options.screeningIterations + options.validationIterations,
      baseline: ranked.find(item => item.id === 0), best: ranked[0], ranked };
  }

  function potionCandidates(config) {
    const rows = [
      { id: 'mana', label: 'Mana only', params: { usePotions: true, potionStrategy: 'mana' } },
      { id: 'rage', label: 'Mighty Rage only', params: { usePotions: true, potionStrategy: 'rage' } },
      { id: 'openerRage', label: 'Mighty Rage opener → mana', params: { usePotions: true, potionStrategy: 'openerRage' } },
      ...[25, 50, 75].map(reserve => ({ id: `adaptive${reserve}`, label: `Adaptive · ${reserve}% mana reserve`,
        params: { usePotions: true, potionStrategy: 'adaptive', potionManaReserve: reserve } })),
      { id: 'none', label: 'No potions', params: { usePotions: false } }
    ];
    const signature = c => !c.usePotions ? 'none' : `${c.potionStrategy}:${c.potionStrategy === 'adaptive' ? c.potionManaReserve : ''}`;
    const current = rows.find(row => signature({ ...config, ...row.params }) === signature(config));
    if (current) current.current = true;
    else rows.push({ id: 'current', label: 'Current potion strategy', current: true,
      params: { usePotions: config.usePotions, potionStrategy: config.potionStrategy, potionManaReserve: config.potionManaReserve } });
    return rows;
  }
  // Predeclared policy comparison, not a rotation search or a per-fight oracle.
  // Every policy decides using only current mana, past uses and its cooldown.
  function* comparePotions(input = {}, { iterations = 1000, firstIteration = 100001 } = {}) {
    const config = sim.normalize(input);
    if (config.statMode !== 'unbuffed' || !config.damageEnabled) throw new Error('Potion comparison needs an unbuffed Cat import and enabled damage with AP and weapon values.');
    if (!Number.isInteger(iterations) || iterations < 2 || iterations > 3000) throw new Error('Compare 2–3,000 paired fights per strategy.');
    if (!Number.isInteger(firstIteration) || firstIteration < 1 || firstIteration + iterations > 4294967295) throw new Error('Invalid potion comparison iteration range.');
    const candidates = potionCandidates(config), evaluated = [], totalFights = candidates.length * iterations;
    let completedFights = 0;
    for (const candidate of candidates) {
      const samples = [], c = { ...config, ...candidate.params, debug: false };
      let sequence;
      for (let i = 0; i < iterations; i++) {
        const fight = sim.simulateFight(c, { iteration: firstIteration + i, debug: false });
        if (i === 0) sequence = fight.potionSequence;
        samples.push({ duration: fight.duration, attacks: attackCount(fight), casts: fight.casts,
          damageTotal: fight.damage.total, totalCasts: sim.ABILITIES.reduce((sum, id) => sum + fight.casts[id], 0),
          rakeUptime: fight.uptime.rake, ripUptime: fight.uptime.rip, oom: fight.oomTime !== null, oomTime: fight.oomTime,
          endingMana: fight.endingMana, manaUses: fight.potion.uses, rageUses: fight.mightyRage.uses,
          rageUptimeSeconds: fight.mightyRage.uptimeSeconds });
        yield { phase: candidate.label, completedFights: ++completedFights, totalFights, seed: config.seed };
      }
      const mean = key => samples.reduce((sum, sample) => sum + sample[key], 0) / iterations;
      const oom = samples.filter(sample => sample.oom);
      evaluated.push({ ...candidate, samples, ...summarize(samples, { objective: 'dps' }),
        oomTime: oom.length ? oom.reduce((sum, sample) => sum + sample.oomTime, 0) / oom.length : null,
        endingMana: mean('endingMana'), manaUses: mean('manaUses'), rageUses: mean('rageUses'),
        rageUptimeSeconds: mean('rageUptimeSeconds'), sequence });
    }
    const reference = evaluated[0];
    const rows = evaluated.map(({ samples, ...row }) => ({ ...row,
      dpsDelta: pairedGain(reference.samples, samples, { objective: 'dps' }), cpmDelta: pairedGain(reference.samples, samples) }));
    return { config, rows, referenceId: 'mana', iterations, firstIteration, lastIteration: firstIteration + iterations - 1, completedFights };
  }

  return { ATTACKS, PARAMETERS, PRESETS, normalizeObjective, objectiveLabel, objectiveCount, compareScores,
    parseValues, normalizeOptions, makeCandidates, attackCount, summarize, pairedGain, optimize, potionCandidates, comparePotions };
});
