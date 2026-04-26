import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export function Works() {
  return (
    <section
      id="work"
      className="relative bg-[var(--color-bg)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)] reveal">
              <span className="mr-3 text-[var(--color-accent)]">04</span>
              Selected Works
            </div>
            <h2 className="reveal mt-6 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[0.9] tracking-tighter md:text-7xl" data-delay="80">
              Selected
              <br />
              Works.
            </h2>
          </div>
          <p className="reveal max-w-sm text-[11px] uppercase leading-relaxed tracking-[0.25em] text-[var(--color-muted)] md:text-right" data-delay="160">
            A curation of digital products built with performance and
            scalability in mind.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <li
              key={p.slug}
              className={
                "reveal group relative " + (i % 2 === 1 ? "md:mt-24" : "")
              }
              data-delay={`${(i % 2) * 120}`}
            >
              <Link
                href={p.href}
                data-cursor="View"
                className="block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)]">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="rounded-md bg-[var(--color-accent)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent-ink)]">
                      View Project
                    </span>
                    <span className="material-symbols-outlined text-2xl text-[var(--color-accent)]">
                      arrow_outward
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight md:text-3xl">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-xs font-bold tracking-[0.25em] text-[var(--color-accent)]">
                    {p.index}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex justify-center">
          <Link
            href="/work"
            data-cursor="All work"
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-line)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.3em] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            View all projects
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
