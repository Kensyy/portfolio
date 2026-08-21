"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "pt";

type Ctx = { lang: Lang; setLang: (lang: Lang) => void };

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // One-time client-only read of a browser API (localStorage) that isn't
    // available during static export — can't be a lazy useState initializer.
    const stored = localStorage.getItem("lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === "en" || stored === "pt") setLangState(stored);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
