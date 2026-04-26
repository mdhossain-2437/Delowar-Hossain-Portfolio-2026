type Props = { items?: string[] };

const defaultItems = [
  "Available for Freelance",
  "Generative AI Specialist",
  "Full Stack Developer",
  "Lenis · Framer · GSAP",
  "Joypurhat → Anywhere",
];

export function Marquee({ items = defaultItems }: Props) {
  const list = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-line-soft)] bg-[var(--color-bg)]">
      <div className="flex w-max marquee-track gap-12 whitespace-nowrap py-6">
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
