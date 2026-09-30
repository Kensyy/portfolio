"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { StackIcon } from "@/components/StackIcon";
import { Badge } from "@/components/Badge";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { coreStack, secondaryTools } from "@/data/stack";
import { socialLinks } from "@/lib/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { dictionary } from "@/i18n/dictionary";

export function HomeContent() {
  const { lang } = useLanguage();
  const t = dictionary[lang];

  return (
    <>
      <Nav />
      <main
        id="top"
        className="animate-fade-in-up mx-auto max-w-4xl px-6"
      >
        <section id="about" className="scroll-mt-20 py-20 sm:py-28">
          <p className="text-sm font-medium text-foreground/50">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.hero.headline}
          </h1>
          <p className="mt-4 text-sm text-foreground/60">{t.hero.location}</p>
          <p className="mt-2 text-sm font-medium text-foreground/80">
            {t.hero.now}
          </p>

          <div className="mt-10 max-w-2xl space-y-4 text-foreground/80">
            <p>{t.hero.bio}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-1 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-1 rounded-md border border-black/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              {t.hero.ctaWork}
            </a>
          </div>

          <div className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
              {t.hero.coreStack}
            </h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {coreStack.map((tech) => (
                <StackIcon key={tech.name} {...tech} />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-foreground/50">
                {t.hero.alsoWorkedWith}
              </span>
              {secondaryTools.map((tool) => (
                <Badge
                  key={tool}
                  className="bg-black/[0.04] text-foreground/70 dark:bg-white/[0.06]"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-foreground/60">{t.hero.languages}</p>
        </section>

        <section id="experience" className="scroll-mt-20 py-16 sm:py-20">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {t.experience.heading}
          </h2>
          <ol className="relative mt-8 space-y-5 before:absolute before:bottom-4 before:left-[5px] before:top-4 before:w-px before:bg-black/10 dark:before:bg-white/10">
            {experience.map((entry, index) => (
              <li
                key={`${entry.company}-${entry.startDate}`}
                className="relative pl-8"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-7 z-10 h-[11px] w-[11px] rounded-full border-2 border-background ${
                    index === 0
                      ? "bg-foreground ring-4 ring-foreground/10"
                      : "bg-foreground/30"
                  }`}
                />
                <article className="rounded-xl border border-black/10 bg-black/[0.015] p-5 transition-colors hover:border-black/20 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-white/20 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground/60">
                        {entry.company}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold tracking-tight">
                        {entry.role[lang]}
                      </h3>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      {entry.endDate === null && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {t.experience.present}
                        </span>
                      )}
                      <p className="text-sm tabular-nums text-foreground/50">
                        {entry.startDate}
                        {entry.endDate && (
                          <>
                            {" "}{t.experience.dateSeparator} {entry.endDate}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/75">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet[lang]} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-foreground/35"
                        />
                        <span>{bullet[lang]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-black/[0.07] pt-4 dark:border-white/[0.07]">
                    {entry.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        className="bg-black/[0.04] text-foreground/65 dark:bg-white/[0.06]"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="scroll-mt-20 py-16 sm:py-20">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {t.work.heading}
          </h2>
          <div className="mt-6 space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
