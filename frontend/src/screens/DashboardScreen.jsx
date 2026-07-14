import { useState, useEffect, useCallback, useMemo } from "react";
import {
  CheckSquare, Trees, ReceiptText, Sparkles, Rocket, Headphones,
  BookOpen, Crown, Target, RotateCcw, ArrowRight, IndianRupee,
} from "lucide-react";
import { api } from "../api.js";
import { useCurrency, fmtMoney2 } from "../currency.js";
import { useMonthStartDay, cycleRange } from "../monthCycle.js";
import { effectiveTodayISO } from "../dayStart.js";
import { TREES, DEFAULT_TREE } from "./grove/trees.jsx";
import HelpButton from "../components/HelpButton.jsx";

const FOCUS_COLOR = "#C9A227";
const USAGE_COLOR = "#3A7CA5";
const ACH_COLOR = "#C2536B";
const CHAL_COLOR = "#4C9A6B";
const USAGE_EXCLUDE = new Set(["worth"]);

const toISO = (d) => { const p = (n) => String(n).padStart(2, "0"); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; };
// "Today" honours the configured start-of-day hour (Settings → General).
const TODAY = effectiveTodayISO();
const dayOffISO = (off) => { const d = new Date(TODAY + "T12:00:00"); d.setDate(d.getDate() + off); return toISO(d); };
const DAY_FULL = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const todayName = () => DAY_FULL[(new Date().getDay() + 6) % 7];

const MOODS = { 1: "😣 Rough", 2: "🙁 Low", 3: "😐 Okay", 4: "🙂 Good", 5: "😄 Great" };
const fmtMin = (min) => { const m = Math.round(min || 0); const h = Math.floor(m / 60), r = m % 60; return h ? `${h}h ${r}m` : `${r}m`; };

// Mon–Sun week containing `ds`.
const weekDatesOf = (ds) => {
  const dt = new Date(ds + "T00:00:00");
  const dow = dt.getDay();
  const mon = new Date(dt); mon.setDate(dt.getDate() + (dow === 0 ? -6 : 1 - dow));
  return Array.from({ length: 7 }, (_, i) => { const x = new Date(mon); x.setDate(mon.getDate() + i); return toISO(x); });
};

export default function DashboardScreen({ onNavigate }) {
  const cur = useCurrency();
  const monthStartDay = useMonthStartDay();
  const money = (n) => fmtMoney2(n, cur.code);

  const [loaded, setLoaded] = useState(false);
  const [habits, setHabits] = useState([]);
  const [focus, setFocus] = useState({ sessions: [], stats: {} });
  const [screenRows, setScreenRows] = useState([]);
  const [history, setHistory] = useState([]);
  const [payouts, setPayouts] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [legacyFocus, setLegacyFocus] = useState({});
  const [legacyUsage, setLegacyUsage] = useState({});
  const [expCats, setExpCats] = useState([]);
  const [expLogs, setExpLogs] = useState([]);
  const [dueToday, setDueToday] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [goldenGoals, setGoldenGoals] = useState([]);
  const [scriptures, setScriptures] = useState([]);
  const [goals, setGoals] = useState([]);
  const [journal, setJournal] = useState(null);
  const [kickstart, setKickstart] = useState([]);

  const load = useCallback(() => {
    Promise.all([
      api.getHabits().catch(() => []),
      api.getFocus().catch(() => ({ sessions: [], stats: {} })),
      api.getScreenTime().catch(() => []),
      api.getRewardRates().catch(() => []),
      api.getPayouts().catch(() => []),
      api.getAchievements().catch(() => []),
      api.getSetting("grove_rates").catch(() => null),
      api.getSetting("reward_rates").catch(() => null),
      api.getExpenses().catch(() => ({ categories: [], logs: [] })),
      api.getDueToday().catch(() => []),
      api.getChallenges().catch(() => []),
      api.getGoldenGoals().catch(() => []),
      api.getScriptures().catch(() => []),
      api.getGoals().catch(() => []),
      api.getJournalEntry(TODAY).catch(() => null),
      api.getKickstart().catch(() => []),
    ]).then(([h, fc, st, hist, py, ach, lf, lu, exp, due, chal, gg, sc, gl, jr, ks]) => {
      setHabits(h || []);
      setFocus(fc || { sessions: [], stats: {} });
      setScreenRows(Array.isArray(st) ? st : []);
      setHistory(hist || []);
      setPayouts(py || []);
      setAchievements(Array.isArray(ach) ? ach : []);
      setLegacyFocus(lf?.value || {});
      setLegacyUsage(lu?.value || {});
      setExpCats(exp?.categories || []);
      setExpLogs(exp?.logs || []);
      setDueToday(due || []);
      setChallenges(Array.isArray(chal) ? chal : []);
      setGoldenGoals(Array.isArray(gg) ? gg : []);
      setScriptures(Array.isArray(sc) ? sc : []);
      setGoals(Array.isArray(gl) ? gl : []);
      setJournal(jr);
      setKickstart(Array.isArray(ks) ? ks : []);
      setLoaded(true);
    }).catch(() => setLoaded(true));
  }, []);
  useEffect(() => { load(); }, [load]);

  /* ── Habits: completion (chain-aware, same rules as the Habits screen) ── */
  const activeHabits = useMemo(() => habits.filter((h) => h.active !== false), [habits]);
  const logSet = (h) => new Set(h.logs || []);
  const actualDone = (h, d) => {
    if ((h.type === "minimum" || h.type === "maximum") && h.period === "day") {
      const c = h.log_counts?.[d];
      if (c === undefined || c === null) return false;
      return h.type === "minimum" ? c >= (h.target_count || 0) : (c > 0 && c <= (h.target_count || 0));
    }
    return logSet(h).has(d);
  };
  const weekMet = (h, wk) => h.type === "minimum" && h.period === "week" && wk.filter((d) => logSet(h).has(d)).length >= (h.target_count || 0);
  const monthMet = (h, ym) => h.type === "minimum" && h.period === "month" && (h.logs || []).filter((d) => d.slice(0, 7) === ym).length >= (h.target_count || 0);
  const yearMet = (h, y) => h.type === "minimum" && h.period === "year" && (h.logs || []).filter((d) => d.slice(0, 4) === y).length >= (h.target_count || 0);
  const chainCoversDay = (h, d) => {
    if (h.type !== "minimum") return false;
    if (h.period === "week") return weekMet(h, weekDatesOf(d));
    if (h.period === "month") return monthMet(h, d.slice(0, 7));
    if (h.period === "year") return yearMet(h, d.slice(0, 4));
    return false;
  };
  const isDoneOn = (h, d) => actualDone(h, d) || chainCoversDay(h, d);

  const weekDates = weekDatesOf(TODAY);
  const habitsDoneToday = activeHabits.filter((h) => isDoneOn(h, TODAY)).length;
  const dailyPct = activeHabits.length ? Math.round((habitsDoneToday / activeHabits.length) * 100) : 0;
  const weeklyProgress = (h) => {
    if (h.type === "minimum" && h.period === "month" && monthMet(h, weekDates[0].slice(0, 7))) return 1;
    if (h.type === "minimum" && h.period === "year" && yearMet(h, weekDates[0].slice(0, 4))) return 1;
    if (h.type === "minimum" && h.period === "week" && weekMet(h, weekDates)) return 1;
    if ((h.type === "minimum" || h.type === "maximum") && h.period === "day") {
      return Math.min(1, weekDates.filter((d) => actualDone(h, d)).length / 7);
    }
    const logs = logSet(h);
    const doneDays = weekDates.filter((d) => logs.has(d)).length;
    const target = (h.type === "minimum" && h.period === "week") ? (h.target_count || 1) : (h.target_per_week || 7);
    return target > 0 ? Math.min(1, doneDays / target) : 0;
  };
  const weeklyPct = activeHabits.length ? Math.round((activeHabits.reduce((s, h) => s + weeklyProgress(h), 0) / activeHabits.length) * 100) : 0;
  const mYM = TODAY.slice(0, 7);
  const mDays = new Date(Number(TODAY.slice(0, 4)), Number(TODAY.slice(5, 7)), 0).getDate();
  const monthlyProgress = (h) => {
    if (h.type === "minimum" && h.period === "month" && monthMet(h, mYM)) return 1;
    if (h.type === "minimum" && h.period === "year" && yearMet(h, mYM.slice(0, 4))) return 1;
    if ((h.type === "minimum" || h.type === "maximum") && h.period === "day") {
      let met = 0;
      for (let day = 1; day <= mDays; day++) { if (actualDone(h, `${mYM}-${String(day).padStart(2, "0")}`)) met++; }
      return Math.min(1, met / mDays);
    }
    const doneMonth = (h.logs || []).filter((d) => d.slice(0, 7) === mYM).length;
    let target;
    if (h.type === "minimum" && h.period === "week") target = (h.target_count || 1) * (mDays / 7);
    else if (h.type === "minimum" && h.period === "month") target = (h.target_count || 1);
    else if (h.type === "minimum" && h.period === "year") target = (h.target_count || 1) / 12;
    else target = (h.target_per_week || 7) * (mDays / 7);
    return target > 0 ? Math.min(1, doneMonth / target) : 0;
  };
  const monthlyPct = activeHabits.length ? Math.round((activeHabits.reduce((s, h) => s + monthlyProgress(h), 0) / activeHabits.length) * 100) : 0;
  const habitThreeDay = [0, -1, -2].map((off, i) => ({
    label: i === 0 ? "Today" : i === 1 ? "Yesterday" : "Day before",
    value: activeHabits.filter((h) => isDoneOn(h, dayOffISO(off))).length,
    color: i === 0 ? "#4C9A6B" : "var(--text-3)",
  }));

  /* ── Expenses: spent today + comparison + this-cycle category donut ── */
  const expTodayTotal = expLogs.filter((l) => l.date === TODAY).reduce((n, l) => n + l.amount, 0);
  const expThreeDay = [0, -1, -2].map((off, i) => ({
    label: i === 0 ? "Today" : i === 1 ? "Yesterday" : "Day before",
    value: expLogs.filter((l) => l.date === dayOffISO(off)).reduce((n, l) => n + l.amount, 0),
    color: i === 0 ? "#C9772E" : "var(--text-3)",
  }));
  const catById = useMemo(() => Object.fromEntries(expCats.map((c) => [c.id, c])), [expCats]);
  const expCycle = useMemo(() => {
    const [lo, hi] = cycleRange(new Date(), monthStartDay);
    const m = {};
    expLogs.forEach((l) => { if (l.date >= lo && l.date <= hi) m[l.category_id] = (m[l.category_id] || 0) + l.amount; });
    const rows = Object.entries(m).map(([cid, amount]) => ({ cat: catById[cid], amount })).filter((x) => x.cat).sort((a, b) => b.amount - a.amount);
    const total = rows.reduce((n, r) => n + r.amount, 0);
    let acc = 0;
    const segs = rows.map((r) => { const s = total > 0 ? (acc / total) * 100 : 0; acc += r.amount; return { ...r, start: s, end: total > 0 ? (acc / total) * 100 : 0, pct: total > 0 ? (r.amount / total) * 100 : 0 }; });
    return { segs, total };
  }, [expLogs, catById, monthStartDay]);
  const expGradient = expCycle.segs.length ? `conic-gradient(${expCycle.segs.map((s) => `${s.cat.color} ${s.start}% ${s.end}%`).join(", ")})` : "var(--surface-2)";

  /* ── Rewards: today's earned split + all-time pending (mirrors Rewards screen) ── */
  const ratesByKey = {};
  history.forEach((r) => { (ratesByKey[`${r.kind}:${r.rkey}`] ||= []).push({ eff: r.eff_date, rate: r.rate }); });
  Object.values(ratesByKey).forEach((arr) => arr.sort((a, b) => a.eff.localeCompare(b.eff)));
  const rateOn = (kind, key, day) => {
    const arr = ratesByKey[`${kind}:${key}`];
    if (arr) { let r = null; for (const seg of arr) { if (seg.eff <= day) r = seg.rate; else break; } if (r !== null) return r; }
    return (kind === "focus" ? legacyFocus[key] : legacyUsage[key]) || 0;
  };
  let focusToday = 0, usageToday = 0, allFocus = 0, allUsage = 0;
  (focus.sessions || []).filter((s) => s.completed).forEach((s) => {
    const day = (s.started_at || s.created_at || "").slice(0, 10);
    const p = TREES[s.tree] ? s.tree : DEFAULT_TREE;
    const earned = ((s.actual_min || 0) / 60) * rateOn("focus", p, day);
    allFocus += earned;
    if (day === TODAY) focusToday += earned;
  });
  screenRows.forEach((r) => {
    if (USAGE_EXCLUDE.has(r.screen)) return;
    const earned = (r.seconds / 60) * rateOn("usage", r.screen, r.date);
    allUsage += earned;
    if (r.date === TODAY) usageToday += earned;
  });
  const achToday = achievements.filter((a) => a.date === TODAY).reduce((n, a) => n + (a.reward || 0), 0);
  const allAch = achievements.reduce((n, a) => n + (a.reward || 0), 0);
  const doneChallenges = challenges.filter((c) => c.status === "done");
  const chalToday = doneChallenges.filter((c) => !c.end_date || c.end_date === TODAY).reduce((n, c) => n + (c.reward_earned || 0), 0);
  const allChal = doneChallenges.reduce((n, c) => n + (c.reward_earned || 0), 0);
  const earnedToday = focusToday + usageToday + achToday + chalToday;
  const pct = (v) => (earnedToday > 0 ? (v / earnedToday) * 100 : 0);
  const fPct = pct(focusToday), uPct = pct(usageToday), aPct = pct(achToday), cPct = pct(chalToday);
  const totalTaken = payouts.reduce((n, p) => n + p.amount, 0);
  const pending = Math.max(0, allFocus + allUsage + allAch + allChal - totalTaken);

  /* ── Grove ── */
  const groveToday = focus.stats?.today_minutes || 0;
  const groveTrees = focus.stats?.today_trees || 0;

  /* ── Spiritual: chapters read ── */
  const chaptersAll = useMemo(() => scriptures.flatMap((s) => (s.chapters || []).map((c) => ({ ...c, scripture: s.name, color: s.color }))), [scriptures]);
  const chaptersToday = chaptersAll.filter((c) => c.read_date === TODAY);

  /* ── Kickstart: today's lineup + watched time ── */
  const videosToday = kickstart.filter((v) => (v.days || []).includes(todayName()));
  const secToday = (screen) => screenRows.filter((r) => r.screen === screen && r.date === TODAY).reduce((n, r) => n + r.seconds, 0);
  const kickstartSec = secToday("kickstart");
  const affirmSec = secToday("affirmations");
  const mindscapeSec = secToday("mindscape");

  /* ── Golden Book: per active dream, written today or pending ── */
  const activeDreams = goldenGoals.filter((g) => !g.achieved);
  const dreamDone = (g) => (g.t369_enabled ? !!g.t369?.day_complete : !!g.today_done);

  /* ── Challenges status ── */
  const chalCounts = {
    active: challenges.filter((c) => c.status === "active").length,
    done: doneChallenges.length,
    failed: challenges.filter((c) => c.status === "failed").length,
  };
  const activeChals = challenges.filter((c) => c.status === "active").slice(0, 3);

  /* ── Goals for the current week ── */
  const weeklyGoals = goals.filter((g) => g.horizon === "Weekly" && g.start_date <= TODAY && g.end_date >= TODAY);

  /* ── Journal ── */
  const journalBullets = journal ? Object.values(journal.bullets || {}).reduce((n, arr) => n + arr.length, 0) : 0;
  const journalDone = !!(journal && (journal.mood != null || journalBullets > 0));

  const go = (id) => onNavigate && onNavigate(id);

  if (!loaded) return <div style={S.loading}>Loading…</div>;

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Today</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h1 style={S.h1}>Dashboard</h1>
          <HelpButton id="dashboard" />
        </div>
        <div style={S.subhead}>{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</div>
      </div>

      {/* Top stats */}
      <div style={S.statGrid}>
        <StatTile icon={CheckSquare} color="#4C9A6B" label="Habits done" value={`${habitsDoneToday}/${activeHabits.length}`} onClick={() => go("habits")} />
        <StatTile icon={Trees} color={FOCUS_COLOR} label={groveTrees ? `Grove · ${groveTrees} tree${groveTrees === 1 ? "" : "s"}` : "Grove today"} value={fmtMin(groveToday)} onClick={() => go("grove")} />
        <StatTile icon={ReceiptText} color="#C9772E" label="Spent today" value={money(expTodayTotal)} onClick={() => go("expenses")} />
        <StatTile icon={IndianRupee} color="#C9A227" label="Rewards pending" value={money(pending)} onClick={() => go("worth")} />
      </div>

      {/* Habits: comparison + rings */}
      <Card title="Habits" eyebrow={`${habitsDoneToday}/${activeHabits.length} done today`} onClick={() => go("habits")}>
        {activeHabits.length === 0 ? <Muted>No habits yet.</Muted> : (
          <>
            <TrendBars items={habitThreeDay} fmt={(v) => `${v}/${activeHabits.length}`} max={activeHabits.length} />
            <div style={S.ringRow}>
              <RingStat pct={dailyPct} label="Today" sub={`${habitsDoneToday}/${activeHabits.length} done`} color="#4C9A6B" />
              <RingStat pct={weeklyPct} label="This week" sub="of weekly targets" color="#3A7CA5" />
              <RingStat pct={monthlyPct} label="This month" sub="of monthly targets" color="#8268B0" />
            </div>
          </>
        )}
      </Card>

      {/* Expenses: comparison + category donut */}
      <Card title="Expenses" eyebrow={`${money(expTodayTotal)} today`} onClick={() => go("expenses")}>
        <TrendBars items={expThreeDay} fmt={(v) => money(v)} />
        {expCycle.segs.length > 0 && (
          <div style={{ ...S.pieWrap, marginTop: 14 }}>
            <div style={S.pieChart}>
              <div style={{ ...S.pieDisc, background: expGradient }} />
              <div style={S.pieHole}>
                <span style={S.pieHoleVal}>{money(expCycle.total)}</span>
                <span style={S.pieHoleLbl}>this month</span>
              </div>
            </div>
            <div style={S.pieLegend}>
              {expCycle.segs.slice(0, 6).map((s) => (
                <LegendRow key={s.cat.id} color={s.cat.color} label={s.cat.name} pct={s.pct} val={money(s.amount)} />
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Rewards: pending + today's split donut */}
      <Card title="Rewards" eyebrow={`Pending ${money(pending)}`} onClick={() => go("worth")}>
        {earnedToday > 0 ? (
          <div style={S.pieWrap}>
            <div style={S.pieChart}>
              <div style={{ ...S.pieDisc, background: `conic-gradient(${FOCUS_COLOR} 0 ${fPct}%, ${USAGE_COLOR} ${fPct}% ${fPct + uPct}%, ${ACH_COLOR} ${fPct + uPct}% ${fPct + uPct + aPct}%, ${CHAL_COLOR} ${fPct + uPct + aPct}% 100%)` }} />
              <div style={S.pieHole}>
                <span style={S.pieHoleVal}>{money(earnedToday)}</span>
                <span style={S.pieHoleLbl}>today</span>
              </div>
            </div>
            <div style={S.pieLegend}>
              <LegendRow color={FOCUS_COLOR} label="Focus" pct={fPct} val={money(focusToday)} />
              <LegendRow color={USAGE_COLOR} label="Usage" pct={uPct} val={money(usageToday)} />
              <LegendRow color={ACH_COLOR} label="Achievement" pct={aPct} val={money(achToday)} />
              <LegendRow color={CHAL_COLOR} label="Challenges" pct={cPct} val={money(chalToday)} />
            </div>
          </div>
        ) : <Muted>No rewards earned yet today.</Muted>}
      </Card>

      {/* Revision due */}
      <Card title="Revision" eyebrow={dueToday.length ? `${dueToday.length} due` : "Nothing due"} onClick={() => go("revision")}>
        {dueToday.length === 0 ? <Muted>No topics due for revision today. 🎉</Muted> : (
          <div style={S.rows}>
            {dueToday.slice(0, 6).map((r) => (
              <div key={r.review_id} style={S.row}>
                <span style={{ ...S.dot, background: r.is_missed ? "#C2536B" : "#C9A227" }} />
                <span style={S.rowName}>{r.topic}</span>
                <span style={S.rowMeta}>Stage {r.stage}{r.is_missed ? " · missed" : ""}</span>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Golden Book + Challenges + Goals + Journal */}
      <div style={S.twoCol}>
        <Card title="Golden Book" eyebrow={activeDreams.length ? `${activeDreams.filter(dreamDone).length}/${activeDreams.length} written` : null} onClick={() => go("golden")}>
          {activeDreams.length === 0 ? <Muted>No active dreams.</Muted> : (
            <div style={S.rows}>
              {activeDreams.slice(0, 5).map((g) => (
                <div key={g.id} style={S.row}>
                  <Crown size={13} color="#C9A227" style={{ flexShrink: 0 }} />
                  <span style={S.rowName}>{g.title}</span>
                  <DoneBadge done={dreamDone(g)} doneText={g.t369_enabled ? "369 done" : "Written"} pendingText="Pending" />
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card title="Challenges" eyebrow={`${chalCounts.active} active · ${chalCounts.done} done${chalCounts.failed ? ` · ${chalCounts.failed} missed` : ""}`} onClick={() => go("challenges")}>
          {challenges.length === 0 ? <Muted>No challenges yet.</Muted> : activeChals.length === 0 ? <Muted>No active challenges.</Muted> : (
            <div style={S.rows}>
              {activeChals.map((c) => {
                const p = c.target > 0 ? Math.min(100, Math.max(0, (c.completed / c.target) * 100)) : 0;
                const neg = (c.completed || 0) < 0;
                return (
                  <div key={c.id} style={{ padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                      <span style={S.rowName}>{c.name}</span>
                      <span style={{ ...S.rowMeta, color: neg ? "#C2536B" : "var(--text-3)" }}>{neg ? "-" : ""}{Math.round(neg ? Math.abs((c.completed / (c.target || 1)) * 100) : p)}%</span>
                    </div>
                    <div style={S.miniTrack}>
                      <div style={{ ...S.miniBar, width: `${neg ? Math.min(100, Math.abs((c.completed / (c.target || 1)) * 100)) : p}%`, background: neg ? "#C2536B" : CHAL_COLOR }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Card>

        <Card title="Goals this week" eyebrow={weeklyGoals.length ? `${weeklyGoals.length}` : null} onClick={() => go("goals")}>
          {weeklyGoals.length === 0 ? <Muted>No weekly goals running.</Muted> : (
            <div style={S.rows}>
              {weeklyGoals.slice(0, 5).map((g) => (
                <div key={g.id} style={S.row}>
                  <Target size={13} color="#3A7CA5" style={{ flexShrink: 0 }} />
                  <span style={S.rowName}>{g.title}</span>
                  <span style={S.rowMeta}>{g.pillar}</span>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card title="Journal" eyebrow={journalDone ? "Done today" : "Not yet"} onClick={() => go("journal")}>
          <div style={S.journalRow}>
            <BookOpen size={18} color={journalDone ? "#4C9A6B" : "var(--text-3)"} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: journalDone ? "#4C9A6B" : "var(--text-2)" }}>
                {journalDone ? "Journaled today" : "Not journaled yet"}
              </div>
              <div style={S.rowMeta}>
                {journal?.mood != null ? `Mood: ${MOODS[journal.mood] || journal.mood}` : "No mood set"}
                {journalBullets > 0 ? ` · ${journalBullets} bullet${journalBullets === 1 ? "" : "s"}` : ""}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Spiritual reading */}
      <Card title="Spiritual" eyebrow={`${chaptersAll.length} chapter${chaptersAll.length === 1 ? "" : "s"} read overall`} onClick={() => go("spiritual")}>
        {scriptures.length === 0 ? <Muted>No scriptures yet.</Muted> : (
          <>
            {chaptersToday.length > 0 && (
              <div style={S.rows}>
                {chaptersToday.map((c) => (
                  <div key={c.id} style={S.row}>
                    <span style={{ ...S.dot, background: c.color || "#8268B0" }} />
                    <span style={S.rowName}>{c.title}</span>
                    <span style={S.rowMeta}>read today · {c.scripture}</span>
                  </div>
                ))}
              </div>
            )}
            <div style={{ ...S.chipWrap, marginTop: chaptersToday.length ? 10 : 0 }}>
              {scriptures.map((s) => (
                <span key={s.id} style={{ ...S.scripChip, borderColor: (s.color || "#8268B0") + "66", color: s.color || "#8268B0" }}>
                  {s.name} · {(s.chapters || []).length}
                </span>
              ))}
            </div>
            {chaptersToday.length === 0 && <div style={{ ...S.muted, paddingTop: 8 }}>Nothing read today yet.</div>}
          </>
        )}
      </Card>

      {/* Kickstart / Affirmations / Mindscape */}
      <div style={S.miniGrid}>
        <MiniCard icon={Rocket} color="#C9772E" label="Kickstart" onClick={() => go("kickstart")}
          main={kickstartSec > 0 ? `Watched ${fmtMin(kickstartSec / 60)}` : "Not watched yet"}
          done={kickstartSec > 0}
          sub={`${videosToday.length} video${videosToday.length === 1 ? "" : "s"} lined up for ${todayName()}`} />
        <MiniCard icon={Sparkles} color="#C9A227" label="Affirmations" onClick={() => go("affirmations")}
          main={affirmSec > 0 ? `Read for ${fmtMin(affirmSec / 60)}` : "Not read yet"}
          done={affirmSec > 0}
          sub={affirmSec > 0 ? "Nice — keep affirming daily" : "Open a card and read it aloud"} />
        <MiniCard icon={Headphones} color="#3A7CA5" label="Meditation / Visualization" onClick={() => go("mindscape")}
          main={mindscapeSec > 0 ? `Practiced ${fmtMin(mindscapeSec / 60)}` : "Not done yet"}
          done={mindscapeSec > 0}
          sub={mindscapeSec > 0 ? "Session logged for today" : "A few minutes still counts"} />
        <MiniCard icon={RotateCcw} color="#8268B0" label="Revision" onClick={() => go("revision")}
          main={dueToday.length ? `${dueToday.length} topic${dueToday.length === 1 ? "" : "s"} due` : "All clear"}
          done={dueToday.length === 0}
          sub={dueToday.length ? "Review them before the day ends" : "No reviews pending today"} />
      </div>
    </div>
  );
}

/* ── Small building blocks ── */

function Card({ title, eyebrow, onClick, children }) {
  return (
    <div style={S.card}>
      <div style={S.cardTitleRow}>
        <button onClick={onClick} style={S.cardTitleBtn}>{title} <ArrowRight size={13} /></button>
        {eyebrow && <span style={S.cardEyebrow}>{eyebrow}</span>}
      </div>
      {children}
    </div>
  );
}
function Muted({ children }) { return <div style={S.muted}>{children}</div>; }

function TrendBars({ items, fmt, max }) {
  const top = Math.max(1, max || 0, ...items.map((i) => i.value));
  return (
    <div style={S.tbWrap}>
      {items.map((it, i) => (
        <div key={i} style={S.tbRow}>
          <div style={S.tbLbl}>{it.label}</div>
          <div style={S.tbTrack}><div style={{ ...S.tbBar, width: `${(it.value / top) * 100}%`, background: it.color }} /></div>
          <div style={S.tbVal}>{fmt(it.value)}</div>
        </div>
      ))}
    </div>
  );
}

function RingStat({ pct, label, sub, color }) {
  const R = 24, C = 2 * Math.PI * R;
  const off = C * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return (
    <div style={S.ringStat}>
      <div style={S.ringBox}>
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r={R} fill="none" stroke="var(--border)" strokeWidth="6" />
          <circle cx="32" cy="32" r={R} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={off} transform="rotate(-90 32 32)" style={{ transition: "stroke-dashoffset 0.5s ease" }} />
        </svg>
        <div style={{ ...S.ringPct, color }}>{pct}%</div>
      </div>
      <div>
        <div style={S.ringLabel}>{label}</div>
        <div style={S.ringSub}>{sub}</div>
      </div>
    </div>
  );
}

function LegendRow({ color, label, pct, val }) {
  return (
    <div style={S.pieLegRow}>
      <span style={{ ...S.legendDot, background: color }} />
      <span style={S.pieLegName}>{label}</span>
      <span style={S.pieLegPct}>{Math.round(pct)}%</span>
      <span style={S.pieLegMin}>{val}</span>
    </div>
  );
}

function StatTile({ icon: Icon, color, label, value, onClick }) {
  return (
    <button onClick={onClick} style={S.statTile}>
      <div style={{ ...S.statIcon, background: `${color}1A`, color }}><Icon size={17} /></div>
      <div style={{ minWidth: 0 }}>
        <div style={S.statVal}>{value}</div>
        <div style={S.statLbl}>{label}</div>
      </div>
    </button>
  );
}

function DoneBadge({ done, doneText = "Done", pendingText = "Pending" }) {
  return (
    <span style={{ ...S.badge, color: done ? "#4C9A6B" : "#C2773B", background: done ? "rgba(76,154,107,0.12)" : "rgba(194,119,59,0.12)" }}>
      {done ? doneText : pendingText}
    </span>
  );
}

function MiniCard({ icon: Icon, color, label, main, sub, done, onClick }) {
  return (
    <button onClick={onClick} style={S.miniCard}>
      <div style={{ ...S.statIcon, background: `${color}1A`, color }}><Icon size={16} /></div>
      <div style={S.miniLabel}>{label}</div>
      <div style={{ ...S.miniMain, color: done ? "#4C9A6B" : "var(--text-2)" }}>{main}</div>
      <div style={S.miniSub}>{sub}</div>
    </button>
  );
}

const S = {
  loading: { padding: 40, textAlign: "center", color: "var(--text-3)", fontFamily: "'Inter',system-ui,sans-serif" },
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 20px 40px", color: "var(--text)", boxSizing: "border-box", maxWidth: 820, margin: "0 auto" },
  head: { marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },

  statGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 14 },
  statTile: { display: "flex", alignItems: "center", gap: 10, border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 14, padding: "12px 14px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  statIcon: { width: 34, height: 34, borderRadius: 10, display: "grid", placeItems: "center", flexShrink: 0 },
  statVal: { fontSize: 16, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  statLbl: { fontSize: 11, color: "var(--text-3)", fontWeight: 600, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },

  card: { background: "var(--surface)", borderRadius: 16, padding: "16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: 14 },
  cardTitleRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" },
  cardTitleBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "none", cursor: "pointer", padding: 0, fontFamily: "'Fraunces',Georgia,serif", fontSize: 16, fontWeight: 700, color: "var(--text)" },
  cardEyebrow: { fontSize: 12, fontWeight: 700, color: "var(--text-3)" },
  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "10px 0" },

  twoCol: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginBottom: 0 },

  rows: { display: "flex", flexDirection: "column", gap: 2 },
  row: { display: "flex", alignItems: "center", gap: 8, padding: "7px 0", borderBottom: "1px solid var(--border)" },
  dot: { width: 10, height: 10, borderRadius: 3, flexShrink: 0 },
  rowName: { flex: 1, fontSize: 13.5, fontWeight: 600, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  rowMeta: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600, flexShrink: 0 },
  badge: { fontSize: 10.5, fontWeight: 700, padding: "3px 9px", borderRadius: 12, flexShrink: 0, whiteSpace: "nowrap" },

  tbWrap: { display: "flex", flexDirection: "column", gap: 7 },
  tbRow: { display: "flex", alignItems: "center", gap: 8 },
  tbLbl: { width: 78, fontSize: 11.5, color: "var(--text-2)", fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap" },
  tbTrack: { flex: 1, height: 13, background: "var(--surface-2)", borderRadius: 7, overflow: "hidden" },
  tbBar: { height: "100%", borderRadius: 7, transition: "width 0.3s" },
  tbVal: { width: 70, fontSize: 11.5, color: "var(--text-2)", fontWeight: 700, flexShrink: 0, textAlign: "right" },

  ringRow: { display: "flex", gap: 14, flexWrap: "wrap", marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--border)" },
  ringStat: { display: "flex", alignItems: "center", gap: 10, flex: "1 1 150px" },
  ringBox: { position: "relative", width: 64, height: 64, display: "grid", placeItems: "center", flexShrink: 0 },
  ringPct: { position: "absolute", inset: 0, display: "grid", placeItems: "center", fontSize: 14, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  ringLabel: { fontSize: 13, fontWeight: 700, color: "var(--text)" },
  ringSub: { fontSize: 11, color: "var(--text-3)", fontWeight: 500, marginTop: 1 },

  pieWrap: { display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" },
  pieChart: { position: "relative", width: 110, height: 110, flexShrink: 0, margin: "0 auto" },
  pieDisc: { width: "100%", height: "100%", borderRadius: "50%" },
  pieHole: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 66, height: 66, borderRadius: "50%", background: "var(--surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  pieHoleVal: { fontSize: 12, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", maxWidth: 62, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  pieHoleLbl: { fontSize: 9.5, color: "var(--text-3)", fontWeight: 600 },
  pieLegend: { flex: 1, minWidth: 170, display: "flex", flexDirection: "column", gap: 7 },
  pieLegRow: { display: "flex", alignItems: "center", gap: 8 },
  legendDot: { width: 10, height: 10, borderRadius: 3, flexShrink: 0 },
  pieLegName: { flex: 1, fontSize: 12.5, fontWeight: 600, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  pieLegPct: { fontSize: 12, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", width: 38, textAlign: "right" },
  pieLegMin: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600, minWidth: 58, textAlign: "right" },

  miniTrack: { height: 8, background: "var(--surface-2)", borderRadius: 4, overflow: "hidden", marginTop: 5 },
  miniBar: { height: "100%", borderRadius: 4, transition: "width 0.3s" },

  journalRow: { display: "flex", alignItems: "center", gap: 12, padding: "4px 0" },

  chipWrap: { display: "flex", gap: 7, flexWrap: "wrap" },
  scripChip: { border: "1px solid", borderRadius: 14, padding: "4px 11px", fontSize: 12, fontWeight: 700, background: "var(--surface)" },

  miniGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 10, marginTop: 14 },
  miniCard: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 14, padding: "12px 14px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  miniLabel: { fontSize: 12.5, fontWeight: 700, color: "var(--text)" },
  miniMain: { fontSize: 13, fontWeight: 700 },
  miniSub: { fontSize: 11, color: "var(--text-3)", fontWeight: 500, lineHeight: 1.35 },
};
