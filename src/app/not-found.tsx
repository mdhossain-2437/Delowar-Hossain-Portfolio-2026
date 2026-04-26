import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center justify-center px-6 hero-vignette">
      <div className="text-center">
        <div className="font-[family-name:var(--font-display)] text-[28vw] leading-none font-bold text-[var(--color-accent)] md:text-[18vw]">
          404
        </div>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight md:text-3xl">
          Lost in the noise.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-[var(--color-muted)]">
          The page you&apos;re looking for didn&apos;t make it into this
          portfolio. Try the homepage, or jump straight into the work.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-[var(--color-accent)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent-ink)] hover:bg-white"
          >
            Go home
          </Link>
          <Link
            href="/work"
            className="rounded-md border border-[var(--color-line)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}
