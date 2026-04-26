import { articles, identity } from "@/lib/data";

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function GET() {
  const base = `https://${identity.domain}`;
  const items = articles
    .map(
      (a) => `<item>
  <title>${escape(a.title)}</title>
  <link>${base}/blog/${a.slug}</link>
  <guid>${base}/blog/${a.slug}</guid>
  <pubDate>${new Date(a.date).toUTCString()}</pubDate>
  <description>${escape(a.excerpt)}</description>
</item>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Delowar.dev — Journal</title>
  <link>${base}/blog</link>
  <description>Writing on creative development, AI engineering and craft by ${escape(identity.fullName)}.</description>
  <language>en-us</language>
  <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${base}/rss.xml" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
