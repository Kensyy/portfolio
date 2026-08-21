"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { dictionary } from "@/i18n/dictionary";

export default function NotFound() {
  const { lang } = useLanguage();
  const t = dictionary[lang].notFound;

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-start justify-center px-6">
      <p className="text-sm font-medium text-foreground/50">{t.code}</p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {t.title}
      </h1>
      <p className="mt-3 text-foreground/70">{t.body}</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-1 rounded-md border border-black/15 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
      >
        {t.back}
        <span aria-hidden>→</span>
      </Link>
    </main>
  );
}
