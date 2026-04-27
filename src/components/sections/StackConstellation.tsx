"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { StackItem } from "@/lib/data";

type Node = {
  item: StackItem;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  g: number; // group index
};

const GROUP_PALETTE = [
  "#C3F400",
  "#7DD3FC",
  "#F0ABFC",
  "#FCD34D",
  "#86EFAC",
  "#FCA5A5",
  "#A5B4FC",
];

export function StackConstellation({ items }: { items: StackItem[] }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState<Node | null>(null);
  const reduceMotionRef = useRef(false);

  const groups = useMemo(
    () => Array.from(new Set(items.map((i) => i.group))),
    [items]
  );

  useEffect(() => {
    const canvas = ref.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = !!mql?.matches;
    const onMotionChange = (e: MediaQueryListEvent) => {
      const wasReduced = reduceMotionRef.current;
      reduceMotionRef.current = e.matches;
      if (wasReduced && !e.matches) {
        // resume animation; cancel any stale frame first to avoid duplicate loops
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(tick);
      }
    };
    mql?.addEventListener?.("change", onMotionChange);

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: -9999, y: -9999, active: false };

    // Place nodes in cluster centers per group
    const groupCenters = new Map<string, { x: number; y: number }>();

    const init = () => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      groups.forEach((g, i) => {
        const angle = (i / groups.length) * Math.PI * 2;
        const radius = Math.min(w, h) * 0.32;
        groupCenters.set(g, {
          x: w / 2 + Math.cos(angle) * radius,
          y: h / 2 + Math.sin(angle) * radius,
        });
      });
    };

    init();

    const nodes: Node[] = items.map((it) => {
      const c = groupCenters.get(it.group)!;
      return {
        item: it,
        x: c.x + (Math.random() - 0.5) * 80,
        y: c.y + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: it.cadence === "Daily" ? 7 : it.cadence === "Weekly" ? 5 : 4,
        g: groups.indexOf(it.group),
      };
    });

    const findHover = (mx: number, my: number) => {
      for (const n of nodes) {
        const dx = n.x - mx;
        const dy = n.y - my;
        if (dx * dx + dy * dy < (n.r + 6) * (n.r + 6)) return n;
      }
      return null;
    };

    let hoveredNode: Node | null = null;
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = true;
      const next = findHover(pointer.x, pointer.y);
      if (next !== hoveredNode) {
        hoveredNode = next;
        setHover(next);
      }
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
      if (hoveredNode !== null) {
        hoveredNode = null;
        setHover(null);
      }
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    const onResize = () => init();
    window.addEventListener("resize", onResize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // soft radial backdrop
      const grad = ctx.createRadialGradient(
        w / 2,
        h / 2,
        50,
        w / 2,
        h / 2,
        Math.max(w, h) * 0.7
      );
      grad.addColorStop(0, "rgba(195,244,0,0.05)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // physics: pull each node back to its group center
      for (const n of nodes) {
        const c = groupCenters.get(n.item.group)!;
        n.vx += (c.x - n.x) * 0.0015;
        n.vy += (c.y - n.y) * 0.0015;

        // pointer repulsion
        if (pointer.active) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14000) {
            const f = (14000 - d2) / 14000;
            n.vx += (dx / Math.sqrt(d2 || 1)) * f * 0.6;
            n.vy += (dy / Math.sqrt(d2 || 1)) * f * 0.6;
          }
        }

        n.vx *= 0.92;
        n.vy *= 0.92;
        n.x += n.vx;
        n.y += n.vy;
      }

      // links between nodes in same group
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (a.g !== b.g) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 18000) {
            const alpha = 1 - d2 / 18000;
            ctx.strokeStyle = `${GROUP_PALETTE[a.g % GROUP_PALETTE.length]}${Math.floor(alpha * 60)
              .toString(16)
              .padStart(2, "0")}`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = GROUP_PALETTE[n.g % GROUP_PALETTE.length];
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotionRef.current) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    if (reduceMotionRef.current) tick();

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      mql?.removeEventListener?.("change", onMotionChange);
    };
  }, [items, groups]);

  return (
    <div
      ref={wrapRef}
      className="reveal relative h-[520px] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)]/40 bg-[var(--color-bg)]/60"
    >
      <canvas ref={ref} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap justify-center gap-3 p-6 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
        {groups.map((g, i) => (
          <span key={g} className="inline-flex items-center gap-2">
            <span
              className="size-2 rounded-full"
              style={{ background: GROUP_PALETTE[i % GROUP_PALETTE.length] }}
            />
            {g}
          </span>
        ))}
      </div>
      {hover ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6 text-left">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            {hover.item.group} · {hover.item.cadence}
          </div>
          <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-fg)] md:text-3xl">
            {hover.item.name}
          </div>
          <div className="max-w-xl text-sm text-[var(--color-muted)]">
            {hover.item.description}
          </div>
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="rounded-full border border-[var(--color-line-soft)] bg-[var(--color-bg)]/70 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Hover a node — explore the constellation
          </div>
        </div>
      )}
    </div>
  );
}
