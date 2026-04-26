import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies — Deep Dives",
  description:
    "Long-form case studies of selected work — context, constraints, the build, the trade-offs and the outcome. By Delowar Hossain.",
};

export default function CaseStudiesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies · Deep Dives"
        title="CASE STUDIES"
        description="Each project as an essay: the problem, the constraints, the build, the trade-offs and the outcome. Pick one and read the receipts."
      />
      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/case-studies/${p.slug}`}
              data-cursor="Read"
              className="reveal group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 transition-all hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-elevated)]/70"
              data-delay={i * 60}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-card)]">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white">
                  <span>Case study {p.index}</span>
                  <span>{p.year}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-tight md:text-3xl">
                  {p.title}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {p.tagline}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {p.category.slice(0, 3).map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-[var(--color-line-soft)] bg-[var(--color-bg)]/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--color-fg)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <LetsTalk />
    </>
  );
}
