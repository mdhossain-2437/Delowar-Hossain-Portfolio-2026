"use client";

import { useState } from "react";
import { useToast } from "@/components/fx/ToastProvider";

const SERVICES = [
  { id: "twitter", label: "Twitter / X", icon: "tag" },
  { id: "linkedin", label: "LinkedIn", icon: "share" },
  { id: "facebook", label: "Facebook", icon: "thumb_up" },
  { id: "email", label: "Email", icon: "mail" },
];

export function ShareMenu({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const share = (id: string) => {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(title);
    const targets: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      email: `mailto:?subject=${t}&body=${u}`,
    };
    window.open(targets[id], "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast("Link copied");
    } catch {
      toast("Couldn't copy link");
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-cursor="Share"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/60 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        aria-expanded={open}
      >
        <span className="material-symbols-outlined text-[14px]">share</span>
        Share
      </button>
      {open ? (
        <div className="absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-md border border-[var(--color-line)]/40 bg-[var(--color-elevated)]/95 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => share(s.id)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-[var(--color-fg)] transition-colors hover:bg-[var(--color-card)]"
            >
              <span className="material-symbols-outlined text-[18px] text-[var(--color-accent)]">
                {s.icon}
              </span>
              {s.label}
            </button>
          ))}
          <button
            type="button"
            onClick={copy}
            className="flex w-full items-center gap-3 border-t border-[var(--color-line-soft)] px-4 py-3 text-left text-sm text-[var(--color-fg)] transition-colors hover:bg-[var(--color-card)]"
          >
            <span className="material-symbols-outlined text-[18px] text-[var(--color-accent)]">
              content_copy
            </span>
            Copy link
          </button>
        </div>
      ) : null}
    </div>
  );
}
