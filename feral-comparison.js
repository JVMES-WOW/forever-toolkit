// Local saved-run comparisons. No combat RNG or simulation policy lives here.
(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./feral-display.js') : root.FOREVER_FERAL_DISPLAY);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FOREVER_FERAL_COMPARISON = api;
})(typeof globalThis === 'object' ? globalThis : this, function (display) {
  'use strict';
  // Keep the storage key so v1 pairs can be migrated without loss.
  const VERSION = 4, STORAGE_KEY = 'forever-feral.saved-comparison.v1';
  const clone = value => JSON.parse(JSON.stringify(value));
  const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
  const sameConfig = (a, b) => JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));
  function freeze(value) {
    if (value && typeof value === 'object') { Object.values(value).forEach(freeze); Object.freeze(value); }
    return value;
  }
  const immutable = value => freeze(clone(value));
  function createStore(initial) {
    let current = initial?.current ? immutable(initial.current) : null;
    let reference = initial?.reference ? immutable(initial.reference) : null;
    let nextId = Math.max(current?.id || 0, reference?.id || 0) + 1;
    const get = () => ({ current, reference });
    return {
      get,
      record(result, setup) {
        const id = nextId++;
        current = immutable({ id, label: `Run ${id}`, result, setup, draft: setup });
        return get();
      },
      pin() { if (current) reference = immutable({ ...current, draft: current.setup }); return get(); },
      draft(setup) { if (current) current = immutable({ ...current, draft: setup }); return get(); },
      rename(slot, label) {
        const name = String(label).trim().slice(0, 80);
        if (slot === 'current' && current) current = immutable({ ...current, label: name || `Run ${current.id}` });
        if (slot === 'reference' && reference) reference = immutable({ ...reference, label: name || `Run ${reference.id}` });
        return get();
      },
      swap(setup) {
        if (!current || !reference) return get();
        const outgoing = immutable({ ...current, draft: setup || current.draft });
        current = reference; reference = outgoing;
        return get();
      },
      clear() { reference = null; return get(); }
    };
  }
  function serialize(state) { return JSON.stringify({ version: VERSION, ...state }); }
  function deserialize(text, validateConfig, expectedFields) {
    if (typeof text !== 'string' || text.length > 4_000_000) throw new Error('Saved comparison is too large or unreadable.');
    const data = JSON.parse(text);
    if (![1, 2, 3, VERSION].includes(data.version) || !data.current || !data.reference) throw new Error('Saved comparison uses an unsupported format.');
    if (data.version < VERSION) {
      const additions = { ...(data.version === 1 ? { characterMode: 'totals', gearBuild: '', gearAreaTypes: '', targetCreature: 'other' } : {}), ...(data.version < 3 ? { giftOfArthas: false } : {}), crystalYield: false };
      for (const entry of [data.current, data.reference]) for (const setup of [entry.setup, entry.draft]) {
        if (setup?.values) for (const [key, value] of Object.entries(additions)) if (expectedFields.includes(key) && !Object.hasOwn(setup.values, key)) setup.values[key] = value;
      }
    }
    for (const entry of [data.current, data.reference]) {
      if (!Number.isSafeInteger(entry.id) || entry.id < 1 || typeof entry.label !== 'string' || entry.label.length > 80) throw new Error('Invalid saved run identity.');
      for (const setup of [entry.setup, entry.draft]) {
        if (!setup || !setup.values || typeof setup.freshSeed !== 'boolean') throw new Error('Saved settings are incomplete.');
        if (expectedFields.some(key => !Object.hasOwn(setup.values, key)) || Object.keys(setup.values).some(key => !expectedFields.includes(key))) throw new Error('Saved settings no longer match this simulator version.');
        if (Object.values(setup.values).some(value => !['string', 'boolean', 'number'].includes(typeof value))) throw new Error('Invalid saved setting.');
        if (setup.talentDraft && (typeof setup.talentDraft.build !== 'string' || typeof setup.talentDraft.code !== 'string' || setup.talentDraft.build.length > 5000 || setup.talentDraft.code.length > 5000)) throw new Error('Invalid saved talent draft.');
      }
      const normalized = validateConfig(entry.setup.values);
      // Keep invalid, unrun drafts as editable text; only a completed run must be valid.
      if (!sameConfig(normalized, validateConfig(entry.result?.config))) throw new Error('Saved settings do not match their result.');
      validateResult(entry.result);
    }
    return immutable({ current: data.current, reference: data.reference });
  }
  function validateResult(r) {
    if (!r || !Number.isInteger(r.fights) || r.fights < 1 || r.fights > 10000 || !(r.durationStats?.total > 0)) throw new Error('Invalid saved result.');
    // Check every aggregate branch the result renderers use. No partial restores.
    for (const key of ['abilityStats', 'berserkCrits', 'totalCasts', 'finisherCasts', 'energy', 'manaGained', 'cp', 'biteDiagnostics', 'uptime', 'omen', 'windfury', 'manaSpent', 'manaWaste', 'endingMana', 'oom', 'bloodFrenzy', 'jow', 'potion', 'mightyRage', 'tea', 'berserkCasts']) {
      if (!r[key] || typeof r[key] !== 'object') throw new Error(`Missing saved metric: ${key}.`);
    }
    function check(value) {
      if (typeof value === 'number' && !Number.isFinite(value)) throw new Error('Invalid saved metric.');
      if (value && typeof value === 'object') Object.values(value).forEach(check);
    }
    check(r);
    const scalar = (path, nullable = false) => {
      const value = path.split('.').reduce((o, key) => o?.[key], r);
      if (!(nullable && value === null) && !Number.isFinite(value)) throw new Error(`Invalid saved metric: ${path}.`);
    };
    for (const path of ['durationStats.mean', 'durationStats.min', 'durationStats.max', 'durationStats.total', 'totalCasts.mean', 'totalCasts.cpm', 'finisherCasts.mean', 'finisherCasts.cpm', 'oom.percent', 'oom.count', 'berserkCrits.uses', 'mightyRage.bonusAP']) scalar(path);
    scalar('oom.mean', true); scalar('oom.median', true);
    if (!Array.isArray(r.oom.times) || r.oom.times.some(t => !Number.isFinite(t))) throw new Error('Invalid saved OOM distribution.');
    for (const id of ['rake', 'shred', 'rip', 'bite', 'shiftingPower', 'berserk', 'faerieFire']) {
      for (const metric of ['mean', 'cpm', 'sd', 'median', 'p5', 'p95']) scalar(`abilityStats.${id}.${metric}`);
      scalar(`berserkCasts.${id}.mean`);
    }
    for (const [section, keys] of Object.entries({
      energy: ['natural', 'shifting', 'tea', 'waste', 'shiftingWaste', 'teaWaste'], manaGained: ['spirit', 'blessing', 'spring', 'jow', 'potion', 'tide'],
      cp: ['normal', 'bloodFrenzy', 'waste', 'ripConsumed', 'biteConsumed', 'atCapCasts', 'atCapWaste', 'rakeAtCapCasts', 'rakeAtCapWaste', 'shredAtCapCasts', 'shredAtCapWaste'],
      uptime: ['rake', 'rip', 'berserk', 'clearcasting'], omen: ['procs', 'startingProcs', 'freeCasts', 'energySaved', 'attempts', 'costWaived', 'expired', 'refreshed', 'remaining'],
      windfury: ['procs', 'extraAttacks', 'landed', 'attempts', 'pending'], potion: ['uses', 'gained', 'rolled', 'waste'],
      mightyRage: ['uses', 'uptimeSeconds'], tea: ['uses', 'gained'], bloodFrenzy: ['procs', 'attempts'], jow: ['procs', 'attempts'], berserkCrits: ['rake', 'shred', 'created']
    })) for (const key of keys) scalar(`${section}.${key}.mean`);
    for (const key of ['manaSpent', 'manaWaste', 'endingMana']) scalar(`${key}.mean`);
    for (const key of ['rake', 'shred', 'created']) scalar(`berserkCrits.perUse.${key}`, true);
    if (r.damage != null) {
      for (const key of ['dps', 'meanTotal', 'total', 'meanArmor', 'mitigation', 'faerieFireUptime']) scalar(`damage.${key}`);
      scalar('damage.se', true);
      for (const id of ['auto', 'windfury', 'shred', 'rakeInitial', 'rakeTick', 'rip', 'bite']) for (const key of ['meanDamage', 'dps', 'share', 'hit', 'crit', 'glance', 'avoided']) scalar(`damage.bySource.${id}.${key}`);
    }
  }
  const difference = (current, reference) => ({ current, reference,
    delta: Number.isFinite(current) && Number.isFinite(reference) ? current - reference : null,
    percent: Number.isFinite(current) && Number.isFinite(reference) && reference !== 0 ? (current - reference) / Math.abs(reference) * 100 : null });
  function metrics(current, reference) {
    const attacks = r => ['rake', 'shred', 'rip', 'bite'].reduce((n, id) => n + r.abilityStats[id].cpm, 0);
    const definitions = [
      ['DPS', 'DPS', r => r.damage?.dps ?? null], ['Damage / fight', 'damage', r => r.damage?.meanTotal ?? null],
      ['Attack CPM', 'CPM', attacks], ['Finisher CPM', 'CPM', r => r.finisherCasts.cpm],
      ['All-ability CPM', 'CPM', r => r.totalCasts.cpm], ['Casts / fight', 'casts', r => r.totalCasts.mean],
      ['Rip uptime', 'pp', r => r.uptime.rip.mean], ['Rake uptime', 'pp', r => r.uptime.rake.mean],
      ['OOM fights', 'pp', r => r.oom.percent], ['Ending mana', 'mana', r => r.endingMana.mean]
    ];
    return definitions.map(([label, unit, read]) => ({ label, unit, ...difference(read(current), read(reference)) }));
  }
  function chartRows(current, reference, mode, labels) {
    if (mode === 'damage') {
      const a = display.damageRows(current.damage, labels.damage), b = display.damageRows(reference.damage, labels.damage);
      return a.map((row, index) => ({ id: row.id, label: row.label, unit: 'DPS', ...difference(row.dps, b[index].dps) }));
    }
    let ids, read, unit;
    if (mode === 'uptime') { ids = ['rake', 'rip', 'berserk', 'clearcasting']; unit = 'pp'; read = (r, id) => r.uptime[id].mean; }
    else if (mode === 'mana') { ids = ['spirit', 'blessing', 'spring', 'jow', 'potion', 'tide', ...(current.manaGained.gear || reference.manaGained.gear ? ['gear'] : []), 'spent']; unit = 'mana/min'; read = (r, id) => (id === 'spent' ? -r.manaSpent.mean : r.manaGained[id]?.mean || 0) * 60 / r.durationStats.mean; }
    else { ids = Object.keys(labels.abilities); unit = mode === 'casts' ? 'casts/fight' : 'CPM'; read = (r, id) => r.abilityStats[id][mode === 'casts' ? 'mean' : 'cpm']; }
    const names = mode === 'mana' ? { spirit: 'Spirit', blessing: 'Blessing of Wisdom', spring: 'Mana Spring', jow: 'Judgment of Wisdom', potion: 'Mana potion', tide: 'Mana Tide', gear: 'Gear MP5', spent: 'Mana spent' } : { ...labels.abilities, clearcasting: 'Clearcasting' };
    return ids.map(id => ({ id, label: names[id], unit, ...difference(read(current, id), read(reference, id)) }));
  }
  function settingsDifferences(current, reference) {
    const a = current.setup.values, b = reference.setup.values;
    return Object.keys(a).filter(key => String(a[key]) !== String(b[key])).map(key => ({ key, current: a[key], reference: b[key] }));
  }
  return { VERSION, STORAGE_KEY, createStore, serialize, deserialize, validateResult, difference, metrics, chartRows, settingsDifferences, sameConfig };
});
