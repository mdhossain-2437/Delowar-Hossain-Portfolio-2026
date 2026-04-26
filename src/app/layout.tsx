import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";
import { SideNav } from "@/components/layout/SideNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { RevealObserver } from "@/components/fx/RevealObserver";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { LoadingSplash } from "@/components/fx/LoadingSplash";
import { ConsoleArt } from "@/components/fx/ConsoleArt";
import { KonamiCode } from "@/components/fx/KonamiCode";
import { CommandPalette } from "@/components/fx/CommandPalette";
import { ThemeProvider } from "@/components/fx/ThemeProvider";
import { SoundProvider } from "@/components/fx/SoundProvider";
import { ToastProvider } from "@/components/fx/ToastProvider";
import { JsonLd } from "@/components/fx/JsonLd";

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
    default: "Delowar Hossain — Creative Developer · Full-Stack · AI Engineer",
    template: "%s · Delowar.dev",
  },
  description:
    "Premium website developer in Bangladesh building immersive digital products. Creative development, full-stack architecture, and AI-native thinking by MD Delowar Hossain.",
  keywords: [
    "Delowar Hossain",
    "MD Delowar Hossain",
    "Creative Developer Bangladesh",
    "Website Developer Bangladesh",
    "Full-Stack Developer",
    "AI Engineer",
    "Generative AI",
    "Next.js portfolio",
    "Awwwards",
  ],
  authors: [{ name: "MD Delowar Hossain", url: "https://delowarhossain.dev" }],
  creator: "MD Delowar Hossain",
  openGraph: {
    title: "Delowar Hossain — Creative Developer · Full-Stack · AI Engineer",
    description:
      "Premium website developer in Bangladesh building immersive digital products — creative development, full-stack architecture, AI-native thinking.",
    url: "https://delowarhossain.dev",
    siteName: "Delowar.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delowar Hossain — Creative Developer",
    description:
      "Immersive web, full-stack systems, AI integration. Creative developer in Bangladesh.",
    creator: "@delowarhossain",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)] grain antialiased overflow-x-clip">
        <ThemeProvider>
          <SoundProvider>
            <ToastProvider>
              <LoadingSplash />
              <SmoothScroll />
              <CustomCursor />
              <RevealObserver />
              <ScrollProgress />
              <ConsoleArt />
              <KonamiCode />
              <CommandPalette />
              <JsonLd />
              <TopNav />
              <SideNav />
              <main className="relative">{children}</main>
              <SiteFooter />
            </ToastProvider>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
