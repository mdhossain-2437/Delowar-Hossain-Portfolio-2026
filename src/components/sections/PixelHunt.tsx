"use client";

import { useMemo, useState } from "react";

const SIZE = 16;
const TOTAL = SIZE * SIZE;

const randomCell = () => Math.floor(Math.random() * TOTAL);

export function PixelHunt() {
  const [target, setTarget] = useState<number>(() => randomCell());
  const [tries, setTries] = useState(0);
  const [found, setFound] = useState(false);
  const [hint, setHint] = useState<string | null>(null);

  const reset = () => {
    setTarget(randomCell());
    setTries(0);
    setFound(false);
    setHint(null);
  };

  const cells = useMemo(() => Array.from({ length: TOTAL }, (_, i) => i), []);

  const targetXY = { x: target % SIZE, y: Math.floor(target / SIZE) };

  const onCellClick = (i: number) => {
    if (found) return;
    setTries((t) => t + 1);
    if (i === target) {
      setFound(true);
      setHint(null);
      return;
    }
    const x = i % SIZE;
    const y = Math.floor(i / SIZE);
    const dx = targetXY.x - x;
    const dy = targetXY.y - y;
    const dist = Math.abs(dx) + Math.abs(dy);
    if (dist <= 1) setHint("burning hot 🔥");
    else if (dist <= 3) setHint("hot");
    else if (dist <= 6) setHint("warm");
    else setHint("cold");
  };

  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-line)]/40 bg-[var(--color-elevated)]/40 p-5">
      <div className="flex items-baseline justify-between border-b border-[var(--color-line-soft)] pb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
        <span className="text-[var(--color-accent)]">Bonus · Pixel hunt</span>
        <span>
          Tries · {tries}
          {hint ? ` · ${hint}` : ""}
        </span>
      </div>
      <div
        className="mt-4 grid gap-px rounded-md bg-[var(--color-line)]/30 p-1"
        style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` }}
        role="grid"
        aria-label="Pixel hunt grid"
      >
        {cells.map((i) => {
          const isTarget = found && i === target;
          return (
            <button
              key={i}
              type="button"
              role="gridcell"
              onClick={() => onCellClick(i)}
              className={`aspect-square cursor-crosshair transition-colors ${
                isTarget
                  ? "bg-[var(--color-accent)]"
                  : "bg-[var(--color-bg)] hover:bg-[var(--color-elevated)]"
              }`}
              aria-label={`Cell ${i + 1}`}
            />
          );
        })}
      </div>
      {found ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[10px] uppercase tracking-[0.3em]">
            <span className="text-[var(--color-accent)]">Found</span> · {tries}{" "}
            {tries === 1 ? "try" : "tries"}
          </div>
          <button
            type="button"
            onClick={reset}
            data-cursor="Replay"
            className="rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent-ink)]"
          >
            Hide it again ↗
          </button>
        </div>
      ) : (
        <p className="mt-3 text-[11px] text-[var(--color-muted)]">
          One pixel is hiding in this 16×16 grid. Click cells to find it — closer guesses get a
          warmer hint.
        </p>
      )}
    </div>
  );
}
