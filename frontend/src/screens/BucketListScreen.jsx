import { useState, useEffect, useCallback, useMemo } from "react";
import { Plus, X, Check, Pencil, ChevronUp, ChevronDown, Sparkles, ExternalLink, PartyPopper } from "lucide-react";
import { api } from "../api.js";
import { useCurrency, fmtMoney2 } from "../currency.js";
import HelpButton from "../components/HelpButton.jsx";

const ACCENT = "#8268B0";
const GREEN = "#4C9A6B";

const prettyDate = (s) => s ? new Date(s + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";

const blankForm = () => ({ id: null, wish: "", cost: "", note: "", link: "" });

export default function BucketListScreen() {
  const cur = useCurrency();
  const money = (n) => fmtMoney2(n, cur.code);

  const [wishes, setWishes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState(null);

  const load = useCallback(() => {
    api.getBucket().then((d) => { setWishes(Array.isArray(d) ? d : []); setLoaded(true); }).catch(() => setLoaded(true));
  }, []);
  useEffect(() => { load(); }, [load]);

  const totals = useMemo(() => {
    const open = wishes.filter((w) => !w.fulfilled);
    return {
      total: wishes.length,
      fulfilled: wishes.filter((w) => w.fulfilled).length,
      openCost: open.reduce((n, w) => n + (w.cost || 0), 0),
    };
  }, [wishes]);

  // ── Add / edit ──
  const openAdd = () => setForm(blankForm());
  const openEdit = (w) => setForm({ id: w.id, wish: w.wish, cost: String(w.cost ?? ""), note: w.note || "", link: w.link || "" });
  const saveForm = async () => {
    const wish = form.wish.trim();
    if (!wish) return;
    const payload = { wish, cost: parseFloat(form.cost) || 0, note: form.note.trim(), link: form.link.trim() };
    if (form.id) await api.updateBucketWish(form.id, payload);
    else await api.createBucketWish(payload);
    setForm(null);
    load();
  };
  const remove = async (w) => {
    if (!window.confirm(`Delete "${w.wish}" from your bucket list?`)) return;
    await api.deleteBucketWish(w.id);
    load();
  };
  const toggleFulfilled = async (w) => {
    await api.updateBucketWish(w.id, { fulfilled: !w.fulfilled });
    load();
  };

  // Priority reorder — move one slot up/down and persist immediately.
  const moveWish = async (index, dir) => {
    const next = index + dir;
    if (next < 0 || next >= wishes.length) return;
    const reordered = [...wishes];
    [reordered[index], reordered[next]] = [reordered[next], reordered[index]];
    setWishes(reordered);
    await api.arrangeBucket(reordered.map((w) => w.id)).catch(() => {});
    load();
  };

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Bucket List</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h1 style={S.h1}>Bucket List</h1>
          <HelpButton id="bucket-list" />
        </div>
        <div style={S.subhead}>The materialistic wishes you want to fulfil, big or small — ordered by what matters most.</div>
      </div>

      <div style={S.statRow}>
        <div style={S.statCard}><div style={S.statVal}>{totals.total}</div><div style={S.statLbl}>Wishes</div></div>
        <div style={S.statCard}><div style={{ ...S.statVal, color: GREEN }}>{totals.fulfilled}</div><div style={S.statLbl}>Fulfilled</div></div>
        <div style={S.statCard}><div style={{ ...S.statVal, color: ACCENT }}>{money(totals.openCost)}</div><div style={S.statLbl}>Still wished</div></div>
      </div>

      <button onClick={openAdd} style={S.addBtn}><Plus size={16} /> New wish</button>

      {wishes.length === 0 ? (
        <div style={S.empty}>{loaded ? "No wishes yet. Add the first thing you'd love to have." : "Loading…"}</div>
      ) : (
        <div style={S.list}>
          {wishes.map((w, i) => (
            <div key={w.id} style={{ ...S.card, ...(w.fulfilled ? S.cardDone : {}) }}>
              <div style={S.reorderCol}>
                <button onClick={() => moveWish(i, -1)} disabled={i === 0}
                  style={{ ...S.reorderBtn, ...(i === 0 ? S.reorderOff : {}) }} title="Higher priority"><ChevronUp size={14} /></button>
                <span style={S.rank}>{i + 1}</span>
                <button onClick={() => moveWish(i, 1)} disabled={i === wishes.length - 1}
                  style={{ ...S.reorderBtn, ...(i === wishes.length - 1 ? S.reorderOff : {}) }} title="Lower priority"><ChevronDown size={14} /></button>
              </div>

              <div style={S.body}>
                <div style={S.topRow}>
                  <span style={{ ...S.wishName, ...(w.fulfilled ? S.wishNameDone : {}) }}>{w.wish}</span>
                  <span style={S.cost}>{money(w.cost)}</span>
                </div>
                {w.note && <div style={S.note}>{w.note}</div>}
                <div style={S.metaRow}>
                  {w.fulfilled && (
                    <span style={S.doneBadge}><PartyPopper size={11} /> Fulfilled{w.fulfilled_date ? ` · ${prettyDate(w.fulfilled_date)}` : ""}</span>
                  )}
                  {w.link && (
                    <a href={w.link} target="_blank" rel="noreferrer" style={S.link}><ExternalLink size={11} /> Link</a>
                  )}
                </div>
              </div>

              <div style={S.actions}>
                <button onClick={() => toggleFulfilled(w)}
                  style={{ ...S.pill, ...(w.fulfilled ? {} : { color: GREEN, borderColor: GREEN + "66" }) }}
                  title={w.fulfilled ? "Mark as not fulfilled" : "Mark fulfilled"}>
                  <Check size={13} /> {w.fulfilled ? "Undo" : "Fulfilled"}
                </button>
                <button onClick={() => openEdit(w)} style={S.iconBtn} title="Edit"><Pencil size={13} /></button>
                <button onClick={() => remove(w)} style={S.iconBtn} title="Delete"><X size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={S.footNote}>Enable “Fulfil from bucket list” in the Rewards screen to spend your pending reward on these wishes.</div>

      {/* Add / edit modal */}
      {form && (
        <div style={S.overlay} onClick={() => setForm(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>{form.id ? "Edit wish" : "New wish"}</span>
              <button onClick={() => setForm(null)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>

            <label style={S.label}>Wish *</label>
            <input autoFocus value={form.wish} onChange={(e) => setForm((f) => ({ ...f, wish: e.target.value }))}
              placeholder="e.g. PlayStation 5, trip to Japan" style={S.input} />

            <label style={S.label}>Cost</label>
            <input type="number" inputMode="decimal" value={form.cost}
              onChange={(e) => setForm((f) => ({ ...f, cost: e.target.value }))} placeholder="0" style={S.input} />

            <label style={S.label}>Link (optional)</label>
            <input value={form.link} onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))}
              placeholder="https://…" style={S.input} />

            <label style={S.label}>Note (optional)</label>
            <input value={form.note} onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
              placeholder="colour, model, why you want it…" style={S.input} />

            <div style={S.modalActions}>
              <button onClick={() => setForm(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveForm} disabled={!form.wish.trim()}
                style={{ ...S.saveBtn, ...(!form.wish.trim() ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> {form.id ? "Save" : "Add wish"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 20px 40px", color: "var(--text)", boxSizing: "border-box", maxWidth: 720, margin: "0 auto" },
  head: { marginBottom: 16 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },

  statRow: { display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" },
  statCard: { flex: 1, minWidth: 110, background: "var(--surface)", borderRadius: 12, padding: "12px 14px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)" },
  statVal: { fontSize: 20, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  statLbl: { fontSize: 11, color: "var(--text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 },

  addBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "none", background: ACCENT, color: "#fff", padding: "10px 16px", borderRadius: 10, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginBottom: 16 },
  empty: { fontSize: 13.5, color: "var(--text-3)", textAlign: "center", padding: "40px 0", background: "var(--surface)", borderRadius: 16, border: "1px dashed var(--border)" },

  list: { display: "flex", flexDirection: "column", gap: 10 },
  card: { display: "flex", gap: 12, alignItems: "stretch", background: "var(--surface)", borderRadius: 14, padding: "12px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)" },
  cardDone: { opacity: 0.7 },
  reorderCol: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, flexShrink: 0 },
  reorderBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", width: 24, height: 20, borderRadius: 6, cursor: "pointer", display: "grid", placeItems: "center", padding: 0 },
  reorderOff: { opacity: 0.3, cursor: "not-allowed" },
  rank: { fontSize: 12, fontWeight: 800, color: "var(--text-3)", fontFamily: "'Fraunces',Georgia,serif", padding: "1px 0" },

  body: { flex: 1, minWidth: 0 },
  topRow: { display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" },
  wishName: { fontSize: 15, fontWeight: 700, minWidth: 0, wordBreak: "break-word" },
  wishNameDone: { textDecoration: "line-through", color: "var(--text-3)" },
  cost: { fontSize: 15, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", color: ACCENT, flexShrink: 0, whiteSpace: "nowrap" },
  note: { fontSize: 12.5, color: "var(--text-3)", marginTop: 3 },
  metaRow: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 7, alignItems: "center" },
  doneBadge: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: GREEN, background: GREEN + "1A", borderRadius: 20, padding: "3px 9px" },
  link: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11.5, fontWeight: 700, color: ACCENT, textDecoration: "none" },

  actions: { display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", justifyContent: "center", flexShrink: 0 },
  pill: { display: "inline-flex", alignItems: "center", gap: 4, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "5px 10px", borderRadius: 8, fontSize: 11.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" },
  iconBtn: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 26, height: 26, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center" },

  footNote: { fontSize: 11.5, color: "var(--text-3)", textAlign: "center", marginTop: 18, fontStyle: "italic" },

  overlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.5)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  modal: { background: "var(--surface)", borderRadius: 16, padding: "20px 20px 18px", width: "100%", maxWidth: 440, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 12px 48px rgba(0,0,0,0.22)", boxSizing: "border-box" },
  modalHead: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  modalTitle: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  iconBtnPlain: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  label: { display: "block", fontSize: 11.5, fontWeight: 700, color: "var(--text-2)", margin: "10px 0 5px", textTransform: "uppercase", letterSpacing: "0.04em" },
  input: { width: "100%", border: "1px solid var(--border)", borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "var(--bg)", color: "var(--text)", marginBottom: 4 },
  modalActions: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 },
  cancelBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: ACCENT, color: "#fff", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};
