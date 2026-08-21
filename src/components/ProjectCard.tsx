"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { accentClasses } from "@/lib/accent";
import { Badge } from "@/components/Badge";
import { MockupPlaceholder } from "@/components/MockupPlaceholder";
import { useLanguage } from "@/i18n/LanguageContext";
import { dictionary } from "@/i18n/dictionary";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const t = dictionary[lang];
  const classes = accentClasses[project.accent];

  return (
    <article className="rounded-xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold sm:text-2xl">
            <Link href={`/work/${project.slug}`} className="hover:underline">
              {project.name}
            </Link>
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-foreground/70 sm:text-base">
            {project.pitch[lang]}
          </p>
        </div>
        {project.status && (
          <Badge className="shrink-0 bg-amber-500/10 text-amber-700 ring-1 ring-inset ring-amber-500/20 dark:text-amber-300">
            {project.status[lang]}
          </Badge>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <MockupPlaceholder
          accent={project.accent}
          label={`${project.name} — ${t.work.overview}`}
          mockupWord={t.work.mockup}
        />
        <MockupPlaceholder
          accent={project.accent}
          label={`${project.name} — ${t.work.detail}`}
          mockupWord={t.work.mockup}
        />
        <div className="hidden sm:block">
          <MockupPlaceholder
            accent={project.accent}
            label={`${project.name} — ${t.work.flow}`}
            mockupWord={t.work.mockup}
          />
        </div>
      </div>

      <dl className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {t.work.problem}
          </dt>
          <dd className="mt-1 text-sm text-foreground/80">{project.problem[lang]}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {t.work.role}
          </dt>
          <dd className="mt-1 text-sm text-foreground/80">{project.role[lang]}</dd>
        </div>
      </dl>

      {project.stack.length > 0 && (
        <div className="mt-5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {t.work.stack}
          </dt>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech} className={classes.badge}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5">
        <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
          {t.work.decision}
        </dt>
        <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
          {project.decision[lang]}
        </dd>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/work/${project.slug}`}
          className={`inline-flex items-center gap-1 rounded-md border border-black/15 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 dark:border-white/15 dark:hover:bg-white/5 ${classes.ring}`}
        >
          {t.work.caseStudy}
          <span aria-hidden>→</span>
        </Link>
        {project.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 rounded-md border border-black/15 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 dark:border-white/15 dark:hover:bg-white/5 ${classes.ring}`}
          >
            {link.label}
            <span aria-hidden>→</span>
          </a>
        ))}
      </div>
    </article>
  );
}
