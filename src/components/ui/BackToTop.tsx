"use client";

export function BackToTop() {
  return (
    <button
      type="button"
      data-cursor="Top"
      onClick={() => {
        if (typeof window === "undefined") return;
        const reduce = window.matchMedia?.(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      className="cursor-pointer text-[11px] uppercase tracking-[0.3em] text-[var(--color-dim)] transition-colors hover:text-[var(--color-accent)]"
    >
      Back to top ↑
    </button>
  );
}
