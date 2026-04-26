import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sitemap — Visual Map",
  description:
    "Visual sitemap of every page on delowarhossain.dev. The whole platform at a glance.",
};

const groups = [
  {
    title: "Identity",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Now", href: "/now" },
      { label: "Uses", href: "/uses" },
    ],
  },
  {
    title: "Practice",
    items: [
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Process", href: "/process" },
      { label: "FAQ", href: "/faq" },
      { label: "Résumé", href: "/resume" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Work",
    items: [
      { label: "Work index", href: "/work" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Lab", href: "/lab" },
      { label: "Stack", href: "/stack" },
      { label: "Awards", href: "/awards" },
    ],
  },
  {
    title: "Curation",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Inspiration", href: "/inspiration" },
      { label: "Visual sitemap", href: "/map" },
    ],
  },
];

export default function MapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sitemap · Visual"
        title="MAP"
        description="Every page in the portfolio at a glance — wireframed by domain so you can navigate by intent rather than by URL."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-16 md:px-10">
        <div className="reveal grid gap-3 md:grid-cols-2">
          {groups.map((g, i) => (
            <article
              key={g.title}
              className="reveal flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-7"
              data-delay={i * 60}
            >
              <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                {g.title}
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      data-cursor={it.label}
                      className="inline-flex w-full items-center justify-between rounded-md border border-[var(--color-line-soft)] bg-[var(--color-bg)]/60 px-3 py-2 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      <span>{it.label}</span>
                      <span aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <div className="reveal flex items-end justify-between border-b border-[var(--color-line-soft)] pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-5xl">
            All projects
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {projects.length} entries
          </span>
        </div>
        <ul className="mt-6 grid gap-2 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/case-studies/${p.slug}`}
                data-cursor="View"
                className="reveal flex items-center justify-between gap-4 rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/30 px-4 py-3 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {p.index}
                  </span>
                  <span>{p.title}</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {p.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <LetsTalk />
    </>
  );
}
