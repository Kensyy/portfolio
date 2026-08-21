"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/Badge";
import { MockupPlaceholder } from "@/components/MockupPlaceholder";
import type { Project } from "@/data/projects";
import { accentClasses } from "@/lib/accent";
import { useLanguage } from "@/i18n/LanguageContext";
import { dictionary } from "@/i18n/dictionary";

export function CaseStudyContent({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const t = dictionary[lang];
  const classes = accentClasses[project.accent];

  return (
    <>
      <Nav />
      <main className="animate-fade-in-up mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Link
          href="/#work"
          className="text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          {t.work.backToPortfolio}
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-2 max-w-2xl text-foreground/70">
              {project.pitch[lang]}
            </p>
          </div>
          {project.status && (
            <Badge className="shrink-0 bg-amber-500/10 text-amber-700 ring-1 ring-inset ring-amber-500/20 dark:text-amber-300">
              {project.status[lang]}
            </Badge>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
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
          <MockupPlaceholder
            accent={project.accent}
            label={`${project.name} — ${t.work.flow}`}
            mockupWord={t.work.mockup}
          />
        </div>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
              {t.work.problem}
            </dt>
            <dd className="mt-2 text-foreground/80">{project.problem[lang]}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
              {t.work.role}
            </dt>
            <dd className="mt-2 text-foreground/80">{project.role[lang]}</dd>
          </div>
        </dl>

        {project.stack.length > 0 && (
          <div className="mt-8">
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
              {t.work.stack}
            </dt>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech} className={classes.badge}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 space-y-6">
          {[project.decision, ...(project.caseStudyDecisions ?? [])].map(
            (decision, i) => (
              <div key={decision[lang]}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                  {t.work.decision}
                  {project.caseStudyDecisions && project.caseStudyDecisions.length > 0
                    ? ` (${i + 1}/${1 + project.caseStudyDecisions.length})`
                    : ""}
                </dt>
                <dd className="mt-2 max-w-2xl leading-relaxed text-foreground/80">
                  {decision[lang]}
                </dd>
              </div>
            ),
          )}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-8">
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
              {t.work.highlights}
            </dt>
            <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-foreground/80">
              {project.highlights.map((highlight) => (
                <li key={highlight[lang]}>{highlight[lang]}</li>
              ))}
            </ul>
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {project.links.map((link) => (
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
        )}
      </main>
      <Footer />
    </>
  );
}
