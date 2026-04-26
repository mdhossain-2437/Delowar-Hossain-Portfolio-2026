"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";

type Ctx = {
  enabled: boolean;
  toggle: () => void;
  click: () => void;
  hover: () => void;
};

const SoundContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "delowar-sound";
const EVENT = "delowar-sound-change";

const emit = () => {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(EVENT));
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

const getSnapshot = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const getServerSnapshot = () => false;

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ctxRef = useRef<AudioContext | null>(null);
  const lastHoverRef = useRef(0);

  const ensureCtx = useCallback(() => {
    if (!ctxRef.current) {
      const W = window as unknown as {
        AudioContext?: typeof AudioContext;
        webkitAudioContext?: typeof AudioContext;
      };
      const AC = W.AudioContext ?? W.webkitAudioContext;
      if (AC) ctxRef.current = new AC();
    }
    return ctxRef.current;
  }, []);

  const blip = useCallback(
    (freq: number, dur: number, vol: number) => {
      if (!enabled) return;
      const ctx = ensureCtx();
      if (!ctx) return;
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(vol, t + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + dur + 0.05);
    },
    [enabled, ensureCtx]
  );

  const click = useCallback(() => blip(880, 0.06, 0.05), [blip]);
  const hover = useCallback(() => {
    const now = performance.now();
    if (now - lastHoverRef.current < 60) return;
    lastHoverRef.current = now;
    blip(1320, 0.04, 0.025);
  }, [blip]);

  const toggle = useCallback(() => {
    const next = !getSnapshot();
    try {
      localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
      /* ignore */
    }
    emit();
  }, []);

  const value = useMemo(
    () => ({ enabled, toggle, click, hover }),
    [enabled, toggle, click, hover]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    return {
      enabled: false,
      toggle: () => {},
      click: () => {},
      hover: () => {},
    };
  }
  return ctx;
}
