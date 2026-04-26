import { brands } from "@/lib/data";

export function Brands() {
  const list = [...brands, ...brands];
  return (
    <section className="border-t border-[var(--color-line-soft)] py-20 md:py-24" id="trusted-by">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="reveal flex flex-col gap-3">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Trusted by
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Global &amp; Bangladeshi product teams.
          </h2>
        </div>
      </div>

      <div className="reveal mt-12 overflow-hidden border-y border-[var(--color-line-soft)]" data-delay="80">
        <div className="marquee-track marquee-track--slow flex w-max gap-12 whitespace-nowrap py-7">
          {list.map((b, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-[family-name:var(--font-display)] text-base font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)] md:text-lg"
            >
              {b}
              <span className="text-[var(--color-line)]">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-[var(--container-page)] grid-cols-2 gap-3 px-6 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] sm:grid-cols-3 md:grid-cols-4 md:px-10">
        {brands.slice(0, 16).map((b) => (
          <span
            key={b}
            className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/30 px-3 py-2 text-center text-[var(--color-fg)]"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
