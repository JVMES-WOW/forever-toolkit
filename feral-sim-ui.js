(() => {
  'use strict';
  const sim = window.FOREVER_FERAL_SIM;
  const optimizer = window.FOREVER_FERAL_OPTIMIZER;
  const policies = sim.rotation;
  window.FOREVER_FERAL_BEARWEAVE_UI?.install(document);
  let bearView = null;
  const rotationView = window.FOREVER_FERAL_ROTATION_UI?.mount(document, policies, optimizer);
  const tradeoffs = window.FOREVER_FERAL_TRADEOFFS;
  const importer = window.FOREVER_FERAL_IMPORT;
  const damage = window.FOREVER_FERAL_DAMAGE;
  const buffs = window.FOREVER_FERAL_BUFFS;
  const talents = window.FOREVER_FERAL_TALENTS;
  const gear = window.FOREVER_FERAL_GEAR;
  let gearView = null;
  const weights = window.FOREVER_FERAL_WEIGHTS;
  let weightsView = null, weighing = false;
  let presetStore = null, presetView = null;
  window.feralDisplay = window.FOREVER_FERAL_DISPLAY?.init(document, window);
  const workbench = window.FOREVER_FERAL_WORKBENCH?.init(document, window);
  const comparison = window.FOREVER_FERAL_COMPARISON;
  let savedRuns = comparison?.createStore(), comparisonView = null, storageMessage = '';
  let characterReference = null;
  const $ = selector => document.querySelector(selector);
  const number = value => Number(value).toLocaleString(undefined, { maximumFractionDigits: 1 });
  const fixed = value => value == null ? '—' : Number(value).toFixed(2);
  const castNames = new Set([...Object.values(sim.LABELS), ...Object.values(sim.forms.LABELS), 'Queue Maul']);
  const ownActionNames = new Set([...castNames, 'Major Mana Potion', 'Mighty Rage Potion', 'Thistle Tea', 'Elune’s Light', 'Read Ley Line']);
  const autoNames = new Set(['Autoattack', 'Windfury attack', 'Bear auto', 'Bear Windfury', 'Caster auto', 'Caster Windfury']);
  let logFight = null;
  let lastResult = null;
  let running = false, optimizing = false, optimizationJob = null, optimizationTicket = 0;
  let optimizationResult = null, optimizationSnapshot = null, optimizationApplied = false;
  let optimizationObjectiveSnapshot = null;
  let lastOptimizationSeed = null;
  let exploring = false, tradeJob = null, tradeTicket = 0, tradeResult = null, tradeSnapshot = null;
  let tradeSelected = null, tradeValidation = null, tradeApplied = false, lastTradeSeed = null;
  let importPreview = null, importSnapshot = null, importText = null;
  let comparing = false, potionJob = null, potionTicket = 0, potionResult = null, potionSnapshot = null;
  let potionSelected = null, potionApplied = false, nextPotionIteration = 100001, lastPotionSeed = null;
  let defaultSetup = null, pendingReset = null;

  const namedInputs = () => [...$('#config').querySelectorAll('[name]')];
  function captureSetup() {
    return { values: Object.fromEntries(namedInputs().map(input => [input.name, input.type === 'checkbox' ? input.checked : input.value])),
      freshSeed: $('#fresh-seed').checked, character: characterReference, talentDraft: workbench?.getTalentDraft?.() || null,
      ...(weightsView ? { dpsWeights: weightsView.capture() } : {}) };
  }
  function captureComparisonDraft() {
    const setup = captureSetup(), legacy = savedRuns?.get().current?.draft?.talentDraft;
    // Keep the original recovery copy until its new preset is durably saved.
    if (legacy && presetStore?.warning()) setup.talentDraft = legacy;
    return setup;
  }
  function completedRunDirty() {
    try {
      const current = config();
      return Boolean(lastResult && (JSON.stringify(current) !== JSON.stringify(sim.normalize(lastResult.config))
        || lastResult.rotationRevision !== policies.REVISION
        || lastResult.mechanicsRevision !== sim.MECHANICS_REVISION
        || (lastResult.config.windfury && lastResult.windfuryModel !== sim.WINDFURY_MODEL)
        || (current.gearIdol && lastResult.idolModel !== sim.IDOL_MODEL)
        || (current.characterMode === 'gear' && lastResult.config.gearStatModel !== gear.STAT_MODEL)
        || (lastResult.damage && current.gearPawDamage > 0 && lastResult.damage.provenance?.pawEnchants?.model !== 'flat-paw-v1')));
    }
    catch (_) { return true; }
  }
  function persistComparison() {
    if (!savedRuns?.get().reference) return;
    try { window.localStorage.setItem(comparison.STORAGE_KEY, comparison.serialize(savedRuns.get())); storageMessage = ''; }
    catch (_) { storageMessage = 'Browser storage is unavailable or full. This pair is kept for this tab only; it will not survive reload.'; }
  }
  function updateComparison(keepDraft = true) {
    if (!savedRuns || !comparisonView) return;
    if (keepDraft && savedRuns.get().current) { savedRuns.draft(captureComparisonDraft()); persistComparison(); }
    comparisonView.render(savedRuns.get(), { busy: running || optimizing || exploring || comparing || weighing, dirty: completedRunDirty(), storageMessage });
  }
  function clearReplayForRestore() {
    logFight = null; $('#combat-log').textContent = ''; $('#debug-seed').textContent = ''; $('#log-oom').textContent = '';
    $('#log-count').textContent = 'Settings restored. Replay an iteration to inspect this setup.';
  }
  function invalidateSearches() {
    bearView?.invalidate();
    $('#rotation-export').disabled = true;
    optimizationResult = null; optimizationSnapshot = null; optimizationObjectiveSnapshot = null; optimizationApplied = false;
    tradeResult = null; tradeSnapshot = null; tradeValidation = null; tradeSelected = null; tradeApplied = false;
    potionResult = null; potionSnapshot = null; potionSelected = null; potionApplied = false;
    $('#optimizer-status').textContent = 'Saved setup restored. Optimize again before applying search results.';
    $('#trade-status').textContent = 'Saved setup restored. Explore again before validating or applying.';
    $('#potion-status').textContent = 'Saved setup restored. Compare potion strategies again.';
    renderTradeValidation();
  }
  function restoreSetup(setup) {
    if (weights && setup.dpsWeights) weights.validate(setup.dpsWeights);
    // Resolve every field before any writes, including disabled controls and hidden baselines.
    const changes = Object.entries(setup.values).map(([key, value]) => {
      const input = namedInputs().find(input => input.name === key);
      if (!input) throw new Error(`Cannot restore setting: ${key}`);
      if (input.type === 'checkbox' && typeof value !== 'boolean') throw new Error(`Invalid saved checkbox: ${key}`);
      return { input, value };
    });
    for (const { input, value } of changes) {
      if (input.type === 'checkbox') input.checked = value; else input.value = String(value);
    }
    $('#fresh-seed').checked = setup.freshSeed;
    characterReference = setup.character || null;
    weightsView?.restore(setup.dpsWeights || null);
    updateSeedControls(); updateShiftingControls(); updatePotionControls(); updateStartingClearcastingControl(); updateBuffControls();
    workbench?.characterReference(characterReference || {});
    if (setup.talentDraft && setup.talentDraft.build !== setup.values.talentBuild) {
      presetStore?.recover(setup.talentDraft.build); presetView?.sync();
    }
    $('#import-applied-panel').hidden = !characterReference;
    $('#import-applied-title').textContent = characterReference ? `Restored character: ${characterReference.character?.name || characterReference.name || 'Unnamed Druid'}` : '';
    $('#import-applied-reference').textContent = characterReference ? JSON.stringify(characterReference, null, 2) : '';
    $('#import-json').value = ''; clearImportPreview();
    $('#import-status').textContent = 'Saved setup restored. Preview a new export before applying it.';
    invalidateSearches(); clearReplayForRestore();
  }
  function savedAction(action, slot, label) {
    if (!savedRuns || running || optimizing || exploring || comparing || weighing) return;
    try {
      const state = savedRuns.get();
      if (action === 'save') {
        if (!state.current || state.reference) return;
        savedRuns.pin(); // Always pin the completed run, never the edited form.
      } else if (action === 'swap') {
        if (!state.current || !state.reference) return;
        const draft = captureComparisonDraft();
        restoreSetup(state.reference.draft);
        savedRuns.swap(draft);
        render(savedRuns.get().current.result);
        $('#status').textContent = `Restored ${savedRuns.get().current.label}. No new simulation; saved seed ${lastResult.config.seed}.`;
      } else if (action === 'restore') {
        if (!state.current) return;
        restoreSetup(state.current.setup);
        render(state.current.result);
        $('#status').textContent = `Restored completed settings for ${state.current.label}. No new simulation.`;
      } else if (action === 'clear') {
        savedRuns.clear();
        try { window.localStorage.removeItem(comparison.STORAGE_KEY); storageMessage = ''; }
        catch (_) { storageMessage = 'Reference cleared in this tab, but browser storage could not be updated.'; }
      } else if (action === 'rename') savedRuns.rename(slot, label);
      $('#results-stale').hidden = !completedRunDirty();
      updateTradeButtons(); updateObjectiveControls(); updateComparison();
    } catch (error) { storageMessage = `Could not restore saved setup: ${error.message}`; updateComparison(false); }
  }
  function restoreSavedComparison() {
    if (!savedRuns) return false;
    const initial = captureSetup(); let applying = false;
    try {
      const text = window.localStorage.getItem(comparison.STORAGE_KEY);
      if (!text) return false;
      const restored = comparison.deserialize(text, sim.normalize, namedInputs().map(input => input.name));
      if (talents) for (const entry of [restored.current, restored.reference]) for (const setup of [entry.setup, entry.draft]) if (setup.talentDraft) {
        talents.decode(setup.talentDraft.build);
        if (setup.talentDraft.build !== setup.values.talentBuild) presetStore?.recover(setup.talentDraft.build);
      }
      applying = true;
      restoreSetup(restored.current.draft);
      savedRuns = comparison.createStore(restored);
      render(restored.current.result);
      $('#results-stale').hidden = !completedRunDirty();
      $('#status').textContent = `Restored saved comparison · ${restored.current.label} · no simulation was run.`;
      updateTradeButtons(); updateObjectiveControls(); updateComparison(false);
      return true;
    } catch (error) {
      if (applying) { savedRuns = comparison.createStore(); restoreSetup(initial); }
      storageMessage = `Saved comparison could not be restored (${error.message}). Starting defaults; stored data was not overwritten.`;
      return false;
    }
  }

  function rawConfig() {
    const values = Object.fromEntries(namedInputs().map(input => [input.name, input.type === 'checkbox' ? input.checked : input.value]));
    values.shiftingThreshold = $('#shiftingThreshold').value; // Preserve the disabled manual setting.
    for (const key of buffs.STATIC_KEYS) {
      const input = $(`#config [name="${key}"]`);
      values[key] = input.type === 'checkbox' ? input.checked : input.value;
    }
    values.spiritMode = $('#spirit-mode').value;
    values.potionPolicy = $('#potion-policy').value;
    values.potionManaReserve = $('#potion-mana-reserve').value;
    if (talents) for (const key of ['bloodFrenzy', 'naturalShapeshifter', 'reflection', 'naturalist', 'genesis', 'savageFury', 'predatoryInstincts', 'rendAndTear', 'buffHeartOfWild', 'buffLivingSpirit']) values[key] = $(`#config [name="${key}"]`).value;
    $('#config').querySelectorAll('input[type="checkbox"]').forEach(input => { if (input.name) values[input.name] = input.checked; });
    return values;
  }
  function config() { return sim.normalize(rawConfig()); }
  function updateSpiritControls() {
    const mode = $('#stat-mode').value;
    $('#divine-spirit').disabled = mode !== 'unbuffed' && $('#spirit-mode').value === 'total';
  }
  function updateBuffControls() {
    const unbuffed = (gear && $('#gear-mode').value === 'gear') || $('#stat-mode').value === 'unbuffed';
    for (const key of buffs.STATIC_KEYS.filter(k => k !== 'divineSpirit')) $(`#config [name="${key}"]`).disabled = !unbuffed;
    for (const key of buffs.DERIVED_KEYS.filter(k => k !== 'spiritMode')) $(`#config [name="${key}"]`).readOnly = unbuffed;
    $('#spirit-mode').disabled = unbuffed;
    $('#buffs-all').disabled = !unbuffed || running || optimizing || exploring || comparing || weighing;
    $('#buffs-none').disabled = !unbuffed || running || optimizing || exploring || comparing || weighing;
    $('#debuffs-all').disabled = running || optimizing || exploring || comparing || weighing;
    $('#debuffs-none').disabled = running || optimizing || exploring || comparing || weighing;
    const icon = $('#crit-aura').value === 'moonkin' ? 'moonkin' : 'leader';
    const prefix = window.location?.protocol === 'file:' ? 'assets/' : '';
    $('#crit-aura-icon').src = `${prefix}effect-icons/${icon}.jpg`;
    const flask = $('#natural-flask').value;
    $('#natural-flask-icon').src = `${prefix}consumable-icons/natural${flask === 'none' ? 'Accuracy' : flask[0].toUpperCase() + flask.slice(1)}.jpg`;
    $('#buff-stats-panel').hidden = !unbuffed;
    try {
      const c = config(), calculated = buffs.calculate(c);
      if (gear) {
        const gearMode = c.characterMode === 'gear';
        const computed = gearMode ? gear.calculate(c.gearBuild, c).patch : {};
        for (const [key, value] of Object.entries(computed)) {
          const input = $(`#config [name="${key}"]`);
          if (input) { if (typeof value === 'boolean') input.checked = value; else input.value = String(value); }
        }
        $('#stat-mode').disabled = gearMode;
        for (const key of [...Object.keys(buffs.BASE), 'weaponSpeed', 'weaponMin', 'weaponMax']) $(`#config [name="${key}"]`).readOnly = gearMode;
        $('#wolfshead-helm').disabled = gearMode; $('#howling-idol').disabled = gearMode;
        gearView?.sync(rawConfig(), c, characterReference);
      }
      if (talents) for (const key of ['bloodFrenzy', 'naturalShapeshifter', 'reflection', 'naturalist', 'genesis', 'savageFury', 'predatoryInstincts', 'rendAndTear', 'buffHeartOfWild', 'buffLivingSpirit', 'baseIncludesLeader']) {
        const input = $(`#config [name="${key}"]`);
        input.disabled = c.talentMode === 'build';
        if (typeof c[key] === 'boolean') input.checked = c[key]; else input.value = String(c[key]);
      }
      $('#buff-status').textContent = unbuffed
        ? 'Buffs applied to baseline stats.'
        : 'Stat buffs locked · import unbuffed stats to edit.';
      if (calculated) {
        for (const [key, value] of Object.entries(calculated.patch)) $(`#config [name="${key}"]`).value = String(value);
        $('#buff-stat-table').replaceChildren(...calculated.rows.map(item => {
          const row = document.createElement('tr');
          const format = value => Number(value).toLocaleString(undefined, { maximumFractionDigits: item.label.includes('timer') ? 4 : 2 });
          const delta = item.after - item.before;
          for (const value of [item.label, item.before == null ? 'Not supplied' : format(item.before), item.after == null ? 'Not supplied' : format(item.after), item.after == null || item.before == null ? '—' : `${delta < 0 ? '−' : delta > 0 ? '+' : ''}${format(Math.abs(delta))}`]) {
            const cell = document.createElement('td'); cell.textContent = value; row.appendChild(cell);
          }
          return row;
        }));
      }
      $('#buff-armor-preview').textContent = `Target armor with external debuffs: ${number(damage.armor(c))} (${fixed((1 - damage.armorMultiplier(damage.armor(c))) * 100)}% physical mitigation). Own Faerie Fire is evaluated during combat.`;
      workbench?.characterStats(c);
      workbench?.syncTalents(c);
      window.feralDisplay?.syncSetup(c);
    } catch (error) { $('#buff-status').textContent = error.message; $('#buff-stat-table').replaceChildren(); gearView?.sync(rawConfig(), null, characterReference); }
    updateSpiritControls();
  }
  function applyBuffPreset(patch) {
    if (running || optimizing || exploring || comparing || weighing) return;
    if (Object.hasOwn(patch, 'markWild') && $('#stat-mode').value !== 'unbuffed') return;
    for (const [key, value] of Object.entries(patch)) {
      const input = $(`#config [name="${key}"]`);
      if (typeof value === 'boolean') input.checked = value; else input.value = String(value);
    }
    updateBuffControls();
    $('#results-stale').hidden = false;
    updateObjectiveControls(); updateTradeButtons(); updateImportButtons();
  }
  function importStale() {
    try { return importText !== $('#import-json').value || importSnapshot !== JSON.stringify(rawConfig()); }
    catch (_) { return true; }
  }
  function updateImportButtons() {
    const stale = importPreview && importStale();
    $('#import-apply').disabled = running || optimizing || exploring || comparing || weighing || !importPreview || stale ||
      (importPreview.requiresCatConfirmation && !$('#import-cat-confirm').checked);
    if (stale) $('#import-status').textContent = 'Export or simulation settings changed. Preview again before applying.';
  }
  function clearImportPreview() {
    importPreview = null; importSnapshot = null; importText = null;
    $('#import-preview-panel').hidden = true;
    $('#import-cat-confirm').checked = false;
    $('#import-changes').replaceChildren();
    $('#import-reference').textContent = '';
    updateImportButtons();
  }
  function previewCharacter() {
    clearImportPreview();
    try {
      if (gear && $('#import-destination').value === 'gear') { previewGearCharacter(); return; }
      const preview = importer.parseExport($('#import-json').value, { statMode: $('#import-stat-mode').value, fullTalents: Boolean(talents), currentBuild: rawConfig().talentBuild });
      if (preview.errors.length) { $('#import-status').textContent = preview.errors.join('\n'); return; }
      if (gear) preview.patch.characterMode = 'totals';
      const current = rawConfig();
      if (preview.patch.statMode === 'unbuffed') preview.patch.baseSwingTimer = Number(current.statMode === 'unbuffed' ? current.baseSwingTimer : current.swingTimer);
      const proposed = sim.normalize({ ...current, ...preview.patch });
      if (preview.patch.statMode === 'unbuffed') for (const key of buffs.DERIVED_KEYS) preview.patch[key] = proposed[key];
      importPreview = preview; importSnapshot = JSON.stringify(current); importText = $('#import-json').value;
      const ref = preview.reference;
      $('#import-identity').textContent = `${ref.character.name || ref.name || 'Unnamed Druid'} · Level ${ref.character.level} ${ref.character.race || ''} Druid · Sheet crit ${ref.stats.crit}% → effective crit ${preview.patch.crit}%. ${preview.patch.statMode === 'unbuffed' ? 'Selected buffs included in proposed totals. Resulting' : 'Final'} AP ${preview.patch.attackPower ?? 'not supplied'}: used only when damage is enabled.`;
      const display = value => value === true ? 'On' : value === false ? 'Off'
        : value == null ? 'Not supplied — manual entry required' : value === 'base' ? 'Before Divine Spirit' : value === 'total' ? 'Final exported total' : String(value);
      const rows = Object.entries(preview.patch).map(([key, value]) => {
        const row = document.createElement('tr');
      for (const text of [importer.LABELS[key] || key, display(current[key]), display(value)]) {
          const cell = document.createElement('td'); cell.textContent = text; row.appendChild(cell);
        }
        return row;
      });
      $('#import-changes').replaceChildren(...rows);
      $('#import-cat-confirm-label').hidden = !preview.requiresCatConfirmation;
      $('#import-warnings').textContent = preview.warnings.map(warning => `• ${warning}`).join('\n');
      $('#import-warning-badge').hidden = !preview.warnings.length;
      $('#import-reference').textContent = JSON.stringify(ref, null, 2);
      $('#import-preview-panel').hidden = false;
      $('#import-status').textContent = preview.requiresCatConfirmation
        ? 'Preview ready. Review the changes and confirm Cat Form before applying. No settings changed.'
        : 'Preview ready. Review the changes before applying. No settings changed.';
      updateImportButtons();
    } catch (error) { clearImportPreview(); $('#import-status').textContent = `Could not preview: ${error.message}`; }
  }
  function applyCharacter() {
    if (running || optimizing || exploring || comparing || weighing || !importPreview) return;
    if (importStale()) { updateImportButtons(); return; }
    if (importPreview.requiresCatConfirmation && !$('#import-cat-confirm').checked) return;
    try {
      // Validate and resolve every target before making any form writes.
      const candidate = sim.normalize({ ...rawConfig(), ...importPreview.patch });
      const changes = Object.entries(importPreview.patch).map(([key, value]) => {
        const input = $(`#config [name="${key}"]`);
        if (!input || candidate[key] !== value) throw new Error(`Cannot apply ${importer.LABELS[key]}.`);
        return { input, value };
      });
      const reference = importPreview.reference;
      for (const { input, value } of changes) {
        if (typeof value === 'boolean') input.checked = value;
        else input.value = value == null ? '' : String(value);
      }
      characterReference = reference;
      updateBuffControls();
      workbench?.characterReference(reference);
      optimizationResult = null; optimizationSnapshot = null; optimizationObjectiveSnapshot = null; optimizationApplied = false;
      tradeResult = null; tradeSnapshot = null; tradeValidation = null; tradeSelected = null; tradeApplied = false;
      potionResult = null; potionSnapshot = null; potionSelected = null;
      $('#potion-status').textContent = 'Character imported. Compare potion strategies again.';
      $('#optimizer-status').textContent = 'Character imported. Previous optimization is invalid; optimize again.';
      $('#trade-status').textContent = 'Character imported. Previous exploration/validation is invalid; explore again.';
      renderTradeValidation();
      logFight = null;
      $('#combat-log').textContent = '';
      $('#debug-seed').textContent = ''; $('#log-oom').textContent = '';
      $('#log-count').textContent = 'Character imported. Replay again to see the new setup.';
      $('#results-stale').hidden = false;
      $('#import-applied-title').textContent = `Last applied: ${reference.character.name || reference.name || 'Unnamed Druid'}`;
      $('#import-applied-reference').textContent = JSON.stringify(reference, null, 2);
      $('#import-applied-panel').hidden = false;
      clearImportPreview();
      updateObjectiveControls(); updateTradeButtons();
      $('#import-status').textContent = 'Character applied. Selected buffs and rotation preserved; unbuffed mode calculates their stat effects. Run the simulation when ready.';
      $('#status').textContent = 'Character imported. Previous results are out of date; run the simulation again.';
    } catch (error) { $('#import-status').textContent = `Could not apply: ${error.message}`; }
  }
  function loadDefaultCharacter() {
    const supplied = window.FOREVER_FERAL_DEFAULT_CHARACTER;
    if (!supplied) return; // Legacy integrations can supply their own initial form.
    const preview = importer.parseExport(JSON.stringify(supplied), { statMode: 'unbuffed', fullTalents: Boolean(talents) });
    if (preview.errors.length || preview.requiresCatConfirmation) throw new Error('Invalid bundled starting character.');
    const patch = { ...preview.patch, baseSwingTimer: 1, damageEnabled: true, ...buffs.DEFAULT_BUFFS, ...buffs.ALL_DEBUFFS,
      mongoose: true, jujuPower: true, jujuMight: true, scorpok: true, filet: true, sharpeningStone: true,
      naturalFlask: 'precision', flaskZone: true, potionStrategy: 'openerRage', usePotions: true,
      ...supplied.defaultRotation };
    sim.normalize({ ...rawConfig(), ...patch });
    const changes = Object.entries(patch).map(([key, value]) => {
      const input = $(`#config [name="${key}"]`);
      if (!input) throw new Error(`Missing starting-character field: ${key}`);
      return { input, value };
    });
    for (const { input, value } of changes) {
      if (typeof value === 'boolean') input.checked = value; else input.value = value == null ? '' : String(value);
    }
    $('#import-applied-title').textContent = 'Starting character: JVMES · unbuffed Cat export · talent-free baseline';
    $('#import-applied-reference').textContent = JSON.stringify(preview.reference, null, 2);
    characterReference = preview.reference;
    $('#import-applied-panel').hidden = false;
    $('#import-status').textContent = 'JVMES talent-free baseline loaded with the starting 9/32/10 build (5/5 Naturalist, no Blood Frenzy or Natural Shapeshifter), all compatible buffs/debuffs and consumables, Precision flask with the Hyjal/Barrow zone bonus, and Mighty Rage opener → mana potions. New imports preserve your buff/consume selections.';
    workbench?.characterReference(preview.reference);
    if (gear) {
      const loaded = supplied.defaultGear ? { build: gear.validate(supplied.defaultGear), errors: [] } : gear.fromExport(supplied);
      if (loaded.errors.length) throw new Error(loaded.errors.join(' '));
      $('#gear-build').value = JSON.stringify(loaded.build);
      $('#gear-mode').value = 'gear';
      $('#import-applied-title').textContent = 'Starting equipment: JVMES · gear-calculated Tauren Cat';
      $('#import-status').textContent = 'Default equipment loaded into the Gear builder. Stats are recalculated from the pinned Forever source; the original export totals are a reference for the earlier equipment, not the current default set.';
    }
  }
  function previewGearCharacter() {
    const parsed = gear.fromExport(JSON.parse($('#import-json').value));
    if (parsed.errors.length) { $('#import-status').textContent = parsed.errors.join('\n'); return; }
    const current = rawConfig();
    const patch = { characterMode: 'gear', gearBuild: JSON.stringify(parsed.build), statMode: 'unbuffed', talentStats: 'excluded',
      talentMode: 'build', talentBuild: current.talentBuild || talents.DEFAULT_BUILD };
    const proposed = sim.normalize({ ...current, ...patch });
    importPreview = { patch, reference: parsed.reference, warnings: parsed.warnings, requiresCatConfirmation: false };
    importSnapshot = JSON.stringify(current); importText = $('#import-json').value;
    $('#import-identity').textContent = `${parsed.reference.character.name || parsed.reference.name || 'Unnamed Druid'} · ${gear.RACES[parsed.build.race].name} · equipment import · final AP ${fixed(proposed.attackPower)} · crit vs boss ${fixed(proposed.crit)}%. Selected talents, buffs and rotation preserved.`;
    $('#import-changes').replaceChildren(...['attackPower', 'crit', 'startingMana', 'spirit', 'miss', 'dodge', 'weaponSpeed', 'swingTimer'].map(key => {
      const row = document.createElement('tr'); for (const value of [importer.LABELS[key] || key, current[key], proposed[key]]) { const td = document.createElement('td'); td.textContent = String(value); row.appendChild(td); } return row;
    }));
    $('#import-cat-confirm-label').hidden = true;
    $('#import-warnings').textContent = [...parsed.warnings, ...proposed.gearWarnings].join('\n');
    $('#import-warning-badge').hidden = !parsed.warnings.length && !proposed.gearWarnings.length;
    $('#import-reference').textContent = JSON.stringify(parsed.reference, null, 2);
    $('#import-preview-panel').hidden = false; $('#import-status').textContent = 'Equipment preview ready. Exported totals and talent list are reference only; the selected build here is preserved. No settings changed.';
    updateImportButtons();
  }
  function applyGearBuild(build, preserveTalents = false) {
    if (running || optimizing || exploring || comparing || weighing) throw new Error('Wait for the simulation or search to finish.');
    const patch = { gearBuild: JSON.stringify(gear.validate(build)), characterMode: 'gear',
      ...(!preserveTalents ? { talentMode: 'build', talentBuild: rawConfig().talentBuild || talents.DEFAULT_BUILD } : {}) };
    sim.normalize({ ...rawConfig(), ...patch });
    for (const [key, value] of Object.entries(patch)) $(`#config [name="${key}"]`).value = value;
    invalidateSearches(); clearImportPreview(); clearReplayForRestore();
    updateBuffControls(); $('#results-stale').hidden = true;
    if (lastResult) $('#results-stale').hidden = !completedRunDirty();
    $('#status').textContent = 'Equipment updated · rerun needed.';
    updateTradeButtons(); updateObjectiveControls(); updateComparison();
  }
  function requestDefaults(kind) {
    if (!defaultSetup || running || optimizing || exploring || comparing || weighing) return;
    pendingReset = kind;
    restoreDefaults();
  }
  function restoreDefaults() {
    if (!pendingReset || !defaultSetup || running || optimizing || exploring || comparing || weighing) return;
    try {
      if (pendingReset === 'gear') {
        const original = gear.validate(defaultSetup.values.gearBuild);
        const current = rawConfig();
        if (current.gearBuild) original.race = gear.validate(current.gearBuild).race;
        // Validate the entire replacement before changing any fields. Preserve
        // a legacy talent mode too; this reset is equipment, not a talent import.
        const values = { ...current, gearBuild: JSON.stringify(gear.validate(original)), characterMode: 'gear' };
        sim.normalize(values);
        restoreSetup({ ...captureSetup(), values });
      } else {
        const current = captureSetup(), values = { ...defaultSetup.values };
        const keep = new Set(['characterMode', 'gearBuild', 'statMode', 'talentStats', 'talentBaselineBuild',
          ...Object.keys(buffs.BASE), 'baseIncludesLeader', ...buffs.DERIVED_KEYS,
          'weaponSpeed', 'weaponMin', 'weaponMax', 'damageWeaponId', 'damageWeaponSource',
          'howlingIdol', 'wolfsheadHelm', 'tier1Feral5pc', 'racialRace', 'leyLineSpellHaste']);
        const lockedTalents = current.values.characterMode !== 'gear' && current.values.talentStats !== 'excluded';
        if (lockedTalents) for (const key of ['talentMode', 'talentBuild', 'bloodFrenzy', 'naturalShapeshifter', 'reflection', 'naturalist', 'genesis', 'savageFury', 'predatoryInstincts', 'rendAndTear', 'buffHeartOfWild', 'buffLivingSpirit']) keep.add(key);
        for (const key of keep) if (Object.hasOwn(current.values, key)) values[key] = current.values[key];
        // A final/manual export cannot safely use Strength-based rage potions.
        if (values.characterMode !== 'gear' && values.statMode !== 'unbuffed') values.potionStrategy = 'mana';
        sim.normalize(values);
        restoreSetup({ ...current, values, freshSeed: defaultSetup.freshSeed, talentDraft: lockedTalents ? current.talentDraft : null });
      }
      $('#defaults-status').textContent = pendingReset === 'gear'
        ? 'Default equipment restored. Race and combat settings kept; saved results unchanged. Simulate when ready.'
        : 'Default settings restored. Character/gear and saved results kept. Imported talent bonuses remain protected; final/manual totals use mana potions. Simulate when ready.';
      $('#status').textContent = $('#defaults-status').textContent;
      pendingReset = null;
      $('#results-stale').hidden = !completedRunDirty();
      updateTradeButtons(); updateObjectiveControls(); updateComparison();
    } catch (error) { $('#defaults-status').textContent = `Nothing reset: ${error.message}`; }
  }
  function potionStale() {
    try { return Boolean(potionSnapshot && JSON.stringify(config()) !== JSON.stringify(potionSnapshot)); }
    catch (_) { return true; }
  }
  function updatePotionButtons() {
    const busy = running || optimizing || exploring || comparing || weighing;
    for (const id of ['defaults-gear', 'defaults-settings']) $('#' + id).disabled = busy || !defaultSetup;
    $('#potion-compare').disabled = busy;
    $('#potion-stop').disabled = !comparing;
    $('#potion-apply').disabled = busy || !potionResult || potionSelected === null || potionApplied || potionStale();
    if (potionResult && !potionApplied && potionStale()) $('#potion-status').textContent = 'Settings changed. Compare again before applying a potion strategy.';
  }
  function potionBusy(value) {
    comparing = value;
    const busy = running || optimizing || exploring || comparing || weighing;
    for (const id of ['run', 'replay', 'optimize']) $(`#${id}`).disabled = busy;
    updateTradeButtons(); updateObjectiveControls();
  }
  function renderPotions() {
    $('#potion-table').innerHTML = potionResult.rows.map(row => `<tr class="${row.id === potionSelected ? 'potion-selected' : ''}"><td><button type="button" data-potion-id="${row.id}" aria-pressed="${row.id === potionSelected}">${row.label}${row.current ? ' (current)' : ''}</button></td><td>${fixed(row.score)}</td><td>${deltaText(row.dpsDelta.gain)}</td><td>±${fixed(1.96 * row.dpsDelta.se)}</td><td>${fixed(row.cpm)}</td><td>${fixed(row.oomPercent)}%</td><td>${row.oomTime === null ? '—' : `${fixed(row.oomTime)}s`}</td><td>${number(row.endingMana)}</td><td>${fixed(row.manaUses)}</td><td>${fixed(row.rageUses)}</td></tr>`).join('');
    const selected = potionResult.rows.find(row => row.id === potionSelected);
    $('#potion-sequence-label').textContent = selected ? `${selected.label} · example from iteration ${potionResult.firstIteration} (one fight, not the mean)` : 'Select a row to see an example potion sequence. Nothing is selected automatically.';
    $('#potion-sequence').textContent = selected ? (selected.sequence.map(item => `${fixed(item.time)}s · ${item.kind === 'rage' ? 'Mighty Rage' : 'Major Mana'} · ${item.reason}`).join('\n') || 'No potion used in this example fight.') : '';
    updatePotionButtons();
  }
  function comparePotionStrategies() {
    if (running || optimizing || exploring || comparing || weighing) return;
    $('#potion-results').hidden = false;
    potionResult = null; potionSnapshot = null; potionSelected = null; potionApplied = false;
    $('#potion-table').innerHTML = ''; $('#potion-sequence').textContent = ''; $('#potion-sequence-label').textContent = '';
    $('#potion-progress').max = 1; $('#potion-progress').value = 0;
    try {
      const base = config(), iterations = Number($('#potion-compare-iterations').value);
      const search = { ...base, seed: $('#fresh-seed').checked ? freshSeed(base.seed, lastPotionSeed) : base.seed };
      if (!Number.isInteger(iterations) || iterations < 2 || iterations > 3000) throw new Error('Compare 2–3,000 paired fights per strategy.');
      potionSnapshot = base; lastPotionSeed = search.seed;
      potionJob = optimizer.comparePotions(search, { iterations, firstIteration: nextPotionIteration });
      nextPotionIteration += iterations; // Reserve even cancelled blocks; never reuse held-out samples.
      const ticket = ++potionTicket;
      potionBusy(true);
      function pump() {
        if (ticket !== potionTicket || !potionJob) return;
        try {
          const start = Date.now();
          for (let batch = 0; batch < 8; batch++) {
            const next = potionJob.next();
            if (next.done) {
              potionResult = next.value; potionJob = null;
              $('#potion-status').textContent = `Compared ${potionResult.rows.length} strategies × ${iterations} paired fights · seed ${search.seed} · fresh iterations ${potionResult.firstIteration}–${potionResult.lastIteration}. Rotation fixed. Select a strategy to inspect; no winner applied.`;
              renderPotions(); potionBusy(false); return;
            }
            $('#potion-progress').max = next.value.totalFights; $('#potion-progress').value = next.value.completedFights;
            $('#potion-status').textContent = `${next.value.phase} · ${number(next.value.completedFights)} / ${number(next.value.totalFights)} fights. Settings unchanged.`;
            if (Date.now() - start >= 12) break;
          }
          setTimeout(pump, 0);
        } catch (error) { potionResult = null; potionJob = null; potionBusy(false); $('#potion-status').textContent = `Could not compare: ${error.message}`; }
      }
      setTimeout(pump, 0);
    } catch (error) { updatePotionButtons(); $('#potion-status').textContent = `Could not compare: ${error.message}`; }
  }
  function stopPotions() {
    if (!comparing) return;
    potionTicket++; potionJob?.return(); potionJob = null; potionResult = null;
    potionBusy(false); $('#potion-status').textContent = 'Stopped. No potion settings changed; incomplete results cannot be applied.';
  }
  function selectPotion(event) {
    if (running || optimizing || exploring || comparing || weighing || !potionResult) return;
    const target = event.target.closest('[data-potion-id]');
    const id = target?.getAttribute('data-potion-id');
    if (!potionResult.rows.some(row => row.id === id)) return;
    potionSelected = id; renderPotions();
  }
  function applyPotion() {
    if (running || optimizing || exploring || comparing || weighing || !potionResult || potionSelected === null || potionApplied || potionStale()) { updatePotionButtons(); return; }
    const selected = potionResult.rows.find(row => row.id === potionSelected);
    for (const [key, value] of Object.entries(selected.params)) {
      const input = $(`#config [name="${key}"]`);
      if (typeof value === 'boolean') input.checked = value; else input.value = String(value);
    }
    potionApplied = true; updatePotionControls(); updatePotionButtons();
    $('#potion-status').textContent = `Selected potion strategy applied; rotation settings unchanged. The simulation run uses comparison seed ${potionResult.config.seed}. Rows retain the comparison's original settings.`;
    run(potionResult.config.seed);
  }
  function freshSeed(...previous) {
    let seed;
    if (window.crypto?.getRandomValues) {
      const values = new Uint32Array(1);
      window.crypto.getRandomValues(values);
      seed = values[0];
    } else {
      seed = Math.floor(Math.random() * 4294967296) >>> 0;
    }
    // Even a random collision must not repeat the previous run's seed.
    while (previous.includes(seed)) seed = (seed + 1) >>> 0;
    return seed;
  }
  function bars(target, rows) {
    const max = Math.max(1, ...rows.map(row => row.value));
    $(target).innerHTML = rows.map(row => `<div class="bar-row"><span>${row.label}</span><span class="bar-track"><i style="width:${Math.max(0, row.value / max * 100)}%"></i></span><b>${number(row.value)}</b></div>`).join('');
  }
  function signedNumber(value) {
    // Suppress signed zero after display rounding, including floating-point
    // cancellation in otherwise balanced net flow.
    const magnitude = Math.round(Math.abs(value) * 10) / 10;
    return magnitude ? `${value < 0 ? '−' : '+'}${number(magnitude)}` : '0';
  }
  function manaBars(rows) {
    // Both halves share one scale: equal amounts have equal lengths, with
    // zero fixed at the center even when only one direction has any flow.
    const max = Math.max(...rows.map(row => Math.abs(row.value))) || 1;
    const axis = '<div class="mana-flow-axis" aria-hidden="true"><span></span><span class="mana-flow-directions"><span>−</span><span>0</span><span>+</span></span><span></span></div>';
    $('#mana-chart').innerHTML = axis + rows.map(row => {
      const direction = row.value < 0 ? 'out' : row.value > 0 ? 'in' : 'zero';
      const width = Math.abs(row.value) / max * 50;
      const edge = row.value < 0 ? 'right' : 'left';
      return `<div class="mana-flow-row"><span class="mana-flow-label">${row.label}</span><span class="mana-flow-track" aria-hidden="true"><i class="mana-flow-${direction}" style="${edge}:50%;width:${width}%"></i></span><b>${signedNumber(row.value)}</b></div>`;
    }).join('');
  }
  function durationRange(result) {
    const { min, max } = result.durationStats;
    return min === max ? number(min) : `${number(min)}–${number(max)}`;
  }
  function render(result) {
    rotationView?.diagnostics(result);
    lastResult = result;
    if ($('#form-results')) {
      $('#form-results').hidden = !result.forms?.entries && !result.forms?.cycle;
      $('#form-results-values').textContent = result.forms ? JSON.stringify(result.forms, null, 2) : '';
      const cycle = result.forms?.cycle;
      $('#form-cycle-results').hidden = !cycle;
      $('#form-cycle-results').textContent = cycle ? `Per fight: ${cycle.entered.toFixed(2)} cycle entries · ${cycle.landed.toFixed(2)} landed Bear abilities · ${cycle.missed.toFixed(2)} avoided · ${cycle.unfunded.toFixed(2)} unfunded · ${cycle.delayedShifts.toFixed(2)} delayed Shifts. Skips: ${Object.entries(cycle.skipped).map(([why, n]) => `${why} ${n.toFixed(2)}`).join(' · ') || 'none'}.` : '';
    }
    if (gear) {
      $('#gear-result-coverage').hidden = result.config.characterMode !== 'gear';
      $('#result-coverage-badge').hidden = result.config.characterMode !== 'gear' || !result.config.gearWarnings?.length;
      $('#gear-result-warnings').textContent = result.config.characterMode === 'gear' ? `${gear.RACES[JSON.parse(result.config.gearBuild).race].name} · database ${result.config.gearRevision}\n${(result.config.gearWarnings || []).join('\n')}` : '';
    }
    workbench?.result(result);
    renderDamage(result);
    const perFive = $('#mana-per-five').checked;
    const manaUnit = perFive ? '5s' : 'min';
    const manaRate = total => total * (perFive ? 5 : 60) / result.durationStats.mean;
    $('#duration-summary').textContent = `Actual fight lengths: ${durationRange(result)}s · mean ${number(result.durationStats.mean)}s. CPM and mana rates use total casts or mana divided by total actual combat time.`;
    $('#mana-flow-title').textContent = `Mana flow / ${perFive ? '5 seconds' : 'minute'}`;
    $('#mana-rate-label').textContent = perFive ? 'MP5' : 'MPM';
    const manaTotal = Object.values(result.manaGained).reduce((sum, item) => sum + item.mean, 0);
    const cards = [
      ['Attack CPM', fixed(['rake', 'shred', 'rip', 'bite'].reduce((sum, id) => sum + result.abilityStats[id].cpm, 0)), 'Rake + Shred + Rip + Bite'],
      ['Finisher CPM', fixed(result.finisherCasts.cpm), `Rip ${fixed(result.abilityStats.rip.cpm)} + Bite ${fixed(result.abilityStats.bite.cpm)}`],
      ['Time to OOM', result.oom.count ? `${fixed(result.oom.mean)}s` : 'No OOM', result.oom.count ? `Mean among ${result.oom.count.toLocaleString()} OOM fights` : `Within ${durationRange(result)}s fights`],
      [`Mana spent / ${manaUnit}`, number(manaRate(result.manaSpent.mean)), `${number(result.manaSpent.mean)} per fight`],
      [`Mana gained / ${manaUnit}`, number(manaRate(manaTotal)), `${number(result.endingMana.mean)} ending mana`],
      ['OOM rate', `${fixed(result.oom.percent)}%`, result.oom.count ? `${fixed(result.oom.mean)}s mean` : 'No starved iterations'],
      ['Energy wasted', number(result.energy.waste.mean), `${number(result.energy.natural.mean + result.energy.shifting.mean + result.energy.tea.mean)} raw generated`],
      ['Blood Frenzy', number(result.bloodFrenzy.procs.mean), `${number(result.bloodFrenzy.attempts.mean)} attempts / fight`],
      ['Judgment procs', number(result.jow.procs.mean), `${number(result.jow.attempts.mean)} attempts / fight`],
      ['Mana potions', number(result.potion.uses.mean), `${number(result.potion.gained.mean)} effective mana / fight`],
      ['Mighty Rage potions', number(result.mightyRage.uses.mean), `${number(result.mightyRage.uptimeSeconds.mean)}s active / fight · +${number(result.mightyRage.bonusAP)} AP while active`],
      ['Thistle Tea', number(result.tea.uses.mean), `${number(result.tea.gained.mean)} useful energy / fight`],
      ['Clearcasting procs (rolled)', number(result.omen.procs.mean), `${result.omen.startingProcs.mean ? `${number(result.omen.startingProcs.mean)} starting buff · ` : ''}${number(result.omen.freeCasts.mean)} free-base-cost casts · ${number(result.omen.energySaved.mean)} energy saved / fight`],
      ['Windfury procs', number(result.windfury.procs.mean), `${number(result.windfury.extraAttacks.mean)} attacks · ${number(result.windfury.landed.mean)} landed / fight`],
      ['Crits created / Berserk', fixed(result.berserkCrits.perUse.created), `Rake ${fixed(result.berserkCrits.perUse.rake)} · Shred ${fixed(result.berserkCrits.perUse.shred)} per use`]
    ];
    const racials = result.racials;
    if (racials?.elunesLight.uses.mean) cards.push(['Elune’s Light', `${fixed(racials.elunesLight.uses.mean)} uses`, `${fixed(racials.elunesLight.uptimeSeconds.mean)}s active · ${fixed(racials.elunesLight.berserkOverlapSeconds.mean)}s Berserk overlap / fight`]);
    if (racials?.leyLine.uses.mean) cards.push(['Read Ley Line', `${fixed(racials.leyLine.uses.mean)} uses`, `+${number(racials.leyLine.manaGained.mean)} effective mana · ${fixed(racials.leyLine.castSeconds.mean)}s casting in combat / fight`]);
    $('#summary').innerHTML = cards.map(card => `<article class="summary-card"><span>${card[0]}</span><b>${card[1]}</b><small>${card[2]}</small></article>`).join('');
    $('#total-cpm').textContent = `Total CPM: ${fixed(result.totalCasts.cpm)}`;
    bars('#casts-chart', sim.ABILITIES.map(id => ({ label: sim.LABELS[id], value: result.abilityStats[id].cpm })));
    const manaRows = [['Spirit', 'spirit'], ['Blessing', 'blessing'], ['Mana Spring', 'spring'], ['Judgment', 'jow'], ['Potion', 'potion']];
    if (result.config.manaTide) manaRows.push(['Mana Tide', 'tide']);
    if (result.manaGained.gear) manaRows.push(['Gear MP5', 'gear']);
    if (result.manaGained.leyLine) manaRows.push(['Read Ley Line bonus', 'leyLine']);
    manaBars([...manaRows.map(([label, id]) => ({ label, value: manaRate(result.manaGained[id].mean) })), { label: 'Spent', value: -manaRate(result.manaSpent.mean) }]);
    $('#mana-net-flow').textContent = `Net flow: ${signedNumber(manaRate(manaTotal - result.manaSpent.mean))} mana / ${perFive ? '5 seconds' : 'minute'}`;
    $('#ability-table').innerHTML = sim.ABILITIES.map(id => { const a = result.abilityStats[id]; return `<tr><td>${sim.LABELS[id]}</td><td>${fixed(a.mean)}</td><td>${fixed(a.cpm)}</td><td>${fixed(a.sd)}</td><td>${fixed(a.median)}</td><td>${fixed(a.p5)}</td><td>${fixed(a.p95)}</td><td>${fixed(result.berserkCasts[id].mean)}</td></tr>`; }).join('');
    $('#berserk-crits-table').innerHTML = [['Rake', 'rake'], ['Shred', 'shred'], ['Total', 'created']].map(([label, key]) => `<tr><td>${label}</td><td>${fixed(result.berserkCrits[key].mean)}</td><td>${fixed(result.berserkCrits.perUse[key])}</td></tr>`).join('');
    $('#berserk-crits-sample').textContent = `${number(result.berserkCrits.uses)} Berserk uses across ${number(result.fights)} fights`;
    const rawCP = result.cp.normal.mean + result.cp.bloodFrenzy.mean + result.cp.waste.mean;
    const cappedCPPercent = rawCP ? result.cp.atCapWaste.mean / rawCP * 100 : 0;
    $('#cp-cap-table').innerHTML = [['Rake', 'rakeAtCapCasts', 'rakeAtCapWaste'], ['Shred', 'shredAtCapCasts', 'shredAtCapWaste'], ['Total', 'atCapCasts', 'atCapWaste']]
      .map(([label, casts, waste]) => `<tr><td>${label}</td><td>${fixed(result.cp[casts].mean)}</td><td>${fixed(result.cp[waste].mean)}</td></tr>`).join('');
    $('#cp-cap-summary').textContent = `${fixed(cappedCPPercent)}% of all raw CP is lost from casts starting at 5 CP. Another ${fixed(result.cp.waste.mean - result.cp.atCapWaste.mean)} CP / fight overflows from casts starting below 5 CP.`;
    $('#mana-table').innerHTML = [...manaRows.map(([label, id]) => `<tr><td>${label}</td><td>${fixed(result.manaGained[id].mean)}</td><td>${fixed(manaRate(result.manaGained[id].mean))}</td></tr>`), `<tr><td>Potion rolled</td><td>${fixed(result.potion.rolled.mean)}</td><td>${fixed(manaRate(result.potion.rolled.mean))}</td></tr>`, `<tr><td>Potion wasted</td><td>${fixed(result.potion.waste.mean)}</td><td>${fixed(manaRate(result.potion.waste.mean))}</td></tr>`, `<tr><td>All mana wasted</td><td>${fixed(result.manaWaste.mean)}</td><td>${fixed(manaRate(result.manaWaste.mean))}</td></tr>`, `<tr><td><b>Spent</b></td><td>${fixed(result.manaSpent.mean)}</td><td>${fixed(manaRate(result.manaSpent.mean))}</td></tr>`].join('');
    const resourceRows = [
      ['Natural energy generated', result.energy.natural.mean], ['Shifting Power energy (raw)', result.energy.shifting.mean], ['Shifting energy (useful)', result.energy.shifting.mean - result.energy.shiftingWaste.mean], ['Shifting energy wasted', result.energy.shiftingWaste.mean],
      ['Thistle Tea energy (raw)', result.energy.tea.mean], ['Tea energy (useful)', result.tea.gained.mean], ['Tea energy wasted', result.energy.teaWaste.mean], ['All energy wasted', result.energy.waste.mean],
      ['Starting Clearcasting buffs', result.omen.startingProcs.mean], ['Clearcasting eligible rolls', result.omen.attempts.mean], ['Clearcasting base cost waived', result.omen.costWaived.mean], ['Clearcasting net energy saved', result.omen.energySaved.mean],
      ['Clearcasting expired unused', result.omen.expired.mean], ['Clearcasting refreshed while active', result.omen.refreshed.mean], ['Clearcasting remaining at end', result.omen.remaining.mean],
      ['Windfury eligible rolls (ICD ready)', result.windfury.attempts.mean], ['Windfury attacks pending at end', result.windfury.pending.mean],
      ['Normal CP generated', result.cp.normal.mean], ['Blood Frenzy CP', result.cp.bloodFrenzy.mean], ['CP wasted', result.cp.waste.mean],
      ['CP consumed by Rip', result.cp.ripConsumed.mean], ['CP consumed by Bite', result.cp.biteConsumed.mean]
    ];
    $('#resource-table').innerHTML = resourceRows.map(row => `<tr><td>${row[0]}</td><td>${fixed(row[1])}</td></tr>`).join('');
    $('#uptime').innerHTML = [['Rake', 'rake'], ['Rip', 'rip'], ['Berserk', 'berserk'], ['Clearcasting', 'clearcasting']].map(([label, id]) => `<div><div class="uptime-head"><span>${label}</span><b>${fixed(result.uptime[id].mean)}%</b></div><div class="uptime-track"><i style="width:${Math.min(100, result.uptime[id].mean)}%"></i></div></div>`).join('');
    renderOom(result);
  }
  function renderOom(result) {
    const shiftCost = number(sim.shiftingPowerCost(result.config));
    $('#oom-label').textContent = result.oom.count ? `${result.oom.count}/${result.fights} fights · ${fixed(result.oom.percent)}%` : `0/${result.fights} fights`;
    $('#oom-detail').textContent = result.oom.count
      ? `Mean ${fixed(result.oom.mean)}s · Median ${fixed(result.oom.median)}s among fights that OOM. OOM is the first time Shifting Power is due but ${shiftCost} mana is unavailable.`
      : `${result.durationStats.min === result.durationStats.max ? `No OOM within ${durationRange(result)} seconds.` : `No OOM observed across fights lasting ${durationRange(result)} seconds.`} Longer-term sustainability has not been measured. OOM is the first time Shifting Power is due but ${shiftCost} mana is unavailable.`;
    if (result.oom.count && result.config.durationVariance) $('#oom-detail').textContent += ` Actual fight lengths: ${durationRange(result)}s; fights without OOM were observed only until their own end times.`;
    if (!result.oom.times.length) { $('#oom-chart').innerHTML = '<span class="empty">No iterations became mana-starved before the fight ended.</span>'; return; }
    const bins = 30, counts = Array(bins).fill(0), width = result.durationStats.max / bins;
    result.oom.times.forEach(time => counts[Math.min(bins - 1, Math.floor(time / width))]++);
    const max = Math.max(...counts);
    $('#oom-chart').innerHTML = counts.map((count, i) => `<i style="height:${count / max * 100}%" title="${fixed(i * width)}–${fixed((i + 1) * width)}s: ${count}"></i>`).join('');
  }
  function renderLog(fight, baseSeed) {
    logFight = fight;
    $('#debug-seed').textContent = `base seed ${baseSeed} · iteration ${fight.iteration} · derived seed ${fight.seed} · duration ${number(fight.duration)}s`;
    $('#log-oom').textContent = fight.oomTime === null ? `This fight: no OOM within ${number(fight.duration)}s` : `This fight: OOM at ${fixed(fight.oomTime)}s`;
    updateLog();
  }
  function updateLog() {
    const castsOnly = $('#log-view').value === 'casts';
    $('#log-autoattacks').disabled = castsOnly;
    $('#log-procs').disabled = castsOnly;
    $('#log-bleeds').disabled = castsOnly;
    if (!logFight) return;
    const showAutos = $('#log-autoattacks').checked, showProcs = $('#log-procs').checked;
    const direct = [...(logFight.damage?.events || [])].filter(event => !event.periodic);
    const sourceActions = { auto: 'Autoattack', windfury: 'Windfury attack', shred: sim.LABELS.shred, rakeInitial: sim.LABELS.rake, bite: sim.LABELS.bite, bearAuto: 'Bear auto', bearWindfury: 'Bear Windfury', casterAuto: 'Caster auto', casterWindfury: 'Caster Windfury', maul: 'Maul', lacerate: 'Lacerate', primalBite: 'Primal Bite' };
    const replayEvents = logFight.log.map(event => {
      const index = direct.findIndex(hit => hit.time === event.time && sourceActions[hit.source] === event.action);
      if (index < 0) return event;
      const [hit] = direct.splice(index, 1);
      return { ...event, detail: `${autoNames.has(event.action) ? 'Resource roll: ' : ''}${event.detail || ''} · Damage ${fixed(hit.damage)} (${hit.outcome})` };
    });
    for (const tick of logFight.damage?.events || []) if (tick.periodic) replayEvents.push({ time: tick.time, action: damage.LABELS[tick.source], periodic: true, detail: `Damage ${fixed(tick.damage)} (${tick.outcome})` });
    replayEvents.sort((a, b) => a.time - b.time || Number(Boolean(b.periodic)) - Number(Boolean(a.periodic)));
    const events = replayEvents.filter(event => {
      if (event.periodic) return !castsOnly && $('#log-bleeds').checked;
      if (castsOnly) return castNames.has(event.action);
      // Windfury attacks belong to both filters. Passive ticks and aura
      // lifecycle events are also hidden to leave a clean own-actions view.
      return (showAutos || !autoNames.has(event.action)) &&
        (showProcs || ownActionNames.has(event.action) || ['Autoattack', 'Bear auto', 'Caster auto'].includes(event.action));
    });
    $('#log-count').textContent = `${events.length.toLocaleString()} of ${replayEvents.length.toLocaleString()} events shown · Filters only change this view.`;
    $('#combat-log').innerHTML = events.map(event => `<tr><td>${event.time.toFixed(3)}</td><td>${event.action}</td><td>${event.detail || '—'}</td>${event.periodic ? '<td>—</td><td>—</td><td>—</td><td>—</td>' : `<td>${fixed(event.before.energy)} → ${fixed(event.after.energy)}</td><td>${fixed(event.before.mana)} → ${fixed(event.after.mana)}</td><td>${event.before.cp} → ${event.after.cp}</td><td>${event.before.form || 'cat'} → ${event.after.form || 'cat'} · ${fixed(event.before.rage || 0)} → ${fixed(event.after.rage || 0)}</td>`}</tr>`).join('') || '<tr><td colspan="7">No events match these filters.</td></tr>';
  }
  function renderDamage(result) {
    const d = result.damage;
    $('#damage-results').hidden = !d;
    if (!d) return;
    $('#damage-dps').textContent = `${fixed(d.dps)} DPS`;
    $('#damage-summary').textContent = `Pooled damage / combat seconds. Mean total damage ${number(d.meanTotal)} per fight · ${number(d.total)} across ${result.fights} fights. Sampling SE ${fixed(d.se)} DPS${d.se == null ? ' (needs at least two fights)' : `; approximate 95% interval ${fixed(Math.max(0, d.dps - 1.96 * d.se))}–${fixed(d.dps + 1.96 * d.se)} DPS`}.`;
    $('#damage-target-summary').textContent = `Armor ${number(d.meanArmor)} · mitigation ${fixed(d.mitigation)}% · Faerie Fire ${fixed(d.faerieFireUptime)}%`;
    $('#damage-target').textContent = `Time-weighted effective armor ${number(d.meanArmor)} · physical mitigation ${fixed(d.mitigation)}% · Faerie Fire coverage ${fixed(d.faerieFireUptime)}%. Own/external coverage combined without stacking.${result.config.giftOfArthas ? ' Gift of Arthas: +8 physical damage per landed hit/tick before outcome modifiers; full uptime.' : ''}${result.config.crystalYield ? ' Crystal Yield: −200 armor, full uptime (provisional Vanilla stacking).' : ''}`;
    $('#damage-table').innerHTML = damage.SOURCES.filter(id => d.bySource[id] && (d.bySource[id].events || ['auto', 'windfury', 'shred', 'rakeInitial', 'rakeTick', 'rip', 'bite'].includes(id))).map(id => { const row = d.bySource[id]; return `<tr><td>${damage.LABELS[id]}</td><td>${number(row.meanDamage)}</td><td>${fixed(row.dps)}</td><td>${fixed(row.share)}%</td><td>${row.hit}</td><td>${row.crit}</td><td>${row.glance}</td><td>${row.avoided}</td></tr>`; }).join('');
    $('#damage-provenance').textContent = JSON.stringify({ ...d.provenance, weapon: { source: result.config.damageWeaponSource, itemId: result.config.damageWeaponId, min: result.config.weaponMin, max: result.config.weaponMax, speed: result.config.weaponSpeed } }, null, 2);
  }
  function run(seedOverride, preserveView = false) {
    if (running || optimizing || exploring || comparing || weighing) return;
    if (!preserveView) workbench?.show('results', 'damage');
    running = true; $('#optimize').disabled = true;
    updateTradeButtons();
    $('#run').disabled = true; $('#status').textContent = 'Running seeded combat iterations…';
    setTimeout(() => {
      try {
        const c = config();
        if (Number.isInteger(seedOverride)) c.seed = seedOverride;
        else if ($('#fresh-seed').checked) c.seed = freshSeed(c.seed);
        $('#seed').value = String(c.seed);
        const setup = comparison ? captureSetup() : null;
        const result = sim.runSimulation(c);
        savedRuns?.record(result, setup);
        render(result);
        $('#results-stale').hidden = true;
        // Keep an already-open replay aligned with the new run and seed.
        if (logFight) renderLog(sim.replay(c, c.replayIteration), c.seed);
        const lengths = result.config.durationVariance
          ? `${number(result.config.duration)} ±${number(result.config.durationVariance)}s requested · ${durationRange(result)}s actual · mean ${number(result.durationStats.mean)}s`
          : `${number(result.config.duration)} seconds`;
        $('#status').textContent = `Complete: ${result.fights.toLocaleString()} fights × ${lengths} · seed ${c.seed}.`;
      }
      catch (error) { $('#status').textContent = `Could not run: ${error.message}`; }
      finally { running = false; $('#run').disabled = false; $('#optimize').disabled = false; updateTradeButtons(); updateObjectiveControls(); }
    }, 20);
  }
  function replay() {
    if (running || optimizing || exploring || comparing || weighing) return;
    workbench?.show('log');
    try { const c = config(), fight = sim.replay(c, c.replayIteration); renderLog(fight, c.seed); $('#status').textContent = `Replayed iteration ${fight.iteration} · duration ${number(fight.duration)}s · base seed ${c.seed} · derived seed ${fight.seed}.`; $('.debug-panel').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    catch (error) { $('#status').textContent = `Could not replay: ${error.message}`; }
  }
  function updatePotionControls() {
    $('#potion-policy').disabled = !$('#use-potions').checked || $('#potion-strategy').value === 'rage';
    $('#potion-mana-reserve').disabled = !$('#use-potions').checked || $('#potion-strategy').value !== 'adaptive';
  }
  function updateSeedControls() {
    $('#seed').readOnly = $('#fresh-seed').checked;
  }
  function updateShiftingControls() {
    const automatic = $('#shifting-mode').value === 'automatic';
    const searchingModes = $('#opt-shiftingMode-on')?.checked;
    $('#shiftingThreshold').disabled = automatic;
    $('#opt-shiftingThreshold-on').disabled = automatic && !searchingModes;
    $('#opt-shiftingThreshold-values').disabled = automatic && !searchingModes;
  }
  function optimizerBusy(busy) {
    optimizing = busy;
    $('#optimize').disabled = busy || running; $('#opt-stop').disabled = !busy;
    $('#run').disabled = busy || running; $('#replay').disabled = busy;
    $('#opt-apply').disabled = busy || optimizationApplied || !optimizationResult || optimizationResult.best.id === 0 || optimizerObjectiveStale();
    updateTradeButtons();
  }
  function renderOptimization(result) {
    $('#opt-score-label').textContent = result.options.objective === 'dps' ? 'DPS' : 'Objective / min';
    const gain = value => `${value > 0 ? '+' : ''}${fixed(value)}`;
    $('#optimizer-status').textContent = `Complete · ${result.candidatesTested} candidates tested · ${number(result.space)} grid combinations plus deduplicated references${result.exhaustive ? ' (entire selected grid)' : ' (sampled grid)'} · ${number(result.completedFights)} fights · seed ${result.config.seed}.`;
    $('#optimizer-summary').textContent = `Best tested ${optimizer.objectiveLabel(result.options)}: ${fixed(result.best.score)} vs current ${fixed(result.baseline.score)} (${gain(result.best.scoreGain)}). Attack CPM ${fixed(result.best.cpm)} · Finisher CPM ${fixed(result.best.finisherCPM)} (Rip ${fixed(result.best.abilityCPM.rip)} + Bite ${fixed(result.best.abilityCPM.bite)}). Finalists retested on ${result.options.validationIterations} fresh fights each, iterations ${result.validationFirstIteration}–${result.validationLastIteration}.`;
    $('#optimizer-best-settings').textContent = Object.entries(optimizer.PARAMETERS).filter(([key]) => policies.active(key, { ...result.config, ...result.best.params })).map(([key, parameter]) =>
      `${parameter.label}: ${result.config[key]} → ${result.best.params[key]}`).join(' · ');
    rotationView?.results(result);
    $('#rotation-export').disabled = false;
    $('#optimizer-table').innerHTML = result.ranked.map(item => {
      const cells = [item.id === 0 ? 'Current settings' : item.id === result.best.id ? 'Best tested' : `Candidate ${item.id}`,
        fixed(item.score), gain(item.scoreGain), fixed(item.scoreSe), fixed(item.cpm), fixed(item.finisherCPM),
        fixed(item.abilityCPM.rip), fixed(item.abilityCPM.bite), `${fixed(item.ripUptime)}%`,
        item.params.shiftingMode === 'automatic' ? 'Auto' : number(item.params.shiftingThreshold),
        number(item.params.biteMaxEnergy), number(item.params.biteRipOutside), number(item.params.biteRipBerserk),
        number(item.params.ripMinCP), number(item.params.biteMinCP), `${fixed(item.rakeUptime)}%`, `${fixed(item.oomPercent)}%`];
      return `<tr>${cells.map(value => `<td>${value}</td>`).join('')}</tr>`;
    }).join('');
    if (result.best.id === 0) $('#optimizer-summary').textContent += ' Current settings performed best; nothing to apply.';
    if (optimizerObjectiveStale()) $('#optimizer-status').textContent += ' Simulation settings, optimization objective or weights changed. Optimize again before applying.';
    $('#optimizer-progress').max = result.completedFights; $('#optimizer-progress').value = result.completedFights;
  }
  function optimizeRotation() {
    if (running || optimizing || exploring || comparing || weighing) return;
    $('#optimizer-results').hidden = false;
    optimizationResult = null; optimizationSnapshot = null; optimizationObjectiveSnapshot = null; optimizationApplied = false;
    $('#optimizer-table').innerHTML = ''; $('#optimizer-summary').textContent = ''; $('#optimizer-best-settings').textContent = '';
    $('#rotation-search-results').replaceChildren(); $('#rotation-export').disabled = true;
    $('#optimizer-progress').max = 1; $('#optimizer-progress').value = 0;
    optimizerBusy(false);
    try {
      const base = config();
      const parameterValues = Object.fromEntries(Object.keys(optimizer.PARAMETERS)
        .filter(key => $(`#opt-${key}-on`).checked && (key !== 'shiftingThreshold' || base.shiftingMode === 'manual' || $('#opt-shiftingMode-on')?.checked)).map(key => [key, $(`#opt-${key}-values`).value]));
      const objective = optimizerObjective();
      const options = optimizer.normalizeOptions({ preset: $('#opt-preset').value, parameterValues, ...objective });
      const searchConfig = { ...base, seed: $('#fresh-seed').checked ? freshSeed(base.seed, lastOptimizationSeed) : base.seed };
      lastOptimizationSeed = searchConfig.seed;
      optimizationSnapshot = base;
      optimizationObjectiveSnapshot = objective;
      optimizationJob = optimizer.optimize(searchConfig, options);
      const ticket = ++optimizationTicket;
      $('#optimizer-status').textContent = `Starting ${optimizer.objectiveLabel(options)} search · seed ${searchConfig.seed}. Current settings are unchanged.`;
      optimizerBusy(true);
      function pump() {
        if (ticket !== optimizationTicket || !optimizationJob) return;
        try {
          const start = Date.now();
          for (let batch = 0; batch < 8; batch++) {
            const next = optimizationJob.next();
            if (next.done) {
              optimizationResult = next.value; optimizationJob = null;
              renderOptimization(optimizationResult); optimizerBusy(false); return;
            }
            const progress = next.value;
            $('#optimizer-progress').max = progress.totalFights; $('#optimizer-progress').value = progress.completedFights;
            $('#optimizer-status').textContent = `${progress.phase} ${progress.candidateIndex}/${progress.candidateCount} · ${number(progress.completedFights)}/${number(progress.totalFights)} fights · seed ${progress.seed}.`;
            if (Date.now() - start >= 12) break;
          }
          setTimeout(pump, 0);
        } catch (error) {
          optimizationJob = null; optimizationResult = null; optimizerBusy(false);
          $('#optimizer-status').textContent = `Could not optimize: ${error.message}`;
        }
      }
      setTimeout(pump, 0);
    } catch (error) {
      $('#optimizer-status').textContent = `Could not optimize: ${error.message}`;
    }
  }
  function stopOptimization() {
    if (!optimizing) return;
    optimizationTicket++; optimizationJob?.return(); optimizationJob = null; optimizationResult = null;
    optimizerBusy(false);
    $('#optimizer-status').textContent = 'Optimization stopped. No settings or simulation results were changed.';
  }
  function applyOptimization() {
    if (!optimizationResult || optimizing || exploring || running || comparing || weighing || optimizationApplied || optimizationResult.best.id === 0) return;
    if (JSON.stringify(config()) !== JSON.stringify(optimizationSnapshot)) {
      $('#optimizer-status').textContent = 'Simulation settings changed since this search. Optimize again before applying its result.'; return;
    }
    if (optimizerObjectiveStale()) {
      $('#optimizer-status').textContent = 'Optimization objective or weights changed since this search. Optimize again before applying its result.'; return;
    }
    for (const [key, value] of Object.entries(optimizationResult.best.params)) {
      const input = $(`#config [name="${key}"]`) || $(`#${key}`);
      if (typeof value === 'boolean') input.checked = value; else input.value = String(value);
    }
    updateShiftingControls();
    optimizationApplied = true; $('#opt-apply').disabled = true;
    $('#optimizer-status').textContent = `Best tested parameters applied. Running your full simulation with optimizer seed ${optimizationResult.config.seed}.`;
    // Reproduce this search seed once, without changing the user's fresh-seed
    // preference for subsequent ordinary Runs.
    run(optimizationResult.config.seed);
  }
  function optimizerObjective() {
    return optimizer.normalizeObjective({ objective: $('#opt-objective').value,
      ripWeight: $('#opt-rip-weight').value, biteWeight: $('#opt-bite-weight').value });
  }
  function optimizerObjectiveStale() {
    try { return Boolean((optimizationSnapshot && JSON.stringify(config()) !== JSON.stringify(optimizationSnapshot)) || (optimizationObjectiveSnapshot && JSON.stringify(optimizerObjective()) !== JSON.stringify(optimizationObjectiveSnapshot))); }
    catch (_) { return true; }
  }
  function updateObjectiveControls() {
    const weighted = $('#opt-objective').value === 'weightedFinishers';
    $('#opt-rip-weight').disabled = !weighted; $('#opt-bite-weight').disabled = !weighted;
    try {
      const objective = optimizerObjective();
      $('#opt-objective-note').textContent = `${optimizer.objectiveLabel(objective)}. ${objective.objective === 'attack'
        ? 'Rake + Shred + Rip + Bite casts all count equally.' : objective.objective === 'finishers'
          ? 'Rip + Bite casts count equally; builders do not contribute to the primary score.'
          : objective.objective === 'dps' ? 'Total modeled damage divided by pooled combat seconds. Requires damage enabled with valid AP and weapon values. Sampling uncertainty does not measure mechanics uncertainty.'
          : '2:1 values each Rip twice as highly as each Bite; 1:1 values them equally. Use 0:1 to optimize Bite CPM alone. This is a preference score, not DPS.'}${objective.objective === 'dps' ? '' : ' CPM objectives count attempted casts, including avoidance.'}`;
    } catch (error) { $('#opt-objective-note').textContent = error.message; }
    if (optimizationResult && optimizerObjectiveStale()) $('#optimizer-status').textContent = 'Simulation settings, optimization objective or weights changed. Optimize again before applying its result.';
    $('#opt-apply').disabled = optimizing || exploring || running || comparing || weighing || optimizationApplied || !optimizationResult || optimizationResult.best.id === 0 || optimizerObjectiveStale();
  }
  function tradeStale() {
    try { return Boolean(tradeSnapshot && JSON.stringify(config()) !== JSON.stringify(tradeSnapshot)); }
    catch (_) { return true; } // Invalid edited inputs are never safe to apply against.
  }
  function updateTradeButtons() {
    updateBuffControls();
    updatePotionButtons();
    const busy = running || optimizing || exploring || comparing || weighing;
    window.feralDisplay?.setBusy(busy);
    updateShiftingControls();
    try {
      const c = config();
      rotationView?.sync(c, busy, { rip: sim.testing.abilityCost(c, 'rip'), rake: sim.testing.abilityCost(c, 'rake') });
    } catch (_) { /* Leave invalid fields editable; normal validation reports errors. */ }
    workbench?.setTalentBusy(busy);
    presetView?.sync();
    updateComparison();
    $('#trade-explore').disabled = busy;
    $('#trade-stop').disabled = !exploring;
    const available = tradeResult && tradeSelected !== null && !tradeStale() && !tradeApplied;
    $('#trade-validate').disabled = busy || !available;
    $('#trade-apply').disabled = busy || !available || tradeValidation?.selectedId !== tradeSelected;
    updateImportButtons();
    weightsView?.sync();
    bearView?.sync();
  }
  function tradeBusy(busy) {
    exploring = busy;
    $('#run').disabled = busy || running || optimizing; $('#replay').disabled = busy || optimizing;
    $('#optimize').disabled = busy || running || optimizing;
    $('#opt-apply').disabled = busy || optimizing || optimizationApplied || !optimizationResult || optimizationResult.best.id === 0 || optimizerObjectiveStale();
    updateTradeButtons();
  }
  const deltaText = value => `${value > 0 ? '+' : ''}${fixed(value)}`;
  const tradeName = row => row.references.length ? row.references.join(' / ') : `Candidate ${row.id}`;
  function renderTradeoffs() {
    const result = tradeResult;
    if (!result) return;
    const rows = result.rows.filter(row => row.frontier || row.references.length || row.id === tradeSelected || $('#trade-show-dominated').checked);
    $('#trade-summary').textContent = `${result.rows.filter(row => row.frontier).length} frontier candidates · ${result.space} grid combinations + deduplicated references · ${result.candidatesTested} tested · ${result.options.iterations} fights each · seed ${result.config.seed}. Both finishers: 5 CP. All deltas compare with current settings at 5 CP. No candidate is selected automatically.`;
    $('#trade-table').innerHTML = rows.map(row => `<tr class="${row.id === tradeSelected ? 'trade-selected' : ''}"><td><button type="button" data-trade-id="${row.id}" aria-pressed="${row.id === tradeSelected}">${tradeName(row)}</button><small>${row.frontier ? 'Frontier' : 'Dominated'}</small></td><td>${fixed(row.biteCPM)}</td><td>${deltaText(row.deltas.biteCPM.gain)}</td><td>${fixed(row.ripUptime)}%</td><td>${deltaText(row.deltas.ripUptime.gain)}</td><td>${fixed(row.cpm)}</td><td>${deltaText(row.deltas.attackCPM.gain)}</td><td>${number(row.params.biteMaxEnergy)}</td><td>${number(row.params.biteRipOutside)}</td><td>${number(row.params.biteRipBerserk)}</td><td>${fixed(row.landedBiteCPM)}</td><td>${fixed(row.ordinaryBiteCPM)}</td><td>${fixed(row.terminalBiteCPM)}</td><td>${fixed(row.totalCPM)}</td><td>${fixed(row.totalCasts / row.iterations)}</td><td>${fixed(row.dps)}</td><td>${row.deltas.dps ? deltaText(row.deltas.dps.gain) : '—'}</td></tr>`).join('');
    const maxX = Math.max(0.1, ...result.rows.map(row => row.biteCPM)) * 1.08;
    const minY = Math.max(0, Math.floor(Math.min(...result.rows.map(row => row.ripUptime)) / 5) * 5 - 5);
    const maxY = Math.min(100, Math.ceil(Math.max(...result.rows.map(row => row.ripUptime)) / 5) * 5 + 5);
    const low = Math.min(...result.rows.map(row => row.cpm)), high = Math.max(...result.rows.map(row => row.cpm));
    const color = value => {
      const t = high === low ? 0.5 : (value - low) / (high - low);
      return `rgb(${Math.round(92 + 140 * t)},${Math.round(175 + 10 * t)},${Math.round(224 - 119 * t)})`;
    };
    const ticks = Array.from({ length: 5 }, (_, i) => {
      const x = 65 + i * 650 / 4, y = 310 - i * 270 / 4;
      return `<path d="M${x} 40V310 M65 ${y}H715" stroke="#ffffff12"/><text x="${x}" y="332" text-anchor="middle">${fixed(maxX * i / 4)}</text><text x="55" y="${y + 4}" text-anchor="end">${fixed(minY + (maxY - minY) * i / 4)}%</text>`;
    }).join('');
    // Draw selection last so coincident outcomes remain selectable via the table.
    const points = [...rows].sort((a, b) => Number(a.id === tradeSelected) - Number(b.id === tradeSelected)).map(row => {
      const label = `${tradeName(row)}: Bite ${fixed(row.biteCPM)} CPM; Rip ${fixed(row.ripUptime)}%; attack ${fixed(row.cpm)} CPM; energy ≤${row.params.biteMaxEnergy}; safety ${row.params.biteRipOutside}/${row.params.biteRipBerserk}s`;
      return `<circle cx="${65 + row.biteCPM / maxX * 650}" cy="${310 - (row.ripUptime - minY) / (maxY - minY) * 270}" r="${row.references.length ? 7 : 5}" fill="${color(row.cpm)}" stroke="${row.id === tradeSelected ? '#fff' : '#080d0a'}" stroke-width="${row.id === tradeSelected ? 3 : 1}" opacity="${row.frontier ? 1 : 0.6}" role="button" tabindex="0" data-trade-id="${row.id}" aria-label="${label}" aria-pressed="${row.id === tradeSelected}"><title>${label}</title></circle>`;
    }).join('');
    $('#trade-chart').innerHTML = `<svg viewBox="0 0 760 370" role="group" aria-label="Bite tradeoffs plot"><text x="65" y="22">Rip uptime (full fight; zoomed axis)</text>${ticks}<path d="M65 40V310H715" fill="none" stroke="#ffffff55"/>${points}<text x="390" y="362" text-anchor="middle">Bite CPM (attempted casts)</text></svg>`;
    $('#trade-legend').textContent = `Color: blue ${fixed(low)} → gold ${fixed(high)} attack CPM. Larger points are references; white outline is your selection. Overlapping points can be selected individually in the table.`;
    const selected = result.rows.find(row => row.id === tradeSelected);
    if (!selected) { $('#trade-details').innerHTML = '<p class="panel-note">Select a candidate to inspect Bite costs and Rip recovery.</p>'; return; }
    const { counts, recovery, ripDowntime } = selected;
    const detailRows = [
      ['Experimental DPS (context only)', fixed(selected.dps)],
      ['Finisher CPM (Rip + Bite)', fixed(selected.finisherCPM)],
      ['Rip CPM / Bite CPM', `${fixed(selected.abilityCPM.rip)} / ${fixed(selected.biteCPM)}`],
      ['Energy spent / attempted Bite', fixed(selected.meanBiteEnergy)],
      ['Bites consuming Clearcasting', `${counts.clearcasting} / ${counts.attempts}`],
      ['Bites during Berserk', `${counts.berserk} / ${counts.attempts}`],
      ['Rip downtime / fight: opening', `${fixed(ripDowntime.opening / selected.iterations)}s`],
      ['Rip downtime / fight: maintenance', `${fixed(ripDowntime.maintenance / selected.iterations)}s`],
      ['Rip downtime / fight: terminal', `${fixed(ripDowntime.terminal / selected.iterations)}s`],
      ['Ordinary landed Bites: next Rip observed / censored', `${recovery.observed} / ${recovery.censored}`],
      ['Next Rip before old Rip expired (observed only)', recovery.observed ? `${fixed(recovery.onTime / recovery.observed * 100)}%` : '—'],
      ['Bite → next Rip, mean (observed only)', recovery.observed ? `${fixed(recovery.delayTotal / recovery.observed)}s` : '—'],
      ['Gap past old Rip expiration, mean per observed Bite', recovery.observed ? `${fixed(recovery.gapTotal / recovery.observed)}s` : '—'],
      ['Rake uptime / OOM rate', `${fixed(selected.rakeUptime)}% / ${fixed(selected.oomPercent)}%`]
    ];
    $('#trade-details').innerHTML = `<h3>${tradeName(selected)} · exploration diagnostics</h3><table><tbody>${detailRows.map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`).join('')}</tbody></table><p class="panel-note">Recovery is an association, not proof Bite caused a gap. Each ordinary landed Bite is linked to its next successful Rip; repeated Bites may share that Rip and gap. Censored means no subsequent Rip before fight end; excluded from recovery means. Downtime totals count each uncovered second once: opening until first Rip, then maintenance versus the final 12s. Terminal Bites use that same final-12s rule. Counts pool all exploration fights.</p>`;
  }
  function renderTradeValidation() {
    if (!tradeValidation) { $('#trade-validation').innerHTML = ''; return; }
    const v = tradeValidation;
    const metrics = [['Bite CPM', 'biteCPM', 'biteCPM'], ['Rip uptime (%) / delta (pp)', 'ripUptime', 'ripUptime'], ['Attack CPM', 'cpm', 'attackCPM']];
    if (v.deltas.dps) metrics.push(['Experimental DPS (context)', 'dps', 'dps']);
    $('#trade-validation').innerHTML = `<h3>Fresh paired validation · ${v.iterations} fights per candidate</h3><p class="panel-note">Iterations ${v.firstIteration}–${v.lastIteration}, disjoint from exploration. Compare selected settings to the current-settings reference, both at 5 CP.</p><div class="table-wrap"><table><thead><tr><th>Metric</th><th>Reference</th><th>Selected</th><th>Δ</th><th data-detail>Paired SE</th></tr></thead><tbody>${metrics.map(([name, field, delta]) => `<tr><td>${name}</td><td>${fixed(v.baseline[field])}</td><td>${fixed(v.selected[field])}</td><td>${deltaText(v.deltas[delta].gain)}</td><td data-detail>${fixed(v.deltas[delta].se)}</td></tr>`).join('')}</tbody></table></div><p class="panel-note">SE is sampling uncertainty, not a selection-corrected significance test. Validation does not change frontier membership or choose a winner. Revalidating this selection reproduces the same held-out iterations.</p>`;
  }
  function pumpTradeJob(onComplete, validation) {
    const ticket = ++tradeTicket;
    tradeBusy(true);
    function pump() {
      if (ticket !== tradeTicket || !tradeJob) return;
      try {
        const start = Date.now();
        for (let batch = 0; batch < 8; batch++) {
          const next = tradeJob.next();
          if (next.done) {
            tradeJob = null; onComplete(next.value); tradeBusy(false); return;
          }
          const p = next.value;
          $('#trade-progress').max = p.totalFights; $('#trade-progress').value = p.completedFights;
          $('#trade-status').textContent = `${p.phase} ${p.candidateIndex}/${p.candidateCount} · ${number(p.completedFights)}/${number(p.totalFights)} fights · seed ${p.seed}. Settings unchanged.`;
          if (Date.now() - start >= 12) break;
        }
        setTimeout(pump, 0);
      } catch (error) {
        tradeJob = null; tradeValidation = null;
        if (!validation) tradeResult = null;
        renderTradeValidation(); tradeBusy(false);
        $('#trade-status').textContent = `Could not ${validation ? 'validate' : 'explore'}: ${error.message}`;
      }
    }
    setTimeout(pump, 0);
  }
  function exploreBites() {
    if (running || optimizing || exploring || comparing || weighing) return;
    $('#tradeoff-results').hidden = false;
    tradeResult = null; tradeSelected = null; tradeValidation = null; tradeApplied = false; tradeSnapshot = null;
    for (const id of ['trade-chart', 'trade-table', 'trade-details', 'trade-validation']) $(`#${id}`).innerHTML = '';
    $('#trade-summary').textContent = ''; $('#trade-legend').textContent = '';
    $('#trade-progress').max = 1; $('#trade-progress').value = 0;
    updateTradeButtons();
    try {
      const base = config();
      const parameterValues = Object.fromEntries(tradeoffs.KEYS.map(key => [key, $(`#trade-${key}`).value]));
      const plan = tradeoffs.prepare(base, { parameterValues, iterations: $('#trade-iterations').value });
      const search = { ...base, seed: $('#fresh-seed').checked ? freshSeed(base.seed, lastTradeSeed) : base.seed };
      lastTradeSeed = search.seed; tradeSnapshot = base;
      tradeJob = tradeoffs.explore(search, plan.options);
      $('#trade-status').textContent = `Starting Bite exploration · seed ${search.seed}. Settings unchanged.`;
      pumpTradeJob(result => {
        tradeResult = result; renderTradeoffs();
        $('#trade-status').textContent = tradeStale() ? 'Simulation settings changed. Explore again before validating or applying.' : `Complete: ${result.candidatesTested} candidates · ${number(result.completedFights)} fights. Select a tradeoff to validate.`;
      }, false);
    } catch (error) { $('#trade-status').textContent = `Could not explore: ${error.message}`; }
  }
  function selectTrade(event) {
    if (exploring || optimizing || running || comparing || !tradeResult) return;
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
    const target = event.target.closest('[data-trade-id]');
    if (!target) return;
    const id = Number(target.getAttribute('data-trade-id'));
    if (!tradeResult.rows.some(row => row.id === id)) return;
    if (event.type === 'keydown') event.preventDefault();
    if (tradeSelected !== id) tradeValidation = null;
    tradeSelected = id; renderTradeoffs(); renderTradeValidation(); updateTradeButtons();
  }
  function validateTrade() {
    if (!tradeResult || tradeSelected === null || exploring || optimizing || running || comparing || tradeApplied) return;
    if (tradeStale()) { $('#trade-status').textContent = 'Simulation settings changed. Explore again before validating or applying.'; updateTradeButtons(); return; }
    tradeValidation = null; renderTradeValidation();
    tradeJob = tradeoffs.validate(tradeResult, tradeSelected);
    pumpTradeJob(result => {
      tradeValidation = result; renderTradeValidation();
      $('#trade-status').textContent = tradeStale() ? 'Simulation settings changed. Explore again before applying.' : 'Validation complete. Review the tradeoffs and uncertainty; Apply is an explicit choice, not a recommendation.';
    }, true);
  }
  function stopTrade() {
    if (!exploring) return;
    tradeTicket++; tradeJob?.return(); tradeJob = null; tradeValidation = null;
    renderTradeValidation(); tradeBusy(false);
    $('#trade-status').textContent = 'Stopped. No settings or simulation results changed; incomplete results cannot be applied.';
  }
  function applyTrade() {
    if (!tradeResult || !tradeValidation || tradeValidation.selectedId !== tradeSelected || tradeApplied || exploring || optimizing || running || comparing) return;
    if (tradeStale()) { $('#trade-status').textContent = 'Simulation settings changed. Explore again before applying.'; updateTradeButtons(); return; }
    const selected = tradeResult.rows.find(row => row.id === tradeSelected);
    for (const [key, value] of Object.entries(selected.params)) $(`#${key}`).value = String(value);
    tradeApplied = true; updateTradeButtons();
    $('#trade-status').textContent = `Selected Bite settings and 5-CP finishers applied. Running with exploration seed ${tradeResult.config.seed}.`;
    run(tradeResult.config.seed);
  }
  $('#trade-explore').addEventListener('click', exploreBites);
  $('#potion-compare').addEventListener('click', comparePotionStrategies);
  $('#potion-stop').addEventListener('click', stopPotions);
  $('#potion-table').addEventListener('click', selectPotion);
  $('#potion-apply').addEventListener('click', applyPotion);
  $('#trade-stop').addEventListener('click', stopTrade);
  $('#trade-validate').addEventListener('click', validateTrade);
  $('#trade-apply').addEventListener('click', applyTrade);
  $('#trade-table').addEventListener('click', selectTrade);
  $('#trade-chart').addEventListener('click', selectTrade);
  $('#trade-chart').addEventListener('keydown', selectTrade);
  $('#trade-show-dominated').addEventListener('change', renderTradeoffs);
  for (const event of ['input', 'change']) $('#config').addEventListener(event, e => {
    if (e?.target?.closest?.('.preset-toolbar') || e?.target?.id === 'talent-code') return;
    if (e?.target?.id?.startsWith('comparison-')) return; // Display/name controls are not combat settings.
    if (e?.target?.id?.startsWith('gear-') && !['gear-mode', 'gear-target-creature'].includes(e.target.id)) return;
    if (e?.target?.id?.startsWith('weights-')) return;
    updateBuffControls();
    if (['weaponMin', 'weaponMax', 'weaponSpeed'].includes(e?.target?.name)) $('#config [name="damageWeaponSource"]').value = 'Manual override (base lookup no longer authoritative)';
    try { if (lastResult) $('#results-stale').hidden = !completedRunDirty(); }
    catch (_) { $('#results-stale').hidden = false; }
    if (tradeResult && !tradeApplied && tradeStale()) $('#trade-status').textContent = 'Simulation settings changed. Explore again before validating or applying.';
    updateTradeButtons();
    updateObjectiveControls();
  });
  $('#import-preview').addEventListener('click', previewCharacter);
  $('#import-apply').addEventListener('click', applyCharacter);
  $('#import-json').addEventListener('input', () => {
    clearImportPreview(); $('#import-status').textContent = 'Export edited. Preview before applying.';
  });
  $('#import-stat-mode').addEventListener('change', () => { clearImportPreview(); $('#import-status').textContent = 'Import mode changed. Preview again.'; });
  if (gear) {
    $('#import-destination').addEventListener('change', () => { clearImportPreview(); $('#import-status').textContent = 'Import destination changed. Preview again.'; });
    $('#gear-mode').addEventListener('change', () => {
      if (running || optimizing || exploring || comparing || weighing) return;
      if ($('#gear-mode').value === 'gear') {
        try { applyGearBuild(JSON.parse($('#gear-build').value || JSON.stringify(gear.empty()))); }
        catch (error) { $('#gear-mode').value = 'totals'; $('#gear-status').textContent = error.message; }
      } else { invalidateSearches(); updateBuffControls(); updateTradeButtons(); }
    });
    gearView = window.FOREVER_FERAL_GEAR_UI?.init(document, gear, {
      raw: rawConfig, busy: () => running || optimizing || exploring || comparing || weighing, apply: applyGearBuild,
      weights: () => weightsView?.weights(), weightsApi: weights, weightsStale: () => weightsView?.stale(),
      setAreas(value) {
        if (running || optimizing || exploring || comparing || weighing) return;
        $('#gear-area-types').value = value; updateBuffControls(); invalidateSearches();
        $('#results-stale').hidden = !completedRunDirty(); updateTradeButtons(); updateObjectiveControls();
      }
    });
  }
  $('#stat-mode').addEventListener('change', updateBuffControls);
  $('#buffs-all').addEventListener('click', () => applyBuffPreset(buffs.ALL_BUFFS));
  $('#buffs-none').addEventListener('click', () => applyBuffPreset(buffs.NO_BUFFS));
  $('#debuffs-all').addEventListener('click', () => applyBuffPreset(buffs.ALL_DEBUFFS));
  $('#debuffs-none').addEventListener('click', () => applyBuffPreset(buffs.NO_DEBUFFS));
  for (const [id, other, checkbox] of [
    ['windfury', 'grace-air', true], ['grace-air', 'windfury', true],
    ['expose-armor', 'sunder-stacks', false], ['sunder-stacks', 'expose-armor', true],
    ['external-faerie-fire', 'curse-recklessness', true], ['curse-recklessness', 'external-faerie-fire', true]
  ]) $(`#${id}`).addEventListener('change', () => {
    const input = $(`#${id}`), enabled = input.type === 'checkbox' ? input.checked : Number(input.value) > 0;
    if (enabled) { if (checkbox) $(`#${other}`).checked = false; else $(`#${other}`).value = '0'; }
    updateBuffControls();
  });
  $('#import-cat-confirm').addEventListener('change', updateImportButtons);
  $('#spirit-mode').addEventListener('change', updateSpiritControls);
  updateSpiritControls();
  for (const id of ['opt-objective', 'opt-rip-weight', 'opt-bite-weight']) {
    $(`#${id}`).addEventListener('input', updateObjectiveControls);
    $(`#${id}`).addEventListener('change', updateObjectiveControls);
  }
  updateObjectiveControls();
  $('#fresh-seed').addEventListener('change', updateSeedControls);
  updateSeedControls();
  $('#shifting-mode').addEventListener('change', updateShiftingControls);
  updateShiftingControls();
  $('#use-potions').addEventListener('change', updatePotionControls);
  $('#potion-strategy').addEventListener('change', updatePotionControls);
  updatePotionControls();
  function updateStartingClearcastingControl() { $('#starting-clearcasting').disabled = !$('#omen-of-clarity').checked; }
  $('#omen-of-clarity').addEventListener('change', updateStartingClearcastingControl);
  updateStartingClearcastingControl();
  $('#log-view').addEventListener('change', updateLog);
  $('#log-autoattacks').addEventListener('change', updateLog);
  $('#log-procs').addEventListener('change', updateLog);
  $('#log-bleeds').addEventListener('change', updateLog);
  $('#mana-per-five').addEventListener('change', () => { if (lastResult) render(lastResult); });
  $('#optimize').addEventListener('click', optimizeRotation);
  $('#opt-racials-only')?.addEventListener('click', () => {
    if (running || optimizing || exploring || comparing || weighing) return;
    try {
      const c = config(), race = policies.race(c);
      if (!['NIGHT_ELF', 'HIGH_ORDER_SKYBORNE'].includes(race)) { $('#optimizer-status').textContent = 'Select Night Elf or High Order Skyborne on Gear (or the totals-mode racial selector) first.'; return; }
      const keys = race === 'NIGHT_ELF' ? ['elunesLightTiming', 'elunesLightDelay']
        : ['leyLineTiming', 'leyLineDelay', 'leyLineMana', 'leyLineEnergy', 'leyLineAvoidBerserk', 'leyLinePrepull'];
      for (const key of Object.keys(optimizer.PARAMETERS)) $(`#opt-${key}-on`).checked = keys.includes(key);
      $('#opt-objective').value = 'dps';
      updateObjectiveControls();
      $('#optimizer-status').textContent = 'Racial timing parameters selected. Current settings remain the reference; click Optimize rotation to test timing and disabled choices.';
    } catch (error) { $('#optimizer-status').textContent = error.message; }
  });
  $('#opt-stop').addEventListener('click', stopOptimization);
  $('#opt-apply').addEventListener('click', applyOptimization);
  $('#rotation-export').addEventListener('click', () => {
    if (!optimizationResult || optimizing || running || exploring || comparing || weighing) return;
    const payload = { format: 'forever-rotation-search-v1', ...optimizationResult };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = `feral-rotation-${optimizationResult.config.seed}.json`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  rotationView?.onApply(patch => {
    if (running || optimizing || exploring || comparing || weighing) return;
    sim.normalize({ ...rawConfig(), ...patch });
    for (const [key, value] of Object.entries(patch)) {
      const input = $(`#config [name="${key}"]`);
      if (typeof value === 'boolean') input.checked = value; else input.value = String(value);
    }
    invalidateSearches(); clearReplayForRestore(); updateTradeButtons(); updateObjectiveControls();
    $('#results-stale').hidden = !completedRunDirty();
  });
  loadDefaultCharacter();
  if (weights) weightsView = window.FOREVER_FERAL_WEIGHTS_UI?.init(document, weights, {
    config, busy: () => running || optimizing || exploring || comparing || weighing,
    setBusy(value) {
      weighing = value;
      for (const id of ['run', 'replay', 'optimize']) $('#' + id).disabled = value;
      updateTradeButtons(); updateObjectiveControls();
    },
    changed() { gearView?.sync(rawConfig(), config(), characterReference); updateComparison(); }
  }, window.localStorage);
  if (talents) workbench?.attachTalents({ changed: () => updateComparison(), recover: code => { presetStore?.recover(code); presetView?.sync(); }, apply(code) {
    if (running || optimizing || exploring || comparing || weighing) throw new Error('Wait for the simulation or search to finish before applying talents.');
    const previous = config();
    const proposed = sim.normalize({ ...rawConfig(), talentBuild: code }); // Validate every constraint before writing.
    if (proposed.talentBuild === previous.talentBuild) return;
    $('#config [name="talentBuild"]').value = code;
    invalidateSearches(); clearImportPreview(); clearReplayForRestore();
    updateBuffControls(); $('#results-stale').hidden = !completedRunDirty();
    updateTradeButtons(); updateObjectiveControls();
  } });
  if (window.FOREVER_FERAL_PRESETS && gear && talents) {
    let storage; try { storage = window.localStorage; } catch (_) { /* Tab-only library. */ }
    presetStore = window.FOREVER_FERAL_PRESETS.create(storage, {
      gear(slots) {
        let failure;
        for (const race of Object.keys(gear.RACES)) try { return gear.validate({ ...gear.empty(), race, slots }).slots; } catch (error) { failure = error; }
        throw failure;
      },
      talents: code => talents.encode(talents.decode(code))
    });
    presetView = window.FOREVER_FERAL_PRESETS_UI.init(document, presetStore, {
      busy: () => running || optimizing || exploring || comparing || weighing,
      available: kind => kind !== 'talents' || rawConfig().talentMode === 'build',
      capture: kind => kind === 'rotation' ? window.FOREVER_FERAL_PRESETS.captureRotation(rawConfig())
        : kind === 'gear' ? gear.validate(rawConfig().gearBuild).slots : rawConfig().talentBuild,
      apply(kind, value) {
        if (kind === 'rotation') {
          if (running || optimizing || exploring || comparing || weighing) throw new Error('Wait for the simulation or search to finish before loading a rotation.');
          const patch = window.FOREVER_FERAL_PRESETS.validateRotation(value), current = rawConfig();
          sim.normalize({ ...current, ...patch }); // Validate the whole setup before changing any control.
          let unchanged = false;
          try { unchanged = JSON.stringify(patch) === JSON.stringify(window.FOREVER_FERAL_PRESETS.captureRotation(current)); }
          catch (_) { /* A valid preset can repair unfinished/invalid rotation inputs. */ }
          if (unchanged) return;
          for (const [key, value] of Object.entries(patch)) {
            const input = $(`#config [name="${key}"]`);
            if (typeof value === 'boolean') input.checked = value; else input.value = String(value);
          }
          invalidateSearches(); clearImportPreview(); clearReplayForRestore(); updateBuffControls();
          $('#results-stale').hidden = !completedRunDirty(); updateTradeButtons(); updateObjectiveControls(); updateComparison();
        } else if (kind === 'talents') workbench.applyBuild(value);
        else { const current = gear.validate(rawConfig().gearBuild); applyGearBuild(gear.validate({ ...current, slots: value }), true); }
      }
    });
  }
  window.addEventListener('feral-display-change', () => {
    gearView?.refreshDisplay(); weightsView?.refreshDisplay?.(); updateComparison(false);
    try { workbench?.syncTalents(config()); } catch (_) { /* Preserve actionable invalid-input errors. */ }
  });
  bearView = window.FOREVER_FERAL_BEARWEAVE_UI?.mount(document, window.FOREVER_FERAL_BEARWEAVE, {
    config, busy: () => running || optimizing || exploring || comparing || weighing,
    builds: () => (presetStore?.list('talents') || []).map(b => ({ name: b.name, code: b.value })),
    setBusy(value) { weighing = value; for (const id of ['run', 'replay', 'optimize']) $('#' + id).disabled = value; updateTradeButtons(); updateObjectiveControls(); },
    apply(candidate) {
      const keys = ['talentBuild', 'biteRank', ...window.FOREVER_FERAL_PRESETS.ROTATION_KEYS];
      const patch = Object.fromEntries(keys.map(k => [k, candidate[k]]));
      sim.normalize({ ...rawConfig(), ...patch });
      for (const input of namedInputs()) if (Object.hasOwn(patch, input.name)) {
        if (input.type === 'checkbox') input.checked = patch[input.name]; else input.value = String(patch[input.name]);
      }
      invalidateSearches(); clearImportPreview(); clearReplayForRestore(); updateBuffControls();
      $('#results-stale').hidden = !completedRunDirty(); updateTradeButtons(); updateObjectiveControls(); updateComparison();
    }
  });
  optimizerBusy(false);
  defaultSetup = JSON.parse(JSON.stringify(captureSetup())); // Before saved comparison restoration or seed draws.
  $('#defaults-gear').addEventListener('click', () => requestDefaults('gear'));
  $('#defaults-settings').addEventListener('click', () => requestDefaults('settings'));
  updateTradeButtons();
  if (comparison) comparisonView = window.FOREVER_FERAL_COMPARISON_UI.init(document, comparison,
    { damage: damage.LABELS, abilities: sim.LABELS, settings: importer.LABELS }, {
      save: () => savedAction('save'), swap: () => savedAction('swap'), clear: () => savedAction('clear'), restore: () => savedAction('restore'),
      rename: (slot, label) => savedAction('rename', slot, label)
    });
  $('#run').addEventListener('click', () => run()); $('#replay').addEventListener('click', replay);
  if (!restoreSavedComparison()) run(undefined, true);
  updateComparison();
})();
