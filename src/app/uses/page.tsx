import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { stackItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Uses — Hardware & Setup",
  description:
    "The hardware, peripherals and ambient setup behind Delowar Hossain's daily craft — desk, audio, displays and the small ergonomic details that matter.",
};

const desk = [
  { label: "Editor", value: "VS Code · Neovim (LazyVim)" },
  { label: "Terminal", value: "iTerm2 · Zsh · Starship" },
  { label: "Browser", value: "Arc · Chrome Canary" },
  { label: "Display", value: "27\" 4K · color-calibrated" },
  { label: "Keyboard", value: "Mechanical · 75% layout" },
  { label: "Audio", value: "Sony WH-1000XM5 · ambient lo-fi" },
  { label: "Network", value: "Wired · 1 Gbps · IPv6 ready" },
  { label: "OS", value: "macOS / Linux dual-boot" },
];

const ambient = [
  "Deep-work blocks · 90 min on / 20 min off",
  "Pomodoro for shallow tasks",
  "Notion for personal OS · daily journal",
  "Linear / GitHub Projects for shipping",
  "Slack / Discord for client comms",
  "Figma + FigJam for visual thinking",
];

export default function UsesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uses · Setup"
        title="USES"
        description="The desk, the gear, the rituals. A transparent look at the environment Delowar Hossain ships from, refined over years of remote, deep-focus product work."
      />

      <section className="mx-auto grid max-w-[var(--container-page)] gap-12 px-6 pb-24 md:grid-cols-[1.2fr_1fr] md:px-10">
        <div className="reveal">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            The desk.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
            A minimal but precise rig optimized for long writing sessions, smooth
            video calls and color-correct visual work.
          </p>
          <dl className="mt-8 space-y-3">
            {desk.map((d) => (
              <div
                key={d.label}
                className="flex items-center justify-between gap-6 border-b border-[var(--color-line-soft)] py-3"
              >
                <dt className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {d.label}
                </dt>
                <dd className="text-right text-sm text-[var(--color-fg)]">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal" data-delay="60">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
            The rituals.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
            Process beats willpower. These are the small, repeatable habits that
            keep the work calm and the calendar honest.
          </p>
          <ul className="mt-8 space-y-2">
            {ambient.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 rounded-md border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 px-4 py-3 text-sm text-[var(--color-fg)]"
              >
                <span className="material-symbols-outlined mt-0.5 text-[16px] text-[var(--color-accent)]">
                  bolt
                </span>
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-[var(--radius-card)] border border-[var(--color-line)]/60 bg-[var(--color-elevated)]/40 p-6">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Stack
            </div>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
              {stackItems.length} tools tracked
            </h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              See the complete toolbelt — editors, AI tools, infrastructure and
              productivity — on the
              <a href="/stack" className="ml-1 text-[var(--color-accent)] underline-offset-4 hover:underline">
                stack page
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <LetsTalk />
    </>
  );
}
