import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the build — essays on AI UX, performance, and motion design.",
};

export default function BlogPage() {
  const [feature, ...rest] = articles;
  return (
    <>
      <PageHeader
        eyebrow="Field notes"
        title="JOURNAL"
        description="Slow essays on building intelligent, performant, motion-aware web products."
      />

      <section className="mx-auto max-w-[var(--container-page)] px-6 pb-20 md:px-10">
        <Link
          href={`/blog/${feature.slug}`}
          data-cursor="Read"
          className="reveal group grid grid-cols-1 gap-10 border-y border-[var(--color-line-soft)] py-10 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--color-line-soft)]">
              <Image
                src={feature.cover}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:flex md:flex-col md:justify-end">
            <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Featured · {feature.date}
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
              {feature.title}
            </h2>
            <p className="mt-6 text-base text-[var(--color-muted)]">
              {feature.excerpt}
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              {feature.readTime}
              <span className="size-1 rounded-full bg-[var(--color-line)]" />
              <span className="text-[var(--color-fg)] group-hover:text-[var(--color-accent)]">
                Read essay →
              </span>
            </div>
          </div>
        </Link>

        <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {rest.map((a, i) => (
            <li key={a.slug} className="reveal" data-delay={`${i * 80}`}>
              <Link
                href={`/blog/${a.slug}`}
                data-cursor="Read"
                className="group flex h-full flex-col rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src={a.cover}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {a.date} · {a.readTime}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-[var(--color-muted)]">
                  {a.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-fg)] group-hover:text-[var(--color-accent)]">
                  Read
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_outward
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <LetsTalk />
    </>
  );
}
