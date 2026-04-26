import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-[var(--color-bg)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)] reveal">
            <span className="mr-3 text-[var(--color-accent)]">03</span>
            Creative About
          </div>
          <div className="text-right text-[10px] uppercase tracking-[0.4em] text-[var(--color-muted)] reveal" data-delay="80">
            B.A. in Political Science
            <div className="mt-1 text-[var(--color-fg)]">Scholarly Modernity</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-4" data-delay="60">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)]">
              <Image
                src="/images/avatar.jpg"
                alt="Portrait of MD Delowar Hossain"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="object-cover grayscale transition-all duration-700 hover:scale-[1.03] hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                <span>Joypurhat · BD</span>
                <span className="text-[var(--color-accent)]">2026</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <h3 className="reveal font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight md:text-5xl">
              MD Delowar Hossain
            </h3>
            <div className="reveal mt-3 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]" data-delay="60">
              <span>Joypurhat, Bangladesh</span>
              <span className="size-1 rounded-full bg-[var(--color-line)]" />
              <span>Curator of digital experiences</span>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <p className="reveal text-base text-[var(--color-muted)] md:text-[17px] md:leading-[1.7]" data-delay="120">
                Based in the vibrant heart of Joypurhat, I navigate the
                intersection of political theory and computational logic. My
                background in Political Science provides a unique lens for
                understanding user behavior and system structures in the
                digital realm.
              </p>
              <p className="reveal text-base text-[var(--color-muted)] md:text-[17px] md:leading-[1.7]" data-delay="180">
                Currently focusing on integrating Generative AI into web
                workflows, I strive to create interfaces that aren&apos;t just
                functional, but deeply intuitive and intellectually
                stimulating.
              </p>
            </div>

            <div className="reveal mt-10 flex flex-wrap gap-3" data-delay="220">
              {["Critical Thinker", "Full-Stack Strategist", "AI Researcher"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-line)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-fg)]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="reveal mt-12 grid grid-cols-3 gap-6 border-t border-[var(--color-line-soft)] pt-8" data-delay="280">
              {[
                { v: "5+", l: "Years writing code" },
                { v: "30+", l: "Shipped projects" },
                { v: "98", l: "Avg. CWV score" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-fg)] md:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
