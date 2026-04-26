import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { StackConstellation } from "@/components/sections/StackConstellation";
import { stackItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stack — Tools & Workflow",
  description:
    "The complete tool-set behind Delowar Hossain's daily creative-development practice — editors, design systems, infrastructure, AI tooling and productivity.",
};

const CADENCE_TONE: Record<string, string> = {
  Daily: "text-[var(--color-accent)]",
  Weekly: "text-amber-400",
  Monthly: "text-sky-300",
};

export default function StackPage() {
  const groups = Array.from(new Set(stackItems.map((s) => s.group)));

  return (
    <>
      <PageHeader
        eyebrow="Stack"
        title="STACK"
        description="The tools, editors, frameworks and services I lean on every day. Curated over six years of shipping immersive web and AI-native products."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-12 md:px-10">
        <StackConstellation items={stackItems} />
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <div className="reveal mb-10 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a
              key={g}
              href={`#${g.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="rounded-full border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              data-cursor={g}
            >
              {g} · {stackItems.filter((s) => s.group === g).length}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {groups.map((group) => (
            <div
              key={group}
              id={group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="reveal"
            >
              <div className="flex items-end justify-between border-b border-[var(--color-line-soft)] pb-4">
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight md:text-5xl">
                  {group}
                </h2>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {stackItems.filter((s) => s.group === group).length} tools
                </span>
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {stackItems
                  .filter((s) => s.group === group)
                  .map((s, i) => (
                    <li
                      key={s.name}
                      className="reveal flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-6 transition-colors hover:border-[var(--color-accent)]/50"
                      data-delay={i * 40}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                          {s.name}
                        </h3>
                        <span
                          className={`text-[10px] uppercase tracking-[0.3em] ${CADENCE_TONE[s.cadence] ?? ""}`}
                        >
                          ● {s.cadence}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                        {s.description}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <LetsTalk />
    </>
  );
}
