import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Plus, X, Check, Pencil, Trash2, ChevronLeft, ChevronRight,
  TrendingUp, TrendingDown, BookOpen, LineChart, Wallet,
} from "lucide-react";
import { api } from "../api.js";
import { useCurrency, fmtMoney } from "../currency.js";

const ACCENT = "#3A7CA5";
const GREEN = "#4C9A6B";
const RED = "#C2536B";

const KINDS = [
  { id: "swing",    label: "Swing",    color: "#8268B0" },
  { id: "fno",      label: "FnO",      color: "#C9772E" },
  { id: "intraday", label: "Intraday", color: "#3A7CA5" },
];
const kindMeta = (id) => KINDS.find((k) => k.id === id) || KINDS[0];

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const TODAY = iso(new Date());
const fmtNice = (s) => new Date(s + "T00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

function useIsMobile(bp = 760) {
  const [m, setM] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const h = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
}

const blankTrade = (date) => ({ id: null, date, kind: "swing", instrument: "", pl: "", sl: "", tgt: "", note: "" });

export default function TradingJournalScreen() {
  const isMobile = useIsMobile();
  const cur = useCurrency();
  const money = (n) => fmtMoney(n, cur.code);

  const [entries, setEntries] = useState([]);
  const [learnings, setLearnings] = useState({});
  const [capital, setCapital] = useState(0);
  const [netPL, setNetPL] = useState(0);
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [selDate, setSelDate] = useState(TODAY);
  const [calMonth, setCalMonth] = useState(() => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const [tradeForm, setTradeForm] = useState(null);   // add/edit trade modal
  const [learnDraft, setLearnDraft] = useState("");

  const load = useCallback(() => {
    api.getTrades().then((d) => {
      setEntries(d.entries); setLearnings(d.learnings || {});
      setCapital(d.capital || 0); setNetPL(d.net_pl || 0); setCurrent(d.current || 0);
      setLoaded(true);
    }).catch(() => setLoaded(true));
  }, []);
  useEffect(() => { load(); }, [load]);

  // keep the learning textarea synced to the selected day
  useEffect(() => { setLearnDraft(learnings[selDate] || ""); }, [selDate, learnings]);

  // ── Per-day grouping + net P/L ──
  const plByDate = useMemo(() => {
    const m = {};
    entries.forEach((e) => { m[e.date] = (m[e.date] || 0) + (Number(e.pl) || 0); });
    return m;
  }, [entries]);

  const dayEntries = entries.filter((e) => e.date === selDate);
  const dayPL = plByDate[selDate] || 0;
  const daySentiment = dayPL > 0 ? "positive" : dayPL < 0 ? "negative" : "neutral";

  // ── Calendar cells for the visible month ──
  const calDays = useMemo(() => {
    const first = calMonth;
    const startDow = (first.getDay() + 6) % 7; // Monday-first
    const daysInMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < startDow; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const ds = iso(new Date(first.getFullYear(), first.getMonth(), d));
      const pl = plByDate[ds];
      const hasLearning = !!learnings[ds];
      cells.push({ date: ds, day: d, pl, hasLearning, has: pl !== undefined || hasLearning });
    }
    return cells;
  }, [calMonth, plByDate, learnings]);

  const shiftMonth = (delta) => setCalMonth((m) => new Date(m.getFullYear(), m.getMonth() + delta, 1));
  const monthLabel = calMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  // ── Trade CRUD ──
  const openAdd = (kind = "swing") => setTradeForm({ ...blankTrade(selDate), kind });
  const openEdit = (e) => setTradeForm({ ...e, pl: String(e.pl) });
  const saveTrade = async () => {
    const payload = {
      date: tradeForm.date, kind: tradeForm.kind, instrument: tradeForm.instrument.trim(),
      pl: parseFloat(tradeForm.pl) || 0, sl: tradeForm.sl.trim(), tgt: tradeForm.tgt.trim(), note: tradeForm.note.trim(),
    };
    if (tradeForm.id) await api.updateTradeEntry(tradeForm.id, payload);
    else await api.createTradeEntry(payload);
    setTradeForm(null);
    load();
  };
  const removeTrade = async (e) => {
    if (!window.confirm("Delete this trade?")) return;
    await api.deleteTradeEntry(e.id);
    load();
  };

  const saveLearning = async () => {
    await api.setTradeLearning(selDate, learnDraft);
    load();
  };
  const learningDirty = (learnings[selDate] || "") !== learnDraft;

  const profit = current >= capital;
  const capColor = netPL > 0 ? GREEN : netPL < 0 ? RED : "var(--text)";

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Trading Journal</div>
          <h1 style={S.h1}>Trading Journal</h1>
          <div style={S.subhead}>Log every trade and your daily learnings — review and improve.</div>
        </div>
      </div>

      {/* Capital / running balance */}
      <div style={S.capStrip}>
        <div style={S.capBox}>
          <div style={S.capLabel}><Wallet size={13} /> Starting capital</div>
          <div style={S.capVal}>{money(capital)}</div>
          <div style={S.capHint}>Set in Settings → Trading</div>
        </div>
        <div style={S.capBox}>
          <div style={S.capLabel}><LineChart size={13} /> Net P/L (all-time)</div>
          <div style={{ ...S.capVal, color: capColor }}>{netPL >= 0 ? "+" : ""}{money(netPL)}</div>
          <div style={S.capHint}>{entries.length} trade{entries.length === 1 ? "" : "s"} logged</div>
        </div>
        <div style={{ ...S.capBox, ...S.capBoxMain, borderColor: profit ? GREEN : RED }}>
          <div style={S.capLabel}>{profit ? <TrendingUp size={13} color={GREEN} /> : <TrendingDown size={13} color={RED} />} Current balance</div>
          <div style={{ ...S.capValBig, color: profit ? GREEN : RED }}>{money(current)}</div>
          <div style={S.capHint}>{profit ? "Above starting capital" : "Below starting capital"}</div>
        </div>
      </div>

      <div style={{ ...S.cols, gridTemplateColumns: isMobile ? "1fr" : "320px 1fr" }}>
        {/* Calendar */}
        <div style={S.card}>
          <div style={S.calHead}>
            <button onClick={() => shiftMonth(-1)} style={S.calNav}><ChevronLeft size={16} /></button>
            <span style={S.calTitle}>{monthLabel}</span>
            <button onClick={() => shiftMonth(1)} style={S.calNav}><ChevronRight size={16} /></button>
          </div>
          <div style={S.calGrid}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <div key={i} style={S.calDow}>{d}</div>)}
            {calDays.map((c, i) => c === null ? <div key={i} /> : (
              <button key={c.date} onClick={() => setSelDate(c.date)}
                style={{
                  ...S.calCell,
                  ...(c.date === selDate ? S.calCellOn : {}),
                  ...(c.date === TODAY && c.date !== selDate ? S.calCellToday : {}),
                }}>
                <span>{c.day}</span>
                {c.pl !== undefined && c.pl !== 0 && (
                  <span style={{ ...S.calDot, background: c.date === selDate ? "#fff" : (c.pl > 0 ? GREEN : RED) }} />
                )}
                {c.pl === undefined && c.hasLearning && (
                  <span style={{ ...S.calDot, background: c.date === selDate ? "#fff" : "var(--text-3)" }} />
                )}
              </button>
            ))}
          </div>
          <div style={S.calLegend}>
            <span><span style={{ ...S.legDot, background: GREEN }} /> Profit</span>
            <span><span style={{ ...S.legDot, background: RED }} /> Loss</span>
            <span><span style={{ ...S.legDot, background: "var(--text-3)" }} /> Learning only</span>
          </div>
        </div>

        {/* Selected day */}
        <div>
          <div style={S.card}>
            <div style={S.cardTitleRow}>
              <div>
                <div style={S.cardTitle}>{fmtNice(selDate)}</div>
                <div style={S.cardSub}>{dayEntries.length} trade{dayEntries.length === 1 ? "" : "s"} this day</div>
              </div>
              <div style={S.dayPLWrap}>
                <span style={{
                  ...S.sentiment,
                  ...(daySentiment === "positive" ? { background: GREEN + "1A", color: GREEN }
                    : daySentiment === "negative" ? { background: RED + "1A", color: RED }
                    : { background: "var(--hover)", color: "var(--text-3)" }),
                }}>
                  {daySentiment === "positive" ? "Positive day" : daySentiment === "negative" ? "Negative day" : "No trades"}
                </span>
                <span style={{ ...S.dayPL, color: dayPL > 0 ? GREEN : dayPL < 0 ? RED : "var(--text-2)" }}>
                  {dayPL >= 0 ? "+" : ""}{money(dayPL)}
                </span>
              </div>
            </div>

            {/* Add-trade buttons per kind */}
            <div style={S.addRow}>
              {KINDS.map((k) => (
                <button key={k.id} onClick={() => openAdd(k.id)}
                  style={{ ...S.addKindBtn, color: k.color, borderColor: k.color + "55", background: k.color + "12" }}>
                  <Plus size={14} /> {k.label}
                </button>
              ))}
            </div>

            {/* Trade list */}
            {dayEntries.length > 0 ? (
              <div style={S.tradeList}>
                {dayEntries.map((e) => {
                  const km = kindMeta(e.kind);
                  const pos = (Number(e.pl) || 0) >= 0;
                  return (
                    <div key={e.id} style={S.tradeRow}>
                      <span style={{ ...S.kindTag, background: km.color + "1A", color: km.color }}>{km.label}</span>
                      <div style={S.tradeBody}>
                        <div style={S.tradeTop}>
                          <span style={S.tradeInstr}>{e.instrument || "—"}</span>
                          <span style={{ ...S.tradePL, color: pos ? GREEN : RED }}>{pos ? "+" : ""}{money(Number(e.pl) || 0)}</span>
                        </div>
                        {(e.sl || e.tgt || e.note) && (
                          <div style={S.tradeMeta}>
                            {e.sl && <span style={S.metaPill}>SL {e.sl}</span>}
                            {e.tgt && <span style={S.metaPill}>TGT {e.tgt}</span>}
                            {e.note && <span style={S.tradeNote}>{e.note}</span>}
                          </div>
                        )}
                      </div>
                      <button onClick={() => openEdit(e)} style={S.iconGhost} title="Edit"><Pencil size={13} /></button>
                      <button onClick={() => removeTrade(e)} style={S.iconGhost} title="Delete"><Trash2 size={13} /></button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={S.noTrades}>No trades logged — you can still record a learning below.</div>
            )}
          </div>

          {/* Daily learning */}
          <div style={S.card}>
            <div style={S.cardTitle}><BookOpen size={15} color={ACCENT} /> Daily learning</div>
            <textarea value={learnDraft} onChange={(e) => setLearnDraft(e.target.value)}
              placeholder="What did you learn today? Mistakes, what worked, discipline notes…"
              style={S.learnArea} />
            <button onClick={saveLearning} disabled={!learningDirty}
              style={{ ...S.saveBtn, ...(learningDirty ? {} : { opacity: 0.5, cursor: "not-allowed" }) }}>
              <Check size={14} /> Save learning
            </button>
          </div>
        </div>
      </div>

      {/* Add / edit trade modal */}
      {tradeForm && (
        <div style={S.overlay} onClick={() => setTradeForm(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>{tradeForm.id ? "Edit trade" : "Add trade"}</span>
              <button onClick={() => setTradeForm(null)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>

            <label style={S.label}>Type</label>
            <div style={S.kindPick}>
              {KINDS.map((k) => (
                <button key={k.id} type="button" onClick={() => setTradeForm((f) => ({ ...f, kind: k.id }))}
                  style={{ ...S.kindChip, ...(tradeForm.kind === k.id ? { background: k.color, color: "#fff", borderColor: k.color } : {}) }}>
                  {k.label}
                </button>
              ))}
            </div>

            <label style={S.label}>Instrument / what you traded</label>
            <input autoFocus value={tradeForm.instrument} onChange={(e) => setTradeForm((f) => ({ ...f, instrument: e.target.value }))}
              placeholder="e.g. NIFTY 22000 CE, RELIANCE" style={S.input} />

            <label style={S.label}>P/L (profit + / loss −)</label>
            <input type="number" value={tradeForm.pl} onChange={(e) => setTradeForm((f) => ({ ...f, pl: e.target.value }))}
              placeholder="e.g. 1200 or -300" style={S.input} />

            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1 }}>
                <label style={S.label}>Stop loss (SL)</label>
                <input value={tradeForm.sl} onChange={(e) => setTradeForm((f) => ({ ...f, sl: e.target.value }))} placeholder="SL" style={S.input} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={S.label}>Target (TGT)</label>
                <input value={tradeForm.tgt} onChange={(e) => setTradeForm((f) => ({ ...f, tgt: e.target.value }))} placeholder="TGT" style={S.input} />
              </div>
            </div>

            <label style={S.label}>Note (optional)</label>
            <input value={tradeForm.note} onChange={(e) => setTradeForm((f) => ({ ...f, note: e.target.value }))}
              placeholder="reason, setup, emotion…" style={S.input} />

            <div style={S.modalActions}>
              <button onClick={() => setTradeForm(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveTrade} style={S.saveBtnGreen}><Check size={15} /> {tradeForm.id ? "Save" : "Add"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "26px 22px 48px", color: "var(--text)", boxSizing: "border-box", maxWidth: 1100, margin: "0 auto" },
  head: { marginBottom: 16 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 12.5, color: "var(--text-3)", marginTop: 3 },

  capStrip: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 18 },
  capBox: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "13px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  capBoxMain: { borderWidth: 2 },
  capLabel: { display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, fontWeight: 600, color: "var(--text-2)" },
  capVal: { fontSize: 20, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginTop: 4, lineHeight: 1.1 },
  capValBig: { fontSize: 26, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginTop: 4, lineHeight: 1.1 },
  capHint: { fontSize: 10.5, color: "var(--text-3)", marginTop: 4 },

  cols: { display: "grid", gap: 16, alignItems: "start" },
  card: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: 16 },

  calHead: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  calTitle: { fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  calNav: { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", cursor: "pointer", display: "grid", placeItems: "center" },
  calGrid: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 },
  calDow: { fontSize: 10, fontWeight: 700, color: "var(--text-3)", textAlign: "center", padding: "2px 0" },
  calCell: { position: "relative", aspectRatio: "1", border: "1px solid transparent", borderRadius: 8, background: "var(--bg)", color: "var(--text-2)", fontSize: 12.5, fontWeight: 600, cursor: "pointer", display: "grid", placeItems: "center", fontFamily: "inherit" },
  calCellOn: { background: ACCENT, color: "#fff" },
  calCellToday: { borderColor: ACCENT },
  calDot: { position: "absolute", bottom: 4, width: 5, height: 5, borderRadius: "50%" },
  calLegend: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12, fontSize: 10.5, color: "var(--text-3)", fontWeight: 600 },
  legDot: { display: "inline-block", width: 7, height: 7, borderRadius: "50%", marginRight: 4 },

  cardTitleRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 12, flexWrap: "wrap" },
  cardTitle: { display: "flex", alignItems: "center", gap: 6, fontSize: 15, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  cardSub: { fontSize: 12, color: "var(--text-3)", marginTop: 2 },
  dayPLWrap: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 },
  sentiment: { fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 10 },
  dayPL: { fontSize: 17, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },

  addRow: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 },
  addKindBtn: { display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid", borderRadius: 9, padding: "7px 12px", fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  tradeList: { display: "flex", flexDirection: "column", gap: 8 },
  tradeRow: { display: "flex", alignItems: "flex-start", gap: 9, padding: "9px 10px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10 },
  kindTag: { fontSize: 10.5, fontWeight: 800, padding: "3px 8px", borderRadius: 7, flexShrink: 0, marginTop: 1 },
  tradeBody: { flex: 1, minWidth: 0 },
  tradeTop: { display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline" },
  tradeInstr: { fontSize: 13.5, fontWeight: 700, wordBreak: "break-word" },
  tradePL: { fontSize: 13.5, fontWeight: 800, flexShrink: 0 },
  tradeMeta: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 5, alignItems: "center" },
  metaPill: { fontSize: 10.5, fontWeight: 700, color: "var(--text-2)", background: "var(--hover)", borderRadius: 6, padding: "2px 7px" },
  tradeNote: { fontSize: 11.5, color: "var(--text-3)", fontStyle: "italic" },
  iconGhost: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 3, display: "grid", placeItems: "center", flexShrink: 0 },
  noTrades: { fontSize: 12.5, color: "var(--text-3)", fontStyle: "italic", textAlign: "center", padding: "16px 8px", border: "1px dashed var(--border)", borderRadius: 8 },

  learnArea: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 10, padding: "11px 12px", fontSize: 14, fontFamily: "inherit", color: "var(--text)", background: "var(--bg)", outline: "none", minHeight: 90, resize: "vertical", lineHeight: 1.55, marginTop: 8 },
  saveBtn: { display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, border: "none", background: ACCENT, color: "#fff", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  overlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.5)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  modal: { background: "var(--surface)", borderRadius: 16, padding: "20px 20px 18px", width: "100%", maxWidth: 420, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 12px 48px rgba(0,0,0,0.22)", boxSizing: "border-box" },
  modalHead: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  modalTitle: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  iconBtnPlain: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center" },
  label: { display: "block", fontSize: 11.5, fontWeight: 700, color: "var(--text-2)", margin: "10px 0 5px", textTransform: "uppercase", letterSpacing: "0.04em" },
  input: { width: "100%", border: "1px solid var(--border)", borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "var(--bg)", color: "var(--text)" },
  kindPick: { display: "flex", gap: 6 },
  kindChip: { flex: 1, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "8px 0", borderRadius: 9, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  modalActions: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 },
  cancelBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  saveBtnGreen: { display: "flex", alignItems: "center", gap: 6, border: "none", background: GREEN, color: "#fff", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};
