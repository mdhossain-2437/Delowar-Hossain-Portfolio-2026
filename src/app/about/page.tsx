import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Marquee } from "@/components/sections/Marquee";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { experiences, education } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About MD Delowar Hossain — full-stack developer and AI enthusiast based in Joypurhat, Bangladesh.",
};

const principles = [
  {
    title: "Quiet motion",
    description:
      "Motion that confirms intent without ever shouting. Reduced-motion respected by default.",
  },
  {
    title: "Performance as design",
    description:
      "Speed isn't a feature — it's the surface every other feature lives on.",
  },
  {
    title: "Intelligence is a craft",
    description:
      "AI capabilities are powerful, but the craft is in the constraint and the recovery path.",
  },
  {
    title: "Build for the long tail",
    description:
      "Edge cases compound. Systems should fail gracefully, not silently.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Digital Curator"
        title="ABOUT"
        description="I build at the intersection of intelligent systems and elegant interfaces — from Joypurhat, Bangladesh, to the global web."
      />

      <section className="mx-auto grid max-w-[var(--container-page)] grid-cols-1 gap-16 px-6 pb-24 md:grid-cols-12 md:px-10">
        <div className="reveal md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)]">
            <Image
              src="/images/avatar.jpg"
              alt="MD Delowar Hossain"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { l: "Based", v: "Joypurhat, BD" },
              { l: "Studies", v: "B.A. Political Science" },
              { l: "Stack", v: "Next.js · Python" },
              { l: "Focus", v: "AI-augmented UX" },
            ].map((d) => (
              <div
                key={d.l}
                className="rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-4"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {d.l}
                </div>
                <div className="mt-2 text-sm">{d.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="reveal text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Manifesto
          </div>
          <h2 className="reveal mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl" data-delay="60">
            Code is a{" "}
            <span className="text-[var(--color-accent)]">political</span> act.
          </h2>
          <div className="reveal mt-8 space-y-5 text-base leading-relaxed text-[var(--color-muted)] md:text-[17px]" data-delay="120">
            <p>
              Studying Political Science taught me to read systems — power
              flows, incentive structures, the small daily mechanics that
              shape collective behavior. Building software is the same
              practice with a faster feedback loop.
            </p>
            <p>
              I work as a full-stack engineer with a long-running interest in
              applied AI. My favorite work sits at the seam between
              deterministic backends and probabilistic models — where systems
              must be predictable about their unpredictability.
            </p>
            <p>
              I write about what I learn, ship in public, and try to make
              every interface feel a little more alive than it needs to be.
            </p>
          </div>

          <div className="reveal mt-14 grid grid-cols-1 gap-3 md:grid-cols-2" data-delay="200">
            {principles.map((p) => (
              <article
                key={p.title}
                className="rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)] p-6"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)] bg-[var(--color-surface)] py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
                Trajectory
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight md:text-4xl">
                Experience
              </h3>
            </div>
            <ol className="md:col-span-8">
              {experiences.map((e) => (
                <li
                  key={e.role}
                  className="reveal grid grid-cols-12 gap-4 border-t border-[var(--color-line-soft)] py-6 first:border-t-0"
                >
                  <div className="col-span-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {e.period}
                  </div>
                  <div className="col-span-9">
                    <div className="font-[family-name:var(--font-display)] text-xl font-bold">
                      {e.role}
                    </div>
                    <div className="mt-1 text-[12px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
                      {e.company}
                    </div>
                    <p className="mt-3 text-sm text-[var(--color-muted)]">
                      {e.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
                Foundations
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight md:text-4xl">
                Education
              </h3>
            </div>
            <ol className="md:col-span-8">
              {education.map((e) => (
                <li
                  key={e.title}
                  className="reveal grid grid-cols-12 gap-4 border-t border-[var(--color-line-soft)] py-6 first:border-t-0"
                >
                  <div className="col-span-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {e.period}
                  </div>
                  <div className="col-span-9">
                    <div className="font-[family-name:var(--font-display)] text-xl font-bold">
                      {e.title}
                    </div>
                    <div className="mt-1 text-[12px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
                      {e.institution}
                    </div>
                    <p className="mt-3 text-sm text-[var(--color-muted)]">
                      {e.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Critical Thinker",
          "Full-Stack Strategist",
          "AI Researcher",
          "Open-source contributor",
          "Curating the future",
        ]}
      />
      <LetsTalk />
    </>
  );
}
