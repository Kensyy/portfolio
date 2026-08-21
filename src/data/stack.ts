export type StackItem = {
  name: string;
  icon: string;
  /** Some logos (e.g. Next.js) are drawn in black and need inverting on a dark background. */
  invertOnDark?: boolean;
};

export const coreStack: StackItem[] = [
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg", invertOnDark: true },
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
];

// Tools used on the job (Fockink, Lógica Informática) that don't need
// full logo tiles alongside the primary web stack above.
export const secondaryTools = ["C#", "SQL", "GeneXus", "Git", "Amazon S3"];
