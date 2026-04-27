"use client";

import { useEffect, useState } from "react";

export function ReadingProgress({ targetSelector = "article" }: { targetSelector?: string }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.querySelector<HTMLElement>(targetSelector);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height;
      if (total <= 0) {
        setPct(1);
        return;
      }
      const scrolled = -rect.top + window.innerHeight * 0.2;
      const ratio = Math.min(1, Math.max(0, scrolled / total));
      setPct(ratio);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetSelector]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[110] h-[2px] bg-transparent">
      <div
        className="h-full bg-[var(--color-accent)] transition-[width] duration-150 ease-out"
        style={{ width: `${pct * 100}%` }}
        aria-hidden
      />
    </div>
  );
}
