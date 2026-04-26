import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { awards, awardStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description:
    "Awwwards mentions, CSS Design Awards, FWA, Product Hunt rankings and other industry recognition collected by Delowar Hossain across years of shipping.",
};

const TONE: Record<string, string> = {
  DESIGN: "text-pink-300",
  "UI/UX": "text-violet-300",
  PRODUCT: "text-amber-300",
  DEVELOPMENT: "text-[var(--color-accent)]",
  INNOVATION: "text-sky-300",
  COMMUNITY: "text-emerald-300",
  CONTENT: "text-orange-300",
};

export default function AwardsPage() {
  const groups = Array.from(new Set(awards.map((a) => a.year))).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <>
      <PageHeader
        eyebrow="Awards · Recognition"
        title="AWARDS"
        description="A growing collection of industry recognition — Awwwards, CSS Design Awards, FWA, Behance and beyond. Trophies are nice; the work and people are the point."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-12 md:px-10">
        <div className="reveal grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {awardStats.map((s, i) => (
            <div
              key={s.label}
              className="reveal flex flex-col gap-2 rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-5"
              data-delay={i * 40}
            >
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-fg)] md:text-4xl">
                {s.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        {groups.map((year) => (
          <div key={year} className="reveal mt-14 first:mt-0">
            <div className="flex items-center justify-between border-b border-[var(--color-line-soft)] pb-3">
              <h2 className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight md:text-7xl">
                {year}
              </h2>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                {awards.filter((a) => a.year === year).length} awards
              </span>
            </div>
            <ul className="mt-6 divide-y divide-[var(--color-line-soft)]">
              {awards
                .filter((a) => a.year === year)
                .map((a, i) => (
                  <li
                    key={a.title + a.project}
                    className="reveal grid grid-cols-12 gap-4 py-5 transition-colors hover:bg-[var(--color-elevated)]/20"
                    data-delay={i * 30}
                  >
                    <div className="col-span-12 text-sm text-[var(--color-fg)] md:col-span-6 md:text-lg">
                      {a.title}
                    </div>
                    <div className="col-span-7 text-sm text-[var(--color-muted)] md:col-span-4">
                      {a.project}
                    </div>
                    <div
                      className={`col-span-5 text-right text-[10px] uppercase tracking-[0.3em] md:col-span-2 ${TONE[a.category] ?? "text-[var(--color-fg)]"}`}
                    >
                      {a.category}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </section>

      <LetsTalk />
    </>
  );
}
