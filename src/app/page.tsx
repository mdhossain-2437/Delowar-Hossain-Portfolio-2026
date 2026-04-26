import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Stack } from "@/components/sections/Stack";
import { Marquee } from "@/components/sections/Marquee";
import { LetsTalk } from "@/components/sections/LetsTalk";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <About />
      <Works />
      <Stack />
      <Marquee />
      <LetsTalk />
    </>
  );
}
