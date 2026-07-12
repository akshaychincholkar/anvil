import { useState, useEffect, useCallback, useMemo } from "react";
import {
  TrendingUp, TrendingDown, Wallet, Plus, X, ArrowDownLeft, ArrowUpRight,
  Calculator, PiggyBank, HeartPulse, LineChart, Landmark, Check, Pencil, Sprout,
  Repeat, Pause, Play
} from "lucide-react";
import { api } from "../api.js";
import { useCurrency, fmtMoney, fmtCompact } from "../currency.js";
import { useMonthStartDay, cycleRange } from "../monthCycle.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";
import Dropdown from "../components/Dropdown.jsx";

function useIsMobile(bp = 600) {
  const [m, setM] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const h = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
}

const INCOME_CATS  = ["Salary", "Stocks", "Business", "Interest", "Rent", "Gift", "Other"];
const EXPENSE_CATS = ["Bills", "EMI", "Rent", "Food", "Shopping", "Transport", "Health", "Entertainment", "Education", "Other"];
const INVEST_KINDS = ["Stocks", "Mutual Fund", "SIP", "Fixed Deposit", "Gold", "Real Estate", "PPF/EPF", "Crypto", "Other"];

const CAT_COLOR = {
  Salary: "#4C9A6B", Stocks: "#3A7CA5", Business: "#C9A227", Interest: "#8268B0", Gift: "#C2773B",
  Bills: "#C2536B", EMI: "#A23E57", Food: "#E08E45", Shopping: "#8268B0", Transport: "#3A7CA5",
  Health: "#4C9A6B", Entertainment: "#C9A227", Education: "#5B7C99", Rent: "#5B8C5A", Other: "#9A968C",
};
const catColor = (c) => CAT_COLOR[c] || "#9A968C";

// Investments shown inside "Outgoing" get their own green-shade palette per
// holding type, so they read as "money set aside" rather than "money spent".
const INVEST_CAT_COLOR = {
  Stocks: "#2F6B4F", "Mutual Fund": "#3E9E6B", SIP: "#4FAE7E", "Fixed Deposit": "#6BBE92",
  Gold: "#8ECDA8", "Real Estate": "#1F5C3F", "PPF/EPF": "#5BAE83", Crypto: "#7FC79E", Other: "#9AD4B3",
};
const investCatColor = (k) => INVEST_CAT_COLOR[k] || "#4C9A6B";

const INCOME = "#3E9E6B";
const EXPENSE = "#D1556E";
const INVEST = "#3A7CA5";
const FIXED = "#8268B0";

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const TODAY = iso(new Date());

const PRESETS = [
  { id: "month", label: "This month" },
  { id: "last",  label: "Last month" },
  { id: "year",  label: "This year" },
  { id: "all",   label: "All time" },
];
function presetRange(id, monthStartDay) {
  const now = new Date();
  if (id === "month") return cycleRange(now, monthStartDay);
  if (id === "last")  return cycleRange(now, monthStartDay, -1);
  if (id === "year")  return [iso(new Date(now.getFullYear(), 0, 1)), TODAY];
  return ["0000-01-01", "9999-12-31"];
}

export default function FinanceScreen() {
  const cur = useCurrency();
  const [tab, setTab] = useState("overview");
  const [txns, setTxns] = useState([]);
  const [expCats, setExpCats] = useState([]);
  const [expLogs, setExpLogs] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [fixedItems, setFixedItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const load = useCallback(() => {
    // Order matters: getExpenses/getInvestments lazily auto-post due fixed
    // items for the current cycle, so fetch fixed-items list last to reflect that.
    return Promise.all([api.getTxns(), api.getExpenses(), api.getInvestments()])
      .then(([t, e, inv]) => {
        setTxns(t); setExpCats(e.categories); setExpLogs(e.logs); setInvestments(inv);
        return api.getFixedItems();
      })
      .then(setFixedItems)
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, []);
  useEffect(() => { load(); }, [load]);

  // Expenses (the icon-based section) are the single source of truth for
  // outgoing money — convert its logs into the same shape as a finance_txn
  // so Overview/Money can treat income (finance_txn) and expenses (expense_log)
  // uniformly. Any old expense-kind finance_txn rows still display (legacy),
  // they just aren't editable from here anymore.
  const expCatById = useMemo(() => { const m = {}; expCats.forEach((c) => (m[c.id] = c)); return m; }, [expCats]);
  const expAsTxns = useMemo(() => expLogs.map((l) => ({
    id: `exp-${l.id}`, rawId: l.id, source: "expense",
    kind: "expense",
    category: expCatById[l.category_id]?.name || "Other",
    amount: l.amount, note: l.note, date: l.date,
  })), [expLogs, expCatById]);

  const legacyExpenseTxns = useMemo(() => txns.filter((t) => t.kind === "expense").map((t) => ({ ...t, source: "legacy" })), [txns]);
  const incomeTxns = useMemo(() => txns.filter((t) => t.kind === "income").map((t) => ({ ...t, source: "legacy" })), [txns]);
  const allTxns = useMemo(
    () => [...incomeTxns, ...legacyExpenseTxns, ...expAsTxns].sort((a, b) => b.date.localeCompare(a.date)),
    [incomeTxns, legacyExpenseTxns, expAsTxns]
  );

  const money = (n) => fmtMoney(n, cur.code);

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Wallet</div>
        <h1 style={S.h1}>Wallet</h1>
        <div style={S.subhead}>Your money — what comes in, what goes out, and where it's headed.</div>
      </div>

      <div style={S.tabs}>
        {[["overview", "Overview", LineChart], ["money", "Money", Wallet], ["calc", "Calculators", Calculator]].map(([id, label, Icon]) => (
          <button key={id} onClick={() => setTab(id)} style={{ ...S.tab, ...(tab === id ? S.tabOn : {}) }}>
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {tab === "overview" && <Overview txns={allTxns} investments={investments} loaded={loaded} money={money} cur={cur} />}
      {tab === "money" && <MoneyTab txns={allTxns} expCats={expCats} investments={investments} fixedItems={fixedItems} reload={load} money={money} cur={cur} />}
      {tab === "calc" && <Calculators money={money} cur={cur} />}
    </div>
  );
}

/* ───────────────────────── Overview ───────────────────────── */

function Overview({ txns, investments, loaded, money, cur }) {
  const monthStartDay = useMonthStartDay();
  const isMobile = useIsMobile();
  const [preset, setPreset] = useState("month");
  const [lo, hi] = presetRange(preset, monthStartDay);

  const inRange = useMemo(
    () => txns.filter((t) => t.date >= lo && t.date <= hi),
    [txns, lo, hi]
  );

  const income = inRange.filter((t) => t.kind === "income");
  const expense = inRange.filter((t) => t.kind === "expense");
  const totalIn = income.reduce((n, t) => n + t.amount, 0);
  const totalOut = expense.reduce((n, t) => n + t.amount, 0);

  // Investments made within the selected period count as money set aside
  // (an outgoing, but not a "spend") — they reduce net savings same as expenses.
  const investedInRange = useMemo(() => investments.filter((i) => i.date >= lo && i.date <= hi), [investments, lo, hi]);
  const totalInvestedInRange = investedInRange.reduce((n, i) => n + i.invested, 0);
  const totalOutAll = totalOut + totalInvestedInRange;
  const net = totalIn - totalOutAll;

  const totalInvested = investments.reduce((n, i) => n + i.invested, 0);

  // Daily budget for the CURRENT cycle (independent of the selected preset):
  // what's left ÷ days until the next month-start, shown under "Remaining".
  const dailyBudget = useMemo(() => {
    const [cLo, cHi] = cycleRange(new Date(), monthStartDay);
    const inCycle = (t) => t.date >= cLo && t.date <= cHi;
    const cIn = txns.filter((t) => t.kind === "income" && inCycle(t)).reduce((n, t) => n + t.amount, 0);
    const cOut = txns.filter((t) => t.kind === "expense" && inCycle(t)).reduce((n, t) => n + t.amount, 0);
    const cInv = investments.filter((i) => inCycle(i)).reduce((n, i) => n + i.invested, 0);
    const remaining = cIn - cOut - cInv;
    const daysLeft = Math.max(1, Math.round((new Date(cHi + "T00:00") - new Date(TODAY + "T00:00")) / 86400000) + 1);
    return { remaining, daysLeft, perDay: remaining / daysLeft };
  }, [txns, investments, monthStartDay]);

  const byCat = (list) => {
    const m = {};
    list.forEach((t) => { m[t.category] = (m[t.category] || 0) + t.amount; });
    return Object.entries(m).map(([category, amount]) => ({ category, amount, color: catColor(category) })).sort((a, b) => b.amount - a.amount);
  };
  const expenseSegs = byCat(expense);
  const investSegs = useMemo(() => {
    const m = {};
    investedInRange.forEach((i) => { m[i.kind] = (m[i.kind] || 0) + i.invested; });
    return Object.entries(m).map(([category, amount]) => ({ category, amount, color: investCatColor(category) })).sort((a, b) => b.amount - a.amount);
  }, [investedInRange]);
  const outgoingSegs = [...expenseSegs, ...investSegs];

  return (
    <>
      <div style={S.presetRow}>
        {PRESETS.map((p) => (
          <button key={p.id} onClick={() => setPreset(p.id)} style={{ ...S.preset, ...(preset === p.id ? S.presetOn : {}) }}>{p.label}</button>
        ))}
      </div>

      {/* Summary — Income · Expenses · Invested · Remaining. On mobile they lay
          out as a 2×2 grid; on desktop, four across. */}
      <div style={{ ...S.sumGrid, gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)" }}>
        <SumCard icon={<ArrowDownLeft size={16} />} label="Income" value={money(totalIn)} color={INCOME} />
        <SumCard icon={<ArrowUpRight size={16} />} label="Expenses" value={money(totalOut)} color={EXPENSE} />
        <SumCard icon={<Sprout size={16} />} label="Invested" value={money(totalInvestedInRange)} color={INVEST} />
        <SumCard icon={net >= 0 ? <PiggyBank size={16} /> : <TrendingDown size={16} />}
          label="Remaining" value={money(net)} color={net >= 0 ? INCOME : EXPENSE}
          sub={dailyBudget.perDay >= 0
            ? `≈ ${money(dailyBudget.perDay)}/day · ${dailyBudget.daysLeft}d left`
            : `overspent · ${dailyBudget.daysLeft}d left`} />
      </div>
      {totalInvestedInRange > 0 && (
        <div style={S.investNote}>
          <Sprout size={13} color={INVEST} /> {money(totalInvestedInRange)} invested this period — counted as outgoing and deducted from what remains.
        </div>
      )}

      {investments.length > 0 && (
        <div style={S.card}>
          <div style={S.cardTitleRow}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Sprout size={18} color={INVEST} />
              <div>
                <div style={S.cardTitle}>Assets &amp; investments</div>
                <div style={S.cardSub}>Total invested across all your holdings, all time</div>
              </div>
            </div>
            <div style={{ ...S.cardTotal, color: INVEST }}>{money(totalInvested)}</div>
          </div>
          <ForecastBlock invested={totalInvested} investments={investments} money={money} cur={cur} />
        </div>
      )}

      {!loaded ? <div style={S.muted}>Loading…</div> : inRange.length === 0 && investedInRange.length === 0 ? (
        <div style={S.card}><div style={S.muted}>No transactions in this period. Add some under the <b>Money</b> tab.</div></div>
      ) : (
        <>
          <HealthCard totalIn={totalIn} totalOut={totalOutAll} />

          <div style={S.twoCol}>
            <CatChart title="Incoming" subtitle="Where your money comes from" total={totalIn} data={byCat(income)} accent={INCOME} cur={cur} />
            <CatChart title="Outgoing" subtitle="Spending + money set aside in investments" total={totalOutAll} data={outgoingSegs} accent={EXPENSE} cur={cur} />
          </div>
        </>
      )}
    </>
  );
}

// Growth forecast: SIP-style projection. You keep investing a monthly amount
// (e.g. ₹15k/month) that steps up by a yearly % (e.g. +10% → ₹16,500/month
// from year two), all compounding monthly at the annual rate (default 10%).
// Every input persists. Timeline can be viewed month-wise or year-wise.
function ForecastBlock({ invested, investments, money, cur }) {
  const [rate, setRate] = useState(10);
  const [monthly, setMonthly] = useState("");
  const [stepUp, setStepUp] = useState(5);
  useEffect(() => {
    api.getSetting("invest_forecast_rate").then((r) => {
      const v = parseFloat(r?.value);
      if (!isNaN(v) && v > 0) setRate(v);
    }).catch(() => {});
    api.getSetting("invest_forecast_stepup").then((r) => {
      const v = parseFloat(r?.value);
      if (!isNaN(v) && v >= 0) setStepUp(v);
    }).catch(() => {});
    api.getSetting("invest_forecast_monthly").then((r) => {
      const v = parseFloat(r?.value);
      if (!isNaN(v) && v >= 0) { setMonthly(v); return; }
      // Never set — suggest your actual pace: total invested ÷ distinct months.
      const months = new Set((investments || []).map((i) => (i.date || "").slice(0, 7)).filter(Boolean));
      if (months.size > 0) setMonthly(Math.round(invested / months.size / 100) * 100);
    }).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const persistNum = (key, v, min = 0) => {
    const n = parseFloat(v);
    if (!isNaN(n) && n >= min) api.setSetting(key, n).catch(() => {});
  };
  const changeRate = (v) => { setRate(v); persistNum("invest_forecast_rate", v, 0.01); };
  const changeMonthly = (v) => { setMonthly(v); persistNum("invest_forecast_monthly", v); };
  const changeStepUp = (v) => { setStepUp(v); persistNum("invest_forecast_stepup", v); };

  const r = parseFloat(rate);
  const pct = !isNaN(r) && r > 0 ? r : 10;
  const m = Math.max(0, parseFloat(monthly) || 0);
  const sPct = Math.max(0, parseFloat(stepUp) || 0);
  const i = pct / 100 / 12; // monthly compounding, standard SIP maths

  // Simulate month by month (annuity-due: each installment compounds the month
  // it's invested). After every 12 months the contribution steps up by sPct%.
  const fv = (totalMonths) => {
    let corpus = invested, contrib = m, putIn = invested;
    for (let t = 1; t <= totalMonths; t++) {
      corpus = (corpus + contrib) * (1 + i);
      putIn += contrib;
      if (t % 12 === 0) contrib *= 1 + sPct / 100;
    }
    return { value: corpus, putIn };
  };
  // A bar every 2 years across the 20-year horizon.
  const milestones = Array.from({ length: 10 }, (_, k) => (k + 1) * 24);
  const bars = milestones.map((mo) => ({ mo, ...fv(mo) }));
  const max = Math.max(...bars.map((b) => b.value), 1);
  const last = bars[bars.length - 1];

  return (
    <div style={S.forecastWrap}>
      <div style={S.forecastHead}>
        <div>
          <div style={S.forecastTitle}>Growth forecast</div>
          <div style={S.cardSub}>
            {money(m)}/month{sPct > 0 ? `, stepping up ${sPct}% yearly (${money(m * (1 + sPct / 100))}/mo from year 2)` : ""}
          </div>
        </div>
        <div style={S.forecastInputs}>
          <label style={S.rateWrap} title="How much you invest every month">
            <span style={S.rateUnit}>{cur.symbol}</span>
            <input type="number" min="0" step="500" value={monthly} placeholder="15000"
              onChange={(e) => changeMonthly(e.target.value)} style={{ ...S.rateInput, width: 76, textAlign: "left" }} />
            <span style={S.rateUnit}>/ mo</span>
          </label>
          <label style={S.rateWrap} title="Yearly increase of the monthly amount">
            <span style={S.rateUnit}>+</span>
            <input type="number" min="0" max="100" step="1" value={stepUp}
              onChange={(e) => changeStepUp(e.target.value)} style={{ ...S.rateInput, width: 40 }} />
            <span style={S.rateUnit}>% / yr</span>
          </label>
          <label style={S.rateWrap} title="Expected annual return">
            <input type="number" min="1" max="100" step="0.5" value={rate}
              onChange={(e) => changeRate(e.target.value)} style={S.rateInput} />
            <span style={S.rateUnit}>% / yr</span>
          </label>
        </div>
      </div>

      <div style={S.forecastBars}>
        {bars.map((b, idx) => (
          <div key={b.mo} style={S.fBarCol}>
            <div style={S.fBarVal}>{fmtCompact(b.value, cur.code)}</div>
            <div style={S.fBarTrack}>
              <div style={{ ...S.fBar, height: `${Math.max(6, (b.value / max) * 100)}%`, opacity: 0.45 + 0.55 * (idx / (bars.length - 1)) }} />
            </div>
            <div style={S.fBarLbl}>{b.mo / 12}y</div>
          </div>
        ))}
      </div>
      <div style={S.forecastNote}>
        In 20 years at {pct}% p.a. → <b>{money(last.value)}</b> (you'd put in {money(last.putIn)}, growth adds {money(Math.max(0, last.value - last.putIn))})
      </div>
    </div>
  );
}

function SumCard({ icon, wideIcon, label, value, color, style, wide, sub }) {
  // Wide (full-width) variant: a centered row with a big icon filling the space.
  if (wide) {
    return (
      <div style={{ ...S.sumCard, ...S.sumCardWide, ...style }}>
        <div style={{ ...S.sumIconWide, color, background: color + "1A" }}>{wideIcon || icon}</div>
        <div style={S.sumWideText}>
          <div style={S.sumLabel}>{label}</div>
          <div style={{ ...S.sumVal, color, marginTop: 0 }}>{value}</div>
          {sub && <div style={S.sumSub}>{sub}</div>}
        </div>
      </div>
    );
  }
  return (
    <div style={{ ...S.sumCard, ...style }}>
      <div style={{ ...S.sumIcon, color, background: color + "1A" }}>{icon}</div>
      <div style={S.sumLabel}>{label}</div>
      <div style={{ ...S.sumVal, color }}>{value}</div>
      {sub && <div style={S.sumSub}>{sub}</div>}
    </div>
  );
}

function CatChart({ title, subtitle, total, data, accent, cur }) {
  const [hoverIdx, setHoverIdx] = useState(null);
  let acc = 0;
  const segs = data.map((d) => {
    const start = total > 0 ? (acc / total) * 100 : 0;
    acc += d.amount;
    const end = total > 0 ? (acc / total) * 100 : 0;
    return { ...d, start, end, color: d.color || catColor(d.category), pct: total > 0 ? (d.amount / total) * 100 : 0 };
  });
  const hovered = hoverIdx != null ? segs[hoverIdx] : null;
  const single = segs.length === 1;

  return (
    <div style={S.card}>
      <div style={S.cardTitleRow}>
        <div>
          <div style={{ ...S.cardTitle, color: accent }}>{title}</div>
          <div style={S.cardSub}>{subtitle}</div>
        </div>
        <div style={{ ...S.cardTotal, color: accent }}>{fmtMoney(total, cur.code)}</div>
      </div>
      {data.length === 0 ? <div style={S.muted}>Nothing logged.</div> : (
        <div style={S.pieWrap}>
          <div style={S.pieChart} onMouseLeave={() => setHoverIdx(null)}>
            <svg viewBox="0 0 120 120" style={S.pieSvg}>
              {segs.map((s, i) => (
                <path key={s.category} d={donutSlicePath(s.start, s.end, i === hoverIdx, single)} fill={s.color}
                  onMouseEnter={() => setHoverIdx(i)}
                  style={{ cursor: "pointer", transition: "transform 0.15s, filter 0.15s", filter: i === hoverIdx ? "brightness(1.08)" : "none" }} />
              ))}
            </svg>
            <div style={{ ...S.pieHole, ...(hovered ? { transform: "translate(-50%,-50%) scale(1.06)", boxShadow: `0 0 0 4px ${hovered.color}33` } : {}) }}>
              {hovered ? (
                <>
                  <span style={{ ...S.pieHoleVal, color: hovered.color, fontSize: 13 }}>{fmtCompact(hovered.amount, cur.code)}</span>
                  <span style={S.pieHoleLbl}>{Math.round(hovered.pct)}% · {hovered.category}</span>
                </>
              ) : (
                <>
                  <span style={S.pieHoleVal}>{fmtCompact(total, cur.code)}</span>
                  <span style={S.pieHoleLbl}>total</span>
                </>
              )}
            </div>
          </div>
          <div style={S.pieLegend}>
            {segs.map((s, i) => (
              <div key={s.category} style={{ ...S.legendRow, ...(i === hoverIdx ? S.legendRowOn : {}) }}
                onMouseEnter={() => setHoverIdx(i)} onMouseLeave={() => setHoverIdx(null)}>
                <span style={{ ...S.dot, background: s.color }} />
                <span style={S.legendName}>{s.category}</span>
                <span style={S.legendPct}>{Math.round(s.pct)}%</span>
                <span style={S.legendAmt}>{fmtMoney(s.amount, cur.code)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// SVG donut-slice path (annulus wedge) for percentage range [a,b) of a 0–100 circle, centered at (60,60).
// When `popped`, the slice is pushed outward along its mid-angle so it visibly "comes out" on hover.
function donutSlicePath(aPct, bPct, popped, single) {
  const cx = 60, cy = 60, rOuter = 58, rInner = 35;
  const pop = popped ? 6 : 0;
  const toXY = (pct, r, ox = 0, oy = 0) => {
    const a = (pct / 100) * 2 * Math.PI - Math.PI / 2;
    return [cx + ox + r * Math.cos(a), cy + oy + r * Math.sin(a)];
  };
  const midA = ((aPct + bPct) / 2 / 100) * 2 * Math.PI - Math.PI / 2;
  const ox = single ? 0 : Math.cos(midA) * pop, oy = single ? 0 : Math.sin(midA) * pop;
  if (bPct - aPct >= 99.999) {
    return `M ${cx + ox} ${cy + oy - rOuter} A ${rOuter} ${rOuter} 0 1 1 ${cx + ox - 0.01} ${cy + oy - rOuter} L ${cx + ox - 0.01} ${cy + oy - rInner} A ${rInner} ${rInner} 0 1 0 ${cx + ox} ${cy + oy - rInner} Z`;
  }
  const [ox1, oy1] = toXY(aPct, rOuter, ox, oy);
  const [ox2, oy2] = toXY(bPct, rOuter, ox, oy);
  const [ix2, iy2] = toXY(bPct, rInner, ox, oy);
  const [ix1, iy1] = toXY(aPct, rInner, ox, oy);
  const large = bPct - aPct > 50 ? 1 : 0;
  return `M ${ox1} ${oy1} A ${rOuter} ${rOuter} 0 ${large} 1 ${ox2} ${oy2} L ${ix2} ${iy2} A ${rInner} ${rInner} 0 ${large} 0 ${ix1} ${iy1} Z`;
}

function HealthCard({ totalIn, totalOut }) {
  const net = totalIn - totalOut;
  const savingsRate = totalIn > 0 ? net / totalIn : 0;
  const score = totalIn === 0 ? 0 : Math.max(0, Math.min(100, Math.round(50 + savingsRate * 100)));

  let status, color, tip;
  if (totalIn === 0) {
    status = "No income logged"; color = "#9A968C"; tip = "Add your income to see your financial health.";
  } else if (savingsRate >= 0.3) {
    status = "Excellent"; color = "#3E9E6B"; tip = "You're saving 30%+ of income — keep investing the surplus.";
  } else if (savingsRate >= 0.2) {
    status = "Healthy"; color = "#4C9A6B"; tip = "Solid savings rate. Consider automating a SIP with the surplus.";
  } else if (savingsRate >= 0.1) {
    status = "Okay"; color = "#C9A227"; tip = "Decent, but aim for 20%+. Trim your biggest expense category.";
  } else if (savingsRate >= 0) {
    status = "Tight"; color = "#C2773B"; tip = "You're saving very little. Review recurring bills and EMIs.";
  } else {
    status = "Overspending"; color = "#D1556E"; tip = "You're spending more than you earn. Cut back to avoid debt.";
  }

  const expenseRatio = totalIn > 0 ? Math.min(100, Math.round((totalOut / totalIn) * 100)) : 0;

  return (
    <div style={S.card}>
      <div style={S.cardTitleRow}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <HeartPulse size={18} color={color} />
          <div>
            <div style={S.cardTitle}>Financial health</div>
            <div style={S.cardSub}>Based on your savings rate this period</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ ...S.healthScore, color }}>{totalIn === 0 ? "—" : score}</div>
          <div style={{ ...S.healthStatus, color }}>{status}</div>
        </div>
      </div>

      <div style={S.gaugeTrack}>
        <div style={{ ...S.gaugeFill, width: `${totalIn === 0 ? 0 : score}%`, background: color }} />
      </div>

      <div style={S.healthStats}>
        <div style={S.healthStat}><span style={S.healthStatV}>{totalIn > 0 ? Math.round(savingsRate * 100) : 0}%</span><span style={S.healthStatL}>Savings rate</span></div>
        <div style={S.healthStat}><span style={S.healthStatV}>{expenseRatio}%</span><span style={S.healthStatL}>of income spent</span></div>
      </div>
      <div style={{ ...S.tip, borderColor: color + "55", background: color + "12", color }}>{tip}</div>
    </div>
  );
}

/* ───────────────────────── Money (transactions) ───────────────────────── */

function MoneyTab({ txns, expCats, investments, fixedItems, reload, money, cur }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Salary");
  const [date, setDate] = useState(TODAY);
  const [note, setNote] = useState("");
  const [edit, setEdit] = useState(null); // { id, kind, amount, category, date, note }
  const [invForm, setInvForm] = useState(null); // add/edit investment modal
  const [fixedForm, setFixedForm] = useState(null); // add/edit fixed-item modal

  const { deleteItem: deleteTxnItem, toasts: txnToasts, handleUndo: undoTxn, handleDismiss: dismissTxn } = useUndoableDelete(api.deleteTxn, api.restoreTxn, reload);
  const { deleteItem: deleteExpItem, toasts: expToasts, handleUndo: undoExp, handleDismiss: dismissExp } = useUndoableDelete(api.deleteExpenseLog, api.restoreExpenseLog, reload);
  const { deleteItem: deleteInvItem, toasts: invToasts, handleUndo: undoInv, handleDismiss: dismissInv } = useUndoableDelete(api.deleteInvestment, api.restoreInvestment, reload);

  const openAddFixed = () => setFixedForm({ id: null, kind: "expense", name: "", amount: "", category_id: expCats[0]?.id || "", invest_kind: "Stocks", note: "" });
  const openEditFixed = (f) => setFixedForm({ id: f.id, kind: f.kind, name: f.name, amount: String(f.amount), category_id: f.category_id || expCats[0]?.id || "", invest_kind: f.invest_kind || "Stocks", note: f.note || "" });
  const saveFixed = async () => {
    const name = fixedForm.name.trim();
    const amt = parseFloat(fixedForm.amount) || 0;
    if (!name || amt <= 0) return;
    const payload = {
      kind: fixedForm.kind, name, amount: amt, note: fixedForm.note.trim(),
      ...(fixedForm.kind === "expense" ? { category_id: Number(fixedForm.category_id) } : { invest_kind: fixedForm.invest_kind }),
    };
    if (fixedForm.id) await api.updateFixedItem(fixedForm.id, payload);
    else await api.createFixedItem(payload);
    setFixedForm(null);
    reload();
  };
  const removeFixed = async (f) => {
    if (!window.confirm(`Stop "${f.name}" from auto-posting each month? Past entries it already created will stay.`)) return;
    await api.deleteFixedItem(f.id);
    reload();
  };
  const toggleFixedActive = async (f) => { await api.updateFixedItem(f.id, { active: !f.active }); reload(); };

  const openAddInv = () => setInvForm({ id: null, name: "", kind: "Stocks", invested: "", current_value: "", date: TODAY, note: "" });
  const openEditInv = (inv) => setInvForm({ id: inv.id, name: inv.name, kind: inv.kind, invested: String(inv.invested), current_value: String(inv.current_value), date: inv.date, note: inv.note || "" });
  const saveInv = async () => {
    const name = invForm.name.trim();
    const invested = parseFloat(invForm.invested) || 0;
    const current_value = parseFloat(invForm.current_value) || 0;
    if (!name) return;
    const payload = { name, kind: invForm.kind, invested, current_value, note: invForm.note.trim(), date: invForm.date };
    if (invForm.id) await api.updateInvestment(invForm.id, payload);
    else await api.createInvestment(payload);
    setInvForm(null);
    reload();
  };
  const investedTotal = investments.reduce((n, i) => n + i.invested, 0);

  const add = async () => {
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) return;
    await api.createTxn({ kind: "income", category, amount: amt, note: note.trim(), date });
    setAmount(""); setNote("");
    reload();
  };

  const startEdit = (t) => setEdit({ id: t.id, rawId: t.rawId, source: t.source, kind: t.kind, amount: String(t.amount), category: t.category, date: t.date, note: t.note || "" });
  const editCats = edit?.source === "expense" ? expCats.map((c) => c.name) : edit?.kind === "income" ? INCOME_CATS : EXPENSE_CATS;
  const saveEdit = async () => {
    const amt = parseFloat(edit.amount);
    if (!amt || amt <= 0) return;
    if (edit.source === "expense") {
      const cat = expCats.find((c) => c.name === edit.category);
      await api.updateExpenseLog(edit.rawId, { amount: amt, note: edit.note.trim(), date: edit.date, ...(cat ? { category_id: cat.id } : {}) });
    } else {
      await api.updateTxn(edit.id, { kind: edit.kind, category: edit.category, amount: amt, note: edit.note.trim(), date: edit.date });
    }
    setEdit(null);
    reload();
  };
  const removeTxn = (t) => {
    if (t.source === "expense") deleteExpItem(t.rawId, t.category);
    else deleteTxnItem(t.id, t.category);
  };

  // group by date
  const groups = useMemo(() => {
    const m = {};
    txns.forEach((t) => { (m[t.date] = m[t.date] || []).push(t); });
    return Object.entries(m).sort((a, b) => b[0].localeCompare(a[0]));
  }, [txns]);

  const fmtDate = (d) => new Date(d + "T00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  return (
    <>
      <div style={S.card}>
        <div style={S.cardTitle}>Add income</div>
        <div style={S.cardSub}>Expenses are added from the <b>Expenses</b> section and show up here automatically.</div>
        <div style={S.formGrid}>
          <input type="number" inputMode="decimal" placeholder="Amount" value={amount}
            onChange={(e) => setAmount(e.target.value)} onKeyDown={(e) => e.key === "Enter" && add()} style={S.input} autoFocus />
          <Dropdown value={category} options={INCOME_CATS} onChange={setCategory} />
          <input type="date" value={date} max={TODAY} onChange={(e) => setDate(e.target.value)} style={S.input} />
        </div>
        <input placeholder="Note (optional)" value={note} onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()} style={{ ...S.input, marginTop: 8 }} />
        <button onClick={add} style={{ ...S.addBtn, background: INCOME }}>
          <Plus size={15} /> Add income
        </button>
      </div>

      <div style={S.card}>
        <div style={S.cardTitleRow}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Repeat size={18} color={FIXED} />
            <div>
              <div style={S.cardTitle}>Fixed items</div>
              <div style={S.cardSub}>EMI, rent, SIP… auto-posted at the start of every billing cycle</div>
            </div>
          </div>
          <button onClick={openAddFixed} style={{ ...S.invAddBtn, background: FIXED }}><Plus size={14} /> Add</button>
        </div>

        {fixedItems.length === 0 ? <div style={S.muted}>No fixed items yet — add an EMI or rent to auto-post it every cycle.</div> : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {fixedItems.map((f) => {
              const catName = f.kind === "expense" ? (expCats.find((c) => c.id === f.category_id)?.name || "Other") : (f.invest_kind || "Other");
              return (
                <div key={f.id} style={{ ...S.invRow, opacity: f.active ? 1 : 0.5 }}>
                  <span style={{ ...S.txnDot, background: f.kind === "expense" ? EXPENSE : INVEST }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={S.txnCat}>{f.name}</div>
                    <div style={S.txnNote}>{f.kind === "expense" ? "Fixed expense" : "Fixed investment"} · {catName}</div>
                  </div>
                  <span style={{ ...S.txnAmt, color: f.kind === "expense" ? EXPENSE : INVEST }}>{money(f.amount)}/mo</span>
                  <button onClick={() => toggleFixedActive(f)} style={S.delBtn} title={f.active ? "Pause" : "Resume"}>
                    {f.active ? <Pause size={13} /> : <Play size={13} />}
                  </button>
                  <button onClick={() => openEditFixed(f)} style={S.delBtn}><Pencil size={13} /></button>
                  <button onClick={() => removeFixed(f)} style={S.delBtn}><X size={14} /></button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div style={S.card}>
        <div style={S.cardTitleRow}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Sprout size={18} color={INVEST} />
            <div>
              <div style={S.cardTitle}>Investments</div>
              <div style={S.cardSub}>Asset generation — money you've set aside</div>
            </div>
          </div>
          <button onClick={openAddInv} style={S.invAddBtn}><Plus size={14} /> Add</button>
        </div>

        {investments.length === 0 ? <div style={S.muted}>No investments tracked yet.</div> : (
          <>
            <div style={S.healthStats}>
              <div style={S.healthStat}><span style={S.healthStatV}>{money(investedTotal)}</span><span style={S.healthStatL}>Total invested</span></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
              {investments.map((inv) => (
                <div key={inv.id} style={S.invRow}>
                  <span style={{ ...S.txnDot, background: INVEST }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={S.txnCat}>{inv.name}</div>
                    <div style={S.txnNote}>{inv.kind} · {inv.date}</div>
                  </div>
                  <div style={S.txnAmt}>{money(inv.invested)}</div>
                  <button onClick={() => openEditInv(inv)} style={S.delBtn}><Pencil size={13} /></button>
                  <button onClick={() => deleteInvItem(inv.id, inv.name)} style={S.delBtn}><X size={14} /></button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div style={S.card}>
        <div style={S.cardTitle}>History</div>
        {groups.length === 0 ? <div style={S.muted}>No transactions yet.</div> : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {groups.map(([d, list]) => (
              <div key={d}>
                <div style={S.dateHead}>{fmtDate(d)}</div>
                {list.map((t) => (
                  edit?.id === t.id ? (
                    <div key={t.id} style={S.editTxn}>
                      <div style={S.formGrid}>
                        <input type="number" inputMode="decimal" value={edit.amount} onChange={(e) => setEdit({ ...edit, amount: e.target.value })} style={S.input} />
                        <Dropdown value={edit.category} options={editCats}
                          onChange={(v) => setEdit({ ...edit, category: v })} />
                        <input type="date" value={edit.date} max={TODAY} onChange={(e) => setEdit({ ...edit, date: e.target.value })} style={S.input} />
                      </div>
                      <input placeholder="Note (optional)" value={edit.note} onChange={(e) => setEdit({ ...edit, note: e.target.value })}
                        onKeyDown={(e) => e.key === "Enter" && saveEdit()} style={{ ...S.input, marginTop: 8 }} />
                      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                        <button onClick={() => setEdit(null)} style={S.editCancel}><X size={14} /> Cancel</button>
                        <button onClick={saveEdit} style={{ ...S.addBtn, marginTop: 0, flex: 1, background: edit.kind === "income" ? INCOME : EXPENSE }}><Check size={15} /> Save</button>
                      </div>
                    </div>
                  ) : (
                    <div key={t.id} style={S.txnRow}>
                      <span style={{ ...S.txnDot, background: catColor(t.category) }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={S.txnCat}>{t.category}</div>
                        {t.note && <div style={S.txnNote}>{t.note}</div>}
                      </div>
                      <span style={{ ...S.txnAmt, color: t.kind === "income" ? INCOME : EXPENSE }}>
                        {t.kind === "income" ? "+" : "−"}{money(t.amount)}
                      </span>
                      <button onClick={() => startEdit(t)} style={S.delBtn}><Pencil size={13} /></button>
                      <button onClick={() => removeTxn(t)} style={S.delBtn}><X size={14} /></button>
                    </div>
                  )
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {invForm && (
        <div style={S.overlay} onClick={() => setInvForm(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>{invForm.id ? "Edit investment" : "New investment"}</span>
              <button onClick={() => setInvForm(null)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>
            <label style={S.label}>Name *</label>
            <input autoFocus value={invForm.name} onChange={(e) => setInvForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="e.g. Nifty Index Fund, HDFC FD…" style={S.input} />

            <label style={S.label}>Type</label>
            <Dropdown value={invForm.kind} options={INVEST_KINDS}
              onChange={(v) => setInvForm((f) => ({ ...f, kind: v }))} />

            <div style={S.formGrid}>
              <div>
                <label style={S.label}>Invested</label>
                <input type="number" inputMode="decimal" value={invForm.invested} onChange={(e) => setInvForm((f) => ({ ...f, invested: e.target.value }))} placeholder="0" style={S.input} />
              </div>
              <div>
                <label style={S.label}>Current value</label>
                <input type="number" inputMode="decimal" value={invForm.current_value} onChange={(e) => setInvForm((f) => ({ ...f, current_value: e.target.value }))} placeholder="0" style={S.input} />
              </div>
              <div>
                <label style={S.label}>Date</label>
                <input type="date" value={invForm.date} max={TODAY} onChange={(e) => setInvForm((f) => ({ ...f, date: e.target.value }))} style={S.input} />
              </div>
            </div>
            <label style={S.label}>Note (optional)</label>
            <input value={invForm.note} onChange={(e) => setInvForm((f) => ({ ...f, note: e.target.value }))} placeholder="Folio no., broker, etc." style={S.input} />

            <div style={S.modalActions}>
              <button onClick={() => setInvForm(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveInv} disabled={!invForm.name.trim()}
                style={{ ...S.saveBtn, ...(!invForm.name.trim() ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> {invForm.id ? "Save" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {fixedForm && (
        <div style={S.overlay} onClick={() => setFixedForm(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>{fixedForm.id ? "Edit fixed item" : "New fixed item"}</span>
              <button onClick={() => setFixedForm(null)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>
            <div style={S.kindToggle}>
              <button onClick={() => setFixedForm((f) => ({ ...f, kind: "expense" }))} style={{ ...S.kindBtn, ...(fixedForm.kind === "expense" ? { background: EXPENSE, color: "#fff", borderColor: EXPENSE } : {}) }}>
                <ArrowUpRight size={15} /> Expense
              </button>
              <button onClick={() => setFixedForm((f) => ({ ...f, kind: "investment" }))} style={{ ...S.kindBtn, ...(fixedForm.kind === "investment" ? { background: INVEST, color: "#fff", borderColor: INVEST } : {}) }}>
                <Sprout size={15} /> Investment
              </button>
            </div>

            <label style={S.label}>Name *</label>
            <input autoFocus value={fixedForm.name} onChange={(e) => setFixedForm((f) => ({ ...f, name: e.target.value }))}
              placeholder={fixedForm.kind === "expense" ? "e.g. Home loan EMI, Rent…" : "e.g. Monthly SIP — Nifty Index"} style={S.input} />

            <div style={S.formGrid}>
              <div>
                <label style={S.label}>Amount / month</label>
                <input type="number" inputMode="decimal" value={fixedForm.amount} onChange={(e) => setFixedForm((f) => ({ ...f, amount: e.target.value }))} placeholder="0" style={S.input} />
              </div>
              <div>
                <label style={S.label}>{fixedForm.kind === "expense" ? "Category" : "Type"}</label>
                {fixedForm.kind === "expense" ? (
                  <Dropdown value={fixedForm.category_id}
                    options={expCats.map((c) => ({ value: c.id, label: c.name }))}
                    onChange={(v) => setFixedForm((f) => ({ ...f, category_id: v }))} />
                ) : (
                  <Dropdown value={fixedForm.invest_kind} options={INVEST_KINDS}
                    onChange={(v) => setFixedForm((f) => ({ ...f, invest_kind: v }))} />
                )}
              </div>
            </div>
            <label style={S.label}>Note (optional)</label>
            <input value={fixedForm.note} onChange={(e) => setFixedForm((f) => ({ ...f, note: e.target.value }))} placeholder="Loan account no., etc." style={S.input} />

            <p style={S.fixedHint}>Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save.</p>

            <div style={S.modalActions}>
              <button onClick={() => setFixedForm(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveFixed} disabled={!fixedForm.name.trim() || !(parseFloat(fixedForm.amount) > 0)}
                style={{ ...S.saveBtn, background: FIXED, ...(!fixedForm.name.trim() || !(parseFloat(fixedForm.amount) > 0) ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> {fixedForm.id ? "Save" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      <UndoToast toasts={txnToasts} onUndo={undoTxn} onDismiss={dismissTxn} />
      <UndoToast toasts={expToasts} onUndo={undoExp} onDismiss={dismissExp} />
      <UndoToast toasts={invToasts} onUndo={undoInv} onDismiss={dismissInv} />
    </>
  );
}

/* ───────────────────────── Calculators ───────────────────────── */

function Calculators({ money, cur }) {
  return (
    <>
      <SIPCalc money={money} cur={cur} />
      <EMICalc money={money} cur={cur} />
    </>
  );
}

function Field({ label, value, set, min, max, step, suffix }) {
  return (
    <div style={S.field}>
      <div style={S.fieldTop}>
        <span style={S.fieldLabel}>{label}</span>
        <div style={S.fieldInputWrap}>
          <input type="number" value={value} onChange={(e) => set(e.target.value)} style={S.fieldInput} />
          {suffix && <span style={S.fieldSuffix}>{suffix}</span>}
        </div>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => set(e.target.value)} style={S.range} />
    </div>
  );
}

function SIPCalc({ money, cur }) {
  const [monthly, setMonthly] = useState(30000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const { invested, futureValue, gains, yearly } = useMemo(() => {
    const P = Math.max(0, parseFloat(monthly) || 0);
    const annual = Math.max(0, parseFloat(rate) || 0);
    const Y = Math.max(0, Math.min(60, parseInt(years) || 0));
    const i = annual / 12 / 100;
    const fvAt = (months) => {
      if (months <= 0) return 0;
      if (i === 0) return P * months;
      return P * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
    };
    const yearly = [];
    for (let y = 1; y <= Y; y++) yearly.push({ year: y, invested: P * 12 * y, value: fvAt(y * 12) });
    const futureValue = fvAt(Y * 12);
    const invested = P * 12 * Y;
    return { invested, futureValue, gains: futureValue - invested, yearly };
  }, [monthly, rate, years]);

  const maxV = Math.max(1, ...yearly.map((y) => y.value));

  return (
    <div style={S.card}>
      <div style={S.cardTitleRow}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <PiggyBank size={18} color="#3A7CA5" />
          <div><div style={S.cardTitle}>SIP projection</div><div style={S.cardSub}>Mutual fund / SIP future value</div></div>
        </div>
      </div>

      <Field label="Monthly investment" value={monthly} set={setMonthly} min={500} max={500000} step={500} suffix={cur.symbol} />
      <Field label="Expected return (p.a.)" value={rate} set={setRate} min={1} max={30} step={0.5} suffix="%" />
      <Field label="Time period" value={years} set={setYears} min={1} max={40} step={1} suffix="yrs" />

      <div style={S.resultHero}>
        <div style={S.resultLabel}>Projected wealth</div>
        <div style={{ ...S.resultVal, color: "#3A7CA5" }}>{money(futureValue)}</div>
      </div>
      <div style={S.splitRow}>
        <div style={S.splitItem}><span style={S.splitV}>{money(invested)}</span><span style={S.splitL}>Invested</span></div>
        <div style={S.splitItem}><span style={{ ...S.splitV, color: "#3E9E6B" }}>{money(gains)}</span><span style={S.splitL}>Est. returns</span></div>
      </div>

      {/* growth projection */}
      {yearly.length > 0 && (
        <div style={S.chartWrap}>
          <div style={S.chartBars}>
            {yearly.map((y) => (
              <div key={y.year} style={S.chartCol} title={`Year ${y.year}: ${money(y.value)}`}>
                <div style={{ ...S.chartStack, height: `${(y.value / maxV) * 100}%` }}>
                  <div style={{ ...S.chartGain, height: `${(1 - y.invested / y.value) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div style={S.chartAxis}>
            <span>Yr 1</span>
            <span style={{ marginLeft: "auto" }}>Yr {yearly.length}</span>
          </div>
          <div style={S.legend}>
            <span style={S.legendItem}><span style={{ ...S.legendDot, background: "#9DBFD6" }} /> Invested</span>
            <span style={S.legendItem}><span style={{ ...S.legendDot, background: "#3E9E6B" }} /> Returns</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Amortize a balance and return months taken, total interest, total paid.
function amortize(principalStart, i, payment, extraMonthly = 0, lumpNow = 0) {
  let bal = Math.max(0, principalStart - lumpNow);
  let totalInterest = 0, months = 0, totalPaid = lumpNow;
  const MAX = 1200;
  while (bal > 0.01 && months < MAX) {
    const interest = bal * i;
    let pay = payment + extraMonthly;
    let principalPaid = pay - interest;
    if (principalPaid <= 0) return { months: Infinity, totalInterest: Infinity, totalPaid: Infinity };
    if (principalPaid > bal) { principalPaid = bal; pay = bal + interest; }
    bal -= principalPaid; totalInterest += interest; totalPaid += pay; months++;
  }
  return { months, totalInterest, totalPaid };
}

const ymLabel = (m) => {
  if (!isFinite(m)) return "—";
  const y = Math.floor(m / 12), mo = m % 12;
  return (y ? `${y}y ` : "") + `${mo}m`;
};
const finishLabel = (m) => {
  if (!isFinite(m)) return "—";
  const d = new Date(); d.setMonth(d.getMonth() + m);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

function EMICalc({ money, cur }) {
  const [principal, setPrincipal] = useState(2000000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(20);
  const [prepay, setPrepay] = useState(500000);
  const [prepayType, setPrepayType] = useState("once");   // once | monthly
  const [strategy, setStrategy] = useState("tenure");     // tenure | emi

  const base = useMemo(() => {
    const P = Math.max(0, parseFloat(principal) || 0);
    const i = Math.max(0, parseFloat(rate) || 0) / 12 / 100;
    const n = Math.max(1, Math.round((parseFloat(years) || 0) * 12));
    const emi = i === 0 ? P / n : (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    return { P, i, n, emi, totalPay: emi * n, totalInterest: emi * n - P };
  }, [principal, rate, years]);

  // Extra monthly payment can only shorten the tenure, never lower the EMI.
  const effStrategy = prepayType === "monthly" ? "tenure" : strategy;

  const result = useMemo(() => {
    const { P, i, n, emi, totalInterest: baseInt } = base;
    const X = Math.max(0, parseFloat(prepay) || 0);
    if (X <= 0) return null;

    let newEMI = emi, newMonths = n, newInterest = baseInt, totalPaid = base.totalPay;
    if (prepayType === "once" && effStrategy === "emi") {
      const Pp = Math.max(0, P - X);
      newEMI = i === 0 ? Pp / n : (Pp * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      newMonths = n;
      newInterest = newEMI * n - Pp;
      totalPaid = X + newEMI * n;
    } else if (prepayType === "once") {
      const s = amortize(P, i, emi, 0, X);
      newMonths = s.months; newInterest = s.totalInterest; totalPaid = s.totalPaid;
    } else { // monthly → reduce tenure
      const s = amortize(P, i, emi, X, 0);
      newMonths = s.months; newInterest = s.totalInterest; totalPaid = s.totalPaid;
    }
    return {
      newEMI, newMonths, newInterest, totalPaid,
      interestSaved: Math.max(0, baseInt - newInterest),
      monthsSaved: Math.max(0, n - (isFinite(newMonths) ? newMonths : n)),
    };
  }, [base, prepay, prepayType, effStrategy]);

  const pPct = base.totalPay > 0 ? (base.P / base.totalPay) * 100 : 0;
  const prepayMax = prepayType === "once" ? Math.max(100000, Math.round(base.P)) : Math.max(50000, Math.round(base.emi * 3));

  return (
    <div style={S.card}>
      <div style={S.cardTitleRow}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Landmark size={18} color="#C2536B" />
          <div><div style={S.cardTitle}>EMI calculator</div><div style={S.cardSub}>Loan / mortgage monthly payment</div></div>
        </div>
      </div>

      <Field label="Loan amount" value={principal} set={setPrincipal} min={50000} max={50000000} step={50000} suffix={cur.symbol} />
      <Field label="Interest rate (p.a.)" value={rate} set={setRate} min={1} max={24} step={0.1} suffix="%" />
      <Field label="Tenure" value={years} set={setYears} min={1} max={30} step={1} suffix="yrs" />

      <div style={S.resultHero}>
        <div style={S.resultLabel}>Monthly EMI</div>
        <div style={{ ...S.resultVal, color: "#C2536B" }}>{money(base.emi)}</div>
      </div>

      {/* principal vs interest split */}
      <div style={S.emiSplitTrack}>
        <div style={{ width: `${pPct}%`, background: "#5B7C99", height: "100%" }} />
        <div style={{ width: `${100 - pPct}%`, background: "#C2536B", height: "100%" }} />
      </div>
      <div style={S.splitRow}>
        <div style={S.splitItem}><span style={{ ...S.splitV, color: "#5B7C99" }}>{money(base.P)}</span><span style={S.splitL}>Principal</span></div>
        <div style={S.splitItem}><span style={{ ...S.splitV, color: "#C2536B" }}>{money(base.totalInterest)}</span><span style={S.splitL}>Total interest</span></div>
        <div style={S.splitItem}><span style={S.splitV}>{money(base.totalPay)}</span><span style={S.splitL}>Total payable</span></div>
      </div>

      {/* ── Prepayment planner ── */}
      <div style={S.subDivider} />
      <div style={S.subTitle}>Prepayment planner</div>
      <div style={S.cardSub}>See what an extra payment does to your loan.</div>

      <div style={{ marginTop: 14 }}>
        <Field label="Prepayment amount" value={prepay} set={setPrepay} min={0} max={prepayMax} step={prepayType === "once" ? 25000 : 1000} suffix={cur.symbol} />
      </div>

      <div style={S.segGroup}>
        <span style={S.segLbl}>Type</span>
        <div style={S.segRow}>
          <Seg label="One-time" on={prepayType === "once"} onClick={() => setPrepayType("once")} />
          <Seg label="Every month" on={prepayType === "monthly"} onClick={() => setPrepayType("monthly")} />
        </div>
      </div>

      <div style={S.segGroup}>
        <span style={S.segLbl}>Strategy</span>
        <div style={S.segRow}>
          <Seg label="Reduce tenure" on={effStrategy === "tenure"} onClick={() => setStrategy("tenure")} />
          <Seg label="Reduce EMI" on={effStrategy === "emi"} disabled={prepayType === "monthly"} onClick={() => setStrategy("emi")} />
        </div>
      </div>

      {prepayType === "monthly" && (
        <div style={S.note}>An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead.</div>
      )}

      {result ? (
        <div style={S.cmpCard}>
          <div style={S.cmpRow}>
            <span style={S.cmpLbl}>New EMI</span>
            <span style={S.cmpVal}>{money(result.newEMI)}{result.newEMI < base.emi - 1 && <span style={S.cmpWas}> was {money(base.emi)}</span>}</span>
          </div>
          <div style={S.cmpRow}>
            <span style={S.cmpLbl}>New tenure</span>
            <span style={S.cmpVal}>{ymLabel(result.newMonths)} <span style={S.cmpWas}>· paid off {finishLabel(result.newMonths)}</span></span>
          </div>
          <div style={S.cmpRow}>
            <span style={S.cmpLbl}>Total interest</span>
            <span style={S.cmpVal}>{money(result.newInterest)}</span>
          </div>
          <div style={S.cmpRow}>
            <span style={S.cmpLbl}>Total payable</span>
            <span style={S.cmpVal}>{money(result.totalPaid)}</span>
          </div>
          <div style={S.saveRow}>
            You save {money(result.interestSaved)} in interest
            {result.monthsSaved > 0 ? ` · ${ymLabel(result.monthsSaved)} sooner` : ""}
          </div>
        </div>
      ) : (
        <div style={S.muted}>Enter a prepayment amount to see the impact.</div>
      )}
    </div>
  );
}

function Seg({ label, on, onClick, disabled }) {
  return (
    <button onClick={disabled ? undefined : onClick} disabled={disabled}
      style={{ ...S.seg, ...(on ? S.segOn : {}), ...(disabled ? S.segDisabled : {}) }}>
      {label}
    </button>
  );
}

/* ───────────────────────── styles ───────────────────────── */

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 20px 48px", color: "var(--text)", boxSizing: "border-box", maxWidth: 760, margin: "0 auto" },
  head: { marginBottom: 16 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },

  tabs: { display: "flex", gap: 7, marginBottom: 18, flexWrap: "wrap" },
  tab: { display: "flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "8px 14px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  tabOn: { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" },

  presetRow: { display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 14 },
  preset: { border: "1px solid var(--border)", background: "var(--surface)", padding: "6px 12px", borderRadius: 18, fontSize: 12, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit" },
  presetOn: { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" },

  sumGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 16 },
  sumCard: { background: "var(--surface)", borderRadius: 14, padding: "14px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)" },
  sumCardWide: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, padding: "16px 14px" },
  sumIcon: { width: 30, height: 30, borderRadius: 9, display: "grid", placeItems: "center", marginBottom: 8 },
  sumIconWide: { width: 48, height: 48, borderRadius: 12, display: "grid", placeItems: "center", flexShrink: 0 },
  sumWideText: { textAlign: "center" },
  sumLabel: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600 },
  sumVal: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginTop: 2, letterSpacing: "-0.01em", wordBreak: "break-word" },
  sumSub: { fontSize: 10.5, color: "var(--text-3)", fontWeight: 600, marginTop: 3 },

  card: { background: "var(--surface)", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)", marginBottom: 16 },
  cardTitleRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, gap: 10 },
  cardTitle: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  cardSub: { fontSize: 11.5, color: "var(--text-3)", marginTop: 2 },
  cardTotal: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", whiteSpace: "nowrap" },
  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "14px 0" },

  twoCol: { display: "grid", gridTemplateColumns: "1fr", gap: 0 },

  barList: { display: "flex", flexDirection: "column", gap: 12 },
  barTop: { display: "flex", alignItems: "center", gap: 8, marginBottom: 5 },
  dot: { width: 10, height: 10, borderRadius: 3, flexShrink: 0 },
  barName: { fontSize: 13, fontWeight: 600, flex: 1 },
  barPct: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600 },
  barAmt: { fontSize: 13, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", minWidth: 70, textAlign: "right" },
  barTrack: { height: 8, background: "var(--surface-2)", borderRadius: 4, overflow: "hidden" },
  bar: { height: "100%", borderRadius: 4, transition: "width 0.3s", minWidth: 3 },

  pieWrap: { display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" },
  pieChart: { position: "relative", width: 132, height: 132, flexShrink: 0, margin: "0 auto" },
  pieSvg: { position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" },
  pieHole: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 80, height: 80, borderRadius: "50%", background: "var(--surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transition: "transform 0.15s, box-shadow 0.15s", pointerEvents: "none", textAlign: "center", padding: 4, boxSizing: "border-box" },
  pieHoleVal: { fontSize: 15, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  pieHoleLbl: { fontSize: 10, color: "var(--text-3)", fontWeight: 600 },
  pieLegend: { flex: 1, minWidth: 160, display: "flex", flexDirection: "column", gap: 8 },
  legendRow: { display: "flex", alignItems: "center", gap: 8, borderRadius: 8, padding: "3px 5px", margin: "-3px -5px", cursor: "default", transition: "background 0.15s" },
  legendRowOn: { background: "var(--surface-2)" },
  legendName: { flex: 1, fontSize: 12.5, fontWeight: 600, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  legendPct: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600, width: 34, textAlign: "right" },
  legendAmt: { fontSize: 12.5, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", minWidth: 64, textAlign: "right" },
  investNote: { display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, color: "var(--text-3)", marginBottom: 14, marginTop: -4 },

  healthScore: { fontSize: 32, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", lineHeight: 1 },
  healthStatus: { fontSize: 12.5, fontWeight: 700, marginTop: 2 },
  gaugeTrack: { height: 10, background: "var(--surface-2)", borderRadius: 6, overflow: "hidden", marginBottom: 14 },
  gaugeFill: { height: "100%", borderRadius: 6, transition: "width 0.4s" },
  healthStats: { display: "flex", gap: 24, marginBottom: 12 },
  healthStat: { display: "flex", flexDirection: "column" },
  healthStatV: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  healthStatL: { fontSize: 11, color: "var(--text-3)", fontWeight: 600 },

  forecastWrap: { marginTop: 4, paddingTop: 14, borderTop: "1px solid var(--border)" },
  forecastHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, flexWrap: "wrap", marginBottom: 14 },
  forecastInputs: { display: "flex", gap: 8, flexWrap: "wrap" },
  forecastTitle: { fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  rateWrap: { display: "inline-flex", alignItems: "center", gap: 4, border: "1px solid var(--border)", borderRadius: 9, padding: "5px 10px", background: "var(--surface-2)" },
  rateInput: { border: "none", background: "none", outline: "none", width: 52, fontSize: 14, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", color: "var(--text)", textAlign: "right" },
  rateUnit: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600 },
  forecastBars: { display: "flex", alignItems: "stretch", gap: 8 },
  fBarCol: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, minWidth: 0 },
  fBarVal: { fontSize: 10.5, fontWeight: 700, color: "var(--text-2)", whiteSpace: "nowrap" },
  fBarTrack: { width: "100%", maxWidth: 44, height: 110, display: "flex", alignItems: "flex-end" },
  fBar: { width: "100%", background: "#3A7CA5", borderRadius: "6px 6px 2px 2px", transition: "height 0.35s ease" },
  fBarLbl: { fontSize: 10.5, fontWeight: 700, color: "var(--text-3)" },
  forecastNote: { fontSize: 11.5, color: "var(--text-3)", marginTop: 12, textAlign: "center" },
  tip: { fontSize: 12.5, lineHeight: 1.5, padding: "10px 12px", borderRadius: 10, border: "1px solid", fontWeight: 500 },

  kindToggle: { display: "flex", gap: 8, marginBottom: 12 },
  kindBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 },
  input: { border: "1px solid var(--border)", borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none", width: "100%", boxSizing: "border-box" },
  addBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", marginTop: 10, border: "none", color: "#fff", padding: "11px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  invAddBtn: { display: "flex", alignItems: "center", gap: 5, border: "none", background: "var(--accent-strong)", color: "#fff", padding: "7px 13px", borderRadius: 9, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 },
  invRow: { display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--border)" },
  invPct: { fontSize: 11, fontWeight: 700, marginTop: 1 },

  overlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.5)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  modal: { background: "var(--surface)", borderRadius: 16, padding: "20px 20px 18px", width: "100%", maxWidth: 440, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 12px 48px rgba(0,0,0,0.22)", boxSizing: "border-box" },
  modalHead: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  modalTitle: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  iconBtnPlain: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  label: { display: "block", fontSize: 11.5, fontWeight: 700, color: "var(--text-2)", margin: "10px 0 5px", textTransform: "uppercase", letterSpacing: "0.04em" },
  fixedHint: { fontSize: 11.5, color: "var(--text-3)", lineHeight: 1.5, marginTop: 10, marginBottom: 0 },
  modalActions: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 },
  cancelBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "#4C9A6B", color: "#fff", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  dateHead: { fontSize: 11, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 },
  txnRow: { display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--border)" },
  txnDot: { width: 9, height: 9, borderRadius: "50%", flexShrink: 0 },
  txnCat: { fontSize: 13.5, fontWeight: 600 },
  txnNote: { fontSize: 11.5, color: "var(--text-3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  txnAmt: { fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", whiteSpace: "nowrap" },
  delBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", flexShrink: 0 },
  editTxn: { background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 12, padding: 12, margin: "6px 0" },
  editCancel: { display: "flex", alignItems: "center", justifyContent: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "10px 14px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  field: { marginBottom: 16 },
  fieldTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  fieldLabel: { fontSize: 13, fontWeight: 600, color: "var(--text-2)" },
  fieldInputWrap: { display: "flex", alignItems: "center", gap: 4, border: "1px solid var(--border)", borderRadius: 8, padding: "5px 10px", background: "var(--surface-2)" },
  fieldInput: { border: "none", background: "none", outline: "none", width: 90, fontSize: 14, fontWeight: 700, fontFamily: "inherit", color: "var(--text)", textAlign: "right" },
  fieldSuffix: { fontSize: 12, color: "var(--text-3)", fontWeight: 600 },
  range: { width: "100%", accentColor: "var(--accent)", cursor: "pointer" },

  resultHero: { textAlign: "center", padding: "14px 0 6px" },
  resultLabel: { fontSize: 12, color: "var(--text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" },
  resultVal: { fontSize: 34, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", letterSpacing: "-0.02em", marginTop: 2, wordBreak: "break-word" },
  splitRow: { display: "flex", gap: 10, marginTop: 10 },
  splitItem: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", background: "var(--surface-2)", borderRadius: 10, padding: "10px 6px" },
  splitV: { fontSize: 14.5, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", wordBreak: "break-word" },
  splitL: { fontSize: 11, color: "var(--text-3)", fontWeight: 600, marginTop: 2 },

  chartWrap: { marginTop: 18 },
  chartBars: { display: "flex", alignItems: "flex-end", gap: 3, height: 90 },
  chartCol: { flex: 1, height: "100%", display: "flex", alignItems: "flex-end" },
  chartStack: { width: "100%", background: "#9DBFD6", borderRadius: "3px 3px 0 0", minHeight: 2, position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start" },
  chartGain: { width: "100%", background: "#3E9E6B", borderRadius: "3px 3px 0 0" },
  chartAxis: { display: "flex", fontSize: 10, color: "var(--text-3)", fontWeight: 600, marginTop: 6 },
  legend: { display: "flex", gap: 16, justifyContent: "center", marginTop: 10 },
  legendItem: { display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, color: "var(--text-2)", fontWeight: 600 },
  legendDot: { width: 10, height: 10, borderRadius: 3 },

  emiSplitTrack: { display: "flex", height: 12, borderRadius: 6, overflow: "hidden", marginTop: 16, border: "1px solid var(--border)" },

  subDivider: { height: 1, background: "var(--border)", margin: "20px 0 14px" },
  subTitle: { fontSize: 15, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  segGroup: { marginBottom: 12 },
  segLbl: { fontSize: 12, fontWeight: 600, color: "var(--text-3)", display: "block", marginBottom: 6 },
  segRow: { display: "flex", gap: 8 },
  seg: { flex: 1, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px", borderRadius: 9, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  segOn: { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" },
  segDisabled: { opacity: 0.4, cursor: "not-allowed" },
  note: { fontSize: 12, lineHeight: 1.5, color: "var(--text-3)", background: "var(--surface-2)", borderRadius: 9, padding: "9px 11px", marginBottom: 12 },
  cmpCard: { background: "var(--surface-2)", borderRadius: 12, padding: "12px 14px", marginTop: 4 },
  cmpRow: { display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "6px 0", borderBottom: "1px solid var(--border)", gap: 10 },
  cmpLbl: { fontSize: 12.5, color: "var(--text-2)", fontWeight: 600 },
  cmpVal: { fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", textAlign: "right" },
  cmpWas: { fontSize: 11, color: "var(--text-3)", fontWeight: 500, fontFamily: "'Inter',system-ui,sans-serif" },
  saveRow: { marginTop: 12, background: "rgba(62,158,107,0.12)", color: "#3E9E6B", borderRadius: 9, padding: "10px 12px", fontSize: 13, fontWeight: 700, textAlign: "center" },
};
