(function (root) {
  const data = root.FOREVER_DATA || require('./talents.js');
  const talents = data.trees.flatMap(tree => tree.talents.map(talent => ({ ...talent, tree: tree.id })));
  const byId = Object.fromEntries(talents.map(t => [t.id, t]));
  const defaults = { budget: 51, gates: true };
  const total = points => Object.values(points).reduce((sum, n) => sum + n, 0);
  const treeTotal = (points, tree) => talents.filter(t => t.tree === tree).reduce((sum, t) => sum + (points[t.id] || 0), 0);
  const lowerPoints = (points, talent) => talents.filter(t => t.tree === talent.tree && t.row < talent.row).reduce((sum, t) => sum + (points[t.id] || 0), 0);

  function descriptionAtRank(talent, rank) {
    if (!Number.isInteger(rank) || rank < 0 || rank > talent.max) throw new RangeError('Invalid effect rank.');
    // Unlearned talents preview their first rank, not a fictitious zero effect.
    return talent.rankDescriptions?.[Math.max(1, rank) - 1] || talent.description;
  }

  function requirements(points, talent, rules = defaults) {
    if (!rules.gates) return '';
    if (lowerPoints(points, talent) < (talent.row - 1) * 5) return `Requires ${(talent.row - 1) * 5} points in earlier ${data.trees.find(t => t.id === talent.tree).name} rows.`;
    const parent = byId[talent.prerequisite];
    if (parent && (points[parent.id] || 0) < parent.max) return `Requires ${parent.max}/${parent.max} ${parent.name}.`;
    return '';
  }

  function validate(points, rules = defaults) {
    if (!points || typeof points !== 'object' || Array.isArray(points)) return 'Invalid build.';
    if (!Number.isInteger(rules.budget) || rules.budget < 1 || rules.budget > 200 || typeof rules.gates !== 'boolean') return 'Invalid calculator rules.';
    for (const [id, rank] of Object.entries(points)) {
      if (!Object.hasOwn(byId, id) || !Number.isInteger(rank) || rank < 0 || rank > byId[id].max) return 'Invalid talent or rank.';
    }
    if (total(points) > rules.budget) return 'The build exceeds the point budget.';
    for (const talent of talents) {
      if (points[talent.id]) {
        const problem = requirements(points, talent, rules);
        if (problem) return `${talent.name}: ${problem}`;
      }
    }
    return '';
  }

  function change(points, id, delta, rules = defaults) {
    const talent = byId[id];
    if (!talent || ![-1, 1].includes(delta)) return { error: 'Invalid talent change.' };
    const rank = (points[id] || 0) + delta;
    if (rank < 0) return { error: 'No point to refund.' };
    if (rank > talent.max) return { error: `${talent.name} is at maximum rank.` };
    const next = { ...points, [id]: rank };
    if (!rank) delete next[id];
    const error = validate(next, rules);
    return error ? { error: delta < 0 ? `Refund dependent talents first. ${error}` : error } : { points: next };
  }

  // Move one point atomically: the intermediate refund need not be legal,
  // but both the original and completed allocations must be valid.
  function transfer(points, from, to, rules = defaults) {
    const invalid = validate(points, rules);
    if (invalid) return { error: invalid };
    if (!Object.hasOwn(byId, from) || !Object.hasOwn(byId, to)) return { error: 'Invalid talent transfer.' };
    if (from === to) return { error: 'Choose a different destination talent.' };
    if (!points[from]) return { error: `${byId[from].name} has no points to move.` };
    if ((points[to] || 0) === byId[to].max) return { error: `${byId[to].name} is at maximum rank.` };
    const next = { ...points, [from]: points[from] - 1, [to]: (points[to] || 0) + 1 };
    if (!next[from]) delete next[from];
    const error = validate(next, rules);
    return error ? { error } : { points: next };
  }

  function validateOrder(points, order, orderKnown, rules = defaults) {
    if (!Array.isArray(order) || typeof orderKnown !== 'boolean') return 'Invalid leveling order.';
    if (!orderKnown) return order.length ? 'Invalid unrecorded leveling order.' : '';
    if (order.length !== total(points)) return 'Leveling order must include every allocated point.';
    const orderedRanks = {};
    for (const id of order) {
      if (!Object.hasOwn(byId, id)) return 'Invalid talent in leveling order.';
      orderedRanks[id] = (orderedRanks[id] || 0) + 1;
      if (orderedRanks[id] > (points[id] || 0)) return 'Leveling order does not match the talent allocation.';
    }
    for (const [id, rank] of Object.entries(points)) {
      if ((orderedRanks[id] || 0) !== rank) return 'Leveling order does not match the talent allocation.';
    }
    const planned = {};
    if (order.length > rules.budget) return 'The leveling order exceeds the point budget.';
    for (const id of order) {
      const talent = byId[id];
      const rank = (planned[id] || 0) + 1;
      if (rank > talent.max) return `Leveling order exceeds the maximum rank of ${talent.name}.`;
      const problem = requirements(planned, talent, rules);
      if (problem) return `Leveling order is not learnable in sequence: ${problem}`;
      planned[id] = rank;
    }
    return '';
  }

  // Replace one recorded point without requiring the replacement to be learned
  // at the same moment. Keep the rest of the order intact whenever possible.
  function reinsertOrderPoint(points, order, from, to, rules = defaults) {
    const sourceIndex = order.lastIndexOf(from);
    if (sourceIndex < 0) return null;
    const remaining = [...order];
    remaining.splice(sourceIndex, 1);
    const positions = Array.from({ length: remaining.length + 1 }, (_, index) => index)
      .sort((a, b) => Math.abs(a - sourceIndex) - Math.abs(b - sourceIndex) || a - b);
    for (const index of positions) {
      const candidate = [...remaining];
      candidate.splice(index, 0, to);
      if (!validateOrder(points, candidate, true, rules)) return candidate;
    }

    // If moving only the replacement cannot restore the gates, keep the
    // requested order as a preference and postpone talents until learnable.
    const pending = [...remaining];
    pending.splice(sourceIndex, 0, to);
    const planned = {}, repaired = [];
    while (pending.length) {
      const readyIndex = pending.findIndex(id => {
        const talent = byId[id];
        return (planned[id] || 0) < talent.max && !requirements(planned, talent, rules);
      });
      if (readyIndex < 0) return null;
      const [id] = pending.splice(readyIndex, 1);
      planned[id] = (planned[id] || 0) + 1;
      repaired.push(id);
    }
    return validateOrder(points, repaired, true, rules) ? null : repaired;
  }

  function encode(points, rules = defaults, order = [], orderKnown = total(points) === 0) {
    const error = validate(points, rules);
    if (error) throw new Error(error);
    const orderError = validateOrder(points, order, orderKnown, rules);
    if (orderError) throw new Error(orderError);
    const ranks = Object.entries(points).filter(([, rank]) => rank > 0)
      .sort(([a], [b]) => a.localeCompare(b)).map(([id, rank]) => `${id}:${rank}`).join(',') || '-';
    // Name each talent and class so future display-order changes cannot move points.
    // The ordered suffix is an allocation history, not something inferred from a finished build.
    return `FF5.${data.gameClass}.${rules.budget}.${Number(rules.gates)}.${ranks}~${orderKnown ? order.join(',') || '-' : '?'}`;
  }
  function decode(code) {
    const invalid = () => new Error(`This is not a valid Forever ${data.name || 'Druid'} build code.`);
    if (typeof code !== 'string' || code.length > 10000) throw invalid();
    const ordered = /^FF5\.([a-z]+)\.(\d{1,3})\.([01])\.(-|[a-z][a-z0-9-]*:[1-5](?:,[a-z][a-z0-9-]*:[1-5])*)~(-|\?|[a-z][a-z0-9-]*(?:,[a-z][a-z0-9-]*)*)$/.exec(code.trim());
    if (ordered) {
      if (ordered[1] !== data.gameClass) throw invalid();
      const rules = { budget: Number(ordered[2]), gates: Number(ordered[3]) === 1 };
      const entries = ordered[4] === '-' ? [] : ordered[4].split(',').map(entry => entry.split(':'));
      if (new Set(entries.map(([id]) => id)).size !== entries.length) throw invalid();
      const points = Object.fromEntries(entries.map(([id, rank]) => [id, Number(rank)]));
      const error = validate(points, rules);
      if (error) throw new Error(error);
      const orderKnown = ordered[5] !== '?';
      const order = orderKnown && ordered[5] !== '-' ? ordered[5].split(',') : [];
      const orderError = validateOrder(points, order, orderKnown, rules);
      if (orderError) throw invalid();
      return { points, rules, order, orderKnown };
    }
    const current = /^FF4\.([a-z]+)\.(\d{1,3})\.([01])\.(-|[a-z][a-z0-9-]*:[1-5](?:,[a-z][a-z0-9-]*:[1-5])*)$/.exec(code.trim());
    if (current) {
      if (current[1] !== data.gameClass) throw invalid();
      const rules = { budget: Number(current[2]), gates: Number(current[3]) === 1 };
      const aliases = {
        'improved-fireball': 'accelerant',
        'elemental-precision': 'precision'
      };
      const entries = current[4] === '-' ? [] : current[4].split(',').map(entry => {
        const [id, rank] = entry.split(':');
        return [aliases[id] || id, Number(rank), id];
      });
      if (new Set(entries.map(([id]) => id)).size !== entries.length || new Set(entries.map(([, , oldId]) => oldId)).size !== entries.length) throw invalid();
      const points = {}, refunded = [];
      for (const [id, rank, oldId] of entries) {
        const talent = byId[id];
        if (!talent) { refunded.push({ name: oldId.replaceAll('-', ' '), rank }); continue; }
        points[id] = Math.min(rank, talent.max);
        if (rank > talent.max) refunded.push({ name: talent.name, rank: rank - talent.max });
      }
      let changed;
      do {
        changed = false;
        for (const talent of talents) {
          if (points[talent.id] && requirements(points, talent, rules)) {
            refunded.push({ name: talent.name, rank: points[talent.id] });
            delete points[talent.id];
            changed = true;
          }
        }
      } while (changed);
      const error = validate(points, rules);
      if (error) throw new Error(error);
      if (refunded.length) {
        const count = refunded.reduce((sum, item) => sum + item.rank, 0);
        return { points, rules, order: [], orderKnown: total(points) === 0, notice: `Talent trees changed: ${count} point${count === 1 ? '' : 's'} refunded from removed talents, reduced ranks, or unmet requirements (${refunded.map(item => item.name).join(', ')}).` };
      }
      return { points, rules, order: [], orderKnown: total(points) === 0 };
    }
    const match = /^FF([23])\.(\d{1,3})\.([01])\.([0-5]+)$/.exec(code.trim());
    if (!match) throw invalid();
    const layout = data.legacyBuilds?.[`FF${match[1]}`];
    if (!layout) throw invalid();
    const rules = { budget: Number(match[2]), gates: Number(match[3]) === 1 };
    const rulesError = validate({}, rules);
    if (rulesError) throw new Error(rulesError);
    let ranks = match[4];
    if ([...ranks].reduce((sum, rank) => sum + Number(rank), 0) > rules.budget) throw new Error('The build exceeds the point budget.');
    const refunded = [];
    const notices = [];
    if (data.gameClass === 'druid' && match[1] === '2' && ranks.length === layout.length + 1) {
      if (Number(ranks[8])) refunded.push({ name: 'Balance of Nature', rank: Number(ranks[8]) });
      ranks = ranks.slice(0, 8) + ranks.slice(9);
    }
    if (ranks.length !== layout.length || layout.some(([, max], i) => Number(ranks[i]) > max)) throw invalid();
    const oldPoints = Object.fromEntries(layout.map(([id], i) => [id, Number(ranks[i])]).filter(([, rank]) => rank));
    // Retain the already-published conversion for pre-Shifting Power Druid builds.
    if (data.gameClass === 'druid' && match[1] === '2' && oldPoints['king-of-the-jungle']) {
      const branch = (oldPoints['shredding-attacks'] || 0) + oldPoints['king-of-the-jungle'];
      oldPoints['shredding-attacks'] = Math.min(3, branch);
      oldPoints['shifting-power'] = Math.min(1, Math.max(0, branch - 3));
      oldPoints['improved-shifting-power'] = Math.min(2, Math.max(0, branch - 4));
      delete oldPoints['king-of-the-jungle'];
      notices.push('King of the Jungle points were moved into the Shifting Power branch.');
    }
    const aliases = {
      'hot-streak': 'heating-up',
      'soul-harvesting': 'soul-harvest',
      'improved-fireball': 'accelerant',
      'elemental-precision': 'precision'
    };
    const points = {};
    for (const [oldId, rank] of Object.entries(oldPoints)) {
      if (!rank) continue;
      const id = aliases[oldId] || oldId;
      if (byId[id]) points[id] = rank;
      else refunded.push({ name: oldId.replaceAll('-', ' '), rank });
    }
    // Removed talents and changed gates may invalidate dependents. Refund them
    // visibly rather than silently assigning their points to a different talent.
    let changed;
    do {
      changed = false;
      for (const talent of talents) {
        if (points[talent.id] && requirements(points, talent, rules)) {
          refunded.push({ name: talent.name, rank: points[talent.id] });
          delete points[talent.id];
          changed = true;
        }
      }
    } while (changed);
    const error = validate(points, rules);
    if (error) throw new Error(error);
    if (refunded.length) {
      const count = refunded.reduce((sum, item) => sum + item.rank, 0);
      notices.push(`Talent trees changed: ${count} point${count === 1 ? '' : 's'} refunded from removed talents or unmet requirements (${refunded.map(item => item.name).join(', ')}).`);
    }
    const orderKnown = total(points) === 0;
    return notices.length ? { points, rules, order: [], orderKnown, notice: notices.join(' ') } : { points, rules, order: [], orderKnown };
  }
  function buildName(value) {
    if (typeof value !== 'string' || !value.trim() || value.trim().length > 80) throw new Error('Use a build name of 1–80 characters.');
    return value.trim();
  }
  function readBuildLibrary(raw) {
    if (!raw) return { version: 1, gameClass: data.gameClass, builds: [] };
    const library = JSON.parse(raw);
    if (library?.version !== 1 || library.gameClass !== data.gameClass || !Array.isArray(library.builds)) throw new Error('Unsupported saved build library.');
    const names = new Set();
    const builds = library.builds.map(entry => {
      const name = buildName(entry?.name);
      if (names.has(name.toLowerCase()) || typeof entry.code !== 'string') throw new Error('Invalid saved build entry.');
      names.add(name.toLowerCase());
      decode(entry.code);
      return { name, code: entry.code };
    });
    return { version: 1, gameClass: data.gameClass, builds };
  }
  function saveNamedBuild(library, name, code, replace = false) {
    name = buildName(name);
    const decoded = decode(code);
    const entry = { name, code: encode(decoded.points, decoded.rules) };
    const index = library.builds.findIndex(item => item.name.toLowerCase() === name.toLowerCase());
    if (index >= 0 && !replace) throw new Error('A build with this name already exists.');
    const builds = library.builds.map(item => ({ ...item }));
    if (index < 0) builds.push(entry);
    else builds[index] = entry;
    return { ...library, builds };
  }
  function renameNamedBuild(library, oldName, newName) {
    newName = buildName(newName);
    if (!library.builds.some(item => item.name === oldName)) throw new Error('Saved build not found.');
    if (library.builds.some(item => item.name !== oldName && item.name.toLowerCase() === newName.toLowerCase())) throw new Error('A build with this name already exists.');
    return { ...library, builds: library.builds.map(item => ({ ...item, name: item.name === oldName ? newName : item.name })) };
  }
  function deleteNamedBuild(library, name) {
    if (!library.builds.some(item => item.name === name)) throw new Error('Saved build not found.');
    return { ...library, builds: library.builds.filter(item => item.name !== name).map(item => ({ ...item })) };
  }
  root.FOREVER_CALCULATOR = { talents, byId, defaults, total, treeTotal, descriptionAtRank, requirements, validate, validateOrder, reinsertOrderPoint, change, transfer, encode, decode, readBuildLibrary, saveNamedBuild, renameNamedBuild, deleteNamedBuild };
  if (typeof module !== 'undefined') module.exports = root.FOREVER_CALCULATOR;
})(globalThis);
