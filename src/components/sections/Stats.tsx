import { homeStats } from "@/lib/data";

export function Stats() {
  return (
    <section className="border-t border-[var(--color-line-soft)] py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="reveal grid grid-cols-2 gap-8 md:grid-cols-4">
          {homeStats.map((s, i) => (
            <div key={s.label} className="reveal flex flex-col gap-3 border-l border-[var(--color-line-soft)] pl-6" data-delay={i * 60}>
              <div className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-[var(--color-fg)] md:text-6xl">
                {s.value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
