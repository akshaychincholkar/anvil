/* Firebase Cloud Messaging service worker — receives push notifications when
 * the Anvil tab is closed or in the background. This is SEPARATE from the
 * app's own sw.js (which handles PWA/offline caching); FCM requires this
 * specific filename at the site root.
 *
 * The firebaseConfig below is filled from your Firebase project settings.
 * These values are NOT secrets (they ship to every web client by design) —
 * see docs/notifications-setup.md for where to get them.
 */
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// ▼▼▼ PASTE YOUR FIREBASE CONFIG HERE ▼▼▼
const firebaseConfig = {
  apiKey: "AIzaSyASkEqj9OcgUpNDcUCvsIPtUtKy4NnBGjQ",
  authDomain: "be-anvil.firebaseapp.com",
  projectId: "be-anvil",
  messagingSenderId: "776216344533",
  appId: "1:776216344533:web:3f8eb24131456a290aef5c",
};
// ▲▲▲ PASTE YOUR FIREBASE CONFIG HERE ▲▲▲

// Take control as soon as this worker installs, rather than waiting for every
// existing tab to close — otherwise the first "enable notifications" needs a
// full app restart before pushes are handled.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

if (firebaseConfig.apiKey !== "REPLACE_ME") {
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  // Background messages (tab closed/backgrounded): show the notification and
  // deep-link to the relevant screen when tapped.
  messaging.onBackgroundMessage((payload) => {
    const { title, body } = payload.notification || {};
    const link = (payload.fcmOptions && payload.fcmOptions.link) || "/";
    self.registration.showNotification(title || "Anvil", {
      body: body || "",
      icon: "/icon-192.png",
      badge: "/icon-192.png",
      data: { link },
    });
  });

  // Safety net: onBackgroundMessage only fires for payloads Firebase recognises
  // and swallows the event either way. A raw push listener guarantees something
  // is shown — showNotification is mandatory on Android, which kills workers
  // that receive a push and display nothing.
  self.addEventListener("push", (event) => {
    let payload = {};
    try { payload = event.data ? event.data.json() : {}; } catch (_) { /* non-JSON push */ }
    const n = payload.notification || {};
    if (!n.title && !n.body) return; // Firebase already handled it
    event.waitUntil(
      self.registration.getNotifications().then((shown) => {
        // onBackgroundMessage may have displayed this already — don't double up.
        if (shown.some((x) => x.title === n.title)) return;
        return self.registration.showNotification(n.title || "Anvil", {
          body: n.body || "",
          icon: "/icon-192.png",
          badge: "/icon-192.png",
          data: { link: (payload.fcmOptions && payload.fcmOptions.link) || "/" },
        });
      })
    );
  });

  self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    const link = (event.notification.data && event.notification.data.link) || "/";
    event.waitUntil(
      clients.matchAll({ type: "window", includeUncontrolled: true }).then((wins) => {
        for (const w of wins) {
          if (w.url.includes(link) && "focus" in w) return w.focus();
        }
        return clients.openWindow ? clients.openWindow(link) : null;
      })
    );
  });
}
