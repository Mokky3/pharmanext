"use client";

import Link from "next/link";
import { Check, ArrowRight, Sprout, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons = [Sprout, Rocket];

export default function ProgramsPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow={t.programsHome.eyebrow}
          title={t.programsHome.title}
          subtitle={t.programsHome.subtitle}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.programsHome.items.map((item, i) => {
            const Icon = icons[i];
            const featured = i === 1;
            return (
              <Reveal key={i} delay={i * 110}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-8 ${
                    featured
                      ? "bg-ink-900 text-white"
                      : "card"
                  }`}
                >
                  {featured && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        background:
                          "radial-gradient(30rem 16rem at 90% 0%, rgba(26,167,236,0.5), transparent 60%)",
                      }}
                    />
                  )}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                        featured
                          ? "bg-white/10 text-brand-200"
                          : "bg-brand-50 text-brand-600"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        featured
                          ? "bg-mint-400/20 text-mint-300"
                          : "bg-brand-50 text-brand-700"
                      }`}
                    >
                      {item.tag} · {item.duration}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-2xl font-bold">
                    {item.name}
                  </h3>
                  <p
                    className={`relative mt-2.5 text-sm leading-relaxed ${
                      featured ? "text-brand-100/80" : "text-ink-500"
                    }`}
                  >
                    {item.desc}
                  </p>

                  <ul className="relative mt-6 space-y-3">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm">
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            featured
                              ? "bg-mint-400/20 text-mint-300"
                              : "bg-mint-50 text-mint-600"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className={featured ? "text-brand-100/90" : "text-ink-700"}>
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/programs"
                    className={`relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold ${
                      featured ? "text-mint-300 hover:text-mint-200" : "text-brand-700 hover:text-brand-900"
                    }`}
                  >
                    {t.programsHome.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
