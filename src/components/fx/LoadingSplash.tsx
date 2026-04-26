"use client";

import { useEffect, useState } from "react";

export function LoadingSplash() {
  const [shown, setShown] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const total = 1300;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / total);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setShown(false), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!shown) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--color-bg)] transition-opacity duration-500"
      style={{ opacity: count >= 100 ? 0 : 1 }}
    >
      <div className="flex w-[min(86vw,520px)] flex-col items-center gap-6">
        <div className="font-[family-name:var(--font-display)] text-[28px] font-bold tracking-[0.4em] text-[var(--color-fg)]">
          DEL<span className="text-[var(--color-accent)]">O</span>WAR
        </div>
        <div className="h-px w-full origin-left bg-[var(--color-line-soft)]">
          <div
            className="h-full bg-[var(--color-accent)] transition-[width] duration-100"
            style={{ width: `${count}%` }}
          />
        </div>
        <div className="flex w-full justify-between text-[10px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
          <span>Booting · Asia/Dhaka</span>
          <span>{String(count).padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
