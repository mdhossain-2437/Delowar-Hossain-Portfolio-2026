type Props = { items?: string[]; reverse?: boolean; slow?: boolean };

const defaultItems = [
  "Website Developer in Bangladesh",
  "Full-Stack AI Systems",
  "Immersive Web Experiences",
  "Lenis · Framer · GSAP",
  "Available · Q3 2026",
];

export function Marquee({ items = defaultItems, reverse, slow }: Props) {
  const list = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-line-soft)] bg-[var(--color-bg)]">
      <div
        className={
          "flex w-max gap-12 whitespace-nowrap py-6 marquee-track " +
          (slow ? "marquee-track--slow " : "") +
          (reverse ? "marquee-track--reverse" : "")
        }
      >
        {list.map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight text-[var(--color-fg)] md:text-4xl"
          >
            {it}
            <span className="text-[var(--color-accent)]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
