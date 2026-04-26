"use client";

import Link from "next/link";
import { social } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

const socials = [
  { name: "Github", href: social.github },
  { name: "LinkedIn", href: social.linkedin },
  { name: "Twitter", href: social.twitter },
  { name: "Email", href: `mailto:${social.email}` },
];

export function LetsTalk() {
  return (
    <footer
      id="contact"
      className="relative bg-[var(--color-footer)] pt-24 md:pt-36"
    >
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)] reveal">
              <span className="mr-3 text-[var(--color-accent)]">06</span>
              Let&apos;s collaborate
            </div>
            <h2
              className="reveal mt-6 font-[family-name:var(--font-display)] text-7xl font-bold leading-[0.85] tracking-tighter md:text-[180px]"
              data-delay="80"
            >
              <span className="text-[var(--color-accent)]">LET&apos;S</span>
              <br />
              TALK.
            </h2>
            <p
              className="reveal mt-10 max-w-md text-base text-[var(--color-muted)] md:text-lg"
              data-delay="160"
            >
              Building the future of the web, one intelligent layer at a time.
              Have a project in mind, a research collaboration, or just want to
              say hi?
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-4" data-delay="220">
              <MagneticButton
                href={`mailto:${social.email}`}
                external
                cursorLabel="Send"
                className="bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-white"
              >
                Start a project ↗
              </MagneticButton>
              <Link
                href="/contact"
                data-cursor="Form"
                className="text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--color-muted)] underline-offset-4 hover:text-[var(--color-fg)] hover:underline"
              >
                Or fill the brief →
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="reveal text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]" data-delay="120">
              Socials
            </div>
            <ul className="mt-6 flex flex-col items-end gap-2 text-right md:gap-3">
              {socials.map((s, i) => (
                <li key={s.name} className="reveal" data-delay={`${160 + i * 60}`}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor={s.name}
                    className="group inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)] md:text-5xl"
                  >
                    <span className="material-symbols-outlined translate-y-[-1px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-2">
                      arrow_outward
                    </span>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-line-soft)] pt-8 pb-10 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] md:flex-row md:items-center">
          <span>©2026 MD Delowar Hossain — Curating the Future</span>
          <div className="flex items-center gap-6">
            <span>delowarhossain.dev</span>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              data-cursor="Top"
              className="group inline-flex items-center gap-2 text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
            >
              Back to top
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-y-0.5">
                arrow_upward
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
