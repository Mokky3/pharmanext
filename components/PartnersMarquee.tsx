"use client";

import { Building2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function PartnersMarquee() {
  const { t } = useLanguage();
  const items = [...t.partners.names, ...t.partners.names];

  return (
    <section className="border-y border-brand-100 bg-white py-12">
      <div className="container-px">
        <p className="eyebrow justify-center text-center">{t.partners.eyebrow}</p>
        <h2 className="mt-2 text-center text-xl font-bold text-ink-900 sm:text-2xl">
          {t.partners.title}
        </h2>
      </div>

      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4">
          {items.map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-2xl border border-brand-100 bg-brand-50/50 px-5 py-3"
            >
              <Building2 className="h-4 w-4 text-brand-500" />
              <span className="text-sm font-semibold text-ink-700">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
