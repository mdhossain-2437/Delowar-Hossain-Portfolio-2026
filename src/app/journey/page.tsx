import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";

export const metadata: Metadata = {
  title: "Journey — A timeline",
  description:
    "From a curious teenager in Joypurhat to a creative developer recognised across Awwwards, FWA and CSS Design Awards — the timeline.",
};

const eras = [
  {
    range: "2019 – 2020",
    title: "First lines of code",
    summary:
      "Picked up HTML, CSS and a browser. Built a personal homepage for a school project. Discovered Stack Overflow at 2am.",
    highlights: [
      "First static site shipped to GitHub Pages",
      "Self-taught JavaScript fundamentals",
      "First freelance order from Fiverr — $25",
    ],
    color: "var(--color-accent)",
  },
  {
    range: "2020 – 2021",
    title: "React & the freelance grind",
    summary:
      "Bridged from static sites to React. Took on landing pages and small dashboards on Upwork. Burnt out twice. Stopped underpricing.",
    highlights: [
      "Shipped 18 production landing pages",
      "First 5-figure project ($14k)",
      "Became Upwork Top Rated Plus",
    ],
    color: "var(--color-accent)",
  },
  {
    range: "2021 – 2022",
    title: "Full-stack engineering",
    summary:
      "Studied PostgreSQL deeply. Started writing TypeScript-first. Picked up Next.js the week the app router shipped.",
    highlights: [
      "Built CrackIt — first scaled product",
      "Hashnode feature on PostgreSQL performance",
      "Spoke at a Bangla devs meetup",
    ],
    color: "var(--color-accent)",
  },
  {
    range: "2022 – 2023",
    title: "AI-native interfaces",
    summary:
      "Watched the GPT-3 era turn into product reality. Started shipping retrieval-augmented systems for real clients. Reframed the whole practice around probabilistic UX.",
    highlights: [
      "Designed agentic interfaces for SaaS clients",
      "Open-sourced a small RAG starter kit",
      "First Awwwards Honorable Mention",
    ],
    color: "var(--color-accent)",
  },
  {
    range: "2023 – 2024",
    title: "Recognition era",
    summary:
      "Awwwards SOTD, CSS Design Awards Best UI, FWA Site of the Day, Product Hunt #3. Two podcast invitations. Started saying no more often.",
    highlights: [
      "10+ industry awards",
      "Shipped 8 case-study-worthy products",
      "Built the Delowar.dev v3 platform",
    ],
    color: "var(--color-accent)",
  },
  {
    range: "2025 – future",
    title: "The next chapter",
    summary:
      "Focused on agentic creative tooling, performance-first front-end, and mentoring the next wave of Bangladeshi creative developers.",
    highlights: [
      "Launching a creative dev mentorship cohort",
      "Two flagship interactive case studies in flight",
      "Reserving Q4 2026 for one residency",
    ],
    color: "var(--color-accent)",
  },
];

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journey · A timeline"
        title="JOURNEY"
        description="Six eras, five years, one obsession with the craft. The condensed version of how a kid from Joypurhat ended up shipping creative-developer work for clients on three continents."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <ol className="relative">
          <span
            aria-hidden
            className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)]/60 via-[var(--color-line-soft)] to-transparent md:left-[calc(180px+18px)]"
          />
          {eras.map((era, i) => (
            <li
              key={era.range}
              className="reveal relative grid grid-cols-1 gap-6 py-10 md:grid-cols-[180px_1fr]"
              data-delay={i * 70}
            >
              <div className="md:pr-10">
                <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                  {era.range}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Chapter · {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="relative pl-12">
                <span
                  aria-hidden
                  className="absolute left-[12px] top-1.5 size-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_4px_rgba(195,244,0,0.18)]"
                />
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase md:text-3xl">
                  {era.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                  {era.summary}
                </p>
                <ul className="mt-5 grid gap-2 md:grid-cols-3">
                  {era.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/30 p-4 text-sm text-[var(--color-fg)]"
                    >
                      <span className="text-[var(--color-accent)]">●</span>{" "}
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <LetsTalk />
    </>
  );
}
