(function(root) {
  'use strict';
  function init(doc, store, callbacks) {
    const $ = id => doc.getElementById(id), sections = {}, dialog = $('preset-dialog');
    let pending = null;
    function node(tag, text) { const n = doc.createElement(tag); if (text != null) n.textContent = text; return n; }
    function status(text = '') { $('preset-status').textContent = text; }
    const kinds = { gear: { label: 'Gear sets', singular: 'gear set', contents: 'equipment' },
      talents: { label: 'Talent builds', singular: 'talent build', contents: 'talents' },
      rotation: { label: 'Rotation presets', singular: 'rotation preset', contents: 'rotation settings' } };
    for (const kind of Object.keys(kinds)) {
      const host = $('presets-' + kind), label = node('label', kinds[kind].label), select = node('select');
      select.id = 'preset-' + kind; select.setAttribute('aria-label', label.textContent); label.append(select); host.append(label);
      const buttons = {};
      for (const [action, title] of [['save', 'Save as'], ['update', 'Update'], ['rename', 'Rename'], ['delete', 'Delete']]) {
        const button = node('button', title); button.type = 'button'; button.dataset.presetAction = action; host.append(button); buttons[action] = button;
        button.addEventListener('click', () => { try { open(kind, action); } catch (error) { sections[kind].note.textContent = error.message; } });
      }
      const note = node('small'); note.className = 'preset-storage-note'; note.setAttribute('role', 'status'); host.append(note);
      sections[kind] = { select, buttons, note, selected: '' };
      select.addEventListener('change', () => {
        if (callbacks.busy()) { select.value = sections[kind].selected; return; }
        try {
          if (select.value) callbacks.apply(kind, store.get(select.value).value);
          sections[kind].selected = select.value; note.textContent = store.warning(); sync();
        } catch (error) { select.value = sections[kind].selected; note.textContent = error.message; }
      });
    }
    function sync() {
      for (const [kind, section] of Object.entries(sections)) {
        const selected = section.select.value || section.selected;
        section.select.replaceChildren(...[{ id: '', name: 'Choose saved…' }, ...store.list(kind)].map(entry => {
          const option = node('option', entry.name); option.value = String(entry.id); return option;
        }));
        section.select.value = selected; section.selected = section.select.value;
        const busy = callbacks.busy(), available = callbacks.available(kind);
        section.select.disabled = busy || !available;
        for (const [action, button] of Object.entries(section.buttons)) button.disabled = busy || (['save', 'update'].includes(action) && !available) || (action !== 'save' && !section.selected);
        section.note.textContent = store.warning();
      }
      if (dialog.open) $('preset-confirm').disabled = callbacks.busy();
    }
    function open(kind, action) {
      if (callbacks.busy()) return;
      const id = Number(sections[kind].select.value), entry = id ? store.get(id) : null;
      if (action !== 'save' && !entry) return;
      pending = { kind, action, id, value: ['save', 'update'].includes(action) ? callbacks.capture(kind) : null, overwrite: null };
      $('preset-title').textContent = ({ save: 'Save as', update: 'Update', rename: 'Rename', delete: 'Delete' })[action] + ' ' + kinds[kind].singular;
      $('preset-name-label').hidden = !['save', 'rename'].includes(action);
      $('preset-name').value = action === 'rename' ? entry.name : '';
      $('preset-prompt').textContent = action === 'update' ? `Replace “${entry.name}” with your current ${kinds[kind].contents}?` : action === 'delete' ? `Delete “${entry.name}” from saved presets?` : '';
      $('preset-confirm').textContent = action === 'delete' ? 'Delete' : action === 'update' ? 'Update' : 'Save'; status();
      dialog.showModal(); (['save', 'rename'].includes(action) ? $('preset-name') : $('preset-confirm')).focus();
    }
    function confirm() {
      if (!pending || callbacks.busy()) return;
      try {
        const { kind, action, id, value } = pending; let result;
        if (action === 'delete') { store.remove(id); sections[kind].selected = ''; sections[kind].select.value = ''; }
        else if (action === 'update') { const entry = store.get(id); result = store.save(kind, entry.name, value, id); }
        else {
          const label = $('preset-name').value, collision = store.duplicate(kind, label, action === 'rename' ? id : null);
          if (collision && pending.overwrite !== collision.id) {
            pending.overwrite = collision.id; status(`“${collision.name}” exists. Confirm overwrite to replace it.`); $('preset-confirm').textContent = 'Confirm overwrite'; return;
          }
          result = action === 'rename' ? store.rename(id, label, collision?.id) : store.save(kind, label, value, collision?.id);
        }
        if (result) { sections[kind].selected = String(result.id); sections[kind].select.value = ''; }
        pending = null; dialog.close(); sync();
      } catch (error) { status(error.message); }
    }
    $('preset-confirm').addEventListener('click', confirm);
    $('preset-cancel').addEventListener('click', () => { pending = null; dialog.close(); });
    $('preset-name').addEventListener('input', () => { if (pending) pending.overwrite = null; status(); $('preset-confirm').textContent = 'Save'; });
    $('preset-name').addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); confirm(); } });
    dialog.addEventListener('close', () => { pending = null; });
    sync(); return { sync };
  }
  const api = { init };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FOREVER_FERAL_PRESETS_UI = api;
})(globalThis);
