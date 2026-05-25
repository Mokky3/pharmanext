"use client";

import Link from "next/link";
import { Check, ArrowRight, Sprout, Rocket, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import Process from "./Process";

const icons = [Sprout, Rocket];

export default function ProgramsContent() {
  const { t } = useLanguage();
  const p = t.programsPage;

  return (
    <main>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
      />

      {/* Program details */}
      <section className="container-px py-20">
        <div className="space-y-8">
          {p.detail.map((prog, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 80}>
                <div className="card grid gap-8 p-8 lg:grid-cols-[1fr_1.2fr] lg:p-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-mint-50 px-3 py-1 text-xs font-semibold text-mint-700">
                        {prog.tag} · {prog.duration}
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-ink-900 sm:text-3xl">
                      {prog.name}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-brand-700">
                      {prog.forWhom}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-ink-500">
                      {prog.desc}
                    </p>
                    <Link href="/apply" className="btn btn-primary mt-6">
                      {p.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="rounded-2xl bg-brand-50/50 p-6">
                    <ul className="space-y-3.5">
                      {prog.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-ink-700">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Process />

      {/* Eligibility */}
      <section className="container-px py-20">
        <Reveal className="card mx-auto max-w-3xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink-900">
            {p.eligibility.title}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {p.eligibility.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-mint-500" />
                <span className="text-ink-700">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/apply" className="btn btn-primary mt-8">
            {p.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
