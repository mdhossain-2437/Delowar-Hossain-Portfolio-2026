import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { identity } from "@/lib/data";

export const metadata: Metadata = {
  title: "Press Kit — Brand Assets",
  description:
    "Brand assets, biographies, headshots and approved talking points for Delowar Hossain.",
};

const assets = [
  {
    label: "Logo · Wordmark (SVG)",
    note: "Lime on dark, vector",
    file: "/Delowar-Hossain-CV.pdf",
  },
  {
    label: "Headshot · Studio (4K)",
    note: "5120 × 5120 · color-graded",
    file: "/avatar.jpg",
  },
  {
    label: "Brand color tokens",
    note: "JSON · figma · tailwind",
    file: "/Delowar-Hossain-CV.pdf",
  },
  {
    label: "Talking points · Long",
    note: "PDF · 6 pages",
    file: "/Delowar-Hossain-CV.pdf",
  },
];

const bios = [
  {
    label: "Short · 60 chars",
    body: "Creative developer building immersive AI-native interfaces.",
  },
  {
    label: "Medium · ~280 chars",
    body: `Delowar Hossain is a ${identity.roles
      .join(" · ")
      .toLowerCase()} based in ${identity.location}. He builds production-grade web platforms, AI-native interfaces and award-winning interactive experiences for clients across North America, Europe and Asia.`,
  },
  {
    label: "Long · ~700 chars",
    body: `Delowar Hossain is a Bangladeshi creative developer who designs and builds digital products at the seam between deterministic engineering and probabilistic AI. Working solo from Joypurhat with a small distributed collective, he ships full-stack platforms, motion-rich brand sites and bespoke internal tools — pairing systems thinking with the craft of high-fidelity interactive design. His work has been recognised by Awwwards, CSS Design Awards, FWA, Product Hunt and a stack of community-driven publications. He is currently focused on agentic interfaces, retrieval-augmented systems and the next generation of creative-developer tooling.`,
  },
];

const talking = [
  "How AI-native UX changes the contract between user and interface.",
  "Building a sustainable freelance practice from a non-Western timezone.",
  "Async-first delivery: protocols, deliverables, expectation-setting.",
  "Lessons from shipping 60+ creative developer projects since 2019.",
  "The case for performance budgets as a creative constraint.",
  "Why retrieval > fine-tuning for most product use cases.",
];

export default function PressKitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press kit · Brand assets"
        title="PRESS KIT"
        description="Everything you need to introduce, write about, or invite Delowar onto your platform — bundled, current, and approved for distribution."
      />

      <section className="mx-auto grid max-w-[var(--container-page)] gap-10 px-6 pb-16 md:grid-cols-2 md:px-10">
        {assets.map((a, i) => (
          <a
            key={a.label}
            href={a.file}
            download
            data-cursor="Download"
            className="reveal group relative flex items-center justify-between rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-7 transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/60"
            data-delay={i * 60}
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                Download
              </div>
              <h3 className="mt-2 text-xl font-semibold text-[var(--color-fg)] md:text-2xl">
                {a.label}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{a.note}</p>
            </div>
            <span className="material-symbols-outlined text-3xl text-[var(--color-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-accent)]">
              download
            </span>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-16 md:px-10">
        <div className="reveal mb-6 border-b border-[var(--color-line-soft)] pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            Approved bios
          </h2>
        </div>
        <div className="grid gap-3">
          {bios.map((b, i) => (
            <article
              key={b.label}
              className="reveal rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-6"
              data-delay={i * 50}
            >
              <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                {b.label}
              </div>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-fg)]">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <div className="reveal mb-6 border-b border-[var(--color-line-soft)] pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            Talking points
          </h2>
        </div>
        <ol className="grid gap-3 md:grid-cols-2">
          {talking.map((t, i) => (
            <li
              key={t}
              className="reveal flex gap-4 rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/30 p-5"
              data-delay={i * 40}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-[var(--color-fg)]">{t}</p>
            </li>
          ))}
        </ol>
        <div className="reveal mt-12 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Need something custom? <CopyEmail />
        </div>
      </section>

      <LetsTalk />
    </>
  );
}
