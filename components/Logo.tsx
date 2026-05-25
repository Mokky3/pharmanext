import Image from "next/image";
import Link from "next/link";

export default function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const textColor = variant === "light" ? "text-white" : "text-ink-900";
  const subColor = variant === "light" ? "text-brand-200" : "text-[#0B2F8F]";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="PharmaNext — home"
    >
      <Image
        src="/logo_nb.png"
        alt="PharmaNext logo"
        width={1103}
        height={1426}
        sizes="44px"
        priority
        className={`h-11 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 ${
          variant === "light" ? "[filter:brightness(0)_invert(1)]" : ""
        }`}
      />
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-tight ${textColor}`}>
          Pharma<span className={subColor}>Next</span>
        </span>
      </span>
    </Link>
  );
}
