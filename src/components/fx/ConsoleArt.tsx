"use client";

import { useEffect } from "react";

export function ConsoleArt() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as { __delowar_banner?: boolean };
    if (w.__delowar_banner) return;
    w.__delowar_banner = true;
    const css =
      "color:#c3f400;font-weight:700;font-family:Space Grotesk,system-ui;font-size:13px;line-height:1.4";
    const muted = "color:#b6baa3;font-size:11px;font-family:ui-monospace,monospace";
    console.log(
      `%c
██████╗ ███████╗██╗      ██████╗ ██╗    ██╗ █████╗ ██████╗
██╔══██╗██╔════╝██║     ██╔═══██╗██║    ██║██╔══██╗██╔══██╗
██║  ██║█████╗  ██║     ██║   ██║██║ █╗ ██║███████║██████╔╝
██║  ██║██╔══╝  ██║     ██║   ██║██║███╗██║██╔══██║██╔══██╗
██████╔╝███████╗███████╗╚██████╔╝╚███╔███╔╝██║  ██║██║  ██║
╚═════╝ ╚══════╝╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`,
      css
    );
    console.log(
      "%cWelcome, curious traveller. — delowarhossain.dev",
      muted
    );
    console.log(
      "%c→ Hire me · hello@delowarhossain.dev   |   GitHub · github.com/mdhossain-2437",
      muted
    );
    console.log(
      "%cTry the Konami code on the page. Or press Cmd/Ctrl + K for the command palette.",
      muted
    );
  }, []);

  return null;
}
