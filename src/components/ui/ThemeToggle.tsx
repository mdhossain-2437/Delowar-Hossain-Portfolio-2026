"use client";

import { useTheme } from "@/components/fx/ThemeProvider";

const ICON: Record<string, string> = {
  dark: "dark_mode",
  light: "light_mode",
  synthwave: "all_inclusive",
};

const NEXT_LABEL: Record<string, string> = {
  dark: "Switch to light",
  light: "Switch to synthwave",
  synthwave: "Switch to dark",
};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, cycle } = useTheme();
  return (
    <button
      type="button"
      onClick={cycle}
      data-cursor={NEXT_LABEL[theme]}
      aria-label={NEXT_LABEL[theme]}
      className={`inline-flex size-9 items-center justify-center rounded-full border border-[var(--color-line)]/60 bg-[var(--color-elevated)]/60 text-[var(--color-fg)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] ${className}`}
    >
      <span className="material-symbols-outlined text-[18px]">
        {ICON[theme]}
      </span>
    </button>
  );
}
