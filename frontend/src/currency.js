import { useState, useEffect } from "react";

// Supported currencies. `locale` drives digit grouping (e.g. Indian 1,00,000).
export const CURRENCIES = [
  { code: "INR", symbol: "₹",  locale: "en-IN", label: "Indian Rupee" },
  { code: "USD", symbol: "$",  locale: "en-US", label: "US Dollar" },
  { code: "EUR", symbol: "€",  locale: "de-DE", label: "Euro" },
  { code: "GBP", symbol: "£",  locale: "en-GB", label: "British Pound" },
  { code: "JPY", symbol: "¥",  locale: "ja-JP", label: "Japanese Yen" },
  { code: "AED", symbol: "د.إ", locale: "en-AE", label: "UAE Dirham" },
  { code: "AUD", symbol: "A$", locale: "en-AU", label: "Australian Dollar" },
  { code: "CAD", symbol: "C$", locale: "en-CA", label: "Canadian Dollar" },
  { code: "SGD", symbol: "S$", locale: "en-SG", label: "Singapore Dollar" },
];

export const DEFAULT_CURRENCY = "INR";
const KEY = "anvil_currency";

export const getCurrency = (code) =>
  CURRENCIES.find((c) => c.code === code) || CURRENCIES[0];

export function getCurrencyCode() {
  try { return localStorage.getItem(KEY) || DEFAULT_CURRENCY; }
  catch { return DEFAULT_CURRENCY; }
}

// Update the app-wide currency; notifies subscribers via a window event.
export function setCurrencyCode(code) {
  try { localStorage.setItem(KEY, code); } catch { /* ignore */ }
  window.dispatchEvent(new CustomEvent("anvil-currency", { detail: code }));
  return code;
}

// Format an amount with the active (or given) currency. Rounds to whole units.
export function fmtMoney(amount, code) {
  const c = getCurrency(code || getCurrencyCode());
  const n = Math.round(Number(amount) || 0);
  return c.symbol + n.toLocaleString(c.locale);
}

// Like fmtMoney but keeps 2 decimals — for fine-grained values (rewards).
export function fmtMoney2(amount, code) {
  const c = getCurrency(code || getCurrencyCode());
  const n = Number(amount) || 0;
  return c.symbol + n.toLocaleString(c.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Compact format for axis labels: ₹1.2L, ₹3.4Cr, $1.2K, $3.4M.
export function fmtCompact(amount, code) {
  const c = getCurrency(code || getCurrencyCode());
  const n = Math.round(Number(amount) || 0);
  const abs = Math.abs(n);
  if (c.code === "INR") {
    if (abs >= 1e7) return c.symbol + (n / 1e7).toFixed(abs >= 1e8 ? 0 : 1) + "Cr";
    if (abs >= 1e5) return c.symbol + (n / 1e5).toFixed(abs >= 1e6 ? 0 : 1) + "L";
    if (abs >= 1e3) return c.symbol + (n / 1e3).toFixed(abs >= 1e4 ? 0 : 1) + "K";
    return c.symbol + n;
  }
  if (abs >= 1e9) return c.symbol + (n / 1e9).toFixed(1) + "B";
  if (abs >= 1e6) return c.symbol + (n / 1e6).toFixed(1) + "M";
  if (abs >= 1e3) return c.symbol + (n / 1e3).toFixed(1) + "K";
  return c.symbol + n;
}

// React hook returning the active currency object, re-rendering on change.
export function useCurrency() {
  const [code, setCode] = useState(getCurrencyCode());
  useEffect(() => {
    const h = (e) => setCode(e.detail || getCurrencyCode());
    window.addEventListener("anvil-currency", h);
    return () => window.removeEventListener("anvil-currency", h);
  }, []);
  return getCurrency(code);
}
