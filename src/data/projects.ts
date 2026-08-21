export type ProjectLink = {
  label: string;
  href: string;
};

export type Accent = "violet" | "sky" | "rose" | "amber" | "emerald" | "indigo";

export type LocalizedText = { en: string; pt: string };

export type Screenshot = {
  src: string;
  caption: LocalizedText;
};

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
  /** Real screenshots, captured from a running local build. Falls back to
   *  mockup placeholders when absent, unless mediaComingSoon is set. */
  screenshots?: Screenshot[];
  /** Shows a plain "screenshots coming soon" panel instead of mockup
   *  placeholders — for projects where a fake wireframe would be misleading
   *  (e.g. a native app, not a web UI). */
  mediaComingSoon?: boolean;
  status?: LocalizedText;
  /** Marks a side/passion project outside the full-stack professional track. */
  forFun?: boolean;
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
      en: "IT teams end up running separate tools for tickets, assets, and reporting — and even within one tool, statuses and fields are usually hardcoded by whoever built it. Kyma puts tickets and assets in one platform where admins define the statuses, categories, and custom fields themselves.",
      pt: "Times de TI acabam usando ferramentas separadas para tickets, ativos e relatórios — e mesmo dentro de uma única ferramenta, status e campos costumam vir fixos no código de quem a construiu. O Kyma reúne tickets e ativos em uma plataforma onde os admins definem os próprios status, categorias e campos personalizados.",
    },
    role: {
      en: "Solo developer — product, architecture & integrations",
      pt: "Desenvolvedor solo — produto, arquitetura e integrações",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "TanStack Query",
      "Prisma",
      "PostgreSQL",
      "better-auth",
      "Recharts",
      "Vitest",
    ],
    status: {
      en: "Core features built — not deployed yet",
      pt: "Funcionalidades principais prontas — ainda não implantado",
    },
    decision: {
      en: "Statuses aren't a hardcoded enum — they're rows in the database, each with a color, sort order, and an isTerminal flag marking it as a \"done\" state. SLA-overdue and open-ticket counts key off that flag, not the label text, so an admin can rename \"Resolved\" to whatever they want without breaking the logic that depends on it.",
      pt: "Status não são um enum fixo no código — são linhas no banco de dados, cada uma com cor, ordem de exibição e uma flag isTerminal que marca um estado como \"concluído\". O cálculo de atraso de SLA e de tickets em aberto usa essa flag, não o texto do rótulo, então um admin pode renomear \"Resolvido\" para o que quiser sem quebrar a lógica que depende disso.",
    },
    caseStudyDecisions: [
      {
        en: "Beyond tickets and assets, admins can define entirely new record types from the UI — a custom entity gets its own typed fields (text, number, select, or a relation to an existing ticket/asset/user), stored in a generic entity-attribute-value table since the schema itself isn't known ahead of time. Because the database can't enforce a field's type or required-ness on a generic value column, that validation happens in application code before anything gets written.",
        pt: "Além de tickets e ativos, admins podem definir tipos de registro totalmente novos pela interface — uma entidade personalizada recebe seus próprios campos tipados (texto, número, seleção, ou uma relação com um ticket/ativo/usuário existente), guardados em uma tabela genérica de entidade-atributo-valor, já que o schema em si não é conhecido de antemão. Como o banco não consegue impor o tipo ou a obrigatoriedade de um campo numa coluna de valor genérica, essa validação acontece no código da aplicação antes de qualquer gravação.",
      },
    ],
    highlights: [
      {
        en: "Admin-configurable dashboard widgets",
        pt: "Widgets do painel configuráveis pelo admin",
      },
      {
        en: "Ticket ↔ asset linking",
        pt: "Vínculo entre tickets e ativos",
      },
      {
        en: "In-app notifications and an audit log, both built on the same polymorphic entity-reference pattern so they can attach to any record type",
        pt: "Notificações no app e um log de auditoria, ambos construídos sobre o mesmo padrão polimórfico de referência a entidades, para que possam se ligar a qualquer tipo de registro",
      },
      {
        en: "Multi-branch/location support",
        pt: "Suporte a múltiplas filiais/localizações",
      },
      {
        en: "Deployment-configurable ticket numbering (e.g. \"KYM-1042\")",
        pt: "Numeração de tickets configurável por ambiente (ex.: \"KYM-1042\")",
      },
      {
        en: "Role-based access (Admin/Staff)",
        pt: "Acesso baseado em papel (Admin/Equipe)",
      },
    ],
    screenshots: [
      {
        src: "screenshots/kyma-dashboard.png",
        caption: { en: "Dashboard", pt: "Painel" },
      },
      {
        src: "screenshots/kyma-tickets.png",
        caption: { en: "Ticket list", pt: "Lista de tickets" },
      },
      {
        src: "screenshots/kyma-custom-fields.png",
        caption: { en: "Custom fields (admin)", pt: "Campos personalizados (admin)" },
      },
    ],
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
    screenshots: [
      {
        src: "screenshots/atlas-home.png",
        caption: { en: "Home — swipe & match", pt: "Início — swipe e match" },
      },
      {
        src: "screenshots/atlas-movies.png",
        caption: { en: "Film catalog", pt: "Catálogo de filmes" },
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Kensyy/atlas-app" }],
    accent: "sky",
  },
  {
    slug: "pullup",
    name: "PullUp",
    pitch: {
      en: "A mobile social app for opt-in, time-boxed location sharing — privacy and safety as core constraints, not afterthoughts.",
      pt: "Um app social mobile para compartilhamento de localização opcional e por tempo limitado — privacidade e segurança como restrições centrais, não um adendo.",
    },
    problem: {
      en: "Most location-sharing apps default to always-on, which feels invasive. PullUp makes sharing explicit, temporary, and scoped to everyone or just friends.",
      pt: "A maioria dos apps de localização vem com compartilhamento sempre ativo por padrão, o que parece invasivo. O PullUp torna o compartilhamento explícito, temporário e limitado a todos ou só amigos.",
    },
    role: {
      en: "Solo developer — product & mobile engineering",
      pt: "Desenvolvedor solo — produto e engenharia mobile",
    },
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "NativeWind",
      "React Navigation",
    ],
    status: {
      en: "Friends-tier MVP in progress — ID verification designed but not wired up yet (self-attestation only)",
      pt: "MVP do nível Amigos em andamento — verificação de idade desenhada mas ainda não implementada (apenas autodeclaração)",
    },
    decision: {
      en: "A database check constraint — not just application code — makes it structurally impossible to insert a public-tier share with exact coordinates, or a friends-tier share with a zone instead of coordinates. If a bug ever tried to leak precise location to the public tier, Postgres would reject the write outright.",
      pt: "Uma constraint de verificação no banco de dados — não só no código da aplicação — torna estruturalmente impossível inserir um compartilhamento de nível público com coordenadas exatas, ou um compartilhamento de nível amigos com uma zona em vez de coordenadas. Se algum bug tentasse vazar localização precisa para o nível público, o Postgres rejeitaria a gravação.",
    },
    caseStudyDecisions: [
      {
        en: "Friendships are stored as one canonically-ordered row per pair (the lower user id always goes first), with a uniqueness constraint on that pair. That's what makes blocking durable: a \"blocked\" row occupies the pair's only available slot, so a fresh request from either side hits the constraint and fails instead of creating a workaround row.",
        pt: "Amizades são guardadas como uma única linha por par, ordenada de forma canônica (o menor id de usuário sempre vem primeiro), com uma constraint de unicidade nesse par. É isso que torna o bloqueio durável: uma linha \"blocked\" ocupa o único espaço disponível para aquele par, então um novo pedido de qualquer um dos lados esbarra na constraint e falha, em vez de criar uma linha alternativa.",
      },
      {
        en: "Expired shares don't just stop showing — a scheduled Postgres function nulls out the latitude/longitude columns and deactivates the row, so precise location data doesn't sit in the database after a share ends. That was a design rule from day one, not something bolted on later.",
        pt: "Compartilhamentos expirados não apenas somem da tela — uma função do Postgres, executada em horário programado, zera as colunas de latitude/longitude e desativa a linha, para que dados precisos de localização não fiquem parados no banco depois que um compartilhamento termina. Essa foi uma regra de design desde o início, não algo adicionado depois.",
      },
    ],
    highlights: [
      {
        en: "Two visibility tiers — Friends (exact location, mutual only) and Public (zone-level, ID-verified) — enforced at the database layer, not just in app code",
        pt: "Dois níveis de visibilidade — Amigos (localização exata, só mútuos) e Público (nível de zona, com verificação de idade) — aplicados na camada de banco de dados, não só no código do app",
      },
      {
        en: "Real-time friend location updates via Supabase's built-in subscriptions — no hand-built WebSocket layer",
        pt: "Atualizações de localização de amigos em tempo real via subscriptions nativas do Supabase — sem uma camada de WebSocket construída à mão",
      },
      {
        en: "One-tap \"stop sharing,\" accessible from anywhere in the app",
        pt: "Botão de \"parar compartilhamento\" com um toque, acessível de qualquer lugar do app",
      },
      {
        en: "Fixed-set quick reactions on an active share — no free text",
        pt: "Reações rápidas de conjunto fixo em um compartilhamento ativo — sem texto livre",
      },
      {
        en: "Push notifications when a friend starts sharing",
        pt: "Notificações push quando um amigo começa a compartilhar",
      },
    ],
    screenshots: [
      {
        src: "screenshots/pullup-onboarding.png",
        caption: { en: "Onboarding", pt: "Onboarding" },
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Kensyy/pullup" }],
    accent: "rose",
  },
  {
    slug: "buildle",
    name: "Buildle",
    pitch: {
      en: "A Wordle-style daily game — guess the PC build (CPU, motherboard, RAM, GPU, PSU) in limited tries.",
      pt: "Um jogo diário estilo Wordle — adivinhe a configuração de PC (CPU, placa-mãe, RAM, GPU, fonte) em tentativas limitadas.",
    },
    problem: {
      en: "Wordle clones exist for almost everything, but not PC hardware — and a good one needs the daily answer to actually be a buildable, compatible PC, not just a random grid of parts.",
      pt: "Existem clones de Wordle para quase tudo, menos hardware de PC — e um bom precisa que a resposta do dia seja um PC realmente compatível e montável, não só uma grade aleatória de peças.",
    },
    role: {
      en: "Solo developer — game design & full-stack",
      pt: "Desenvolvedor solo — game design e full-stack",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    forFun: true,
    decision: {
      en: "The daily build is generated by a PRNG seeded from the UTC date string, not stored ahead of time — so every player worldwide who hits the API on the same day computes the identical puzzle independently. That makes the \"first request of the day\" race condition harmless by construction: two concurrent writes just produce the same puzzle twice, so there's no locking to get wrong.",
      pt: "A configuração do dia é gerada por um PRNG semeado a partir da data em UTC, não armazenada com antecedência — então qualquer jogador no mundo que acessar a API no mesmo dia calcula o mesmo puzzle de forma independente. Isso torna a condição de corrida da \"primeira requisição do dia\" inofensiva por construção: duas escritas concorrentes só produzem o mesmo puzzle duas vezes, sem necessidade de lock.",
    },
    caseStudyDecisions: [
      {
        en: "The generator enforces real hardware-compatibility rules, not just randomness — CPU and motherboard must share a socket type, RAM and motherboard must share a supported generation, and the PSU's wattage has to meet the GPU's minimum. So the daily answer is always an actual PC someone could build, never a physically nonsensical combination.",
        pt: "O gerador aplica regras reais de compatibilidade de hardware, não apenas aleatoriedade — CPU e placa-mãe precisam compartilhar o mesmo soquete, RAM e placa-mãe precisam compartilhar uma geração suportada, e a potência da fonte precisa atender ao mínimo exigido pela GPU. Assim, a resposta do dia é sempre um PC realmente montável, nunca uma combinação fisicamente sem sentido.",
      },
      {
        en: "Guess state lives in an encrypted, signed session cookie (JWT) rather than anything readable client-side, so the day's answer can't be read out of the browser's dev tools mid-game — the same problem every Wordle clone has to solve.",
        pt: "O estado das tentativas fica em um cookie de sessão assinado e criptografado (JWT), não em algo legível pelo cliente, para que a resposta do dia não possa ser lida pelas dev tools do navegador no meio do jogo — o mesmo problema que todo clone de Wordle precisa resolver.",
      },
    ],
    highlights: [
      {
        en: "91 real hardware components across 5 categories",
        pt: "91 componentes reais de hardware em 5 categorias",
      },
      {
        en: "Streaks and shareable results, Wordle-style",
        pt: "Sequências e resultados compartilháveis, estilo Wordle",
      },
      {
        en: "Past games archive",
        pt: "Arquivo de jogos anteriores",
      },
      {
        en: "Custom \"Panel & Dial\" mid-century industrial visual identity, with a light/dark toggle",
        pt: "Identidade visual própria \"Panel & Dial\", de inspiração industrial midcentury, com alternância claro/escuro",
      },
    ],
    screenshots: [
      {
        src: "screenshots/buildle-board.png",
        caption: { en: "Main menu", pt: "Menu principal" },
      },
      {
        src: "screenshots/buildle-howtoplay.png",
        caption: { en: "How to play", pt: "Como jogar" },
      },
      {
        src: "screenshots/buildle-picker.png",
        caption: { en: "Component picker", pt: "Seletor de componentes" },
      },
    ],
    accent: "amber",
  },
  {
    slug: "tiermaker",
    name: "Tiermaker",
    pitch: {
      en: "A real-time, collaborative tier-list maker — create a board, upload images, and drag them into tiers together with friends.",
      pt: "Um criador de tier lists colaborativo em tempo real — crie um board, envie imagens e arraste-as para os tiers junto com amigos.",
    },
    problem: {
      en: "Making a tier list with friends normally means screen-sharing or taking turns. Tiermaker makes it properly live — everyone sees moves, placements, and cursors as they happen.",
      pt: "Montar uma tier list com amigos normalmente significa compartilhar tela ou revezar. O Tiermaker torna isso realmente ao vivo — todo mundo vê movimentos, posicionamentos e cursores em tempo real.",
    },
    role: {
      en: "Solo developer — full-stack & realtime systems",
      pt: "Desenvolvedor solo — full-stack e sistemas em tempo real",
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "dnd-kit",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "Socket.io",
      "Drizzle ORM",
      "SQLite",
    ],
    decision: {
      en: "Cookie-based sessions broke the moment the client (Vercel) and server (Railway) landed on different domains — browsers increasingly block cross-site cookies outright, and it was confirmed live: the server never got to set a cookie the client could see, regardless of SameSite/Secure settings. Auth is a bearer token now — issued on login, stored client-side, sent explicitly on each request — which doesn't depend on cross-site cookie behavior at all.",
      pt: "Sessões baseadas em cookie quebraram assim que o cliente (Vercel) e o servidor (Railway) ficaram em domínios diferentes — navegadores cada vez mais bloqueiam cookies cross-site por padrão, e isso foi confirmado ao vivo: o servidor nunca conseguia setar um cookie que o cliente enxergasse, independente de SameSite/Secure. Agora a autenticação usa um bearer token — emitido no login, guardado no cliente, enviado explicitamente a cada requisição — que não depende do comportamento de cookies cross-site.",
    },
    caseStudyDecisions: [
      {
        en: "Live cursor positions broadcast over Socket.io rooms scoped per board, but are never written to the database — purely an ephemeral relay. There's nothing to persist, clean up, or have go stale; a cursor simply stops appearing when its socket disconnects.",
        pt: "As posições dos cursores ao vivo são transmitidas por salas do Socket.io por board, mas nunca são gravadas no banco — é puramente um repasse efêmero. Não há nada para persistir, limpar ou ficar desatualizado; um cursor simplesmente para de aparecer quando o socket dele desconecta.",
      },
      {
        en: "SQLite runs through the libSQL driver instead of a native binding like better-sqlite3, specifically so the server doesn't need native build tooling (node-gyp, a C compiler) available at deploy time — one less thing that can break on a host you don't fully control.",
        pt: "O SQLite roda pelo driver libSQL em vez de um binding nativo como better-sqlite3, especificamente para que o servidor não precise de ferramentas de build nativas (node-gyp, compilador C) disponíveis no deploy — uma coisa a menos que pode quebrar num host que você não controla totalmente.",
      },
    ],
    highlights: [
      {
        en: "Shared boards with nested folders for uploaded images",
        pt: "Boards compartilhados com pastas aninhadas para imagens enviadas",
      },
      {
        en: "Editable tiers — rename, recolor, add, or delete, placements included",
        pt: "Tiers editáveis — renomear, recolorir, adicionar ou excluir, incluindo os posicionamentos",
      },
      {
        en: "Activity toasts — \"Bob moved pepperoni.png to S\" — when someone else acts on the board",
        pt: "Toasts de atividade — \"Bob moveu pepperoni.png para S\" — quando outra pessoa age no board",
      },
      {
        en: "Export the current board as a PNG",
        pt: "Exportar o board atual como PNG",
      },
      {
        en: "Lightweight auth — display name + passcode, no email or password reset flow",
        pt: "Autenticação leve — nome de exibição + senha, sem e-mail ou fluxo de recuperação de senha",
      },
    ],
    screenshots: [
      {
        src: "screenshots/tiermaker-login.png",
        caption: { en: "Login", pt: "Login" },
      },
      {
        src: "screenshots/tiermaker-lobby.png",
        caption: { en: "Boards", pt: "Boards" },
      },
      {
        src: "screenshots/tiermaker-board.png",
        caption: { en: "Tier board", pt: "Board de tiers" },
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Kensyy/tiermaker" }],
    accent: "emerald",
  },
  {
    slug: "umbra",
    name: "Umbra",
    pitch: {
      en: "A multiplayer action roguelike built around Brazilian folklore — solo or co-op up to 6 players.",
      pt: "Um roguelike de ação multiplayer construído em torno do folclore brasileiro — solo ou co-op para até 6 jogadores.",
    },
    problem: {
      en: "Most co-op action games don't scale their difficulty with party size, so solo play feels undertuned or a full party steamrolls everything. Umbra scales enemies to match however many players actually showed up.",
      pt: "A maioria dos jogos de ação co-op não escala a dificuldade com o tamanho do grupo, então jogar solo fica fácil demais ou um grupo completo arrasa tudo. O Umbra escala os inimigos de acordo com quantos jogadores realmente entraram na sessão.",
    },
    role: {
      en: "Solo developer — game design, gameplay programming & netcode",
      pt: "Desenvolvedor solo — game design, programação de gameplay e netcode",
    },
    stack: ["Godot 4.7", "C#", ".NET"],
    mediaComingSoon: true,
    forFun: true,
    decision: {
      en: "Player-count difficulty scaling is one tunable constant (+35% per player beyond the first) feeding a single formula, instead of enemy HP, enemy damage, boss stats, and spawn counts each picking their own curve. Solo play stays at each scene's authored baseline; a full 6-player party fights at 2.75x — and retuning the whole game's difficulty is a one-line change.",
      pt: "A escala de dificuldade por número de jogadores é uma única constante ajustável (+35% por jogador além do primeiro) alimentando uma única fórmula, em vez de vida do inimigo, dano do inimigo, status de chefes e contagem de spawns cada um com sua própria curva. Jogar solo fica na base autoral de cada cena; um grupo completo de 6 jogadores enfrenta 2.75x — e reajustar a dificuldade do jogo inteiro é uma mudança de uma linha.",
    },
    caseStudyDecisions: [
      {
        en: "Boss rooms are explicitly exempted from the generic combat-room spawn-count scaling that applies everywhere else — scaling spawn count on a hand-authored boss encounter would just add more adds than the fight was designed around, instead of making the boss itself harder.",
        pt: "Salas de chefe são explicitamente isentas do escalonamento genérico de contagem de spawns que se aplica em todo o resto do jogo — escalar a contagem de spawns numa luta de chefe desenhada à mão só adicionaria mais inimigos secundários do que a luta foi pensada para ter, em vez de tornar o próprio chefe mais difícil.",
      },
    ],
    highlights: [
      {
        en: "Persistent Hub between runs, with a Blessing system for roguelike meta-progression",
        pt: "Hub persistente entre runs, com um sistema de Bênçãos para meta-progressão estilo roguelike",
      },
      {
        en: "Per-player save files with boss-defeat tracking",
        pt: "Arquivos de save por jogador com registro de chefes derrotados",
      },
      {
        en: "Real multiplayer netcode — a networked-enemy interface keeps enemy AI in sync across clients",
        pt: "Netcode multiplayer real — uma interface de inimigo em rede mantém a IA dos inimigos sincronizada entre os clientes",
      },
      {
        en: "Bilingual — English and Brazilian Portuguese",
        pt: "Bilíngue — inglês e português brasileiro",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Kensyy/umbra" }],
    accent: "indigo",
  },
];
