"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/data";

export function WorkFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("ALL");

  const tags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.category.forEach((c) => s.add(c)));
    return ["ALL", ...Array.from(s).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    if (active === "ALL") return projects;
    return projects.filter((p) => p.category.includes(active as Project["category"][number]));
  }, [projects, active]);

  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 pb-20 md:px-10 md:pb-32">
      <div
        role="tablist"
        aria-label="Filter projects"
        className="reveal mb-10 flex flex-wrap items-center gap-2 border-b border-[var(--color-line-soft)] pb-6"
      >
        {tags.map((t) => {
          const isActive = active === t;
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={isActive}
              data-cursor={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${
                isActive
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-ink)]"
                  : "border-[var(--color-line-soft)] text-[var(--color-muted)] hover:border-[var(--color-accent)]/60 hover:text-[var(--color-fg)]"
              }`}
            >
              {t}
            </button>
          );
        })}
        <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Showing {filtered.length} / {projects.length}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {filtered.map((p, i) => (
          <Link
            key={p.slug}
            href={p.href}
            data-cursor="View"
            className="group relative grid grid-cols-12 items-center gap-6 border-b border-[var(--color-line-soft)] py-8 transition-colors hover:bg-[var(--color-elevated)]/50"
          >
            <div className="col-span-1 font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.25em] text-[var(--color-accent)]">
              {p.index}
            </div>
            <div className="col-span-7 md:col-span-5">
              <div className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight text-[var(--color-fg)] transition-transform group-hover:translate-x-3 md:text-4xl">
                {p.title}
              </div>
              <p className="mt-1 max-w-md text-sm text-[var(--color-muted)]">
                {p.tagline}
              </p>
            </div>
            <div className="col-span-3 hidden flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] md:flex">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="col-span-3 text-right text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] md:col-span-2">
              {p.year}
            </div>
            <div className="col-span-1 hidden items-center justify-end md:flex">
              <span className="material-symbols-outlined text-[var(--color-accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                arrow_outward
              </span>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute right-6 top-1/2 hidden aspect-[4/3] w-72 -translate-y-1/2 overflow-hidden rounded-lg opacity-0 shadow-2xl transition-opacity duration-500 group-hover:opacity-100 lg:block"
              style={{ zIndex: 1 + (filtered.length - i) }}
            >
              <Image
                src={p.cover}
                alt=""
                fill
                sizes="288px"
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
