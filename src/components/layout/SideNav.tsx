"use client";

import Link from "next/link";

const items = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/work", icon: "grid_view", label: "Work" },
  { href: "/resume", icon: "description", label: "Resume" },
  { href: "/contact", icon: "alternate_email", label: "Contact" },
];

export function SideNav() {
  return (
    <aside className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex">
      <ul className="flex flex-col items-center gap-1 rounded-full border border-[var(--color-line-soft)] bg-[var(--color-surface)]/60 p-1.5 backdrop-blur">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              data-cursor={it.label}
              className="group relative flex size-10 items-center justify-center rounded-full text-[var(--color-muted)] transition-colors hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
              aria-label={it.label}
            >
              <span className="material-symbols-outlined text-[20px]">
                {it.icon}
              </span>
              <span className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 rounded-md border border-[var(--color-line-soft)] bg-[var(--color-surface)] px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg)] opacity-0 transition-opacity group-hover:opacity-100">
                {it.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
