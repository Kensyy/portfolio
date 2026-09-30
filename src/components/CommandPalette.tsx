"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import { dictionary } from "@/i18n/dictionary";
import { projects } from "@/data/projects";
import { useCommandPalette } from "@/components/CommandPaletteContext";

type Command = {
  id: string;
  label: string;
  group: string;
  run: () => void;
};

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const { lang, setLang } = useLanguage();
  const t = dictionary[lang].palette;
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  useEffect(() => {
    // Resets the palette's local UI state when it's opened from outside
    // (keyboard shortcut or nav button): an external trigger, not a
    // self-cascading render.
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const commands: Command[] = useMemo(() => {
    const nav: Command[] = [
      { id: "about", label: t.goToAbout, group: t.groupNav, run: () => router.push("/#about") },
      { id: "experience", label: t.goToExperience, group: t.groupNav, run: () => router.push("/#experience") },
      { id: "work", label: t.goToWork, group: t.groupNav, run: () => router.push("/#work") },
      { id: "contact", label: t.goToContact, group: t.groupNav, run: () => router.push("/#contact") },
    ];
    const projectCommands: Command[] = projects.map((p) => ({
      id: `project-${p.slug}`,
      label: p.name,
      group: t.groupProjects,
      run: () => router.push(`/work/${p.slug}`),
    }));
    const actions: Command[] = [
      {
        id: "theme",
        label: t.toggleTheme,
        group: t.groupActions,
        run: () => {
          const next = !document.documentElement.classList.contains("dark");
          document.documentElement.classList.toggle("dark", next);
          localStorage.setItem("theme", next ? "dark" : "light");
        },
      },
      {
        id: "lang",
        label: t.switchLang,
        group: t.groupActions,
        run: () => setLang(lang === "en" ? "pt" : "en"),
      },
    ];
    return [...nav, ...projectCommands, ...actions];
  }, [t, router, lang, setLang]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  if (!open) return null;

  const runActive = () => {
    const cmd = filtered[activeIndex];
    if (cmd) {
      cmd.run();
      setOpen(false);
    }
  };

  let lastGroup = "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-24"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-xl border border-black/10 bg-background shadow-2xl dark:border-white/10"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActiveIndex((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter") {
              e.preventDefault();
              runActive();
            }
          }}
          placeholder={t.placeholder}
          className="w-full border-b border-black/10 bg-transparent px-4 py-3 text-sm outline-none dark:border-white/10"
        />
        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-foreground/50">
              {t.noResults}
            </p>
          )}
          {filtered.map((cmd, i) => {
            const showGroup = cmd.group !== lastGroup;
            lastGroup = cmd.group;
            return (
              <div key={cmd.id}>
                {showGroup && (
                  <p className="px-4 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-foreground/40">
                    {cmd.group}
                  </p>
                )}
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => {
                    cmd.run();
                    setOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm ${
                    i === activeIndex
                      ? "bg-black/[0.06] dark:bg-white/[0.08]"
                      : ""
                  }`}
                >
                  {cmd.label}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
