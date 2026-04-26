"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={
          "fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background] duration-500 " +
          (scrolled
            ? "backdrop-blur-md bg-[var(--color-bg)]/70 border-b border-[var(--color-line-soft)]"
            : "bg-transparent")
        }
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          <Link
            href="/"
            data-cursor="Home"
            className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight md:text-xl"
          >
            Delowar.dev
          </Link>

          <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)] md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative inline-flex items-center transition-colors hover:text-[var(--color-fg)]"
                data-cursor={l.label}
              >
                <span className="mr-2 size-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100" />
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton
              href="/contact"
              cursorLabel="Hire"
              className="bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-white"
            >
              Hire Me
              <span aria-hidden className="ml-1">
                ↗
              </span>
            </MagneticButton>
          </div>

          <button
            type="button"
            className="md:hidden flex size-10 items-center justify-center rounded-md border border-[var(--color-line-soft)]"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      <div
        className={
          "fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-xl transition-opacity duration-500 md:hidden " +
          (open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")
        }
      >
        <nav className="mx-auto flex h-full max-w-screen-md flex-col justify-center gap-8 px-8">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-display)] text-5xl font-bold uppercase tracking-tight"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-6">
            <MagneticButton
              href="/contact"
              className="bg-[var(--color-accent)] text-[var(--color-accent-ink)]"
            >
              Hire Me ↗
            </MagneticButton>
          </div>
        </nav>
      </div>
    </>
  );
}
