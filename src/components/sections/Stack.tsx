import { skills } from "@/lib/data";

export function Stack() {
  return (
    <section
      id="stack"
      className="relative bg-[var(--color-surface)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)] reveal">
              <span className="mr-3 text-[var(--color-accent)]">05</span>
              Stack & Intelligence
            </div>
            <h2
              className="reveal mt-6 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight md:text-5xl"
              data-delay="80"
            >
              Stack &{" "}
              <span className="text-[var(--color-accent)]">intelligence</span>.
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-[11px] uppercase tracking-[0.25em] leading-relaxed text-[var(--color-muted)] md:text-right"
            data-delay="160"
          >
            A composable toolkit refined across product cycles — chosen for
            longevity, not novelty.
          </p>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-3">
          {skills.map((s, i) => (
            <article
              key={s.title}
              className={
                "reveal group relative flex flex-col justify-between rounded-2xl border border-[var(--color-line-soft)] p-6 transition-colors duration-500 md:p-8 " +
                (s.highlight
                  ? "md:col-span-2 bg-[var(--color-card)] hover:border-[var(--color-accent)]"
                  : "bg-[var(--color-elevated)] hover:border-[var(--color-line)]")
              }
              data-delay={`${(i % 3) * 80}`}
            >
              <header className="flex items-start justify-between gap-4">
                <span className="material-symbols-outlined text-[var(--color-accent)] text-[28px]">
                  {s.icon}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {s.section}
                </span>
              </header>
              <div className="mt-12">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {s.description}
                </p>
                {s.tags ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent transition-transform duration-700 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
