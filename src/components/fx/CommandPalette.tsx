"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useSound } from "./SoundProvider";
import { useToast } from "./ToastProvider";
import { social } from "@/lib/data";

type Action = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  icon: string;
  run: () => void;
  keywords?: string;
};

export function CommandPalette() {
  const router = useRouter();
  const { setTheme, cycle } = useTheme();
  const { toggle: toggleSound } = useSound();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQ("");
    setActive(0);
  }, []);

  const copy = useCallback(
    (text: string, label: string) => {
      navigator.clipboard
        ?.writeText(text)
        .then(() => toast(`${label} copied`))
        .catch(() => toast("Copy failed"));
    },
    [toast]
  );

  const actions = useMemo<Action[]>(() => {
    const nav = (href: string, label: string, icon: string, group = "Navigate"): Action => ({
      id: `nav:${href}`,
      label,
      group,
      icon,
      hint: href,
      run: () => {
        router.push(href);
        close();
      },
      keywords: href + " " + label,
    });
    return [
      nav("/", "Home", "home"),
      nav("/work", "Work · Selected projects", "folder"),
      nav("/case-studies", "Case studies · Deep dives", "menu_book"),
      nav("/about", "About Delowar", "person"),
      nav("/services", "Services", "design_services"),
      nav("/process", "Process · 6 steps", "account_tree"),
      nav("/lab", "Lab · Experiments", "science"),
      nav("/stack", "Stack · Tools & gear", "build_circle"),
      nav("/uses", "Uses · Hardware setup", "desktop_windows"),
      nav("/awards", "Awards & recognition", "military_tech"),
      nav("/inspiration", "Inspiration", "auto_awesome"),
      nav("/now", "Now · Current focus", "schedule"),
      nav("/pricing", "Pricing", "sell"),
      nav("/blog", "Blog · Writing", "article"),
      nav("/faq", "FAQ", "help"),
      nav("/resume", "Résumé", "assignment"),
      nav("/contact", "Contact · Hire me", "alternate_email"),
      nav("/map", "Visual sitemap", "hub", "Discover"),
      {
        id: "theme:dark",
        label: "Theme · Dark",
        group: "Appearance",
        icon: "dark_mode",
        run: () => {
          setTheme("dark");
          toast("Dark theme");
          close();
        },
      },
      {
        id: "theme:light",
        label: "Theme · Light",
        group: "Appearance",
        icon: "light_mode",
        run: () => {
          setTheme("light");
          toast("Light theme");
          close();
        },
      },
      {
        id: "theme:synthwave",
        label: "Theme · Synthwave",
        group: "Appearance",
        icon: "all_inclusive",
        run: () => {
          setTheme("synthwave");
          toast("Synthwave theme");
          close();
        },
      },
      {
        id: "theme:cycle",
        label: "Cycle theme",
        group: "Appearance",
        icon: "contrast",
        run: () => {
          cycle();
          close();
        },
      },
      {
        id: "sound:toggle",
        label: "Toggle sound",
        group: "Appearance",
        icon: "volume_up",
        run: () => {
          toggleSound();
          close();
        },
      },
      {
        id: "copy:email",
        label: "Copy email — hello@delowarhossain.dev",
        group: "Actions",
        icon: "content_copy",
        run: () => {
          copy(social.email, "Email");
          close();
        },
      },
      {
        id: "open:github",
        label: "Open GitHub",
        group: "Social",
        icon: "code",
        run: () => {
          window.open(social.github, "_blank", "noopener,noreferrer");
          close();
        },
      },
      {
        id: "open:linkedin",
        label: "Open LinkedIn",
        group: "Social",
        icon: "share",
        run: () => {
          window.open(social.linkedin, "_blank", "noopener,noreferrer");
          close();
        },
      },
      {
        id: "open:twitter",
        label: "Open X / Twitter",
        group: "Social",
        icon: "tag",
        run: () => {
          window.open(social.twitter, "_blank", "noopener,noreferrer");
          close();
        },
      },
      {
        id: "open:cal",
        label: "Book a call · Cal.com",
        group: "Social",
        icon: "calendar_month",
        run: () => {
          window.open(social.cal, "_blank", "noopener,noreferrer");
          close();
        },
      },
    ];
  }, [router, close, setTheme, cycle, toggleSound, toast, copy]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return actions;
    return actions.filter((a) =>
      (a.label + " " + (a.keywords ?? "") + " " + a.group).toLowerCase().includes(term)
    );
  }, [actions, q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(filtered.length - 1, i + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(0, i - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const a = filtered[active];
        if (a) a.run();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, filtered, active]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const grouped: Record<string, Action[]> = {};
  filtered.forEach((a) => {
    grouped[a.group] = grouped[a.group] ?? [];
    grouped[a.group].push(a);
  });

  let cursor = -1;

  return (
    <div className="fixed inset-0 z-[150] flex items-start justify-center p-4 pt-[12vh] backdrop-blur-md">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={close}
        aria-hidden
      />
      <div className="relative w-full max-w-[640px] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)]/40 bg-[var(--color-elevated)]/95 shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-3 border-b border-[var(--color-line)]/40 px-5 py-4">
          <span className="material-symbols-outlined text-[var(--color-accent)]">
            search
          </span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            placeholder="Type a command or search the site…"
            className="flex-1 bg-transparent text-base text-[var(--color-fg)] placeholder:text-[var(--color-dim)] focus:outline-none"
          />
          <kbd className="rounded border border-[var(--color-line)]/60 bg-[var(--color-bg)] px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Esc
          </kbd>
        </div>
        <div className="max-h-[55vh] overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <div className="px-5 py-12 text-center text-[12px] uppercase tracking-[0.3em] text-[var(--color-dim)]">
              No matches.
            </div>
          ) : (
            Object.entries(grouped).map(([group, items]) => (
              <div key={group} className="px-2 pb-1">
                <div className="px-3 pt-3 pb-1 text-[10px] uppercase tracking-[0.4em] text-[var(--color-dim)]">
                  {group}
                </div>
                {items.map((a) => {
                  cursor += 1;
                  const idx = cursor;
                  const isActive = idx === active;
                  return (
                    <button
                      key={a.id}
                      onClick={a.run}
                      onMouseEnter={() => setActive(idx)}
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors ${
                        isActive
                          ? "bg-[var(--color-card)]"
                          : "hover:bg-[var(--color-card)]/60"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          isActive
                            ? "text-[var(--color-accent)]"
                            : "text-[var(--color-muted)]"
                        }`}
                      >
                        {a.icon}
                      </span>
                      <span className="flex-1 text-sm text-[var(--color-fg)]">
                        {a.label}
                      </span>
                      {a.hint ? (
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-dim)]">
                          {a.hint}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
        <div className="flex items-center justify-between border-t border-[var(--color-line)]/40 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-dim)]">
          <div className="flex items-center gap-3">
            <kbd className="rounded border border-[var(--color-line)]/60 bg-[var(--color-bg)] px-1.5 py-0.5">
              ↑↓
            </kbd>
            <span>Navigate</span>
            <kbd className="rounded border border-[var(--color-line)]/60 bg-[var(--color-bg)] px-1.5 py-0.5">
              Enter
            </kbd>
            <span>Run</span>
          </div>
          <div>{filtered.length} commands</div>
        </div>
      </div>
    </div>
  );
}
