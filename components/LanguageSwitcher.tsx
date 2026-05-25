"use client";

import { useLanguage } from "@/lib/i18n";
import { locales, localeLabels, localeNames } from "@/lib/translations";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-brand-200 bg-brand-50/70 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          aria-label={localeNames[l]}
          className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition ${
            locale === l
              ? "bg-brand-600 text-white shadow-sm"
              : "text-brand-700 hover:text-brand-900"
          }`}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
