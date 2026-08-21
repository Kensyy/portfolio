import type { StackItem } from "@/data/stack";
import { withBasePath } from "@/lib/site";

export function StackIcon({ name, icon, invertOnDark }: StackItem) {
  return (
    <div
      title={name}
      className="group flex flex-col items-center gap-2 rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.04] hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG icon, unoptimized export, needs manual basePath handling next/image doesn't provide here */}
      <img
        src={withBasePath(icon)}
        alt={name}
        width={28}
        height={28}
        className={`h-7 w-7 transition-transform duration-200 ease-out group-hover:scale-110 ${
          invertOnDark ? "dark:invert" : ""
        }`}
      />
      <span className="text-xs font-medium text-foreground/70">{name}</span>
    </div>
  );
}
