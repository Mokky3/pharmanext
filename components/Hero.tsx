"use client";

import Link from "next/link";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
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
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Glow */}
      <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-100 via-white to-mint-100/60 blur-2xl" />

      <div className="card relative h-full w-full overflow-hidden rounded-[2.25rem] p-0">
        {/* pulse rings */}
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute inset-0 rounded-full border border-brand-300/50 animate-pulse-ring"
              style={{ animationDelay: `${i * 1.1}s` }}
            />
          ))}
        </div>

        <svg viewBox="0 0 400 400" className="relative h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="hv-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3ec0f5" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
            <linearGradient id="hv-pulse" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1aa7ec" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>

          {/* DNA helix */}
          <g stroke="url(#hv-stroke)" strokeWidth="3" fill="none" opacity="0.9">
            <path d="M150 60 C 250 110, 250 150, 150 200 C 50 250, 50 290, 150 340" />
            <path d="M250 60 C 150 110, 150 150, 250 200 C 350 250, 350 290, 250 340" />
            {Array.from({ length: 7 }).map((_, i) => {
              const y = 75 + i * 42;
              const w = Math.abs(Math.sin((i / 6) * Math.PI)) * 90 + 12;
              const cx = 200;
              return (
                <line
                  key={i}
                  x1={cx - w / 2}
                  y1={y}
                  x2={cx + w / 2}
                  y2={y}
                  stroke="#7dd3fc"
                  strokeWidth="2.5"
                />
              );
            })}
          </g>

          {/* nodes */}
          {Array.from({ length: 7 }).map((_, i) => {
            const y = 75 + i * 42;
            const w = Math.abs(Math.sin((i / 6) * Math.PI)) * 90 + 12;
            return (
              <g key={i}>
                <circle cx={200 - w / 2} cy={y} r="5.5" fill="#1aa7ec" />
                <circle cx={200 + w / 2} cy={y} r="5.5" fill="#14b8a6" />
              </g>
            );
          })}

          {/* pulse line */}
          <path
            d="M20 200 H120 l14 -46 22 92 16 -60 12 24 H380"
            fill="none"
            stroke="url(#hv-pulse)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="6 6"
            className="animate-dash"
            opacity="0.5"
          />
        </svg>

        {/* floating chips */}
        <div className="absolute left-5 top-6 animate-float rounded-2xl border border-brand-100 bg-white/90 px-3 py-2 shadow-lg backdrop-blur">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-brand-600">Biotech</p>
          <p className="text-sm font-bold text-ink-900">R&amp;D</p>
        </div>
        <div className="absolute bottom-7 right-5 animate-float-slow rounded-2xl border border-mint-200 bg-white/90 px-3 py-2 shadow-lg backdrop-blur">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-mint-600">MedTech</p>
          <p className="text-sm font-bold text-ink-900">AI Health</p>
        </div>
      </div>
    </div>
  );
}
