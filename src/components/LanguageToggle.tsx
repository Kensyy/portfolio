"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "pt" : "en")}
      aria-label={lang === "en" ? "Switch to Português" : "Switch to English"}
      className="rounded-md px-1.5 py-1 text-xs font-semibold text-foreground/70 transition-colors hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
    >
      {lang === "en" ? "PT" : "EN"}
    </button>
  );
}
