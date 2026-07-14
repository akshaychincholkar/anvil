import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Plus, X, Check, Pencil, Trash2, ChevronLeft, ChevronRight,
  TrendingUp, TrendingDown, BookOpen, LineChart, Wallet, Clock, Undo2,
} from "lucide-react";
import { api } from "../api.js";
import { effectiveTodayISO } from "../dayStart.js";
import { useCurrency, fmtMoney } from "../currency.js";
import HelpButton from "../components/HelpButton.jsx";

const ACCENT = "#3A7CA5";
const GREEN = "#4C9A6B";
const RED = "#C2536B";

const KINDS = [
  { id: "swing",    label: "Swing",    color: "#8268B0" },
  { id: "fno",      label: "FnO",      color: "#C9772E" },
  { id: "intraday", label: "Intraday", color: "#3A7CA5" },
];
const kindMeta = (id) => KINDS.find((k) => k.id === id) || KINDS[0];
// Short selling is only offered for FnO / Intraday; swing is always long.
const SHORTABLE = new Set(["fno", "intraday"]);
const canShort = (kind) => SHORTABLE.has(kind);

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const TODAY = effectiveTodayISO(); // honours the start-of-day hour (Settings)
const fmtNice = (s) => new Date(s + "T00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
const fmtShort = (s) => s ? new Date(s + "T00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—";
const num = (v) => (v === "" || v === null || v === undefined || isNaN(parseFloat(v)) ? 0 : parseFloat(v));

// Preview P/L from prices × qty for a given outcome — mirrors the backend.
// abs() means it reads correctly for both long and short (target/SL just sit on
// opposite sides of entry).
const previewPL = (f, outcome) => {
  const q = num(f.qty);
  if (outcome === "profit") return Math.abs(num(f.tgt_price) - num(f.entry_price)) * q;
  return -Math.abs(num(f.sl_price) - num(f.entry_price)) * q;
};

// Client-side mirror of the backend discipline rules. Returns an error string
// (or "" when valid) so the Open button can be disabled with a clear reason.
// `openCount` = how many OPEN trades already exist in this section (excluding
// the one being edited). money() formats amounts for messages.
function validateTrade(f, rules, openCount, money) {
  const entry = num(f.entry_price), sl = num(f.sl_price), tgt = num(f.tgt_price), qty = num(f.qty);
  const short = f.direction === "short";
  if (!f.instrument.trim()) return "Enter the instrument.";
  if (entry <= 0 || sl <= 0 || tgt <= 0 || qty <= 0) return "Entry, SL, target and quantity must all be greater than zero.";
  if (short) {
    if (sl <= entry) return "For a short, stop loss must be greater than the entry price (CMP).";
    if (tgt >= entry) return "For a short, target must be less than the entry price (CMP).";
  } else {
    if (sl >= entry) return "Stop loss must be less than the entry price (CMP).";
    if (tgt <= entry) return "Target must be greater than the entry price (CMP).";
  }
  const riskPerShare = Math.abs(entry - sl), rewardPerShare = Math.abs(tgt - entry);
  const capital = rules.capital || 0;
  if (rules.rr > 0 && rewardPerShare < rules.rr * riskPerShare - 1e-9) {
    const need = short ? entry - rules.rr * riskPerShare : entry + rules.rr * riskPerShare;
    return `Risk:reward must be ≥ 1:${rules.rr}. Target must be ${short ? "at most" : "at least"} ${need.toLocaleString()}.`;
  }
  if (rules.risk_pct > 0 && capital > 0) {
    const maxLoss = capital * rules.risk_pct / 100;
    const loss = riskPerShare * qty;
    if (loss > maxLoss + 1e-9) return `This risks ${money(loss)} — over your ${rules.risk_pct}% limit of ${money(maxLoss)}. Reduce qty or tighten SL.`;
  }
  const n = (rules.diversification || {})[f.kind] || 0;
  if (n > 0) {
    if (capital > 0) {
      const maxVal = capital / n;
      const val = entry * qty;
      if (val > maxVal + 1e-9) return `Position value ${money(val)} exceeds the diversification cap ${money(maxVal)} (capital ÷ ${n}).`;
    }
    if (openCount >= n) return `You already hold ${openCount} open ${f.kind} trade(s); diversification allows ${n}.`;
  }
  return "";
}

function useIsMobile(bp = 760) {
  const [m, setM] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const h = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
}

const blankTrade = (date) => ({
  id: null, kind: "swing", direction: "long", instrument: "", purchase_date: date,
  entry_price: "", sl_price: "", tgt_price: "", qty: "", note: "",
});

export default function TradingJournalScreen() {
  const isMobile = useIsMobile();
  const cur = useCurrency();
  const money = (n) => fmtMoney(n, cur.code);

  const [entries, setEntries] = useState([]);
  const [learnings, setLearnings] = useState({});
  const [capital, setCapital] = useState(0);
  const [netPL, setNetPL] = useState(0);
  const [current, setCurrent] = useState(0);
  const [rules, setRules] = useState({ capital: 0, risk_pct: 0, rr: 0, diversification: { swing: 0, fno: 0, intraday: 0 } });
  const [loaded, setLoaded] = useState(false);

  const [selDate, setSelDate] = useState(TODAY);
  const [calMonth, setCalMonth] = useState(() => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const [tradeForm, setTradeForm] = useState(null);   // add/edit open trade modal
  const [bookForm, setBookForm] = useState(null);     // { trade, outcome, date } booking modal
  const [learnDraft, setLearnDraft] = useState("");

  const load = useCallback(() => {
    api.getTrades().then((d) => {
      setEntries(d.entries); setLearnings(d.learnings || {});
      setCapital(d.capital || 0); setNetPL(d.net_pl || 0); setCurrent(d.current || 0);
      if (d.rules) setRules(d.rules);
      setLoaded(true);
    }).catch(() => setLoaded(true));
  }, []);
  useEffect(() => { load(); }, [load]);

  useEffect(() => { setLearnDraft(learnings[selDate] || ""); }, [selDate, learnings]);

  const openTrades = useMemo(() => entries.filter((e) => e.status === "open"), [entries]);
  const bookedEntries = useMemo(() => entries.filter((e) => e.status !== "open"), [entries]);

  // Live validation of the open-trade form against the discipline rules.
  const formError = useMemo(() => {
    if (!tradeForm) return "";
    const openInKind = openTrades.filter((e) => e.kind === tradeForm.kind && e.id !== tradeForm.id).length;
    return validateTrade(tradeForm, rules, openInKind, money);
  }, [tradeForm, rules, openTrades, cur.code]);

  // ── Per-day net P/L (booked trades only) ──
  const plByDate = useMemo(() => {
    const m = {};
    bookedEntries.forEach((e) => { m[e.date] = (m[e.date] || 0) + (Number(e.pl) || 0); });
    return m;
  }, [bookedEntries]);

  const dayEntries = bookedEntries.filter((e) => e.date === selDate);
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

  // ── Open-trade CRUD ──
  const openAdd = (kind = "swing") => setTradeForm({ ...blankTrade(selDate), kind });
  const openEdit = (e) => setTradeForm({
    id: e.id, kind: e.kind, direction: e.direction || "long", instrument: e.instrument, purchase_date: e.purchase_date || e.date,
    entry_price: e.entry_price ?? "", sl_price: e.sl_price ?? "", tgt_price: e.tgt_price ?? "",
    qty: e.qty ?? "", note: e.note || "",
  });
  // Switching to a non-shortable kind forces the trade back to long.
  const setKind = (kind) => setTradeForm((f) => ({ ...f, kind, direction: canShort(kind) ? f.direction : "long" }));
  const saveTrade = async () => {
    if (formError) return; // guard — button is disabled, but be safe
    const payload = {
      kind: tradeForm.kind, direction: tradeForm.direction, instrument: tradeForm.instrument.trim(),
      purchase_date: tradeForm.purchase_date,
      entry_price: num(tradeForm.entry_price), sl_price: num(tradeForm.sl_price),
      tgt_price: num(tradeForm.tgt_price), qty: num(tradeForm.qty), note: tradeForm.note.trim(),
    };
    try {
      if (tradeForm.id) await api.updateTradeEntry(tradeForm.id, payload);
      else await api.createTradeEntry(payload);
      setTradeForm(null);
      load();
    } catch (err) {
      window.alert(err.message || "Could not save this trade.");
    }
  };
  const removeTrade = async (e) => {
    if (!window.confirm("Delete this trade?")) return;
    await api.deleteTradeEntry(e.id);
    load();
  };

  // ── Book / reopen ──
  // Intraday must square off on its purchase day → lock the booking date to it.
  const openBook = (trade, outcome) => setBookForm({
    trade, outcome,
    date: trade.kind === "intraday" ? (trade.purchase_date || TODAY) : TODAY,
  });
  const confirmBook = async () => {
    try {
      await api.bookTradeEntry(bookForm.trade.id, bookForm.outcome, bookForm.date);
      setBookForm(null);
      load();
    } catch (err) {
      window.alert(err.message || "Could not book this trade.");
    }
  };
  const reopenTrade = async (e) => {
    await api.reopenTradeEntry(e.id);
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
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h1 style={S.h1}>Trading Journal</h1>
            <HelpButton id="trading-journal" />
          </div>
          <div style={S.subhead}>Open trades with your entry, SL &amp; target — book profit/loss and P/L is calculated for you.</div>
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
          <div style={S.capLabel}><LineChart size={13} /> Net P/L (booked)</div>
          <div style={{ ...S.capVal, color: capColor }}>{netPL >= 0 ? "+" : ""}{money(netPL)}</div>
          <div style={S.capHint}>{bookedEntries.length} booked · {openTrades.length} open</div>
        </div>
        <div style={{ ...S.capBox, ...S.capBoxMain, borderColor: profit ? GREEN : RED }}>
          <div style={S.capLabel}>{profit ? <TrendingUp size={13} color={GREEN} /> : <TrendingDown size={13} color={RED} />} Current balance</div>
          <div style={{ ...S.capValBig, color: profit ? GREEN : RED }}>{money(current)}</div>
          <div style={S.capHint}>{profit ? "Above starting capital" : "Below starting capital"}</div>
        </div>
      </div>

      {/* Open trades box */}
      <div style={S.card}>
        <div style={S.cardTitleRow}>
          <div>
            <div style={S.cardTitle}><Clock size={15} color={ACCENT} /> Open trades</div>
            <div style={S.cardSub}>Positions you haven't booked yet — mark profit or loss when you exit.</div>
          </div>
          <div style={S.addRow}>
            {KINDS.map((k) => (
              <button key={k.id} onClick={() => openAdd(k.id)}
                style={{ ...S.addKindBtn, color: k.color, borderColor: k.color + "55", background: k.color + "12" }}>
                <Plus size={14} /> {k.label}
              </button>
            ))}
          </div>
        </div>

        {openTrades.length > 0 ? (
          <div style={S.openScroll}>
            {openTrades.map((e) => {
              const km = kindMeta(e.kind);
              return (
                <div key={e.id} style={S.openRow}>
                  <span style={{ ...S.kindTag, background: km.color + "1A", color: km.color }}>{km.label}</span>
                  <div style={S.openBody}>
                    <div style={S.openTop}>
                      <span style={S.tradeInstr}>
                        {e.instrument || "—"}
                        <DirBadge direction={e.direction} />
                      </span>
                      <span style={S.openQty}>{e.qty ? `${e.qty} qty` : ""}</span>
                    </div>
                    <div style={S.openMeta}>
                      <span style={S.metaPill}>Bought {fmtShort(e.purchase_date)}</span>
                      {e.entry_price ? <span style={S.metaPill}>Entry {e.entry_price}</span> : null}
                      {e.sl_price ? <span style={{ ...S.metaPill, color: RED }}>SL {e.sl_price}</span> : null}
                      {e.tgt_price ? <span style={{ ...S.metaPill, color: GREEN }}>TGT {e.tgt_price}</span> : null}
                    </div>
                  </div>
                  <div style={S.bookBtns}>
                    <button onClick={() => openBook(e, "profit")} style={{ ...S.bookBtn, background: GREEN }}>
                      <TrendingUp size={13} /> Profit
                    </button>
                    <button onClick={() => openBook(e, "loss")} style={{ ...S.bookBtn, background: RED }}>
                      <TrendingDown size={13} /> Loss
                    </button>
                    <button onClick={() => openEdit(e)} style={S.iconGhost} title="Edit"><Pencil size={13} /></button>
                    <button onClick={() => removeTrade(e)} style={S.iconGhost} title="Delete"><Trash2 size={13} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={S.noTrades}>{loaded ? "No open trades. Add one with the buttons above." : "Loading…"}</div>
        )}
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
                <div style={S.cardSub}>{dayEntries.length} booked trade{dayEntries.length === 1 ? "" : "s"} this day</div>
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

            {/* Booked trade list */}
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
                          <span style={S.tradeInstr}>
                            {e.instrument || "—"}
                            <DirBadge direction={e.direction} />
                          </span>
                          <span style={{ ...S.tradePL, color: pos ? GREEN : RED }}>{pos ? "+" : ""}{money(Number(e.pl) || 0)}</span>
                        </div>
                        <div style={S.tradeMeta}>
                          {e.entry_price ? <span style={S.metaPill}>Entry {e.entry_price}</span> : null}
                          {e.sl_price ? <span style={S.metaPill}>SL {e.sl_price}</span> : null}
                          {e.tgt_price ? <span style={S.metaPill}>TGT {e.tgt_price}</span> : null}
                          {e.qty ? <span style={S.metaPill}>{e.qty} qty</span> : null}
                          {e.purchase_date && e.purchase_date !== e.date && <span style={S.metaPill}>Bought {fmtShort(e.purchase_date)}</span>}
                          {e.note && <span style={S.tradeNote}>{e.note}</span>}
                        </div>
                      </div>
                      <button onClick={() => reopenTrade(e)} style={S.iconGhost} title="Reopen"><Undo2 size={13} /></button>
                      <button onClick={() => removeTrade(e)} style={S.iconGhost} title="Delete"><Trash2 size={13} /></button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={S.noTrades}>No trades booked on this day — you can still record a learning below.</div>
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

      {/* Add / edit open-trade modal */}
      {tradeForm && (() => {
        const km = kindMeta(tradeForm.kind);
        const short = tradeForm.direction === "short";
        const accent = short ? RED : GREEN;
        const profitPreview = previewPL(tradeForm, "profit");
        const lossPreview = previewPL(tradeForm, "loss");
        return (
        <div style={S.overlay} onClick={() => setTradeForm(null)}>
          <div style={S.sheet} onClick={(e) => e.stopPropagation()}>
            {/* Gradient header keyed to the trade type + direction */}
            <div style={{ ...S.sheetHead, background: `linear-gradient(135deg, ${km.color}, ${accent})` }}>
              <div style={S.sheetHeadRow}>
                <span style={S.sheetKicker}>{tradeForm.id ? "Edit position" : "New position"}</span>
                <button onClick={() => setTradeForm(null)} style={S.sheetClose}><X size={16} /></button>
              </div>
              <div style={S.sheetTitle}>{tradeForm.instrument || "Open trade"}</div>
              <div style={S.sheetChips}>
                <span style={S.sheetChip}>{km.label}</span>
                <span style={S.sheetChip}>{short ? "Short ▼" : "Long ▲"}</span>
                {num(tradeForm.qty) > 0 && <span style={S.sheetChip}>{num(tradeForm.qty)} qty</span>}
              </div>
            </div>

            <div style={S.sheetBody}>
              {/* Segmented: trade type */}
              <label style={S.fLabel}>Type</label>
              <div style={S.seg}>
                {KINDS.map((k) => (
                  <button key={k.id} type="button" onClick={() => setKind(k.id)}
                    style={{ ...S.segBtn, ...(tradeForm.kind === k.id ? { ...S.segBtnOn, background: k.color } : {}) }}>
                    {k.label}
                  </button>
                ))}
              </div>

              {/* Segmented: direction (long/short) — only for FnO & Intraday */}
              {canShort(tradeForm.kind) && (
                <>
                  <label style={S.fLabel}>Direction</label>
                  <div style={S.seg}>
                    <button type="button" onClick={() => setTradeForm((f) => ({ ...f, direction: "long" }))}
                      style={{ ...S.segBtn, ...(!short ? { ...S.segBtnOn, background: GREEN } : {}) }}>
                      <TrendingUp size={14} /> Long
                    </button>
                    <button type="button" onClick={() => setTradeForm((f) => ({ ...f, direction: "short" }))}
                      style={{ ...S.segBtn, ...(short ? { ...S.segBtnOn, background: RED } : {}) }}>
                      <TrendingDown size={14} /> Short
                    </button>
                  </div>
                  <div style={S.dirHint}>
                    {short
                      ? "Short — profit when price falls. SL sits above CMP, target below."
                      : "Long — profit when price rises. SL sits below CMP, target above."}
                  </div>
                </>
              )}

              <label style={S.fLabel}>Instrument</label>
              <input autoFocus value={tradeForm.instrument}
                onChange={(e) => setTradeForm((f) => ({ ...f, instrument: e.target.value.toUpperCase() }))}
                placeholder="e.g. NIFTY 22000 CE, RELIANCE" style={{ ...S.field, textTransform: "uppercase" }} />

              <div style={S.grid2}>
                <div>
                  <label style={S.fLabel}>Entry (CMP)</label>
                  <input type="number" inputMode="decimal" value={tradeForm.entry_price}
                    onChange={(e) => setTradeForm((f) => ({ ...f, entry_price: e.target.value }))} placeholder="0" style={S.field} />
                </div>
                <div>
                  <label style={S.fLabel}>Quantity</label>
                  <input type="number" inputMode="decimal" value={tradeForm.qty}
                    onChange={(e) => setTradeForm((f) => ({ ...f, qty: e.target.value }))} placeholder="0" style={S.field} />
                </div>
              </div>

              <div style={S.grid2}>
                <div>
                  <label style={{ ...S.fLabel, color: RED }}>Stop loss{short ? " (above)" : " (below)"}</label>
                  <input type="number" inputMode="decimal" value={tradeForm.sl_price}
                    onChange={(e) => setTradeForm((f) => ({ ...f, sl_price: e.target.value }))} placeholder="0"
                    style={{ ...S.field, borderColor: RED + "55" }} />
                </div>
                <div>
                  <label style={{ ...S.fLabel, color: GREEN }}>Target{short ? " (below)" : " (above)"}</label>
                  <input type="number" inputMode="decimal" value={tradeForm.tgt_price}
                    onChange={(e) => setTradeForm((f) => ({ ...f, tgt_price: e.target.value }))} placeholder="0"
                    style={{ ...S.field, borderColor: GREEN + "55" }} />
                </div>
              </div>

              {/* Live P/L preview */}
              <div style={S.preview2}>
                <div style={{ ...S.previewCell, background: GREEN + "12" }}>
                  <span style={S.previewLbl}>If target hit</span>
                  <span style={{ ...S.previewVal, color: GREEN }}>+{money(profitPreview)}</span>
                </div>
                <div style={{ ...S.previewCell, background: RED + "12" }}>
                  <span style={S.previewLbl}>If SL hit</span>
                  <span style={{ ...S.previewVal, color: RED }}>{money(lossPreview)}</span>
                </div>
              </div>

              <label style={S.fLabel}>Purchase date</label>
              <input type="date" value={tradeForm.purchase_date}
                onChange={(e) => setTradeForm((f) => ({ ...f, purchase_date: e.target.value }))} style={S.field} />

              <label style={S.fLabel}>Note (optional)</label>
              <input value={tradeForm.note} onChange={(e) => setTradeForm((f) => ({ ...f, note: e.target.value }))}
                placeholder="reason, setup, emotion…" style={S.field} />

              {formError
                ? <div style={S.errBanner}>{formError}</div>
                : <RulesHint rules={rules} kind={tradeForm.kind} money={money} />}
            </div>

            <div style={S.sheetFoot}>
              <button onClick={() => setTradeForm(null)} style={S.ghostBtn}>Cancel</button>
              <button onClick={saveTrade} disabled={!!formError}
                style={{ ...S.primaryBtn, background: accent, ...(formError ? { opacity: 0.45, cursor: "not-allowed" } : {}) }}>
                <Check size={16} /> {tradeForm.id ? "Save changes" : "Open trade"}
              </button>
            </div>
          </div>
        </div>
        );
      })()}

      {/* Book profit/loss modal */}
      {bookForm && (() => {
        const isProfit = bookForm.outcome === "profit";
        const accent = isProfit ? GREEN : RED;
        const t = bookForm.trade;
        const short = (t.direction || "long") === "short";
        const km = kindMeta(t.kind);
        const formula = isProfit
          ? (short ? `(Entry ${t.entry_price || 0} − TGT ${t.tgt_price || 0}) × ${t.qty || 0}`
                   : `(TGT ${t.tgt_price || 0} − Entry ${t.entry_price || 0}) × ${t.qty || 0}`)
          : (short ? `(SL ${t.sl_price || 0} − Entry ${t.entry_price || 0}) × ${t.qty || 0}`
                   : `(Entry ${t.entry_price || 0} − SL ${t.sl_price || 0}) × ${t.qty || 0}`);
        return (
        <div style={S.overlay} onClick={() => setBookForm(null)}>
          <div style={S.sheet} onClick={(e) => e.stopPropagation()}>
            <div style={{ ...S.sheetHead, background: `linear-gradient(135deg, ${accent}, ${accent}CC)` }}>
              <div style={S.sheetHeadRow}>
                <span style={S.sheetKicker}>{isProfit ? "Book profit" : "Book loss"}</span>
                <button onClick={() => setBookForm(null)} style={S.sheetClose}><X size={16} /></button>
              </div>
              <div style={S.sheetTitle}>{t.instrument || "—"}</div>
              <div style={S.sheetChips}>
                <span style={S.sheetChip}>{km.label}</span>
                <span style={S.sheetChip}>{short ? "Short" : "Long"}</span>
              </div>
            </div>

            <div style={S.sheetBody}>
              <div style={S.bookHero}>
                <span style={S.bookHeroLbl}>{isProfit ? "Realized profit" : "Realized loss"}</span>
                <span style={{ ...S.bookHeroVal, color: accent }}>
                  {isProfit ? "+" : ""}{money(previewPL(t, bookForm.outcome))}
                </span>
                <span style={S.bookHeroMeta}>{formula}</span>
              </div>

              {t.kind === "intraday" ? (
                <>
                  <label style={S.fLabel}>Outcome date · locked to purchase day</label>
                  <input type="date" value={bookForm.date} min={t.purchase_date} max={t.purchase_date}
                    disabled style={{ ...S.field, opacity: 0.7, cursor: "not-allowed" }} />
                  <div style={S.dirHint}>Intraday trades are squared off the same day they're bought.</div>
                </>
              ) : (
                <>
                  <label style={S.fLabel}>Outcome date · colours this day</label>
                  <input type="date" value={bookForm.date}
                    onChange={(e) => setBookForm((f) => ({ ...f, date: e.target.value }))} style={S.field} />
                </>
              )}
            </div>

            <div style={S.sheetFoot}>
              <button onClick={() => setBookForm(null)} style={S.ghostBtn}>Cancel</button>
              <button onClick={confirmBook} disabled={!bookForm.date}
                style={{ ...S.primaryBtn, background: accent, ...(!bookForm.date ? { opacity: 0.45, cursor: "not-allowed" } : {}) }}>
                <Check size={16} /> Book {bookForm.outcome}
              </button>
            </div>
          </div>
        </div>
        );
      })()}
    </div>
  );
}

// Long/Short pill shown next to an instrument name. Long trades stay unmarked
// to keep the common case clean; only shorts get an explicit tag.
function DirBadge({ direction }) {
  if ((direction || "long") !== "short") return null;
  return <span style={S.dirBadge}><TrendingDown size={10} /> SHORT</span>;
}

// Small reminder of the active discipline caps for the selected section, shown
// under the form when it's valid so the limits are visible before you commit.
function RulesHint({ rules, kind, money }) {
  const parts = [];
  const capital = rules.capital || 0;
  if (rules.rr > 0) parts.push(`Min risk:reward 1:${rules.rr}`);
  if (rules.risk_pct > 0 && capital > 0) parts.push(`Max risk ${money(capital * rules.risk_pct / 100)} (${rules.risk_pct}%)`);
  const n = (rules.diversification || {})[kind] || 0;
  if (n > 0) {
    if (capital > 0) parts.push(`Max position ${money(capital / n)}`);
    parts.push(`Max ${n} open ${kind}`);
  }
  if (!parts.length) return null;
  return <div style={S.rulesHint}>Rules · {parts.join(" · ")}</div>;
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

  addRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  addKindBtn: { display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid", borderRadius: 9, padding: "7px 12px", fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  // Open trades box (scrolls when long)
  openScroll: { display: "flex", flexDirection: "column", gap: 8, maxHeight: 320, overflowY: "auto", paddingRight: 2 },
  openRow: { display: "flex", alignItems: "flex-start", gap: 9, padding: "10px 11px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, flexWrap: "wrap" },
  openBody: { flex: 1, minWidth: 140 },
  openTop: { display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline" },
  openQty: { fontSize: 11.5, fontWeight: 700, color: "var(--text-3)", flexShrink: 0 },
  openMeta: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 5, alignItems: "center" },
  bookBtns: { display: "flex", gap: 6, alignItems: "center", flexShrink: 0 },
  bookBtn: { display: "inline-flex", alignItems: "center", gap: 4, border: "none", color: "#fff", padding: "6px 11px", borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

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

  dirBadge: { display: "inline-flex", alignItems: "center", gap: 2, fontSize: 9.5, fontWeight: 800, letterSpacing: "0.03em", color: RED, background: RED + "1A", borderRadius: 5, padding: "1px 5px", marginLeft: 6, verticalAlign: "middle" },

  // ── Modern bottom-anchored sheet modal ──
  overlay: { position: "fixed", inset: 0, background: "rgba(20,18,15,0.55)", backdropFilter: "blur(3px)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  sheet: { background: "var(--surface)", borderRadius: 20, width: "100%", maxWidth: 460, maxHeight: "92vh", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.34)", boxSizing: "border-box" },
  sheetHead: { padding: "16px 18px 18px", color: "#fff" },
  sheetHeadRow: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  sheetKicker: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.9 },
  sheetClose: { border: "none", background: "rgba(255,255,255,0.2)", color: "#fff", width: 30, height: 30, borderRadius: 9, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  sheetTitle: { fontSize: 22, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginTop: 8, wordBreak: "break-word", lineHeight: 1.15 },
  sheetChips: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 },
  sheetChip: { fontSize: 11, fontWeight: 700, background: "rgba(255,255,255,0.22)", color: "#fff", borderRadius: 20, padding: "3px 10px" },
  sheetBody: { padding: "16px 18px 6px", overflowY: "auto" },
  sheetFoot: { display: "flex", gap: 10, padding: "14px 18px 16px", borderTop: "1px solid var(--border)", background: "var(--surface)" },

  fLabel: { display: "block", fontSize: 11, fontWeight: 700, color: "var(--text-2)", margin: "12px 0 5px", textTransform: "uppercase", letterSpacing: "0.05em" },
  field: { width: "100%", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 12px", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "var(--bg)", color: "var(--text)" },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },

  seg: { display: "flex", gap: 4, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: 4 },
  segBtn: { flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 5, border: "none", background: "none", color: "var(--text-2)", padding: "9px 0", borderRadius: 9, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "background 0.12s" },
  segBtnOn: { color: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.18)" },
  dirHint: { fontSize: 11.5, color: "var(--text-3)", marginTop: 7, lineHeight: 1.4 },

  preview2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 },
  previewCell: { display: "flex", flexDirection: "column", gap: 2, borderRadius: 12, padding: "11px 13px" },
  previewLbl: { fontSize: 11, fontWeight: 600, color: "var(--text-2)" },
  previewVal: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },

  bookHero: { textAlign: "center", padding: "14px 0 6px" },
  bookHeroLbl: { display: "block", fontSize: 11.5, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em" },
  bookHeroVal: { display: "block", fontSize: 34, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginTop: 4, lineHeight: 1.05 },
  bookHeroMeta: { display: "block", fontSize: 11.5, color: "var(--text-3)", marginTop: 6 },

  errBanner: { marginTop: 14, background: RED + "18", border: `1px solid ${RED}55`, color: RED, borderRadius: 10, padding: "10px 12px", fontSize: 12.5, fontWeight: 600, lineHeight: 1.4 },
  rulesHint: { marginTop: 14, fontSize: 11.5, color: "var(--text-3)", fontWeight: 600, lineHeight: 1.4 },

  ghostBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "11px 18px", borderRadius: 11, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  primaryBtn: { flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, border: "none", color: "#fff", padding: "11px 18px", borderRadius: 11, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};
