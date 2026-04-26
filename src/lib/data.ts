export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  href: string;
  liveUrl?: string;
  github?: string;
  cover: string;
  stack: string[];
  highlights: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "webdevwarrior",
    index: "01",
    title: "WebDevWarrior",
    tagline: "Course intelligence platform for self-taught developers.",
    description:
      "A learning OS that pairs structured curriculum with an AI tutor. Real-time progress tracking, adaptive challenges and code-aware mentorship. Built for performance from day one — instant SSR, granular caching, and an animation system that runs at 60fps even on mid-tier devices.",
    role: "Full-stack engineer · Lead designer",
    year: "2025",
    href: "/work/webdevwarrior",
    liveUrl: "https://webdevwarrior.dev",
    github: "https://github.com/mdhossain-2437",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    stack: ["React", "GSAP", "Node.js"],
    highlights: [
      { label: "Lighthouse", value: "98 / 100 / 100 / 100" },
      { label: "Avg. session", value: "11m 42s" },
      { label: "Active learners", value: "2.4k" },
    ],
  },
  {
    slug: "kothopokothon",
    index: "02",
    title: "Kothopokothon",
    tagline: "Real-time messaging platform tuned for low-bandwidth networks.",
    description:
      "A Bengali-first chat platform that keeps conversations alive on 3G connections. Differential socket payloads, optimistic UI and an offline queue that survives reloads. Powered by a Firebase + Socket.io backbone with end-to-end encryption.",
    role: "Lead engineer",
    year: "2024",
    href: "/work/kothopokothon",
    liveUrl: "https://kothopokothon.app",
    github: "https://github.com/mdhossain-2437",
    cover:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1600&q=80",
    stack: ["Socket.io", "React", "Firebase"],
    highlights: [
      { label: "Avg. latency", value: "92ms" },
      { label: "Concurrency", value: "12k sockets" },
      { label: "Languages", value: "Bn · En" },
    ],
  },
  {
    slug: "recipe-book",
    index: "03",
    title: "Recipe Book App",
    tagline: "A pocket cookbook with smart pantry intelligence.",
    description:
      "A Vue + Supabase recipe vault that turns whatever is in your pantry into a meal plan. Vector search across 14k recipes, AI-generated swap suggestions, and a serene reading mode for cooking from the screen.",
    role: "Designer · Frontend",
    year: "2024",
    href: "/work/recipe-book",
    cover:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
    stack: ["Vue.js", "Tailwind", "Supabase"],
    highlights: [
      { label: "Recipes indexed", value: "14,000+" },
      { label: "Avg. CWV score", value: "97" },
      { label: "Offline ready", value: "Yes" },
    ],
  },
  {
    slug: "event-explorer",
    index: "04",
    title: "Event Explorer",
    tagline: "Event discovery and management platform.",
    description:
      "A Next.js + Prisma platform for hyperlocal event discovery. Map-first browsing, organizer dashboards and ticketing. The interaction model favors quiet motion: micro-state transitions that telegraph what's happening without ever shouting.",
    role: "Full-stack engineer",
    year: "2025",
    href: "/work/event-explorer",
    cover:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    highlights: [
      { label: "Markets", value: "23 cities" },
      { label: "Tickets sold", value: "31k" },
      { label: "Stripe ready", value: "Yes" },
    ],
  },
];

export const skills = [
  {
    section: "Frontend",
    title: "React & Next.js",
    description:
      "App Router, server components, Suspense streams, edge-first delivery.",
    icon: "code_blocks",
    span: "md:col-span-1",
  },
  {
    section: "AI Focus",
    title: "LangChain & OpenAI Integration",
    description:
      "Tool-using agents, RAG pipelines, evaluators and guardrails.",
    icon: "psychology",
    span: "md:col-span-2",
    highlight: true,
  },
  {
    section: "Backend",
    title: "Python & Node",
    description:
      "FastAPI services, queue workers, websocket fanout, Postgres + pgvector.",
    icon: "dns",
    span: "md:col-span-1",
  },
  {
    section: "Research",
    title: "Deep Learning Foundations",
    description: "Transformers, embeddings, fine-tuning, model evaluation.",
    icon: "experiment",
    span: "md:col-span-1",
    tags: ["TensorFlow", "PyTorch"],
  },
  {
    section: "Design",
    title: "Tailwind CSS",
    description: "Design systems, motion choreography, accessible components.",
    icon: "palette",
    span: "md:col-span-1",
  },
  {
    section: "DevOps",
    title: "Firebase / AWS",
    description: "CI/CD, observability, edge functions, infra-as-code.",
    icon: "cloud",
    span: "md:col-span-1",
  },
];

export const services = [
  {
    title: "Product Engineering",
    description:
      "End-to-end delivery of web products — from system design to ship. Realtime, AI-augmented, and built to scale.",
    deliverables: [
      "Architecture & technical strategy",
      "Next.js / React frontend",
      "Node.js or Python services",
      "Edge & serverless deployment",
    ],
  },
  {
    title: "Generative AI Integration",
    description:
      "Embed reasoning into your product. RAG, agents, evaluation pipelines and graceful UX for non-deterministic systems.",
    deliverables: [
      "RAG pipelines & vector search",
      "Tool-using agents",
      "Prompt evals & guardrails",
      "Streaming UI patterns",
    ],
  },
  {
    title: "Interaction & Motion Design",
    description:
      "Award-grade interaction design. Custom cursors, scroll choreography, and micro-states that make products feel alive.",
    deliverables: [
      "Motion system & tokens",
      "Lenis / GSAP choreography",
      "Custom cursor & magnetics",
      "Accessibility & reduced-motion",
    ],
  },
];

export const experiences = [
  {
    period: "2024 — Present",
    role: "Founding Engineer",
    company: "Independent — Delowar.dev",
    summary:
      "Building AI-augmented learning and productivity products. Shipping at the seam between elegant frontends and deterministic backends.",
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Developer",
    company: "WebDevWarrior",
    summary:
      "Led the rebuild of the curriculum platform. Migrated to Next.js App Router, introduced motion system, cut TTI by 41%.",
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer",
    company: "Freelance studio collaborations",
    summary:
      "Shipped marketing sites, dashboards and storefronts for studios in DE, US and UK. Established a personal motion system used across 12+ projects.",
  },
];

export const education = [
  {
    period: "2020 — 2024",
    title: "B.A. in Political Science",
    institution: "Begum Rokeya University, Rangpur",
    summary:
      "Studied institutional design, behavioral political theory and computational political science.",
  },
  {
    period: "2022 — 2023",
    title: "Self-directed CS curriculum",
    institution: "OSSU · The Odin Project · DeepLearning.AI",
    summary:
      "Algorithms, systems, distributed computing and applied deep learning.",
  },
];

export const articles = [
  {
    slug: "designing-for-non-deterministic-systems",
    date: "Mar 18, 2025",
    title: "Designing for non-deterministic systems",
    excerpt:
      "AI-powered features ship with a long tail of failure modes. A field-guide to UX patterns that earn user trust without overpromising.",
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    readTime: "9 min read",
  },
  {
    slug: "lenis-the-quiet-revolution-in-scroll",
    date: "Feb 02, 2025",
    title: "Lenis: the quiet revolution in scroll",
    excerpt:
      "Smooth scroll has graduated from gimmick to grammar. A breakdown of why Awwwards portfolios all feel the same — and how to set yours apart.",
    cover:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80",
    readTime: "7 min read",
  },
  {
    slug: "rag-from-scratch-the-pragmatic-version",
    date: "Jan 11, 2025",
    title: "RAG from scratch — the pragmatic version",
    excerpt:
      "Forget the diagrams. Here's the actual recipe for shipping retrieval-augmented generation that survives a real user base.",
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    readTime: "11 min read",
  },
  {
    slug: "the-bento-grid-and-other-2024-clichs",
    date: "Dec 02, 2024",
    title: "The bento grid (and other 2024 clichés)",
    excerpt:
      "On portfolio archetypes, the loop of style copying, and what's worth keeping after the hype cycle ends.",
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    readTime: "5 min read",
  },
];

export const social = {
  email: "hello@delowarhossain.dev",
  github: "https://github.com/mdhossain-2437",
  linkedin: "https://www.linkedin.com/in/mdhossain-2437",
  twitter: "https://twitter.com/delowarhossain",
};
