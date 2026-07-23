"""Firebase Cloud Messaging (FCM HTTP v1) sender.

Uses the service-account JSON + google-auth (already a project dependency) to
mint a short-lived OAuth access token and POST to FCM. No firebase-admin SDK
and no extra pip installs required.

Configuration (env vars):
  FCM_PROJECT_ID          — your Firebase project id (e.g. "anvil-abc123")
  GOOGLE_APPLICATION_CREDENTIALS
                          — path to the service-account JSON file, OR
  FCM_SERVICE_ACCOUNT_JSON — the JSON content itself (handy on Fly.io secrets)

If neither credential is set, push sending is disabled gracefully: send()
returns a "disabled" result instead of raising, so the rest of the app runs
fine without notifications configured.
"""
import json
import os
import threading
import urllib.request
import urllib.error

_FCM_SCOPE = "https://www.googleapis.com/auth/firebase.messaging"

_lock = threading.Lock()
_creds = None  # cached google.oauth2 credentials object


def is_configured() -> bool:
    return bool(_project_id()) and _load_credentials() is not None


def _project_id():
    return os.environ.get("FCM_PROJECT_ID", "").strip().strip('"').strip("'") or None


def _load_credentials():
    """Load (and cache) service-account credentials from either an inline JSON
    env var or a file path. Returns None if nothing is configured."""
    global _creds
    with _lock:
        if _creds is not None:
            return _creds
        try:
            from google.oauth2 import service_account
        except Exception:
            return None
        info = None
        raw = os.environ.get("FCM_SERVICE_ACCOUNT_JSON", "").strip()
        if raw:
            try:
                info = json.loads(raw)
            except json.JSONDecodeError:
                return None
        else:
            # Strip surrounding quotes — a quoted path in a .env file or shell
            # can otherwise arrive with the quote characters inside the value,
            # making every file lookup on it silently fail.
            path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", "").strip().strip('"').strip("'")
            if path and os.path.isfile(path):
                with open(path, "r", encoding="utf-8") as f:
                    info = json.load(f)
        if not info:
            return None
        _creds = service_account.Credentials.from_service_account_info(
            info, scopes=[_FCM_SCOPE]
        )
        return _creds


def _access_token():
    creds = _load_credentials()
    if creds is None:
        return None
    from google.auth.transport.requests import Request as GARequest
    if not creds.valid:
        creds.refresh(GARequest())
    return creds.token


def send(token: str, title: str, body: str, data: dict | None = None,
         link: str | None = None) -> dict:
    """Send one notification to one device token.

    Returns {"ok": True} on success, or {"ok": False, "error": ...}. A 404/410
    (unregistered/invalid token) is flagged with "stale": True so the caller
    can prune that token from the DB.
    """
    project = _project_id()
    if not project or not is_configured():
        return {"ok": False, "error": "fcm_not_configured", "disabled": True}
    access_token = _access_token()
    if not access_token:
        return {"ok": False, "error": "no_access_token", "disabled": True}

    message = {
        "message": {
            "token": token,
            "notification": {"title": title, "body": body},
            "webpush": {
                "notification": {"icon": "/icon-192.png", "badge": "/icon-192.png"},
                "fcm_options": {"link": link or "/"},
            },
        }
    }
    if data:
        # FCM data values must be strings.
        message["message"]["data"] = {k: str(v) for k, v in data.items()}

    url = f"https://fcm.googleapis.com/v1/projects/{project}/messages:send"
    payload = json.dumps(message).encode("utf-8")
    req = urllib.request.Request(
        url, data=payload, method="POST",
        headers={
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            print(f"[FCM] Sent to token {token[:20]}...: {result}")
            return {"ok": True, "response": result}
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", "replace")
        stale = e.code in (404, 410) or "UNREGISTERED" in detail or "INVALID_ARGUMENT" in detail
        print(f"[FCM] HTTP {e.code} sending to {token[:20]}...: {detail}")
        return {"ok": False, "error": f"http_{e.code}", "detail": detail, "stale": stale}
    except Exception as e:  # network/timeout
        print(f"[FCM] Exception sending to {token[:20]}...: {str(e)}")
        return {"ok": False, "error": str(e)}
