import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { social } from "@/lib/data";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach MD Delowar Hossain — for project briefs, collaborations, and conversations.",
};

const channels = [
  {
    label: "Email",
    value: social.email,
    href: `mailto:${social.email}`,
    icon: "alternate_email",
  },
  {
    label: "GitHub",
    value: "github.com/mdhossain-2437",
    href: social.github,
    icon: "code",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mdhossain-2437",
    href: social.linkedin,
    icon: "work",
  },
  {
    label: "Twitter",
    value: "@delowarhossain",
    href: social.twitter,
    icon: "alternate_email",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="CONTACT"
        description="Send a brief, drop a question, or just say hello. I read everything that lands in the inbox and reply within 48 hours."
      />

      <section className="mx-auto grid max-w-[var(--container-page)] grid-cols-1 gap-12 px-6 pb-24 md:grid-cols-12 md:px-10">
        <aside className="md:col-span-5">
          <div className="reveal text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Channels
          </div>
          <ul className="mt-6 space-y-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor={c.label}
                  className="reveal group flex items-center gap-4 rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-elevated)] p-5 transition-colors hover:border-[var(--color-accent)]"
                >
                  <span className="material-symbols-outlined text-[var(--color-accent)] text-[22px]">
                    {c.icon}
                  </span>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                      {c.label}
                    </div>
                    <div className="mt-1 text-sm">{c.value}</div>
                  </div>
                  <span className="material-symbols-outlined text-[var(--color-muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    arrow_outward
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="reveal mt-12 rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6" data-delay="120">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Time zone
            </div>
            <div className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
              Asia/Dhaka · UTC+6
            </div>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              I keep mornings (08:00–13:00 BD) for deep work. Calls and async
              comms happen across the rest of the day.
            </p>
          </div>
        </aside>

        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
