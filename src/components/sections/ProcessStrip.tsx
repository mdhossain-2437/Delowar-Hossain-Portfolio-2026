import Link from "next/link";
import { processSteps } from "@/lib/data";

export function ProcessStrip() {
  const top = processSteps.slice(0, 3);
  return (
    <section className="border-t border-[var(--color-line-soft)] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="reveal flex items-end justify-between gap-6 pb-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              How I work
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight md:text-6xl">
              From idea to ship.
            </h2>
          </div>
          <Link
            href="/process"
            data-cursor="Full process"
            className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            Full process →
          </Link>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {top.map((s, i) => (
            <li
              key={s.step}
              className="reveal group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-7"
              data-delay={i * 80}
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Step {s.step}
              </div>
              <div className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold leading-tight text-[var(--color-fg)]">
                {s.title}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                {s.description}
              </p>
              <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--color-dim)]">
                <span>{s.duration}</span>
                <span className="material-symbols-outlined text-[16px] text-[var(--color-line)] transition-colors group-hover:text-[var(--color-accent)]">
                  arrow_outward
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
