(function(root, factory) {
  const api = typeof module === 'object' && module.exports
    ? factory(require('./feral-sim.js'), require('./feral-talents.js'))
    : factory(root.FOREVER_FERAL_SIM, root.FOREVER_FERAL_TALENTS);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_BEARWEAVE = api;
})(globalThis, function(sim, talents) {
  'use strict';
  const REVISION = 'bearweave-lab-v1', JOB_LIMIT = 25000;
  const STRATEGIES = ['auto', 'maul', 'lacerate', 'primalBite', 'mixed'];
  const SWINGS = [{ id: 'carry', bearSwingRule: 'carry' }, { id: 'reset', bearSwingRule: 'reset' },
    ...[1, 1.25, 1.5, 1.75, 2, 2.5].map(x => ({ id: `minimum-${x}`, bearSwingRule: 'minimum', bearSwingDelay: x }))];
  const OFFENSIVE = ['blood-frenzy', 'natural-shapeshifter', 'reflection', 'primal-bite', 'naturalist', 'genesis', 'natures-majesty', 'natures-reach', 'ferocity', 'heart-of-the-wild', 'shredding-attacks', 'savage-fury', 'sharpened-claws', 'predatory-strikes', 'leader-of-the-pack', 'predatory-instincts', 'rend-and-tear'];
  const CAT_KEYS = ['shiftingMode', 'shiftingThreshold', 'shiftDelayPenalty', 'teaTiming', 'teaMaxEnergy', 'teaDelayPenalty', 'biteMaxEnergy', 'biteRipOutside', 'biteRipBerserk', 'ripMinCP', 'biteMinCP'];
  const clone = value => JSON.parse(JSON.stringify(value));
  const spRank = build => build['shifting-power'] ? 1 + (build['improved-shifting-power'] || 0) : 0;
  const signature = input => JSON.stringify(sim.normalize(input));
  function legalBuilds(code, saved = []) {
    const source = talents.decode(code);
    if (source.furor !== 5) throw new Error('Select a legal 5/5 Furor build before creating this experiment.');
    const results = new Map();
    const add = (build, label) => {
      try {
        talents.validate(build); if (build.furor !== 5) return;
        const code = talents.encode(build);
        if (!results.has(code)) results.set(code, { code, rank: spRank(build), primal: Boolean(build['primal-bite']), label, points: talents.total(build) });
      } catch (_) { /* A reallocation must validate in its final, complete tree. */ }
    };
    add(source, 'Current build');
    const targetPoints = talents.total(source);
    for (let sp = 0; sp <= 3; sp++) {
      const allocation = { ...source, 'shifting-power': Number(sp > 0), 'improved-shifting-power': Math.max(0, sp - 1) };
      const difference = targetPoints - talents.total(allocation);
      function distribute(build, left, start = 0) {
        if (!left) { add(build, `SP ${sp}/3 · reallocated`); return; }
        for (let i = start; i < OFFENSIVE.length; i++) {
          const id = OFFENSIVE[i], value = (build[id] || 0) + Math.sign(left);
          if (value < 0 || value > talents.byId[id].max) continue;
          distribute({ ...build, [id]: value }, left - Math.sign(left), i);
        }
      }
      distribute(allocation, difference);
    }
    // Offer real one-point donors for Primal Bite, never a free unlock.
    for (const item of [...results.values()]) if (!item.primal) {
      const build = talents.decode(item.code);
      for (const donor of OFFENSIVE) if (build[donor] && donor !== 'primal-bite') add({ ...build, [donor]: build[donor] - 1, 'primal-bite': 1 }, `SP ${item.rank}/3 · ${talents.byId[donor].name} → Primal Bite`);
    }
    for (const savedBuild of saved) {
      const build = talents.decode(savedBuild.code);
      if (build.furor !== 5) throw new Error(`Saved build “${savedBuild.name}” needs 5/5 Furor.`);
      add(build, String(savedBuild.name).slice(0, 80));
      results.get(talents.encode(build)).saved = true;
    }
    return [...results.values()].map((b, i) => ({ ...b, id: i }));
  }
  function options(input = {}) {
    const o = { screeningIterations: 50, validationIterations: 1000, buildsPerRank: 2,
      furors: ['current', 'reverted'], ranks: [0, 1, 2, 3], strategies: STRATEGIES,
      swings: SWINGS.map(s => s.id), exits: ['stay', 'cancel'], enrage: [false, true],
      tuneEntries: true, tuneCat: true, sensitivities: true, savedBuilds: [], ...input };
    for (const [key, min, max] of [['screeningIterations', 1, 500], ['validationIterations', 2, 10000], ['buildsPerRank', 2, 200]]) {
      if (!Number.isInteger(o[key]) || o[key] < min || o[key] > max) throw new Error(`Invalid ${key}: ${min}–${max}.`);
    }
    for (const [key, allowed] of Object.entries({ furors: ['current', 'reverted'], ranks: [0, 1, 2, 3], strategies: STRATEGIES, swings: SWINGS.map(s => s.id), exits: ['stay', 'cancel'], enrage: [false, true] })) {
      if (!Array.isArray(o[key]) || !o[key].length || o[key].some(v => !allowed.includes(v))) throw new Error(`Choose valid ${key}.`);
      o[key] = [...new Set(o[key])];
    }
    return o;
  }
  function plan(input, settings = {}) {
    const c = sim.normalize({ ...input, bearStrategy: 'disabled', biteRank: 4 });
    if (c.characterMode !== 'gear' || c.talentMode !== 'build' || !c.damageEnabled) throw new Error('Bearweave evaluation requires gear-calculated stats, integrated talents, and damage enabled.');
    const o = options(settings), generated = legalBuilds(c.talentBuild, o.savedBuilds), builds = [];
    for (const rank of o.ranks) {
      const pool = generated.filter(b => b.rank === rank);
      const required = [...pool.filter(b => b.saved || b.label === 'Current build'), pool.find(b => !b.primal), pool.find(b => b.primal)].filter(Boolean);
      const selected = [...new Map([...required, ...pool].map(b => [b.code, b])).values()];
      // Never silently discard a supplied named build or the current build.
      const limit = Math.max(o.buildsPerRank, new Set(required.map(b => b.code)).size);
      builds.push(...selected.slice(0, limit));
    }
    if (!builds.length || o.ranks.some(r => !builds.some(b => b.rank === r))) throw new Error('The selected talent tree cannot produce a legal build at every requested SP rank. Supply additional saved builds.');
    const cats = [], seen = new Set();
    for (const build of builds) {
      const tuning = [{ label: 'Current rotation', patch: {} }, ...(o.tuneCat ? [
        { label: 'Conservative finishers', patch: { biteMaxEnergy: 35, biteRipOutside: 12, biteRipBerserk: 12, ripMinCP: 5, biteMinCP: 5 } },
        { label: 'Aggressive finishers', patch: { biteMaxEnergy: 50, biteRipOutside: 4, biteRipBerserk: 2, ripMinCP: 5, biteMinCP: 5 } }
      ] : [])];
      for (const variant of tuning) {
        const config = sim.normalize({ ...c, talentBuild: build.code, ...variant.patch, bearStrategy: 'disabled' });
        const key = signature(config); if (seen.has(key)) continue; seen.add(key);
        cats.push({ id: `cat-${cats.length}`, build, config, label: variant.label, strategy: 'disabled', swing: 'none', furor: 'both' });
      }
    }
    const entries = [{ label: 'Current entry rules', patch: {} }, ...(o.tuneEntries ? [
      { label: 'Earlier entry', patch: { bearEnergy: 30, bearShiftBuffer: 3, bearRipBuffer: 3, bearRakeBuffer: 3, bearEntryPriority: 'builders' } },
      { label: 'Low Energy / long gap', patch: { bearEnergy: 10, bearShiftBuffer: 4.5, bearRipBuffer: 4.5, bearRakeBuffer: 4.5, bearEntryPriority: 'pool' } }
    ] : [])];
    const templates = [], signatures = new Set();
    for (const build of builds) for (const furor of o.furors) for (const strategy of o.strategies) {
      if (strategy === 'primalBite' && !build.primal) continue;
      for (const swingId of o.swings) for (const exit of o.exits) for (const enrage of strategy === 'auto' ? [false] : o.enrage) for (const entry of entries) {
        const swing = SWINGS.find(s => s.id === swingId);
        const patch = { ...entry.patch, furorMode: furor, bearStrategy: strategy, bearSwingRule: swing.bearSwingRule,
          bearSwingDelay: swing.bearSwingDelay ?? c.bearSwingDelay, bearExit: exit, bearEnrage: enrage };
        const behavior = { ...sim.forms.DEFAULTS, ...c, ...patch };
        const key = JSON.stringify([build.code, Object.fromEntries(Object.keys(sim.forms.DEFAULTS).filter(k =>
          !(build.rank === 0 && ['bearShiftBuffer', 'bearRequireShiftCD'].includes(k)) &&
          !(k === 'bearSwingDelay' && swing.bearSwingRule !== 'minimum') &&
          !(k === 'bearMixedPriority' && (strategy !== 'mixed' || !build.primal)) &&
          !(k === 'bearRakeBuffer' && c.rakeMode !== 'maintain')
        ).map(k => [k, behavior[k]]))]);
        if (signatures.has(key)) continue; signatures.add(key);
        templates.push({ id: `bear-${templates.length}`, build, furor, strategy, swing: swingId, patch, label: entry.label });
      }
    }
    if (input.bearStrategy && input.bearStrategy !== 'disabled') {
      const build = generated.find(b => b.code === c.talentBuild);
      let cat = cats.find(r => r.build.code === build.code && r.label === 'Current rotation');
      if (!cat) { cat = { id: `cat-${cats.length}`, build, config: c, label: 'Current rotation', strategy: 'disabled', swing: 'none', furor: 'both' }; cats.push(cat); }
      const original = sim.normalize({ ...input, biteRank: 4 });
      templates.push({ id: 'bear-current', build, furor: original.furorMode, strategy: original.bearStrategy,
        swing: original.bearSwingRule === 'minimum' ? `minimum-${original.bearSwingDelay}` : original.bearSwingRule,
        fixedBaseline: cat.id, patch: Object.fromEntries(Object.keys(sim.forms.DEFAULTS).map(k => [k, original[k]])), label: 'Current settings' });
    }
    const screeningFights = (cats.length + templates.length) * o.screeningIterations;
    const maxShortlist = Math.min(templates.length, o.furors.length * (o.strategies.length + o.swings.length) + 1);
    const validationUpperBound = (maxShortlist * 2 + 1) * o.validationIterations * (o.sensitivities ? 4 : 1);
    return { revision: REVISION, mechanicsRevision: sim.MECHANICS_REVISION, config: c, original: sim.normalize(input), signature: signature(input), options: o,
      generatedBuilds: generated, builds, cats, templates, entries, screeningFights, validationUpperBound,
      jobs: Math.ceil(screeningFights / JOB_LIMIT), maxJobFights: JOB_LIMIT,
      screeningRange: [1, o.screeningIterations], validationRange: [100001, 100000 + o.validationIterations] };
  }
  const BEAR_DAMAGE = ['bearAuto', 'bearWindfury', 'maul', 'lacerate', 'lacerateTick', 'primalBite'];
  const CAT_DAMAGE = ['auto', 'windfury', 'shred', 'rakeInitial', 'rakeTick', 'rip', 'bite'];
  function sample(f) {
    const source = keys => keys.reduce((n, k) => n + (f.damage.bySource[k]?.damage || 0), 0);
    return { duration: f.duration, damage: f.damage.total, catDamage: source(CAT_DAMAGE), bearDamage: source(BEAR_DAMAGE) };
  }
  function paired(reference, candidate, field = 'damage') {
    if (!reference.length || reference.length !== candidate.length || reference.some((r, i) => r.duration !== candidate[i].duration)) throw new Error('Paired comparisons require matching iterations and fight durations.');
    const n = reference.length, seconds = reference.reduce((sum, r) => sum + r.duration, 0);
    const deltas = candidate.map((r, i) => r[field] - reference[i][field]);
    const delta = deltas.reduce((sum, d) => sum + d, 0) / seconds;
    const se = n > 1 ? Math.sqrt(deltas.reduce((sum, d, i) => sum + (d - delta * reference[i].duration) ** 2, 0) / (n - 1) / n) / (seconds / n) : null;
    const dps = reference.reduce((sum, r) => sum + r[field], 0) / seconds;
    return { delta, percent: dps ? delta / dps * 100 : null, se, low: se == null ? null : delta - 1.96 * se, high: se == null ? null : delta + 1.96 * se };
  }
  function summarize(fights) {
    const n = fights.length, seconds = fights.reduce((sum, f) => sum + f.duration, 0), samples = fights.map(sample);
    const sum = fn => fights.reduce((v, f) => v + fn(f), 0), mean = fn => sum(fn) / n;
    const ooms = fights.map(f => Math.min(f.oomTime ?? Infinity, f.forms.manaBlockedAt ?? Infinity)).filter(Number.isFinite);
    return { dps: samples.reduce((v, s) => v + s.damage, 0) / seconds, seconds, samples,
      forms: sim.formTesting.aggregateForms(fights, seconds),
      ripUptime: sum(f => f.uptime.rip * f.duration) / seconds, rakeUptime: sum(f => f.uptime.rake * f.duration) / seconds,
      shiftCPM: sum(f => f.casts.shiftingPower) * 60 / seconds, shredCPM: sum(f => f.casts.shred) * 60 / seconds,
      catDps: samples.reduce((v, s) => v + s.catDamage, 0) / seconds, bearDps: samples.reduce((v, s) => v + s.bearDamage, 0) / seconds,
      oomPercent: ooms.length / n * 100, oomTime: ooms.length ? ooms.reduce((a, b) => a + b, 0) / ooms.length : null,
      manaSpent: mean(f => f.manaSpent), energyWaste: mean(f => f.energy.waste) };
  }
  const sortRows = (a, b) => b.dps - a.dps || a.id.localeCompare(b.id);
  const bestWeave = rows => rows.find(r => r.forms.entries > 0) || null;
  function* evaluate(row, iterations, firstIteration, progress) {
    const fights = [];
    const config = sim.normalize(row.config);
    for (let i = 0; i < iterations; i++) {
      fights.push(sim.simulateFight(config, { iteration: firstIteration + i, debug: false, normalized: true }));
      progress.completed++;
      yield { ...progress, job: Math.ceil(progress.completed / JOB_LIMIT), jobFights: (progress.completed - 1) % JOB_LIMIT + 1, candidate: row.id };
    }
    return { ...row, ...summarize(fights), firstIteration, lastIteration: firstIteration + iterations - 1, iterations,
      recipe: sim.rotation.recipe(row.config) };
  }
  function* screen(inputPlan) {
    const p = inputPlan, progress = { phase: 'Cat-only tuning', completed: 0, total: p.screeningFights }, cats = [], rows = [];
    for (const cat of p.cats) cats.push(yield* evaluate(cat, p.options.screeningIterations, 1, progress));
    cats.sort(sortRows);
    const bestCat = cats[0], buildCats = new Map(p.builds.map(b => [b.code, cats.find(r => r.build.code === b.code)]));
    progress.phase = 'Bearweave screening';
    for (const template of p.templates) {
      const baseline = template.fixedBaseline ? cats.find(c => c.id === template.fixedBaseline) : buildCats.get(template.build.code), config = sim.normalize({ ...baseline.config, ...template.patch });
      const row = yield* evaluate({ ...template, config, baselineId: baseline.id }, p.options.screeningIterations, 1, progress);
      rows.push({ ...row, status: 'screening', sameBuild: paired(baseline.samples, row.samples), bestCat: paired(bestCat.samples, row.samples), catDamageDifference: paired(baseline.samples, row.samples, 'catDamage') });
    }
    rows.sort(sortRows);
    return { revision: REVISION, mechanicsRevision: sim.MECHANICS_REVISION, plan: p, cats, rows, bestCat, bestWeave: bestWeave(rows), completedFights: progress.completed, status: 'screening' };
  }
  function shortlist(result) {
    const rows = result.rows.filter(r => r.forms.entries > 0), selected = new Map();
    const add = r => { if (r) selected.set(r.id, r); };
    add(rows[0]);
    for (const furor of result.plan.options.furors) {
      for (const strategy of result.plan.options.strategies) add(rows.find(r => r.furor === furor && r.strategy === strategy));
      for (const swing of result.plan.options.swings) add(rows.find(r => r.furor === furor && r.swing === swing));
    }
    return [...selected.values()];
  }
  function validationPlan(result) {
    const selected = shortlist(result), groups = [{ id: 'primary', patch: {} }, ...(result.plan.options.sensitivities ? [
      { id: 'rank-5-bite', patch: { biteRank: 5 } }, { id: '100ms', patch: { inputDelayMs: 100 } }, { id: '200ms', patch: { inputDelayMs: 200 } }
    ] : [])];
    const baselineIds = new Set([result.bestCat.id, ...selected.map(r => r.baselineId)]);
    const total = (selected.length + baselineIds.size) * groups.length * result.plan.options.validationIterations;
    return { selected, groups, baselineIds: [...baselineIds], total, jobs: Math.ceil(total / JOB_LIMIT), maxJobFights: JOB_LIMIT };
  }
  function* validate(result) {
    if (result.mechanicsRevision !== sim.MECHANICS_REVISION) throw new Error('Mechanics changed; screen this experiment again.');
    const v = validationPlan(result), progress = { phase: 'Fresh paired validation', completed: 0, total: v.total }, validations = [];
    for (let g = 0; g < v.groups.length; g++) {
      const group = v.groups[g], first = 100001 + g * 20000, iterations = result.plan.options.validationIterations;
      const bases = new Map();
      for (const id of v.baselineIds) {
        const row = result.cats.find(r => r.id === id);
        bases.set(id, yield* evaluate({ ...row, status: 'validated', config: { ...row.config, ...group.patch } }, iterations, first, progress));
      }
      const cat = bases.get(result.bestCat.id), rows = [];
      for (const candidate of v.selected) {
        const row = yield* evaluate({ ...candidate, config: { ...candidate.config, ...group.patch } }, iterations, first, progress);
        const baseline = bases.get(row.baselineId);
        rows.push({ ...row, status: 'validated', sameBuild: paired(baseline.samples, row.samples), bestCat: paired(cat.samples, row.samples), catDamageDifference: paired(baseline.samples, row.samples, 'catDamage') });
      }
      rows.sort(sortRows); validations.push({ group, rows, bestCat: cat, bestWeave: bestWeave(rows), baselines: [...bases.values()], firstIteration: first, lastIteration: first + iterations - 1 });
    }
    return { ...result, validations, status: 'validated', completedFights: result.completedFights + progress.completed };
  }
  function exportResult(result) {
    return JSON.stringify({ ...result, exportedAt: new Date().toISOString(), interpretation: 'Best tested configurations only. Sampling intervals do not include mechanics uncertainty or selection bias. Cat-source differences are paired damage differences, not a causal attribution to an excursion.' }, null, 2);
  }
  return { REVISION, JOB_LIMIT, STRATEGIES, SWINGS, OFFENSIVE, CAT_KEYS, spRank, signature, legalBuilds, options, plan, sample, paired, summarize, evaluate, screen, bestWeave, shortlist, validationPlan, validate, exportResult };
});
