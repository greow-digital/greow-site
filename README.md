# greow.digital

Website for **Greow (Greow Digital)**, the growth and GTM consultancy of Erik Oliva Werner, Stockholm. The site is in English and Swedish.

## Stack

- Next.js 14 (App Router), React 18, TypeScript
- Static export (`output: 'export'`, `trailingSlash: true`) to `out/`
- Hosted on GitHub Pages: every push to `main` builds and deploys via `.github/workflows/deploy.yml`. The custom domain comes from `public/CNAME`.

## Develop

```bash
npm ci
npm run dev            # http://localhost:3000
```

## Build and checks

```bash
npm run build          # static export to out/
npm run check:links    # every internal link and asset in out/ resolves
npm run check:seo      # metadata, canonical/hreflang, JSON-LD, sitemap, robots, internal linking
```

Run all three before merging to `main`. Details: `docs/technical-seo.md`.

## Where things live

| What | Where |
|---|---|
| Homepage copy (EN/SV) | `src/lib/translations.ts` |
| Classic service pages + services menu | `src/lib/services.ts` |
| AI Growth Consultant / AI GTM Systems | `src/lib/aiGrowthConsultant.ts`, `src/lib/aiGtmSystems.ts` |
| Founder bio | `src/lib/founder.ts` |
| Case studies + work index | `src/lib/work.ts` |
| Business name, address, map, profiles (`sameAs`) | `src/lib/business.ts` |
| Site-wide schema.org graph | `src/lib/schema.ts` |
| EN ↔ SV page pairs (sitemap + language switcher) | `src/lib/alternates.ts` |
| Pages not yet published | `src/lib/routes.ts` |
| Styles (Greow design tokens) | `src/app/globals.css` |

## Docs

- `docs/seo-ai-audit.md`: audit, backlog and implementation log
- `docs/technical-seo.md`: identifiers, schema, checks, live-site verification list
- `docs/measurement/`: monthly SEO and AI-visibility tracking (CSV templates)
- `docs/drafts/`: unpublished drafts (not built)

## Brand

- Colours: Salmon `#FF8773`, Turquoise `#A5DBC2`, Jungle `#195B5A`, Jet `#1A1A1A`
- Fonts: Ubuntu (headings), Source Sans 3 (body)
- Founder name: always **Erik Oliva Werner** (`npm run check:seo` fails on the short form)
