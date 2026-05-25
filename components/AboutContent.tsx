"use client";

import { Target, Eye, Microscope, HeartPulse, Eye as EyeIcon, Handshake, Landmark } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import CTABand from "./CTABand";

const valueIcons = [Microscope, HeartPulse, EyeIcon, Handshake];

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  return (
    <main>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        subtitle={a.hero.subtitle}
      />

      {/* Mission & Vision */}
      <section className="container-px py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { icon: Target, ...a.mission, accent: "from-brand-500 to-brand-700" },
            { icon: Eye, ...a.vision, accent: "from-mint-500 to-mint-600" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={i} delay={i * 100}>
                <div className="card h-full p-8">
                  <span
                    className={`inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-ink-900">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-500">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="section-soft py-20">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">{a.values.title}</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {a.values.title}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.items.map((item, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="card card-hover h-full p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parent organization */}
      <section className="container-px py-20">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-white p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-mint-500 text-white shadow-xl">
              <Landmark className="h-9 w-9" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
                {a.parentOrg.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-500">
                {a.parentOrg.desc}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CTABand />
    </main>
  );
}
