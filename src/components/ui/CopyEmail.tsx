"use client";

import { useToast } from "@/components/fx/ToastProvider";
import { social } from "@/lib/data";

export function CopyEmail({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  const { toast } = useToast();
  const onClick = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard
      ?.writeText(social.email)
      .then(() => toast("Email copied to clipboard"))
      .catch(() => toast("Couldn't copy — try again"));
  };
  return (
    <button
      type="button"
      onClick={onClick}
      data-cursor="COPY"
      className={`group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] ${className}`}
    >
      <span className="material-symbols-outlined text-[16px]">content_copy</span>
      {label ?? social.email}
    </button>
  );
}
