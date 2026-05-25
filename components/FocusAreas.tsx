"use client";

import Link from "next/link";
import { FlaskConical, Stethoscope, Cpu, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons = [FlaskConical, Stethoscope, Cpu];
const accents = [
  "from-brand-500 to-brand-700",
  "from-mint-500 to-mint-600",
  "from-brand-400 to-mint-500",
];

export default function FocusAreas() {
  const { t } = useLanguage();

  return (
    <section className="section-soft py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow={t.focusHome.eyebrow}
          title={t.focusHome.title}
          subtitle={t.focusHome.subtitle}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.focusHome.areas.map((area, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 90}>
                <Link
                  href="/focus"
                  className="card card-hover group flex h-full flex-col p-7"
                >
                  <span
                    className={`inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${accents[i]} text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 flex items-center gap-1.5 text-xl font-bold text-ink-900">
                    {area.title}
                    <ArrowUpRight className="h-4 w-4 text-brand-400 opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                    {area.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
