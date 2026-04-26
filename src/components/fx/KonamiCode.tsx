"use client";

import { useEffect } from "react";
import { useToast } from "./ToastProvider";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function KonamiCode() {
  const { toast } = useToast();
  useEffect(() => {
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key;
      if (key.toLowerCase() === SEQUENCE[pos].toLowerCase()) {
        pos += 1;
        if (pos === SEQUENCE.length) {
          pos = 0;
          document.documentElement.classList.toggle("konami");
          toast("KONAMI MODE — Synthwave activated");
        }
      } else {
        pos = key === SEQUENCE[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toast]);
  return null;
}
