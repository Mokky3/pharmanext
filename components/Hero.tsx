"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  FlaskConical,
  HeartPulse,
  Cpu,
  TrendingUp,
  Rocket,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45rem 30rem at 75% 0%, rgba(62,192,245,0.18), transparent 60%), radial-gradient(40rem 26rem at 10% 30%, rgba(20,184,166,0.12), transparent 60%)",
        }}
      />

      <div className="container-px relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Copy */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            {t.hero.badge}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.07] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {t.hero.titleA}{" "}
            <span className="text-gradient">{t.hero.titleHighlight}</span>{" "}
            {t.hero.titleB}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/apply" className="btn btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/programs" className="btn btn-ghost">
              <Play className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <p className="mt-7 inline-flex items-center gap-2 text-sm text-ink-500">
            <ShieldCheck className="h-4 w-4 text-mint-500" />
            {t.hero.trust}
          </p>
        </div>

        {/* Visual */}
        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const { t } = useLanguage();
  const v = t.heroVisual;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Glow */}
      <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-100 via-white to-mint-100/60 blur-2xl" />

      <div className="card relative grid h-full w-full grid-cols-2 grid-rows-3 gap-3 rounded-[2.25rem] p-3.5 sm:p-4">
        {/* Pharma */}
        <Tile
          icon={<FlaskConical className="h-5 w-5" />}
          accent="from-brand-500 to-brand-700"
          label={v.pharma}
          sub="R&D · GMP"
        />

        {/* MedTech — with a live indicator */}
        <div className="relative flex flex-col justify-between rounded-2xl border border-mint-100 bg-mint-50/60 p-3.5">
          <span className="absolute right-3 top-3 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-500" />
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-mint-500 to-mint-600 text-white shadow">
            <HeartPulse className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-ink-900">{v.medtech}</p>
            <p className="text-[0.7rem] font-medium text-ink-500">Digital Health</p>
          </div>
        </div>

        {/* Growth — wide dark tile with an animated chart */}
        <div className="relative col-span-2 flex flex-col overflow-hidden rounded-2xl bg-ink-900 p-3.5 text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(22rem 11rem at 92% 0%, rgba(26,167,236,0.4), transparent 60%)",
            }}
          />
          <div className="relative flex items-center justify-between">
            <p className="text-xs font-semibold text-brand-200">{v.growth}</p>
            <span className="inline-flex items-center gap-1 rounded-full bg-mint-400/15 px-2 py-0.5 text-xs font-bold text-mint-300">
              <TrendingUp className="h-3.5 w-3.5" /> +38%
            </span>
          </div>
          <svg
            viewBox="0 0 240 64"
            preserveAspectRatio="none"
            className="relative mt-1 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1aa7ec" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#1aa7ec" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3ec0f5" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>
            <path
              d="M0 52 L40 46 L80 49 L120 32 L160 36 L200 18 L240 9 L240 64 L0 64 Z"
              fill="url(#hv-area)"
            />
            <path
              d="M0 52 L40 46 L80 49 L120 32 L160 36 L200 18 L240 9"
              fill="none"
              stroke="url(#hv-line)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="440"
              className="animate-draw"
            />
          </svg>
        </div>

        {/* Deep Tech */}
        <Tile
          icon={<Cpu className="h-5 w-5" />}
          accent="from-brand-400 to-mint-500"
          label="Deep Tech"
          sub="AI / ML"
        />

        {/* Startups stat */}
        <div className="flex flex-col justify-between rounded-2xl border border-brand-100 bg-brand-50/60 p-3.5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
            <Rocket className="h-5 w-5" />
          </span>
          <div>
            <p className="text-2xl font-extrabold leading-none tracking-tight text-brand-600">
              120+
            </p>
            <p className="mt-1 text-[0.7rem] font-medium text-ink-500">
              {v.startups}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tile({
  icon,
  accent,
  label,
  sub,
}: {
  icon: ReactNode;
  accent: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-brand-100 bg-brand-50/50 p-3.5">
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow`}
      >
        {icon}
      </span>
      <div>
        <p className="text-sm font-bold text-ink-900">{label}</p>
        <p className="text-[0.7rem] font-medium text-ink-500">{sub}</p>
      </div>
    </div>
  );
}
