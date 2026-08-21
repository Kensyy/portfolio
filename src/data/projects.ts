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
  /** Extra decisions shown only on the case study page, not the card. */
  caseStudyDecisions?: LocalizedText[];
  /** Feature breadth, shown only on the case study page. */
  highlights?: LocalizedText[];
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
      "Tailwind CSS",
      "shadcn/ui",
      "better-auth",
      "Prisma",
      "PostgreSQL",
      "Upstash Redis",
      "next-intl",
      "Zod",
      "Playwright",
    ],
    decision: {
      en: "Compatibility between two users is computed from their actual rating history, not a taste quiz — genres and directors feed into a weighted vector where a loved title (4.5+) counts far more than a liked one, and a disliked title actively pulls the score down instead of being ignored. It runs the same weighting the per-movie \"Match %\" uses, so the two numbers stay consistent with each other.",
      pt: "A compatibilidade entre dois usuários é calculada a partir do histórico real de avaliações, não de um questionário de gostos — gêneros e diretores entram em um vetor com pesos, onde um título amado (4.5+) conta muito mais que um só \"gostei\", e um título malavaliado realmente puxa a pontuação para baixo em vez de ser ignorado. Usa a mesma lógica de peso do \"Match %\" de cada filme, então os dois números ficam consistentes entre si.",
    },
    caseStudyDecisions: [
      {
        en: "All TMDB calls go through a server-side proxy instead of hitting the API directly from the client — keeps the API key off the browser and adds rate limiting. The proxy also resolves the viewer's region (explicit override, then Vercel's IP-geolocation header, then the browser's Accept-Language) so \"Where to Watch\" shows streaming providers actually available in that country, and merges providers listed under both \"rent\" and \"buy\" instead of showing them twice.",
        pt: "Todas as chamadas ao TMDB passam por um proxy no servidor em vez de irem direto do cliente — mantém a chave da API fora do navegador e permite aplicar rate limiting. O proxy também resolve a região do visitante (parâmetro explícito, depois o cabeçalho de geolocalização do Vercel, depois o Accept-Language do navegador) para que o \"Onde Assistir\" mostre serviços de streaming realmente disponíveis naquele país, e agrupa provedores listados em \"alugar\" e \"comprar\" em vez de mostrá-los duas vezes.",
      },
      {
        en: "Every write endpoint is rate-limited and validated with Zod, and admin actions check the user's role against the database on each request instead of trusting whatever role is sitting in the session — a session can outlive a permission change, so trusting it directly would let a demoted admin keep acting like one until they log out.",
        pt: "Todos os endpoints de escrita têm rate limiting e validação com Zod, e as ações de admin verificam o cargo do usuário no banco a cada requisição, em vez de confiar no que está guardado na sessão — uma sessão pode sobreviver a uma mudança de permissão, então confiar nela diretamente deixaria um admin rebaixado continuar agindo como admin até fazer logout.",
      },
    ],
    highlights: [
      {
        en: "Collaborative watchlists — clone someone else's list, comment and react on items",
        pt: "Listas colaborativas — clonar a lista de outra pessoa, comentar e reagir aos itens",
      },
      {
        en: "Direct messaging between users",
        pt: "Mensagens diretas entre usuários",
      },
      {
        en: "Per-episode TV tracking with a \"next up\" queue",
        pt: "Acompanhamento de séries por episódio, com fila de \"próximo episódio\"",
      },
      {
        en: "\"Wrapped\" — a yearly recap, shareable as a portrait image for Stories",
        pt: "\"Wrapped\" — um retrospectivo anual, compartilhável como imagem vertical para Stories",
      },
      {
        en: "Community challenges and content reporting/moderation",
        pt: "Desafios da comunidade e denúncia/moderação de conteúdo",
      },
      {
        en: "Bilingual — English and Brazilian Portuguese",
        pt: "Bilíngue — inglês e português brasileiro",
      },
    ],
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
