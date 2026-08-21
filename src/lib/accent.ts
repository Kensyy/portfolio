import type { Accent } from "@/data/projects";

// Tailwind's scanner needs literal class strings, so every accent variant
// is spelled out here rather than built with template interpolation.
export const accentClasses: Record<
  Accent,
  {
    badge: string;
    ring: string;
    mockupBg: string;
    mockupBorder: string;
    mockupText: string;
  }
> = {
  violet: {
    badge:
      "bg-violet-500/10 text-violet-700 dark:text-violet-300 ring-1 ring-inset ring-violet-500/20",
    ring: "focus-visible:outline-violet-500",
    mockupBg: "bg-gradient-to-br from-violet-500/15 via-violet-500/5 to-transparent",
    mockupBorder: "border-violet-500/25",
    mockupText: "text-violet-700 dark:text-violet-300",
  },
  sky: {
    badge:
      "bg-sky-500/10 text-sky-700 dark:text-sky-300 ring-1 ring-inset ring-sky-500/20",
    ring: "focus-visible:outline-sky-500",
    mockupBg: "bg-gradient-to-br from-sky-500/15 via-sky-500/5 to-transparent",
    mockupBorder: "border-sky-500/25",
    mockupText: "text-sky-700 dark:text-sky-300",
  },
  rose: {
    badge:
      "bg-rose-500/10 text-rose-700 dark:text-rose-300 ring-1 ring-inset ring-rose-500/20",
    ring: "focus-visible:outline-rose-500",
    mockupBg: "bg-gradient-to-br from-rose-500/15 via-rose-500/5 to-transparent",
    mockupBorder: "border-rose-500/25",
    mockupText: "text-rose-700 dark:text-rose-300",
  },
  amber: {
    badge:
      "bg-amber-500/10 text-amber-700 dark:text-amber-300 ring-1 ring-inset ring-amber-500/20",
    ring: "focus-visible:outline-amber-500",
    mockupBg: "bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-transparent",
    mockupBorder: "border-amber-500/25",
    mockupText: "text-amber-700 dark:text-amber-300",
  },
  emerald: {
    badge:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 ring-1 ring-inset ring-emerald-500/20",
    ring: "focus-visible:outline-emerald-500",
    mockupBg: "bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent",
    mockupBorder: "border-emerald-500/25",
    mockupText: "text-emerald-700 dark:text-emerald-300",
  },
  indigo: {
    badge:
      "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-500/20",
    ring: "focus-visible:outline-indigo-500",
    mockupBg: "bg-gradient-to-br from-indigo-500/15 via-indigo-500/5 to-transparent",
    mockupBorder: "border-indigo-500/25",
    mockupText: "text-indigo-700 dark:text-indigo-300",
  },
};
