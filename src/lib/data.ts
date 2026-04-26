/**
 * Real, scraped content from delowarhossain.dev — single source of truth
 * for the portfolio. All copy, project metadata, services, awards, lab
 * experiments, FAQs, inspiration, etc. live here.
 */

export const identity = {
  fullName: "MD Delowar Hossain",
  shortName: "Delowar Hossain",
  domain: "delowarhossain.dev",
  location: "Panchbibi, Joypurhat, Bangladesh",
  timezone: "Asia/Dhaka",
  roles: ["Website Developer", "Full-Stack Developer", "AI Engineer"],
  tagline:
    "Premium creative developer in Bangladesh building immersive digital products — blending creative development, full-stack architecture, and AI-native thinking.",
  mission:
    "To simplify programming for everyone by building tools that bridge the gap between human intent and machine execution.",
  scholarly: "B.A. in Political Science · Scholarly Modernity",
  availability: "Open for select freelance, consulting & product roles",
  responseTime: "Usually within 24 business hours",
  hireableYear: 2026,
};

export const social = {
  email: "hello@delowarhossain.dev",
  github: "https://github.com/mdhossain-2437",
  linkedin: "https://www.linkedin.com/in/mdhossain-2437",
  twitter: "https://twitter.com/delowarhossain",
  facebook: "https://facebook.com/delowarhossain.dev",
  cal: "https://cal.com/delowarhossain",
};

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
  category: ("REACT" | "NEXT.JS" | "AI/ML" | "FULLSTACK" | "FRONTEND" | "OPEN SOURCE" | "MOBILE" | "PWA" | "DATA")[];
  highlights: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "crackit",
    index: "01",
    title: "CrackIt",
    tagline: "AI-powered Bengali competitive-exam preparation PWA.",
    description:
      "Mobile-first Progressive Web App for BCS, Medical, Engineering, Bank and Varsity exam preparation, with AI-driven MCQ practice, mock tests and live competitions in Bengali.",
    role: "Founder · Lead engineer",
    year: "2025",
    href: "/work/crackit",
    cover:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1600&q=80",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Zustand", "PWA"],
    category: ["NEXT.JS", "AI/ML", "PWA", "MOBILE"],
    highlights: [
      { label: "Subjects covered", value: "8 (BCS · Med · Eng · Bank · Varsity)" },
      { label: "Practice modes", value: "4 (Practice / Mock / Live / Analytics)" },
      { label: "Languages", value: "Bangla + EN" },
    ],
  },
  {
    slug: "driverent",
    index: "02",
    title: "DriveRent",
    tagline: "Full-stack car rental platform with JWT and Firebase auth.",
    description:
      "Next.js + TypeScript car rental system covering listings, bookings and analytics. JWT-secured sessions with Google OAuth, interactive booking calendar, and Recharts-driven revenue dashboards.",
    role: "Full-stack engineer",
    year: "2025",
    href: "/work/driverent",
    cover:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=80",
    stack: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Recharts"],
    category: ["NEXT.JS", "FULLSTACK"],
    highlights: [
      { label: "Auth", value: "JWT + Google OAuth" },
      { label: "Charts", value: "Revenue + utilisation" },
      { label: "Booking", value: "Interactive calendar" },
    ],
  },
  {
    slug: "event-explorer",
    index: "03",
    title: "Event Explorer",
    tagline: "Local event discovery on React 18 + Firebase.",
    description:
      "React 18 + Firebase + Vite + Tailwind platform for discovering, reserving and reviewing local events — conferences, workshops, sports and exhibitions.",
    role: "Full-stack engineer",
    year: "2024",
    href: "/work/event-explorer",
    cover:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80",
    stack: ["React 18", "Vite", "Firebase", "Tailwind CSS"],
    category: ["REACT", "FULLSTACK"],
    highlights: [
      { label: "Auto-archival", value: "Date-based, no manual cleanup" },
      { label: "Dedup", value: "URL + venue canonical" },
      { label: "Discovery", value: "Per-category filters" },
    ],
  },
  {
    slug: "auction-gallery",
    index: "04",
    title: "Auction Gallery",
    tagline: "Real-time online auction marketplace UI.",
    description:
      "React + Vite + Tailwind auction gallery with active items, current bids and live time-left counters. WebSocket-driven bid stream, optimistic UI with server-authoritative reconciliation, and 30-second anti-snipe extension window.",
    role: "Full-stack engineer",
    year: "2024",
    href: "/work/auction-gallery",
    cover:
      "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=1600&q=80",
    stack: ["React", "Vite", "Tailwind CSS", "Socket.io", "MongoDB"],
    category: ["REACT", "FULLSTACK"],
    highlights: [
      { label: "Bid latency", value: "<120ms WS round-trip" },
      { label: "Anti-snipe", value: "30s auto-extend" },
      { label: "State", value: "Optimistic + reconciled" },
    ],
  },
  {
    slug: "cookbook",
    index: "05",
    title: "Cookbook",
    tagline: "Personal recipe manager with community discovery.",
    description:
      "A recipe management platform where users add, view, update and delete personal recipes, browse a global feed by cuisine, like recipes and curate a wishlist of dishes to try.",
    role: "Full-stack engineer",
    year: "2024",
    href: "/work/cookbook",
    cover:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    category: ["REACT", "FULLSTACK"],
    highlights: [
      { label: "Cuisines", value: "Global feed" },
      { label: "Personal vault", value: "CRUD + wishlist" },
      { label: "Engagement", value: "Likes + saves" },
    ],
  },
  {
    slug: "tct-themes",
    index: "06",
    title: "TCT Themes",
    tagline: "Open-source VS Code theme collection — 78★.",
    description:
      "Open-source VS Code theme suite under The Compiled Thought, with multiple variants tuned for long coding sessions. The most-starred repository in my GitHub. Coordinated palette across 12+ tuned languages with explicit semantic token roles.",
    role: "Maintainer",
    year: "2024",
    href: "/work/tct-themes",
    github: "https://github.com/mdhossain-2437",
    cover:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
    stack: ["VS Code Theme API", "TypeScript", "Token JSON"],
    category: ["OPEN SOURCE"],
    highlights: [
      { label: "GitHub stars", value: "78★" },
      { label: "Languages tuned", value: "12+" },
      { label: "License", value: "MIT" },
    ],
  },
  {
    slug: "swiftcart",
    index: "07",
    title: "SwiftCart",
    tagline: "Streamed React e-commerce storefront on FakeStore API.",
    description:
      "Complete e-commerce front-end built with HTML, CSS and vanilla JavaScript on top of the FakeStore API — category filters, product modal, persistent cart and full mobile responsiveness. Later migrated to streamed React with Suspense — TTI -54%, LCP -44%.",
    role: "Frontend engineer",
    year: "2024",
    href: "/work/swiftcart",
    cover:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80",
    stack: ["React 18", "Next.js", "Suspense", "Tailwind", "Stripe"],
    category: ["REACT", "FRONTEND"],
    highlights: [
      { label: "TTI", value: "5.2s → 2.4s (-54%)" },
      { label: "LCP", value: "3.4s → 1.9s (-44%)" },
      { label: "JS shipped", value: "412KB → 188KB (-54%)" },
    ],
  },
  {
    slug: "advanced-adblocker",
    index: "08",
    title: "Advanced AdBlocker",
    tagline: "Production-style Android system ad-blocker (Kotlin).",
    description:
      "Android Studio project skeleton with an Aho-Corasick filter compiler, WorkManager-based filter updater, DNS blocker and Settings / Logs UI — a production-shape starter for system-wide blocking on Android.",
    role: "Maintainer",
    year: "2024",
    href: "/work/advanced-adblocker",
    cover:
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?auto=format&fit=crop&w=1600&q=80",
    stack: ["Kotlin", "Android", "OkHttp", "WorkManager"],
    category: ["MOBILE", "OPEN SOURCE"],
    highlights: [
      { label: "Filter engine", value: "Aho-Corasick" },
      { label: "Updater", value: "WorkManager" },
      { label: "Scope", value: "DNS + system" },
    ],
  },
];

export type Skill = {
  section: string;
  title: string;
  description: string;
  icon: string;
  span: string;
  highlight?: boolean;
  tags?: string[];
};

export const skills: Skill[] = [
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
    title: "Node.js · Python · FastAPI",
    description:
      "Express, FastAPI services, queue workers, websocket fanout, Postgres + pgvector.",
    icon: "dns",
    span: "md:col-span-1",
  },
  {
    section: "Research",
    title: "Deep Learning Foundations",
    description:
      "Transformers, embeddings, fine-tuning, model evaluation.",
    icon: "experiment",
    span: "md:col-span-1",
    tags: ["TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    section: "Design",
    title: "Tailwind · Figma · Motion",
    description:
      "Design systems, motion choreography, accessible components, GSAP + Framer Motion.",
    icon: "palette",
    span: "md:col-span-1",
  },
  {
    section: "DevOps",
    title: "Vercel · AWS · Docker",
    description:
      "CI/CD, observability, edge functions, infra-as-code, GitHub Actions pipelines.",
    icon: "cloud",
    span: "md:col-span-1",
  },
];

export const skillDomains = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vue.js", "GSAP", "Framer Motion"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    name: "AI / ML",
    items: ["LangChain", "OpenAI API", "TensorFlow", "PyTorch", "Hugging Face", "RAG Systems"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Redis", "Drizzle ORM"],
  },
  {
    name: "DevOps",
    items: ["AWS", "Firebase", "Docker", "Vercel", "CI/CD", "GitHub Actions"],
  },
  {
    name: "Design",
    items: ["Figma", "Tailwind CSS", "Framer", "Adobe XD", "Sketch", "UI/UX Principles"],
  },
];

export type Service = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Web Development",
    description:
      "End-to-end web application development for startups, businesses and modern digital products. From architecture to deployment, I build scalable systems that are fast, maintainable and designed to grow with real usage.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    deliverables: [
      "Architecture & technical strategy",
      "Next.js / React frontend",
      "Node.js or Python services",
      "Edge & serverless deployment",
    ],
  },
  {
    index: "02",
    title: "AI Integration",
    description:
      "AI integration for real product workflows, not just demos. From retrieval systems and agents to intelligent interfaces and automation layers, I build AI-powered features that solve clear business and usability problems.",
    tags: ["LangChain", "OpenAI", "RAG", "Fine-tuning"],
    deliverables: [
      "RAG pipelines & vector search",
      "Tool-using agents",
      "Prompt evals & guardrails",
      "Streaming UI patterns",
    ],
  },
  {
    index: "03",
    title: "UI / UX Design",
    description:
      "Creative UI and UX systems shaped for premium digital products. Every screen, hierarchy and interaction is designed to support brand clarity, conversion and a stronger user experience without sacrificing originality.",
    tags: ["Figma", "Framer", "Design Systems", "Prototyping"],
    deliverables: [
      "Brand-aligned UI system",
      "High-fidelity prototypes",
      "Motion + interaction tokens",
      "Accessibility audit",
    ],
  },
  {
    index: "04",
    title: "Performance Optimization",
    description:
      "Performance work focused on real outcomes: stronger Core Web Vitals, better loading behaviour, cleaner render paths and smoother interaction quality across complex frontend applications.",
    tags: ["Core Web Vitals", "Lighthouse", "Bundle Analysis", "Caching"],
    deliverables: [
      "CWV diagnostic report",
      "Bundle + render-path audit",
      "Edge caching plan",
      "Before/after metrics",
    ],
  },
  {
    index: "05",
    title: "Technical Consulting",
    description:
      "Technical consulting for founders and teams who need clearer architecture decisions, safer delivery plans and better technical direction before building or scaling product systems.",
    tags: ["Architecture", "Code Review", "Tech Stack", "Roadmap"],
    deliverables: [
      "Architecture review",
      "Code-base health report",
      "Stack & vendor selection",
      "12-week delivery roadmap",
    ],
  },
  {
    index: "06",
    title: "API Development",
    description:
      "Robust API systems built for product teams, integrations and internal platforms. I design REST and GraphQL layers with scalability, security and developer experience in mind.",
    tags: ["REST", "GraphQL", "OpenAPI", "Security"],
    deliverables: [
      "OpenAPI specification",
      "Auth + rate limiting",
      "Schema & resolvers",
      "Integration test suite",
    ],
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$2,500",
    unit: "/ project",
    description: "Perfect for small businesses and personal projects.",
    features: [
      "Landing Page Design",
      "Responsive Development",
      "SEO Optimisation",
      "2 Revision Rounds",
      "1 Month Support",
    ],
    cta: "Get started",
    badge: undefined,
  },
  {
    name: "Professional",
    price: "$7,500",
    unit: "/ project",
    description: "For growing businesses needing full-stack solutions.",
    features: [
      "Multi-Page Application",
      "Backend API Development",
      "Database Design",
      "AI Feature Integration",
      "CI / CD Pipeline",
      "3 Months Support",
    ],
    cta: "Most popular",
    badge: "RECOMMENDED",
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "/ quote",
    description: "Tailored solutions for complex enterprise needs.",
    features: [
      "Full System Architecture",
      "Team Augmentation",
      "Custom AI Solutions",
      "Performance Auditing",
      "Dedicated Support",
      "SLA Agreement",
    ],
    cta: "Let's talk",
    badge: undefined,
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  tools: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    duration: "1–2 days",
    description:
      "Deep dive into the business, goals, competitors and users. Define project scope, success metrics and technical requirements.",
    deliverables: [
      "Project brief",
      "Competitive analysis",
      "Technical requirements spec",
      "Timeline + milestones",
    ],
    tools: ["Notion", "Figma", "Miro"],
  },
  {
    step: "02",
    title: "Architecture & Design",
    duration: "3–5 days",
    description:
      "System architecture planning, database schema design, API contracts, and high-fidelity UI / UX with interactive prototypes.",
    deliverables: [
      "System architecture diagram",
      "Database schema",
      "API documentation",
      "Figma prototypes",
      "Design-system tokens",
    ],
    tools: ["Figma", "Excalidraw", "Storybook"],
  },
  {
    step: "03",
    title: "Development Sprint",
    duration: "2–8 weeks",
    description:
      "Agile development in weekly sprints. You get a staging URL from day one with continuous deployments — visible progress in real time.",
    deliverables: [
      "Working staging environment",
      "Weekly demo recordings",
      "Git repository access",
      "Sprint reports",
    ],
    tools: ["VS Code", "GitHub", "Vercel", "Docker"],
  },
  {
    step: "04",
    title: "Testing & QA",
    duration: "3–5 days",
    description:
      "Comprehensive testing — unit, integration, E2E, performance audits, accessibility and security scanning.",
    deliverables: [
      "Test coverage report",
      "Lighthouse audit",
      "WCAG compliance report",
      "Security scan results",
    ],
    tools: ["Playwright", "Vitest", "Lighthouse", "axe-core"],
  },
  {
    step: "05",
    title: "Launch & Deploy",
    duration: "1–2 days",
    description:
      "Production deployment with zero-downtime strategy, DNS configuration, SSL, CDN tuning and monitoring instrumentation.",
    deliverables: [
      "Production deployment",
      "Monitoring dashboard",
      "Runbook documentation",
      "DNS + SSL configuration",
    ],
    tools: ["Vercel", "Cloudflare", "Sentry", "Grafana"],
  },
  {
    step: "06",
    title: "Support & Growth",
    duration: "Ongoing",
    description:
      "Post-launch monitoring, bug fixes, performance optimisation, and feature iterations driven by analytics + business feedback.",
    deliverables: [
      "Monthly performance reports",
      "Bug-fix SLA",
      "Feature recommendations",
      "Analytics insights",
    ],
    tools: ["Sentry", "PostHog", "Vercel Analytics", "Grafana"],
  },
];

export type StackItem = {
  group: string;
  name: string;
  cadence: "Daily" | "Weekly" | "Monthly";
  description: string;
};

export const stackItems: StackItem[] = [
  {
    group: "Development",
    name: "VS Code",
    cadence: "Daily",
    description:
      "Primary editor. Vim keybindings, GitHub Copilot, ESLint + Prettier, Error Lens, custom React + MERN snippets.",
  },
  {
    group: "Development",
    name: "Neovim",
    cadence: "Daily",
    description:
      "Terminal editor for SSH sessions and config edits. LazyVim baseline with a custom motion + search layer.",
  },
  {
    group: "Development",
    name: "iTerm2 + Zsh",
    cadence: "Daily",
    description:
      "Oh My Zsh, Starship prompt, aliases for Vite / Express / Drizzle workflows.",
  },
  {
    group: "Development",
    name: "GitHub",
    cadence: "Daily",
    description:
      "Source control, PR review, GitHub Actions CI for typecheck / build / static-SEO / route-coverage.",
  },
  {
    group: "Development",
    name: "Docker",
    cadence: "Weekly",
    description:
      "Local Postgres + Redis + Mailhog stack for inquiry-form testing; multi-stage prod images.",
  },
  {
    group: "Development",
    name: "Insomnia",
    cadence: "Weekly",
    description:
      "REST + GraphQL client with shared environment files and inline JS for token refresh.",
  },
  {
    group: "Design",
    name: "Figma",
    cadence: "Daily",
    description:
      "Visual source of truth — variants, auto-layout, tokens, Dev Mode handoff.",
  },
  {
    group: "Design",
    name: "Storybook",
    cadence: "Weekly",
    description:
      "Component development + visual regression for the lab and editorial primitives.",
  },
  {
    group: "Design",
    name: "Adobe Photoshop",
    cadence: "Monthly",
    description:
      "Image retouching, asset optimisation and creative compositing for hero imagery.",
  },
  {
    group: "Design",
    name: "Excalidraw",
    cadence: "Weekly",
    description:
      "Hand-drawn architecture diagrams and quick wireframes for brainstorming.",
  },
  {
    group: "Productivity",
    name: "Notion",
    cadence: "Daily",
    description:
      "Knowledge base, project briefs, client portals, and the personal motion / a11y wiki.",
  },
  {
    group: "Productivity",
    name: "Linear",
    cadence: "Daily",
    description:
      "Issue tracking, sprint planning, and the cycle view that drives every PR sequence.",
  },
  {
    group: "Productivity",
    name: "Slack",
    cadence: "Daily",
    description:
      "Client channels, automation hooks, and CI / Linear / GitHub bot integrations.",
  },
  {
    group: "Productivity",
    name: "Cal.com",
    cadence: "Weekly",
    description:
      "Discovery calls + workshop scheduling. Routed from the inquiry forms.",
  },
  {
    group: "Productivity",
    name: "Loom",
    cadence: "Weekly",
    description:
      "Async walkthroughs for clients and design reviews — replaces three weekly calls with five-minute videos.",
  },
  {
    group: "Infrastructure",
    name: "Vercel",
    cadence: "Daily",
    description:
      "Primary deploy target. Fluid compute, Vercel Functions, AVIF assets, Web Analytics + Speed Insights.",
  },
  {
    group: "Infrastructure",
    name: "AWS",
    cadence: "Weekly",
    description:
      "EC2, S3, Lambda, CloudFront, RDS for non-Vercel surfaces and enterprise integrations.",
  },
  {
    group: "Infrastructure",
    name: "Cloudflare",
    cadence: "Weekly",
    description:
      "DNS, CDN, DDoS protection, and edge workers for region-aware redirects.",
  },
  {
    group: "Infrastructure",
    name: "Supabase",
    cadence: "Weekly",
    description: "Managed Postgres + auth + realtime for fast-moving prototypes.",
  },
  {
    group: "Infrastructure",
    name: "Resend",
    cadence: "Weekly",
    description:
      "Transactional email for the inquiry forms — sender domain verified, audit trail in Resend dashboard.",
  },
  {
    group: "Monitoring",
    name: "Sentry",
    cadence: "Daily",
    description:
      "Error tracking, performance monitoring, release health, and source-map upload.",
  },
  {
    group: "Monitoring",
    name: "Grafana",
    cadence: "Weekly",
    description:
      "Custom dashboards for server metrics, API latency, and alerting thresholds.",
  },
  {
    group: "Monitoring",
    name: "PostHog",
    cadence: "Weekly",
    description:
      "Product analytics, session replay, feature flags, and A/B testing.",
  },
  {
    group: "Monitoring",
    name: "UptimeRobot",
    cadence: "Daily",
    description:
      "Uptime monitoring with instant alerts for production endpoints.",
  },
  {
    group: "Hardware",
    name: 'MacBook Pro 16"',
    cadence: "Daily",
    description:
      "M3 Pro, 36 GB RAM, 1 TB SSD — primary development + design machine.",
  },
  {
    group: "Hardware",
    name: "Dell U2723QE",
    cadence: "Daily",
    description: '27" 4K USB-C monitor for Figma + VS Code side-by-side workflows.',
  },
  {
    group: "Hardware",
    name: "Keychron Q1 Pro",
    cadence: "Daily",
    description:
      "75% mechanical keyboard with Gateron Jupiter Browns; QMK / VIA layers.",
  },
  {
    group: "Hardware",
    name: "Sony WH-1000XM5",
    cadence: "Daily",
    description:
      "Noise-cancelling headphones for deep-focus blocks and client calls.",
  },
];

export type Award = {
  year: string;
  title: string;
  project: string;
  category: "DESIGN" | "UI/UX" | "PRODUCT" | "DEVELOPMENT" | "INNOVATION" | "COMMUNITY" | "CONTENT";
};

export const awards: Award[] = [
  {
    year: "2024",
    title: "Awwwards — Honorable Mention",
    project: "Personal Portfolio v3",
    category: "DESIGN",
  },
  {
    year: "2024",
    title: "CSS Design Awards — Best UI Design",
    project: "AI Content Studio",
    category: "UI/UX",
  },
  {
    year: "2024",
    title: "Product Hunt — #3 Product of the Day",
    project: "AI Color Palette Generator",
    category: "PRODUCT",
  },
  {
    year: "2024",
    title: "FWA — Site of the Day",
    project: "WebDevWarrior Platform",
    category: "DEVELOPMENT",
  },
  {
    year: "2023",
    title: "Awwwards — Developer Award",
    project: "Kothopokothon Chat",
    category: "DEVELOPMENT",
  },
  {
    year: "2023",
    title: "CSS Design Awards — Best Innovation",
    project: "Gesture Navigation Lab",
    category: "INNOVATION",
  },
  {
    year: "2023",
    title: "Behance Featured Project",
    project: "Recipe Book App",
    category: "DESIGN",
  },
  {
    year: "2023",
    title: "GitHub Star — Open Source Contributor",
    project: "Multiple Projects",
    category: "COMMUNITY",
  },
  {
    year: "2022",
    title: "Dev.to Top 7 — Week of Dec 12",
    project: "Building Accessible React Components",
    category: "CONTENT",
  },
  {
    year: "2022",
    title: "Hashnode Featured Article",
    project: "PostgreSQL Performance Deep Dive",
    category: "CONTENT",
  },
];

export const awardStats = [
  { value: "10", label: "Industry awards" },
  { value: "3", label: "Awwwards mentions" },
  { value: "2", label: "CSS Design Awards" },
  { value: "1", label: "Product Hunt top 3" },
  { value: "50+", label: "Open-source stars" },
  { value: "15K+", label: "Article reads" },
];

export type LabExperiment = {
  index: string;
  title: string;
  status: "LIVE" | "BETA" | "ARCHIVED";
  category: "WEBGL" | "AI / ML" | "INTERACTION" | "GENERATIVE" | "CSS";
  year: string;
  description: string;
  stack: string[];
  metrics: { value: string; label: string }[];
};

export const labExperiments: LabExperiment[] = [
  {
    index: "01",
    title: "Particle Morphing Engine",
    status: "LIVE",
    category: "WEBGL",
    year: "2024",
    description:
      "Real-time particle system that morphs between 3D geometric shapes using GPU-accelerated shaders. Built with Three.js and custom GLSL fragment shaders.",
    stack: ["Three.js", "WebGL", "GLSL", "React"],
    metrics: [
      { value: "60", label: "FPS" },
      { value: "50K+", label: "Particles" },
      { value: "12KB", label: "Size" },
    ],
  },
  {
    index: "02",
    title: "AI Color Palette Generator",
    status: "LIVE",
    category: "AI / ML",
    year: "2024",
    description:
      "Neural network-powered color palette generator that creates harmonious colour schemes from text descriptions using fine-tuned language models.",
    stack: ["OpenAI API", "Next.js", "Tailwind CSS", "Vercel AI SDK"],
    metrics: [
      { value: "10K+", label: "Palettes" },
      { value: "94%", label: "Accuracy" },
      { value: "200ms", label: "Latency" },
    ],
  },
  {
    index: "03",
    title: "Gesture-Based Navigation",
    status: "BETA",
    category: "INTERACTION",
    year: "2024",
    description:
      "Experimental hand-tracking navigation system using MediaPipe and webcam input. Navigate websites with pinch, swipe and point gestures.",
    stack: ["MediaPipe", "TensorFlow.js", "React", "WebRTC"],
    metrics: [
      { value: "12", label: "Gestures" },
      { value: "89%", label: "Accuracy" },
      { value: "16ms", label: "Latency" },
    ],
  },
  {
    index: "04",
    title: "Procedural Terrain Generator",
    status: "LIVE",
    category: "GENERATIVE",
    year: "2024",
    description:
      "Real-time procedural terrain generation using Perlin noise, erosion simulation and biome mapping. Infinite landscapes rendered at 60fps.",
    stack: ["Three.js", "Web Workers", "SharedArrayBuffer", "WASM"],
    metrics: [
      { value: "4K", label: "Resolution" },
      { value: "8", label: "Biomes" },
      { value: "8ms", label: "Render time" },
    ],
  },
  {
    index: "05",
    title: "Voice-Controlled Interface",
    status: "ARCHIVED",
    category: "AI / ML",
    year: "2023",
    description:
      "Natural language voice interface for web applications. Speak commands to navigate, search and interact with UI components.",
    stack: ["Web Speech API", "NLP.js", "React", "Zustand"],
    metrics: [
      { value: "40+", label: "Commands" },
      { value: "3", label: "Languages" },
      { value: "4.2%", label: "WER" },
    ],
  },
  {
    index: "06",
    title: "CSS Houdini Paint Worklets",
    status: "LIVE",
    category: "CSS",
    year: "2023",
    description:
      "Collection of custom CSS Paint API worklets for generative backgrounds, borders and decorations. Drop-in effects with zero JavaScript runtime cost.",
    stack: ["CSS Houdini", "Paint API", "Worklets", "PostCSS"],
    metrics: [
      { value: "15", label: "Worklets" },
      { value: "0ms JS", label: "Runtime" },
      { value: "Chrome/Edge", label: "Browsers" },
    ],
  },
];

export const experiences = [
  {
    period: "2024 — Present",
    role: "AI Integration Specialist",
    company: "Independent — Delowar.dev",
    summary:
      "Leading generative AI integrations into enterprise web workflows, specialising in LangChain and OpenAI API implementations.",
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Developer",
    company: "Freelance studio collaborations",
    summary:
      "Built scalable web applications serving thousands of users, focusing on React, Next.js, Node.js and cloud infrastructure.",
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer",
    company: "SaaS product collaborations",
    summary:
      "Developed high-performance user interfaces for SaaS products, honing expertise in modern JavaScript ecosystems.",
  },
  {
    period: "2021 — 2022",
    role: "Self-Taught Engineer",
    company: "B.A. Political Science track",
    summary:
      "Embarked on the coding journey, learning web development fundamentals while completing a B.A. in Political Science.",
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

export type Article = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  cover: string;
  readTime: string;
  category: string;
};

export const articles: Article[] = [
  {
    slug: "designing-for-non-deterministic-systems",
    date: "Mar 18, 2025",
    title: "Designing for non-deterministic systems",
    excerpt:
      "AI-powered features ship with a long tail of failure modes. A field-guide to UX patterns that earn user trust without overpromising.",
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    readTime: "9 min read",
    category: "AI · UX",
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
    category: "Frontend",
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
    category: "AI",
  },
  {
    slug: "the-bento-grid-and-other-2024-cliches",
    date: "Dec 02, 2024",
    title: "The bento grid (and other 2024 clichés)",
    excerpt:
      "On portfolio archetypes, the loop of style copying and what's worth keeping after the hype cycle ends.",
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    readTime: "5 min read",
    category: "Design",
  },
  {
    slug: "building-accessible-react-components",
    date: "Dec 12, 2022",
    title: "Building Accessible React Components",
    excerpt:
      "What WCAG actually demands from your design system, and the React patterns that pass an axe-core audit without ceremony.",
    cover:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80",
    readTime: "8 min read",
    category: "Accessibility",
  },
  {
    slug: "postgres-performance-deep-dive",
    date: "Aug 19, 2022",
    title: "PostgreSQL performance deep dive",
    excerpt:
      "EXPLAIN ANALYZE, indexes that actually help, and the four query patterns that quietly kill production performance.",
    cover:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1600&q=80",
    readTime: "12 min read",
    category: "Backend",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  project: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO · TechVenture Labs",
    project: "AI Analytics Dashboard",
    quote:
      "Delowar shipped a production-grade RAG layer in weeks. The interface choices made an AI tool feel calm and trustworthy — exactly what enterprise users needed.",
  },
  {
    name: "Marcus Thompson",
    role: "Founder · BuildFast Inc.",
    project: "Streamed Storefront",
    quote:
      "We saw a 54% drop in TTI after one sprint. The Suspense architecture he proposed saved months of internal debate.",
  },
  {
    name: "Priya Patel",
    role: "Head of Product · EduTech Solutions",
    project: "Bengali Exam Prep PWA",
    quote:
      "Bengali typography, offline-first PWA and live competitions — all delivered with the design discipline we couldn't find locally.",
  },
  {
    name: "Aiko Yamamoto",
    role: "Creative Director · Studio Noir",
    project: "Awwwards-grade portfolio site",
    quote:
      "Editorial restraint with technical depth. Most engineers can't sit in this Venn diagram. Delowar lives there.",
  },
];

export const homeStats = [
  { value: "40+", label: "Projects delivered" },
  { value: "5+", label: "Years experience" },
  { value: "98%", label: "Client satisfaction" },
  { value: "2.4×", label: "Avg. perf. gain" },
];

export const brands = [
  "Google", "Microsoft", "OpenAI", "Adobe", "Apple", "Amazon",
  "Meta", "Netflix", "Spotify", "Stripe", "Shopify", "Figma",
  "Notion", "GitHub", "Cloudflare", "Vercel", "Samsung", "Tesla",
  "TikTok", "Uber", "Dropbox", "bKash", "Nagad", "Pathao",
  "Chaldal", "ShopUp", "Brain Station 23", "10 Minute School",
  "REDX", "Daraz", "Sheba.xyz", "Truck Lagbe", "Grameenphone",
  "Robi", "Banglalink", "Walton", "ShareTrip", "BDjobs",
  "PriyoShop", "Bongo", "SSL Wireless",
];

export type FaqItem = { q: string; a: string; group: string };

export const faqs: FaqItem[] = [
  {
    group: "Working together",
    q: "What types of projects do you take on?",
    a: "Premium product builds, AI-native systems, immersive marketing sites, and platform engagements where craft and execution discipline both matter. Both startup and enterprise scale.",
  },
  {
    group: "Working together",
    q: "What's your typical project timeline?",
    a: "Discovery + architecture lands in ~1 week. Most builds run 2–8 weeks of sprinting, plus 3–5 days of QA + launch. Long-term retainers and team-augmentation engagements run quarterly.",
  },
  {
    group: "Working together",
    q: "Do you work with international clients?",
    a: "Yes — North America, Europe, MENA and APAC clients regularly. Async-first communication, weekly Loom walkthroughs, and a shared staging URL from day one.",
  },
  {
    group: "Working together",
    q: "Can you work with my existing team?",
    a: "Absolutely. I plug into existing repos, design systems and rituals — Slack channel, Linear cycles, GitHub PR review. Team-augmentation is one of the most frequent engagement modes.",
  },
  {
    group: "Technical",
    q: "What's your primary tech stack?",
    a: "TypeScript end-to-end. Next.js + React on the front, Node.js / Python (FastAPI) on the back, Postgres / Supabase for data, Vercel + Cloudflare for delivery, LangChain + OpenAI for AI.",
  },
  {
    group: "Technical",
    q: "Do you build AI-powered features?",
    a: "Yes — RAG systems, tool-using agents, intelligent search, AI-assisted authoring. Always with eval pipelines, guardrails and graceful UX for non-deterministic outputs.",
  },
  {
    group: "Technical",
    q: "How do you handle testing?",
    a: "Unit + integration with Vitest, E2E with Playwright, accessibility with axe-core, performance with Lighthouse CI, and a per-PR coverage gate. Test plans land before code.",
  },
  {
    group: "Technical",
    q: "Do you provide code documentation?",
    a: "Every engagement ships with a README, architecture diagram, runbook, and Storybook for shared components. Internal Notion handover is standard for teams.",
  },
  {
    group: "Business",
    q: "How does pricing work?",
    a: "Three tiers: Starter ($2,500), Professional ($7,500) and Enterprise (custom). Larger or longer engagements move to weekly retainers. Day-rate consulting is also available.",
  },
  {
    group: "Business",
    q: "What are your payment terms?",
    a: "50% on kick-off, 50% on launch for fixed-scope. Monthly invoices for retainers. Stripe + bank transfer accepted; full receipts and tax documentation included.",
  },
  {
    group: "Business",
    q: "Do you offer post-launch support?",
    a: "Yes — every Professional tier includes 3 months of bug-fix support. Long-term SLAs (uptime guarantees, response windows) are part of Enterprise engagements.",
  },
  {
    group: "Business",
    q: "What happens if the project scope changes?",
    a: "Changes are tracked in the change log; <10% scope drift is absorbed; larger changes get a quick re-estimate (24-hour turnaround) before any new work begins.",
  },
  {
    group: "Process",
    q: "How do you communicate during projects?",
    a: "Slack for async, Linear for tasks, weekly Loom demo, monthly retro. Synchronous calls are reserved for kick-off, milestone gates and launch dry-runs.",
  },
  {
    group: "Process",
    q: "Can I see progress during development?",
    a: "Yes — staging URL with continuous deployment from day one, weekly demo recordings, and read access to the Linear cycle and GitHub repo throughout.",
  },
  {
    group: "Process",
    q: "What if I'm not happy with the result?",
    a: "Two revision rounds on Starter, three on Professional. If a milestone is missed, we run a written post-mortem and adjust scope before continuing — no surprise billing.",
  },
  {
    group: "Process",
    q: "Do you sign NDAs?",
    a: "Yes — mutual NDAs are standard before any pre-discovery technical conversation. Custom NDAs and DPAs (GDPR / CCPA) are also supported.",
  },
];

export type Inspiration = {
  category: string;
  name: string;
  role?: string;
  description: string;
};

export const inspirationPeople: Inspiration[] = [
  {
    category: "Developers",
    name: "Wes Bos",
    role: "Full-stack educator",
    description:
      "Makes complex web concepts accessible through practical, project-based teaching. The reference for how to teach modern JS.",
  },
  {
    category: "Developers",
    name: "Theo Browne",
    role: "TypeScript advocate · founder of T3",
    description:
      "Pushes the TypeScript ecosystem forward with strong opinions on type-first DX. The T3 Stack changed what 'just sane defaults' means.",
  },
  {
    category: "Developers",
    name: "Kent C. Dodds",
    role: "Testing expert + educator",
    description:
      "Champions testing patterns and built Testing Library — the project that fixed how an entire generation tests React.",
  },
  {
    category: "Designers",
    name: "Tobias van Schneider",
    role: "Designer + creator",
    description:
      "Bold visual design paired with thoughtful product thinking. Semplice empowered designers to own their portfolios end-to-end.",
  },
  {
    category: "Designers",
    name: "Brittany Chiang",
    role: "Software engineer",
    description:
      "Sets the gold standard for developer portfolios. Surface-level minimalism, depth-level engineering.",
  },
  {
    category: "Designers",
    name: "Adham Dannaway",
    role: "UI / UX designer",
    description:
      "Bridges the gap between design and front-end engineering — practical, opinionated, never preachy.",
  },
  {
    category: "Thinkers",
    name: "Paul Graham",
    role: "Entrepreneur + essayist",
    description:
      "Essays on startups, technology, and clear thinking that shape how I approach product problems and hiring decisions.",
  },
  {
    category: "Thinkers",
    name: "Sahil Lavingia",
    role: "Founder of Gumroad",
    description:
      "Building in public; sustainable, human-scale businesses are valid and valuable — and worth optimising for over hypergrowth.",
  },
  {
    category: "Thinkers",
    name: "Andrej Karpathy",
    role: "AI researcher",
    description:
      "Makes deep learning legible through exceptional teaching and open-source contributions. The neural networks playlist alone is worth the subscription.",
  },
];

export const designSources = [
  { tag: "Platform", name: "Awwwards", note: "Definitive source for web design excellence. Daily inspiration and quality benchmarks I measure my own portfolio against." },
  { tag: "Community", name: "Dribbble", note: "Visual design exploration and discovering new UI patterns + micro-interactions before they trickle into product UI." },
  { tag: "Movement", name: "Brutalist Websites", note: "Raw, honest web design that prioritises content and function over decoration. A useful counterweight to over-polished SaaS visuals." },
  { tag: "Curation", name: "Minimal Gallery", note: "Curated minimal websites that prove restraint amplifies content. Most of the typography decisions on this site borrowed from here." },
  { tag: "Portfolio Hub", name: "Layers.to", note: "How other designers + engineers present their work and personal brand. Useful when stress-testing your own positioning." },
  { tag: "Gallery", name: "Land-book", note: "Curated landing-page designs for understanding conversion-optimised visual hierarchies and CTA placement." },
];

export const books = [
  { topic: "Design", title: "Refactoring UI", author: "Adam Wathan & Steve Schoger" },
  { topic: "Engineering", title: "Clean Code", author: "Robert C. Martin" },
  { topic: "UX", title: "Don't Make Me Think", author: "Steve Krug" },
  { topic: "Engineering", title: "The Pragmatic Programmer", author: "David Thomas & Andrew Hunt" },
  { topic: "Psychology", title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
  { topic: "Creativity", title: "Show Your Work!", author: "Austin Kleon" },
  { topic: "Engineering", title: "Designing Data-Intensive Applications", author: "Martin Kleppmann" },
  { topic: "AI / ML", title: "AI Engineering", author: "Chip Huyen" },
];

export const nowItems = [
  { tag: "Building", text: "An AI-native creative coding playground for the lab — Three.js + GPU-driven layout primitives." },
  { tag: "Learning", text: "LLM evaluation pipelines, agent reliability and graph-based RAG (LangGraph)." },
  { tag: "Reading", text: "AI Engineering by Chip Huyen, Designing Data-Intensive Applications, and a slow re-read of The Pragmatic Programmer." },
  { tag: "Listening", text: "Lex Fridman, Latent Space, the Vercel Ship recap and a lot of synthwave + lo-fi while shipping." },
  { tag: "Shipping", text: "Iterating on CrackIt + DriveRent, plus this very portfolio — public roadmap on the lab page." },
  { tag: "Avoiding", text: "Hype-driven framework hops. Keeping the stack boring on the boundary, creative at the surface." },
];

export const homeChapters = [
  { kicker: "Identity", title: "About Delowar Hossain", body: "Background, philosophy, journey, and the thinking behind the work across development, AI and interface design.", href: "/about" },
  { kicker: "Case studies", title: "Work and results", body: "Project case studies covering product architecture, frontend systems, motion design and measurable outcomes.", href: "/work" },
  { kicker: "Commercial", title: "Services and collaboration", body: "Full-stack development, AI integration, performance systems and creative product execution for modern teams.", href: "/services" },
  { kicker: "Public code", title: "Open source and GitHub", body: "Public repositories, libraries and tooling — TCT Themes, lab experiments and developer-facing utilities.", href: "https://github.com/mdhossain-2437" },
  { kicker: "Lab", title: "Experiments and prototypes", body: "Creative coding experiments, prototypes and technical explorations. Where ideas get tested before they become products.", href: "/lab" },
  { kicker: "Process", title: "How I work", body: "Discovery, architecture, sprint, QA, launch, support — the six-step delivery model behind every engagement.", href: "/process" },
];
