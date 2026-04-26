"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="border-t border-[var(--color-line-soft)] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="reveal flex items-end justify-between gap-6 pb-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Client voices
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight md:text-6xl">
              Words from people<br />I&apos;ve shipped with.
            </h2>
          </div>
          <div className="hidden text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] md:block">
            {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </div>
        </div>

        <div className="reveal grid gap-10 lg:grid-cols-[1.4fr_1fr]" data-delay="80">
          <figure className="relative rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-8 md:p-12">
            <span className="absolute -top-6 left-8 font-[family-name:var(--font-display)] text-[140px] leading-none text-[var(--color-accent)]/40 md:text-[200px]">
              &ldquo;
            </span>
            <blockquote className="font-[family-name:var(--font-display)] text-xl leading-snug text-[var(--color-fg)] md:text-3xl">
              {t.quote}
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              <div>
                <div className="text-[var(--color-fg)]">{t.name}</div>
                <div className="mt-1">{t.role}</div>
              </div>
              <div className="text-right">
                <div className="text-[var(--color-accent)]">Project</div>
                <div className="mt-1 text-[var(--color-fg)]">{t.project}</div>
              </div>
            </figcaption>
          </figure>

          <ul className="flex flex-col gap-2">
            {testimonials.map((it, i) => (
              <li key={it.name}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  data-cursor={it.name}
                  className={
                    "group flex w-full items-center justify-between gap-4 rounded-md border px-5 py-4 text-left transition-all " +
                    (i === active
                      ? "border-[var(--color-accent)]/60 bg-[var(--color-elevated)]/60"
                      : "border-[var(--color-line-soft)] hover:border-[var(--color-line)] hover:bg-[var(--color-elevated)]/40")
                  }
                >
                  <div>
                    <div className="text-sm text-[var(--color-fg)]">{it.name}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                      {it.role}
                    </div>
                  </div>
                  <span
                    className={
                      "material-symbols-outlined text-[20px] transition-colors " +
                      (i === active
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-dim)] group-hover:text-[var(--color-fg)]")
                    }
                  >
                    arrow_outward
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
