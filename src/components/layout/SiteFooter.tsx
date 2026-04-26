import Link from "next/link";
import { identity, social } from "@/lib/data";
import { TimeBadge } from "@/components/ui/TimeBadge";
import { CopyEmail } from "@/components/ui/CopyEmail";

const cols = [
  {
    title: "Sitemap",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Lab", href: "/lab" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Practice",
    items: [
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Process", href: "/process" },
      { label: "FAQ", href: "/faq" },
      { label: "Résumé", href: "/resume" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Personal",
    items: [
      { label: "Now", href: "/now" },
      { label: "Stack", href: "/stack" },
      { label: "Uses", href: "/uses" },
      { label: "Awards", href: "/awards" },
      { label: "Inspiration", href: "/inspiration" },
      { label: "Visual sitemap", href: "/map" },
    ],
  },
];

const socials = [
  { label: "GitHub", href: social.github, icon: "code" },
  { label: "LinkedIn", href: social.linkedin, icon: "share" },
  { label: "X / Twitter", href: social.twitter, icon: "tag" },
  { label: "Facebook", href: social.facebook, icon: "thumb_up" },
  { label: "Cal.com", href: social.cal, icon: "calendar_month" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-[var(--color-line-soft)] bg-[var(--color-footer)]/80">
      <div className="mx-auto grid max-w-[var(--container-page)] gap-10 px-6 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)] md:px-10">
        <div className="flex flex-col gap-5">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight"
          >
            Delowar.dev
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
            {identity.tagline}
          </p>
          <CopyEmail />
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-cursor={s.label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
        {cols.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-dim)]">
              {col.title}
            </div>
            <ul className="flex flex-col gap-2">
              {col.items.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    data-cursor={it.label}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--color-line-soft)]">
        <div className="mx-auto flex max-w-[var(--container-page)] flex-col items-start justify-between gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.3em] text-[var(--color-dim)] md:flex-row md:items-center md:px-10">
          <div>
            © {new Date().getFullYear()} {identity.fullName} — Curating the future
          </div>
          <TimeBadge />
          <a
            href="#hero"
            data-cursor="Top"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
