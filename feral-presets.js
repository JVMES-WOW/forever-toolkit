// Named, browser-local equipment, talent and rotation presets. Never stores results.
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FOREVER_FERAL_PRESETS = api;
})(globalThis, function() {
  'use strict';
  const KEY = 'forever-feral.presets.v1', VERSION = 1;
  const clone = value => JSON.parse(JSON.stringify(value));
  // Only controls on the Rotation tab. Character, encounter, consumables,
  // talents, search options and display preferences are deliberately excluded.
  const ROTATION_ENUMS = { rakeMode: ['maintain', 'ripDown'], shiftingMode: ['automatic', 'manual'], teaPolicy: ['berserk', 'any', 'disabled'] };
  const ROTATION_RANGES = { ripMinCP: [1, 5], biteMinCP: [1, 5], shiftingThreshold: [0, 100], biteMaxEnergy: [35, 100], biteRipOutside: [0, 30], biteRipBerserk: [0, 30] };
  const ROTATION_BOOLEANS = ['berserkGCD', 'omenOfClarity', 'startingClearcasting', 'faerieFire'];
  const ROTATION_KEYS = [...Object.keys(ROTATION_ENUMS), ...Object.keys(ROTATION_RANGES), ...ROTATION_BOOLEANS];
  function validateRotation(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value) || Object.keys(value).length !== ROTATION_KEYS.length
      || Object.keys(value).some(key => !ROTATION_KEYS.includes(key))) throw new Error('Invalid or incomplete rotation preset.');
    const result = {};
    for (const key of ROTATION_KEYS) {
      const input = value[key], range = ROTATION_RANGES[key];
      if (range) {
        const number = (typeof input === 'number' || typeof input === 'string' && input.trim() !== '') ? Number(input) : NaN;
        if (!Number.isFinite(number) || number < range[0] || number > range[1]
          || (['ripMinCP', 'biteMinCP'].includes(key) && !Number.isInteger(number))) throw new Error(`Invalid rotation setting: ${key} (${range[0]}–${range[1]}).`);
        result[key] = number;
      } else {
        if (ROTATION_ENUMS[key] ? !ROTATION_ENUMS[key].includes(input) : typeof input !== 'boolean') throw new Error(`Invalid rotation setting: ${key}.`);
        result[key] = input;
      }
    }
    return result;
  }
  const captureRotation = input => validateRotation(Object.fromEntries(ROTATION_KEYS.map(key => [key, input[key]])));
  function name(value) {
    const result = String(value || '').trim();
    if (!result || result.length > 80) throw new Error('Enter a name of 1–80 characters.');
    return result;
  }
  function create(storage, validators) {
    let entries = [], nextId = 1, warning = '', protectedStorage = false;
    function payload(kind, value) {
      if (!['gear', 'talents', 'rotation'].includes(kind)) throw new Error('Unknown preset type.');
      return clone(kind === 'rotation' ? validateRotation(value) : validators[kind](clone(value)));
    }
    try {
      const text = storage?.getItem(KEY);
      if (text) {
        if (text.length > 1_000_000) throw new Error('Preset library is too large.');
        const parsed = JSON.parse(text), ids = new Set(), names = new Set();
        if (parsed.version !== VERSION || !Array.isArray(parsed.entries) || parsed.entries.length > 500) throw new Error('Unsupported preset library.');
        entries = parsed.entries.map(entry => {
          if (!Number.isSafeInteger(entry.id) || entry.id < 1 || ids.has(entry.id)) throw new Error('Invalid preset identity.');
          const label = name(entry.name), key = entry.kind + ':' + label.toLowerCase();
          if (names.has(key)) throw new Error('Duplicate preset name.');
          ids.add(entry.id); names.add(key);
          return { id: entry.id, kind: entry.kind, name: label, value: payload(entry.kind, entry.value) };
        });
        nextId = Math.max(0, ...entries.map(e => e.id)) + 1;
      }
    } catch (_) { entries = []; protectedStorage = true; warning = 'Saved presets could not be read. Existing browser data was preserved; this library is tab-only.'; }
    function persist() {
      if (protectedStorage) return;
      try {
        if (!storage) throw new Error('No storage');
        storage.setItem(KEY, JSON.stringify({ version: VERSION, entries })); warning = '';
      } catch (_) { warning = 'Not saved to browser · available in this tab only.'; }
    }
    const find = id => { const entry = entries.find(e => e.id === Number(id)); if (!entry) throw new Error('Preset no longer exists.'); return entry; };
    const duplicate = (kind, label, except) => entries.find(e => e.kind === kind && e.id !== except && e.name.toLowerCase() === label.toLowerCase());
    return {
      list: kind => clone(entries.filter(e => e.kind === kind).sort((a, b) => a.name.localeCompare(b.name))),
      get: id => clone(find(id)), warning: () => warning,
      duplicate: (kind, label, except) => { const entry = duplicate(kind, name(label), except); return entry ? clone(entry) : null; },
      save(kind, label, value, overwriteId = null) {
        label = name(label); const normalized = payload(kind, value), existing = duplicate(kind, label);
        if (existing && existing.id !== overwriteId) throw new Error('A preset with this name exists. Confirm overwrite.');
        if (overwriteId != null && (!existing || existing.id !== overwriteId)) throw new Error('Preset changed; choose it again.');
        if (!existing && entries.length >= 500) throw new Error('Preset limit reached (500).');
        const entry = { id: existing?.id || nextId++, kind, name: label, value: normalized };
        entries = existing ? entries.map(e => e.id === entry.id ? entry : e) : [...entries, entry]; persist(); return clone(entry);
      },
      rename(id, label, overwriteId = null) {
        const entry = find(id); label = name(label); const existing = duplicate(entry.kind, label, entry.id);
        if (existing && existing.id !== overwriteId) throw new Error('A preset with this name exists. Confirm overwrite.');
        if (overwriteId != null && (!existing || existing.id !== overwriteId)) throw new Error('Preset changed; choose it again.');
        entries = entries.filter(e => e.id !== existing?.id).map(e => e.id === entry.id ? { ...entry, name: label } : e); persist(); return clone(find(id));
      },
      remove(id) { find(id); entries = entries.filter(e => e.id !== Number(id)); persist(); },
      recover(code) {
        const value = payload('talents', code), existing = entries.find(e => e.kind === 'talents' && e.value === value);
        if (existing) return clone(existing);
        let label = 'Recovered talent build', n = 2;
        while (duplicate('talents', label)) label = `Recovered talent build ${n++}`;
        return this.save('talents', label, value);
      }
    };
  }
  return { KEY, VERSION, create, name, ROTATION_KEYS, validateRotation, captureRotation };
});
