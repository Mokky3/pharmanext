"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Send, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { CONTACT, SOCIAL, LEGAL } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const legalLinks = [
    { href: LEGAL.offer, label: t.footer.offer, external: true },
    { href: LEGAL.privacy, label: t.footer.privacy, external: true },
    { href: LEGAL.siteMap, label: t.footer.siteMap, external: true },
    { href: LEGAL.wwwUz, label: "www.uz", external: true },
  ];

  const links = [
    { href: "/about", label: t.nav.about },
    { href: "/programs", label: t.nav.programs },
    { href: "/focus", label: t.nav.focus },
    { href: "/startups", label: t.nav.startups },
    { href: "/apply", label: t.nav.apply },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-brand-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(40rem 20rem at 80% -10%, rgba(26,167,236,0.4), transparent 60%), radial-gradient(36rem 18rem at 0% 110%, rgba(20,184,166,0.3), transparent 55%)",
        }}
      />
      <div className="container-px relative py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-brand-200/80">
              {t.footer.tagline}
            </p>
            <p className="mt-3 text-xs font-medium text-brand-300">
              {t.footer.parent}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-300">
              {t.footer.explore}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-100/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-300">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-100/80">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-white"
                >
                  {t.footer.address}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2.5">
              {[
                { Icon: Send, label: "Telegram", href: SOCIAL.telegram },
                { Icon: Linkedin, label: "LinkedIn", href: SOCIAL.linkedin },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-200 transition hover:border-brand-400 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <nav
            aria-label={t.footer.legal}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs"
          >
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-200/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex flex-col items-center justify-between gap-3 text-xs text-brand-200/70 sm:flex-row">
            <p>
              © {year} PharmaNext. {t.footer.rights}
            </p>
            <p className="inline-flex items-center gap-1.5">
              {t.footer.builtFor}
              <Heart className="h-3.5 w-3.5 fill-mint-400 text-mint-400" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
