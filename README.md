# Day Spa Gold Coast — SEO Site

A high-performance, SEO-optimised Next.js 14 site targeting the keyword **"Day Spa Gold Coast"**, engineered to outrank The Urban List's organic result. RejoovMe Skin Clinic & Day Spa (Surfers Paradise) is featured as the prominent **Day Spa of the Month**.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with the RejoovMe palette tokenised in `tailwind.config.ts`
- **Framer Motion** available for additional scroll motion (currently using CSS keyframes for performance)
- **next/image** for AVIF/WebP, lazy-loading, fixed dimensions (zero CLS)
- **next/font** with `display: swap` for Fraunces (display) + Nunito Sans (body)
- **next-sitemap** generates `sitemap.xml` and `robots.txt` on `postbuild`
- JSON-LD schema via Next's built-in `<Script>` strategy

## Routes

| Path | Purpose |
| --- | --- |
| `/` | 301 redirect → `/day-spa-gold-coast` (configured in `next.config.js`) |
| `/day-spa-gold-coast` | Main long-form ranking page (canonical, hero, RejoovMe feature, competitor list, methodology, FAQ, final CTA) |
| `/blog/rejoovme-day-spa-of-the-month-may-2026` | Companion 1,500+ word feature post |

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000 → redirects to /day-spa-gold-coast
npm run build        # builds + runs next-sitemap (postbuild)
npm run start        # production
```

Set `SITE_URL` in `.env` for sitemap canonicalisation:

```
SITE_URL=https://dayspagoldcoast.com.au
```

## Deploy

Vercel-ready. Push to `main` and import. Set the `SITE_URL` env var in the Vercel project. The `postbuild` step generates the sitemap and robots.txt against that URL.

## Image sourcing (IMPORTANT)

All RejoovMe and competitor image paths in this repo are **placeholders**. Before launch:

1. **Download originals from [rejoovme.com.au](https://rejoovme.com.au) with permission** from the venue. Replace placeholders at:
   - `/public/images/rejoovme/treatment-room.jpg`
   - `/public/images/rejoovme/magnesium-spa.jpg`
   - `/public/images/rejoovme/steam-room.jpg`
   - `/public/images/rejoovme/facial.jpg`
   - `/public/images/rejoovme/exterior.jpg`
   - `/public/images/rejoovme/lounge.jpg`
2. **Hero**: `/public/images/hero/gold-coast-day-spa-hero.jpg` (1920×1080, golden-hour Surfers Paradise / palm fronds).
3. **Competitor thumbnails**: `/public/images/competitors/<slug>.jpg` — license each from the venue, Unsplash, or your own shoots.
4. **OG image**: `/public/og/day-spa-gold-coast.jpg` (1200×630) and `/public/og/rejoovme-feature.jpg`.
5. Compress all images (Squoosh / Sharp). Target ≤120 KB at 1× for thumbnails, ≤300 KB for hero.
6. Every image alt is already keyword-tuned in code — keep alts intact when swapping files. Edit alts in `components/RejoovMeFeature.tsx`, `components/CompetitorList.tsx`, `app/blog/.../page.tsx` if you need to refresh them.

## Swapping the "Day Spa of the Month"

When May rolls over, the feature is updated in three places:

1. `lib/site.ts` → `SITE.lastUpdatedISO` and `SITE.lastUpdatedHuman`.
2. `components/RejoovMeFeature.tsx` — banner badge string `Day Spa of the Month — May 2026`, gallery sources, copy paragraphs, and signature packages list.
3. `app/blog/rejoovme-day-spa-of-the-month-may-2026/` — rename the folder to the new month slug and update copy. Add a 301 from the old slug if you want to preserve link equity (configure in `next.config.js`).
4. If switching the featured venue away from RejoovMe, also update:
   - `lib/site.ts` → `REJOOVME` constants (replace with new venue NAP, geo, rating).
   - `lib/schema.ts` → `rejoovmeLocalBusinessSchema`, `rejoovmeReviewSchema`.
   - `app/day-spa-gold-coast/page.tsx` → `itemListSchema` position 1 entry.
   - `lib/data.ts` `competitors` array — promote/demote venues accordingly.

## SEO checklist (ongoing freshness)

- [ ] Bump `SITE.lastUpdatedISO` + `SITE.lastUpdatedHuman` every quarter.
- [ ] Refresh `dateModified` in the article schema (driven by `SITE.lastUpdatedISO`).
- [ ] Add 1–2 new FAQ entries in `lib/data.ts` per quarter targeting fresh long-tail queries (e.g., "best day spa Gold Coast for mothers day").
- [ ] Add a new blog post each month — link back to `/day-spa-gold-coast` with the exact-match anchor.
- [ ] Verify Lighthouse: LCP < 2.0s, CLS < 0.05, INP < 200ms, score 95+ across all four metrics.
- [ ] Submit `sitemap.xml` to Google Search Console after each deploy.
- [ ] Monitor SERP for "Day Spa Gold Coast" and adjust intro/H2s to mirror new SERP intent every quarter.
- [ ] Audit internal links: main page ↔ blog post ↔ FAQ ↔ footer.
- [ ] Audit outbound `nofollow` on competitors, `dofollow` (no `rel`) on RejoovMe brand-partner links.
- [ ] Re-run keyword density check — `Day Spa Gold Coast` should appear 12–18 times across H1/H2/intro/body/FAQ/alts.
- [ ] Replace the Google Maps `iframe` query with a precise lat/long once final NAP is confirmed.

## Schema markup wired

| Schema | Where |
| --- | --- |
| `Organization` | `app/layout.tsx` (sitewide) |
| `Article` | Both pages, via `lib/schema.ts > articleSchema()` |
| `ItemList` | Main page (RejoovMe at position 1, competitors 2–17) |
| `LocalBusiness` (HealthAndBeautyBusiness) | Both pages — RejoovMe NAP, geo, hours, aggregateRating |
| `Review` | Both pages — RejoovMe 5-star editorial review |
| `FAQPage` | Main page (12 Q&As) |
| `BreadcrumbList` | Both pages |

Validate with [Schema Markup Validator](https://validator.schema.org/) and Google Rich Results Test before launch.

## Accessibility

- Semantic HTML5 (`<article>`, `<section>`, `<nav>`, `<aside>`).
- Skip-link friendly (sticky header doesn't trap focus).
- `prefers-reduced-motion` honoured in `app/globals.css`.
- All interactive controls keyboard-reachable.
- Aim for WCAG 2.1 AA — verify colour contrast on the teal CTA buttons against the chosen background photo before final shoot.

## File map

```
app/
  layout.tsx                                 # Fonts, metadata, OG/Twitter, Organization JSON-LD
  globals.css                                # Tailwind layers, RejoovMe pill, wave divider
  day-spa-gold-coast/page.tsx                # Main long-form ranking page
  blog/rejoovme-day-spa-of-the-month-may-2026/page.tsx
components/
  Header.tsx Hero.tsx Breadcrumbs.tsx Intro.tsx
  RejoovMeFeature.tsx CompetitorList.tsx
  Methodology.tsx FAQ.tsx FinalCTA.tsx
  Footer.tsx MobileStickyCTA.tsx
lib/
  site.ts        # SITE + REJOOVME constants
  schema.ts      # JSON-LD builders
  data.ts        # Competitor list + FAQ copy
public/
  images/        # Hero, RejoovMe gallery, competitors (placeholders — see above)
  og/            # OG/Twitter cards (1200×630)
next.config.js next-sitemap.config.js tailwind.config.ts tsconfig.json postcss.config.js
```

## License & content note

Editorial copy in this repo is original. Imagery referenced from rejoovme.com.au must be licensed/permissioned before publication.
