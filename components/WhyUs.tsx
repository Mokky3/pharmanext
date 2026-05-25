"use client";

import {
  ShieldCheck,
  Microscope,
  Coins,
  Users,
  Globe,
  Handshake,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons = [ShieldCheck, Microscope, Coins, Users, Globe, Handshake];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow={t.why.eyebrow}
          title={t.why.title}
          subtitle={t.why.subtitle}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="card card-hover flex h-full gap-4 p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
