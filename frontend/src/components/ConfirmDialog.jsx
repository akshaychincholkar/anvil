import { useState, useCallback, useRef } from "react";
import { AlertTriangle } from "lucide-react";

// On-brand replacement for window.confirm(). Two pieces:
//   1. useConfirm() — call `const ask = useConfirm()` in a component, then
//      `if (await ask({ title, message })) { ...do the thing... }` anywhere
//      you'd have written `if (window.confirm(...))`.
//   2. <ConfirmHost /> — render once near the root of the screen (sibling to
//      other modals); it shows whatever dialog `ask()` requested.
//
// Usage:
//   const confirm = useConfirm();
//   ...
//   const ok = await confirm({
//     title: `Delete "${name}"?`,
//     message: "This removes all of its logged history.",
//     confirmLabel: "Delete", danger: true,
//   });
//   if (!ok) return;
export function useConfirm() {
  const resolverRef = useRef(null);
  const [state, setState] = useState(null); // { title, message, confirmLabel, cancelLabel, danger }

  const ask = useCallback((opts) => {
    return new Promise((resolve) => {
      resolverRef.current = resolve;
      setState(opts);
    });
  }, []);

  const settle = useCallback((result) => {
    setState(null);
    resolverRef.current?.(result);
    resolverRef.current = null;
  }, []);

  const Host = useCallback(() => {
    if (!state) return null;
    return (
      <ConfirmDialog
        {...state}
        onConfirm={() => settle(true)}
        onCancel={() => settle(false)}
      />
    );
  }, [state, settle]);

  ask.Host = Host;
  return ask;
}

function ConfirmDialog({
  title, message, confirmLabel = "Delete", cancelLabel = "Cancel", danger = true,
  onConfirm, onCancel,
}) {
  return (
    <div style={S.overlay} onClick={onCancel}>
      <div style={S.modal} onClick={(e) => e.stopPropagation()}>
        <div style={{ ...S.iconWrap, ...(danger ? {} : S.iconWrapCalm) }}>
          <AlertTriangle size={20} color={danger ? "#C2536B" : "var(--accent)"} />
        </div>
        <div style={S.title}>{title}</div>
        {message && <div style={S.message}>{message}</div>}
        <div style={S.actions}>
          <button onClick={onCancel} style={S.cancelBtn}>{cancelLabel}</button>
          <button onClick={onConfirm} style={{ ...S.confirmBtn, ...(danger ? {} : S.confirmBtnCalm) }}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

const S = {
  overlay: {
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 500,
    display: "grid", placeItems: "center", padding: 16,
  },
  modal: {
    background: "var(--surface)", borderRadius: 14, width: "100%", maxWidth: 360,
    padding: "22px 22px 18px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    fontFamily: "'Inter',system-ui,sans-serif", textAlign: "center",
  },
  iconWrap: {
    width: 42, height: 42, borderRadius: "50%", background: "rgba(194,83,107,0.12)",
    display: "grid", placeItems: "center", margin: "0 auto 12px",
  },
  iconWrapCalm: { background: "color-mix(in srgb, var(--accent) 14%, transparent)" },
  title: { fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 6, lineHeight: 1.35 },
  message: { fontSize: 13, color: "var(--text-2)", lineHeight: 1.55, marginBottom: 18 },
  actions: { display: "flex", gap: 8, marginTop: 4 },
  cancelBtn: {
    flex: 1, height: 38, borderRadius: 9, border: "1px solid var(--border)", background: "var(--surface)",
    color: "var(--text-2)", fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
  },
  confirmBtn: {
    flex: 1, height: 38, borderRadius: 9, border: "none", background: "#C2536B",
    color: "#fff", fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
  },
  confirmBtnCalm: { background: "var(--accent)" },
};
