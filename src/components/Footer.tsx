"use client";

import { socialLinks, repoUrl } from "@/lib/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { dictionary } from "@/i18n/dictionary";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function Footer() {
  const { lang } = useLanguage();
  const t = dictionary[lang].footer;

  const contacts = [
    { label: t.github, href: socialLinks.github },
    { label: t.linkedin, href: socialLinks.linkedin },
    { label: t.viewSource, href: repoUrl },
    { label: t.vcard, href: "victor-gabriel-da-silva.vcf", download: true },
  ];

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-black/10 dark:border-white/10"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-foreground/60">{t.builtWith}</p>
          <p className="text-xs text-foreground/40">
            {t.lastUpdated} {process.env.NEXT_PUBLIC_BUILD_DATE}
          </p>
        </div>
        <ul className="print:hidden flex flex-wrap gap-5 text-sm font-medium">
          {contacts.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                target={c.download ? undefined : "_blank"}
                rel={c.download ? undefined : "noreferrer"}
                download={c.download}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {c.label}
              </a>
            </li>
          ))}
          <li>
            <CopyEmailButton
              email={socialLinks.email}
              label={t.copyEmail}
              copiedLabel={t.copied}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
