"use client";

import { useEffect, useState } from "react";
import type { Project, Screenshot } from "@/data/projects";
import type { Lang } from "@/i18n/LanguageContext";
import { withBasePath } from "@/lib/site";
import { MockupPlaceholder } from "@/components/MockupPlaceholder";
import { accentClasses } from "@/lib/accent";

const gridClassByCount: Record<number, string> = {
  1: "mx-auto grid w-full max-w-sm grid-cols-1",
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
  openImageLabel,
  closeImageLabel,
  compact = false,
}: {
  project: Project;
  lang: Lang;
  mockupWord: string;
  overviewLabel: string;
  detailLabel: string;
  flowLabel: string;
  comingSoonLabel: string;
  openImageLabel: string;
  closeImageLabel: string;
  compact?: boolean;
}) {
  const [selectedShot, setSelectedShot] = useState<Screenshot | null>(null);
  const shots = project.screenshots;

  useEffect(() => {
    if (!selectedShot) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedShot(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedShot]);

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
      <>
        <div className={gridClassByCount[shots.length] ?? gridClassByCount[3]}>
          {shots.map((shot) => {
            const isSingle = shots.length === 1;
            return (
              <figure
                key={shot.src}
                className={isSingle ? "flex flex-col items-center" : undefined}
              >
                <button
                  type="button"
                  onClick={() => setSelectedShot(shot)}
                  aria-label={`${openImageLabel}: ${shot.caption[lang]}`}
                  className={`group block cursor-zoom-in overflow-hidden rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                    isSingle ? "w-auto max-w-full" : "w-full"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized, needs manual basePath handling next/image doesn't provide here */}
                  <img
                    src={withBasePath(shot.src)}
                    alt={shot.caption[lang]}
                    loading="lazy"
                    className={`rounded-lg border border-black/10 object-contain transition duration-200 group-hover:scale-[1.015] group-hover:border-black/25 dark:border-white/10 dark:group-hover:border-white/25 ${
                      isSingle
                        ? compact
                          ? "max-h-80 w-auto max-w-full"
                          : "max-h-[32rem] w-auto max-w-full"
                        : "w-full"
                    }`}
                  />
                </button>
                <figcaption className="mt-1.5 text-xs text-foreground/50">
                  {shot.caption[lang]}
                </figcaption>
              </figure>
            );
          })}
        </div>

        {selectedShot && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedShot.caption[lang]}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) setSelectedShot(null);
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedShot(null)}
              aria-label={closeImageLabel}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {closeImageLabel}
            </button>
            <figure className="flex max-h-full max-w-7xl flex-col items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- lightbox uses the original static asset */}
              <img
                src={withBasePath(selectedShot.src)}
                alt={selectedShot.caption[lang]}
                className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
              <figcaption className="text-sm text-white/75">
                {selectedShot.caption[lang]}
              </figcaption>
            </figure>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      <MockupPlaceholder
        accent={project.accent}
        label={`${project.name}: ${overviewLabel}`}
        mockupWord={mockupWord}
      />
      <MockupPlaceholder
        accent={project.accent}
        label={`${project.name}: ${detailLabel}`}
        mockupWord={mockupWord}
      />
      <div className="hidden sm:block">
        <MockupPlaceholder
          accent={project.accent}
          label={`${project.name}: ${flowLabel}`}
          mockupWord={mockupWord}
        />
      </div>
    </div>
  );
}
