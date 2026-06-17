import { useState, useEffect, useRef, useMemo } from "react";
import { Megaphone } from "lucide-react";

// A news-style reminder banner. Each statement scrolls right→left at `speed`
// px/sec, then pauses `delay` seconds before the next one.
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
      <div style={S.icon}><Megaphone size={15} /></div>
      <div ref={viewportRef} style={S.viewport}>
        <div ref={textRef} key={idx} style={S.text}>{items[idx % items.length]}</div>
      </div>
    </div>
  );
}

const S = {
  bar: { display: "flex", alignItems: "center", height: 36, flexShrink: 0, overflow: "hidden", borderBottom: "1px solid var(--border)", background: "color-mix(in srgb, var(--accent) 12%, var(--surface))" },
  icon: { display: "grid", placeItems: "center", width: 42, height: "100%", flexShrink: 0, color: "#fff", background: "var(--accent)" },
  viewport: { position: "relative", flex: 1, height: "100%", overflow: "hidden", display: "flex", alignItems: "center" },
  text: { whiteSpace: "nowrap", fontSize: 13.5, fontWeight: 700, color: "var(--text)", letterSpacing: "0.01em", willChange: "transform", paddingLeft: 4 },
};
