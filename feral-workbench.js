// Presentation and talent interaction. Validated setup writes are delegated to the controller.
(function (root) {
  'use strict';
  const data = typeof module === 'object' && module.exports ? require('./feral-talent-data.js') : root.FOREVER_FERAL_TALENT_DATA;
  const display = typeof module === 'object' && module.exports ? require('./feral-display.js') : root.FOREVER_FERAL_DISPLAY;
  const pretty = (value, digits = 1) => Number(value).toLocaleString(undefined, { maximumFractionDigits: digits });
  const cleanName = value => String(value || '').toLowerCase().replace(/[’']/g, '');
  function talentSummary(talents) {
    if (!Array.isArray(talents)) return null;
    return data.trees.map(tree => ({ name: tree.name, id: tree.id, talents: tree.talents.map(talent => {
      const entry = talents.find(item => item.spellId === talent.spellId || item.id === talent.exportId || cleanName(item.name) === cleanName(talent.name));
      const rank = Number.isInteger(entry?.rank) && entry.rank >= 0 && entry.rank <= talent.max ? entry.rank : 0;
      return { ...talent, rank };
    }) }));
  }
  function init(doc, win) {
    const $ = selector => doc.querySelector(selector);
    const all = selector => [...doc.querySelectorAll(selector)];
    const mainTabs = all('[data-view]');
    const subTabs = all('[data-subview]');
    const defaults = { results: 'damage', optimization: 'search' };
    const activeSub = { ...defaults };
    let active = 'results', lastResult = null;
    const talents = win.FOREVER_FERAL_TALENTS;
    let talentCallbacks = null, talentConfig = null, draft = null, appliedCode = '', talentBusy = false;
    let talentDrag = null, talentRepeat = null;
    function show(view, sub, focus = false, updateUrl = true) {
      if (view === 'results' && sub === 'model' && win.feralDisplay && !win.feralDisplay.enabled()) {
        win.feralDisplay.open(true); sub = 'damage';
      }
      if (!mainTabs.some(tab => tab.dataset.view === view)) return false;
      active = view;
      for (const tab of mainTabs) {
        const selected = tab.dataset.view === view;
        tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
        $('#' + tab.getAttribute('aria-controls')).hidden = !selected;
        if (selected && focus) tab.focus();
      }
      if (subTabs.some(tab => tab.dataset.subgroup === view && tab.dataset.subview === sub)) activeSub[view] = sub;
      for (const tab of subTabs) {
        const selected = activeSub[tab.dataset.subgroup] === tab.dataset.subview;
        tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
        $('#' + tab.getAttribute('aria-controls')).hidden = !selected;
      }
      if (updateUrl) {
        try { win.history.replaceState(null, '', '#' + view + (activeSub[view] ? '/' + activeSub[view] : '')); } catch (_) { /* file previews may restrict history */ }
      }
      return true;
    }
    function bindTabs(tabs, activate) {
      for (const tab of tabs) {
        tab.addEventListener('click', () => activate(tab, false));
        tab.addEventListener('keydown', event => {
          const visible = tabs.filter(t => !(t.dataset.subview === 'model' && win.feralDisplay && !win.feralDisplay.enabled()));
          const i = visible.indexOf(tab);
          const next = event.key === 'ArrowRight' ? (i + 1) % visible.length : event.key === 'ArrowLeft' ? (i + visible.length - 1) % visible.length : event.key === 'Home' ? 0 : event.key === 'End' ? visible.length - 1 : -1;
          if (next < 0) return;
          event.preventDefault(); activate(visible[next], true);
        });
      }
    }
    bindTabs(mainTabs, (tab, focus) => show(tab.dataset.view, null, focus));
    for (const group of Object.keys(defaults)) bindTabs(subTabs.filter(tab => tab.dataset.subgroup === group), (tab, focus) => {
      show(group, tab.dataset.subview); if (focus) tab.focus();
    });
    for (const button of all('[data-go]')) button.addEventListener('click', () => show(button.dataset.go, button.dataset.goSubview, true));
    function fromHash() {
      const [view, sub] = (win.location.hash || '').slice(1).split('/');
      if (show(view, sub, false, false)) return;
      // Existing links to mechanics notes still reveal their containing tab.
      const target = win.location.hash ? doc.getElementById(win.location.hash.slice(1)) : null;
      if (target?.closest('#pane-model')) { show('results', 'model', false, false); if (!win.feralDisplay || win.feralDisplay.enabled()) target.scrollIntoView({ block: 'center' }); }
    }
    win.addEventListener('hashchange', fromHash);
    show('results', 'damage', false, false); fromHash();
    // Enter in a numeric field must not navigate/reload the page and discard the setup.
    $('#config').addEventListener('submit', event => event.preventDefault());
    // A repeat transfer is an explicit, temporary editing mode, not a new
    // meaning for every later talent click.
    win.addEventListener('pointerdown', event => {
      if (talentRepeat && event.target?.closest?.('[data-talent-id]')?.dataset.talentId !== talentRepeat.to) clearTalentTransfer();
    });
    $('#config').addEventListener('change', () => clearTalentTransfer());
    win.addEventListener('keydown', event => {
      if (event.key === 'Escape' && (talentDrag || talentRepeat)) {
        clearTalentTransfer(); $('#talent-edit-status').textContent = 'Point transfer ended.';
      }
    });
    function resultState() {
      const stale = !$('#results-stale').hidden;
      const running = $('#status').textContent.startsWith('Running');
      $('#side-result-state').textContent = running ? 'Simulation in progress…' : stale ? 'Settings changed · rerun needed' : lastResult ? `${pretty(lastResult.fights, 0)} fights · seed ${lastResult.config.seed}` : 'Ready to simulate';
      $('.sidebar-result').classList.toggle('is-stale', stale);
    }
    if (win.MutationObserver) {
      const observer = new win.MutationObserver(resultState);
      observer.observe($('#results-stale'), { attributes: true, attributeFilter: ['hidden'] });
      observer.observe($('#status'), { childList: true, characterData: true, subtree: true });
    }
    function characterStats(c) {
      $('#side-ap').textContent = c.attackPower == null ? 'Not supplied' : pretty(c.attackPower);
      $('#side-crit').textContent = pretty(c.crit, 2) + '%';
      $('#side-mana').textContent = pretty(c.startingMana, 0);
      $('#character-origin').textContent = c.characterMode === 'gear' ? 'Gear-calculated Cat + selected buffs' : c.statMode === 'unbuffed' ? 'Unbuffed Cat + selected buffs' : c.statMode === 'final' ? 'Imported final totals' : 'Manual character totals';
    }
    function characterReference(ref) {
      $('#character-name').textContent = ref.character?.name || ref.name || 'Unnamed Druid';
      const trees = talentSummary(ref.talents);
      $('#talent-reference').replaceChildren();
      $('#talent-spread').textContent = trees ? trees.map(tree => tree.talents.reduce((sum, talent) => sum + talent.rank, 0)).join(' / ') : 'Not supplied';
      $('#talent-reference-note').textContent = trees ? 'Last imported allocation · Balance / Feral / Restoration. This reference does not change when the modeled overrides below are edited. Select a talent to read its tooltip; unselected talents are dimmed.' : 'This export did not supply a talent list. Existing modeled talent settings were preserved; no complete build can be inferred.';
      renderTalentGrid(trees, false);
      if (draft) { draft = talents.decode(appliedCode); renderDraft(); $('#talent-reference-note').textContent = ''; }
    }
    function renderTalentGrid(trees, editable) {
      $('#talent-reference').replaceChildren();
      for (const tree of trees || []) {
        const section = doc.createElement('section');
        const heading = doc.createElement('h3'); heading.textContent = `${tree.name} · ${tree.talents.reduce((sum, item) => sum + item.rank, 0)}`; section.appendChild(heading);
        const grid = doc.createElement('div'); grid.className = 'talent-tree';
        for (const talent of tree.talents) {
          const cell = doc.createElement('button'); cell.type = 'button'; cell.className = 'talent-node' + (talent.rank ? ' allocated' : '');
          cell.dataset.talentId = talent.id;
          cell.style.gridRow = String(talent.row); cell.style.gridColumn = String(talent.col);
          cell.title = `${talent.name} ${talent.rank}/${talent.max}\n${talent.descriptions[Math.max(0, talent.rank - 1)]}`;
          cell.disabled = editable && talentBusy;
          cell.draggable = editable && !talentBusy && talent.rank > 0;
          if (editable) cell.setAttribute('aria-keyshortcuts', 'M Escape');
          cell.setAttribute('aria-label', cell.title + (editable ? ' · add point' : ' · imported reference'));
          const icon = doc.createElement('img'); icon.alt = ''; icon.src = win.location.protocol === 'file:' ? `assets/talent-icons/druid/${talent.sourceIcon}.jpg` : talent.icon;
          icon.draggable = false;
          const rank = doc.createElement('span'); rank.textContent = `${talent.rank}/${talent.max}`;
          cell.appendChild(icon); cell.appendChild(rank);
          const describe = () => { const currentRank = editable ? (draft[talent.id] || 0) : talent.rank; $('#talent-reference-note').textContent = `${talent.name} · ${editable ? 'selected' : 'imported'} ${currentRank}/${talent.max}. ${talent.descriptions[Math.max(0, currentRank - 1)]} ${currentRank ? '' : '(Rank 1 description.) '} ${editable && win.feralDisplay?.enabled() ? (talents.COVERAGE[talent.id] || 'No modeled effect in this single-target Cat rotation. Counts toward tree prerequisites and the point budget.') : editable ? '' : 'Imported reference.'}`; };
          cell.addEventListener('click', () => {
            if (editable) {
              if (talentRepeat?.to === talent.id && talentRepeat.code === appliedCode) moveTalentPoint(talentRepeat.from, talent.id);
              else { clearTalentTransfer(); editTalent(talent.id, 1); }
            }
            describe();
          });
          if (editable) {
            cell.addEventListener('contextmenu', event => { event.preventDefault(); clearTalentTransfer(); editTalent(talent.id, -1); describe(); });
            cell.addEventListener('keydown', event => {
              if (event.key.toLowerCase() === 'm') {
                event.preventDefault();
                if (talentDrag) finishTalentTransfer(talent.id);
                else beginTalentTransfer(talent.id);
              } else if (['-', 'Subtract', '+', '='].includes(event.key)) {
                event.preventDefault(); clearTalentTransfer(); editTalent(talent.id, event.key === '-' || event.key === 'Subtract' ? -1 : 1); describe();
              }
            });
            cell.addEventListener('dragstart', event => {
              if (!beginTalentTransfer(talent.id)) { event.preventDefault(); return; }
              if (event.dataTransfer) { event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', talent.id); }
            });
            cell.addEventListener('dragover', event => {
              if (!talentDrag || talentBusy) return;
              event.preventDefault();
              let valid = false;
              try { proposedTalentTransfer(talentDrag.from, talent.id, talentDrag.code); valid = true; }
              catch (error) { $('#talent-edit-status').textContent = error.message; }
              cell.classList.toggle('transfer-target', valid); cell.classList.toggle('transfer-invalid', !valid);
              if (event.dataTransfer) event.dataTransfer.dropEffect = valid ? 'move' : 'none';
              if (valid) $('#talent-edit-status').textContent = `Move 1 point to ${talent.name}.`;
            });
            cell.addEventListener('dragleave', () => { cell.classList.toggle('transfer-target', false); cell.classList.toggle('transfer-invalid', false); });
            cell.addEventListener('drop', event => { if (talentDrag) { event.preventDefault(); finishTalentTransfer(talent.id); } });
            cell.addEventListener('dragend', () => {
              const cancelled = Boolean(talentDrag); clearTalentTransfer(false);
              if (cancelled) $('#talent-edit-status').textContent = 'No points moved.';
            });
          }
          grid.appendChild(cell);
        }
        section.appendChild(grid); $('#talent-reference').appendChild(section);
      }
    }
    function clearTalentTransfer(clearRepeat = true) {
      talentDrag = null;
      if (clearRepeat && talentRepeat) $('#talent-edit-status').textContent = 'Point transfer ended.';
      if (clearRepeat) talentRepeat = null;
      all('[data-talent-id]').forEach(node => {
        for (const cls of ['transfer-source', 'transfer-target', 'transfer-invalid']) node.classList.toggle(cls, false);
        node.classList.toggle('transfer-repeat', node.dataset.talentId === talentRepeat?.to);
      });
    }
    function beginTalentTransfer(from) {
      if (talentBusy || !draft || talentConfig?.talentMode !== 'build' || !draft[from]) return false;
      clearTalentTransfer(); talentDrag = { from, code: appliedCode };
      $(`[data-talent-id="${from}"]`)?.classList.toggle('transfer-source', true);
      $('#talent-edit-status').textContent = `Move 1 point from ${talents.byId[from].name}. Drop on a talent, or focus it and press M. Escape cancels.`;
      return true;
    }
    function proposedTalentTransfer(from, to, code = appliedCode) {
      if (code !== appliedCode) throw new Error('Build changed; start the point transfer again.');
      const next = talents.transfer(draft, from, to);
      // Imported-stat restrictions apply to drag previews and drops too.
      talents.apply({ ...talentConfig, talentBuild: talents.encode(next) });
      return next;
    }
    function finishTalentTransfer(to) {
      const moving = talentDrag; clearTalentTransfer();
      if (moving) moveTalentPoint(moving.from, to, moving.code);
    }
    function moveTalentPoint(from, to, code = appliedCode) {
      if (talentBusy || !draft || talentConfig?.talentMode !== 'build') return;
      try {
        const next = proposedTalentTransfer(from, to, code);
        applyBuild(talents.encode(next));
        talentRepeat = { from, to, code: appliedCode };
        const target = $(`[data-talent-id="${to}"]`); target?.classList.toggle('transfer-repeat', true); target?.focus();
        $('#talent-edit-status').textContent = `Moved 1 point from ${talents.byId[from].name} to ${talents.byId[to].name}. Tap ${talents.byId[to].name} to move another; Escape ends transfer.`;
      } catch (error) { $('#talent-edit-status').textContent = error.message; }
    }
    function editTalent(id, delta) {
      if (talentBusy || !draft || talentConfig?.talentMode !== 'build') return;
      try {
        const next = talents.change(draft, id, delta);
        applyBuild(talents.encode(next));
        $(`[data-talent-id="${id}"]`)?.focus();
      } catch (error) { $('#talent-edit-status').textContent = error.message; }
    }
    function applyBuild(code) {
      if (talentBusy || talentConfig?.talentMode !== 'build') return;
      const next = talents.decode(code), normalized = talents.encode(next);
      clearTalentTransfer();
      talentCallbacks.apply(normalized); // Full baseline validation before changing the displayed allocation.
      draft = next; appliedCode = normalized; renderDraft();
      $('#talent-edit-status').textContent = 'Updated · simulate when ready.';
      talentCallbacks?.changed?.();
    }
    function renderDraft() {
      if (!draft) return;
      const trees = data.trees.map(tree => ({ ...tree, talents: tree.talents.map(t => ({ ...t, rank: draft[t.id] || 0 })) }));
      $('#talent-spread').textContent = trees.map(tree => tree.talents.reduce((sum, t) => sum + t.rank, 0)).join(' / ') + ` · ${51 - talents.total(draft)} unspent`;
      $('#talent-code').value = talents.encode(draft);
      renderTalentGrid(trees, true);
      setTalentBusy(talentBusy);
    }
    function setTalentBusy(busy) {
      talentBusy = busy;
      if (busy) clearTalentTransfer();
      all('[data-talent-id]').forEach(node => {
        node.disabled = busy || talentConfig?.talentMode !== 'build';
        node.draggable = !node.disabled && Boolean(draft?.[node.dataset.talentId]);
      });
      for (const id of ['talent-clear', 'talent-starter', 'talent-load-code', 'talent-code']) $('#' + id).disabled = busy || talentConfig?.talentMode !== 'build';
    }
    function syncTalents(c) {
      if (!talents) return;
      talentConfig = c;
      $('#talent-overrides').toggleAttribute('data-detail', c.talentMode === 'build');
      $('#talent-mode-note').hidden = false;
      $('#talent-mode-note').textContent = c.talentMode !== 'build' ? 'Legacy overrides: import a complete talent list or a talent-free Cat export to enable the build editor.' : c.talentStats === 'excluded' ? 'Talent-free baseline · the selected build controls stats, ability costs, Shifting Power cooldown, Berserk/Shifting Power access, resource talents and damage modifiers. Only effects used by the modeled Cat rotation are active.' : 'Talented baseline · cost, resource and damage talents are editable. Stat-affecting ranks are locked to the exported allocation to avoid double counting. Import talent-free Cat stats for unrestricted build changes.';
      for (const id of ['talent-clear', 'talent-starter', 'talent-load-code']) $('#' + id).disabled = c.talentMode !== 'build';
      if (c.talentMode !== 'build') { clearTalentTransfer(); draft = null; appliedCode = ''; setTalentBusy(talentBusy); return; }
      const code = talents.encode(talents.decode(c.talentBuild));
      if (code !== appliedCode || !draft) { clearTalentTransfer(); appliedCode = code; draft = talents.decode(code); renderDraft(); $('#talent-reference-note').textContent = ''; $('#talent-edit-status').textContent = 'Changes apply immediately · simulate when ready.'; }
      $('#talent-mode-note').hidden = !win.feralDisplay?.enabled() && c.talentStats === 'excluded';
      if (!win.feralDisplay?.enabled() && c.talentStats !== 'excluded') $('#talent-mode-note').textContent = 'Imported talent stats · stat-affecting ranks locked.';
      setTalentBusy(talentBusy);
      const e = c.talentEffects;
      $('#talent-effects').textContent = `Applied: Rake ${e.rakeCost} energy · Shred ${e.shredCost} energy · Shifting Power ${e.shiftingKnown ? `${pretty(684 * (1 - c.naturalShapeshifter / 100))} mana / ${pretty(e.shiftingCooldown - (c.howlingIdol ? 1 : 0) - (c.tier1Feral5pc ? 1.1 : 0))}s CD` : 'not learned'} · Berserk ${e.berserkKnown ? 'learned' : 'not learned'} · Naturalist +${c.naturalist}% all damage.`;
    }
    function attachTalents(callbacks) {
      talentCallbacks = callbacks;
      const load = code => { try { applyBuild(code); } catch (error) { $('#talent-edit-status').textContent = error.message; } };
      $('#talent-code').addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); load($('#talent-code').value); } });
      $('#talent-clear').addEventListener('click', () => load('FF4.druid.51.1.-'));
      $('#talent-starter').addEventListener('click', () => load(talents.DEFAULT_BUILD));
      $('#talent-load-code').addEventListener('click', () => load($('#talent-code').value));
      if (talentConfig) syncTalents(talentConfig);
    }
    function result(r) {
      lastResult = r;
      const d = r.damage;
      $('#side-dps').textContent = d ? pretty(d.dps, 2) : '—';
      $('#damage-empty').hidden = Boolean(d);
      const metrics = [
        ['Attack CPM', pretty(['rake', 'shred', 'rip', 'bite'].reduce((sum, id) => sum + r.abilityStats[id].cpm, 0), 2), 'Rake + Shred + Rip + Bite'],
        ['Finisher CPM', pretty(r.finisherCasts.cpm, 2), `Rip ${pretty(r.abilityStats.rip.cpm, 2)} · Bite ${pretty(r.abilityStats.bite.cpm, 2)}`],
        ['OOM fights', pretty(r.oom.percent, 2) + '%', r.oom.count ? `${pretty(r.oom.mean)}s mean among OOM fights` : 'No mana-starved iterations'],
        ['Ending mana', pretty(r.endingMana.mean, 0), 'Mean remaining per fight']
      ];
      $('#overview-metrics').replaceChildren(...metrics.map(([name, value, description]) => {
        const card = doc.createElement('article'); card.className = 'summary-card';
        for (const [tag, text] of [['span', name], ['b', value], ['small', description]]) { const item = doc.createElement(tag); item.textContent = text; card.appendChild(item); }
        return card;
      }));
      $('#damage-chart').replaceChildren();
      const legend = $('#damage-legend'); legend.replaceChildren(); legend.hidden = !d;
      if (d) {
        $('#damage-total').textContent = pretty(d.meanTotal, 0);
        $('#damage-interval').textContent = d.se == null ? 'At least 2 fights for uncertainty' : `95% sampling interval: ${pretty(Math.max(0, d.dps - 1.96 * d.se), 2)}–${pretty(d.dps + 1.96 * d.se, 2)} DPS`;
        const labels = win.FOREVER_FERAL_DAMAGE.LABELS;
        const rows = display.damageRows(d, labels).sort((a, b) => b.dps - a.dps);
        const max = Math.max(1, ...rows.map(row => row.dps));
        for (const row of rows) {
          const bar = doc.createElement('div'); bar.className = 'damage-bar'; bar.dataset.source = row.id;
          const label = doc.createElement('span'); label.textContent = row.label;
          const track = doc.createElement('div'); track.className = 'damage-track';
          const breakdown = row.segments.map(segment => `${segment.label}: ${pretty(segment.dps, 2)} DPS`).join(' · ');
          bar.setAttribute('aria-label', `${row.label}: ${pretty(row.dps, 2)} DPS · ${breakdown}`);
          for (const segment of row.segments) {
            const fill = doc.createElement('i'); fill.dataset.source = segment.id;
            fill.style.width = `${Math.max(0, Math.min(100, segment.dps / max * 100))}%`;
            fill.title = `${segment.label}: ${pretty(segment.dps, 2)} DPS`;
            track.appendChild(fill);
          }
          const value = doc.createElement('b'); value.textContent = `${pretty(row.dps, 2)} DPS`;
          const share = doc.createElement('small'); share.textContent = `${pretty(row.share)}%`;
          bar.appendChild(label); bar.appendChild(track); bar.appendChild(value); bar.appendChild(share);
          $('#damage-chart').appendChild(bar);
        }
        // Keep the key outside the bar rows so every row has the same spacing.
        const keyLabels = { auto: 'Normal swings', windfury: 'Windfury', rakeInitial: 'Initial hit', rakeTick: 'Bleed ticks' };
        for (const id of ['auto', 'rake']) {
          const row = rows.find(row => row.id === id), group = doc.createElement('div');
          const name = doc.createElement('span'); name.textContent = `${row.label}:`; group.appendChild(name);
          for (const segment of row.segments) {
            const key = doc.createElement('span'); key.dataset.source = segment.id;
            key.textContent = keyLabels[segment.id]; group.appendChild(key);
          }
          legend.appendChild(group);
        }
      }
      resultState();
    }
    function getTalentDraft() { return null; } // Legacy comparisons may contain recoverable drafts; new edits are live.
    function restoreTalentDraft(saved) {
      if (!saved || !draft) return;
      if (talents.encode(talents.decode(saved.build)) !== appliedCode) {
        talentCallbacks?.recover?.(saved.build);
        $('#talent-edit-status').textContent = 'Previous unapplied points recovered in saved talent builds.';
      }
    }
    return { show, characterStats, characterReference, result, syncTalents, attachTalents, setTalentBusy, getTalentDraft, restoreTalentDraft, applyBuild, currentView: () => active };
  }
  const api = { init, talentSummary };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FOREVER_FERAL_WORKBENCH = api;
})(typeof globalThis === 'object' ? globalThis : this);
