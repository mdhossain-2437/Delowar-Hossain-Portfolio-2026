"use client";

import { useEffect, useState } from "react";

export function TimeBadge({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string>("--:--:--");

  useEffect(() => {
    const tick = () => {
      try {
        const t = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        setTime(t);
      } catch {
        setTime(new Date().toLocaleTimeString());
      }
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] ${className}`}
    >
      <span className="size-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
      DHA · {time}
    </span>
  );
}
