# Push Notifications Setup (Firebase Cloud Messaging)

Anvil can send push notifications — habit reminders, challenge deadlines, and a
morning digest — even when the app is closed. This is powered by **Firebase
Cloud Messaging (FCM)**, which is **free at any scale**.

The code is already built. You just need to create a (free) Firebase project
and paste ~7 config values into 3 places. About 15 minutes, one time.

---

## Part 1 — Create the Firebase project (free)

1. Go to <https://console.firebase.google.com> and click **Add project**.
   Name it anything (e.g. `anvil`). You can **disable Google Analytics** — not
   needed.
2. Once created, click the **web icon** (`</>`) on the project overview to
   "Add Firebase to your web app". Give it a nickname, **don't** check Firebase
   Hosting. Click Register.
3. It shows you a `firebaseConfig` object. **Copy these values** — you'll need:
   `apiKey`, `authDomain`, `projectId`, `messagingSenderId`, `appId`.
   (These are **not secrets** — they're meant to ship to browsers.)

## Part 2 — Get the Web Push (VAPID) key

1. In the Firebase console: **⚙ Project settings → Cloud Messaging** tab.
2. Under **Web configuration → Web Push certificates**, click **Generate key
   pair**. Copy the resulting **key** (starts with `B...`). This is your
   `vapidKey`.

## Part 3 — Get the service-account key (this one IS secret)

The backend needs a service account to authenticate its send requests.

1. Firebase console: **⚙ Project settings → Service accounts** tab.
2. Click **Generate new private key** → **Generate key**. A `.json` file
   downloads. **Keep this private** — it's a credential. Never commit it.

---

## Part 4 — Paste the config in (3 files)

### 4a. `frontend/index.html`

Find the `window.__ANVIL_FCM__` block near the bottom and replace the
`REPLACE_ME`s with your values from Part 1 + the `vapidKey` from Part 2:

```js
window.__ANVIL_FCM__ = {
  apiKey: "AIza...",
  authDomain: "anvil-xxxx.firebaseapp.com",
  projectId: "anvil-xxxx",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
  vapidKey: "BxxxxYourWebPushKey",
};
```

### 4b. `frontend/public/firebase-messaging-sw.js`

Replace the `REPLACE_ME`s in the `firebaseConfig` block with the **same** five
values from Part 1 (no vapidKey needed here):

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "anvil-xxxx.firebaseapp.com",
  projectId: "anvil-xxxx",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};
```

### 4c. Backend environment variables

The backend reads its config from env vars — set these wherever the backend
runs.

| Env var | Value |
|---|---|
| `FCM_PROJECT_ID` | your `projectId` (e.g. `anvil-xxxx`) |
| `FCM_SERVICE_ACCOUNT_JSON` | the **entire contents** of the Part 3 `.json` file, OR |
| `GOOGLE_APPLICATION_CREDENTIALS` | a file path to the Part 3 `.json` (use this locally) |
| `ANVIL_CRON_SECRET` | any long random string you make up (secures the cron endpoint) |

**Local dev** (`backend/.env.local`, path style):
```
FCM_PROJECT_ID=anvil-xxxx
GOOGLE_APPLICATION_CREDENTIALS=C:/secure/anvil-service-account.json
ANVIL_CRON_SECRET=pick-a-long-random-string
```

**Fly.io** (inline JSON style, since there's no file):
```bash
fly secrets set FCM_PROJECT_ID=anvil-xxxx
fly secrets set ANVIL_CRON_SECRET=pick-a-long-random-string
fly secrets set FCM_SERVICE_ACCOUNT_JSON="$(cat anvil-service-account.json)"
```

After Part 4, rebuild the frontend (`npm run build`) and restart/redeploy the
backend.

---

## Part 5 — Turn it on & test

1. Open Anvil → **Settings → Notifications**.
2. Click **Enable notifications** and allow the browser permission prompt.
3. Click **Send test notification** — you should get a push within a second.

If the test works, real notifications will start flowing (see Part 6 to make
scheduled ones actually fire).

> **Note:** On iPhone/iPad, web push only works if Anvil is **installed to the
> Home Screen** first (Share → Add to Home Screen), then opened from that icon.
> Desktop Chrome/Edge/Firefox and Android Chrome work directly in the browser.

---

## Part 6 — Schedule the reminders (external cron)

Habit reminders / deadlines / digests are computed by
`POST /api/cron/reminders`, which must be **pinged every few minutes** by an
external scheduler. (Your Fly.io machine sleeps when idle — the ping wakes it,
it sends any due notifications, then it sleeps again. Cost stays $0.)

Pick **one** free scheduler:

### Option A — cron-job.org (easiest, free)
1. Sign up at <https://cron-job.org>.
2. Create a cronjob:
   - **URL**: `https://your-anvil-domain/api/cron/reminders?key=YOUR_CRON_SECRET`
   - **Schedule**: every 5 minutes.
   - **Method**: POST.
3. Save. Done.

### Option B — GitHub Actions (free, if the repo is on GitHub)
Create `.github/workflows/reminders.yml`:
```yaml
name: Anvil reminders
on:
  schedule:
    - cron: "*/5 * * * *"   # every 5 minutes (UTC)
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - run: |
          curl -fsS -X POST \
            "https://your-anvil-domain/api/cron/reminders" \
            -H "X-Cron-Key: ${{ secrets.ANVIL_CRON_SECRET }}"
```
Add `ANVIL_CRON_SECRET` under the repo's **Settings → Secrets → Actions**.
> GitHub's scheduled runs can lag several minutes under load — fine for
> reminders, but cron-job.org is more punctual if minute-accuracy matters.

---

## What fires, and when

All times use the app timezone (`Asia/Kolkata` by default):

| Notification | When |
|---|---|
| **Habit reminder** | At each habit's `reminder_time`, once/day, only if not already logged today. Set a habit's reminder time in its edit form. |
| **Challenge deadline** | ~9:00 AM, when an active challenge is due today / tomorrow / in 2 days and still incomplete. |
| **Daily digest** | ~8:00 AM, summarizing today's Do-Now tasks + this week's weekly goal. |

Each is de-duplicated per day, so repeated cron pings never double-notify.

---

## Costs

| Item | Cost |
|---|---|
| FCM (messages, any volume) | **$0** |
| Firebase project | **$0** (Spark plan) |
| cron-job.org / GitHub Actions | **$0** |
| Fly.io (unchanged — still scales to zero) | no added cost |

## Troubleshooting

- **"Not configured yet" banner in Settings** → backend env vars (Part 4c)
  aren't set, or the frontend config still has `REPLACE_ME`.
- **Test button says 503** → backend can't see `FCM_PROJECT_ID` +
  service-account creds. Recheck Part 4c and restart the backend.
- **Permission "denied"** → the browser blocked notifications for the site;
  clear it in the browser's site settings and reload.
- **Nothing fires on schedule** → the external cron isn't hitting
  `/api/cron/reminders`, or `ANVIL_CRON_SECRET` doesn't match. Test manually:
  `curl -X POST "https://your-domain/api/cron/reminders?key=YOUR_SECRET"` — a
  healthy response looks like `{"ok":true,"users_checked":N,"sent":M}`.
