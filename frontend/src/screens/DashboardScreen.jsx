import { useState, useEffect, useCallback, useMemo } from "react";
import {
  CheckSquare, LayoutGrid, Trees, ReceiptText, Wallet, RotateCcw, Star,
  Sparkles, GraduationCap, Rocket, Headphones, Trophy, Clock, Plus,
  ArrowUpRight, ArrowRight, Flame, ListChecks,
} from "lucide-react";
import { api } from "../api.js";
import { useCurrency, fmtMoney2 } from "../currency.js";
import { TREES, DEFAULT_TREE } from "./grove/trees.jsx";

const FOCUS_COLOR = "#C9A227";
const USAGE_COLOR = "#3A7CA5";
const ACH_COLOR = "#C2536B";
const USAGE_EXCLUDE = new Set(["worth", "achievements"]);

const todayISO = () => { const d = new Date(); const p = (n) => String(n).padStart(2, "0"); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; };
const TODAY = todayISO();

const SCREEN_LABELS = {
  kickstart: "Kickstart", golden: "Golden Book", habits: "Habits", quadrant: "Quadrant",
  goals: "Goals", grove: "Grove", worth: "Rewards", vault: "Wallet", expenses: "Expenses",
  journal: "Journal", revision: "Revision", affirmations: "Affirmations", skills: "Skills",
  spiritual: "Spiritual", mindscape: "Mindscape", achievements: "Achievements", delight: "Delights",
};

const fmtMin = (min) => { const m = Math.round(min || 0); const h = Math.floor(m / 60), r = m % 60; return h ? `${h}h ${r}m` : `${r}m`; };
const fmtSec = (sec) => fmtMin((sec || 0) / 60);

const QUADRANTS = [
  { id: "Q1", label: "Do Now" }, { id: "Q2", label: "Schedule" },
  { id: "Q3", label: "Delegate" }, { id: "Q4", label: "Drop" },
];
const PILLAR_NAMES = ["Financial", "Academic", "Relationship", "Health", "Spiritual"];

export default function DashboardScreen({ onNavigate }) {
  const cur = useCurrency();
  const reward = (n) => fmtMoney2(n, cur.code);

  const [loaded, setLoaded] = useState(false);
  const [habits, setHabits] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [focus, setFocus] = useState({ sessions: [], stats: {} });
  const [screenRows, setScreenRows] = useState([]);
  const [history, setHistory] = useState([]);
  const [payouts, setPayouts] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [legacyFocus, setLegacyFocus] = useState({});
  const [legacyUsage, setLegacyUsage] = useState({});
  const [expCats, setExpCats] = useState([]);
  const [expLogs, setExpLogs] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [dueToday, setDueToday] = useState([]);
  const [skills, setSkills] = useState([]);

  const load = useCallback(() => {
    Promise.all([
      api.getHabits().catch(() => []),
      api.getTasks().catch(() => []),
      api.getFocus().catch(() => ({ sessions: [], stats: {} })),
      api.getScreenTime().catch(() => []),
      api.getRewardRates().catch(() => []),
      api.getPayouts().catch(() => []),
      api.getAchievements().catch(() => []),
      api.getSetting("grove_rates").catch(() => null),
      api.getSetting("reward_rates").catch(() => null),
      api.getExpenses().catch(() => ({ categories: [], logs: [] })),
      api.getInvestments().catch(() => []),
      api.getDueToday().catch(() => []),
      api.getSkills().catch(() => []),
    ]).then(([h, t, fc, st, hist, py, ach, lf, lu, exp, inv, due, sk]) => {
      setHabits(h || []);
      setTasks(t || []);
      setFocus(fc || { sessions: [], stats: {} });
      setScreenRows(Array.isArray(st) ? st : []);
      setHistory(hist || []);
      setPayouts(py || []);
      setAchievements(Array.isArray(ach) ? ach : []);
      setLegacyFocus(lf?.value || {});
      setLegacyUsage(lu?.value || {});
      setExpCats(exp?.categories || []);
      setExpLogs(exp?.logs || []);
      setInvestments(inv || []);
      setDueToday(due || []);
      setSkills(sk || []);
      setLoaded(true);
    }).catch(() => setLoaded(true));
  }, []);

  useEffect(() => { load(); }, [load]);

  // ── Habits ──
  const habitsDoneToday = habits.filter((h) => (h.logs || []).includes(TODAY)).length;

  // ── Quadrant tasks: active tasks scheduled for today, by start_datetime ──
  const tasksToday = tasks.filter((t) => (t.start_datetime || "").slice(0, 10) === TODAY);
  const tasksByQuadrant = useMemo(() => {
    const m = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };
    tasks.forEach((t) => { if (m[t.quadrant] !== undefined) m[t.quadrant]++; });
    return m;
  }, [tasks]);

  // ── Grove focus (backend already computes today's totals) ──
  const groveToday = focus.stats?.today_minutes || 0;
  const groveTrees = focus.stats?.today_trees || 0;

  // ── Rewards (replicate WorthScreen's "today" period exactly) ──
  const ratesByKey = {};
  history.forEach((r) => { (ratesByKey[`${r.kind}:${r.rkey}`] ||= []).push({ eff: r.eff_date, rate: r.rate }); });
  Object.values(ratesByKey).forEach((arr) => arr.sort((a, b) => a.eff.localeCompare(b.eff)));
  const rateOn = (kind, key, day) => {
    const arr = ratesByKey[`${kind}:${key}`];
    if (arr) { let r = null; for (const seg of arr) { if (seg.eff <= day) r = seg.rate; else break; } if (r !== null) return r; }
    return (kind === "focus" ? legacyFocus[key] : legacyUsage[key]) || 0;
  };
  let totalFocus = 0, totalUsage = 0;
  (focus.sessions || []).filter((s) => s.completed).forEach((s) => {
    const day = (s.started_at || s.created_at || "").slice(0, 10);
    if (day !== TODAY) return;
    const p = TREES[s.tree] ? s.tree : DEFAULT_TREE;
    totalFocus += ((s.actual_min || 0) / 60) * rateOn("focus", p, day);
  });
  screenRows.forEach((r) => { if (!USAGE_EXCLUDE.has(r.screen) && r.date === TODAY) totalUsage += (r.seconds / 60) * rateOn("usage", r.screen, r.date); });
  const achToday = achievements.filter((a) => a.date === TODAY && (a.reward || 0) > 0);
  const totalAch = achToday.reduce((n, a) => n + (a.reward || 0), 0);
  const periodEarned = totalFocus + totalUsage + totalAch;
  const focusPct = periodEarned > 0 ? (totalFocus / periodEarned) * 100 : 0;
  const usagePct = periodEarned > 0 ? (totalUsage / periodEarned) * 100 : 0;
  const achPct = periodEarned > 0 ? (totalAch / periodEarned) * 100 : 0;
  // All-time pending, same as WorthScreen's hero figure.
  let allFocus = 0, allUsage = 0;
  (focus.sessions || []).filter((s) => s.completed).forEach((s) => {
    const day = (s.started_at || s.created_at || "").slice(0, 10);
    const p = TREES[s.tree] ? s.tree : DEFAULT_TREE;
    allFocus += ((s.actual_min || 0) / 60) * rateOn("focus", p, day);
  });
  screenRows.forEach((r) => { if (!USAGE_EXCLUDE.has(r.screen)) allUsage += (r.seconds / 60) * rateOn("usage", r.screen, r.date); });
  const allAch = achievements.reduce((n, a) => n + (a.reward || 0), 0);
  const totalTaken = payouts.reduce((n, p) => n + p.amount, 0);
  const pending = Math.max(0, allFocus + allUsage + allAch - totalTaken);

  // ── Expenses today ──
  const expToday = expLogs.filter((l) => l.date === TODAY);
  const expTodayTotal = expToday.reduce((n, l) => n + l.amount, 0);
  const catById = useMemo(() => Object.fromEntries(expCats.map((c) => [c.id, c])), [expCats]);

  // ── Wallet (income + expense + investment, today) ──
  const invToday = investments.filter((i) => i.date === TODAY || i.start_date === TODAY);
  const investedToday = invToday.reduce((n, i) => n + (i.invested || 0), 0);

  // ── Sections opened today (screen time) ──
  const screenTimeToday = useMemo(() => {
    const m = {};
    screenRows.forEach((r) => { if (r.date === TODAY) m[r.screen] = (m[r.screen] || 0) + r.seconds; });
    return Object.entries(m).filter(([, s]) => s > 0).sort((a, b) => b[1] - a[1]);
  }, [screenRows]);

  // ── Proxy flags for sections with no first-class "today" tracking ──
  const usedToday = (screen) => screenRows.some((r) => r.screen === screen && r.date === TODAY && r.seconds > 0);
  const spiritualToday = usedToday("spiritual");
  const affirmationsToday = usedToday("affirmations");
  const skillsNotesToday = useMemo(() => {
    const rows = [];
    skills.forEach((sk) => Object.values(sk.notes || {}).forEach((arr) => arr.forEach((n) => {
      if ((n.created_at || "").slice(0, 10) === TODAY) rows.push({ ...n, skill: sk.title });
    })));
    return rows;
  }, [skills]);
  const kickstartToday = usedToday("kickstart");
  const mindscapeToday = usedToday("mindscape");
  const achievementsToday = achievements.filter((a) => a.date === TODAY);

  // ── Quick-log widget state ──
  const [taskForm, setTaskForm] = useState(null);
  const [focusForm, setFocusForm] = useState(null);
  const [expForm, setExpForm] = useState(null);
  const [invForm, setInvForm] = useState(null);

  const toggleHabit = (h) => api.toggleHabitLog(h.id, TODAY).then(load).catch(() => {});

  const saveTask = async () => {
    const title = taskForm.title.trim();
    if (!title) return;
    await api.createTask({ pillar: taskForm.pillar, title, quadrant: taskForm.quadrant, time_estimate_min: Number(taskForm.time_estimate_min) || 30, start_datetime: null, goal_id: null });
    setTaskForm(null);
    load();
  };
  const startFocus = async () => {
    await api.createFocus({ label: focusForm.label.trim() || null, tree: focusForm.tree, duration_min: Number(focusForm.duration_min) || 25 });
    setFocusForm(null);
    load();
  };
  const saveExp = async () => {
    const amt = parseFloat(expForm.amount) || 0;
    if (amt <= 0 || !expForm.category_id) return;
    await api.createExpenseLog({ category_id: Number(expForm.category_id), amount: amt, note: expForm.note.trim(), date: TODAY });
    setExpForm(null);
    load();
  };
  const saveInv = async () => {
    const name = invForm.name.trim();
    const invested = parseFloat(invForm.invested) || 0;
    if (!name || invested <= 0) return;
    await api.createInvestment({ name, kind: invForm.kind, invested, current_value: invested, note: invForm.note.trim(), date: TODAY });
    setInvForm(null);
    load();
  };

  const go = (id) => onNavigate && onNavigate(id);

  if (!loaded) return <div style={S.loading}>Loading…</div>;

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Today</div>
        <h1 style={S.h1}>Dashboard</h1>
        <div style={S.subhead}>{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</div>
      </div>

      {/* Sections used today */}
      <Card title="Used today" onClick={() => {}}>
        {screenTimeToday.length === 0 ? <Muted>Nothing opened yet today.</Muted> : (
          <div style={S.chipWrap}>
            {screenTimeToday.map(([s, sec]) => (
              <button key={s} onClick={() => go(s)} style={S.usedChip}>
                {SCREEN_LABELS[s] || s} <span style={S.usedChipTime}>{fmtSec(sec)}</span>
              </button>
            ))}
          </div>
        )}
      </Card>

      {/* Top stat row */}
      <div style={S.statGrid}>
        <StatTile icon={CheckSquare} color="#4C9A6B" label="Habits done" value={`${habitsDoneToday}/${habits.length}`} onClick={() => go("habits")} />
        <StatTile icon={Trees} color={FOCUS_COLOR} label={groveTrees ? `Focus · ${groveTrees} tree${groveTrees === 1 ? "" : "s"}` : "Focus time"} value={fmtMin(groveToday)} onClick={() => go("grove")} />
        <StatTile icon={ReceiptText} color="#C9772E" label="Spent today" value={fmtMoney2(expTodayTotal, cur.code)} onClick={() => go("expenses")} />
        <StatTile icon={Wallet} color="#8268B0" label="Invested today" value={fmtMoney2(investedToday, cur.code)} onClick={() => go("vault")} />
      </div>

      {/* Rewards + breakdown */}
      <Card title="Rewards" eyebrow={`Pending ${reward(pending)}`} onClick={() => go("worth")}>
        {periodEarned > 0 ? (
          <div style={S.pieWrap}>
            <div style={S.pieChart}>
              <div style={{ ...S.pieDisc, background: `conic-gradient(${FOCUS_COLOR} 0 ${focusPct}%, ${USAGE_COLOR} ${focusPct}% ${focusPct + usagePct}%, ${ACH_COLOR} ${focusPct + usagePct}% 100%)` }} />
              <div style={S.pieHole}>
                <span style={S.pieHoleVal}>{reward(periodEarned)}</span>
                <span style={S.pieHoleLbl}>today</span>
              </div>
            </div>
            <div style={S.pieLegend}>
              <LegendRow color={FOCUS_COLOR} label="Focus" pct={focusPct} val={reward(totalFocus)} />
              <LegendRow color={USAGE_COLOR} label="Usage" pct={usagePct} val={reward(totalUsage)} />
              <LegendRow color={ACH_COLOR} label="Achievement" pct={achPct} val={reward(totalAch)} />
            </div>
          </div>
        ) : <Muted>No rewards earned yet today.</Muted>}
      </Card>

      {/* Revision due */}
      {dueToday.length > 0 && (
        <Card title="Revision due" eyebrow={`${dueToday.length} pending`} onClick={() => go("revision")}>
          <div style={S.rows}>
            {dueToday.slice(0, 5).map((r) => (
              <div key={r.review_id} style={S.row}>
                <span style={{ ...S.dot, background: r.is_missed ? "#C2536B" : "#C9A227" }} />
                <span style={S.rowName}>{r.topic}</span>
                <span style={S.rowMeta}>Stage {r.stage}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Spiritual / Affirmations / Skills / Kickstart / Mindscape — today's engagement */}
      <div style={S.cardGrid}>
        <MiniStatusCard icon={Star} color="#8268B0" label="Spiritual" done={spiritualToday} doneText="Read today" idleText="Not opened yet" onClick={() => go("spiritual")} />
        <MiniStatusCard icon={Sparkles} color="#C9A227" label="Affirmations" done={affirmationsToday} doneText="Read today" idleText="Not opened yet" onClick={() => go("affirmations")} />
        <MiniStatusCard icon={Rocket} color="#C9772E" label="Kickstart" done={kickstartToday} doneText="Watched today" idleText="Not watched yet" onClick={() => go("kickstart")} />
        <MiniStatusCard icon={Headphones} color="#3A7CA5" label="Mindscape" done={mindscapeToday} doneText="Listened today" idleText="Not listened yet" onClick={() => go("mindscape")} />
      </div>

      {/* Skills enhanced today */}
      <Card title="Skills enhanced" eyebrow={skillsNotesToday.length ? `${skillsNotesToday.length} note${skillsNotesToday.length === 1 ? "" : "s"}` : null} onClick={() => go("skills")}>
        {skillsNotesToday.length === 0 ? <Muted>No skill notes added today.</Muted> : (
          <div style={S.rows}>
            {skillsNotesToday.slice(0, 5).map((n) => (
              <div key={n.id} style={S.row}>
                <span style={{ ...S.dot, background: "#4C9A6B" }} />
                <span style={S.rowName}>{n.text}</span>
                <span style={S.rowMeta}>{n.skill}</span>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Achievements recorded today */}
      {achievementsToday.length > 0 && (
        <Card title="Achievements today" eyebrow={`${achievementsToday.length}`} onClick={() => go("achievements")}>
          <div style={S.rows}>
            {achievementsToday.map((a) => (
              <div key={a.id} style={S.row}>
                <span style={{ ...S.dot, background: "#C2536B" }} />
                <span style={S.rowName}>{a.title}</span>
                {a.reward > 0 && <span style={S.rowAmt}>{reward(a.reward)}</span>}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Wallet status */}
      <Card title="Wallet status" onClick={() => go("vault")}>
        <div style={S.walletRow}>
          <div style={S.walletStat}><div style={{ ...S.walletVal, color: "#C9772E" }}>{fmtMoney2(expTodayTotal, cur.code)}</div><div style={S.walletLbl}>Spent today</div></div>
          <div style={S.walletStat}><div style={{ ...S.walletVal, color: "#8268B0" }}>{fmtMoney2(investedToday, cur.code)}</div><div style={S.walletLbl}>Invested today</div></div>
          <div style={S.walletStat}><div style={S.walletVal}>{fmtMoney2(pending, cur.code)}</div><div style={S.walletLbl}>Rewards pending</div></div>
        </div>
      </Card>

      {/* ── Quick log widgets ── */}
      <div style={S.quickHead}>Quick log</div>
      <div style={S.cardGrid}>
        {/* Habits quick toggle */}
        <div style={S.quickCard}>
          <div style={S.quickTitle}><CheckSquare size={15} color="#4C9A6B" /> Habits</div>
          {habits.length === 0 ? <Muted>No habits yet.</Muted> : (
            <div style={S.habitList}>
              {habits.slice(0, 6).map((h) => {
                const done = (h.logs || []).includes(TODAY);
                return (
                  <button key={h.id} onClick={() => toggleHabit(h)} style={{ ...S.habitChip, ...(done ? S.habitChipOn : {}) }}>
                    {done && <Flame size={12} />} {h.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Quadrant quick add */}
        <div style={S.quickCard}>
          <div style={S.quickTitle}><LayoutGrid size={15} color="#3A7CA5" /> Quadrant</div>
          <div style={S.quadGrid}>
            {QUADRANTS.map((q) => (
              <div key={q.id} style={S.quadCell}>
                <span style={S.quadLabel}>{q.label}</span>
                <span style={S.quadCount}>{tasksByQuadrant[q.id]}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setTaskForm({ title: "", pillar: PILLAR_NAMES[0], quadrant: "Q1", time_estimate_min: 30 })} style={S.quickAddBtn}>
            <Plus size={14} /> Add task
          </button>
        </div>

        {/* Grove quick start */}
        <div style={S.quickCard}>
          <div style={S.quickTitle}><Trees size={15} color={FOCUS_COLOR} /> Grove focus</div>
          <div style={S.quickStat}>{fmtMin(groveToday)} today</div>
          <button onClick={() => setFocusForm({ label: "", tree: DEFAULT_TREE, duration_min: 25 })} style={S.quickAddBtn}>
            <Plus size={14} /> Start session
          </button>
        </div>

        {/* Expense / investment quick log */}
        <div style={S.quickCard}>
          <div style={S.quickTitle}><ReceiptText size={15} color="#C9772E" /> Expense / Investment</div>
          <div style={S.quickStat}>{fmtMoney2(expTodayTotal, cur.code)} spent today</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setExpForm({ category_id: expCats[0]?.id || "", amount: "", note: "" })} style={{ ...S.quickAddBtn, flex: 1 }}>
              <Plus size={14} /> Expense
            </button>
            <button onClick={() => setInvForm({ name: "", kind: "Stocks", invested: "", note: "" })} style={{ ...S.quickAddBtn, flex: 1 }}>
              <Plus size={14} /> Invest
            </button>
          </div>
        </div>
      </div>

      {/* ── Modals ── */}
      {taskForm && (
        <Modal title="Add task" onClose={() => setTaskForm(null)}>
          <input autoFocus placeholder="Task title" value={taskForm.title} onChange={(e) => setTaskForm((f) => ({ ...f, title: e.target.value }))} style={S.input} />
          <select value={taskForm.pillar} onChange={(e) => setTaskForm((f) => ({ ...f, pillar: e.target.value }))} style={S.input}>
            {PILLAR_NAMES.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          <select value={taskForm.quadrant} onChange={(e) => setTaskForm((f) => ({ ...f, quadrant: e.target.value }))} style={S.input}>
            {QUADRANTS.map((q) => <option key={q.id} value={q.id}>{q.id} · {q.label}</option>)}
          </select>
          <input type="number" min="1" placeholder="Estimate (min)" value={taskForm.time_estimate_min} onChange={(e) => setTaskForm((f) => ({ ...f, time_estimate_min: e.target.value }))} style={S.input} />
          <ModalActions onCancel={() => setTaskForm(null)} onSave={saveTask} disabled={!taskForm.title.trim()} />
        </Modal>
      )}

      {focusForm && (
        <Modal title="Start focus session" onClose={() => setFocusForm(null)}>
          <input autoFocus placeholder="Label (optional)" value={focusForm.label} onChange={(e) => setFocusForm((f) => ({ ...f, label: e.target.value }))} style={S.input} />
          <select value={focusForm.tree} onChange={(e) => setFocusForm((f) => ({ ...f, tree: e.target.value }))} style={S.input}>
            {Object.entries(TREES).map(([id, t]) => <option key={id} value={id}>{t.label}</option>)}
          </select>
          <input type="number" min="1" placeholder="Duration (min)" value={focusForm.duration_min} onChange={(e) => setFocusForm((f) => ({ ...f, duration_min: e.target.value }))} style={S.input} />
          <ModalActions onCancel={() => setFocusForm(null)} onSave={startFocus} disabled={!Number(focusForm.duration_min)} />
        </Modal>
      )}

      {expForm && (
        <Modal title="Log expense" onClose={() => setExpForm(null)}>
          <select value={expForm.category_id} onChange={(e) => setExpForm((f) => ({ ...f, category_id: e.target.value }))} style={S.input}>
            {expCats.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <input autoFocus type="number" min="0" step="0.01" placeholder={`Amount (${cur.symbol})`} value={expForm.amount} onChange={(e) => setExpForm((f) => ({ ...f, amount: e.target.value }))} style={S.input} />
          <input placeholder="Note (optional)" value={expForm.note} onChange={(e) => setExpForm((f) => ({ ...f, note: e.target.value }))} style={S.input} />
          <ModalActions onCancel={() => setExpForm(null)} onSave={saveExp} disabled={!(parseFloat(expForm.amount) > 0 && expForm.category_id)} />
        </Modal>
      )}

      {invForm && (
        <Modal title="Log investment" onClose={() => setInvForm(null)}>
          <input autoFocus placeholder="Name" value={invForm.name} onChange={(e) => setInvForm((f) => ({ ...f, name: e.target.value }))} style={S.input} />
          <select value={invForm.kind} onChange={(e) => setInvForm((f) => ({ ...f, kind: e.target.value }))} style={S.input}>
            {["Stocks", "Mutual Fund", "Gold", "Real Estate", "Fixed Deposit", "Crypto", "Other"].map((k) => <option key={k} value={k}>{k}</option>)}
          </select>
          <input type="number" min="0" step="0.01" placeholder={`Invested (${cur.symbol})`} value={invForm.invested} onChange={(e) => setInvForm((f) => ({ ...f, invested: e.target.value }))} style={S.input} />
          <input placeholder="Note (optional)" value={invForm.note} onChange={(e) => setInvForm((f) => ({ ...f, note: e.target.value }))} style={S.input} />
          <ModalActions onCancel={() => setInvForm(null)} onSave={saveInv} disabled={!(invForm.name.trim() && parseFloat(invForm.invested) > 0)} />
        </Modal>
      )}
    </div>
  );
}

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
function StatTile({ icon: Icon, color, label, value, sub, onClick }) {
  return (
    <button onClick={onClick} style={S.statTile}>
      <div style={{ ...S.statIcon, background: `${color}1A`, color }}><Icon size={17} /></div>
      <div style={{ minWidth: 0 }}>
        <div style={S.statVal}>{value}</div>
        <div style={S.statLbl}>{label}{sub ? ` · ${sub}` : ""}</div>
      </div>
    </button>
  );
}
function MiniStatusCard({ icon: Icon, color, label, done, doneText, idleText, onClick }) {
  return (
    <button onClick={onClick} style={S.miniCard}>
      <div style={{ ...S.statIcon, background: `${color}1A`, color }}><Icon size={16} /></div>
      <div style={S.miniLabel}>{label}</div>
      <div style={{ ...S.miniStatus, color: done ? "#4C9A6B" : "var(--text-3)" }}>{done ? doneText : idleText}</div>
    </button>
  );
}
function Modal({ title, onClose, children }) {
  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={S.modalCard} onClick={(e) => e.stopPropagation()}>
        <div style={S.modalTitle}>{title}</div>
        <div style={S.modalBody}>{children}</div>
      </div>
    </div>
  );
}
function ModalActions({ onCancel, onSave, disabled }) {
  return (
    <div style={S.modalActions}>
      <button onClick={onCancel} style={S.modalCancel}>Cancel</button>
      <button onClick={onSave} disabled={disabled} style={{ ...S.modalConfirm, ...(disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>Save</button>
    </div>
  );
}

const S = {
  loading: { padding: 40, textAlign: "center", color: "var(--text-3)", fontFamily: "'Inter',system-ui,sans-serif" },
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 20px 40px", color: "var(--text)", boxSizing: "border-box", maxWidth: 760, margin: "0 auto" },
  head: { marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },

  chipWrap: { display: "flex", gap: 8, flexWrap: "wrap" },
  usedChip: { border: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--text-2)", padding: "6px 12px", borderRadius: 18, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 },
  usedChipTime: { color: "var(--text-3)", fontWeight: 600, fontSize: 11.5 },

  statGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 14 },
  statTile: { display: "flex", alignItems: "center", gap: 10, border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 14, padding: "12px 14px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  statIcon: { width: 34, height: 34, borderRadius: 10, display: "grid", placeItems: "center", flexShrink: 0 },
  statVal: { fontSize: 16, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  statLbl: { fontSize: 11, color: "var(--text-3)", fontWeight: 600, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },

  card: { background: "var(--surface)", borderRadius: 16, padding: "16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: 14 },
  cardTitleRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginBottom: 10 },
  cardTitleBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "none", cursor: "pointer", padding: 0, fontFamily: "'Fraunces',Georgia,serif", fontSize: 16, fontWeight: 700, color: "var(--text)" },
  cardEyebrow: { fontSize: 12, fontWeight: 700, color: "var(--text-3)" },
  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "10px 0" },

  rows: { display: "flex", flexDirection: "column", gap: 2 },
  row: { display: "flex", alignItems: "center", gap: 8, padding: "7px 0", borderBottom: "1px solid var(--border)" },
  dot: { width: 10, height: 10, borderRadius: 3, flexShrink: 0 },
  rowName: { flex: 1, fontSize: 13.5, fontWeight: 600, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  rowMeta: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600, flexShrink: 0 },
  rowAmt: { fontSize: 13.5, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", flexShrink: 0 },

  pieWrap: { display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" },
  pieChart: { position: "relative", width: 110, height: 110, flexShrink: 0, margin: "0 auto" },
  pieDisc: { width: "100%", height: "100%", borderRadius: "50%" },
  pieHole: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 66, height: 66, borderRadius: "50%", background: "var(--surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  pieHoleVal: { fontSize: 12.5, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  pieHoleLbl: { fontSize: 9.5, color: "var(--text-3)", fontWeight: 600 },
  pieLegend: { flex: 1, minWidth: 160, display: "flex", flexDirection: "column", gap: 8 },
  pieLegRow: { display: "flex", alignItems: "center", gap: 8 },
  legendDot: { width: 10, height: 10, borderRadius: 3, flexShrink: 0 },
  pieLegName: { flex: 1, fontSize: 13, fontWeight: 600 },
  pieLegPct: { fontSize: 12.5, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", width: 40, textAlign: "right" },
  pieLegMin: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600, minWidth: 58, textAlign: "right" },

  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10, marginBottom: 14 },
  miniCard: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 14, padding: "12px 14px", cursor: "pointer", fontFamily: "inherit", textAlign: "left", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  miniLabel: { fontSize: 13, fontWeight: 700, color: "var(--text)" },
  miniStatus: { fontSize: 11.5, fontWeight: 600 },

  walletRow: { display: "flex", gap: 10 },
  walletStat: { flex: 1, textAlign: "center" },
  walletVal: { fontSize: 17, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  walletLbl: { fontSize: 11, color: "var(--text-3)", fontWeight: 600, marginTop: 2 },

  quickHead: { fontSize: 13, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "6px 0 10px" },
  quickCard: { border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 14, padding: "14px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 10 },
  quickTitle: { display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, fontWeight: 700, color: "var(--text)" },
  quickStat: { fontSize: 13, color: "var(--text-2)", fontWeight: 600 },
  quickAddBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--text)", padding: "8px 10px", borderRadius: 9, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  habitList: { display: "flex", flexWrap: "wrap", gap: 6 },
  habitChip: { border: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--text-2)", padding: "5px 10px", borderRadius: 14, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 4 },
  habitChipOn: { background: "#4C9A6B", color: "#fff", borderColor: "#4C9A6B" },

  quadGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 },
  quadCell: { display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid var(--border)", borderRadius: 8, padding: "5px 8px", fontSize: 11.5 },
  quadLabel: { color: "var(--text-3)", fontWeight: 600 },
  quadCount: { fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", fontSize: 13 },

  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  modalCard: { background: "var(--surface)", color: "var(--text)", borderRadius: 16, padding: "20px 20px 16px", width: 340, maxWidth: "100%", boxShadow: "0 12px 48px rgba(0,0,0,0.3)", border: "1px solid var(--border)" },
  modalTitle: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 12 },
  modalBody: { display: "flex", flexDirection: "column", gap: 8 },
  input: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", color: "var(--text)", background: "var(--surface-2)", outline: "none" },
  modalActions: { display: "flex", gap: 8, marginTop: 6 },
  modalCancel: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  modalConfirm: { flex: 1, border: "none", background: "var(--accent-strong)", color: "#fff", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};
