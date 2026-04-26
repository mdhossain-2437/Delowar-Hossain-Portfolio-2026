import Link from "next/link";
import { homeChapters } from "@/lib/data";

export function Chapters() {
  return (
    <section className="border-t border-[var(--color-line-soft)] py-24 md:py-32">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="reveal flex flex-col gap-3 pb-10">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Explore the platform
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight md:text-6xl">
            Delowar Hossain<br />beyond home.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            Explore the pages that define Delowar Hossain as a creative developer in Bangladesh, a full-stack developer, and an AI engineer building immersive interfaces, scalable systems, and thoughtful product experiences.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {homeChapters.map((c, i) => {
            const external = c.href.startsWith("http");
            const Inner = (
              <article
                className="reveal group flex h-full flex-col justify-between rounded-[var(--radius-card)] border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 p-6 transition-colors hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-elevated)]/70"
                data-delay={i * 50}
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {c.kicker}
                  </div>
                  <div className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold leading-tight">
                    {c.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {c.body}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                  Explore →
                </div>
              </article>
            );
            return external ? (
              <a
                key={c.href + c.kicker}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor={c.title}
              >
                {Inner}
              </a>
            ) : (
              <Link key={c.href + c.kicker} href={c.href} data-cursor={c.title}>
                {Inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
