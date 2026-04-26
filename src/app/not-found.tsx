import Link from "next/link";
import { PixelHunt } from "@/components/sections/PixelHunt";

const lines = [
  "$ delowar.dev/locate <route>",
  "  → resolving destination …",
  "  → indexed routes: /work · /case-studies · /lab · /blog",
  "  → suggestion: try the command palette (Cmd/Ctrl + K)",
  "exit code 0",
];

const jumps = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/map", label: "Sitemap" },
];

export default function NotFound() {
  return (
    <section className="hero-vignette relative flex min-h-[100svh] items-center px-6 py-32 md:px-10">
      <div className="mx-auto grid w-full max-w-[var(--container-page)] gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Error 404 · Resource not found
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[36vw] font-bold leading-[0.85] tracking-tighter text-[var(--color-accent)] md:text-[18vw] lg:text-[200px]">
            404
          </h1>
          <p className="mt-6 max-w-lg text-base text-[var(--color-muted)] md:text-lg">
            The page you&apos;re looking for didn&apos;t make it into this
            portfolio. Pick a destination below, or open the command palette
            with{" "}
            <kbd className="rounded border border-[var(--color-line)] bg-[var(--color-elevated)] px-2 py-0.5 text-[11px] font-mono">
              Cmd
            </kbd>{" "}
            +{" "}
            <kbd className="rounded border border-[var(--color-line)] bg-[var(--color-elevated)] px-2 py-0.5 text-[11px] font-mono">
              K
            </kbd>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {jumps.map((j) => (
              <Link
                key={j.href}
                href={j.href}
                data-cursor={j.label}
                className="rounded-full border border-[var(--color-line)] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {j.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
        <div className="rounded-[var(--radius-card)] border border-[var(--color-line)]/40 bg-[var(--color-elevated)]/60 p-6 font-mono text-sm">
          <div className="flex items-center gap-2 border-b border-[var(--color-line-soft)] pb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            <span className="size-2.5 rounded-full bg-rose-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2">/dev/delowar — terminal</span>
          </div>
          <div className="mt-4 space-y-1 leading-relaxed text-[var(--color-fg)]">
            {lines.map((l) => (
              <div key={l} className="whitespace-pre">
                <span className="text-[var(--color-accent)]">›</span> {l}
              </div>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[var(--color-accent)]">$</span>
              <span className="inline-block h-4 w-2 animate-pulse bg-[var(--color-accent)]" />
            </div>
          </div>
        </div>
        <PixelHunt />
        </div>
      </div>
    </section>
  );
}
