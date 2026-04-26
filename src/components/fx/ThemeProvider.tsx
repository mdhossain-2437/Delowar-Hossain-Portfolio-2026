"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

export type ThemeName = "dark" | "light" | "synthwave";

type Ctx = {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  cycle: () => void;
};

const ThemeContext = createContext<Ctx | null>(null);

const ORDER: ThemeName[] = ["dark", "light", "synthwave"];
const STORAGE_KEY = "delowar-theme";
const EVENT = "delowar-theme-change";

const emit = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT));
  }
};

const subscribe = (cb: () => void) => {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
};

const isThemeName = (v: string | null): v is ThemeName =>
  v === "dark" || v === "light" || v === "synthwave";

const getSnapshot = (): ThemeName => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isThemeName(stored)) return stored;
  } catch {
    /* ignore */
  }
  return "dark";
};

const getServerSnapshot = (): ThemeName => "dark";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme =
      theme === "light" ? "light" : "dark";
  }, [theme]);

  const setTheme = useCallback((t: ThemeName) => {
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore */
    }
    emit();
  }, []);

  const cycle = useCallback(() => {
    const next = ORDER[(ORDER.indexOf(getSnapshot()) + 1) % ORDER.length];
    setTheme(next);
  }, [setTheme]);

  const value = useMemo(() => ({ theme, setTheme, cycle }), [theme, setTheme, cycle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
