import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { labExperiments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lab — Interactive Experiments",
  description:
    "A creative lab where Delowar Hossain explores interactive ideas — particle systems, AI tools, generative art and other browser-based playgrounds.",
};

const STATUS_TONE: Record<string, string> = {
  LIVE: "text-[var(--color-accent)]",
  BETA: "text-amber-400",
  ARCHIVED: "text-sky-300",
};

export default function LabPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lab · Experiments"
        title="LAB"
        description="A working sandbox of interactive prototypes, browser experiments and AI tools. Some are toys. Some become production patterns. All of them push what a single browser tab can do."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <div className="reveal mb-8 grid gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] sm:grid-cols-3">
          <div className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 px-4 py-3">
            <div className="text-[var(--color-accent)]">{labExperiments.length}</div>
            <div className="mt-1">Experiments</div>
          </div>
          <div className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 px-4 py-3">
            <div className="text-[var(--color-accent)]">
              {labExperiments.filter((e) => e.status === "LIVE").length}
            </div>
            <div className="mt-1">Live demos</div>
          </div>
          <div className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 px-4 py-3">
            <div className="text-[var(--color-accent)]">∞</div>
            <div className="mt-1">Curiosity</div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {labExperiments.map((e, i) => (
            <article
              key={e.index}
              className="reveal group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-7 transition-all hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-elevated)]/70"
              data-delay={i * 60}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                <span className={STATUS_TONE[e.status] ?? ""}>● {e.status}</span>
                <span>{e.category} · {e.year}</span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold leading-tight md:text-3xl">
                {e.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {e.description}
              </p>
              <ul className="mt-6 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-[0.2em]">
                {e.metrics.map((m) => (
                  <li
                    key={m.label}
                    className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-bg)]/60 px-3 py-2 text-center"
                  >
                    <div className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent)]">
                      {m.value}
                    </div>
                    <div className="mt-0.5 text-[var(--color-muted)]">{m.label}</div>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {e.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-[var(--color-line-soft)] bg-[var(--color-bg)]/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--color-fg)]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center justify-between border-t border-[var(--color-line-soft)] pt-5 text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                <span>Experiment {e.index}</span>
                {e.status === "LIVE" ? (
                  <Link
                    href="#"
                    data-cursor="Run demo"
                    className="inline-flex items-center gap-1 text-[var(--color-accent)]"
                  >
                    Run demo →
                  </Link>
                ) : (
                  <span className="text-[var(--color-dim)]">
                    {e.status === "BETA" ? "In testing" : "Archived"}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 rounded-[var(--radius-card)] border border-dashed border-[var(--color-line)] bg-[var(--color-elevated)]/30 p-10 text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Have a wild idea?
          </div>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Let&apos;s prototype it together.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--color-muted)]">
            The lab is open for collaborations. Pitch a generative tool, a physics
            playground, an AI agent — anything that deserves to exist.
          </p>
        </div>
      </section>

      <LetsTalk />
    </>
  );
}
