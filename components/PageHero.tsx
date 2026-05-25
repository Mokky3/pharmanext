import { type ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-brand-100">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(80%_80%_at_50%_-10%,black,transparent)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40rem 24rem at 80% -20%, rgba(62,192,245,0.16), transparent 60%), radial-gradient(34rem 20rem at 0% 0%, rgba(20,184,166,0.1), transparent 60%)",
        }}
      />
      <div className="container-px relative py-16 sm:py-20">
        <div className="reveal max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
