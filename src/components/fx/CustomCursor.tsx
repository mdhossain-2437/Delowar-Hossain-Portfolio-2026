"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeMatch(query: string) {
  return (notify: () => void) => {
    if (typeof window === "undefined") return () => {};
    const mq = window.matchMedia(query);
    mq.addEventListener("change", notify);
    return () => mq.removeEventListener("change", notify);
  };
}

function useFineHover() {
  return useSyncExternalStore(
    subscribeMatch("(hover: hover) and (pointer: fine)"),
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    () => false
  );
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const enabled = useFineHover();
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest(
        "a, button, [data-cursor], [role='button']"
      ) as HTMLElement | null;
      setHover(!!interactive);
      const cursorLabel = interactive?.getAttribute("data-cursor");
      setLabel(cursorLabel || null);
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] size-1.5 rounded-full bg-[var(--color-accent)] mix-blend-difference"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={
          "pointer-events-none fixed top-0 left-0 z-[99] flex items-center justify-center rounded-full border border-[var(--color-accent)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] transition-[width,height,background] duration-300 ease-out " +
          (hover
            ? "size-16 bg-[var(--color-accent)]/10"
            : "size-9 bg-transparent")
        }
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      >
        {label && hover ? <span className="font-medium">{label}</span> : null}
      </div>
    </>
  );
}
