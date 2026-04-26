"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sentence =
  "To simplify programming for everyone by building tools that bridge the gap between human intent and machine execution.";

export function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);

  return (
    <section
      id="mission"
      className="relative border-y border-[var(--color-line-soft)] bg-[var(--color-surface)] py-28 md:py-44"
    >
      <div
        ref={ref}
        className="mx-auto max-w-[var(--container-page)] px-6 md:px-10"
      >
        <div className="mb-10 text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)] reveal">
          <span className="mr-3 text-[var(--color-accent)]">02</span>
          Professional Mission
        </div>
        <motion.h2
          style={{ opacity }}
          className="font-[family-name:var(--font-display)] text-3xl leading-[1.06] font-bold tracking-tight md:text-5xl lg:text-[64px]"
        >
          <span className="text-[var(--color-accent)]">&ldquo;</span>To{" "}
          <span className="text-[var(--color-accent)]">simplify programming</span>{" "}
          for everyone by building tools that bridge the gap between human
          intent and machine execution.
          <span className="text-[var(--color-accent)]">&rdquo;</span>
        </motion.h2>
        <p className="mt-10 max-w-md text-sm text-[var(--color-muted)] reveal" data-delay="120">
          {sentence.length} characters · authored 2024 · revised quarterly.
        </p>
      </div>
    </section>
  );
}
