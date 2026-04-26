"use client";

import { useState } from "react";
import { useToast } from "@/components/fx/ToastProvider";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      toast("Enter a valid email address");
      return;
    }
    setStatus("submitting");
    // Simulated subscription — in production wire to a real provider (Buttondown, etc.)
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    toast("Subscribed — check your inbox");
    setEmail("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 flex w-full flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="you@studio.dev"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status !== "idle" && status !== "submitting") setStatus("idle");
        }}
        required
        className="flex-1 rounded-md border border-[var(--color-line)]/60 bg-[var(--color-bg)]/60 px-4 py-3 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-dim)] focus:border-[var(--color-accent)] focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        data-cursor="Subscribe"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent-ink)] transition-colors hover:bg-white disabled:opacity-60"
      >
        {status === "submitting"
          ? "Subscribing…"
          : status === "success"
            ? "Subscribed ✓"
            : "Subscribe ↗"}
      </button>
    </form>
  );
}
