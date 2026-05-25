"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function CTABand() {
  const { t } = useLanguage();

  return (
    <section className="container-px py-20 sm:py-24">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 px-6 py-14 text-center sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(28rem 16rem at 15% 10%, rgba(45,212,191,0.45), transparent 60%), radial-gradient(30rem 18rem at 90% 90%, rgba(62,192,245,0.5), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.ctaBand.title}
          </h2>
          <p className="mt-4 text-base text-brand-100/90 sm:text-lg">
            {t.ctaBand.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/apply"
              className="btn bg-white text-brand-700 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t.ctaBand.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="btn border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              {t.ctaBand.secondary}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
