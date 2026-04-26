import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Stack } from "@/components/sections/Stack";
import { Marquee } from "@/components/sections/Marquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { Brands } from "@/components/sections/Brands";
import { AwardsStrip } from "@/components/sections/AwardsStrip";
import { ProcessStrip } from "@/components/sections/ProcessStrip";
import { Chapters } from "@/components/sections/Chapters";
import { LetsTalk } from "@/components/sections/LetsTalk";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <About />
      <Works />
      <Marquee />
      <Testimonials />
      <Stats />
      <AwardsStrip />
      <Brands />
      <ProcessStrip />
      <Stack />
      <Chapters />
      <LetsTalk />
    </>
  );
}
