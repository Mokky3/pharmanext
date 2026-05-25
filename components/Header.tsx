"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/programs", label: t.nav.programs },
    { href: "/focus", label: t.nav.focus },
    { href: "/startups", label: t.nav.startups },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-100 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <nav className="container-px flex h-18 items-center justify-between py-3">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? "text-brand-700"
                    : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Link href="/apply" className="btn btn-primary hidden h-10 px-5 text-sm sm:inline-flex">
            {t.nav.apply}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 lg:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-brand-100 bg-white lg:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <Link href="/apply" className="btn btn-primary flex-1">
                {t.nav.apply}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
