"use client";

import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/fx/ToastProvider";

type Settings = {
  contrast: boolean;
  largeText: boolean;
  dyslexic: boolean;
  reducedMotion: boolean;
  underlineLinks: boolean;
};

const KEY = "delowar:a11y";

const DEFAULTS: Settings = {
  contrast: false,
  largeText: false,
  dyslexic: false,
  reducedMotion: false,
  underlineLinks: false,
};

function applySettings(s: Settings) {
  const root = document.documentElement;
  root.classList.toggle("a11y-contrast", s.contrast);
  root.classList.toggle("a11y-large", s.largeText);
  root.classList.toggle("a11y-dyslexic", s.dyslexic);
  root.classList.toggle("a11y-reduce", s.reducedMotion);
  root.classList.toggle("a11y-underline", s.underlineLinks);
}

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<Settings>(DEFAULTS);
  const ref = useRef<HTMLDivElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      const next = raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS;
      // Hydration-safe localStorage read; can't run during render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setS(next);
      applySettings(next);
    } catch {
      applySettings(DEFAULTS);
    }
  }, []);

  useEffect(() => {
    applySettings(s);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(s));
    } catch {
      // ignore
    }
  }, [s]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = (k: keyof Settings) =>
    setS((prev) => ({ ...prev, [k]: !prev[k] }));

  const reset = () => {
    setS(DEFAULTS);
    toast("Accessibility · reset");
  };

  const items: { key: keyof Settings; label: string; hint: string }[] = [
    { key: "contrast", label: "High contrast", hint: "Boost text/background ratio" },
    { key: "largeText", label: "Larger text", hint: "+15% body size" },
    { key: "dyslexic", label: "Dyslexia-friendly font", hint: "Switch to system sans" },
    { key: "reducedMotion", label: "Reduce motion", hint: "Stop animations & transitions" },
    { key: "underlineLinks", label: "Underline links", hint: "Mark every anchor" },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Accessibility"
        aria-expanded={open}
        data-cursor="A11y"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--color-line-soft)] bg-[var(--color-elevated)]/40 text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        <span className="material-symbols-outlined text-[18px]">accessibility</span>
      </button>
      {open ? (
        <div
          role="dialog"
          aria-label="Accessibility settings"
          className="absolute right-0 top-12 z-[120] w-72 rounded-[var(--radius-card)] border border-[var(--color-line)]/60 bg-[var(--color-bg)]/95 p-4 shadow-xl backdrop-blur-xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Accessibility
            </div>
            <button
              type="button"
              onClick={reset}
              className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] hover:text-[var(--color-fg)]"
            >
              Reset
            </button>
          </div>
          <ul className="flex flex-col gap-1">
            {items.map((it) => {
              const on = s[it.key];
              return (
                <li key={it.key}>
                  <button
                    type="button"
                    onClick={() => toggle(it.key)}
                    aria-pressed={on}
                    className="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left transition-colors hover:bg-[var(--color-elevated)]/50"
                  >
                    <div>
                      <div className="text-sm text-[var(--color-fg)]">{it.label}</div>
                      <div className="text-[11px] text-[var(--color-muted)]">{it.hint}</div>
                    </div>
                    <span
                      aria-hidden
                      className={`relative inline-flex h-5 w-9 shrink-0 rounded-full border transition-colors ${
                        on
                          ? "border-[var(--color-accent)] bg-[var(--color-accent)]/30"
                          : "border-[var(--color-line)] bg-[var(--color-elevated)]"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 size-4 rounded-full bg-[var(--color-fg)] transition-transform ${
                          on ? "translate-x-4" : "translate-x-0.5"
                        }`}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 px-3 text-[10px] leading-relaxed text-[var(--color-dim)]">
            Settings are stored locally on this device.
          </p>
        </div>
      ) : null}
    </div>
  );
}
