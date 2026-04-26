import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Newsletter — The Build Notes",
  description:
    "Once-a-month dispatch on creative development, AI-native interfaces, async craft and what's actually shipping in my studio.",
};

const issues = [
  {
    n: "012",
    date: "Apr 2026",
    title: "Probabilistic UI patterns nobody talks about",
    summary:
      "Loading states for non-deterministic systems, partial confidence, gracefully recoverable hallucinations.",
  },
  {
    n: "011",
    date: "Mar 2026",
    title: "Lenis is the quiet revolution",
    summary:
      "Why the team behind Lenis keeps shipping the most boringly excellent web tooling of the decade.",
  },
  {
    n: "010",
    date: "Feb 2026",
    title: "The case for performance budgets as a creative constraint",
    summary:
      "How a 90kb gzip ceiling killed every bad design decision before it was made.",
  },
  {
    n: "009",
    date: "Jan 2026",
    title: "Async-first delivery: protocols I actually use",
    summary:
      "The exact rituals (and Notion templates) keeping a four-timezone studio shipping at 11 AM client time.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Build Notes · Monthly"
        title="NEWSLETTER"
        description="A short dispatch every month — what shipped, what broke, what's next. Reading time five minutes, opt-out one click. No retargeting pixels."
      />

      <section className="mx-auto grid max-w-[var(--container-page)] gap-10 px-6 pb-16 md:grid-cols-[1.15fr_1fr] md:px-10">
        <div className="reveal rounded-[var(--radius-card)] border border-[var(--color-line)]/40 bg-[var(--color-elevated)]/40 p-8 md:p-10">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Subscribe
          </div>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            Get the Build Notes
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
            One email a month. Practical, short, occasionally personal. Already
            read by 1,200+ developers, designers and founders.
          </p>
          <NewsletterForm />
          <ul className="mt-8 grid gap-2 text-[12px] text-[var(--color-muted)]">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">✓</span>
              No paid sponsorships, ever.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">✓</span>
              No tracking pixels, no retargeting.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">✓</span>
              Unsubscribe in one click.
            </li>
          </ul>
        </div>
        <aside className="reveal flex flex-col gap-3" data-delay="80">
          <div className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/30 p-5">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Stat · subscribers
            </div>
            <div className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              1,243
            </div>
          </div>
          <div className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/30 p-5">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Open rate
            </div>
            <div className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              68%
            </div>
            <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Industry avg · 21%
            </p>
          </div>
          <div className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/30 p-5">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Cadence
            </div>
            <div className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
              First Tuesday of the month · 07:00 UTC
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-16 md:px-10">
        <div className="reveal mb-6 flex items-end justify-between border-b border-[var(--color-line-soft)] pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            Past issues
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {issues.length} most recent
          </span>
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          {issues.map((it, i) => (
            <li
              key={it.n}
              className="reveal flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-6 transition-colors hover:border-[var(--color-accent)]/60"
              data-delay={i * 50}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                <span className="text-[var(--color-accent)]">Issue {it.n}</span>
                <span>{it.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-fg)]">
                {it.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {it.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {articles?.length ? (
        <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
          <div className="reveal mb-6 flex items-end justify-between border-b border-[var(--color-line-soft)] pb-3">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
              Long form on the blog
            </h2>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              {articles.length} pieces
            </span>
          </div>
          <ul className="grid gap-3">
            {articles.slice(0, 4).map((a, i) => (
              <li
                key={a.slug}
                className="reveal flex items-center justify-between rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/30 p-5"
                data-delay={i * 30}
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {a.category} · {a.readTime}
                  </div>
                  <a
                    href={`/blog/${a.slug}`}
                    data-cursor="Read"
                    className="mt-2 inline-block text-base font-semibold text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {a.title}
                  </a>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {a.date}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <LetsTalk />
    </>
  );
}
