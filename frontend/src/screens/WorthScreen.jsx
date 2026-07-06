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
  { id: "achievements", label: "Achievements" }, { id: "challenges", label: "Challenges" },
  { id: "bucket", label: "Bucket List" },
];
// Screens that never earn a usage reward (Rewards itself). Time spent viewing
// Achievements now earns a usage reward like any other screen; the manual
// per-win appreciation amounts remain a separate reward type.
const USAGE_EXCLUDE = new Set(["worth"]);

const TOGGLES_KEY = "reward_toggles"; // { focus, usage, achievement, challenge } → bool enabled
const BUCKET_TAKE_KEY = "bucket_take_enabled"; // when true, Take flow spends on bucket wishes

const FOCUS_COLOR = "#C9A227";
const USAGE_COLOR = "#3A7CA5";
const ACH_COLOR = "#C2536B";
const CHAL_COLOR = "#4C9A6B";

// Rotating palette for the per-screen usage pie (which screens I use the most).
const USAGE_PALETTE = [
  "#3A7CA5", "#4C9A6B", "#C2773B", "#8268B0", "#C2536B", "#C9A227",
  "#5B9B9B", "#B0654E", "#6E7FC2", "#A23E57", "#3E9E6B", "#9A7BB0",
  "#C99B2E", "#4E86B0", "#B04E86", "#6BA34C", "#8A6D3B",
];

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
  const [challenges, setChallenges] = useState([]);
  const [legacyFocus, setLegacyFocus] = useState({});
  const [legacyUsage, setLegacyUsage] = useState({});
  const [toggles, setToggles] = useState({ focus: true, usage: true, achievement: true, challenge: true });
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

  const [bucket, setBucket] = useState([]);
  const [bucketTake, setBucketTake] = useState(false); // spend Take flow on wishes
  const [selWish, setSelWish] = useState(null);        // wish chosen in the Take popup

  const loadPayouts = () => api.getPayouts().then(setPayouts).catch(() => {});
  const loadBucket = () => api.getBucket().then((d) => setBucket(Array.isArray(d) ? d : [])).catch(() => {});
  const reloadRates = () => api.getRewardRates().then(setHistory).catch(() => {});

  useEffect(() => {
    (async () => {
      try {
        const [s, st, hist, py, ach, chal, bk, lf, lu, tg, btk] = await Promise.all([
          api.getFocus(), api.getScreenTime(), api.getRewardRates(), api.getPayouts(),
          api.getAchievements(), api.getChallenges(), api.getBucket(),
          api.getSetting(FOCUS_KEY), api.getSetting(USAGE_KEY), api.getSetting(TOGGLES_KEY),
          api.getSetting(BUCKET_TAKE_KEY),
        ]);
        setSessions(s.sessions || []);
        setScreenRows(Array.isArray(st) ? st : []);
        setHistory(hist || []);
        setPayouts(py || []);
        setAchievements(Array.isArray(ach) ? ach : []);
        setChallenges(Array.isArray(chal) ? chal : []);
        setBucket(Array.isArray(bk) ? bk : []);
        setLegacyFocus(lf?.value || {});
        setLegacyUsage(lu?.value || {});
        if (tg?.value) setToggles((t) => ({ ...t, ...tg.value }));
        setBucketTake(!!btk?.value);
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
  // Challenge rewards: reward_cost of every challenge that reached its target.
  const completedChallenges = challenges.filter((c) => c.status === "done");
  const allChal = completedChallenges.reduce((n, c) => n + (c.reward_earned || 0), 0);
  // Disabled reward types don't contribute to the earned/pending total.
  const totalEarned =
    (toggles.focus ? allFocus : 0) +
    (toggles.usage ? allUsage : 0) +
    (toggles.achievement ? allAch : 0) +
    (toggles.challenge ? allChal : 0);
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
  const totalFocus = toggles.focus ? PILLARS.reduce((n, p) => n + focusByPillar[p].earned, 0) : 0;

  // ── Usage rewards for the selected period ──
  const usageByScreen = {};
  screenRows.forEach((r) => {
    if (USAGE_EXCLUDE.has(r.screen)) return; // Rewards + Achievements never earn usage
    if (r.date < lo || r.date > hi) return;
    const u = (usageByScreen[r.screen] ||= { seconds: 0, earned: 0 });
    u.seconds += r.seconds;
    u.earned += (r.seconds / 60) * rateOn("usage", r.screen, r.date);
  });
  const totalUsage = toggles.usage ? Object.values(usageByScreen).reduce((n, u) => n + u.earned, 0) : 0;

  // ── Achievement rewards for the selected period (by achievement date) ──
  const achInPeriod = achievements.filter((a) => a.date >= lo && a.date <= hi && (a.reward || 0) > 0);
  const achRows = [...achInPeriod].sort((a, b) => (b.date.localeCompare(a.date)) || (b.reward - a.reward));
  const totalAch = toggles.achievement ? achInPeriod.reduce((n, a) => n + (a.reward || 0), 0) : 0;

  // ── Challenge rewards for the selected period ──
  // A completed challenge is attributed to its end_date; challenges with no
  // deadline count in every period (they were earned "all time").
  const chalInPeriod = completedChallenges.filter((c) => !c.end_date || (c.end_date >= lo && c.end_date <= hi));
  const chalRows = [...chalInPeriod].sort((a, b) => (b.reward_earned || 0) - (a.reward_earned || 0));
  const totalChal = toggles.challenge ? chalInPeriod.reduce((n, c) => n + (c.reward_earned || 0), 0) : 0;

  const periodEarned = totalFocus + totalUsage + totalAch + totalChal;
  const focusPct = periodEarned > 0 ? (totalFocus / periodEarned) * 100 : 0;
  const usagePct = periodEarned > 0 ? (totalUsage / periodEarned) * 100 : 0;
  const achPct = periodEarned > 0 ? (totalAch / periodEarned) * 100 : 0;
  const chalPct = periodEarned > 0 ? (totalChal / periodEarned) * 100 : 0;

  const focusRows = PILLARS.map((p) => ({ p, ...focusByPillar[p], ...TREES[p] })).filter((r) => r.minutes > 0).sort((a, b) => b.earned - a.earned);
  const usageRows = SCREEN_LIST.map((s) => ({ ...s, ...(usageByScreen[s.id] || { seconds: 0, earned: 0 }) })).filter((r) => r.seconds > 0).sort((a, b) => b.earned - a.earned);

  // Usage pie: which screens I spent the most time on (by seconds, not reward).
  const usageTimeTotal = usageRows.reduce((n, s) => n + s.seconds, 0);
  let usageAcc = 0;
  const usageSegs = usageRows.map((s, i) => {
    const start = usageTimeTotal > 0 ? (usageAcc / usageTimeTotal) * 100 : 0;
    usageAcc += s.seconds;
    const end = usageTimeTotal > 0 ? (usageAcc / usageTimeTotal) * 100 : 0;
    return { ...s, color: USAGE_PALETTE[i % USAGE_PALETTE.length], start, end, pct: usageTimeTotal > 0 ? (s.seconds / usageTimeTotal) * 100 : 0 };
  });
  const usageGradient = usageSegs.length
    ? `conic-gradient(${usageSegs.map((s) => `${s.color} ${s.start}% ${s.end}%`).join(", ")})`
    : "var(--surface-2)";

  // Commit only the rows the user actually edited (present in the inputs map),
  // then clear the drafts and close the editor. Cancel just drops the drafts.
  const saveFocusRates = async () => {
    const edits = Object.entries(focusInputs);
    for (const [p, val] of edits) {
      await api.setRewardRate({ kind: "focus", rkey: p, rate: Math.max(0, parseFloat(val) || 0) }).catch(() => {});
    }
    setFocusInputs({});
    setShowFocusRates(false);
    reloadRates();
  };
  const cancelFocusRates = () => { setFocusInputs({}); setShowFocusRates(false); };
  const saveUsageRates = async () => {
    const edits = Object.entries(usageInputs);
    for (const [id, val] of edits) {
      await api.setRewardRate({ kind: "usage", rkey: id, rate: Math.max(0, parseFloat(val) || 0) }).catch(() => {});
    }
    setUsageInputs({});
    setShowUsageRates(false);
    reloadRates();
  };
  const cancelUsageRates = () => { setUsageInputs({}); setShowUsageRates(false); };
  const toggleReward = (kind) => {
    setToggles((t) => {
      const next = { ...t, [kind]: !t[kind] };
      api.setSetting(TOGGLES_KEY, next).catch(() => {});
      return next;
    });
  };

  const openTake = (mode) => {
    if (pending <= 0) return;
    setTakeMode(mode);
    setTakeAmt(mode === "all" ? pending.toFixed(2) : "");
    setTakeNote("");
    setSelWish(null);
  };
  const confirmTake = async () => {
    const amt = Math.min(parseFloat(takeAmt) || 0, pending);
    if (amt <= 0 || !takeNote.trim()) return; // reason is mandatory
    await api.createPayout({ amount: amt, note: takeNote.trim(), date: nowLocal() });
    setTakeMode(null); setTakeAmt(""); setTakeNote("");
    await loadPayouts();
    setShowLog(true); // reveal the log so the new entry is visible
  };
  // Bucket-list mode: fulfilling a wish records a payout equal to its cost (done
  // server-side) and marks the wish fulfilled. Blocked when it exceeds pending.
  const confirmWish = async () => {
    if (!selWish || (selWish.cost || 0) > pending) return;
    await api.fulfillBucketWish(selWish.id).catch(() => {});
    setTakeMode(null); setSelWish(null);
    await Promise.all([loadPayouts(), loadBucket()]);
    setShowLog(true);
  };
  const toggleBucketTake = () => {
    setBucketTake((v) => {
      const next = !v;
      api.setSetting(BUCKET_TAKE_KEY, next).catch(() => {});
      return next;
    });
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
        <div style={S.heroSub}>Earned {reward(totalEarned)} · Taken {reward(totalTaken)}{allAch > 0 ? ` · incl. ${reward(allAch)} achievement` : ""}{allChal > 0 ? ` · incl. ${reward(allChal)} challenge` : ""}</div>

        <div style={S.heroBtns}>
          <button onClick={() => openTake("partial")} disabled={pending <= 0} style={{ ...S.heroBtnGhost, ...(pending <= 0 ? S.btnDisabled : {}) }}>Take partial</button>
          <button onClick={() => openTake("all")} disabled={pending <= 0} style={{ ...S.heroBtnSolid, ...(pending <= 0 ? S.btnDisabled : {}) }}>Take all pending</button>
        </div>

        {/* Toggle: spend the Take flow on Bucket List wishes instead of a free amount */}
        <button onClick={toggleBucketTake} style={S.bucketToggleRow}
          title={bucketTake ? "Taking will pick a bucket-list wish" : "Taking uses a free amount"}>
          <span style={{ ...S.miniToggle, background: bucketTake ? "#fff" : "rgba(255,255,255,0.3)", justifyContent: bucketTake ? "flex-end" : "flex-start" }}>
            <span style={{ ...S.miniKnob, background: bucketTake ? "var(--accent-strong)" : "#fff" }} />
          </span>
          <span>Fulfil from bucket list{bucketTake ? " · on" : " · off"}</span>
        </button>
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
            <div style={{ width: `${chalPct}%`, background: CHAL_COLOR, height: "100%" }} />
          </div>
          <div style={S.legendRow}>
            <span style={S.legendItem}><span style={{ ...S.legendDot, background: FOCUS_COLOR }} /> Focus {Math.round(focusPct)}% · {reward(totalFocus)}</span>
            <span style={S.legendItem}><span style={{ ...S.legendDot, background: USAGE_COLOR }} /> Usage {Math.round(usagePct)}% · {reward(totalUsage)}</span>
            <span style={S.legendItem}><span style={{ ...S.legendDot, background: ACH_COLOR }} /> Achievement {Math.round(achPct)}% · {reward(totalAch)}</span>
            <span style={S.legendItem}><span style={{ ...S.legendDot, background: CHAL_COLOR }} /> Challenges {Math.round(chalPct)}% · {reward(totalChal)}</span>
          </div>
        </div>
      ) : (
        <div style={{ ...S.card, ...S.muted }}>No rewards earned in {PERIODS.find((p) => p.id === period).label.toLowerCase()}.</div>
      )}

      {/* Focus Rewards */}
      <div style={{ ...S.card, ...(toggles.focus ? {} : S.cardOff) }}>
        <div style={S.sectionHead}>
          <span style={{ ...S.cardTitle, color: FOCUS_COLOR }}>Focus Rewards · {reward(totalFocus)}</span>
          <div style={S.sectionHeadRight}>
            {toggles.focus && (
              <button onClick={() => (showFocusRates ? cancelFocusRates() : setShowFocusRates(true))} style={S.collapseLink}>
                {showFocusRates ? "Hide rates" : "Set rates"}
              </button>
            )}
            <Toggle on={toggles.focus} onClick={() => toggleReward("focus")} color={FOCUS_COLOR} />
          </div>
        </div>
        {toggles.focus && showFocusRates && (
          <div style={{ marginTop: 12 }}>
            <div style={S.rateGrid}>
              {PILLARS.map((p) => (
                <div key={p} style={S.rateRow}>
                  <span style={{ ...S.dot, background: TREES[p].leaf }} />
                  <span style={S.rateName}>{TREES[p].label}</span>
                  <div style={S.rateInputWrap}>
                    <span style={S.unitSign}>{cur.symbol}</span>
                    <input type="number" min="0" step="0.5" inputMode="decimal" placeholder="0"
                      value={focusInputs[p] !== undefined ? focusInputs[p] : currentRate("focus", p)}
                      onChange={(e) => setFocusInputs((m) => ({ ...m, [p]: e.target.value }))}
                      style={S.rateInput} />
                    <span style={S.unit}>/hr</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={S.rateActions}>
              <button onClick={cancelFocusRates} style={S.rateCancel}>Cancel</button>
              <button onClick={saveFocusRates} style={S.rateSave}>Save</button>
            </div>
          </div>
        )}
        {!toggles.focus ? (
          <div style={S.muted}>Focus rewards are disabled — no reward is being calculated.</div>
        ) : focusRows.length > 0 ? (
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
      <div style={{ ...S.card, ...(toggles.usage ? {} : S.cardOff) }}>
        <div style={S.sectionHead}>
          <span style={{ ...S.cardTitle, color: USAGE_COLOR }}>Usage Rewards · {reward(totalUsage)}</span>
          <div style={S.sectionHeadRight}>
            {toggles.usage && (
              <button onClick={() => (showUsageRates ? cancelUsageRates() : setShowUsageRates(true))} style={S.collapseLink}>
                {showUsageRates ? "Hide rates" : "Set rates"}
              </button>
            )}
            <Toggle on={toggles.usage} onClick={() => toggleReward("usage")} color={USAGE_COLOR} />
          </div>
        </div>
        {toggles.usage && showUsageRates && (
          <div style={{ marginTop: 12 }}>
            <div style={S.rateGrid}>
              {SCREEN_LIST.map((s) => (
                <div key={s.id} style={S.rateRow}>
                  <span style={S.rateName}>{s.label}</span>
                  <div style={S.rateInputWrap}>
                    <span style={S.unitSign}>{cur.symbol}</span>
                    <input type="number" min="0" step="0.1" inputMode="decimal" placeholder="0"
                      value={usageInputs[s.id] !== undefined ? usageInputs[s.id] : currentRate("usage", s.id)}
                      onChange={(e) => setUsageInputs((m) => ({ ...m, [s.id]: e.target.value }))}
                      style={S.rateInput} />
                    <span style={S.unit}>/min</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={S.rateActions}>
              <button onClick={cancelUsageRates} style={S.rateCancel}>Cancel</button>
              <button onClick={saveUsageRates} style={S.rateSave}>Save</button>
            </div>
          </div>
        )}
        {!toggles.usage ? (
          <div style={S.muted}>Usage rewards are disabled — no reward is being calculated.</div>
        ) : usageRows.length > 0 ? (
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

        {/* Usage pie — which screens I spent the most time on this period */}
        {toggles.usage && usageTimeTotal > 0 && (
          <div style={S.usagePieBlock}>
            <div style={S.usagePieTitle}>Most-used screens · {PERIODS.find((p) => p.id === period).label}</div>
            <div style={S.pieWrap}>
              <div style={S.pieChart}>
                <div style={{ ...S.pieDisc, background: usageGradient }} />
                <div style={S.pieHole}>
                  <span style={S.pieHoleVal}>{fmtDur(usageTimeTotal / 60)}</span>
                  <span style={S.pieHoleLbl}>total time</span>
                </div>
              </div>
              <div style={S.pieLegend}>
                {usageSegs.map((s) => (
                  <div key={s.id} style={S.pieLegRow}>
                    <span style={{ ...S.legendDot, background: s.color }} />
                    <span style={S.pieLegName}>{s.label}</span>
                    <span style={S.pieLegPct}>{Math.round(s.pct)}%</span>
                    <span style={S.pieLegMin}>{fmtDur(s.seconds / 60)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Achievement Rewards */}
      <div style={{ ...S.card, ...(toggles.achievement ? {} : S.cardOff) }}>
        <div style={S.sectionHead}>
          <span style={{ ...S.cardTitle, color: ACH_COLOR }}>Achievement Rewards · {reward(totalAch)}</span>
          <div style={S.sectionHeadRight}>
            {toggles.achievement && <span style={S.collapseHint}>Set in Achievements</span>}
            <Toggle on={toggles.achievement} onClick={() => toggleReward("achievement")} color={ACH_COLOR} />
          </div>
        </div>
        {!toggles.achievement ? (
          <div style={{ ...S.muted, marginTop: 10 }}>Achievement rewards are disabled — no reward is being calculated.</div>
        ) : achRows.length > 0 ? (
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

      {/* Challenge Rewards */}
      <div style={{ ...S.card, ...(toggles.challenge ? {} : S.cardOff) }}>
        <div style={S.sectionHead}>
          <span style={{ ...S.cardTitle, color: CHAL_COLOR }}>Challenge Rewards · {reward(totalChal)}</span>
          <div style={S.sectionHeadRight}>
            {toggles.challenge && <span style={S.collapseHint}>Set in Challenges</span>}
            <Toggle on={toggles.challenge} onClick={() => toggleReward("challenge")} color={CHAL_COLOR} />
          </div>
        </div>
        {!toggles.challenge ? (
          <div style={{ ...S.muted, marginTop: 10 }}>Challenge rewards are disabled — no reward is being calculated.</div>
        ) : chalRows.length > 0 ? (
          <div style={{ ...S.rows, marginTop: 14 }}>
            {chalRows.map((c) => (
              <div key={c.id} style={S.row}>
                <span style={{ ...S.dot, background: CHAL_COLOR }} />
                <span style={S.rowName}>{c.name}</span>
                <span style={S.rowMeta}>{c.reward || "Completed"}</span>
                <span style={S.rowAmt}>{reward(c.reward_earned)}</span>
              </div>
            ))}
          </div>
        ) : <div style={{ ...S.muted, marginTop: 10 }}>No completed challenges in {PERIODS.find((p) => p.id === period).label.toLowerCase()}. Finish a challenge in the Challenges section to bank its reward.</div>}
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
              <div style={{ ...S.pieDisc, background: `conic-gradient(${FOCUS_COLOR} 0 ${focusPct}%, ${USAGE_COLOR} ${focusPct}% ${focusPct + usagePct}%, ${ACH_COLOR} ${focusPct + usagePct}% ${focusPct + usagePct + achPct}%, ${CHAL_COLOR} ${focusPct + usagePct + achPct}% 100%)` }} />
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
              <div style={S.pieLegRow}>
                <span style={{ ...S.legendDot, background: CHAL_COLOR }} />
                <span style={S.pieLegName}>Challenges</span>
                <span style={S.pieLegPct}>{Math.round(chalPct)}%</span>
                <span style={S.pieLegMin}>{reward(totalChal)}</span>
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

            {bucketTake ? (() => {
              // Bucket-list mode: pick a wish; its cost is deducted on confirm.
              const openWishes = bucket.filter((w) => !w.fulfilled);
              const tooCostly = selWish && (selWish.cost || 0) > pending;
              const canConfirm = selWish && !tooCostly;
              return (
                <>
                  {openWishes.length === 0 ? (
                    <div style={S.wishEmpty}>No unfulfilled wishes. Add some in the Bucket List section.</div>
                  ) : (
                    <div style={S.wishList}>
                      {openWishes.map((w, i) => {
                        const over = (w.cost || 0) > pending;
                        const on = selWish?.id === w.id;
                        return (
                          <button key={w.id} onClick={() => !over && setSelWish(w)} disabled={over}
                            style={{ ...S.wishRow, ...(on ? S.wishRowOn : {}), ...(over ? S.wishRowOver : {}) }}>
                            <span style={S.wishRank}>{i + 1}</span>
                            <span style={S.wishName}>{w.wish}</span>
                            <span style={S.wishCost}>{reward(w.cost)}{over ? " · too costly" : ""}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  <div style={S.modalActions}>
                    <button onClick={() => setTakeMode(null)} style={S.modalCancel}>Cancel</button>
                    <button onClick={confirmWish} disabled={!canConfirm}
                      style={{ ...S.modalConfirm, ...(!canConfirm ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                      {selWish ? `Fulfil · ${reward(selWish.cost)}` : "Pick a wish"}
                    </button>
                  </div>
                </>
              );
            })() : (
              <>
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
              </>
            )}
          </div>
        </div>
      )}

      <div style={S.note}>Set rates only affect time from today onward — past time keeps the rate it was earned at.</div>
    </div>
  );
}

// Small on/off switch used to enable/disable a reward type.
function Toggle({ on, onClick, color }) {
  return (
    <button onClick={onClick} title={on ? "Disable — stop calculating this reward" : "Enable this reward"}
      style={{ ...S.toggle, background: on ? color : "var(--border)", justifyContent: on ? "flex-end" : "flex-start" }}>
      <span style={S.toggleKnob} />
    </button>
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

  bucketToggleRow: { display: "inline-flex", alignItems: "center", gap: 8, margin: "12px auto 0", border: "none", background: "rgba(255,255,255,0.12)", color: "#fff", padding: "6px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  miniToggle: { display: "flex", alignItems: "center", width: 32, height: 18, borderRadius: 10, padding: 2, flexShrink: 0, transition: "background 0.15s" },
  miniKnob: { width: 14, height: 14, borderRadius: "50%", boxShadow: "0 1px 2px rgba(0,0,0,0.3)" },

  wishList: { display: "flex", flexDirection: "column", gap: 6, maxHeight: 300, overflowY: "auto", margin: "4px 0 4px" },
  wishRow: { display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left", border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 10, padding: "10px 12px", cursor: "pointer", fontFamily: "inherit" },
  wishRowOn: { borderColor: "var(--accent-strong)", background: "var(--hover)", boxShadow: "0 0 0 1px var(--accent-strong)" },
  wishRowOver: { opacity: 0.5, cursor: "not-allowed" },
  wishRank: { fontSize: 12, fontWeight: 800, color: "var(--text-3)", fontFamily: "'Fraunces',Georgia,serif", flexShrink: 0 },
  wishName: { flex: 1, fontSize: 13.5, fontWeight: 700, color: "var(--text)", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  wishCost: { fontSize: 13, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", color: "var(--accent-strong)", flexShrink: 0 },
  wishEmpty: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "20px 0" },
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
  sectionHead: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" },
  sectionHeadRight: { display: "flex", alignItems: "center", gap: 12 },
  collapseLink: { border: "none", background: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", fontSize: 12, fontWeight: 700, color: "var(--accent)" },
  cardOff: { opacity: 0.62 },
  toggle: { border: "none", cursor: "pointer", width: 40, height: 22, borderRadius: 11, padding: 2, display: "flex", alignItems: "center", transition: "background 0.15s", flexShrink: 0 },
  toggleKnob: { width: 18, height: 18, borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.3)" },
  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "12px 0" },

  splitTrack: { display: "flex", height: 16, borderRadius: 8, overflow: "hidden", marginTop: 12, marginBottom: 12, border: "1px solid var(--border)" },
  legendRow: { display: "flex", gap: 16, flexWrap: "wrap" },
  legendItem: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--text-2)" },
  legendDot: { width: 10, height: 10, borderRadius: 3, flexShrink: 0 },

  usagePieBlock: { marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--border)" },
  usagePieTitle: { fontSize: 12.5, fontWeight: 700, color: "var(--text-2)", marginBottom: 6 },
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

  rateActions: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 14 },
  rateCancel: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "8px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  rateSave: { border: "none", background: "var(--accent-strong)", color: "#fff", padding: "8px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  rateGrid: { display: "flex", flexDirection: "column", gap: 10 },
  rateRow: { display: "flex", alignItems: "center", gap: 8 },
  rateName: { flex: 1, fontSize: 14, fontWeight: 600 },
  rateInputWrap: { display: "flex", alignItems: "center", gap: 3, border: "1px solid var(--border)", borderRadius: 9, padding: "4px 10px", background: "var(--surface-2)" },
  unitSign: { fontSize: 14, color: "var(--text-2)", fontWeight: 600 },
  rateInput: { border: "none", background: "none", outline: "none", width: 64, fontSize: 14, fontWeight: 700, fontFamily: "inherit", color: "var(--text)", textAlign: "right" },
  unit: { fontSize: 12, color: "var(--text-3)", fontWeight: 600 },

  note: { fontSize: 11.5, color: "var(--text-3)", textAlign: "center", fontStyle: "italic", marginTop: 4 },
};
