import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";
import { SideNav } from "@/components/layout/SideNav";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { RevealObserver } from "@/components/fx/RevealObserver";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://delowarhossain.dev"),
  title: {
    default: "Delowar Hossain — Web Developer & AI Enthusiast",
    template: "%s · Delowar.dev",
  },
  description:
    "Crafting high-performance digital experiences where code meets intelligence. Portfolio of MD Delowar Hossain — full-stack developer and generative AI specialist.",
  keywords: [
    "Delowar Hossain",
    "MD Delowar Hossain",
    "Web Developer",
    "AI Engineer",
    "Generative AI",
    "Next.js",
    "Portfolio",
    "Bangladesh",
    "Full Stack Developer",
  ],
  authors: [{ name: "MD Delowar Hossain", url: "https://delowarhossain.dev" }],
  creator: "MD Delowar Hossain",
  openGraph: {
    title: "Delowar Hossain — Web Developer & AI Enthusiast",
    description:
      "Crafting high-performance digital experiences where code meets intelligence.",
    url: "https://delowarhossain.dev",
    siteName: "Delowar.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delowar Hossain — Web Developer & AI Enthusiast",
    description:
      "Crafting high-performance digital experiences where code meets intelligence.",
    creator: "@delowarhossain",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)] grain antialiased overflow-x-clip">
        <SmoothScroll />
        <CustomCursor />
        <RevealObserver />
        <TopNav />
        <SideNav />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
