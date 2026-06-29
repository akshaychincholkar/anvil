import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Plus, X, Check, Pencil, PartyPopper, Columns3, GripVertical } from "lucide-react";
import { api } from "../api.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";

function useIsMobile(bp = 760) {
  const [m, setM] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const h = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
}

const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
const fmtDate = (iso) => iso ? new Date(iso + "T00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";

const ACCENT = "#C9772E";
const STATUSES = [
  { id: "todo",  label: "Want to",   color: "#3A7CA5" },
  { id: "doing", label: "Enjoying",  color: "#C9772E" },
  { id: "done",  label: "Satisfied", color: "#4C9A6B" },
];
const COL_TYPES = [
  { id: "text",   label: "Text" },
  { id: "number", label: "Number" },
  { id: "link",   label: "Link" },
];
const colType = (col) => (col && typeof col === "object" ? col.type : "text") || "text";
const colName = (col) => (col && typeof col === "object" ? col.name : col) || "";

export default function DelightScreen() {
  const isMobile = useIsMobile();
  const [data, setData] = useState([]);
  const [selId, setSelId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [colForm, setColForm] = useState(null);
  const [itemForm, setItemForm] = useState(null);
  const [completeForm, setCompleteForm] = useState(null); // { item, date, note } when moving to Satisfied
  const [drag, setDrag] = useState(null);    // floating ghost { id, item, x, y, w, offX, offY }
  const [target, setTarget] = useState(null); // { status, index }
  const [activeTags, setActiveTags] = useState([]); // tag filter (empty = show all)
  const laneRefs = useRef({});

  const load = useCallback(() => {
    api.getDelight().then((d) => {
      setData(d);
      setSelId((cur) => (cur && d.some((c) => c.id === cur) ? cur : (d[0]?.id ?? null)));
      setLoaded(true);
    }).catch(() => setLoaded(true));
  }, []);
  useEffect(() => { load(); }, [load]);
  useEffect(() => { setActiveTags([]); }, [selId]); // clear filter when switching lists

  const { deleteItem: softDeleteItem, toasts, handleUndo, handleDismiss } = useUndoableDelete(
    api.deleteDelightItem, api.restoreDelightItem, load
  );

  const selected = data.find((c) => c.id === selId) || null;

  const groups = useMemo(() => {
    const g = { todo: [], doing: [], done: [] };
    (selected?.items || []).forEach((it) => { (g[it.status] || g.todo).push(it); });
    Object.values(g).forEach((arr) => arr.sort((a, b) => (a.position - b.position) || (a.id - b.id)));
    return g;
  }, [selected]);

  // ── Tags ──
  const isTagCol = (col) => /^tags?$/i.test(colName(col).trim());
  const itemTags = (it) => (selected?.columns || []).filter(isTagCol)
    .flatMap((col) => (it.fields[colName(col)] || "").split(",").map((t) => t.trim()).filter(Boolean));
  const allTags = useMemo(() => {
    const set = new Set();
    (selected?.items || []).forEach((it) => (selected.columns || []).filter(isTagCol)
      .forEach((col) => (it.fields[colName(col)] || "").split(",").map((t) => t.trim()).filter(Boolean).forEach((t) => set.add(t))));
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [selected]);

  // ── Per-column value suggestions (so re-typing the same value isn't needed) ──
  const columnSuggestions = useMemo(() => {
    const map = {};
    (selected?.columns || []).forEach((col) => {
      const name = colName(col);
      if (isTagCol(col)) return; // tags are comma-separated, suggest individual tags instead
      const set = new Set();
      (selected?.items || []).forEach((it) => { const v = (it.fields[name] || "").trim(); if (v) set.add(v); });
      map[name] = [...set].sort((a, b) => a.localeCompare(b));
    });
    return map;
  }, [selected]);
  const matchesFilter = (it) => activeTags.length === 0 || itemTags(it).some((t) => activeTags.includes(t));
  const toggleTag = (t) => setActiveTags((a) => (a.includes(t) ? a.filter((x) => x !== t) : [...a, t]));

  // ── Drag & drop (pointer-based: works on touch + mouse) ──
  const computeTarget = (x, y, dragId) => {
    for (const s of STATUSES) {
      const el = laneRefs.current[s.id];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
        const cards = [...el.querySelectorAll("[data-card]")].filter((c) => c.dataset.id !== String(dragId));
        let index = cards.length;
        for (let i = 0; i < cards.length; i++) {
          const cr = cards[i].getBoundingClientRect();
          if (y < cr.top + cr.height / 2) { index = i; break; }
        }
        return { status: s.id, index };
      }
    }
    return null;
  };

  const startDrag = (e, item) => {
    if (e.target.closest("button")) return; // let edit/delete buttons work
    const startX = e.clientX, startY = e.clientY;
    const el = e.currentTarget;
    let started = false, curTarget = null, ghost = null;

    const move = (ev) => {
      if (!started) {
        if (Math.hypot(ev.clientX - startX, ev.clientY - startY) < 6) return;
        started = true;
        const r = el.getBoundingClientRect();
        ghost = { id: item.id, item, w: r.width, offX: startX - r.left, offY: startY - r.top };
      }
      ghost = { ...ghost, x: ev.clientX, y: ev.clientY };
      setDrag(ghost);
      curTarget = computeTarget(ev.clientX, ev.clientY, item.id) || curTarget;
      setTarget(curTarget);
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      if (started && curTarget) commitDrop(item, curTarget);
      setDrag(null); setTarget(null);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const commitDrop = (item, t) => {
    const g = {};
    STATUSES.forEach((s) => { g[s.id] = (groups[s.id] || []).filter((it) => it.id !== item.id); });
    const arr = g[t.status] || [];
    // t.index is relative to the visible (possibly filtered) cards — map it back to the full list.
    let idx;
    if (activeTags.length) {
      const visible = arr.filter(matchesFilter);
      idx = t.index < visible.length ? arr.indexOf(visible[t.index]) : arr.length;
    } else {
      idx = Math.max(0, Math.min(t.index, arr.length));
    }
    g[t.status] = [...arr.slice(0, idx), { ...item, status: t.status }, ...arr.slice(idx)];
    const order = [];
    STATUSES.forEach((s) => (g[s.id] || []).forEach((it, i) => order.push({ id: it.id, status: s.id, position: i })));
    // optimistic update so the card snaps into place without waiting on the server
    setData((prev) => prev.map((c) => c.id === selId
      ? { ...c, items: order.map((o) => ({ ...c.items.find((x) => x.id === o.id), status: o.status, position: o.position })) }
      : c));
    api.arrangeDelight(selId, order).then(load).catch(load);
    // Just moved into Satisfied → ask for completion date + optional comment.
    if (t.status === "done" && item.status !== "done") {
      setCompleteForm({ item, date: todayISO(), note: "" });
    }
  };

  const deleteCollection = async (c) => {
    if (!window.confirm(`Delete "${c.name}" and all its items?`)) return;
    await api.deleteCollection(c.id);
    load();
  };

  // ── Collection add/edit ──
  const blankCol = () => ({ name: "", type: "text" });
  const openAddCollection = () => setColForm({ id: null, name: "", columns: [blankCol(), blankCol()] });
  const openEditCollection = (c) => setColForm({
    id: c.id, name: c.name,
    columns: c.columns.length ? c.columns.map((col) => ({ name: colName(col), type: colType(col) })) : [blankCol()],
  });
  const saveCollection = async () => {
    const name = colForm.name.trim();
    if (!name) return;
    const columns = colForm.columns.map((c) => ({ name: c.name.trim(), type: c.type || "text" })).filter((c) => c.name);
    if (colForm.id) await api.updateCollection(colForm.id, { name, columns });
    else await api.createCollection({ name, columns });
    setColForm(null);
    load();
  };

  // ── Item add/edit ──
  const openAddItem = (status = "todo") => setItemForm({ id: null, name: "", fields: {}, status });
  const openEditItem = (it) => setItemForm({ id: it.id, name: it.name, fields: { ...it.fields }, status: it.status });
  const saveItem = async () => {
    const name = itemForm.name.trim();
    if (!name || !selected) return;
    // Was this item already in Satisfied before saving?
    const prev = itemForm.id ? (selected.items || []).find((x) => x.id === itemForm.id) : null;
    const wasDone = prev?.status === "done";
    const payload = { name, fields: itemForm.fields, status: itemForm.status };
    let saved;
    if (itemForm.id) saved = await api.updateDelightItem(itemForm.id, payload);
    else saved = await api.createDelightItem(selected.id, payload);
    setItemForm(null);
    await load();
    // Newly entered Satisfied → prompt for completion date + comment.
    if (itemForm.status === "done" && !wasDone) {
      const justSaved = findItemInData(saved, selected.id, name);
      setCompleteForm({ item: justSaved || { id: itemForm.id, name }, date: todayISO(), note: "" });
    }
  };

  // Locate the saved item id in a returned collections payload (create returns no id directly).
  const findItemInData = (payload, collectionId, name) => {
    const coll = Array.isArray(payload) ? payload.find((c) => c.id === collectionId) : null;
    if (!coll) return null;
    const matches = (coll.items || []).filter((it) => it.name === name && it.status === "done");
    return matches.length ? matches[matches.length - 1] : null;
  };

  const saveCompletion = async () => {
    if (!completeForm?.item?.id) { setCompleteForm(null); return; }
    await api.updateDelightItem(completeForm.item.id, {
      completed_date: completeForm.date || todayISO(),
      completion_note: completeForm.note || "",
    });
    setCompleteForm(null);
    load();
  };

  const Card = ({ it }) => {
    const detailCols = selected.columns.filter((col) => it.fields[colName(col)] && !isTagCol(col));
    const tags = itemTags(it);
    return (
      <div data-card data-id={it.id} onPointerDown={(e) => startDrag(e, it)} style={S.itemCard}>
        <div style={S.itemCardTop}>
          <GripVertical size={13} style={{ color: "var(--text-3)", flexShrink: 0 }} />
          <span style={S.itemName}>{it.name}</span>
          <button onClick={() => openEditItem(it)} style={S.ghostBtn}><Pencil size={12} /></button>
          <button onClick={() => softDeleteItem(it.id, it.name)} style={S.ghostBtn}><X size={13} /></button>
        </div>
        {detailCols.map((col) => {
          const name = colName(col);
          const val = it.fields[name];
          return (
            <div key={name} style={S.itemField}>
              <span style={S.fieldLabel}>{name}</span>
              {colType(col) === "link" ? (
                <a href={/^https?:\/\//i.test(val) ? val : `https://${val}`} target="_blank" rel="noreferrer"
                  style={{ minWidth: 0, wordBreak: "break-word", color: ACCENT }} onClick={(e) => e.stopPropagation()}>{val}</a>
              ) : (
                <span style={{ minWidth: 0, wordBreak: "break-word" }}>{val}</span>
              )}
            </div>
          );
        })}
        {tags.length > 0 && (
          <div style={S.tagWrap}>
            {tags.map((t, i) => <span key={i} style={S.tag}>{t}</span>)}
          </div>
        )}
        {it.status === "done" && it.completed_date && (
          <div style={S.doneMeta}>
            <span style={S.doneDate}>✓ {fmtDate(it.completed_date)}</span>
            {it.completion_note && <span style={S.doneNote}>{it.completion_note}</span>}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Delights</div>
          <h1 style={S.h1}>Delights</h1>
          <div style={S.subhead}>Books, films, places, food — track what you want to enjoy and how you felt.</div>
        </div>
        <button onClick={openAddCollection} style={S.addColBtn}><Plus size={15} /> New list</button>
      </div>

      <div style={S.tabs}>
        {data.map((c) => (
          <button key={c.id} onClick={() => setSelId(c.id)}
            style={{ ...S.tab, ...(c.id === selId ? S.tabOn : {}) }}>
            {c.name}<span style={S.tabCount}>{c.items.length}</span>
          </button>
        ))}
        <button onClick={openAddCollection} style={S.tabAdd} title="New list"><Plus size={15} /></button>
      </div>

      {!loaded ? (
        <div style={S.muted}>Loading…</div>
      ) : !selected ? (
        <div style={S.empty}>
          <PartyPopper size={28} color="var(--text-3)" />
          <div style={{ marginTop: 10 }}>No lists yet.</div>
          <button onClick={openAddCollection} style={{ ...S.addColBtn, marginTop: 14 }}><Plus size={15} /> Create your first list</button>
        </div>
      ) : (
        <div>
          <div style={S.colHead}>
            <h2 style={S.colTitle}>{selected.name}</h2>
            <div style={S.colActions}>
              <button onClick={() => openAddItem()} style={S.primaryBtn}><Plus size={14} /> Add</button>
              <button onClick={() => openEditCollection(selected)} style={S.ghostBtn} title="Edit list & columns"><Columns3 size={15} /></button>
              <button onClick={() => deleteCollection(selected)} style={S.ghostBtn} title="Delete list"><X size={16} /></button>
            </div>
          </div>

          {/* Tag filter */}
          {allTags.length > 0 && (
            <div style={S.filterBar}>
              <span style={S.filterLabel}>Tags</span>
              <button onClick={() => setActiveTags([])}
                style={{ ...S.filterChip, ...(activeTags.length === 0 ? S.filterChipOn : {}) }}>All</button>
              {allTags.map((t) => (
                <button key={t} onClick={() => toggleTag(t)}
                  style={{ ...S.filterChip, ...(activeTags.includes(t) ? S.filterChipOn : {}) }}>{t}</button>
              ))}
            </div>
          )}

          {/* Kanban board */}
          <div style={{ ...S.board, gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)" }}>
            {STATUSES.map((s) => {
              const all = (groups[s.id] || []).filter(matchesFilter);
              const list = drag ? all.filter((it) => it.id !== drag.id) : all;
              const isTarget = target && target.status === s.id;
              return (
                <div key={s.id} ref={(el) => (laneRefs.current[s.id] = el)}
                  style={{ ...S.lane, ...(isTarget ? { outline: `2px dashed ${s.color}`, outlineOffset: -2 } : {}) }}>
                  <div style={S.laneHead}>
                    <span style={{ ...S.laneDot, background: s.color }} />
                    <span style={S.laneLabel}>{s.label}</span>
                    <span style={S.laneCount}>{all.length}</span>
                    <button onClick={() => openAddItem(s.id)} style={S.laneAdd} title={`Add to ${s.label}`}><Plus size={13} /></button>
                  </div>
                  <div style={S.laneBody}>
                    {list.map((it, i) => (
                      <div key={it.id}>
                        {isTarget && target.index === i && <div style={{ ...S.insertLine, background: s.color }} />}
                        <Card it={it} />
                      </div>
                    ))}
                    {isTarget && target.index >= list.length && <div style={{ ...S.insertLine, background: s.color }} />}
                    {list.length === 0 && !isTarget && <div style={S.laneEmpty}>Drop here</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating drag ghost */}
      {drag && (
        <div style={{ ...S.ghost, width: drag.w, left: drag.x - drag.offX, top: drag.y - drag.offY }}>
          <div style={S.itemCardTop}>
            <GripVertical size={13} style={{ color: "var(--text-3)", flexShrink: 0 }} />
            <span style={S.itemName}>{drag.item.name}</span>
          </div>
        </div>
      )}

      {/* Collection add/edit modal */}
      {colForm && (
        <div style={S.overlay} onClick={() => setColForm(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>{colForm.id ? "Edit list" : "New list"}</span>
              <button onClick={() => setColForm(null)} style={S.iconBtn}><X size={16} /></button>
            </div>
            <label style={S.label}>List name *</label>
            <input autoFocus value={colForm.name} onChange={(e) => setColForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="e.g. Gardens, Cafés, Trips…" style={S.input} />

            <label style={S.label}>Columns</label>
            <div style={S.muted2}>Name the details you want to track (e.g. Author, Distance, Tag).</div>
            {colForm.columns.map((col, i) => (
              <div key={i} style={S.colRow}>
                <input value={col.name} placeholder={`Column ${i + 1}`}
                  onChange={(e) => setColForm((f) => { const c = [...f.columns]; c[i] = { ...c[i], name: e.target.value }; return { ...f, columns: c }; })}
                  style={{ ...S.input, marginBottom: 0, flex: 1 }} />
                <select value={col.type} onChange={(e) => setColForm((f) => { const c = [...f.columns]; c[i] = { ...c[i], type: e.target.value }; return { ...f, columns: c }; })}
                  style={S.colTypeSelect}>
                  {COL_TYPES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
                </select>
                <button onClick={() => setColForm((f) => ({ ...f, columns: f.columns.filter((_, j) => j !== i) }))} style={S.iconBtn}><X size={14} /></button>
              </div>
            ))}
            {colForm.columns.length < 6 && (
              <button onClick={() => setColForm((f) => ({ ...f, columns: [...f.columns, blankCol()] }))} style={S.addColInline}><Plus size={13} /> Add column</button>
            )}

            <div style={S.modalActions}>
              <button onClick={() => setColForm(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveCollection} disabled={!colForm.name.trim()}
                style={{ ...S.saveBtn, ...(!colForm.name.trim() ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> {colForm.id ? "Save" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Item add/edit modal */}
      {itemForm && selected && (
        <div style={S.overlay} onClick={() => setItemForm(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>{itemForm.id ? "Edit" : `Add to ${selected.name}`}</span>
              <button onClick={() => setItemForm(null)} style={S.iconBtn}><X size={16} /></button>
            </div>
            <label style={S.label}>Name *</label>
            <input autoFocus value={itemForm.name} onChange={(e) => setItemForm((f) => ({ ...f, name: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && saveItem()} placeholder="Title / name" style={S.input} />

            {selected.columns.map((col) => {
              const name = colName(col);
              const type = colType(col);
              const listId = `dl-${selected.id}-${name}`;
              const suggestions = columnSuggestions[name] || [];
              return (
                <div key={name}>
                  <label style={S.label}>{name}</label>
                  <input
                    value={itemForm.fields[name] || ""}
                    type={type === "number" ? "number" : type === "link" ? "url" : "text"}
                    list={suggestions.length ? listId : undefined}
                    onChange={(e) => setItemForm((f) => ({ ...f, fields: { ...f.fields, [name]: e.target.value } }))}
                    placeholder={type === "link" ? "https://…" : name}
                    style={S.input}
                  />
                  {suggestions.length > 0 && (
                    <datalist id={listId}>
                      {suggestions.map((v) => <option key={v} value={v} />)}
                    </datalist>
                  )}
                </div>
              );
            })}

            <label style={S.label}>Status</label>
            <div style={S.statusPick}>
              {STATUSES.map((s) => (
                <button key={s.id} type="button" onClick={() => setItemForm((f) => ({ ...f, status: s.id }))}
                  style={{ ...S.statusChip, ...(itemForm.status === s.id ? { background: s.color, color: "#fff", border: `1px solid ${s.color}` } : {}) }}>
                  {s.label}
                </button>
              ))}
            </div>

            <div style={S.modalActions}>
              <button onClick={() => setItemForm(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveItem} disabled={!itemForm.name.trim()}
                style={{ ...S.saveBtn, ...(!itemForm.name.trim() ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> {itemForm.id ? "Save" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Completion prompt (date + optional comment) when an item becomes Satisfied */}
      {completeForm && (
        <div style={S.overlay} onClick={() => setCompleteForm(null)}>
          <div style={{ ...S.modal, maxWidth: 380 }} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>Satisfied! 🎉</span>
              <button onClick={() => setCompleteForm(null)} style={S.iconBtn}><X size={16} /></button>
            </div>
            <div style={S.muted2}>"{completeForm.item.name}" — when did you complete it?</div>
            <label style={S.label}>Completed on</label>
            <input type="date" value={completeForm.date} max={todayISO()}
              onChange={(e) => setCompleteForm((f) => ({ ...f, date: e.target.value }))} style={S.input} />
            <label style={S.label}>Comment (optional)</label>
            <textarea value={completeForm.note} onChange={(e) => setCompleteForm((f) => ({ ...f, note: e.target.value }))}
              placeholder="How was it?" style={{ ...S.input, minHeight: 64, resize: "vertical" }} />
            <div style={S.modalActions}>
              <button onClick={() => setCompleteForm(null)} style={S.cancelBtn}>Skip</button>
              <button onClick={saveCompletion} style={S.saveBtn}><Check size={15} /> Save</button>
            </div>
          </div>
        </div>
      )}

      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "26px 22px", color: "var(--text)", boxSizing: "border-box" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 12.5, color: "var(--text-3)", marginTop: 3 },
  addColBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "none", background: ACCENT, color: "#fff", padding: "8px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },

  tabs: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16, alignItems: "center" },
  tab: { display: "inline-flex", alignItems: "center", gap: 7, border: "1px solid var(--border)", background: "var(--surface)", padding: "7px 13px", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit" },
  tabOn: { background: ACCENT, color: "#fff", borderColor: ACCENT },
  tabCount: { fontSize: 10.5, fontWeight: 700, background: "rgba(0,0,0,0.12)", borderRadius: 9, padding: "1px 6px" },
  tabAdd: { border: "1px dashed var(--border)", background: "none", color: "var(--text-2)", width: 32, height: 32, borderRadius: "50%", cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },

  colHead: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" },
  colTitle: { fontSize: 18, fontWeight: 700, margin: 0, fontFamily: "'Fraunces',Georgia,serif" },
  colActions: { display: "flex", gap: 6, alignItems: "center" },
  primaryBtn: { display: "inline-flex", alignItems: "center", gap: 5, border: "none", background: ACCENT, color: "#fff", padding: "7px 13px", borderRadius: 8, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  ghostBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 3, display: "grid", placeItems: "center", borderRadius: 6, flexShrink: 0 },

  filterBar: { display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", marginBottom: 14 },
  filterLabel: { fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-3)", marginRight: 2 },
  filterChip: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "5px 11px", borderRadius: 16, fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  filterChipOn: { background: ACCENT, color: "#fff", borderColor: ACCENT },
  board: { display: "grid", gap: 12, alignItems: "start" },
  lane: { background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 12, padding: "10px 10px 12px", minHeight: 120, display: "flex", flexDirection: "column" },
  laneHead: { display: "flex", alignItems: "center", gap: 7, padding: "2px 4px 10px" },
  laneDot: { width: 9, height: 9, borderRadius: "50%", flexShrink: 0 },
  laneLabel: { fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-2)" },
  laneCount: { fontSize: 10.5, fontWeight: 700, color: "var(--text-3)", background: "var(--hover)", borderRadius: 9, padding: "1px 6px" },
  laneAdd: { marginLeft: "auto", border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", display: "grid", placeItems: "center", padding: 2, borderRadius: 6 },
  laneBody: { display: "flex", flexDirection: "column", gap: 8, minHeight: 40, flex: 1 },
  laneEmpty: { fontSize: 12, color: "var(--text-3)", fontStyle: "italic", textAlign: "center", padding: "16px 0", border: "1px dashed var(--border)", borderRadius: 8 },
  insertLine: { height: 3, borderRadius: 2, margin: "1px 0" },

  itemCard: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: "9px 10px", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", cursor: "grab", touchAction: "none", userSelect: "none" },
  itemCardTop: { display: "flex", alignItems: "center", gap: 6 },
  itemName: { flex: 1, minWidth: 0, fontSize: 13.5, fontWeight: 700, wordBreak: "break-word" },
  itemField: { display: "flex", gap: 8, fontSize: 12, color: "var(--text-2)", marginTop: 5, paddingLeft: 19 },
  fieldLabel: { fontWeight: 700, color: "var(--text-3)", minWidth: 64, flexShrink: 0 },
  tagWrap: { display: "flex", flexWrap: "wrap", gap: 5, marginTop: 8, paddingLeft: 19 },
  tag: { fontSize: 10.5, fontWeight: 700, color: ACCENT, background: "color-mix(in srgb, " + ACCENT + " 14%, transparent)", border: "1px solid color-mix(in srgb, " + ACCENT + " 30%, transparent)", borderRadius: 12, padding: "2px 8px", whiteSpace: "nowrap" },
  doneMeta: { marginTop: 8, paddingLeft: 19, display: "flex", flexDirection: "column", gap: 3 },
  doneDate: { fontSize: 11, fontWeight: 700, color: "#4C9A6B" },
  doneNote: { fontSize: 11.5, color: "var(--text-2)", fontStyle: "italic", wordBreak: "break-word" },

  ghost: { position: "fixed", zIndex: 300, pointerEvents: "none", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: "9px 10px", boxShadow: "0 8px 28px rgba(0,0,0,0.28)", opacity: 0.95, transform: "rotate(1.5deg)" },

  muted: { fontSize: 13, color: "var(--text-3)" },
  muted2: { fontSize: 11.5, color: "var(--text-3)", marginBottom: 8 },
  empty: { textAlign: "center", color: "var(--text-3)", padding: "50px 16px", fontSize: 14, fontWeight: 600, display: "flex", flexDirection: "column", alignItems: "center" },

  overlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.5)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  modal: { background: "var(--surface)", borderRadius: 16, padding: "20px 20px 18px", width: "100%", maxWidth: 440, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 12px 48px rgba(0,0,0,0.22)", boxSizing: "border-box" },
  modalHead: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  modalTitle: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  iconBtn: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  label: { display: "block", fontSize: 11.5, fontWeight: 700, color: "var(--text-2)", margin: "10px 0 5px", textTransform: "uppercase", letterSpacing: "0.04em" },
  input: { width: "100%", border: "1px solid var(--border)", borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "var(--bg)", color: "var(--text)", marginBottom: 8 },
  colRow: { display: "flex", gap: 6, alignItems: "center", marginBottom: 8 },
  colTypeSelect: { border: "1px solid var(--border)", borderRadius: 9, padding: "9px 8px", fontSize: 12.5, fontFamily: "inherit", outline: "none", background: "var(--bg)", color: "var(--text)", flexShrink: 0 },
  addColInline: { display: "inline-flex", alignItems: "center", gap: 5, border: "1px dashed var(--border)", background: "none", color: "var(--text-2)", padding: "7px 12px", borderRadius: 8, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  statusPick: { display: "flex", gap: 6, flexWrap: "wrap" },
  statusChip: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "7px 13px", borderRadius: 18, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  modalActions: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 },
  cancelBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "#4C9A6B", color: "#fff", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};
