"use client";

import Link from "next/link";
import { ArrowRight, Beaker, Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "./PageHero";
import Reveal from "./Reveal";

export default function StartupsContent() {
  const { t } = useLanguage();
  const s = t.startupsPage;

  return (
    <main>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        subtitle={s.hero.subtitle}
      />

      <section className="container-px py-20">
        <Reveal className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/60 px-4 py-2 text-sm text-ink-500">
          <Info className="h-4 w-4 text-brand-500" />
          {s.note}
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div className="card card-hover group flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-mint-100 text-brand-700">
                    <Beaker className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {item.sector}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink-900">
                  {item.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Join CTA */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-ink-900 px-6 py-12 text-center sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(26rem 14rem at 85% 10%, rgba(45,212,191,0.45), transparent 60%)",
              }}
            />
            <div className="relative mx-auto max-w-xl">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                {s.joinTitle}
              </h2>
              <p className="mt-3 text-brand-100/90">{s.joinDesc}</p>
              <Link
                href="/apply"
                className="btn mt-7 bg-white text-brand-700 hover:-translate-y-0.5 hover:shadow-xl"
              >
                {s.joinCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
