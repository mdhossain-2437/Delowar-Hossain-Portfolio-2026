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
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

const CHAPTERS = [
  {
    n: "01",
    label: "Context",
    field: "context" as const,
  },
  {
    n: "02",
    label: "The build",
    field: "build" as const,
  },
  {
    n: "03",
    label: "Outcome",
    field: "outcome" as const,
  },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  // Generate flexible long-form chapters using project metadata
  const chapters = {
    context:
      project.description +
      " The brief came with three constraints: ship quickly, look uncompromising, and be readable to non-technical stakeholders. Everything below is how we balanced those.",
    build:
      "The system was built around " +
      project.stack.slice(0, 4).join(", ") +
      " — a deliberately small surface area chosen for long-term maintainability. Architecture decisions favoured edge rendering, type-safe data, and a small UI primitive layer that could outlast the marketing skin.",
    outcome:
      project.highlights.length > 0
        ? "The numbers settled into a comfortable place: " +
          project.highlights
            .slice(0, 3)
            .map((h) => `${h.label.toLowerCase()} = ${h.value}`)
            .join("; ") +
          ". Beyond metrics, the team kept ownership — the codebase shipped with documentation written for the next engineer and a 30-day post-launch support window."
        : "The team kept ownership — the codebase shipped with documentation written for the next engineer and a 30-day post-launch support window.",
  };

  return (
    <>
      <header className="relative pt-32 md:pt-40">
        <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
          <Link
            href="/case-studies"
            data-cursor="Back"
            className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            ← All case studies
          </Link>
          <div className="mt-10 flex flex-wrap items-baseline gap-4 text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            <span className="text-[var(--color-accent)]">{project.index}</span>
            <span>{project.year}</span>
            <span className="size-1 rounded-full bg-[var(--color-line)]" />
            <span>{project.role}</span>
            <span className="size-1 rounded-full bg-[var(--color-line)]" />
            <span>{project.category.join(" · ")}</span>
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-[0.85] tracking-tighter md:text-[12vw] lg:text-[140px]">
            {project.title}
          </h1>
          <p className="mt-8 max-w-3xl text-base text-[var(--color-muted)] md:text-xl md:leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </header>

      <section className="mx-auto mt-16 max-w-[var(--container-page)] px-6 md:px-10">
        <div className="reveal relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line-soft)]">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
        {project.highlights.length > 0 ? (
          <div className="reveal mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-5"
              >
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-fg)] md:text-3xl">
                  {h.value}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="mx-auto mt-24 grid max-w-[var(--container-page)] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-10">
        <aside className="md:col-span-4">
          <div className="reveal sticky top-28 flex flex-col gap-8 rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/60 p-8">
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
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Category
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.category.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[var(--color-line-soft)] bg-[var(--color-bg)]/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <article className="md:col-span-8">
          <ol className="space-y-16">
            {CHAPTERS.map((c) => (
              <li key={c.n} className="reveal grid grid-cols-12 gap-6">
                <div className="col-span-2 font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.3em] text-[var(--color-accent)]">
                  {c.n}
                </div>
                <div className="col-span-10">
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
                    {c.label}.
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)] md:text-lg md:leading-[1.7]">
                    {chapters[c.field]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mx-auto mt-24 max-w-[var(--container-page)] px-6 md:px-10">
        <Link
          href={`/case-studies/${next.slug}`}
          data-cursor="Next"
          className="reveal group block overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-10 transition-colors hover:border-[var(--color-accent)]/60"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Next case study
          </div>
          <div className="mt-3 flex items-center justify-between gap-6">
            <div className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight transition-transform group-hover:translate-x-2 md:text-5xl">
              {next.title}
            </div>
            <span className="material-symbols-outlined text-[var(--color-accent)] transition-transform group-hover:translate-x-1">
              arrow_outward
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
            {next.tagline}
          </p>
        </Link>
      </section>

      <LetsTalk />
    </>
  );
}
