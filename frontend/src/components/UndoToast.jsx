import { useEffect, useState } from "react";

export default function UndoToast({ toasts, onUndo, onDismiss }) {
  return (
    <div style={S.container}>
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onUndo={onUndo} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

function Toast({ toast, onUndo, onDismiss }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const start = Date.now();
    const duration = 7000;
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(pct);
      if (pct === 0) clearInterval(tick);
    }, 50);
    return () => clearInterval(tick);
  }, []);

  return (
    <div style={S.toast}>
      <div style={{ ...S.bar, width: `${progress}%` }} />
      <span style={S.msg}>{toast.label} deleted</span>
      <button style={S.undoBtn} onClick={() => onUndo(toast.id)}>Undo</button>
      <button style={S.closeBtn} onClick={() => onDismiss(toast.id)}>×</button>
    </div>
  );
}

const S = {
  container: {
    position: "fixed",
    bottom: 24,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    zIndex: 999,
    pointerEvents: "none",
  },
  toast: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "#26241F",
    color: "#fff",
    borderRadius: 10,
    padding: "12px 16px",
    fontSize: 13.5,
    fontFamily: "'Inter', system-ui, sans-serif",
    boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
    minWidth: 260,
    overflow: "hidden",
    pointerEvents: "all",
  },
  bar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 3,
    background: "#4C9A6B",
    transition: "width 0.05s linear",
    borderRadius: "0 0 0 10px",
  },
  msg: { flex: 1, fontWeight: 500 },
  undoBtn: {
    border: "1px solid rgba(255,255,255,0.3)",
    background: "none",
    color: "#4C9A6B",
    fontWeight: 700,
    fontSize: 13,
    padding: "4px 10px",
    borderRadius: 6,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  closeBtn: {
    border: "none",
    background: "none",
    color: "rgba(255,255,255,0.5)",
    cursor: "pointer",
    fontSize: 18,
    lineHeight: 1,
    padding: "0 2px",
  },
};
