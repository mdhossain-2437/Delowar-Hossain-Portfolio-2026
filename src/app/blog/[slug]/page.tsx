import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, identity } from "@/lib/data";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { ShareMenu } from "@/components/ui/ShareMenu";

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <header className="mx-auto max-w-3xl px-6 pt-32 md:px-0 md:pt-44">
        <Link
          href="/blog"
          data-cursor="Back"
          className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-muted)] hover:text-[var(--color-accent)]"
        >
          ← Journal
        </Link>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
            {article.date} · {article.readTime}
          </div>
          <ShareMenu
            title={article.title}
            url={`https://${identity.domain}/blog/${article.slug}`}
          />
        </div>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          {article.title}
        </h1>
        <p className="mt-8 text-base text-[var(--color-muted)] md:text-lg">
          {article.excerpt}
        </p>
      </header>

      <div className="mx-auto mt-16 max-w-5xl px-6 md:px-10">
        <div className="reveal relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--color-line-soft)]">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <article className="mx-auto mt-16 max-w-3xl px-6 pb-20 text-base leading-[1.85] text-[var(--color-muted)] md:px-0 md:text-[17px]">
        <p className="reveal">
          The interfaces we build are getting weirder. We&apos;re grafting
          probabilistic systems onto deterministic UIs, and the seams show
          everywhere — loading states that are also reasoning states, error
          messages that have to admit uncertainty, undo buttons that have to
          undo a model.
        </p>
        <p className="reveal mt-6" data-delay="60">
          The good news is that none of this is new. Designers have been
          working with non-deterministic systems forever — humans, weather,
          markets, networks. The patterns exist. We just have to dust them
          off and apply them with care.
        </p>
        <h2 className="reveal mt-12 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-fg)] md:text-3xl">
          Three principles
        </h2>
        <p className="reveal mt-4">
          The principles are simple, the execution is not. State your
          uncertainty, design for the long tail, and make recovery the
          default.
        </p>
        <ol className="reveal mt-6 list-decimal space-y-4 pl-5">
          <li>
            <strong className="text-[var(--color-fg)]">State uncertainty up front.</strong>{" "}
            Don&apos;t hide that the model could be wrong. Let users
            calibrate.
          </li>
          <li>
            <strong className="text-[var(--color-fg)]">Design for the long tail.</strong>{" "}
            The 5% of queries that break things are also the 5% that build
            trust when handled well.
          </li>
          <li>
            <strong className="text-[var(--color-fg)]">Make recovery the default.</strong>{" "}
            Edit, regenerate, undo, escalate — these aren&apos;t edge cases,
            they&apos;re the workflow.
          </li>
        </ol>
        <p className="reveal mt-12">
          The portfolio you&apos;re reading this on was built with these in
          mind. Every motion has an intent. Every color has a job. Every
          interaction has a fall-back. None of that is novel. All of it is
          rare.
        </p>
        <p className="reveal mt-12 text-[var(--color-fg)]">— Delowar</p>
      </article>

      <LetsTalk />
    </>
  );
}
