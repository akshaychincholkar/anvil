import { useState, useEffect } from "react";

// The day-of-month that a "month" starts on for Wallet/Expenses calculations
// (e.g. salary on the 25th → set this to 25 so "this month" runs 25th–24th).
export const DEFAULT_MONTH_START_DAY = 1;
const KEY = "anvil_month_start_day";

export function getMonthStartDay() {
  try { return Number(localStorage.getItem(KEY)) || DEFAULT_MONTH_START_DAY; }
  catch { return DEFAULT_MONTH_START_DAY; }
}

// Update the app-wide month-start day; notifies subscribers via a window event.
export function setMonthStartDay(day) {
  const d = Math.min(28, Math.max(1, Number(day) || DEFAULT_MONTH_START_DAY));
  try { localStorage.setItem(KEY, String(d)); } catch { /* ignore */ }
  window.dispatchEvent(new CustomEvent("anvil-month-start", { detail: d }));
  return d;
}

// React hook returning the active month-start day, re-rendering on change.
export function useMonthStartDay() {
  const [day, setDay] = useState(getMonthStartDay());
  useEffect(() => {
    const h = (e) => setDay(e.detail || getMonthStartDay());
    window.addEventListener("anvil-month-start", h);
    return () => window.removeEventListener("anvil-month-start", h);
  }, []);
  return day;
}

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

// Given `now` and the configured start day, return the [start, end] ISO date
// bounds (inclusive) of the "current cycle month" and the previous one.
// e.g. startDay=25, today=2026-06-10 → current cycle is 2026-05-25..2026-06-24.
export function cycleRange(now, startDay, offset = 0) {
  const y = now.getFullYear(), m = now.getMonth(), d = now.getDate();
  // Which cycle does `now` fall in, relative to startDay?
  const cycleM = d >= startDay ? m : m - 1;
  const start = new Date(y, cycleM + offset, startDay);
  const end = new Date(y, cycleM + offset + 1, startDay - 1);
  return [iso(start), iso(end)];
}
