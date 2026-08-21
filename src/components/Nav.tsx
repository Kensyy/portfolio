"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { dictionary } from "@/i18n/dictionary";
import { useCommandPalette } from "@/components/CommandPaletteContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

const sectionIds = ["about", "experience", "work", "contact"] as const;

export function Nav() {
  const [activeId, setActiveId] = useState<string>("about");
  const { lang } = useLanguage();
  const { setOpen } = useCommandPalette();
  const t = dictionary[lang].nav;

  const links = [
    { href: "#about", label: t.about },
    { href: "#experience", label: t.experience },
    { href: "#work", label: t.work },
    { href: "#contact", label: t.contact },
  ];

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="print:hidden sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-y-2 px-4 py-4 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          <span className="sm:hidden">VS</span>
          <span className="hidden sm:inline">Victor Gabriel da Silva</span>
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="flex gap-3 text-sm sm:gap-6">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`transition-colors hover:text-foreground ${
                      isActive ? "text-foreground" : "text-foreground/70"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open command palette"
              className="hidden rounded-md border border-black/10 px-1.5 py-1 text-xs font-medium text-foreground/60 transition-colors hover:bg-black/5 hover:text-foreground sm:inline dark:border-white/10 dark:hover:bg-white/10"
            >
              ⌘K
            </button>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
