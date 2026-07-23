import { useEffect, useState } from "react";
import { pushSupported, pushConfigured, pushEnabledLocally, permissionState } from "../push.js";

export function NotificationDebug() {
  const [debug, setDebug] = useState({
    pushSupported: pushSupported(),
    pushConfigured: pushConfigured(),
    pushEnabledLocally: pushEnabledLocally(),
    permissionState: permissionState(),
    serviceWorkerReady: false,
    fcmConfig: typeof window !== "undefined" && window.__ANVIL_FCM__ ? { ...window.__ANVIL_FCM__, vapidKey: window.__ANVIL_FCM__.vapidKey.substring(0, 20) + "..." } : null,
  });

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) => {
        setDebug(d => ({
          ...d,
          serviceWorkerReady: regs.length > 0,
          serviceWorkers: regs.map(r => r.scope),
        }));
      });
    }
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "monospace", fontSize: 12, background: "#f5f5f5", borderRadius: 8 }}>
      <h3>Push Notification Debug Info</h3>
      <pre style={{ background: "#fff", padding: 10, borderRadius: 4, overflow: "auto" }}>
        {JSON.stringify(debug, null, 2)}
      </pre>
    </div>
  );
}
