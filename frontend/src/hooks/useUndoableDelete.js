import { useState, useRef, useCallback } from "react";

const UNDO_MS = 7000;

/**
 * Provides soft-delete with a 7-second undo window.
 *
 * Usage:
 *   const { deleteItem, toasts, handleUndo, handleDismiss } = useUndoableDelete(
 *     (id) => api.deleteX(id),
 *     (id) => api.restoreX(id),
 *     () => reload()
 *   );
 *
 * Render <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
 */
export function useUndoableDelete(deleteFn, restoreFn, onReload) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const deleteItem = useCallback(async (id, label = "Item") => {
    await deleteFn(id);
    onReload();

    const toastId = `${id}-${Date.now()}`;
    setToasts((prev) => [...prev, { id: toastId, itemId: id, label }]);

    timers.current[toastId] = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
      delete timers.current[toastId];
    }, UNDO_MS);
  }, [deleteFn, onReload]);

  const handleUndo = useCallback(async (toastId) => {
    const toast = toasts.find((t) => t.id === toastId);
    if (!toast) return;
    clearTimeout(timers.current[toastId]);
    delete timers.current[toastId];
    setToasts((prev) => prev.filter((t) => t.id !== toastId));
    await restoreFn(toast.itemId);
    onReload();
  }, [toasts, restoreFn, onReload]);

  const handleDismiss = useCallback((toastId) => {
    clearTimeout(timers.current[toastId]);
    delete timers.current[toastId];
    setToasts((prev) => prev.filter((t) => t.id !== toastId));
  }, []);

  return { deleteItem, toasts, handleUndo, handleDismiss };
}
