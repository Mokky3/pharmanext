import { type ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  icon,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  icon?: ReactNode;
}) {
  return (
    <Reveal
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      <span className={`eyebrow ${center ? "justify-center" : ""}`}>
        {icon}
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
