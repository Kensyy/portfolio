import type { Accent } from "@/data/projects";
import { accentClasses } from "@/lib/accent";

/**
 * Stand-in for a real screenshot. Clearly labeled "Mockup" so it never
 * reads as a finished product screenshot — swap for next/image once real
 * screenshots exist.
 */
export function MockupPlaceholder({
  accent,
  label,
  mockupWord = "Mockup",
}: {
  accent: Accent;
  label: string;
  mockupWord?: string;
}) {
  const classes = accentClasses[accent];

  return (
    <div
      className={`relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-lg border ${classes.mockupBorder} ${classes.mockupBg} p-3`}
    >
      <span
        className={`self-start rounded-full border ${classes.mockupBorder} bg-white/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide dark:bg-black/40 ${classes.mockupText}`}
      >
        {mockupWord}
      </span>
      <div className="space-y-1.5">
        <div className={`h-2 w-2/3 rounded-full ${classes.mockupBorder} border`} />
        <div className={`h-2 w-1/2 rounded-full ${classes.mockupBorder} border`} />
      </div>
      <p className={`text-xs font-medium ${classes.mockupText}`}>{label}</p>
    </div>
  );
}
