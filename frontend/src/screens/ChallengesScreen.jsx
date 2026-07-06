import { useState, useEffect, useCallback, useMemo } from "react";
import { Plus, X, Check, Pencil, Trophy, Flag, Gift, CalendarClock, TrendingDown } from "lucide-react";
import { api } from "../api.js";
import { useCurrency, fmtMoney2 } from "../currency.js";

const ACCENT = "#C9A227";
const RED = "#C2536B";
const GREEN = "#4C9A6B";

const TODAY = new Date().toISOString().slice(0, 10);
const prettyDate = (s) => s ? new Date(s + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—";

// Plain number (grouped, up to 2 decimals) with NO currency symbol — the
// progress bar tracks free-form units, not necessarily money.
const fmtNum = (n) => (Number(n) || 0).toLocaleString(undefined, { maximumFractionDigits: 2 });

// Progress % for the bar (clamped 0..100). Negative progress renders as a red
// bar growing leftward, sized by how far below zero it is relative to target.
function progressInfo(ch) {
  const target = ch.target || 0;
  const done = ch.completed || 0;
  if (target <= 0) return { pct: 0, negPct: 0, negative: false };
  if (done < 0) {
    const negPct = Math.min(100, (Math.abs(done) / target) * 100);
    return { pct: 0, negPct, negative: true };
  }
  return { pct: Math.min(100, (done / target) * 100), negPct: 0, negative: false };
}

const blankForm = () => ({
  id: null, name: "", completed: "", target: "", end_date: "",
  reward: "", reward_cost: "", comment: "", allow_negative: false,
});

export default function ChallengesScreen() {
  const cur = useCurrency();
  const money = (n) => fmtMoney2(n, cur.code);

  const [challenges, setChallenges] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState(null);        // add/edit modal state
  const [progress, setProgress] = useState(null); // { ch, amount } quick-update modal

  const load = useCallback(() => {
    api.getChallenges().then((d) => { setChallenges(Array.isArray(d) ? d : []); setLoaded(true); }).catch(() => setLoaded(true));
  }, []);
  useEffect(() => { load(); }, [load]);

  const totals = useMemo(() => {
    const done = challenges.filter((c) => c.status === "done");
    const earned = done.reduce((n, c) => n + (c.reward_earned || 0), 0);
    return {
      total: challenges.length,
      done: done.length,
      active: challenges.filter((c) => c.status === "active").length,
      failed: challenges.filter((c) => c.status === "failed").length,
      earned,
    };
  }, [challenges]);

  // ── Add / edit ──
  const openAdd = () => setForm(blankForm());
  const openEdit = (c) => setForm({
    id: c.id, name: c.name, completed: String(c.completed ?? ""), target: String(c.target ?? ""),
    end_date: c.end_date || "", reward: c.reward || "", reward_cost: String(c.reward_cost ?? ""),
    comment: c.comment || "", allow_negative: !!c.allow_negative,
  });
  const saveForm = async () => {
    const name = form.name.trim();
    if (!name) return;
    const payload = {
      name,
      completed: parseFloat(form.completed) || 0,
      target: parseFloat(form.target) || 0,
      end_date: form.end_date || null,
      reward: form.reward.trim(),
      reward_cost: parseFloat(form.reward_cost) || 0,
      comment: form.comment.trim(),
      allow_negative: form.allow_negative,
    };
    if (form.id) await api.updateChallenge(form.id, payload);
    else await api.createChallenge(payload);
    setForm(null);
    load();
  };
  const remove = async (c) => {
    if (!window.confirm(`Delete challenge "${c.name}"?`)) return;
    await api.deleteChallenge(c.id);
    load();
  };

  // ── Quick progress update ──
  const openProgress = (c) => setProgress({ ch: c, amount: "", mode: "add" });
  const saveProgress = async () => {
    const delta = parseFloat(progress.amount);
    if (isNaN(delta)) return;
    const next = progress.mode === "set" ? delta : (progress.ch.completed || 0) + delta;
    await api.updateChallenge(progress.ch.id, { completed: next });
    setProgress(null);
    load();
  };

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Challenges</div>
        <h1 style={S.h1}>Challenges</h1>
        <div style={S.subhead}>Small steps toward success — track each toward its target and bank the reward on completion.</div>
      </div>

      {/* Summary */}
      <div style={S.statRow}>
        <div style={S.statCard}><div style={S.statVal}>{totals.active}</div><div style={S.statLbl}>Active</div></div>
        <div style={S.statCard}><div style={{ ...S.statVal, color: GREEN }}>{totals.done}</div><div style={S.statLbl}>Completed</div></div>
        <div style={S.statCard}><div style={{ ...S.statVal, color: RED }}>{totals.failed}</div><div style={S.statLbl}>Missed</div></div>
        <div style={S.statCard}><div style={{ ...S.statVal, color: ACCENT }}>{money(totals.earned)}</div><div style={S.statLbl}>Reward earned</div></div>
      </div>

      <button onClick={openAdd} style={S.addBtn}><Plus size={16} /> New challenge</button>

      {/* List */}
      {challenges.length === 0 ? (
        <div style={S.empty}>
          {loaded ? "No challenges yet. Create your first small step toward success." : "Loading…"}
        </div>
      ) : (
        <div style={S.list}>
          {challenges.map((c, i) => {
            const { pct, negPct, negative } = progressInfo(c);
            const barColor = negative ? RED : c.status === "done" ? GREEN : ACCENT;
            return (
              <div key={c.id} style={{ ...S.card, ...(c.status === "failed" ? S.cardFailed : {}) }}>
                <div style={S.cardTop}>
                  <span style={S.num}>#{i + 1}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={S.name}>{c.name}</div>
                    {c.comment && <div style={S.comment}>{c.comment}</div>}
                  </div>
                  <StatusBadge status={c.status} />
                  <button onClick={() => openEdit(c)} style={S.iconBtn} title="Edit"><Pencil size={13} /></button>
                  <button onClick={() => remove(c)} style={S.iconBtn} title="Delete"><X size={14} /></button>
                </div>

                {/* Progress bar */}
                <div style={S.barWrap}>
                  <div style={S.barTrack}>
                    {negative
                      ? <div style={{ ...S.barFill, width: `${negPct}%`, background: RED, marginLeft: "auto" }} />
                      : <div style={{ ...S.barFill, width: `${pct}%`, background: barColor }} />}
                  </div>
                  <div style={S.barMetaRow}>
                    <span style={{ ...S.completed, color: (c.completed || 0) < 0 ? RED : "var(--text)" }}>
                      {(c.completed || 0) < 0 && <TrendingDown size={12} style={{ marginRight: 3, verticalAlign: "-1px" }} />}
                      {fmtNum(c.completed)}
                    </span>
                    <span style={S.barPct}>{negative ? `-${Math.round(negPct)}%` : `${Math.round(pct)}%`}</span>
                    <span style={S.target}>of {fmtNum(c.target)}</span>
                  </div>
                </div>

                {/* Detail chips */}
                <div style={S.chips}>
                  <span style={S.chip}><Flag size={12} /> Remaining {fmtNum(c.remaining)}</span>
                  <span style={S.chip}><CalendarClock size={12} /> {c.end_date ? `Ends ${prettyDate(c.end_date)}` : "No deadline"}</span>
                  {c.reward && <span style={S.chip}><Gift size={12} /> {c.reward}</span>}
                  {c.reward_cost > 0 && (
                    <span style={{ ...S.chip, ...S.chipReward }}>
                      <Trophy size={12} /> {money(c.reward_cost)}{c.status === "done" ? " earned" : ""}
                    </span>
                  )}
                  {c.allow_negative && <span style={{ ...S.chip, color: RED, borderColor: RED + "55" }}>± negative allowed</span>}
                </div>

                <div style={S.actions}>
                  <button onClick={() => openProgress(c)} style={S.progressBtn}><Plus size={13} /> Update progress</button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add / edit modal */}
      {form && (
        <div style={S.overlay} onClick={() => setForm(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>{form.id ? "Edit challenge" : "New challenge"}</span>
              <button onClick={() => setForm(null)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>

            <label style={S.label}>Name *</label>
            <input autoFocus value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="e.g. Earn ₹1,00,000 from trading" style={S.input} />

            <div style={S.grid2}>
              <div>
                <label style={S.label}>Completed</label>
                <input type="number" inputMode="decimal" value={form.completed}
                  onChange={(e) => setForm((f) => ({ ...f, completed: e.target.value }))} placeholder="0" style={S.input} />
              </div>
              <div>
                <label style={S.label}>Target</label>
                <input type="number" inputMode="decimal" value={form.target}
                  onChange={(e) => setForm((f) => ({ ...f, target: e.target.value }))} placeholder="0" style={S.input} />
              </div>
            </div>

            <label style={S.label}>End date (optional — past & incomplete marks it missed)</label>
            <input type="date" value={form.end_date} onChange={(e) => setForm((f) => ({ ...f, end_date: e.target.value }))} style={S.input} />

            <div style={S.grid2}>
              <div>
                <label style={S.label}>Reward</label>
                <input value={form.reward} onChange={(e) => setForm((f) => ({ ...f, reward: e.target.value }))}
                  placeholder="e.g. New headphones" style={S.input} />
              </div>
              <div>
                <label style={S.label}>Reward cost</label>
                <input type="number" inputMode="decimal" value={form.reward_cost}
                  onChange={(e) => setForm((f) => ({ ...f, reward_cost: e.target.value }))} placeholder="0" style={S.input} />
              </div>
            </div>

            <label style={S.label}>Comment</label>
            <input value={form.comment} onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
              placeholder="Notes about this challenge" style={S.input} />

            <label style={S.toggleRow}>
              <input type="checkbox" checked={form.allow_negative}
                onChange={(e) => setForm((f) => ({ ...f, allow_negative: e.target.checked }))} style={S.checkbox} />
              <span>
                <span style={S.toggleLabel}>Allow negative progress</span>
                <span style={S.toggleHint}>Let progress drop below zero (e.g. a running trading loss shown in red).</span>
              </span>
            </label>

            <div style={S.modalActions}>
              <button onClick={() => setForm(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveForm} disabled={!form.name.trim()}
                style={{ ...S.saveBtn, ...(!form.name.trim() ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> {form.id ? "Save" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick progress modal */}
      {progress && (
        <div style={S.overlay} onClick={() => setProgress(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>Update · {progress.ch.name}</span>
              <button onClick={() => setProgress(null)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>
            <div style={S.progressCur}>Current: <b>{money(progress.ch.completed)}</b> of {money(progress.ch.target)}</div>
            <div style={S.modeRow}>
              <button onClick={() => setProgress((p) => ({ ...p, mode: "add" }))}
                style={{ ...S.modeBtn, ...(progress.mode === "add" ? S.modeBtnOn : {}) }}>Add / subtract</button>
              <button onClick={() => setProgress((p) => ({ ...p, mode: "set" }))}
                style={{ ...S.modeBtn, ...(progress.mode === "set" ? S.modeBtnOn : {}) }}>Set total</button>
            </div>
            <label style={S.label}>
              {progress.mode === "set" ? "New completed total" : "Amount to add (use a negative number to subtract)"}
            </label>
            <input autoFocus type="number" inputMode="decimal" value={progress.amount}
              onChange={(e) => setProgress((p) => ({ ...p, amount: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && saveProgress()} placeholder="0" style={S.input} />
            {!progress.ch.allow_negative && (
              <div style={S.progressHint}>Negative totals are blocked for this challenge. Enable “Allow negative progress” to permit them.</div>
            )}
            <div style={S.modalActions}>
              <button onClick={() => setProgress(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveProgress} disabled={progress.amount === "" || isNaN(parseFloat(progress.amount))}
                style={{ ...S.saveBtn, ...((progress.amount === "" || isNaN(parseFloat(progress.amount))) ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    done: { label: "Completed", color: GREEN },
    failed: { label: "Missed", color: RED },
    active: { label: "In progress", color: "#3A7CA5" },
  };
  const s = map[status] || map.active;
  return <span style={{ ...S.badge, color: s.color, background: s.color + "1A", borderColor: s.color + "44" }}>{s.label}</span>;
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 20px 40px", color: "var(--text)", boxSizing: "border-box", maxWidth: 780, margin: "0 auto" },
  head: { marginBottom: 16 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },

  statRow: { display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" },
  statCard: { flex: 1, minWidth: 120, background: "var(--surface)", borderRadius: 12, padding: "12px 14px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)" },
  statVal: { fontSize: 20, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  statLbl: { fontSize: 11, color: "var(--text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 },

  addBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "none", background: ACCENT, color: "#fff", padding: "10px 16px", borderRadius: 10, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginBottom: 16 },

  empty: { fontSize: 13.5, color: "var(--text-3)", textAlign: "center", padding: "40px 0", background: "var(--surface)", borderRadius: 16, border: "1px dashed var(--border)" },

  list: { display: "flex", flexDirection: "column", gap: 14 },
  card: { background: "var(--surface)", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)" },
  cardFailed: { opacity: 0.72 },
  cardTop: { display: "flex", alignItems: "center", gap: 10 },
  num: { fontSize: 12, fontWeight: 800, color: "var(--text-3)", fontFamily: "'Fraunces',Georgia,serif", flexShrink: 0 },
  name: { fontSize: 15.5, fontWeight: 700, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  comment: { fontSize: 12, color: "var(--text-3)", marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  badge: { fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 20, border: "1px solid", flexShrink: 0, whiteSpace: "nowrap" },
  iconBtn: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 28, height: 28, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },

  barWrap: { marginTop: 14 },
  barTrack: { height: 14, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden", display: "flex" },
  barFill: { height: "100%", borderRadius: 7, transition: "width 0.3s" },
  barMetaRow: { display: "flex", alignItems: "baseline", gap: 8, marginTop: 6 },
  completed: { fontSize: 14, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  barPct: { fontSize: 12, fontWeight: 700, color: "var(--text-2)" },
  target: { fontSize: 12, color: "var(--text-3)", marginLeft: "auto" },

  chips: { display: "flex", gap: 7, flexWrap: "wrap", marginTop: 12 },
  chip: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11.5, fontWeight: 600, color: "var(--text-2)", border: "1px solid var(--border)", borderRadius: 20, padding: "4px 10px" },
  chipReward: { color: ACCENT, borderColor: ACCENT + "55", background: ACCENT + "12" },

  actions: { marginTop: 12 },
  progressBtn: { display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "7px 14px", borderRadius: 9, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  overlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.5)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  modal: { background: "var(--surface)", borderRadius: 16, padding: "20px 20px 18px", width: "100%", maxWidth: 460, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 12px 48px rgba(0,0,0,0.22)", boxSizing: "border-box" },
  modalHead: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  modalTitle: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  iconBtnPlain: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  label: { display: "block", fontSize: 11.5, fontWeight: 700, color: "var(--text-2)", margin: "10px 0 5px", textTransform: "uppercase", letterSpacing: "0.04em" },
  input: { width: "100%", border: "1px solid var(--border)", borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "var(--bg)", color: "var(--text)", marginBottom: 4 },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },
  toggleRow: { display: "flex", alignItems: "flex-start", gap: 9, marginTop: 14, cursor: "pointer" },
  checkbox: { width: 17, height: 17, marginTop: 1, accentColor: ACCENT, cursor: "pointer", flexShrink: 0 },
  toggleLabel: { display: "block", fontSize: 13, fontWeight: 700 },
  toggleHint: { display: "block", fontSize: 11.5, color: "var(--text-3)", marginTop: 2 },
  modalActions: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 },
  cancelBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: GREEN, color: "#fff", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  progressCur: { fontSize: 13, color: "var(--text-2)", marginBottom: 12 },
  progressHint: { fontSize: 11.5, color: "var(--text-3)", marginTop: 6 },
  modeRow: { display: "flex", gap: 6, marginBottom: 8 },
  modeBtn: { flex: 1, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "8px 10px", borderRadius: 9, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  modeBtnOn: { background: ACCENT, color: "#fff", borderColor: ACCENT },
};
