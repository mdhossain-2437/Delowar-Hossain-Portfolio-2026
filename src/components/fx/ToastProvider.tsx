"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Toast = { id: number; text: string };
type Ctx = { toast: (text: string) => void };

const ToastContext = createContext<Ctx | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Toast[]>([]);

  const toast = useCallback((text: string) => {
    const id = Date.now() + Math.random();
    setItems((prev) => [...prev, { id, text }]);
    setTimeout(() => {
      setItems((prev) => prev.filter((i) => i.id !== id));
    }, 2400);
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-6 left-1/2 z-[110] flex -translate-x-1/2 flex-col items-center gap-2"
      >
        {items.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto rounded-full border border-[var(--color-line)]/60 bg-[var(--color-elevated)]/90 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-fg)] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            <span className="mr-2 text-[var(--color-accent)]">●</span>
            {t.text}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    return { toast: (_t: string) => void _t };
  }
  return ctx;
}
