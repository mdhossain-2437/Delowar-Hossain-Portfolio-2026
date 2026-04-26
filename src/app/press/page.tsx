import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { identity, social, awards } from "@/lib/data";

export const metadata: Metadata = {
  title: "Press — Media & Mentions",
  description:
    "Press, podcasts, conference talks and media mentions for Delowar Hossain — plus quick answers to journalist questions.",
};

const mentions = [
  {
    outlet: "Awwwards",
    title: "Honorable Mention — Personal Portfolio v3",
    year: "2024",
    href: "https://www.awwwards.com",
  },
  {
    outlet: "CSS Design Awards",
    title: "Best UI Design — AI Content Studio",
    year: "2024",
    href: "https://www.cssdesignawards.com",
  },
  {
    outlet: "Product Hunt",
    title: "#3 Product of the Day — AI Color Palette Generator",
    year: "2024",
    href: "https://www.producthunt.com",
  },
  {
    outlet: "FWA",
    title: "Site of the Day — WebDevWarrior Platform",
    year: "2024",
    href: "https://thefwa.com",
  },
  {
    outlet: "Dev.to",
    title: "Top 7 — Building Accessible React Components",
    year: "2022",
    href: "https://dev.to",
  },
  {
    outlet: "Hashnode",
    title: "Featured — PostgreSQL Performance Deep Dive",
    year: "2022",
    href: "https://hashnode.com",
  },
];

const interviews = [
  {
    show: "The Frontend Show",
    topic: "AI-native interfaces and the seam between probabilistic and deterministic UI",
    duration: "48 min",
    year: "2024",
  },
  {
    show: "Bangla Devs Podcast",
    topic: "Building a freelance practice from Joypurhat to North America clients",
    duration: "61 min",
    year: "2024",
  },
  {
    show: "Indie Hackers — Async Series",
    topic: "Async-first delivery for solo creative developers",
    duration: "32 min",
    year: "2023",
  },
];

const facts = [
  { label: "Real name", value: identity.fullName },
  { label: "Based in", value: identity.location },
  { label: "Specialty", value: identity.roles.join(" · ") },
  { label: "Working since", value: "2019" },
  { label: "Awards", value: `${awards.length} industry recognitions` },
  { label: "Open to", value: identity.availability },
];

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press · Media"
        title="PRESS"
        description="Quick answers for journalists, podcast hosts and conference organisers — plus a curated list of mentions, talks and interviews."
      />

      <section className="mx-auto grid max-w-[var(--container-page)] gap-12 px-6 pb-16 md:grid-cols-[1.1fr_1fr] md:px-10">
        <div className="reveal">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            Press kit
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
            High-resolution headshots, logo lockups, brand guidelines, biography
            in three lengths, and approved talking points.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/press-kit"
              data-cursor="Open kit"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent-ink)] transition-colors hover:bg-white"
            >
              Open press kit ↗
            </Link>
            <CopyEmail />
          </div>
        </div>
        <dl className="reveal grid grid-cols-2 gap-3" data-delay="80">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-4"
            >
              <dt className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                {f.label}
              </dt>
              <dd className="mt-2 text-sm text-[var(--color-fg)]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-16 md:px-10">
        <div className="reveal mb-6 flex items-end justify-between border-b border-[var(--color-line-soft)] pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            Mentions
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {mentions.length} entries
          </span>
        </div>
        <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
          {mentions.map((m, i) => (
            <li
              key={m.outlet + m.title}
              className="reveal grid grid-cols-12 items-center gap-4 py-5"
              data-delay={i * 30}
            >
              <span className="col-span-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] md:col-span-2">
                {m.outlet}
              </span>
              <span className="col-span-9 text-sm text-[var(--color-fg)] md:col-span-7 md:text-base">
                {m.title}
              </span>
              <span className="col-span-6 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] md:col-span-1">
                {m.year}
              </span>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Visit"
                className="col-span-6 text-right text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] md:col-span-2"
              >
                Source ↗
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <div className="reveal mb-6 flex items-end justify-between border-b border-[var(--color-line-soft)] pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            Podcasts & talks
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {interviews.length} appearances
          </span>
        </div>
        <ul className="grid gap-3 md:grid-cols-3">
          {interviews.map((it, i) => (
            <li
              key={it.show}
              className="reveal flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-6 transition-colors hover:border-[var(--color-accent)]/60"
              data-delay={i * 50}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                <span className="text-[var(--color-accent)]">{it.show}</span>
                <span>{it.year}</span>
              </div>
              <p className="text-base leading-relaxed text-[var(--color-fg)]">
                {it.topic}
              </p>
              <span className="mt-auto text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                ◌ {it.duration}
              </span>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 rounded-[var(--radius-card)] border border-[var(--color-line)]/40 bg-[var(--color-elevated)]/40 p-8 md:p-10">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Booking
          </div>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            Want me on your show?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
            I respond to press inquiries within 24 business hours. Send a brief
            outline (topic, audience, format, length) and a few candidate dates.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CopyEmail />
            <a
              href={social.cal}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Book call"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-line)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Book on Cal.com ↗
            </a>
          </div>
        </div>
      </section>

      <LetsTalk />
    </>
  );
}
