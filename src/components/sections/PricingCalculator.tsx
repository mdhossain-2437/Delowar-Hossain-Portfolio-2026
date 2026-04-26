"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Project = "Landing" | "Marketing site" | "Web app" | "AI product";
type Speed = 1 | 2 | 3;
type Polish = 1 | 2 | 3;

const PROJECT_BASE: Record<Project, number> = {
  Landing: 3500,
  "Marketing site": 8000,
  "Web app": 18000,
  "AI product": 28000,
};

const SPEED_LABEL: Record<Speed, string> = {
  1: "Standard · 6–8 wk",
  2: "Accelerated · 4 wk",
  3: "Sprint · 2 wk",
};

const POLISH_LABEL: Record<Polish, string> = {
  1: "Solid · production grade",
  2: "Refined · awwwards-ready",
  3: "Showcase · award submission",
};

export function PricingCalculator() {
  const [project, setProject] = useState<Project>("Marketing site");
  const [pages, setPages] = useState(6);
  const [speed, setSpeed] = useState<Speed>(1);
  const [polish, setPolish] = useState<Polish>(2);
  const [ai, setAi] = useState(false);

  const total = useMemo(() => {
    const base = PROJECT_BASE[project];
    const pageMultiplier = 1 + Math.max(0, pages - 4) * 0.08;
    const speedMultiplier = speed === 1 ? 1 : speed === 2 ? 1.25 : 1.6;
    const polishMultiplier = polish === 1 ? 1 : polish === 2 ? 1.2 : 1.5;
    const aiSurcharge = ai ? 4500 : 0;
    return Math.round(base * pageMultiplier * speedMultiplier * polishMultiplier + aiSurcharge);
  }, [project, pages, speed, polish, ai]);

  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 pb-16 md:px-10">
      <div className="reveal mb-6 border-b border-[var(--color-line-soft)] pb-3">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">
          Estimate your engagement
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
          A rough live calculator. Real proposals are scoped together — but this gets you in the
          ballpark before we ever meet.
        </p>
      </div>
      <div className="reveal grid gap-6 rounded-[var(--radius-card)] border border-[var(--color-line)]/40 bg-[var(--color-elevated)]/40 p-6 md:grid-cols-[1fr_320px] md:p-8">
        <div className="flex flex-col gap-6">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Project type
            </div>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(PROJECT_BASE) as Project[]).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setProject(p)}
                  data-cursor={p}
                  className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${
                    project === p
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-ink)]"
                      : "border-[var(--color-line-soft)] text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                Pages / Surfaces
              </span>
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-fg)]">
                {pages}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={pages}
              onChange={(e) => setPages(parseInt(e.target.value, 10))}
              className="w-full accent-[var(--color-accent)]"
              aria-label="Pages"
            />
            <div className="mt-1 flex justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              <span>1 page</span>
              <span>20 surfaces</span>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                Timeline
              </span>
              <span className="text-sm text-[var(--color-fg)]">{SPEED_LABEL[speed]}</span>
            </div>
            <input
              type="range"
              min={1}
              max={3}
              step={1}
              value={speed}
              onChange={(e) => setSpeed(parseInt(e.target.value, 10) as Speed)}
              className="w-full accent-[var(--color-accent)]"
              aria-label="Timeline"
            />
          </div>

          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                Polish level
              </span>
              <span className="text-sm text-[var(--color-fg)]">{POLISH_LABEL[polish]}</span>
            </div>
            <input
              type="range"
              min={1}
              max={3}
              step={1}
              value={polish}
              onChange={(e) => setPolish(parseInt(e.target.value, 10) as Polish)}
              className="w-full accent-[var(--color-accent)]"
              aria-label="Polish level"
            />
          </div>

          <label className="flex items-center justify-between gap-4 rounded-md border border-[var(--color-line-soft)] bg-[var(--color-bg)]/40 p-4">
            <div>
              <div className="text-sm text-[var(--color-fg)]">Add AI / RAG layer</div>
              <div className="text-[11px] text-[var(--color-muted)]">
                Retrieval, agentic flows, custom tooling. +$4,500.
              </div>
            </div>
            <input
              type="checkbox"
              checked={ai}
              onChange={(e) => setAi(e.target.checked)}
              className="size-5 accent-[var(--color-accent)]"
              aria-label="Add AI layer"
            />
          </label>
        </div>

        <aside className="flex flex-col justify-between gap-6 rounded-md border border-[var(--color-line)]/40 bg-[var(--color-bg)]/60 p-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Estimate · USD
            </div>
            <div
              className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--color-fg)]"
              aria-live="polite"
            >
              ${total.toLocaleString()}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Indicative · ±20%
            </div>
          </div>
          <ul className="grid gap-2 text-[12px] text-[var(--color-muted)]">
            <li>● Fixed-price by default · milestones, not hours.</li>
            <li>● 50% deposit · balance on shipping window.</li>
            <li>● 30-day post-launch guarantee included.</li>
          </ul>
          <Link
            href="/contact"
            data-cursor="Brief me"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent-ink)] transition-colors hover:bg-white"
          >
            Send me your brief ↗
          </Link>
        </aside>
      </div>
    </section>
  );
}
