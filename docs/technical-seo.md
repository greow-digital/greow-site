# Technical SEO & structured data — greow.digital

**Last updated:** 2026-11-10
**Checks:** `npm run build && npm run check:links && npm run check:seo`

This document describes how canonicals, hreflang, sitemap, robots and schema.org data are produced, how they are validated, and what still has to be verified on the live site.

---

## 1. Identity and stable identifiers

All structured data uses fixed `@id`s so that every page describes the same entities in the same way. Do not change these IDs; other pages and external tools refer to them.

| Entity | `@id` | Defined in | On which pages |
|---|---|---|---|
| WebSite | `https://greow.digital/#website` | `src/lib/schema.ts` | all |
| Organization (Greow, alt. Greow Digital) | `https://greow.digital/#organization` | `src/lib/schema.ts` | all |
| Logo (ImageObject, 180×180 PNG) | `https://greow.digital/#logo` | `src/lib/schema.ts` | all |
| Person (Erik Oliva Werner) | `https://greow.digital/#erik` | `src/lib/schema.ts` | all; `url` = `/erik-oliva-werner/`, description = micro bio |
| ProfilePage (bio) | `<bio URL>#profilepage` | `founderJsonLd()` in `src/lib/founder.ts` | `/erik-oliva-werner/`, `/sv/erik-oliva-werner/` |
| ProfessionalService (Greow) | `https://greow.digital/#service` | `src/lib/schema.ts` | all |
| Service (per service page) | `<page URL>#service` | `services.ts`, `aiGrowthConsultant.ts`, `aiGtmSystems.ts` | service pages |
| BreadcrumbList | `<page URL>#breadcrumb` | per page type | all except the two homepages |
| Article (case study) | `<page URL>#article` | `caseJsonLd()` in `work.ts` | case pages |
| ItemList (case studies) | `<work index URL>#cases` | `workIndexJsonLd()` in `work.ts` | `/work/`, `/sv/case/` |
| FAQPage | `<page URL>#faq` | AI service pages | `/ai-growth-consultant/`, `/ai-gtm-systems/` + SV |

**Facts used** (all from `src/lib/business.ts` and `schema.ts`):
- Organization: name *Greow*, alternate name *Greow Digital*, address *Riddersviksvägen 161, 165 72 Hässelby, Stockholms län, SE*, founder → `#erik`.
- Person: *Erik Oliva Werner* (full name only, by founder's instruction), job title, description, `knowsAbout`, city-level home location (Stockholm). The street address is attached to the company, not the person.
- `sameAs` is **empty on purpose**. Add verified profile URLs (e.g. LinkedIn) to `profiles` in `src/lib/business.ts`; they are then emitted automatically.

The site graph (WebSite + Organization + Person + ProfessionalService) is emitted by **every root layout**: `(en)`, `sv`, `(services)` and `work`. Page-level nodes reference it by `@id`, and those references resolve on the same page.

## 2. Page-level schema

| Page type | Nodes |
|---|---|
| Homepages | site graph |
| Classic service pages (4 × EN/SV) | + `Service`, `BreadcrumbList` |
| AI Growth Consultant, AI GTM Systems (EN/SV) | + `Service` with `OfferCatalog`, `FAQPage`, `BreadcrumbList` |
| Work index (EN/SV) | + `BreadcrumbList`, `ItemList` of case URLs |
| Case studies (9 × EN/SV) | + `BreadcrumbList`, `Article` (headline, description, author → `#erik`, publisher → `#organization`, image, `isPartOf` → `#website`) |

FAQ structured data mirrors visible FAQ text exactly. The check fails if a question isn't on the page. Note that Google currently shows FAQ rich results only for well-known government and health sites; the markup is kept for clarity and AI retrieval, not for a SERP feature.

## 3. Canonicals, hreflang, language switcher

- Every page has one self-referencing, absolute canonical with a trailing slash (`trailingSlash: true`).
- Every page has `hreflang` en / sv / x-default (x-default = EN), reciprocal across each pair. This applies to the HTML and to `sitemap.xml`.
- Translation pairs come from one registry: `src/lib/alternates.ts` (homepages, work index, services, published cases). The **language switcher** uses the same registry, so it now goes to the matching translation on every page. Previously it went to the other homepage on 28 pages.

## 4. Sitemap and robots

- `src/app/sitemap.ts` is generated from the translation-pair registry. A new service or case is included automatically. There are 34 URLs, each with alternates.
- `lastmod`, `changefreq` and `priority` were removed. The previous build timestamp on every URL was misleading. Add a real `lastmod` only once pages carry genuine modification dates.
- `src/app/robots.ts` allows everything and the sitemap is declared. AI crawlers are listed explicitly in two groups: search/answer bots, and training/grounding bots. That makes the policy a deliberate choice. To opt out of training only, set the second group to `disallow: '/'`.
- The non-standard `Host:` line was removed.

## 5. Metadata

- **Titles:** 30–65 characters.
- **Descriptions:** 70–160 characters on every indexable page. All 18 case pages and both work indexes have outcome-led titles; service descriptions were trimmed.
- **Open Graph:** `og:url` equals the canonical everywhere.

## 6. Crawlable content and internal links

- **Rendering:** all content is in the static HTML. Scroll-reveal content starts transparent and is revealed by JS. A `<noscript>` rule in every layout makes it visible without JS.
- **Reachability:** every indexable page is reachable from `/` via plain `<a href>` within 3 clicks; the check enforces this.
- **Inbound links:** the pages with the fewest are Swedish case pages (3 each).

## 7. Automated checks

`npm run check:seo` (`scripts/check-seo.mjs`) fails on:

- **Page basics:** wrong `html lang`; missing title/description; canonical or `og:url` ≠ page URL; `noindex` on an indexable page; ≠ 1 `<h1>`.
- **Language versions:** non-reciprocal or broken hreflang; a language switcher that doesn't match hreflang.
- **JSON-LD:** invalid JSON-LD; missing required properties per type; unresolved `@id` references; breadcrumb positions or last item ≠ page URL; FAQ questions not visible.
- **Person:** a Person name other than "Erik Oliva Werner"; "Erik Werner" in visible text.
- **Sitemap and robots:** sitemap ≠ the set of indexable pages; robots blocking all; pages unreachable from `/`.

Warnings (non-fatal) are titles and descriptions out of range, pages without breadcrumbs, and pages deeper than 3 clicks.

The checker was mutation-tested. A broken canonical, a dangling `@id` and the short founder name each produced an error.

`npm run check:links` fails on any internal link to a page or file that doesn't exist in `out/`.

**Not covered offline:** Google's Rich Results Test and the Schema.org validator need a public URL; see §8.

## 8. Requires live-site verification

These cannot be verified from the repository or the build. Do them after `claude/jolly-feynman-k9d854` is merged to `main` and deployed.

| # | Check | How | Why it matters |
|---|---|---|---|
| L1 | Deployed HTML matches this build | View source on 2–3 pages and compare title + JSON-LD | GitHub Pages deploys from `main` only |
| L2 | Redirects: `http://` → `https://`, `www.` → apex, `/work` → `/work/` | `curl -I` each variant; expect one 301 to the canonical | Duplicate-URL risk; not observable from this environment |
| L3 | 404 returns HTTP 404 and is not indexed | `curl -I https://greow.digital/does-not-exist/` | GitHub Pages serves `404.html`; status not yet observed |
| L4 | Rich Results Test | search.google.com/test/rich-results on `/`, one service, one AI page, one case (EN + SV) | Google's own parser; offline check validates structure only |
| L5 | Schema Markup Validator | validator.schema.org on the same URLs | Vocabulary-level validation |
| L6 | Search Console: sitemap processed | Sitemaps report: "Success", 34 discovered URLs | Sitemap was submitted 2026-11-10; content changed since |
| L7 | Search Console: indexing | URL Inspection → *Request indexing* for `/work/`, all case pages, all service + AI pages | `/work/`, `/work/funnel/`, `/growth-advisory/` were "unknown to Google"; `/work/telia-norway/` "crawled – not indexed" |
| L8 | Share previews | LinkedIn Post Inspector on `/` and an AI page | `HERO_CAROUSEL_2.png` is 1306×3572 but declared 1200×630 (open P0 from the audit) |
| L9 | Core Web Vitals | PageSpeed Insights (mobile) for `/` and an AI page | No field data observed |
| L10 | Business identity (NAP) | Compare footer + schema address with the Google Business Profile, character for character | Postal town *Hässelby* and name *Greow* vs *Greow Digital* are unconfirmed |
| L11 | `sameAs` | Person: LinkedIn added 2026-11-10 (`linkedin.com/in/erwerner`). Organization: add a Greow company page URL if one exists | Strengthens entity matching for Google and AI assistants |
| L12 | AI crawler access | Check server logs or CDN analytics for GPTBot / ClaudeBot / PerplexityBot hits | robots allows them; actual crawling not observed |
| L13 | Analytics | GA4 property + tag | No analytics on the site; no traffic baseline |

## 9. Known gaps (not fixed in code)

- **Case dates:** `Article` has no `datePublished`/`dateModified`. No reliable dates exist; add them to the case data when known.
- **Share images:** a dedicated 1200×630 share image per page type is still missing (see L8).
- **Founder page:** `/erik-oliva-werner/` is reserved in `src/lib/routes.ts` but not built. Once it exists, point `Person.url` to it and add a `ProfilePage`.
