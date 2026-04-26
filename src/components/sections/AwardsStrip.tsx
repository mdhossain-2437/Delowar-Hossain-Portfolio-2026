import Link from "next/link";
import { awards } from "@/lib/data";

export function AwardsStrip() {
  const top = awards.slice(0, 4);
  return (
    <section id="recognition" className="border-t border-[var(--color-line-soft)] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="reveal flex items-end justify-between gap-6 pb-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Industry recognition
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight md:text-6xl">
              Awards &amp; honors.
            </h2>
          </div>
          <Link
            href="/awards"
            data-cursor="All awards"
            className="hidden text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] md:inline-flex"
          >
            All awards →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {top.map((a, i) => (
            <article
              key={a.title + a.year}
              className="reveal group relative flex flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-6 transition-colors hover:border-[var(--color-accent)]/60"
              data-delay={i * 80}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{a.year}</span>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {a.category}
                </div>
                <div className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[var(--color-fg)]">
                  {a.title}
                </div>
                <div className="mt-3 text-sm text-[var(--color-muted)]">{a.project}</div>
              </div>
              <div className="mt-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                <span className="material-symbols-outlined text-[14px]">military_tech</span>
                Recognised
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
