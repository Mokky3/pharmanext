"use client";

import { useLanguage } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function StatsBand() {
  const { t } = useLanguage();

  return (
    <section className="container-px -mt-2 pb-4">
      <Reveal className="card grid grid-cols-2 gap-y-8 rounded-3xl px-6 py-8 sm:px-10 lg:grid-cols-4">
        {t.stats.map((s, i) => (
          <div
            key={i}
            className={`text-center ${
              i !== t.stats.length - 1 ? "lg:border-r lg:border-brand-100" : ""
            }`}
          >
            <p className="text-3xl font-extrabold tracking-tight text-brand-600 sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1.5 px-2 text-sm font-medium text-ink-500">
              {s.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
