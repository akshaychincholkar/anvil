import { useState } from "react";
import { ArrowLeft, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Tree, TREES, DEFAULT_TREE } from "./grove/trees.jsx";

const RANGES = [
  { id: "day", label: "Day" },
  { id: "week", label: "Week" },
  { id: "month", label: "Month" },
  { id: "year", label: "Year" },
];
const TAG_COLORS = ["#4C9A6B", "#3A7CA5", "#C2773B", "#8268B0", "#C2536B", "#C9A227", "#2F6B4F", "#7A5EA8"];
const fmtMin = (m) => (m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${m}m`);
const hourLabel = (h) => { const ap = h < 12 ? "am" : "pm"; const hh = h % 12 === 0 ? 12 : h % 12; return `${String(hh).padStart(2, "0")} ${ap}`; };

// nice rounded x-axis for the duration scale (minutes)
function niceAxis(maxV) {
  const step = maxV <= 60 ? 10 : maxV <= 120 ? 20 : maxV <= 300 ? 60 : 120;
  const max = Math.max(60, Math.ceil((maxV || 1) / step) * step);
  const ticks = [];
  for (let t = 0; t <= max; t += step) ticks.push(t);
  return { max, ticks };
}

// ── date helpers (local time) ────────────────────────────────────────────────
const startOfDay = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
const startOfWeek = (d) => { const x = startOfDay(d); const off = (x.getDay() + 6) % 7; x.setDate(x.getDate() - off); return x; };
const startOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
const startOfYear = (d) => new Date(d.getFullYear(), 0, 1);

function ranges(type, now) {
  if (type === "day") { const s = startOfDay(now); return { start: s, end: new Date(+s + 864e5), prev: new Date(+s - 864e5), prev2: new Date(+s - 2 * 864e5) }; }
  if (type === "week") { const s = startOfWeek(now); return { start: s, end: new Date(+s + 7 * 864e5), prev: new Date(+s - 7 * 864e5), prev2: new Date(+s - 14 * 864e5) }; }
  if (type === "month") { const s = startOfMonth(now); const y = now.getFullYear(), m = now.getMonth(); return { start: s, end: new Date(y, m + 1, 1), prev: new Date(y, m - 1, 1), prev2: new Date(y, m - 2, 1) }; }
  const y = now.getFullYear(); const s = startOfYear(now); return { start: s, end: new Date(y + 1, 0, 1), prev: new Date(y - 1, 0, 1), prev2: new Date(y - 2, 0, 1) };
}

export default function GroveStats({ sessions = [], onBack }) {
  const [range, setRange] = useState("day");
  const now = new Date();
  const { start, end, prev, prev2 } = ranges(range, now);

  const dateOf = (s) => new Date(s.started_at || s.created_at);
  const done = sessions.filter((s) => s.completed);
  const inRange = (s, a, b) => { const d = dateOf(s); return d >= a && d < b; };
  const sumMin = (a, b) => done.filter((s) => inRange(s, a, b)).reduce((n, s) => n + (s.actual_min || 0), 0);

  const cur = done.filter((s) => inRange(s, start, end));
  const totalMin = cur.reduce((n, s) => n + (s.actual_min || 0), 0);
  const prevMin = sumMin(prev, start);
  const prev2Min = sumMin(prev2, prev);
  const trees = cur.length;

  // ── focus distribution by hour of day (all 24 hours) ──
  const hours = Array(24).fill(0);
  cur.forEach((s) => { hours[dateOf(s).getHours()] += s.actual_min || 0; });
  const maxHourVal = Math.max(...hours, 0);
  const axis = niceAxis(maxHourVal);

  // ── distribution across the five pillar trees ──
  const tagMap = {};
  cur.forEach((s) => { const k = TREES[s.tree] ? s.tree : DEFAULT_TREE; tagMap[k] = (tagMap[k] || 0) + (s.actual_min || 0); });
  const tags = Object.entries(tagMap)
    .map(([key, min]) => ({ name: TREES[key].label, min, color: TREES[key].leaf }))
    .sort((a, b) => b.min - a.min);

  // ── trend ──
  const delta = prevMin > 0 ? Math.round(((totalMin - prevMin) / prevMin) * 100) : (totalMin > 0 ? 100 : 0);
  const TrendIcon = delta > 0 ? TrendingUp : delta < 0 ? TrendingDown : Minus;
  const trendColor = delta > 0 ? "#4C9A6B" : delta < 0 ? "#C2536B" : "#9A968C";
  const prevLabel = { day: "yesterday", week: "last week", month: "last month", year: "last year" }[range];
  const prev2Label = { day: "2 days ago", week: "2 weeks ago", month: "2 months ago", year: "2 years ago" }[range];

  // donut geometry
  const R = 54, SW = 22, C2 = 2 * Math.PI * R;
  let acc = 0;

  return (
    <div style={S.page}>
      <div style={S.topbar}>
        <button onClick={onBack} style={S.back}><ArrowLeft size={18} /> Grove</button>
        <h1 style={S.h1}>Insights</h1>
        <div style={{ width: 76 }} />
      </div>

      {/* Range toggle */}
      <div style={S.rangeBar}>
        {RANGES.map((r) => (
          <button key={r.id} onClick={() => setRange(r.id)}
            style={{ ...S.rangeBtn, ...(range === r.id ? S.rangeOn : {}) }}>{r.label}</button>
        ))}
      </div>

      {/* Headline totals */}
      <div style={S.headline}>
        <div style={S.bigStat}><div style={S.bigVal}>{fmtMin(totalMin)}</div><div style={S.bigLbl}>Focused this {range}</div></div>
        <div style={S.bigStat}><div style={S.bigVal}>{trees}</div><div style={S.bigLbl}>Trees</div></div>
      </div>

      {/* Forest scene */}
      <div style={S.card}>
        <div style={S.cardHead}>
          <div style={S.cardTitle}>Your forest this {range}</div>
          <div style={S.cardHint}>Each tree is a completed session — bigger means longer focus</div>
        </div>
        <ForestScene sessions={cur} />
        <div style={S.forestNumber}>{trees} {trees === 1 ? "tree" : "trees"} · {fmtMin(totalMin)} focused</div>
      </div>

      {/* 1+2: Focus distribution (minutes per hour of day) */}
      <Card title="Focus distribution" hint="Minutes focused at each time of day">
        {maxHourVal === 0 ? <Empty /> : <HourChart hours={hours} axis={axis} />}
      </Card>

      {/* 3: Pillar distribution donut */}
      <Card title="Pillar distribution" hint="How your focus splits across the five trees">
        {tags.length === 0 ? <Empty /> : (
          <div style={S.donutWrap}>
            <svg viewBox="0 0 140 140" width="150" height="150" style={{ flexShrink: 0 }}>
              {tags.map((t) => {
                const len = (t.min / (totalMin || 1)) * C2;
                const el = (
                  <circle key={t.name} cx="70" cy="70" r={R} fill="none" stroke={t.color} strokeWidth={SW}
                    strokeDasharray={`${len} ${C2 - len}`} strokeDashoffset={-acc} transform="rotate(-90 70 70)" />
                );
                acc += len;
                return el;
              })}
              <text x="70" y="66" textAnchor="middle" style={S.donutCenterTop}>{fmtMin(totalMin)}</text>
              <text x="70" y="82" textAnchor="middle" style={S.donutCenterSub}>total</text>
            </svg>
            <div style={S.legend}>
              {tags.map((t) => (
                <div key={t.name} style={S.legendRow}>
                  <span style={{ ...S.legendDot, background: t.color }} />
                  <span style={S.legendName}>{t.name}</span>
                  <span style={S.legendVal}>{fmtMin(t.min)} · {Math.round((t.min / (totalMin || 1)) * 100)}%</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* 4: Trend across the last three periods */}
      <Card title="Focus trend" hint={`This ${range} vs the previous two`}>
        <div style={S.trend3}>
          <div style={S.trendCol}><div style={S.trendVal}>{fmtMin(totalMin)}</div><div style={S.trendLbl}>This {range}</div></div>
          <div style={S.trendCol}><div style={{ ...S.trendVal, color: "#6B675E" }}>{fmtMin(prevMin)}</div><div style={S.trendLbl}>{prevLabel}</div></div>
          <div style={S.trendCol}><div style={{ ...S.trendVal, color: "#9A968C" }}>{fmtMin(prev2Min)}</div><div style={S.trendLbl}>{prev2Label}</div></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
          <div style={{ ...S.trendBadge, color: trendColor, background: trendColor + "1A" }}>
            <TrendIcon size={15} /> {delta > 0 ? "+" : ""}{delta}% vs {prevLabel}
          </div>
        </div>
        <TrendBars items={[
          { label: `This ${range}`, value: totalMin, color: "#4C9A6B" },
          { label: prevLabel, value: prevMin, color: "#C3BFB5" },
          { label: prev2Label, value: prev2Min, color: "#DAD6CC" },
        ]} />
      </Card>
    </div>
  );
}

const shortHour = (h) => (h === 0 ? "12a" : h < 12 ? `${h}a` : h === 12 ? "12p" : `${h - 12}p`);

function HourChart({ hours, axis }) {
  return (
    <div>
      <div style={S.vcPlot}>
        {/* y-axis: minutes — gridlines + labels */}
        {axis.ticks.map((t) => (
          <div key={t} style={{ ...S.vcGridRow, bottom: `${(t / axis.max) * 100}%` }}>
            <span style={S.vcYLabel}>{t}</span>
            <div style={S.vcGridLine} />
          </div>
        ))}
        {/* columns: one per hour */}
        <div style={S.vcBars}>
          {hours.map((v, h) => (
            <div key={h} style={S.vcCell} title={`${hourLabel(h)} · ${v} min`}>
              <div style={{ ...S.vcBar, height: v > 0 ? `max(3px, ${(v / axis.max) * 100}%)` : 0 }} />
            </div>
          ))}
        </div>
      </div>
      {/* x-axis: time of day */}
      <div style={S.vcXAxis}>
        {hours.map((_, h) => (
          <div key={h} style={S.vcXCell}>{h % 3 === 0 ? shortHour(h) : ""}</div>
        ))}
      </div>
      <div style={S.vcYTitle}>minutes focused, by hour of day</div>
    </div>
  );
}

function ForestScene({ sessions }) {
  if (!sessions.length) return <div style={S.sceneEmpty}>No trees yet this period. 🌱</div>;
  const MAX = 80;
  const shown = sessions.slice(0, MAX);
  const overflow = sessions.length - shown.length;
  const sizeFor = (m) => Math.round(Math.max(40, Math.min(88, 40 + (m || 0) * 0.6)));
  return (
    <div>
      <div style={S.scene}>
        {shown.map((s) => (
          <div key={s.id} style={S.sceneTree} title={`${s.label || "Focus"} · ${fmtMin(s.actual_min || s.duration_min)}`}>
            <Tree species={s.tree} progress={1} size={sizeFor(s.actual_min || s.duration_min)} />
          </div>
        ))}
      </div>
      {overflow > 0 && <div style={S.overflow}>+{overflow} more trees</div>}
    </div>
  );
}

function Card({ title, hint, children }) {
  return (
    <div style={S.card}>
      <div style={S.cardHead}>
        <div style={S.cardTitle}>{title}</div>
        {hint && <div style={S.cardHint}>{hint}</div>}
      </div>
      {children}
    </div>
  );
}

function Empty() {
  return <div style={S.empty}>No focus sessions in this period yet. 🌱</div>;
}

function TrendBars({ items }) {
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <div style={S.tbWrap}>
      {items.map((it) => (
        <div key={it.label} style={S.tbRow}>
          <div style={S.tbLbl}>{it.label}</div>
          <div style={S.tbTrack}><div style={{ ...S.tbBar, width: `${(it.value / max) * 100}%`, background: it.color }} /></div>
          <div style={S.tbVal}>{fmtMin(it.value)}</div>
        </div>
      ))}
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "#F7F6F3", minHeight: "100%", padding: "20px 16px 40px", color: "#26241F", boxSizing: "border-box", maxWidth: 720, margin: "0 auto" },
  topbar: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
  back: { display: "flex", alignItems: "center", gap: 5, border: "1px solid #E0DDD5", background: "#fff", padding: "8px 12px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  h1: { fontSize: 20, fontWeight: 700, margin: 0, fontFamily: "'Fraunces',Georgia,serif" },

  rangeBar: { display: "flex", gap: 6, background: "#fff", padding: 5, borderRadius: 12, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  rangeBtn: { flex: 1, border: "none", background: "none", padding: "9px 0", borderRadius: 8, fontSize: 13.5, fontWeight: 600, color: "#6B675E", cursor: "pointer", fontFamily: "inherit" },
  rangeOn: { background: "#26241F", color: "#fff" },

  headline: { display: "flex", gap: 12, marginBottom: 16 },
  bigStat: { flex: 1, background: "#fff", borderRadius: 14, padding: "16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  bigVal: { fontSize: 26, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", letterSpacing: "-0.02em" },
  bigLbl: { fontSize: 12, color: "#9A968C", marginTop: 3, fontWeight: 500 },

  card: { background: "#fff", borderRadius: 16, padding: "18px 18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: 16 },
  cardHead: { marginBottom: 14 },
  cardTitle: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  cardHint: { fontSize: 12, color: "#9A968C", marginTop: 2 },
  empty: { fontSize: 13, color: "#9A968C", textAlign: "center", padding: "24px 0" },

  scene: { display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "center", gap: "0 2px", padding: "14px 8px 6px", background: "linear-gradient(#FBFAF7 55%, #E9F1E5 100%)", borderRadius: 12, minHeight: 110, border: "1px solid #ECEAE3" },
  sceneTree: { lineHeight: 0 },
  sceneEmpty: { fontSize: 13, color: "#9A968C", textAlign: "center", padding: "34px 0", background: "linear-gradient(#FBFAF7 55%, #E9F1E5 100%)", borderRadius: 12, border: "1px solid #ECEAE3" },
  overflow: { fontSize: 11.5, color: "#9A968C", textAlign: "center", marginTop: 6, fontWeight: 600 },
  forestNumber: { textAlign: "center", marginTop: 12, fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", color: "#26241F" },

  vcPlot: { position: "relative", height: 180, paddingLeft: 30 },
  vcGridRow: { position: "absolute", left: 0, right: 0, display: "flex", alignItems: "center", height: 0 },
  vcYLabel: { width: 26, marginRight: 4, textAlign: "right", fontSize: 9, color: "#9A968C", fontWeight: 600, flexShrink: 0 },
  vcGridLine: { flex: 1, height: 1, background: "#EEEBE4" },
  vcBars: { position: "absolute", left: 30, right: 0, top: 0, bottom: 0, display: "flex", alignItems: "flex-end", gap: 1 },
  vcCell: { flex: 1, height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" },
  vcBar: { width: "72%", background: "#4C9A6B", borderRadius: "3px 3px 0 0", transition: "height 0.3s" },
  vcXAxis: { display: "flex", marginLeft: 30, marginTop: 4 },
  vcXCell: { flex: 1, textAlign: "center", fontSize: 8.5, color: "#9A968C", fontWeight: 600, overflow: "hidden" },
  vcYTitle: { textAlign: "center", fontSize: 9.5, color: "#9A968C", marginTop: 6, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 },

  donutWrap: { display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", justifyContent: "center" },
  donutCenterTop: { fontSize: 16, fontWeight: 800, fill: "#26241F", fontFamily: "'Fraunces',Georgia,serif" },
  donutCenterSub: { fontSize: 9, fill: "#9A968C", textTransform: "uppercase", letterSpacing: "0.08em" },
  legend: { flex: 1, minWidth: 180, display: "flex", flexDirection: "column", gap: 8 },
  legendRow: { display: "flex", alignItems: "center", gap: 8 },
  legendDot: { width: 11, height: 11, borderRadius: 3, flexShrink: 0 },
  legendName: { flex: 1, fontSize: 13, fontWeight: 600, color: "#26241F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  legendVal: { fontSize: 12, color: "#9A968C", fontWeight: 600, flexShrink: 0 },

  trend3: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12, gap: 8 },
  trendCol: { textAlign: "center", flex: 1 },
  trendVal: { fontSize: 20, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  trendLbl: { fontSize: 11, color: "#9A968C", marginTop: 2 },
  trendBadge: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 800, padding: "6px 12px", borderRadius: 20, width: "fit-content" },
  tbWrap: { display: "flex", flexDirection: "column", gap: 8 },
  tbRow: { display: "flex", alignItems: "center", gap: 8 },
  tbLbl: { width: 78, fontSize: 11, color: "#6B675E", fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  tbTrack: { flex: 1, height: 14, background: "#F2F0EA", borderRadius: 7, overflow: "hidden" },
  tbBar: { height: "100%", borderRadius: 7, transition: "width 0.3s" },
  tbVal: { width: 56, fontSize: 11, color: "#6B675E", fontWeight: 700, flexShrink: 0, textAlign: "right" },
};
