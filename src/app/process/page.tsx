import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Process — From Idea to Ship",
  description:
    "Six steps. No theatre. The honest, repeatable engagement model Delowar Hossain runs every project through — from discovery to ongoing support.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process · Delivery"
        title="PROCESS"
        description="Every engagement runs the same calm loop: deeply understand, plan rigorously, build in slices, ship fearlessly, support honestly."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <ol className="relative space-y-3 border-l border-[var(--color-line-soft)] pl-8 md:pl-12">
          {processSteps.map((s, i) => (
            <li
              key={s.step}
              className="reveal relative -ml-8 rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-7 transition-colors hover:border-[var(--color-accent)]/60 md:-ml-12 md:p-9"
              data-delay={i * 80}
            >
              <span className="absolute -left-[7px] top-9 size-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(195,244,0,0.5)]" />
              <div className="grid gap-6 md:grid-cols-[140px_1fr_220px]">
                <div>
                  <div className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none text-[var(--color-fg)]">
                    {s.step}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {s.duration}
                  </div>
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                    {s.description}
                  </p>
                  <div className="mt-5">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                      Deliverables
                    </div>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-[var(--color-fg)]"
                        >
                          <span className="material-symbols-outlined mt-0.5 text-[14px] text-[var(--color-accent)]">
                            check
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Tooling
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--color-line-soft)] bg-[var(--color-bg)]/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <LetsTalk />
    </>
  );
}
