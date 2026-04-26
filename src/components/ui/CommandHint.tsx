"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => /Mac|iPhone|iPad|iPod/.test(navigator.platform);
const getServerSnapshot = () => false;

export function CommandHint() {
  const isMac = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <button
      type="button"
      data-cursor="Open palette"
      onClick={() => {
        const evt = new KeyboardEvent("keydown", {
          key: "k",
          metaKey: true,
          ctrlKey: true,
          bubbles: true,
        });
        window.dispatchEvent(evt);
      }}
      className="hidden items-center gap-2 rounded-full border border-[var(--color-line)]/60 bg-[var(--color-elevated)]/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-fg)] md:inline-flex"
    >
      <span className="material-symbols-outlined text-[14px]">search</span>
      Search
      <kbd className="rounded border border-[var(--color-line)]/40 bg-[var(--color-bg)] px-1 py-0.5 font-mono text-[10px]">
        {isMac ? "⌘" : "Ctrl"}K
      </kbd>
    </button>
  );
}
