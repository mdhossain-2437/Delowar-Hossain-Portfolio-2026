import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { nowItems, identity } from "@/lib/data";
import { TimeBadge } from "@/components/ui/TimeBadge";

export const metadata: Metadata = {
  title: "Now — Current Focus",
  description:
    "What Delowar Hossain is building, learning, reading and avoiding right now. Inspired by the /now movement.",
};

const TONE: Record<string, string> = {
  Building: "text-[var(--color-accent)]",
  Learning: "text-amber-300",
  Reading: "text-sky-300",
  Listening: "text-violet-300",
  Shipping: "text-pink-300",
  Avoiding: "text-rose-300",
};

export default function NowPage() {
  return (
    <>
      <PageHeader
        eyebrow="Now · Updated continuously"
        title="NOW"
        description="A living page in the spirit of nownownow.com — what's earning my attention this season. Updated continuously."
      />

      <section className="mx-auto grid max-w-[var(--container-page)] gap-12 px-6 pb-24 md:grid-cols-[1fr_280px] md:px-10">
        <div>
          <ul className="space-y-4">
            {nowItems.map((it, i) => (
              <li
                key={it.tag + it.text}
                className="reveal flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-6 md:flex-row md:items-start md:gap-6"
                data-delay={i * 50}
              >
                <span
                  className={`shrink-0 text-[10px] uppercase tracking-[0.4em] ${TONE[it.tag] ?? ""} md:w-28`}
                >
                  {it.tag}
                </span>
                <p className="text-base leading-relaxed text-[var(--color-fg)]">
                  {it.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="reveal" data-delay="80">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-line)]/40 bg-[var(--color-elevated)]/40 p-6">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Status
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="size-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
              {identity.availability}
            </div>
            <div className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Local time
            </div>
            <div className="mt-2">
              <TimeBadge />
            </div>
            <div className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Response window
            </div>
            <div className="mt-2 text-sm text-[var(--color-fg)]">
              {identity.responseTime}
            </div>
          </div>
        </aside>
      </section>

      <LetsTalk />
    </>
  );
}
