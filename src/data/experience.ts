import type { LocalizedText } from "@/data/projects";

export type ExperienceEntry = {
  company: string;
  role: LocalizedText;
  startDate: string;
  /** Set to null for an ongoing role: rendered as "Present" / "Atual". */
  endDate: string | null;
  bullets: LocalizedText[];
  technologies: string[];
};

// Ordered most-recent first.
export const experience: ExperienceEntry[] = [
  {
    company: "Fockink",
    role: {
      en: "Programming and Support Analyst",
      pt: "Analista de Programação e Suporte",
    },
    startDate: "Mar 2026",
    endDate: null,
    technologies: ["C#", ".NET", "SQL", "Windows Services", "Desktop"],
    bullets: [
      {
        en: "Provide technical support and troubleshooting for company-developed software, and configure client project setups based on engineering specifications.",
        pt: "Presto suporte técnico e resolução de problemas para softwares desenvolvidos pela empresa, além de configurar setups de projetos de clientes com base em especificações de engenharia.",
      },
      {
        en: "Built a C# desktop app to track and log project progress so the team can see project status and stage in real time.",
        pt: "Desenvolvi um aplicativo desktop em C# para acompanhar e registrar o progresso dos projetos, permitindo que o time veja o status e a etapa atual em tempo real.",
      },
      {
        en: "Built a C# database comparison tool that generates SQL update scripts across up to 13 tables for existing client databases, replacing a fully manual process.",
        pt: "Desenvolvi uma ferramenta em C# de comparação de bancos de dados que gera scripts SQL de atualização para até 13 tabelas em bancos de clientes existentes, substituindo um processo totalmente manual.",
      },
      {
        en: "Built a service watchdog that restarts an internal Windows service on schedule, verifies that it starts successfully, and detects when it stalls in StopPending, Stopped, or StartPending states.",
        pt: "Desenvolvi um watchdog que reinicia um serviço interno do Windows em horário programado, verifica se ele iniciou corretamente e detecta quando fica travado nos estados StopPending, Stopped ou StartPending.",
      },
    ],
  },
  {
    company: "Compass.UOL",
    role: {
      en: "Full-Stack Developer",
      pt: "Desenvolvedor Full-Stack",
    },
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Git"],
    bullets: [
      {
        en: "Built and maintained full-stack web applications: both front-end interfaces and back-end server logic.",
        pt: "Desenvolvi e mantive aplicações web full-stack: interfaces de front-end e lógica de back-end.",
      },
      {
        en: "Worked within a development team following professional software engineering practices and workflows.",
        pt: "Trabalhei em um time de desenvolvimento seguindo práticas e fluxos profissionais de engenharia de software.",
      },
      {
        en: "Shipped features across the full stack, from UI implementation to server-side functionality.",
        pt: "Entreguei funcionalidades em toda a stack, da implementação de UI à lógica no servidor.",
      },
    ],
  },
  {
    company: "Compass.UOL",
    role: {
      en: "Trainee Developer, Scholarship Program",
      pt: "Desenvolvedor Trainee, Programa de Bolsas",
    },
    startDate: "Apr 2024",
    endDate: "Sep 2024",
    technologies: ["JavaScript", "Git", "Web"],
    bullets: [
      {
        en: "Completed an intensive training program focused on modern web development practices and tools.",
        pt: "Concluí um programa intensivo de formação voltado a práticas e ferramentas modernas de desenvolvimento web.",
      },
      {
        en: "Applied the coursework to a real project, turning the training material into working software with a development team.",
        pt: "Apliquei o conteúdo em um projeto real, transformando o material do programa em software funcional junto a um time de desenvolvimento.",
      },
    ],
  },
  {
    company: "Lógica Informática",
    role: {
      en: "Systems Developer",
      pt: "Desenvolvedor de Sistemas",
    },
    startDate: "Aug 2021",
    endDate: "Jun 2023",
    technologies: ["GeneXus", "C#", "JavaScript", "HTML/CSS", "iOS", "ERP"],
    bullets: [
      {
        en: "Contributed to PlintView, a web business-intelligence product for dashboards, KPIs, management reports, and performance tracking.",
        pt: "Contribuí para o PlintView, um produto web de business intelligence voltado a dashboards, KPIs, relatórios gerenciais e acompanhamento de desempenho.",
      },
      {
        en: "Contributed to the Força de Vendas mobile product and participated in its first responsive-layout tests, including the platform-specific behavior required for iOS.",
        pt: "Contribuí para o produto mobile Força de Vendas e participei dos primeiros testes de responsividade, incluindo o comportamento específico necessário para iOS.",
      },
      {
        en: "Created a C# extension for GeneXus that integrated with the company's service-order workflow.",
        pt: "Criei uma extensão em C# para GeneXus integrada ao fluxo de ordens de serviço da empresa.",
      },
      {
        en: "Developed business-management features in GeneXus and provided technical support to internal teams and clients using the company's software.",
        pt: "Desenvolvi funcionalidades para sistemas de gestão em GeneXus e prestei suporte técnico a times internos e clientes dos softwares da empresa.",
      },
    ],
  },
];
