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
          <ol className="mt-6 space-y-8">
            {experience.map((entry) => (
              <li
                key={entry.company}
                className="border-b border-black/10 pb-8 last:border-0 last:pb-0 dark:border-white/10"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-medium">{entry.role[lang]}</p>
                    <p className="text-sm text-foreground/60">{entry.company}</p>
                  </div>
                  <p className="text-sm text-foreground/50">
                    {entry.startDate} —{" "}
                    {entry.endDate ?? t.experience.present}
                  </p>
                </div>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground/80">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet[lang]}>{bullet[lang]}</li>
                  ))}
                </ul>
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
