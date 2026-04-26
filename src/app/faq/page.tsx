import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ — Working With Delowar",
  description:
    "Common questions about working with Delowar Hossain — engagement model, pricing, technical stack, communication and post-launch support.",
};

export default function FaqPage() {
  const groups = Array.from(new Set(faqs.map((f) => f.group)));
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="QUESTIONS"
        description="Sixteen of the most common questions clients ask before kicking off a project. If yours isn't answered here, the contact form takes 30 seconds."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        {groups.map((g) => (
          <div key={g} className="reveal mt-12 first:mt-0">
            <div className="mb-4 flex items-end justify-between border-b border-[var(--color-line-soft)] pb-3">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight md:text-4xl">
                {g}
              </h2>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                {faqs.filter((f) => f.group === g).length} questions
              </span>
            </div>
            <FaqAccordion items={faqs.filter((f) => f.group === g)} />
          </div>
        ))}
      </section>

      <LetsTalk />
    </>
  );
}
