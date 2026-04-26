"use client";

import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  cursorLabel?: string;
  strength?: number;
  external?: boolean;
  type?: "button" | "submit" | "reset";
};

export function MagneticButton({
  href,
  onClick,
  children,
  className = "",
  cursorLabel,
  strength = 0.25,
  external,
  type = "button",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  };

  const baseClass =
    "inline-flex items-center justify-center gap-2 px-6 h-11 text-[12px] font-semibold uppercase tracking-[0.18em] rounded-md transition-[background,color,box-shadow] duration-300 will-change-transform";

  if (href) {
    return (
      <a
        ref={ref as React.MutableRefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        data-cursor={cursorLabel}
        className={`${baseClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      data-cursor={cursorLabel}
      className={`${baseClass} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
