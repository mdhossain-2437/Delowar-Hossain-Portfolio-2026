"use client";

import { useEffect, useRef } from "react";

type Props = {
  density?: number;
  color?: string;
  link?: number;
  speed?: number;
  reactToPointer?: boolean;
  className?: string;
};

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function ParticleField({
  density = 0.00012,
  color = "rgba(195, 244, 0, 0.7)",
  link = 110,
  speed = 0.18,
  reactToPointer = true,
  className,
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const reduceMotionRef = useRef(false);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = !!mql?.matches;
    const onPref = () => {
      reduceMotionRef.current = !!mql?.matches;
    };
    mql?.addEventListener?.("change", onPref);

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: P[] = [];
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      const target = Math.max(40, Math.floor(rect.width * rect.height * density));
      particles = new Array(target).fill(0).map(() => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      }));
    };

    const onMove = (e: PointerEvent) => {
      if (!reactToPointer) return;
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };
    const onLeave = () => {
      pointerRef.current.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    const tick = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const linkSq = link * link;
      const reduce = reduceMotionRef.current;
      const pointer = pointerRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          if (pointer.active) {
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 18000) {
              const f = (1 - d2 / 18000) * 0.6;
              p.vx += (dx / Math.sqrt(d2 + 0.0001)) * f * 0.04;
              p.vy += (dy / Math.sqrt(d2 + 0.0001)) * f * 0.04;
            }
          }
          // damping
          p.vx *= 0.992;
          p.vy *= 0.992;
        }
      }

      // links first (under nodes)
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkSq) {
            const alpha = 1 - d2 / linkSq;
            ctx.strokeStyle = color.replace(
              /rgba?\(([^)]+)\)/,
              (_m, body) => {
                const parts = body.split(",").map((s: string) => s.trim());
                const [r, g, bl] = parts;
                return `rgba(${r}, ${g}, ${bl}, ${(alpha * 0.18).toFixed(3)})`;
              }
            );
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = color;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      mql?.removeEventListener?.("change", onPref);
    };
  }, [density, color, link, speed, reactToPointer]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={className ?? "absolute inset-0 h-full w-full"}
    />
  );
}
