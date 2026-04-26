"use client";

import { useEffect, useState } from "react";

type Status = {
  label: string;
  detail: string;
  tone: "live" | "muted" | "warn";
};

function statusFor(now: Date): Status {
  // Asia/Dhaka is UTC+6. Approximate by offsetting from UTC.
  const dhakaHour = (now.getUTCHours() + 6) % 24;
  if (dhakaHour >= 23 || dhakaHour < 7) {
    return { label: "Resting", detail: "Sleep window · Asia/Dhaka", tone: "muted" };
  }
  if (dhakaHour >= 7 && dhakaHour < 9) {
    return { label: "Reading", detail: "Inbox & links · 07–09", tone: "muted" };
  }
  if (dhakaHour >= 9 && dhakaHour < 13) {
    return { label: "Coding · deep work", detail: "Do-not-disturb · 09–13", tone: "live" };
  }
  if (dhakaHour >= 13 && dhakaHour < 15) {
    return { label: "Calls", detail: "Booked · 13–15", tone: "warn" };
  }
  if (dhakaHour >= 15 && dhakaHour < 19) {
    return { label: "Building", detail: "Shipping window · 15–19", tone: "live" };
  }
  return { label: "Wrapping up", detail: "Async-only · 19–23", tone: "muted" };
}

export function LiveStatus() {
  const [s, setS] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setS(statusFor(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!s) return null;

  const dot =
    s.tone === "live"
      ? "bg-[var(--color-accent)] shadow-[0_0_0_3px_rgba(195,244,0,0.18)] animate-pulse"
      : s.tone === "warn"
        ? "bg-amber-400"
        : "bg-[var(--color-dim)]";

  return (
    <div
      title={s.detail}
      className="hidden items-center gap-2 rounded-full border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] xl:inline-flex"
    >
      <span className={`size-1.5 rounded-full ${dot}`} aria-hidden />
      {s.label}
    </div>
  );
}
