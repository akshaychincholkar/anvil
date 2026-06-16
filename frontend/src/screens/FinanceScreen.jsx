import { useState, useEffect, useCallback, useMemo } from "react";
import {
  TrendingUp, TrendingDown, Wallet, Plus, X, ArrowDownLeft, ArrowUpRight,
  Calculator, PiggyBank, HeartPulse, LineChart, Landmark, Check, Pencil
} from "lucide-react";
import { api } from "../api.js";
import { useCurrency, fmtMoney, fmtCompact } from "../currency.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";

const INCOME_CATS  = ["Salary", "Stocks", "Business", "Interest", "Rent", "Gift", "Other"];
const EXPENSE_CATS = ["Bills", "EMI", "Rent", "Food", "Shopping", "Transport", "Health", "Entertainment", "Education", "Other"];

const CAT_COLOR = {
  Salary: "#4C9A6B", Stocks: "#3A7CA5", Business: "#C9A227", Interest: "#8268B0", Gift: "#C2773B",
  Bills: "#C2536B", EMI: "#A23E57", Food: "#E08E45", Shopping: "#8268B0", Transport: "#3A7CA5",
  Health: "#4C9A6B", Entertainment: "#C9A227", Education: "#5B7C99", Rent: "#5B8C5A", Other: "#9A968C",
};
const catColor = (c) => CAT_COLOR[c] || "#9A968C";

const INCOME = "#3E9E6B";
const EXPENSE = "#D1556E";

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const TODAY = iso(new Date());

const PRESETS = [
  { id: "month", label: "This month" },
  { id: "last",  label: "Last month" },
  { id: "year",  label: "This year" },
  { id: "all",   label: "All time" },
];
function presetRange(id) {
  const now = new Date();
  if (id === "month") return [iso(new Date(now.getFullYear(), now.getMonth(), 1)), TODAY];
  if (id === "last")  return [iso(new Date(now.getFullYear(), now.getMonth() - 1, 1)), iso(new Date(now.getFullYear(), now.getMonth(), 0))];
  if (id === "year")  return [iso(new Date(now.getFullYear(), 0, 1)), TODAY];
  return ["0000-01-01", "9999-12-31"];
}

export default function FinanceScreen() {
  const cur = useCurrency();
  const [tab, setTab] = useState("overview");
  const [txns, setTxns] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const load = useCallback(() => api.getTxns().then((t) => { setTxns(t); setLoaded(true); }).catch(() => setLoaded(true)), []);
  useEffect(() => { load(); }, [load]);

  const money = (n) => fmtMoney(n, cur.code);

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Vault</div>
        <h1 style={S.h1}>Vault</h1>
        <div style={S.subhead}>Your money — what comes in, what goes out, and where it's headed.</div>
      </div>

      <div style={S.tabs}>
        {[["overview", "Overview", LineChart], ["money", "Money", Wallet], ["calc", "Calculators", Calculator]].map(([id, label, Icon]) => (
          <button key={id} onClick={() => setTab(id)} style={{ ...S.tab, ...(tab === id ? S.tabOn : {}) }}>
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {tab === "overview" && <Overview txns={txns} loaded={loaded} money={money} cur={cur} />}
      {tab === "money" && <MoneyTab txns={txns} reload={load} money={money} />}
      {tab === "calc" && <Calculators money={money} cur={cur} />}
    </div>
  );
}

/* ───────────────────────── Overview ───────────────────────── */

function Overview({ txns, loaded, money, cur }) {
  const [preset, setPreset] = useState("month");
  const [lo, hi] = presetRange(preset);

  const inRange = useMemo(
    () => txns.filter((t) => t.date >= lo && t.date <= hi),
    [txns, lo, hi]
  );

  const income = inRange.filter((t) => t.kind === "income");
  const expense = inRange.filter((t) => t.kind === "expense");
  const totalIn = income.reduce((n, t) => n + t.amount, 0);
  const totalOut = expense.reduce((n, t) => n + t.amount, 0);
  const net = totalIn - totalOut;

  const byCat = (list) => {
    const m = {};
    list.forEach((t) => { m[t.category] = (m[t.category] || 0) + t.amount; });
    return Object.entries(m).map(([category, amount]) => ({ category, amount })).sort((a, b) => b.amount - a.amount);
  };

  return (
    <>
      <div style={S.presetRow}>
        {PRESETS.map((p) => (
          <button key={p.id} onClick={() => setPreset(p.id)} style={{ ...S.preset, ...(preset === p.id ? S.presetOn : {}) }}>{p.label}</button>
        ))}
      </div>

      {/* Summary */}
      <div style={S.sumGrid}>
        <SumCard icon={<ArrowDownLeft size={16} />} label="Income" value={money(totalIn)} color={INCOME} />
        <SumCard icon={<ArrowUpRight size={16} />} label="Expenses" value={money(totalOut)} color={EXPENSE} />
        <SumCard icon={net >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />} label="Net savings" value={money(net)} color={net >= 0 ? INCOME : EXPENSE} />
      </div>

      {!loaded ? <div style={S.muted}>Loading…</div> : inRange.length === 0 ? (
        <div style={S.card}><div style={S.muted}>No transactions in this period. Add some under the <b>Money</b> tab.</div></div>
      ) : (
        <>
          <HealthCard totalIn={totalIn} totalOut={totalOut} />

          <div style={S.twoCol}>
            <CatChart title="Incoming" subtitle="Where your money comes from" total={totalIn} data={byCat(income)} accent={INCOME} cur={cur} />
            <CatChart title="Outgoing" subtitle="Where your money goes" total={totalOut} data={byCat(expense)} accent={EXPENSE} cur={cur} />
          </div>
        </>
      )}
    </>
  );
}

function SumCard({ icon, label, value, color }) {
  return (
    <div style={S.sumCard}>
      <div style={{ ...S.sumIcon, color, background: color + "1A" }}>{icon}</div>
      <div style={S.sumLabel}>{label}</div>
      <div style={{ ...S.sumVal, color }}>{value}</div>
    </div>
  );
}

function CatChart({ title, subtitle, total, data, accent, cur }) {
  // Build conic-gradient pie segments.
  let acc = 0;
  const segs = data.map((d) => {
    const start = total > 0 ? (acc / total) * 100 : 0;
    acc += d.amount;
    const end = total > 0 ? (acc / total) * 100 : 0;
    return { ...d, start, end, color: catColor(d.category), pct: total > 0 ? (d.amount / total) * 100 : 0 };
  });
  const gradient = segs.length
    ? `conic-gradient(${segs.map((s) => `${s.color} ${s.start}% ${s.end}%`).join(", ")})`
    : "var(--surface-2)";

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
          <div style={S.pieChart}>
            <div style={{ ...S.pieDisc, background: gradient }} />
            <div style={S.pieHole}>
              <span style={S.pieHoleVal}>{fmtCompact(total, cur.code)}</span>
              <span style={S.pieHoleLbl}>total</span>
            </div>
          </div>
          <div style={S.pieLegend}>
            {segs.map((s) => (
              <div key={s.category} style={S.legendRow}>
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

function MoneyTab({ txns, reload, money }) {
  const [kind, setKind] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Bills");
  const [date, setDate] = useState(TODAY);
  const [note, setNote] = useState("");
  const [edit, setEdit] = useState(null); // { id, kind, amount, category, date, note }

  const { deleteItem, toasts, handleUndo, handleDismiss } = useUndoableDelete(api.deleteTxn, api.restoreTxn, reload);

  const cats = kind === "income" ? INCOME_CATS : EXPENSE_CATS;
  const switchKind = (k) => { setKind(k); setCategory(k === "income" ? "Salary" : "Bills"); };

  const add = async () => {
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) return;
    await api.createTxn({ kind, category, amount: amt, note: note.trim(), date });
    setAmount(""); setNote("");
    reload();
  };

  const startEdit = (t) => setEdit({ id: t.id, kind: t.kind, amount: String(t.amount), category: t.category, date: t.date, note: t.note || "" });
  const editCats = edit?.kind === "income" ? INCOME_CATS : EXPENSE_CATS;
  const setEditKind = (k) => setEdit((e) => ({ ...e, kind: k, category: editCats.includes(e.category) ? e.category : (k === "income" ? "Salary" : "Bills") }));
  const saveEdit = async () => {
    const amt = parseFloat(edit.amount);
    if (!amt || amt <= 0) return;
    await api.updateTxn(edit.id, { kind: edit.kind, category: edit.category, amount: amt, note: edit.note.trim(), date: edit.date });
    setEdit(null);
    reload();
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
        <div style={S.cardTitle}>Add transaction</div>
        <div style={S.kindToggle}>
          <button onClick={() => switchKind("expense")} style={{ ...S.kindBtn, ...(kind === "expense" ? { background: EXPENSE, color: "#fff", borderColor: EXPENSE } : {}) }}>
            <ArrowUpRight size={15} /> Expense
          </button>
          <button onClick={() => switchKind("income")} style={{ ...S.kindBtn, ...(kind === "income" ? { background: INCOME, color: "#fff", borderColor: INCOME } : {}) }}>
            <ArrowDownLeft size={15} /> Income
          </button>
        </div>
        <div style={S.formGrid}>
          <input type="number" inputMode="decimal" placeholder="Amount" value={amount}
            onChange={(e) => setAmount(e.target.value)} onKeyDown={(e) => e.key === "Enter" && add()} style={S.input} autoFocus />
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={S.input}>
            {cats.map((c) => <option key={c}>{c}</option>)}
          </select>
          <input type="date" value={date} max={TODAY} onChange={(e) => setDate(e.target.value)} style={S.input} />
        </div>
        <input placeholder="Note (optional)" value={note} onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()} style={{ ...S.input, marginTop: 8 }} />
        <button onClick={add} style={{ ...S.addBtn, background: kind === "income" ? INCOME : EXPENSE }}>
          <Plus size={15} /> Add {kind}
        </button>
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
                      <div style={S.kindToggle}>
                        <button onClick={() => setEditKind("expense")} style={{ ...S.kindBtn, ...(edit.kind === "expense" ? { background: EXPENSE, color: "#fff", borderColor: EXPENSE } : {}) }}>
                          <ArrowUpRight size={14} /> Expense
                        </button>
                        <button onClick={() => setEditKind("income")} style={{ ...S.kindBtn, ...(edit.kind === "income" ? { background: INCOME, color: "#fff", borderColor: INCOME } : {}) }}>
                          <ArrowDownLeft size={14} /> Income
                        </button>
                      </div>
                      <div style={S.formGrid}>
                        <input type="number" inputMode="decimal" value={edit.amount} onChange={(e) => setEdit({ ...edit, amount: e.target.value })} style={S.input} />
                        <select value={edit.category} onChange={(e) => setEdit({ ...edit, category: e.target.value })} style={S.input}>
                          {editCats.map((c) => <option key={c}>{c}</option>)}
                        </select>
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
                      <button onClick={() => deleteItem(t.id, t.category)} style={S.delBtn}><X size={14} /></button>
                    </div>
                  )
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
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
  sumIcon: { width: 30, height: 30, borderRadius: 9, display: "grid", placeItems: "center", marginBottom: 8 },
  sumLabel: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600 },
  sumVal: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginTop: 2, letterSpacing: "-0.01em", wordBreak: "break-word" },

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
  pieDisc: { width: "100%", height: "100%", borderRadius: "50%" },
  pieHole: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 80, height: 80, borderRadius: "50%", background: "var(--surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  pieHoleVal: { fontSize: 15, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  pieHoleLbl: { fontSize: 10, color: "var(--text-3)", fontWeight: 600 },
  pieLegend: { flex: 1, minWidth: 160, display: "flex", flexDirection: "column", gap: 8 },
  legendRow: { display: "flex", alignItems: "center", gap: 8 },
  legendName: { flex: 1, fontSize: 12.5, fontWeight: 600, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  legendPct: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600, width: 34, textAlign: "right" },
  legendAmt: { fontSize: 12.5, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", minWidth: 64, textAlign: "right" },

  healthScore: { fontSize: 32, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", lineHeight: 1 },
  healthStatus: { fontSize: 12.5, fontWeight: 700, marginTop: 2 },
  gaugeTrack: { height: 10, background: "var(--surface-2)", borderRadius: 6, overflow: "hidden", marginBottom: 14 },
  gaugeFill: { height: "100%", borderRadius: 6, transition: "width 0.4s" },
  healthStats: { display: "flex", gap: 24, marginBottom: 12 },
  healthStat: { display: "flex", flexDirection: "column" },
  healthStatV: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  healthStatL: { fontSize: 11, color: "var(--text-3)", fontWeight: 600 },
  tip: { fontSize: 12.5, lineHeight: 1.5, padding: "10px 12px", borderRadius: 10, border: "1px solid", fontWeight: 500 },

  kindToggle: { display: "flex", gap: 8, marginBottom: 12 },
  kindBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 },
  input: { border: "1px solid var(--border)", borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none", width: "100%", boxSizing: "border-box" },
  addBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", marginTop: 10, border: "none", color: "#fff", padding: "11px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

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
