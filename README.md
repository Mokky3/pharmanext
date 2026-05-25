# PharmaNext

Website for **PharmaNext** — the pharma, medtech and deep-tech incubator and accelerator
of Uzbekistan, an initiative under the **Agency for Medical and Pharmaceutical Industry Development**
(Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi) of the Republic of Uzbekistan.

The site is designed around **innovation and health**, with a light-blue brand palette and a
teal accent.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (CSS-based theme in `app/globals.css`)
- **TypeScript**
- **lucide-react** for icons

## Internationalization

Fully trilingual — **Uzbek (default), Russian, English** — via a lightweight client-side
language context. No URL locale segments; the choice is stored in `localStorage`.

- `lib/translations.ts` — all copy for the three languages (the `uz` object defines the
  `Dictionary` shape; `ru` and `en` must match it, enforced by TypeScript).
- `lib/i18n.tsx` — `LanguageProvider` + `useLanguage()` hook.
- `components/LanguageSwitcher.tsx` — UZ / RU / EN toggle.

To edit text, change `lib/translations.ts`. To add a language, extend `Locale` and add a
matching dictionary.

## Pages

| Route        | Content                                            |
| ------------ | -------------------------------------------------- |
| `/`          | Home — hero, stats, focus areas, programs, process, why-us, partners, CTA |
| `/about`     | Mission, vision, values, agency partnership |
| `/programs`  | Incubator & Accelerator details, process, eligibility |
| `/focus`     | Pharma & Biotech, MedTech & Digital Health, Deep Tech |
| `/startups`  | Portfolio grid (sample ventures) + join CTA        |
| `/apply`     | Application form                                    |
| `/contact`   | Contact channels, map, contact form                |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Notes / TODO

- **Forms** (`/apply`, `/contact`) currently show a success state on submit but are **not
  wired to a backend**. Connect them to an API route, email service, or CRM before launch.
- **Stats, partner names, and portfolio startups** are illustrative placeholders — replace
  with real figures and logos.
- **Contact details** (`info@pharmanext.uz`, `+998 71 200 00 00`, address) are placeholders.
- The map on `/contact` uses an OpenStreetMap embed centered on Tashkent; update the bbox to
  the real office location.
