import { useState, useEffect } from "react";
import { ScrollText, X } from "lucide-react";
import { api } from "../api.js";
import { TREES, DEFAULT_TREE } from "./grove/trees.jsx";
import { useCurrency, fmtMoney2 } from "../currency.js";

const FOCUS_KEY = "grove_rates";   // legacy fallback: pillar → ₹/hr
const USAGE_KEY = "reward_rates";  // legacy fallback: screen → ₹/min
const PILLARS = Object.keys(TREES);

// App screens that earn a usage reward (Rewards/"worth" itself excluded).
const SCREEN_LIST = [
  { id: "kickstart", label: "Kickstart" }, { id: "golden", label: "Golden Book" },
  { id: "habits", label: "Habits" }, { id: "quadrant", label: "Quadrant" },
  { id: "goals", label: "Goals" }, { id: "grove", label: "Grove" },
  { id: "journal", label: "Journal" }, { id: "revision", label: "Revision" },
  { id: "affirmations", label: "Affirmations" }, { id: "skills", label: "Skills" },
  { id: "spiritual", label: "Spiritual" }, { id: "mindscape", label: "Mindscape" },
  { id: "vault", label: "Wallet" }, { id: "expenses", label: "Expenses" },
  { id: "trading", label: "Trading Journal" }, { id: "delight", label: "Delights" },
];
// Screens that never earn a usage reward (Rewards itself + Achievements, which
// has its own dedicated reward type set from the Achievements section).
const USAGE_EXCLUDE = new Set(["worth", "achievements"]);

const FOCUS_COLOR = "#C9A227";
const USAGE_COLOR = "#3A7CA5";
const ACH_COLOR = "#C2536B";

const fmtH = (min) => { const h = Math.floor(min / 60), m = Math.round(min % 60); return h && m ? `${h}h ${m}m` : h ? `${h}h` : `${m}m`; };
const fmtDur = (mins) => {
  let s = Math.round((mins || 0) * 60);
  const h = Math.floor(s / 3600); s %= 3600;
  const m = Math.floor(s / 60); s %= 60;
  return [h ? `${h}h` : null, (h || m) ? `${m}m` : null, `${s}s`].filter(Boolean).join(" ");
};
const nowLocal = () => {
  const d = new Date(); const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
};
const prettyWhen = (s) => {
  if (!s) return "";
  const d = new Date(s.includes("T") ? s : s + "T00:00:00");
  if (isNaN(d)) return s;
  return d.toLocaleDateString("en-US", s.includes("T")
    ? { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }
    : { month: "short", day: "numeric", year: "numeric" });
};

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const startOfWeek = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; };
const PERIODS = [
  { id: "today", label: "Today" },
  { id: "all", label: "All time" },
  { id: "tweek", label: "This week" },
  { id: "tmonth", label: "This month" },
  { id: "pweek", label: "Last week" },
  { id: "pmonth", label: "Last month" },
  { id: "tyear", label: "This year" },
];
function periodRange(id) {
  const now = new Date();
  if (id === "today") return [iso(now), iso(now)];
  if (id === "tweek") { const s = startOfWeek(now); const e = new Date(s); e.setDate(s.getDate() + 6); return [iso(s), iso(e)]; }
  if (id === "pweek") { const s = startOfWeek(now); s.setDate(s.getDate() - 7); const e = new Date(s); e.setDate(s.getDate() + 6); return [iso(s), iso(e)]; }
  if (id === "tmonth") return [iso(new Date(now.getFullYear(), now.getMonth(), 1)), iso(new Date(now.getFullYear(), now.getMonth() + 1, 0))];
  if (id === "pmonth") return [iso(new Date(now.getFullYear(), now.getMonth() - 1, 1)), iso(new Date(now.getFullYear(), now.getMonth(), 0))];
  if (id === "tyear") return [iso(new Date(now.getFullYear(), 0, 1)), iso(new Date(now.getFullYear(), 11, 31))];
  return ["0000-01-01", "9999-12-31"];
}

export default function WorthScreen() {
  const cur = useCurrency();
  const reward = (n) => fmtMoney2(n, cur.code);

  const [sessions, setSessions] = useState([]);
  const [screenRows, setScreenRows] = useState([]);
  const [history, setHistory] = useState([]);
  const [payouts, setPayouts] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [legacyFocus, setLegacyFocus] = useState({});
  const [legacyUsage, setLegacyUsage] = useState({});
  const [loaded, setLoaded] = useState(false);

  const [focusInputs, setFocusInputs] = useState({});
  const [usageInputs, setUsageInputs] = useState({});
  const [showFocusRates, setShowFocusRates] = useState(false);
  const [showUsageRates, setShowUsageRates] = useState(false);
  const [takeMode, setTakeMode] = useState(null); // 'partial' | 'all' | null
  const [takeAmt, setTakeAmt] = useState("");
  const [takeNote, setTakeNote] = useState("");
  const [showLog, setShowLog] = useState(false);
  const [period, setPeriod] = useState("today");

  const loadPayouts = () => api.getPayouts().then(setPayouts).catch(() => {});
  const reloadRates = () => api.getRewardRates().then(setHistory).catch(() => {});

  useEffect(() => {
    (async () => {
      try {
        const [s, st, hist, py, ach, lf, lu] = await Promise.all([
          api.getFocus(), api.getScreenTime(), api.getRewardRates(), api.getPayouts(),
          api.getAchievements(),
          api.getSetting(FOCUS_KEY), api.getSetting(USAGE_KEY),
        ]);
        setSessions(s.sessions || []);
        setScreenRows(Array.isArray(st) ? st : []);
        setHistory(hist || []);
        setPayouts(py || []);
        setAchievements(Array.isArray(ach) ? ach : []);
        setLegacyFocus(lf?.value || {});
        setLegacyUsage(lu?.value || {});
      } catch { /* offline */ }
      setLoaded(true);
    })();
  }, []);

  // Rate lookup: date-effective history, falling back to the legacy flat rate
  // for any date before the first recorded change (so old time keeps old rate).
  const ratesByKey = {};
  history.forEach((r) => { (ratesByKey[`${r.kind}:${r.rkey}`] ||= []).push({ eff: r.eff_date, rate: r.rate }); });
  Object.values(ratesByKey).forEach((arr) => arr.sort((a, b) => a.eff.localeCompare(b.eff)));
  const rateOn = (kind, key, day) => {
    const arr = ratesByKey[`${kind}:${key}`];
    if (arr) { let r = null; for (const seg of arr) { if (seg.eff <= day) r = seg.rate; else break; } if (r !== null) return r; }
    return (kind === "focus" ? legacyFocus[key] : legacyUsage[key]) || 0;
  };
  const currentRate = (kind, key) => {
    const arr = ratesByKey[`${kind}:${key}`];
    if (arr && arr.length) return arr[arr.length - 1].rate;
    const lv = kind === "focus" ? legacyFocus[key] : legacyUsage[key];
    return lv ?? "";
  };

  const [lo, hi] = periodRange(period);

  // All-time earned (drives the consolidated pending — independent of period).
  let allFocus = 0, allUsage = 0;
  sessions.filter((s) => s.completed).forEach((s) => {
    const day = (s.started_at || s.created_at || "").slice(0, 10);
    const p = TREES[s.tree] ? s.tree : DEFAULT_TREE;
    allFocus += ((s.actual_min || 0) / 60) * rateOn("focus", p, day);
  });
  screenRows.forEach((r) => { if (!USAGE_EXCLUDE.has(r.screen)) allUsage += (r.seconds / 60) * rateOn("usage", r.screen, r.date); });
  // Achievement rewards: manual appreciation amounts set in the Achievements section.
  const allAch = achievements.reduce((n, a) => n + (a.reward || 0), 0);
  const totalEarned = allFocus + allUsage + allAch;
  const totalTaken = payouts.reduce((n, p) => n + p.amount, 0);
  const pending = Math.max(0, totalEarned - totalTaken);

  // ── Focus rewards for the selected period ──
  const focusByPillar = {};
  PILLARS.forEach((p) => (focusByPillar[p] = { minutes: 0, earned: 0 }));
  sessions.filter((s) => s.completed).forEach((s) => {
    const day = (s.started_at || s.created_at || "").slice(0, 10);
    if (day < lo || day > hi) return;
    const p = TREES[s.tree] ? s.tree : DEFAULT_TREE;
    const min = s.actual_min || 0;
    focusByPillar[p].minutes += min;
    focusByPillar[p].earned += (min / 60) * rateOn("focus", p, day);
  });
  const totalFocus = PILLARS.reduce((n, p) => n + focusByPillar[p].earned, 0);

  // ── Usage rewards for the selected period ──
  const usageByScreen = {};
  screenRows.forEach((r) => {
    if (USAGE_EXCLUDE.has(r.screen)) return; // Rewards + Achievements never earn usage
    if (r.date < lo || r.date > hi) return;
    const u = (usageByScreen[r.screen] ||= { seconds: 0, earned: 0 });
    u.seconds += r.seconds;
    u.earned += (r.seconds / 60) * rateOn("usage", r.screen, r.date);
  });
  const totalUsage = Object.values(usageByScreen).reduce((n, u) => n + u.earned, 0);

  // ── Achievement rewards for the selected period (by achievement date) ──
  const achInPeriod = achievements.filter((a) => a.date >= lo && a.date <= hi && (a.reward || 0) > 0);
  const achRows = [...achInPeriod].sort((a, b) => (b.date.localeCompare(a.date)) || (b.reward - a.reward));
  const totalAch = achInPeriod.reduce((n, a) => n + (a.reward || 0), 0);

  const periodEarned = totalFocus + totalUsage + totalAch;
  const focusPct = periodEarned > 0 ? (totalFocus / periodEarned) * 100 : 0;
  const usagePct = periodEarned > 0 ? (totalUsage / periodEarned) * 100 : 0;
  const achPct = periodEarned > 0 ? (totalAch / periodEarned) * 100 : 0;

  const focusRows = PILLARS.map((p) => ({ p, ...focusByPillar[p], ...TREES[p] })).filter((r) => r.minutes > 0).sort((a, b) => b.earned - a.earned);
  const usageRows = SCREEN_LIST.map((s) => ({ ...s, ...(usageByScreen[s.id] || { seconds: 0, earned: 0 }) })).filter((r) => r.seconds > 0).sort((a, b) => b.earned - a.earned);

  const saveFocusRate = (p, val) => { api.setRewardRate({ kind: "focus", rkey: p, rate: Math.max(0, parseFloat(val) || 0) }).then(reloadRates).catch(() => {}); };
  const saveUsageRate = (id, val) => { api.setRewardRate({ kind: "usage", rkey: id, rate: Math.max(0, parseFloat(val) || 0) }).then(reloadRates).catch(() => {}); };

  const openTake = (mode) => {
    if (pending <= 0) return;
    setTakeMode(mode);
    setTakeAmt(mode === "all" ? pending.toFixed(2) : "");
    setTakeNote("");
  };
  const confirmTake = async () => {
    const amt = Math.min(parseFloat(takeAmt) || 0, pending);
    if (amt <= 0 || !takeNote.trim()) return; // reason is mandatory
    await api.createPayout({ amount: amt, note: takeNote.trim(), date: nowLocal() });
    setTakeMode(null); setTakeAmt(""); setTakeNote("");
    await loadPayouts();
    setShowLog(true); // reveal the log so the new entry is visible
  };
  const removePayout = async (id) => { await api.deletePayout(id); loadPayouts(); };

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Rewards</div>
        <h1 style={S.h1}>Rewards</h1>
        <div style={S.subhead}>Your earned rewards from focus and app usage.</div>
      </div>

      {/* Consolidated final reward */}
      <div style={S.hero}>
        <button onClick={() => setShowLog((v) => !v)} style={S.logIcon} title="View reward log">
          <ScrollText size={16} />
        </button>
        <div style={S.heroLabel}>Final reward · pending</div>
        <div style={S.heroVal}>{reward(pending)}</div>
        <div style={S.heroSub}>Earned {reward(totalEarned)} · Taken {reward(totalTaken)}{allAch > 0 ? ` · incl. ${reward(allAch)} achievement` : ""}</div>

        <div style={S.heroBtns}>
          <button onClick={() => openTake("partial")} disabled={pending <= 0} style={{ ...S.heroBtnGhost, ...(pending <= 0 ? S.btnDisabled : {}) }}>Take partial</button>
          <button onClick={() => openTake("all")} disabled={pending <= 0} style={{ ...S.heroBtnSolid, ...(pending <= 0 ? S.btnDisabled : {}) }}>Take all pending</button>
        </div>
      </div>

      {/* Taken / pending stats */}
      <div style={S.statRow}>
        <div style={S.statCard}><div style={S.statVal}>{reward(totalTaken)}</div><div style={S.statLbl}>Total taken</div></div>
        <div style={S.statCard}><div style={{ ...S.statVal, color: FOCUS_COLOR }}>{reward(pending)}</div><div style={S.statLbl}>Total pending</div></div>
      </div>

      {/* Period selector */}
      <div style={S.periodRow}>
        {PERIODS.map((p) => (
          <button key={p.id} onClick={() => setPeriod(p.id)}
            style={{ ...S.periodChip, ...(period === p.id ? S.periodChipOn : {}) }}>{p.label}</button>
        ))}
      </div>

      {/* Split bar chart (period-scoped) */}
      {periodEarned > 0 ? (
        <div style={S.card}>
          <div style={S.cardTitleRow}>
            <span style={S.cardTitle}>Reward split</span>
            <span style={S.periodTotal}>{reward(periodEarned)} · {PERIODS.find((p) => p.id === period).label}</span>
          </div>
          <div style={S.splitTrack}>
            <div style={{ width: `${focusPct}%`, background: FOCUS_COLOR, height: "100%" }} />
            <div style={{ width: `${usagePct}%`, background: USAGE_COLOR, height: "100%" }} />
            <div style={{ width: `${achPct}%`, background: ACH_COLOR, height: "100%" }} />
          </div>
          <div style={S.legendRow}>
            <span style={S.legendItem}><span style={{ ...S.legendDot, background: FOCUS_COLOR }} /> Focus {Math.round(focusPct)}% · {reward(totalFocus)}</span>
            <span style={S.legendItem}><span style={{ ...S.legendDot, background: USAGE_COLOR }} /> Usage {Math.round(usagePct)}% · {reward(totalUsage)}</span>
            <span style={S.legendItem}><span style={{ ...S.legendDot, background: ACH_COLOR }} /> Achievement {Math.round(achPct)}% · {reward(totalAch)}</span>
          </div>
        </div>
      ) : (
        <div style={{ ...S.card, ...S.muted }}>No rewards earned in {PERIODS.find((p) => p.id === period).label.toLowerCase()}.</div>
      )}

      {/* Focus Rewards */}
      <div style={S.card}>
        <button onClick={() => setShowFocusRates((v) => !v)} style={S.collapseBtn}>
          <span style={{ ...S.cardTitle, color: FOCUS_COLOR }}>Focus Rewards · {reward(totalFocus)}</span>
          <span style={S.collapseHint}>{showFocusRates ? "Hide rates" : "Set rates"}</span>
        </button>
        {showFocusRates && (
          <div style={{ ...S.rateGrid, marginTop: 12 }}>
            {PILLARS.map((p) => (
              <div key={p} style={S.rateRow}>
                <span style={{ ...S.dot, background: TREES[p].leaf }} />
                <span style={S.rateName}>{TREES[p].label}</span>
                <div style={S.rateInputWrap}>
                  <span style={S.unitSign}>{cur.symbol}</span>
                  <input type="number" min="0" step="0.5" inputMode="decimal" placeholder="0"
                    value={focusInputs[p] !== undefined ? focusInputs[p] : currentRate("focus", p)}
                    onChange={(e) => setFocusInputs((m) => ({ ...m, [p]: e.target.value }))}
                    onBlur={(e) => saveFocusRate(p, e.target.value)} style={S.rateInput} />
                  <span style={S.unit}>/hr</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {focusRows.length > 0 ? (
          <div style={{ ...S.rows, marginTop: 14 }}>
            {focusRows.map((r) => (
              <div key={r.p} style={S.row}>
                <span style={{ ...S.dot, background: r.leaf }} />
                <span style={S.rowName}>{r.label}</span>
                <span style={S.rowMeta}>{fmtH(Math.round(r.minutes))}</span>
                <span style={S.rowAmt}>{reward(r.earned)}</span>
              </div>
            ))}
          </div>
        ) : <div style={S.muted}>No focus sessions yet.</div>}
      </div>

      {/* Usage Rewards */}
      <div style={S.card}>
        <button onClick={() => setShowUsageRates((v) => !v)} style={S.collapseBtn}>
          <span style={{ ...S.cardTitle, color: USAGE_COLOR }}>Usage Rewards · {reward(totalUsage)}</span>
          <span style={S.collapseHint}>{showUsageRates ? "Hide rates" : "Set rates"}</span>
        </button>
        {showUsageRates && (
          <div style={{ ...S.rateGrid, marginTop: 12 }}>
            {SCREEN_LIST.map((s) => (
              <div key={s.id} style={S.rateRow}>
                <span style={S.rateName}>{s.label}</span>
                <div style={S.rateInputWrap}>
                  <span style={S.unitSign}>{cur.symbol}</span>
                  <input type="number" min="0" step="0.1" inputMode="decimal" placeholder="0"
                    value={usageInputs[s.id] !== undefined ? usageInputs[s.id] : currentRate("usage", s.id)}
                    onChange={(e) => setUsageInputs((m) => ({ ...m, [s.id]: e.target.value }))}
                    onBlur={(e) => saveUsageRate(s.id, e.target.value)} style={S.rateInput} />
                  <span style={S.unit}>/min</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {usageRows.length > 0 ? (
          <div style={{ ...S.rows, marginTop: 14 }}>
            {usageRows.map((s) => (
              <div key={s.id} style={S.row}>
                <span style={S.rowName}>{s.label}</span>
                <span style={S.rowMeta}>{fmtDur(s.seconds / 60)}</span>
                <span style={S.rowAmt}>{reward(s.earned)}</span>
              </div>
            ))}
          </div>
        ) : <div style={S.muted}>{loaded ? "No usage tracked yet." : "Loading…"}</div>}
      </div>

      {/* Achievement Rewards */}
      <div style={S.card}>
        <div style={S.cardTitleRow}>
          <span style={{ ...S.cardTitle, color: ACH_COLOR }}>Achievement Rewards · {reward(totalAch)}</span>
          <span style={S.collapseHint}>Set in Achievements</span>
        </div>
        {achRows.length > 0 ? (
          <div style={{ ...S.rows, marginTop: 14 }}>
            {achRows.map((a) => (
              <div key={a.id} style={S.row}>
                <span style={{ ...S.dot, background: ACH_COLOR }} />
                <span style={S.rowName}>{a.title}</span>
                <span style={S.rowMeta}>{prettyWhen(a.date)}</span>
                <span style={S.rowAmt}>{reward(a.reward)}</span>
              </div>
            ))}
          </div>
        ) : <div style={{ ...S.muted, marginTop: 10 }}>No achievement rewards in {PERIODS.find((p) => p.id === period).label.toLowerCase()}. Add a reward to a win in the Achievements section.</div>}
      </div>

      {/* Reward log popup (opened via the icon on the hero) */}
      {showLog && (
        <div style={S.modalOverlay} onClick={() => setShowLog(false)}>
          <div style={S.logModal} onClick={(e) => e.stopPropagation()}>
            <div style={S.logModalHead}>
              <span style={S.modalTitle}>Reward log</span>
              <button onClick={() => setShowLog(false)} style={S.logClose} title="Close"><X size={16} /></button>
            </div>
            {payouts.length === 0 ? <div style={{ ...S.muted, padding: "24px 0", textAlign: "center" }}>No rewards taken yet.</div> : (
              <>
                <div style={S.logScroll}>
                  {payouts.map((p) => (
                    <div key={p.id} style={S.row}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={S.logNote}>{p.note || "Reward taken"}</div>
                        <div style={S.rowMeta}>{prettyWhen(p.date)}</div>
                      </div>
                      <span style={S.rowAmt}>{reward(p.amount)}</span>
                      <button onClick={() => removePayout(p.id)} style={S.del}>×</button>
                    </div>
                  ))}
                </div>
                <div style={S.totalRow}><span>Total taken</span><span style={S.totalVal}>{reward(totalTaken)}</span></div>
              </>
            )}
          </div>
        </div>
      )}

      {periodEarned > 0 && (
        <div style={S.card}>
          <div style={S.cardTitle}>Reward breakdown</div>
          <div style={S.pieWrap}>
            <div style={S.pieChart}>
              <div style={{ ...S.pieDisc, background: `conic-gradient(${FOCUS_COLOR} 0 ${focusPct}%, ${USAGE_COLOR} ${focusPct}% ${focusPct + usagePct}%, ${ACH_COLOR} ${focusPct + usagePct}% 100%)` }} />
              <div style={S.pieHole}>
                <span style={S.pieHoleVal}>{reward(periodEarned)}</span>
                <span style={S.pieHoleLbl}>total</span>
              </div>
            </div>
            <div style={S.pieLegend}>
              <div style={S.pieLegRow}>
                <span style={{ ...S.legendDot, background: FOCUS_COLOR }} />
                <span style={S.pieLegName}>Focus</span>
                <span style={S.pieLegPct}>{Math.round(focusPct)}%</span>
                <span style={S.pieLegMin}>{reward(totalFocus)}</span>
              </div>
              <div style={S.pieLegRow}>
                <span style={{ ...S.legendDot, background: USAGE_COLOR }} />
                <span style={S.pieLegName}>Usage</span>
                <span style={S.pieLegPct}>{Math.round(usagePct)}%</span>
                <span style={S.pieLegMin}>{reward(totalUsage)}</span>
              </div>
              <div style={S.pieLegRow}>
                <span style={{ ...S.legendDot, background: ACH_COLOR }} />
                <span style={S.pieLegName}>Achievement</span>
                <span style={S.pieLegPct}>{Math.round(achPct)}%</span>
                <span style={S.pieLegMin}>{reward(totalAch)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Take-reward confirmation popup */}
      {takeMode && (
        <div style={S.modalOverlay} onClick={() => setTakeMode(null)}>
          <div style={S.modalCard} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalTitle}>{takeMode === "all" ? "Take all pending reward?" : "Take partial reward"}</div>
            <div style={S.modalSub}>Pending: {reward(pending)}</div>
            <div style={S.modalInputWrap}>
              <span style={S.modalSign}>{cur.symbol}</span>
              <input type="number" min="0" step="0.01" autoFocus placeholder={pending.toFixed(2)}
                value={takeAmt} onChange={(e) => setTakeAmt(e.target.value)} style={S.modalAmt} />
            </div>
            <input placeholder="What is this reward for? (required)" value={takeNote}
              onChange={(e) => setTakeNote(e.target.value)} onKeyDown={(e) => e.key === "Enter" && confirmTake()} style={S.modalReason} />
            {(() => {
              const canTake = parseFloat(takeAmt) > 0 && !!takeNote.trim();
              return (
                <div style={S.modalActions}>
                  <button onClick={() => setTakeMode(null)} style={S.modalCancel}>Cancel</button>
                  <button onClick={confirmTake} disabled={!canTake} style={{ ...S.modalConfirm, ...(!canTake ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                    Confirm · {reward(Math.min(parseFloat(takeAmt) || 0, pending))}
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      <div style={S.note}>Set rates only affect time from today onward — past time keeps the rate it was earned at.</div>
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 20px 40px", color: "var(--text)", boxSizing: "border-box", maxWidth: 680, margin: "0 auto" },
  head: { marginBottom: 16 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },

  hero: { position: "relative", background: "linear-gradient(135deg,var(--accent-strong),var(--accent-2))", borderRadius: 16, padding: "22px 24px", color: "#fff", marginBottom: 14, textAlign: "center" },
  logIcon: { position: "absolute", top: 12, right: 12, border: "1px solid rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.12)", color: "#fff", width: 32, height: 32, borderRadius: 9, cursor: "pointer", display: "grid", placeItems: "center" },
  takeForm: { display: "flex", flexDirection: "column", gap: 10, marginTop: 16, alignItems: "center" },
  takeNoteInput: { width: "100%", maxWidth: 320, boxSizing: "border-box", border: "none", borderRadius: 10, padding: "9px 12px", fontSize: 13.5, fontFamily: "inherit", color: "#26241F", background: "#fff", outline: "none" },
  logClose: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", width: 28, height: 28, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center" },
  logNote: { fontSize: 13.5, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  modalCard: { background: "var(--surface)", color: "var(--text)", borderRadius: 16, padding: "22px 22px 18px", width: 360, maxWidth: "100%", boxShadow: "0 12px 48px rgba(0,0,0,0.3)", border: "1px solid var(--border)" },
  logModal: { background: "var(--surface)", color: "var(--text)", borderRadius: 16, padding: "18px 18px 14px", width: 440, maxWidth: "100%", maxHeight: "82vh", display: "flex", flexDirection: "column", boxShadow: "0 12px 48px rgba(0,0,0,0.3)", border: "1px solid var(--border)", boxSizing: "border-box" },
  logModalHead: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexShrink: 0 },
  logScroll: { overflowY: "auto", display: "flex", flexDirection: "column", gap: 2, paddingRight: 2, minHeight: 0 },
  modalTitle: { fontSize: 18, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 4 },
  modalSub: { fontSize: 12.5, color: "var(--text-3)", fontWeight: 600, marginBottom: 14 },
  modalInputWrap: { display: "flex", alignItems: "center", gap: 4, border: "1px solid var(--border)", borderRadius: 10, padding: "8px 12px", background: "var(--surface-2)", marginBottom: 8 },
  modalSign: { fontSize: 16, color: "var(--text-2)", fontWeight: 700 },
  modalAmt: { border: "none", background: "none", outline: "none", flex: 1, fontSize: 18, fontWeight: 700, fontFamily: "inherit", color: "var(--text)" },
  modalReason: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 10, padding: "9px 12px", fontSize: 13.5, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none", marginBottom: 14 },
  modalActions: { display: "flex", gap: 8 },
  modalCancel: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "10px 14px", borderRadius: 10, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  modalConfirm: { flex: 1, border: "none", background: "#C9A227", color: "#fff", padding: "10px 14px", borderRadius: 10, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  heroLabel: { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.85 },
  heroVal: { fontSize: 44, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", letterSpacing: "-0.02em", marginTop: 2, lineHeight: 1.05 },
  heroSub: { fontSize: 12.5, opacity: 0.9, marginTop: 6 },
  heroBtns: { display: "flex", gap: 10, marginTop: 16, justifyContent: "center" },
  heroBtnSolid: { border: "none", background: "#fff", color: "var(--accent-strong)", padding: "10px 18px", borderRadius: 10, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  heroBtnGhost: { border: "1px solid rgba(255,255,255,0.6)", background: "transparent", color: "#fff", padding: "10px 18px", borderRadius: 10, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  btnDisabled: { opacity: 0.45, cursor: "not-allowed" },
  partialRow: { display: "flex", gap: 8, marginTop: 16, justifyContent: "center", alignItems: "center", flexWrap: "wrap" },
  partialInputWrap: { display: "flex", alignItems: "center", gap: 4, background: "#fff", borderRadius: 10, padding: "6px 12px" },
  partialSign: { fontSize: 15, color: "var(--accent-strong)", fontWeight: 700 },
  partialInput: { border: "none", background: "none", outline: "none", width: 90, fontSize: 16, fontWeight: 700, fontFamily: "inherit", color: "#26241F" },

  statRow: { display: "flex", gap: 10, marginBottom: 14 },
  statCard: { flex: 1, background: "var(--surface)", borderRadius: 12, padding: "12px 14px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  statVal: { fontSize: 20, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  statLbl: { fontSize: 11, color: "var(--text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 },

  card: { background: "var(--surface)", borderRadius: 16, padding: "18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: 14 },
  cardTitle: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  cardTitleRow: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, flexWrap: "wrap" },
  periodTotal: { fontSize: 13, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", color: "var(--text-2)" },
  periodRow: { display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 14 },
  periodChip: { border: "1px solid var(--border)", background: "var(--surface)", padding: "6px 12px", borderRadius: 18, fontSize: 12.5, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit" },
  periodChipOn: { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" },
  collapseBtn: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", border: "none", background: "none", cursor: "pointer", padding: 0, fontFamily: "inherit" },
  collapseHint: { fontSize: 12, fontWeight: 700, color: "var(--accent)" },
  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "12px 0" },

  splitTrack: { display: "flex", height: 16, borderRadius: 8, overflow: "hidden", marginTop: 12, marginBottom: 12, border: "1px solid var(--border)" },
  legendRow: { display: "flex", gap: 16, flexWrap: "wrap" },
  legendItem: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--text-2)" },
  legendDot: { width: 10, height: 10, borderRadius: 3, flexShrink: 0 },

  pieWrap: { display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", marginTop: 6 },
  pieChart: { position: "relative", width: 130, height: 130, flexShrink: 0, margin: "0 auto" },
  pieDisc: { width: "100%", height: "100%", borderRadius: "50%" },
  pieHole: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 78, height: 78, borderRadius: "50%", background: "var(--surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  pieHoleVal: { fontSize: 14, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  pieHoleLbl: { fontSize: 10, color: "var(--text-3)", fontWeight: 600 },
  pieLegend: { flex: 1, minWidth: 180, display: "flex", flexDirection: "column", gap: 10 },
  pieLegRow: { display: "flex", alignItems: "center", gap: 8 },
  pieLegName: { flex: 1, fontSize: 13.5, fontWeight: 600 },
  pieLegPct: { fontSize: 13, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", width: 46, textAlign: "right" },
  pieLegMin: { fontSize: 12, color: "var(--text-3)", fontWeight: 600, minWidth: 64, textAlign: "right" },

  rows: { display: "flex", flexDirection: "column", gap: 2 },
  row: { display: "flex", alignItems: "center", gap: 8, padding: "7px 0", borderBottom: "1px solid var(--border)" },
  dot: { width: 10, height: 10, borderRadius: 3, flexShrink: 0 },
  rowName: { flex: 1, fontSize: 13.5, fontWeight: 600, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  rowMeta: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600, flexShrink: 0 },
  rowAmt: { fontSize: 13.5, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", flexShrink: 0, minWidth: 64, textAlign: "right" },
  del: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", fontSize: 16, lineHeight: 1, padding: "0 2px", flexShrink: 0 },
  totalRow: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10, marginTop: 4, fontSize: 14, fontWeight: 700 },
  totalVal: { fontSize: 16, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },

  rateGrid: { display: "flex", flexDirection: "column", gap: 10 },
  rateRow: { display: "flex", alignItems: "center", gap: 8 },
  rateName: { flex: 1, fontSize: 14, fontWeight: 600 },
  rateInputWrap: { display: "flex", alignItems: "center", gap: 3, border: "1px solid var(--border)", borderRadius: 9, padding: "4px 10px", background: "var(--surface-2)" },
  unitSign: { fontSize: 14, color: "var(--text-2)", fontWeight: 600 },
  rateInput: { border: "none", background: "none", outline: "none", width: 64, fontSize: 14, fontWeight: 700, fontFamily: "inherit", color: "var(--text)", textAlign: "right" },
  unit: { fontSize: 12, color: "var(--text-3)", fontWeight: 600 },

  note: { fontSize: 11.5, color: "var(--text-3)", textAlign: "center", fontStyle: "italic", marginTop: 4 },
};
