"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/data";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={it.q} className="reveal" data-delay={i * 30}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              data-cursor={isOpen ? "Close" : "Open"}
              className="grid w-full grid-cols-[40px_1fr_24px] items-start gap-4 py-6 text-left transition-colors hover:bg-[var(--color-elevated)]/30"
              aria-expanded={isOpen}
            >
              <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-fg)] md:text-2xl">
                {it.q}
              </span>
              <span
                className={`material-symbols-outlined transition-transform ${
                  isOpen ? "rotate-45 text-[var(--color-accent)]" : "text-[var(--color-muted)]"
                }`}
              >
                add
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <p className="grid grid-cols-[40px_1fr_24px] gap-4 pb-7 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                  <span aria-hidden />
                  <span>{it.a}</span>
                  <span aria-hidden />
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
