import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Marquee } from "@/components/sections/Marquee";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected works by MD Delowar Hossain — full-stack and AI-augmented digital products.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Works"
        title="WORK"
        description="A focused archive of digital products built across the seam of intelligent systems and elegant interfaces. Each piece is a study in performance, motion and clarity."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-20 md:px-10 md:pb-32">
        <div className="flex flex-col gap-2">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={p.href}
              data-cursor="View"
              className="group relative grid grid-cols-12 items-center gap-6 border-b border-[var(--color-line-soft)] py-8 transition-colors hover:bg-[var(--color-elevated)]/50"
            >
              <div className="col-span-1 font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.25em] text-[var(--color-accent)]">
                {p.index}
              </div>
              <div className="col-span-7 md:col-span-5">
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight text-[var(--color-fg)] transition-transform group-hover:translate-x-3 md:text-4xl">
                  {p.title}
                </div>
                <p className="mt-1 max-w-md text-sm text-[var(--color-muted)]">
                  {p.tagline}
                </p>
              </div>
              <div className="col-span-3 hidden flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] md:flex">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="col-span-3 text-right text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] md:col-span-2">
                {p.year}
              </div>
              <div className="col-span-1 hidden items-center justify-end md:flex">
                <span className="material-symbols-outlined text-[var(--color-accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  arrow_outward
                </span>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute right-6 top-1/2 hidden aspect-[4/3] w-72 -translate-y-1/2 overflow-hidden rounded-lg opacity-0 shadow-2xl transition-opacity duration-500 group-hover:opacity-100 lg:block"
                style={{ zIndex: 1 + (projects.length - i) }}
              >
                <Image
                  src={p.cover}
                  alt=""
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Marquee
        items={[
          "Performance-first",
          "Accessibility built-in",
          "Motion as language",
          "Edge-deployed",
          "Scoped to ship",
        ]}
      />
      <LetsTalk />
    </>
  );
}
