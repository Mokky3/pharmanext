"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { CONTACT, osmEmbedUrl } from "@/lib/site";
import PageHero from "./PageHero";
import Reveal from "./Reveal";

const channelIcons = [Mail, Phone, MapPin];

export default function ContactContent() {
  const { t } = useLanguage();
  const c = t.contactPage;
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition placeholder:text-ink-500/60 focus:border-brand-500 focus:ring-2 focus:ring-brand-200";
  const labelClass = "mb-1.5 block text-sm font-semibold text-ink-800";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
      />

      <section className="container-px py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Channels */}
          <Reveal>
            <div className="space-y-4">
              {c.channels.map((ch, i) => {
                const Icon = channelIcons[i];
                const href =
                  i === 0
                    ? `mailto:${ch.value}`
                    : i === 1
                    ? `tel:${ch.value.replace(/\s/g, "")}`
                    : CONTACT.mapUrl;
                const external = href.startsWith("http");
                const Inner = (
                  <div className="card card-hover flex items-center gap-4 p-5">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                        {ch.label}
                      </p>
                      <p className="mt-0.5 text-base font-bold text-ink-900">
                        {ch.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <a
                    key={i}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {Inner}
                  </a>
                );
              })}

              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-3xl border border-brand-100"
              >
                <iframe
                  title="PharmaNext location"
                  src={osmEmbedUrl()}
                  className="pointer-events-none h-56 w-full"
                  loading="lazy"
                />
              </a>
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
                  {c.success}
                </h2>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-7 sm:p-8">
                <h2 className="text-xl font-bold text-ink-900">{c.formTitle}</h2>
                <div className="mt-6 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="cname">
                        {c.name}
                      </label>
                      <input id="cname" name="name" required className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="cemail">
                        {c.email}
                      </label>
                      <input
                        id="cemail"
                        name="email"
                        type="email"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="csubject">
                      {c.subject}
                    </label>
                    <input id="csubject" name="subject" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="cmessage">
                      {c.message}
                    </label>
                    <textarea
                      id="cmessage"
                      name="message"
                      rows={5}
                      required
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    {c.submit}
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
