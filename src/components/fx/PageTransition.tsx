"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function PageTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const firstRef = useRef(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }
    setActive(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setActive(false), 720);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden
      data-active={active ? "true" : "false"}
      className="page-transition pointer-events-none fixed inset-0 z-[140]"
    >
      <div className="page-transition__bar" />
      <div className="page-transition__bar page-transition__bar--2" />
      <div className="page-transition__bar page-transition__bar--3" />
      <div className="page-transition__label font-[family-name:var(--font-display)] text-[10px] uppercase tracking-[0.4em]">
        Loading {pathname === "/" ? "Home" : pathname.replace(/^\//, "").replace(/\//g, " · ")}…
      </div>
    </div>
  );
}
