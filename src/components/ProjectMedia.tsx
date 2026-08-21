import type { Project } from "@/data/projects";
import type { Lang } from "@/i18n/LanguageContext";
import { withBasePath } from "@/lib/site";
import { MockupPlaceholder } from "@/components/MockupPlaceholder";
import { accentClasses } from "@/lib/accent";

const gridClassByCount: Record<number, string> = {
  1: "grid grid-cols-1",
  2: "grid grid-cols-1 gap-4 sm:grid-cols-2",
  3: "grid grid-cols-2 gap-3 sm:grid-cols-3",
};

export function ProjectMedia({
  project,
  lang,
  mockupWord,
  overviewLabel,
  detailLabel,
  flowLabel,
  comingSoonLabel,
}: {
  project: Project;
  lang: Lang;
  mockupWord: string;
  overviewLabel: string;
  detailLabel: string;
  flowLabel: string;
  comingSoonLabel: string;
}) {
  const shots = project.screenshots;

  if (project.mediaComingSoon) {
    const classes = accentClasses[project.accent];
    return (
      <div
        className={`flex aspect-[21/9] w-full items-center justify-center rounded-lg border border-dashed ${classes.mockupBorder} ${classes.mockupBg}`}
      >
        <p className={`text-sm font-medium ${classes.mockupText}`}>
          {comingSoonLabel}
        </p>
      </div>
    );
  }

  if (shots && shots.length > 0) {
    return (
      <div className={gridClassByCount[shots.length] ?? gridClassByCount[3]}>
        {shots.map((shot) => (
          <figure key={shot.src}>
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized, needs manual basePath handling next/image doesn't provide here */}
            <img
              src={withBasePath(shot.src)}
              alt={shot.caption[lang]}
              className="w-full rounded-lg border border-black/10 dark:border-white/10"
            />
            <figcaption className="mt-1.5 text-xs text-foreground/50">
              {shot.caption[lang]}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      <MockupPlaceholder
        accent={project.accent}
        label={`${project.name} — ${overviewLabel}`}
        mockupWord={mockupWord}
      />
      <MockupPlaceholder
        accent={project.accent}
        label={`${project.name} — ${detailLabel}`}
        mockupWord={mockupWord}
      />
      <div className="hidden sm:block">
        <MockupPlaceholder
          accent={project.accent}
          label={`${project.name} — ${flowLabel}`}
          mockupWord={mockupWord}
        />
      </div>
    </div>
  );
}
