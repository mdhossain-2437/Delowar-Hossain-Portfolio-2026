"use client";

import { useSound } from "@/components/fx/SoundProvider";

export function SoundToggle({ className = "" }: { className?: string }) {
  const { enabled, toggle } = useSound();
  return (
    <button
      type="button"
      onClick={toggle}
      data-cursor={enabled ? "Mute" : "Unmute"}
      aria-pressed={enabled}
      aria-label={enabled ? "Disable UI sounds" : "Enable UI sounds"}
      className={`inline-flex size-9 items-center justify-center rounded-full border border-[var(--color-line)]/60 bg-[var(--color-elevated)]/60 text-[var(--color-fg)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] ${className}`}
    >
      <span className="material-symbols-outlined text-[18px]">
        {enabled ? "volume_up" : "volume_off"}
      </span>
    </button>
  );
}
