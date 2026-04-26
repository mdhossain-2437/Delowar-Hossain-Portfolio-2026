"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParticleField } from "@/components/fx/ParticleField";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden hero-vignette"
    >
      {/* Backdrop grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(195,244,0,0.06)_1px,transparent_1px)] [background-size:34px_34px] opacity-60"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[var(--color-accent)]/5 blur-[160px]" />
        <div className="absolute -right-40 bottom-10 h-[520px] w-[520px] rounded-full bg-[#1c4a4a]/30 blur-[200px]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 mix-blend-screen"
      >
        <ParticleField
          density={0.00009}
          color="rgba(195, 244, 0, 0.6)"
          link={120}
          speed={0.15}
          reactToPointer={false}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="mx-auto flex w-full max-w-[var(--container-page)] flex-col px-6 pt-32 md:px-10 md:pt-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.5em] text-[var(--color-accent)]"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
          Website Developer · Full-Stack · AI Engineer
        </motion.div>

        <h1 className="font-[family-name:var(--font-display)] text-[18vw] leading-[0.82] font-bold uppercase tracking-tighter md:text-[15vw] lg:text-[12.5vw] xl:text-[200px]">
          {"DELOWAR".split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.2 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={
                "inline-block " +
                (ch === "O"
                  ? "text-[var(--color-accent)]"
                  : "text-gradient-hero")
              }
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 grid grid-cols-1 items-end gap-6 md:grid-cols-3"
        >
          <p className="md:col-span-2 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Premium <span className="text-[var(--color-fg)]">creative developer in Bangladesh</span>{" "}
            building immersive digital products — blending creative development,
            full-stack architecture, and{" "}
            <span className="text-[var(--color-accent)]">AI-native thinking</span>.
          </p>
          <div className="flex items-center justify-start gap-4 md:justify-end">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
              <div className="text-[var(--color-fg)]">Joypurhat, BD</div>
              <div className="mt-1 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
                Available · Q3 2026
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-20 flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-[var(--color-muted)]"
        >
          <div className="flex items-center gap-3">
            <span className="size-px w-10 bg-[var(--color-line-soft)]" />
            Scroll to explore
          </div>
          <div className="hidden md:block">[ 01 / 06 ]</div>
        </motion.div>
      </motion.div>

      {/* Scrolling indicator */}
      <motion.div
        aria-hidden
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <span className="material-symbols-outlined text-[var(--color-accent)]">
          arrow_downward
        </span>
      </motion.div>
    </section>
  );
}
