import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { pricingTiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing — Engagement Tiers",
  description:
    "Three engagement tiers for working with Delowar Hossain — Starter, Professional and Enterprise. Transparent prices, transparent scope.",
};

const compare = [
  { feature: "Discovery + strategy", tiers: [true, true, true] },
  { feature: "High-fidelity design", tiers: [true, true, true] },
  { feature: "Responsive development", tiers: [true, true, true] },
  { feature: "Backend / API engineering", tiers: [false, true, true] },
  { feature: "AI feature integration", tiers: [false, true, true] },
  { feature: "Custom architecture & scale", tiers: [false, false, true] },
  { feature: "Team augmentation", tiers: [false, false, true] },
  { feature: "SLA / dedicated support", tiers: [false, false, true] },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing · Engagements"
        title="PRICING"
        description="Three transparent tiers to start a conversation. Bigger or longer engagements — team augmentation, retainers, day-rate consulting — get scoped together."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-16 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {pricingTiers.map((t, i) => {
            const featured = !!t.badge;
            return (
              <article
                key={t.name}
                className={
                  "reveal relative flex flex-col gap-5 rounded-[var(--radius-card)] border p-7 transition-all md:p-8 " +
                  (featured
                    ? "border-[var(--color-accent)]/60 bg-[var(--color-elevated)]/70"
                    : "border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 hover:border-[var(--color-accent)]/30")
                }
                data-delay={i * 80}
              >
                {featured ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent-ink)]">
                    {t.badge}
                  </span>
                ) : null}
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
                    Tier {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
                    {t.name}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    {t.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2 border-y border-[var(--color-line-soft)] py-5">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none">
                    {t.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    {t.unit}
                  </span>
                </div>

                <ul className="space-y-2">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-[var(--color-fg)]"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-[16px] text-[var(--color-accent)]">
                        check
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  data-cursor={t.cta}
                  className={
                    "mt-auto inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors " +
                    (featured
                      ? "bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-white"
                      : "border border-[var(--color-line)] text-[var(--color-fg)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]")
                  }
                >
                  {t.cta} ↗
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <div className="reveal mb-6">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Compare
          </div>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight md:text-4xl">
            What&apos;s included.
          </h2>
        </div>
        <div className="reveal overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-line-soft)]">
          <table className="w-full min-w-[640px] table-fixed text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                <th className="w-[44%] px-5 py-4">Feature</th>
                {pricingTiers.map((t) => (
                  <th key={t.name} className="px-5 py-4">{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-[var(--color-line-soft)] last:border-b-0"
                >
                  <td className="px-5 py-4 text-[var(--color-fg)]">
                    {row.feature}
                  </td>
                  {row.tiers.map((on, idx) => (
                    <td key={idx} className="px-5 py-4">
                      {on ? (
                        <span className="material-symbols-outlined text-[18px] text-[var(--color-accent)]">
                          check_circle
                        </span>
                      ) : (
                        <span className="text-[var(--color-dim)]">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LetsTalk />
    </>
  );
}
