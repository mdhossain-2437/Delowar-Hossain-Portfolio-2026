"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string; level: number };

export function TableOfContents({
  containerSelector = "article",
}: {
  containerSelector?: string;
}) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(containerSelector);
    if (!root) return;
    const nodes = Array.from(
      root.querySelectorAll<HTMLHeadingElement>("h2, h3")
    );
    const list: Heading[] = nodes.map((n) => {
      if (!n.id) {
        n.id = (n.textContent ?? "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
      }
      return {
        id: n.id,
        text: n.textContent ?? "",
        level: n.tagName === "H2" ? 2 : 3,
      };
    });
    // DOM-driven derivation: must run after the article is in the DOM.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(list);
    if (list.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 1] }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [containerSelector]);

  if (headings.length === 0) return null;

  return (
    <aside className="sticky top-32 hidden self-start text-sm xl:block">
      <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
        On this page
      </div>
      <ul className="mt-4 flex flex-col gap-2 border-l border-[var(--color-line-soft)] pl-4">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-3" : ""}>
            <a
              href={`#${h.id}`}
              data-cursor="Jump"
              className={`block text-[12px] leading-snug transition-colors ${
                active === h.id
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-fg)]"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
