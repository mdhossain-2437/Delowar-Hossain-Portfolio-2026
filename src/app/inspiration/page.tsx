import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { inspirationPeople, designSources, books } from "@/lib/data";

export const metadata: Metadata = {
  title: "Inspiration — People, Sources, Books",
  description:
    "The people, design sources and books that shape Delowar Hossain's perspective on creative development, craft and product thinking.",
};

export default function InspirationPage() {
  const personGroups = Array.from(new Set(inspirationPeople.map((p) => p.category)));
  return (
    <>
      <PageHeader
        eyebrow="Inspiration · Influences"
        title="INSPIRATION"
        description="A working bibliography. The voices, references and books that quietly shape how I design, code and think about craft."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-20 md:px-10">
        <div className="reveal mb-8 flex items-end justify-between border-b border-[var(--color-line-soft)] pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-5xl">
            People I follow.
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {inspirationPeople.length} voices
          </span>
        </div>
        {personGroups.map((g) => (
          <div key={g} className="mt-10 first:mt-0">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              {g}
            </div>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {inspirationPeople
                .filter((p) => p.category === g)
                .map((p, i) => (
                  <li
                    key={p.name}
                    className="reveal flex flex-col gap-2 rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-5 transition-colors hover:border-[var(--color-accent)]/50"
                    data-delay={i * 40}
                  >
                    <div className="font-[family-name:var(--font-display)] text-xl font-bold">
                      {p.name}
                    </div>
                    {p.role ? (
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                        {p.role}
                      </div>
                    ) : null}
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                      {p.description}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-20 md:px-10">
        <div className="reveal mb-8 flex items-end justify-between border-b border-[var(--color-line-soft)] pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-5xl">
            Design sources.
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {designSources.length} feeds
          </span>
        </div>
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {designSources.map((s, i) => (
            <li
              key={s.name}
              className="reveal flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-6 transition-colors hover:border-[var(--color-accent)]/50"
              data-delay={i * 40}
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {s.tag}
              </div>
              <div className="font-[family-name:var(--font-display)] text-2xl font-bold">
                {s.name}
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {s.note}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-24 md:px-10">
        <div className="reveal mb-8 flex items-end justify-between border-b border-[var(--color-line-soft)] pb-3">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-5xl">
            Books on rotation.
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {books.length} titles
          </span>
        </div>
        <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
          {books.map((b, i) => (
            <li
              key={b.title}
              className="reveal grid grid-cols-12 items-center gap-4 py-5"
              data-delay={i * 30}
            >
              <span className="col-span-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] md:col-span-2">
                {b.topic}
              </span>
              <span className="col-span-7 font-[family-name:var(--font-display)] text-lg font-semibold md:col-span-7">
                {b.title}
              </span>
              <span className="col-span-3 text-right text-sm text-[var(--color-muted)]">
                {b.author}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <LetsTalk />
    </>
  );
}
