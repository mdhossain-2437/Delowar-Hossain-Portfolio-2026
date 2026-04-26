import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Marquee } from "@/components/sections/Marquee";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Engagement options for working with MD Delowar Hossain — product engineering, AI integration, and motion design.",
};

const process = [
  {
    title: "Discover",
    description:
      "We start with a 60-minute call. I read your codebase or brief beforehand and turn up with questions, not a pitch.",
  },
  {
    title: "Frame",
    description:
      "I write a short engagement doc — scope, milestones, risks. Three sides of paper, not a 40-slide deck.",
  },
  {
    title: "Build",
    description:
      "Vertical-slice delivery in 1–2 week sprints. You get a Loom every Friday and a working build every Monday.",
  },
  {
    title: "Hand-off",
    description:
      "I leave behind documentation written for the next engineer, not for the wiki. Plus 30 days of post-launch support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engagements"
        title="SERVICES"
        description="Three flavors of collaboration. All grounded in shipping fast, shipping calmly, and shipping things that actually last."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative flex flex-col rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)] p-8 transition-colors hover:border-[var(--color-accent)]"
              data-delay={`${i * 80}`}
            >
              <div className="mb-8 font-[family-name:var(--font-display)] text-xs font-bold tracking-[0.3em] text-[var(--color-accent)]">
                0{i + 1}
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {s.description}
              </p>
              <ul className="mt-8 space-y-3 border-t border-[var(--color-line-soft)] pt-6">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-sm text-[var(--color-fg)]"
                  >
                    <span className="material-symbols-outlined mt-0.5 text-[16px] text-[var(--color-accent)]">
                      check
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)] bg-[var(--color-surface)] py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
                Process
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight md:text-5xl">
                How we work.
              </h2>
              <p className="mt-6 text-sm text-[var(--color-muted)] md:text-base">
                A short loop, repeated calmly. No surprises, no theatre, no
                dropped balls.
              </p>
            </div>
            <ol className="md:col-span-8">
              {process.map((p, i) => (
                <li
                  key={p.title}
                  className="reveal grid grid-cols-12 gap-6 border-t border-[var(--color-line-soft)] py-8 first:border-t-0"
                  data-delay={`${i * 60}`}
                >
                  <div className="col-span-2 font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.25em] text-[var(--color-accent)]">
                    0{i + 1}
                  </div>
                  <div className="col-span-10">
                    <div className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                      {p.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
              Open for{" "}
              <span className="text-[var(--color-accent)]">Q3 2026</span>{" "}
              engagements.
            </h3>
            <p className="mt-6 max-w-xl text-base text-[var(--color-muted)]">
              Currently taking on two long-term partners and a small number of
              focused 4–6 week sprints. Get in touch with a one-paragraph
              brief — I&apos;ll reply within 48 hours.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <Link
              href="/contact"
              data-cursor="Brief"
              className="inline-flex items-center gap-3 rounded-md bg-[var(--color-accent)] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent-ink)] transition-colors hover:bg-white"
            >
              Send a brief
              <span className="material-symbols-outlined text-[18px]">
                arrow_outward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Marquee />
      <LetsTalk />
    </>
  );
}
