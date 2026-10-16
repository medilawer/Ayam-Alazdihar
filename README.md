# AYAM

Bilingual luxury chauffeur website built with Next.js App Router, React 19, TypeScript, Tailwind CSS 4, shadcn-style Radix components, Lucide, next-intl, React Hook Form, and Zod.

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Arabic is the default; the language toggle persists English/Arabic in a cookie and updates the document language and direction. Production: `npm run build`, then `npm start`.

## Rebrand details

The public brand is AYAM; the header and footer wordmark reads **Ayaam Al-Azdihar**. The contact email is **info@ayam-alazdihar.com**. The company name in `Pasted image.png` is **ayam alazdihar Company / شركة ايام الازدهار**. The owner supplied the current business location as **Olaya, Riyadh, Saudi Arabia / حي العليا، الرياض، المملكة العربية السعودية**, replacing the earlier Madinah address. The business location is centralized in `src/lib/config.ts` and shown in the contact page, footer, and business structured data.

The document does not specify services, a domain, email, phone, or brand colors. The existing transport services and contact configuration are retained as requested, with Riyadh as the business base. Midnight navy (#0A192F) and gold (#C5A059) were selected for the premium transport brand. The production domain is **https://ayam-alazdihar.com**, matching the contact email **info@ayam-alazdihar.com**. This URL is used by metadata, structured data, the sitemap, and robots.txt. `newdomain.com`, `info@newdomain.com`, and `+966 ...` were treated as placeholders, not published contact details. The domain and email have defaults in `src/lib/config.ts`; environment variables can override them. Configure the remaining contact details below. The national-address proof number and customer account number are not treated as commercial registration, VAT, or transport license numbers.

Tailwind 4 colors are defined in `src/app/globals.css`: edit `--brand-primary` and `--brand-accent`. The current primary is `#0A192F`. If changing it, also update the metadata theme color in `src/app/layout.tsx` and favicon in `src/app/icon.svg`.

## Business configuration

The contact and WhatsApp dispatch number is **+966 55 450 0138**, configured by default in `src/lib/config.ts`. `NEXT_PUBLIC_DISPATCH_PHONE` can override it using digits only, including the country code (`966554500138`). Set contact email, public site URL, TGA license, CR, and VAT number in `.env.local`; rebuild after changes. Blank compliance fields show honest placeholders. No messages are sent automatically. Users review their validated request and explicitly open WhatsApp to send it.

Rates in `src/lib/data.ts` are demonstration values. Have the operator approve routes, capacities, equipment, service claims, and prices before publishing. Estimates show a 15% tax calculation and require dispatch confirmation; this application is not a payment or reservation confirmation system. No database is needed for the WhatsApp request flow. Flight monitoring is a requestable amenity, not a live flight-data integration.

## Pages and functionality

- `/`: hero, quick booking tabs, fleet, services, dynamic route estimator, trust information.
- `/fleet`: ten vehicles, category filters, specification dialogs and booking actions.
- `/services`, `/rates`, `/about`: service information and interactive routes.
- `/book`: validated reservation form and WhatsApp request preview.
- `/contact`: dispatch contact, Olaya, Riyadh business address, and Google Maps city selector.

Maps load on user action and require internet. The Riyadh tab displays Olaya; other tabs display city areas. Local fonts and optimized WebP assets avoid runtime font/image CDN dependencies. Structured data uses valid `LocalBusiness` and `TaxiService` types, with `ChauffeurService` as the service description; `ChauffeurService` is not used as an unsupported schema type. Licensing is not represented as verified until details are supplied.

## Checks

```bash
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Browser tests expect the production site at http://localhost:3000; run `npm start` first. They use an installed Google Chrome, or Playwright Chromium when `CHROME_PATH` is not supplied and Chrome is unavailable.

## Visual assets

`public/images/hero.webp`, `sedan.webp`, `suv.webp`, and `van.webp` were generated with the built-in imagegen tool and optimized locally. Images illustrate vehicle categories, not verified operator inventory. The exact prompts are saved in `docs/image-prompts.json`. Replace them with approved fleet photography for launch. Typography is served locally from `public/fonts` (Tajawal and Plus Jakarta Sans).

# Ayam-Alazdihar
