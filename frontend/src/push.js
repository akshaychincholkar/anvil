// Frontend push-notification helper. Lazily loads the Firebase Web SDK from
// the CDN (so it costs nothing until the user actually opts in), asks for
// notification permission, obtains an FCM token, and registers it with the
// backend. Everything degrades gracefully if push isn't configured or the
// browser doesn't support it.
import { api } from "./api.js";

// Firebase web config — NOT secret (ships to all clients by design). Read from
// the global set in index.html so it lives in one place with the SW config.
// See docs/notifications-setup.md.
const CFG = (typeof window !== "undefined" && window.__ANVIL_FCM__) || {};
const SDK = "https://www.gstatic.com/firebasejs/10.12.2";

export function pushSupported() {
  return (
    typeof window !== "undefined" &&
    "serviceWorker" in navigator &&
    "Notification" in window &&
    "PushManager" in window
  );
}

export function pushConfigured() {
  return !!(CFG.apiKey && CFG.apiKey !== "REPLACE_ME" && CFG.vapidKey && CFG.projectId);
}

export function permissionState() {
  if (!pushSupported()) return "unsupported";
  return Notification.permission; // "default" | "granted" | "denied"
}

let _messaging = null;
async function getMessaging() {
  if (_messaging) return _messaging;
  const [{ initializeApp }, { getMessaging: gm }] = await Promise.all([
    import(/* @vite-ignore */ `${SDK}/firebase-app.js`),
    import(/* @vite-ignore */ `${SDK}/firebase-messaging.js`),
  ]);
  const app = initializeApp({
    apiKey: CFG.apiKey,
    authDomain: CFG.authDomain,
    projectId: CFG.projectId,
    messagingSenderId: CFG.messagingSenderId,
    appId: CFG.appId,
  });
  _messaging = gm(app);
  return _messaging;
}

// Ask permission, get a token, register it. Returns { ok, error? }.
export async function enablePush() {
  if (!pushSupported()) return { ok: false, error: "This browser doesn't support push notifications." };
  if (!pushConfigured()) return { ok: false, error: "Push isn't configured yet (missing Firebase config)." };
  try {
    console.log("[Push] Requesting notification permission...");
    const permission = await Notification.requestPermission();
    console.log("[Push] Permission result:", permission);
    if (permission !== "granted") return { ok: false, error: "Notification permission was not granted." };

    // The FCM SW must be registered and ready before getToken. It lives under
    // /fcm/ so it gets its own scope — the PWA shell worker (/sw.js) claims the
    // root scope, and two workers competing for "/" means whichever wins control
    // handles the push event. The PWA worker has no push handler, so pushes were
    // being silently dropped. Separate scopes let both run.
    // Devices that enabled push before the scope fix still have the old
    // root-scope FCM worker installed, which keeps fighting /sw.js for control.
    // Drop it before registering the scoped one.
    for (const reg of await navigator.serviceWorker.getRegistrations()) {
      if (reg.active?.scriptURL.endsWith("/firebase-messaging-sw.js") &&
          !reg.active.scriptURL.includes("/fcm/")) {
        console.log("[Push] Unregistering stale root-scope FCM worker");
        await reg.unregister();
      }
    }

    console.log("[Push] Registering Firebase service worker...");
    const swReg = await navigator.serviceWorker.register("/fcm/firebase-messaging-sw.js", {
      scope: "/fcm/",
    });
    console.log("[Push] SW registered:", swReg.scope);
    // Wait for THIS registration to activate — navigator.serviceWorker.ready
    // resolves for the root-scope worker, not necessarily this one.
    await navigator.serviceWorker.ready;

    const { getToken, onMessage } = await import(/* @vite-ignore */ `${SDK}/firebase-messaging.js`);
    const messaging = await getMessaging();
    console.log("[Push] Getting FCM token...");
    const token = await getToken(messaging, {
      vapidKey: CFG.vapidKey,
      serviceWorkerRegistration: swReg,
    });
    console.log("[Push] FCM token obtained:", token?.substring(0, 30) + "...");
    if (!token) return { ok: false, error: "Could not obtain a device token." };

    console.log("[Push] Registering token with backend...");
    await api.registerDevice({ token, platform: "web" });
    console.log("[Push] Token registered successfully");

    // Foreground messages (tab focused): show a notification manually, since
    // the SW's onBackgroundMessage doesn't fire while the page is visible.
    onMessage(messaging, (payload) => {
      console.log("[Push] Foreground message received:", payload);
      const { title, body } = payload.notification || {};
      if (Notification.permission === "granted" && title) {
        new Notification(title, { body: body || "", icon: "/icon-192.png" });
      }
    });

    localStorage.setItem("anvil_push_token", token);
    console.log("[Push] Push enabled successfully");
    return { ok: true, token };
  } catch (e) {
    console.error("[Push] Error enabling push:", e);
    return { ok: false, error: e?.message || "Failed to enable notifications." };
  }
}

export async function disablePush() {
  const token = localStorage.getItem("anvil_push_token");
  try {
    if (token) await api.unregisterDevice({ token });
  } catch { /* ignore */ }
  localStorage.removeItem("anvil_push_token");
  return { ok: true };
}

export function pushEnabledLocally() {
  return !!localStorage.getItem("anvil_push_token") && permissionState() === "granted";
}
