import { useState, useCallback, useRef } from "react";
import { getToken } from "../api.js";

// Stale-while-revalidate list cache: the first render shows whatever was
// cached from the last successful fetch (instant, no blank screen) while a
// fresh request runs in the background and silently replaces it once it
// lands. Falls back to an empty list + normal loading behavior the very
// first time a browser has no cache yet.
//
// Usage:
//   const { data: habits, setData: setHabits, load, loaded } = useCachedList("habits", api.getHabits);
//   useEffect(() => { load(); }, [load]);
//
// Cache key is scoped by a short hash of the auth token, so switching users
// on the same browser never shows one account's cached data to another.
function cacheKey(name) {
  const token = getToken() || "anon";
  let hash = 0;
  for (let i = 0; i < token.length; i++) hash = (hash * 31 + token.charCodeAt(i)) | 0;
  return `anvil_cache_${name}_${hash}`;
}

function readCache(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or unavailable — just skip caching, fetch still works */
  }
}

export function useCachedList(name, fetchFn) {
  const key = useRef(cacheKey(name)).current;
  const [data, setDataState] = useState(() => readCache(key) || []);
  const [loaded, setLoaded] = useState(() => readCache(key) !== null);

  const setData = useCallback((next) => {
    setDataState((prev) => {
      const value = typeof next === "function" ? next(prev) : next;
      writeCache(key, value);
      return value;
    });
  }, [key]);

  const load = useCallback(() => {
    return fetchFn()
      .then((fresh) => { setData(fresh); setLoaded(true); return fresh; })
      .catch((err) => { setLoaded(true); throw err; });
  }, [fetchFn, setData]);

  return { data, setData, load, loaded };
}
