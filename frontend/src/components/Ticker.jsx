import { useState, useEffect, useRef, useMemo } from "react";
import { Megaphone } from "lucide-react";

const KEYFRAMES = `
@keyframes anvilTickFloat { 0%,100% { transform: translateY(-1.5px); } 50% { transform: translateY(1.5px); } }
@keyframes anvilTickPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.16); opacity: 0.85; } }
@keyframes anvilTickGlow  { 0%,100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 45%, transparent); } 50% { box-shadow: 0 0 0 5px color-mix(in srgb, var(--accent) 0%, transparent); } }
@keyframes anvilTickShimmer { 0% { transform: translateX(-120%); } 100% { transform: translateX(320%); } }
.anvil-tick-float { animation: anvilTickFloat 3.6s ease-in-out infinite; }
.anvil-tick-pulse { animation: anvilTickPulse 2.2s ease-in-out infinite; }
.anvil-tick-glow  { animation: anvilTickGlow 2.2s ease-in-out infinite; }
.anvil-tick-shimmer { animation: anvilTickShimmer 4.2s linear infinite; }
@media (prefers-reduced-motion: reduce) {
  .anvil-tick-float, .anvil-tick-pulse, .anvil-tick-glow, .anvil-tick-shimmer { animation: none !important; }
}
`;

// A news-style reminder banner. Each statement scrolls right→left at `speed`
// px/sec, then pauses `delay` seconds before the next one. Adorned with gentle
// floating/pulse/shimmer motion to draw the eye and motivate action.
export default function Ticker({ statements, speed = 60, delay = 3 }) {
  const items = useMemo(
    () => (statements || []).map((s) => (s || "").trim()).filter(Boolean).slice(0, 5),
    [statements]
  );
  const [idx, setIdx] = useState(0);
  const viewportRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => { setIdx(0); }, [items]);

  useEffect(() => {
    if (!items.length) return;
    const vp = viewportRef.current, text = textRef.current;
    if (!vp || !text) return;

    const cw = vp.offsetWidth;
    const tw = text.offsetWidth;
    const spd = Math.max(10, Number(speed) || 60);
    const duration = Math.max(2500, ((cw + tw) / spd) * 1000);

    const anim = text.animate(
      [{ transform: `translateX(${cw}px)` }, { transform: `translateX(${-tw}px)` }],
      { duration, easing: "linear", fill: "both" }
    );
    let timer;
    const next = () => { timer = setTimeout(() => setIdx((i) => (i + 1) % items.length), Math.max(0, Number(delay) || 0) * 1000); };
    anim.addEventListener("finish", next);
    return () => { anim.cancel(); anim.removeEventListener("finish", next); clearTimeout(timer); };
  }, [idx, items, speed, delay]);

  if (!items.length) return null;

  return (
    <div style={S.bar} aria-label="Reminders">
      <style>{KEYFRAMES}</style>
      <div className="anvil-tick-glow" style={S.icon}>
        <span className="anvil-tick-pulse" style={{ display: "grid", placeItems: "center" }}><Megaphone size={15} /></span>
      </div>
      <div ref={viewportRef} style={S.viewport}>
        <span className="anvil-tick-shimmer" style={S.shimmer} />
        <div className="anvil-tick-float" style={S.floatWrap}>
          <div ref={textRef} key={idx} style={S.text}>{items[idx % items.length]}</div>
        </div>
      </div>
    </div>
  );
}

const S = {
  bar: { display: "flex", alignItems: "center", height: 36, flexShrink: 0, overflow: "hidden", borderBottom: "1px solid var(--border)", background: "color-mix(in srgb, var(--accent) 12%, var(--surface))" },
  icon: { display: "grid", placeItems: "center", width: 42, height: "100%", flexShrink: 0, color: "#fff", background: "var(--accent)", zIndex: 2 },
  viewport: { position: "relative", flex: 1, height: "100%", overflow: "hidden", display: "flex", alignItems: "center" },
  shimmer: { position: "absolute", top: 0, bottom: 0, left: 0, width: "22%", background: "linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)", pointerEvents: "none", zIndex: 1 },
  floatWrap: { display: "inline-flex", alignItems: "center", willChange: "transform" },
  text: { whiteSpace: "nowrap", fontSize: 13.5, fontWeight: 700, color: "var(--text)", letterSpacing: "0.01em", willChange: "transform", paddingLeft: 4 },
};
