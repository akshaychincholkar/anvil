import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const CSS = `
@keyframes anvilDdPop { 0% { opacity: 0; transform: translateY(-4px) scale(0.98); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
.anvil-dd-item:hover { background: var(--hover); }
`;

// Modern replacement for a native <select>. `options` is an array of strings
// or { value, label } objects; `onChange` receives the raw option value.
export default function Dropdown({ value, options, onChange, style, placeholder = "Select…" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const opts = (options || []).map((o) => (o !== null && typeof o === "object" ? o : { value: o, label: String(o) }));
  const current = opts.find((o) => String(o.value) === String(value));

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <div ref={ref} style={{ ...D.wrap, ...style }}>
      <button type="button" onClick={() => setOpen((v) => !v)}
        style={{ ...D.trigger, ...(open ? D.triggerOpen : {}) }}>
        <span style={{ ...D.triggerLbl, ...(current ? {} : { color: "var(--text-3)" }) }}>
          {current ? current.label : placeholder}
        </span>
        <ChevronDown size={14} style={{ ...D.chev, ...(open ? { transform: "rotate(180deg)" } : {}) }} />
      </button>
      {open && (
        <div style={D.menu}>
          <style>{CSS}</style>
          {opts.map((o) => {
            const sel = String(o.value) === String(value);
            return (
              <button key={String(o.value)} type="button" className="anvil-dd-item"
                onClick={() => { onChange(o.value); setOpen(false); }}
                style={{ ...D.item, ...(sel ? D.itemSel : {}) }}>
                <span style={D.itemLbl}>{o.label}</span>
                {sel && <Check size={13} style={{ flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

const D = {
  wrap: { position: "relative", minWidth: 0 },
  trigger: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, width: "100%", border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text)", borderRadius: 9, padding: "8px 11px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", textAlign: "left", transition: "border-color 0.15s ease, box-shadow 0.15s ease" },
  triggerOpen: { borderColor: "var(--accent)", boxShadow: "0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent)" },
  triggerLbl: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  chev: { color: "var(--text-3)", flexShrink: 0, transition: "transform 0.15s ease" },
  menu: { position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 400, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, boxShadow: "0 10px 32px rgba(0,0,0,0.16)", padding: 4, maxHeight: 240, overflowY: "auto", animation: "anvilDdPop 0.14s ease" },
  item: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, width: "100%", border: "none", background: "none", color: "var(--text)", borderRadius: 7, padding: "8px 10px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", textAlign: "left" },
  itemSel: { background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)", fontWeight: 700 },
  itemLbl: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
};
