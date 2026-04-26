import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { LetsTalk } from "@/components/sections/LetsTalk";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <header className="relative pt-32 md:pt-40">
        <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
          <Link
            href="/work"
            data-cursor="Back"
            className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            ← Back to work
          </Link>
          <div className="mt-10 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            <span className="text-[var(--color-accent)]">{project.index}</span>
            <span>{project.year}</span>
            <span className="size-1 rounded-full bg-[var(--color-line)]" />
            <span>{project.role}</span>
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-[0.85] tracking-tighter md:text-[12vw] lg:text-[160px]">
            {project.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base text-[var(--color-muted)] md:text-lg">
            {project.tagline}
          </p>
        </div>
      </header>

      <section className="mx-auto mt-16 max-w-[var(--container-page)] px-6 md:px-10">
        <div className="reveal relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--color-line-soft)]">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-[var(--container-page)] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-10">
        <aside className="md:col-span-4">
          <div className="reveal flex flex-col gap-8 rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)] p-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Stack
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[10px] uppercase tracking-[0.25em]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Role
              </div>
              <div className="mt-2 text-sm text-[var(--color-fg)]">
                {project.role}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Year
              </div>
              <div className="mt-2 text-sm text-[var(--color-fg)]">
                {project.year}
              </div>
            </div>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line)] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.25em] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Visit live
                <span className="material-symbols-outlined text-[16px]">
                  arrow_outward
                </span>
              </a>
            ) : null}
          </div>
        </aside>

        <article className="md:col-span-8">
          <h2 className="reveal font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
            The Brief.
          </h2>
          <p className="reveal mt-6 text-base leading-relaxed text-[var(--color-muted)] md:text-[17px]" data-delay="80">
            {project.description}
          </p>

          <div className="reveal mt-12 grid grid-cols-1 gap-3 md:grid-cols-3" data-delay="120">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {h.label}
                </div>
                <div className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
                  {h.value}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-16">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
              Process.
            </h3>
            <ol className="mt-6 space-y-6">
              {[
                {
                  t: "Discovery",
                  d: "Stakeholder interviews, technical audit, and a discovery doc that reframes the brief into measurable outcomes.",
                },
                {
                  t: "Architecture",
                  d: "System diagrams, infra choices, performance budget and a motion language locked in early.",
                },
                {
                  t: "Build",
                  d: "Implementation in vertical slices. Animations and accessibility ride alongside features, never bolted on.",
                },
                {
                  t: "Refine",
                  d: "Performance pass, motion choreography, micro-state polish, then ship and instrument.",
                },
              ].map((step, i) => (
                <li
                  key={step.t}
                  className="grid grid-cols-12 gap-4 border-t border-[var(--color-line-soft)] pt-6"
                >
                  <div className="col-span-2 font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.25em] text-[var(--color-accent)]">
                    0{i + 1}
                  </div>
                  <div className="col-span-3 text-sm uppercase tracking-[0.25em] text-[var(--color-fg)]">
                    {step.t}
                  </div>
                  <div className="col-span-7 text-sm leading-relaxed text-[var(--color-muted)]">
                    {step.d}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </section>

      <section className="mx-auto mt-32 max-w-[var(--container-page)] px-6 md:px-10">
        <Link
          href={next.href}
          data-cursor={`Next: ${next.title}`}
          className="group flex items-center justify-between border-y border-[var(--color-line-soft)] py-12 transition-colors hover:bg-[var(--color-elevated)]/40"
        >
          <div>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
              Next project
            </div>
            <div className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight md:text-6xl">
              {next.title}
            </div>
          </div>
          <span className="material-symbols-outlined text-4xl text-[var(--color-accent)] transition-transform group-hover:translate-x-2">
            arrow_forward
          </span>
        </Link>
      </section>

      <LetsTalk />
    </>
  );
}
