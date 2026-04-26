type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="relative pt-32 pb-12 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-10">
        <div className="reveal" data-delay="0">
          <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            {eyebrow}
          </div>
        </div>
        <h1
          className="reveal mt-6 font-[family-name:var(--font-display)] text-[15vw] leading-[0.85] font-bold uppercase tracking-tighter md:text-[10vw] lg:text-[8.5vw]"
          data-delay="80"
        >
          {title}
        </h1>
        {description ? (
          <p
            className="reveal mt-8 max-w-2xl text-base text-[var(--color-muted)] md:text-lg"
            data-delay="160"
          >
            {description}
          </p>
        ) : null}
      </div>
      <div className="mx-auto mt-12 h-px max-w-[var(--container-page)] bg-[var(--color-line-soft)] px-6 md:px-10" />
    </header>
  );
}
