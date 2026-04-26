import { identity, social } from "@/lib/data";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: identity.fullName,
        alternateName: identity.shortName,
        url: `https://${identity.domain}`,
        image: `https://${identity.domain}/images/avatar.jpg`,
        jobTitle: identity.roles.join(" · "),
        email: `mailto:${social.email}`,
        sameAs: [social.github, social.linkedin, social.twitter, social.facebook],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Joypurhat",
          addressRegion: "Rajshahi Division",
          addressCountry: "BD",
        },
        knowsAbout: [
          "Creative Development",
          "Full-Stack Engineering",
          "AI Integration",
          "Next.js",
          "React",
          "LangChain",
        ],
      },
      {
        "@type": "WebSite",
        url: `https://${identity.domain}`,
        name: "Delowar.dev",
        description: identity.tagline,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
