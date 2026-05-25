"use client";

import { useLanguage } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="section-soft py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <div className="relative mt-14">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, i) => (
              <Reveal key={i} delay={i * 90} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand-200 bg-white text-lg font-extrabold text-brand-600 shadow-sm">
                  {step.num}
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
