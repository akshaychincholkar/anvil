import { useState, useEffect } from "react";

// The hour (0–23) at which a new "day" begins across the app. With a start of
// 2 (2 AM), anything logged at 1:30 AM still counts toward the previous day —
// Habits, Journal, Expenses, Golden Book etc. all follow this.
export const DEFAULT_DAY_START_HOUR = 0;
const KEY = "anvil_day_start_hour";

export function getDayStartHour() {
  try {
    const v = parseInt(localStorage.getItem(KEY), 10);
    return isNaN(v) ? DEFAULT_DAY_START_HOUR : Math.min(23, Math.max(0, v));
  } catch { return DEFAULT_DAY_START_HOUR; }
}

// Update the app-wide day-start hour; notifies subscribers via a window event.
export function setDayStartHour(hour) {
  const h = Math.min(23, Math.max(0, Number(hour) || 0));
  try { localStorage.setItem(KEY, String(h)); } catch { /* ignore */ }
  window.dispatchEvent(new CustomEvent("anvil-day-start", { detail: h }));
  return h;
}

// React hook returning the active day-start hour, re-rendering on change.
export function useDayStartHour() {
  const [hour, setHour] = useState(getDayStartHour());
  useEffect(() => {
    const h = (e) => setHour(e.detail ?? getDayStartHour());
    window.addEventListener("anvil-day-start", h);
    return () => window.removeEventListener("anvil-day-start", h);
  }, []);
  return hour;
}

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

// The app-wide "today": the local calendar date, shifted back by the day-start
// hour. At 1 AM with a 2 AM start, this still returns yesterday's date.
export function effectiveTodayISO() {
  return iso(new Date(Date.now() - getDayStartHour() * 3600000));
}
