export type ProjectLink = {
  label: string;
  href: string;
};

export type Accent = "violet" | "sky" | "rose";

export type LocalizedText = { en: string; pt: string };

export type Project = {
  slug: string;
  name: string;
  pitch: LocalizedText;
  problem: LocalizedText;
  role: LocalizedText;
  stack: string[];
  decision: LocalizedText;
  status?: LocalizedText;
  links?: ProjectLink[];
  accent: Accent;
};

/**
 * Order applies to both audiences this site targets (general full-stack
 * recruiters and IT/help-desk-dev recruiters) — Kyma leads either way since
 * it's the most role-relevant project for both. Reorder this array directly
 * if a given audience ever needs a different sequence.
 */
export const projects: Project[] = [
  {
    slug: "kyma",
    name: "Kyma",
    pitch: {
      en: "Configurable internal IT toolkit for ticket tracking, asset/inventory management, and admin dashboards in one platform.",
      pt: "Kit de ferramentas de TI interno e configurável para tickets, gestão de ativos/inventário e painéis administrativos, tudo em uma plataforma.",
    },
    problem: {
      en: "IT teams end up running separate tools for tickets, assets, and reporting. Kyma puts all three behind one configurable, connector-based platform instead.",
      pt: "Times de TI acabam usando ferramentas separadas para tickets, ativos e relatórios. O Kyma reúne os três atrás de uma plataforma configurável baseada em conectores.",
    },
    role: {
      en: "Solo developer — product, architecture & integrations",
      pt: "Desenvolvedor solo — produto, arquitetura e integrações",
    },
    stack: [],
    status: {
      en: "Early build — repo set up, Figma mockups in progress",
      pt: "Em desenvolvimento inicial — repositório criado, mockups no Figma em andamento",
    },
    decision: {
      en: "The integrations are built as connectors, not a single hard-coded workflow, so Kyma can map onto whatever ticketing or asset system a team already runs. First connector is for TeamDynamix, so it fits into the infrastructure IT departments already have instead of asking them to rip it out.",
      pt: "As integrações são construídas como conectores, não como um fluxo único fixo no código, para que o Kyma se adapte a qualquer sistema de tickets ou ativos que um time já use. O primeiro conector é para o TeamDynamix, para se encaixar na infraestrutura que os times de TI já têm em vez de pedir para trocarem tudo.",
    },
    links: [{ label: "GitHub", href: "https://github.com/Kensyy/kyma" }],
    accent: "violet",
  },
  {
    slug: "atlas",
    name: "Atlas",
    pitch: {
      en: "A platform for discovering, tracking, reviewing, and discussing movies & TV shows.",
      pt: "Uma plataforma para descobrir, acompanhar, avaliar e discutir filmes e séries.",
    },
    problem: {
      en: "Existing trackers like Letterboxd and TMDB are either too niche or too shallow. Atlas puts discovery, social features, and personal tracking in one app.",
      pt: "Ferramentas existentes como Letterboxd e TMDB são muito nichadas ou rasas demais. O Atlas reúne descoberta, recursos sociais e acompanhamento pessoal em um só app.",
    },
    role: {
      en: "Solo full-stack developer — product, backend & frontend",
      pt: "Desenvolvedor full-stack solo — produto, backend e frontend",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Node.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
    ],
    decision: {
      en: "It's a monorepo from day one: apps/web, apps/mobile, and shared packages/ui, so web and mobile share types, API clients, and UI without duplicating logic. The MVP leaves out streaming-availability lookups on purpose. Getting a focused core out — discovery, tracking, reviews — mattered more than matching every feature a mature tracker has.",
      pt: "É um monorepo desde o início: apps/web, apps/mobile e packages/ui compartilhados, para que web e mobile dividam tipos, clientes de API e UI sem duplicar lógica. O MVP deixa de fora, de propósito, a disponibilidade em serviços de streaming. Lançar um núcleo focado — descoberta, acompanhamento, avaliações — importou mais do que cobrir cada recurso que um tracker maduro tem.",
    },
    links: [{ label: "GitHub", href: "https://github.com/Kensyy/atlas-app" }],
    accent: "sky",
  },
  {
    slug: "pullup",
    name: "PullUp",
    pitch: {
      en: "A mobile social app for students with opt-in, time-boxed location sharing.",
      pt: "Um app social mobile para estudantes com compartilhamento de localização opcional e por tempo limitado.",
    },
    problem: {
      en: "Most location-sharing apps default to always-on, which feels invasive. PullUp makes sharing explicit, temporary, and scoped to everyone or just friends.",
      pt: "A maioria dos apps de localização vem com compartilhamento sempre ativo por padrão, o que parece invasivo. O PullUp torna o compartilhamento explícito, temporário e limitado a todos ou só amigos.",
    },
    role: {
      en: "Solo developer — product & mobile engineering",
      pt: "Desenvolvedor solo — produto e engenharia mobile",
    },
    stack: ["React Native", "Expo", "Supabase"],
    decision: {
      en: "Age verification runs on government ID instead of a .edu email gate. It's more friction at signup, but it actually confirms who someone is instead of trusting an email domain, and it works for anyone, not just people at a .edu school.",
      pt: "A verificação de idade usa documento oficial em vez de um filtro por e-mail .edu. É mais fricção no cadastro, mas realmente confirma quem é a pessoa em vez de confiar num domínio de e-mail, e funciona para qualquer um, não só quem estuda em instituições americanas.",
    },
    links: [{ label: "GitHub", href: "https://github.com/Kensyy/pullup" }],
    accent: "rose",
  },
];
