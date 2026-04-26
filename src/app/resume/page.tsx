import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { experiences, education, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of MD Delowar Hossain — full-stack developer and AI enthusiast.",
};

const tools = [
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Node.js",
  "Python",
  "FastAPI",
  "Tailwind",
  "Framer Motion",
  "GSAP",
  "Lenis",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Firebase",
  "AWS",
  "Vercel",
  "LangChain",
  "OpenAI",
  "TensorFlow",
  "PyTorch",
  "Figma",
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title="RESUME"
        description="A condensed view of work, study and toolkit. Last updated April 2026."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-20 md:px-10">
        <div className="reveal flex flex-col gap-8 rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)] p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
              MD Delowar Hossain
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              <span>Joypurhat, Bangladesh</span>
              <span className="size-1 rounded-full bg-[var(--color-line)]" />
              <span>Web Developer & AI Enthusiast</span>
              <span className="size-1 rounded-full bg-[var(--color-line)]" />
              <span>delowarhossain.dev</span>
            </div>
          </div>
          <a
            href="/Delowar-Hossain-CV.pdf"
            className="inline-flex items-center gap-3 self-start rounded-md border border-[var(--color-accent)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]"
          >
            Download PDF
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-[var(--container-page)] grid-cols-1 gap-16 px-6 pb-24 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
          <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Toolkit
          </div>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Stack
          </h3>
          <div className="mt-8 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3">
            {skills.slice(0, 4).map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-4"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {s.section}
                </div>
                <div className="mt-2 text-sm font-medium">{s.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Experience
          </div>
          <ol className="mt-6 space-y-2">
            {experiences.map((e) => (
              <li
                key={e.role}
                className="reveal grid grid-cols-12 gap-6 border-t border-[var(--color-line-soft)] py-6 first:border-t-0"
              >
                <div className="col-span-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {e.period}
                </div>
                <div className="col-span-9">
                  <div className="font-[family-name:var(--font-display)] text-xl font-bold">
                    {e.role}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
                    {e.company}
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">
                    {e.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16 text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Education
          </div>
          <ol className="mt-6 space-y-2">
            {education.map((e) => (
              <li
                key={e.title}
                className="reveal grid grid-cols-12 gap-6 border-t border-[var(--color-line-soft)] py-6 first:border-t-0"
              >
                <div className="col-span-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {e.period}
                </div>
                <div className="col-span-9">
                  <div className="font-[family-name:var(--font-display)] text-xl font-bold">
                    {e.title}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
                    {e.institution}
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">
                    {e.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16 text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Certifications
          </div>
          <ul className="mt-6 space-y-3">
            {[
              "DeepLearning.AI · Generative AI for Developers",
              "Coursera · Machine Learning Specialization",
              "AWS · Cloud Practitioner Foundations",
              "Frontend Masters · Production-grade Next.js",
            ].map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 border-t border-[var(--color-line-soft)] py-3 text-sm text-[var(--color-fg)] first:border-t-0"
              >
                <span className="material-symbols-outlined mt-0.5 text-[18px] text-[var(--color-accent)]">
                  workspace_premium
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LetsTalk />
    </>
  );
}
