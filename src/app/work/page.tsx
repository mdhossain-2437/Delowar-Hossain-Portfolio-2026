import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Marquee } from "@/components/sections/Marquee";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { WorkFilter } from "@/components/sections/WorkFilter";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected works by MD Delowar Hossain — full-stack and AI-augmented digital products.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Works"
        title="WORK"
        description="A focused archive of digital products built across the seam of intelligent systems and elegant interfaces. Each piece is a study in performance, motion and clarity."
      />

      <WorkFilter projects={projects} />

      <Marquee
        items={[
          "Performance-first",
          "Accessibility built-in",
          "Motion as language",
          "Edge-deployed",
          "Scoped to ship",
        ]}
      />
      <LetsTalk />
    </>
  );
}
