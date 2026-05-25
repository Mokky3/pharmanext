import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import DnaBackground from "@/components/DnaBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://pharmanext.uz"),
  title: {
    default: "PharmaNext — Pharma, MedTech & Deep Tech Incubator of Uzbekistan",
    template: "%s — PharmaNext",
  },
  description:
    "PharmaNext is Uzbekistan's pharma, medtech and deep-tech incubator and accelerator under the Agency for Medical and Pharmaceutical Industry Development. We turn bold science into companies that improve lives.",
  keywords: [
    "PharmaNext",
    "Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi",
    "pharma incubator",
    "medtech accelerator",
    "deep tech Uzbekistan",
    "healthcare startups",
  ],
  openGraph: {
    title: "PharmaNext — Health Innovation Incubator & Accelerator",
    description:
      "Uzbekistan's pharma, medtech and deep-tech incubator and accelerator under the Agency for Medical and Pharmaceutical Industry Development.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <DnaBackground />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
