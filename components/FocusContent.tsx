"use client";

import { FlaskConical, Stethoscope, Cpu, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import CTABand from "./CTABand";

const icons = [FlaskConical, Stethoscope, Cpu];
const accents = [
  "from-brand-500 to-brand-700",
  "from-mint-500 to-mint-600",
  "from-brand-400 to-mint-500",
];

export default function FocusContent() {
  const { t } = useLanguage();
  const f = t.focusPage;

  return (
    <main>
      <PageHero
        eyebrow={f.hero.eyebrow}
        title={f.hero.title}
        subtitle={f.hero.subtitle}
      />

      <section className="container-px py-20">
        <div className="space-y-6">
          {f.areas.map((area, i) => {
            const Icon = icons[i];
            const reverse = i % 2 === 1;
            return (
              <Reveal key={i} delay={i * 70}>
                <div className="card overflow-hidden p-0">
                  <div
                    className={`grid items-stretch gap-0 lg:grid-cols-[1fr_1.3fr] ${
                      reverse ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div
                      className={`relative flex flex-col justify-center bg-gradient-to-br ${accents[i]} p-8 text-white lg:p-10 [direction:ltr]`}
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                          background:
                            "radial-gradient(20rem 14rem at 80% 20%, rgba(255,255,255,0.6), transparent 60%)",
                        }}
                      />
                      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h2 className="relative mt-5 text-2xl font-bold sm:text-3xl">
                        {area.title}
                      </h2>
                      <p className="relative mt-3 text-sm leading-relaxed text-white/85">
                        {area.desc}
                      </p>
                    </div>

                    <div className="p-8 lg:p-10 [direction:ltr]">
                      <ul className="grid gap-3.5 sm:grid-cols-2">
                        {area.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm"
                          >
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-ink-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
