"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "./PageHero";
import Reveal from "./Reveal";

export default function ApplyContent() {
  const { t } = useLanguage();
  const a = t.applyPage;
  const f = a.form;
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition placeholder:text-ink-500/60 focus:border-brand-500 focus:ring-2 focus:ring-brand-200";
  const labelClass = "mb-1.5 block text-sm font-semibold text-ink-800";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        subtitle={a.hero.subtitle}
      />

      <section className="container-px py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* What we look for */}
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex items-center gap-2 rounded-full bg-mint-50 px-3 py-1 text-xs font-semibold text-mint-700">
                <Sparkles className="h-3.5 w-3.5" />
                {a.lookingFor.title}
              </span>
              <ul className="mt-5 space-y-4">
                {a.lookingFor.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <span className="text-sm leading-relaxed text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={80}>
            {submitted ? (
              <div className="card flex flex-col items-center justify-center px-8 py-16 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-mint-50 text-mint-600">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-ink-900">
                  {f.success}
                </h2>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-7 sm:p-8">
                <h2 className="text-xl font-bold text-ink-900">{f.title}</h2>
                <div className="mt-6 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="name">
                        {f.name}
                      </label>
                      <input id="name" name="name" required className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        {f.email}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        {f.phone}
                      </label>
                      <input id="phone" name="phone" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="startup">
                        {f.startup}
                      </label>
                      <input id="startup" name="startup" required className={inputClass} />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="sector">
                        {f.sector}
                      </label>
                      <select id="sector" name="sector" className={inputClass}>
                        {f.sectorOptions.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="stage">
                        {f.stage}
                      </label>
                      <select id="stage" name="stage" className={inputClass}>
                        {f.stageOptions.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="message">
                      {f.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder={f.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    {f.submit}
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
