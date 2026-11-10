# Greow Digital — Technical SEO & AI Search Visibility Audit

**Date:** 2026-11-10
**Scope:** Repository `greow-site` at commit `083772f` (branch `claude/jolly-feynman-k9d854`)
**Method:** Source review of every route, layout, component and content module, plus a local production build (`next build`, static export to `out/`). All 33 generated HTML pages were parsed for title, description, canonical, hreflang, `<html lang>`, H1/heading outline, Open Graph/Twitter tags, robots meta and JSON-LD.
**Status:** Audit only. No production-facing files were changed.

---

## 0. How to read this document

Every finding is labelled:

| Label | Meaning |
|---|---|
| **[Verified]** | Confirmed directly from source code and/or the built HTML in `out/`. Reproducible with the commands in Appendix A. |
| **[Inferred]** | Strongly implied by verified facts plus known platform behaviour (e.g. how GitHub Pages or Google treats something), but not observed on the live site. |
| **[Assumption]** | A hypothesis that needs data (Search Console, keyword tools, analytics, live crawl) before acting. |

**What could not be verified:** The live site (`https://greow.digital`) was **not reachable** from the audit environment (outbound proxy refused the host). Live HTTP status codes, redirect behaviour (`www`, `http`, missing trailing slash), Core Web Vitals field data and search demand are therefore **not verified**. Search Console data (performance + sampled URL inspection) was added on 2026-11-10 in **§10**. There is no GA4 property or analytics tag for the site, so traffic figures are unavailable. See §9 for remaining gaps.

Priority scale: **P0** = fix first (broken/misleading signals), **P1** = high impact, **P2** = meaningful improvement, **P3** = nice to have.

---

## 1. Executive summary

The technical foundation is **solid**: static pre-rendered HTML, self-referencing canonicals on every page, correct reciprocal `hreflang` (en/sv/x-default) in both HTML and sitemap, unique titles and one H1 per page, and JSON-LD on all indexable pages. Nothing is blocked from crawling.

The gaps are mostly about **signal quality and positioning**, not crawlability:

1. **Broken social/OG image** — the image used for every share preview is a 1306×3572 portrait PNG declared as 1200×630. Every LinkedIn/Slack/AI-preview card is cropped or rejected. (P0)
2. **Homepage and `/growth-as-a-service/` compete for the same head term** — both titles open with "Growth as a Service —". (P1)
3. **Founder entity is weak and inconsistent** — "Erik Oliva Werner" in schema vs "Erik Werner" in the footer, no `sameAs` (LinkedIn etc.), no About page, Person/Organization schema missing from all English service and case pages. This is the single biggest limiter for AI-assistant visibility ("who is a good fractional growth lead in Stockholm?"). (P1)
4. **Internal linking is one-directional** — the language switcher always drops users/crawlers on the other language's *homepage*, the homepage's proof metrics don't link to the case studies that substantiate them, and case studies never link to the service they prove. (P1)
5. **No page targets AI Growth or GTM intent**, even though the case studies contain strong, specific proof for both (agentic/AI-native builds, AI onboarding, unified GTM, usage-based pricing, PLG). This is the largest content opportunity. (P1)
6. Service pages are thin (~320–390 words rendered) and have no FAQ/definitional content that AI answer engines tend to quote. (P2)

---

## 2. Architecture (verified baseline)

| Area | Finding |
|---|---|
| Framework | Next.js **14.2.0** App Router, React 18, TypeScript. `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true` (`next.config.js`). **[Verified]** |
| Hosting | GitHub Pages via `.github/workflows/deploy.yml` (builds on push to `main`, uploads `out/`). Custom domain from `public/CNAME` = `greow.digital`. **[Verified]** |
| Hosting constraints | GitHub Pages has no server-side redirects, custom headers or rewrites. Any future URL change needs a static fallback (meta refresh + canonical) or a host change. **[Inferred]** |
| Routing | Four separate **root layouts**: `(en)`, `(services)`, `work`, `sv`. Each declares its own `<html>`, metadata and (only `(en)` and `sv`) global JSON-LD. **[Verified]** |
| Content model | All copy lives in TS modules: `src/lib/translations.ts` (home), `src/lib/services.ts` (4 services × 2 langs), `src/lib/work.ts` (9 case studies × 2 langs, ~5,100 lines). Each route file is a thin wrapper. **[Verified]** |
| Pages | 33 indexable URLs: 2 homepages, 8 service pages, 2 work indexes, 18 case studies, plus `robots.txt`, `sitemap.xml`, `404.html`. **[Verified]** |
| URL scheme | EN at root (`/growth-advisory/`, `/work/<slug>/`); SV under `/sv/` with localised slugs (`/sv/interim-growth-lead/`, `/sv/case/<slug>/`). **[Verified]** |
| Legacy files | Repo root still holds a pre-Next single-page `index.html` (`lang="sv"`), `assets/`, `CNAME` and a README describing that old static site. These are **not deployed** (only `out/` is uploaded) but mislead contributors. **[Verified]** |
| Duplication | `SITE_URL = 'https://greow.digital'` is redeclared in ~40 files; icons/robots metadata duplicated across 4 root layouts; `sitemap.ts` hand-lists every URL (399 lines). Drift risk when adding pages. **[Verified]** |

---

## 3. Findings by area

### 3.1 Titles & meta descriptions

| # | Finding | Label | Priority |
|---|---|---|---|
| T1 | Homepage title `Growth as a Service — Senior Growth Partner for B2B SaaS \| Greow` and `/growth-as-a-service/` title `Growth as a Service — A Senior Growth Partner On Demand \| Greow` target the same head term. Same pattern in SV. The services module even says "One primary keyword per page (no cannibalisation)" — the homepage breaks that rule. | Verified | P1 |
| T2 | Case study titles are generic: `Funnel.io — Case study · Greow`, `Work · Greow`, `Case · Greow` (12 chars). They carry no outcome or topic keywords (e.g. "PLG", "B2B SaaS", "CAC"). | Verified | P1 |
| T3 | Meta descriptions are too long on most pages. Home 178–179 chars; services 159–169; case studies reuse `data.intro` and run 116–224 chars (e.g. RiksTV 224, Telia 219–222, Refapp 208). Google truncates around ~155–160 chars. | Verified | P2 |
| T4 | Brand is written three ways: "Greow" (titles, schema), "Greow Digital" (hero role line), domain `greow.digital`. | Verified | P2 |

**Recommendations**
- Re-point the homepage title to the *brand + founder + category* (e.g. "Greow — Senior Growth & GTM Partner for B2B SaaS · Erik Oliva Werner") and let `/growth-as-a-service/` own "Growth as a Service".
- Give case studies outcome-led titles: `<Client>: <outcome> (<discipline>) — Case Study | Greow`, e.g. "Funnel.io: PLG from 0 to 20% of MRR — Case Study | Greow".
- Add a dedicated `metaDescription` field to `CaseStudy` instead of reusing `intro`; cap at 155 chars.
- Decide one legal/brand name ("Greow" with `alternateName: "Greow Digital"`) and use it consistently.

**Acceptance criteria**
- [ ] No two indexable pages share the same leading keyword phrase in `<title>`.
- [ ] All titles 30–65 chars; all descriptions 70–160 chars (scripted check over `out/**/*.html` passes).
- [ ] Every case-study title contains the client name and one outcome or discipline keyword.

### 3.2 Canonicals & hreflang

| # | Finding | Label | Priority |
|---|---|---|---|
| C1 | Every indexable page has a self-referencing absolute canonical with trailing slash matching `trailingSlash: true`. | Verified ✅ | — |
| C2 | `hreflang` en/sv/x-default is reciprocal and correct on all 30 bilingual pairs, in both HTML `<link>` tags and `sitemap.xml` `xhtml:link`. | Verified ✅ | — |
| C3 | `og:url` matches canonical everywhere. | Verified ✅ | — |
| C4 | Requests without a trailing slash (`/work`) and `www.` / `http://` variants are expected to 301 to the canonical form on GitHub Pages, but this was **not observed**. | Inferred | P2 (verify) |

**Acceptance criteria**
- [ ] Live check: `/work`, `http://greow.digital/`, `https://www.greow.digital/` each return a single 301 to the canonical URL.

### 3.3 Headings & on-page structure

| # | Finding | Label | Priority |
|---|---|---|---|
| H1 | Exactly one H1 per page. | Verified ✅ | — |
| H2 | Homepage H1 "Focused growth, not more initiatives." contains no category, role or location term; the topical meaning is carried only by the title. Acceptable for brand, but weak for both classic and AI retrieval. | Verified | P2 |
| H3 | Heading levels skip: homepage goes H2 → H3 → **H4** (who-it's-for cards, feature cards) and case studies go **H2 → H4** for every block/result/learning (rendered in `CaseStudy.tsx` as `<h4>`). | Verified | P2 |
| H4 | Service-page H1s are just the service name ("Growth Advisory"). In SV, three of four H1s are English ("Growth as a Service", "Growth Advisory"). | Verified | P2 |
| H5 | Service pages render only ~320–390 words of visible text; case studies ~1,400–1,900; homepage ~850. | Verified | P2 |

**Recommendations**
- Add a short sub-H1 or eyebrow on home that states the category and location ("Senior growth & GTM partner for B2B SaaS — Stockholm").
- Change case-study block headings from `h4` to `h3`; home card headings from `h4` to `h3`.
- Expand each service page to ~800–1,200 words with: definition, who it's for / not for, deliverables, engagement model & pricing, 2–3 linked proof points, and a 4–6 question FAQ.

**Acceptance criteria**
- [ ] No heading-level skips on any page (automated outline check).
- [ ] Each service page ≥ 800 words of unique visible copy and includes a FAQ section.

### 3.4 Sitemap & robots.txt

| # | Finding | Label | Priority |
|---|---|---|---|
| S1 | `robots.txt` allows all agents, references the sitemap. Includes a non-standard `Host:` line (ignored by Google; harmless). All AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are implicitly allowed. | Verified | — |
| S2 | `sitemap.xml` lists all 30 content URLs with hreflang alternates. | Verified ✅ | — |
| S3 | `lastmod` is `new Date()` at build time for **every** URL, so every deploy claims every page changed. Google learns to ignore unreliable `lastmod`. | Verified | P2 |
| S4 | `changefreq`/`priority` are emitted but ignored by Google. | Verified | P3 |
| S5 | Sitemap is a hand-written list duplicating `projects`/`serviceNav` data — a new case or service can easily be forgotten. | Verified | P2 |

**Recommendations**
- Generate sitemap entries from `serviceNav` and `caseStudies` registries.
- Store a real `updated` date per page in the content modules and use it for `lastmod`.
- Make the AI-crawler policy explicit (named `User-agent` groups) so it's a deliberate, documented decision.

**Acceptance criteria**
- [ ] Adding a case study to `work.ts` automatically adds both language URLs to the sitemap.
- [ ] `lastmod` values differ per page and only change when that page's content changes.
- [ ] `robots.txt` contains explicit, intentional rules for major AI crawlers.

### 3.5 Structured data (JSON-LD)

| # | Finding | Label | Priority |
|---|---|---|---|
| J1 | Homepages emit `Organization`, `Person` and `ProfessionalService` in one `@graph` with stable `@id`s. Good foundation. | Verified ✅ | — |
| J2 | **English** service pages (`(services)` layout) and **English** case pages (`work` layout) emit only `Service` / `BreadcrumbList`+`Article` that *reference* `#organization` and `#erik` by `@id`, but those nodes are **not present on the page**. Google does not resolve `@id` across URLs, so on these pages the provider/author is effectively unnamed. | Verified | P1 |
| J3 | **Swedish** service/case pages *do* include the full Org/Person/ProfessionalService graph (inherited from `sv` layout) — so EN and SV versions of the same page carry different schema. | Verified | P1 |
| J4 | `Article` on case studies lacks `datePublished`, `dateModified` and `image` (recommended by Google for Article rich results). `author` is only an `@id` reference. | Verified | P2 |
| J5 | `Person` has no `sameAs` (LinkedIn, YouTube talks, podcast), `knowsAbout`, `alumniOf`, or `description`. `jobTitle` is "Founder & Senior Growth Advisor" while UI says "Founder of Greow Digital, Growth Advisor" and "Senior Growth Advisor". | Verified | P1 |
| J6 | `Organization.logo` points to `favicon.svg`. Google recommends a raster logo ≥112×112 px. | Verified (file) / Inferred (impact) | P2 |
| J7 | Published prices (Growth Sprint €8–12k, retainers €3k/€5k/€8k, coaching packages) are not expressed as `Offer`s on the services. | Verified | P3 |
| J8 | No `FAQPage`, `WebSite`, `ProfilePage` or `VideoObject` (for the two YouTube appearances). | Verified | P2 |

**Recommendations**
- Create one shared `siteGraph(lang)` helper that returns `WebSite` + `Organization` + `Person` and include it on **every** page in both languages, then append page-specific nodes (`Service`, `Article`, `BreadcrumbList`, `FAQPage`).
- Enrich `Person` (see §3.7) and add `ProfilePage` on a new About page.
- Add `datePublished`/`dateModified`/`image` to case-study `Article`s.
- Add `VideoObject` for appearances; `Offer` for priced services.

**Acceptance criteria**
- [ ] Every indexable page's JSON-LD contains a resolvable `Organization` and `Person` node (no dangling `@id`).
- [ ] Google Rich Results Test and Schema.org validator report 0 errors on home, one service and one case page in each language.
- [ ] `Person.sameAs` contains at least LinkedIn plus one other authoritative profile.

### 3.6 Indexability, internal linking & crawl paths

| # | Finding | Label | Priority |
|---|---|---|---|
| I1 | All pages are static HTML with `index, follow` and `max-snippet:-1`, `max-image-preview:large`. Content is present in HTML without JS (including the hidden "Appearances" tab, which uses the `hidden` attribute). | Verified ✅ | — |
| I2 | **Language switcher always links to the other homepage** (`altHref = lang === 'en' ? '/sv/' : '/'` in `Nav.tsx`). From `/work/funnel/` the "SV" link goes to `/sv/`, not `/sv/case/funnel/`. Hurts UX and wastes a crawl path between translation pairs. | Verified | P1 |
| I3 | Homepage proof stats (Happy Vegan, Telia, Funnel, RiksTV, Leadfeeder) **do not link** to their case studies. The homepage has zero links to any `/work/<slug>/` page. | Verified | P1 |
| I4 | Case studies link only to the Work index and `/#book`; **no case links to the service it evidences**, so service pages receive no contextual links from the site's richest content. | Verified | P1 |
| I5 | Service pages do link to 2–3 related cases (`serviceRelatedCases`) and to `/#pricing`, `/work/`. Good. | Verified ✅ | — |
| I6 | Many CTAs are fragment links to the homepage (`/#book`, `/#pricing`, `/#how`). Fine for UX, but pricing has no indexable URL of its own, and booking requires the Cal.com JS embed (no plain-HTML fallback link, email or LinkedIn anywhere on site). | Verified | P2 |
| I7 | 404 page is Next's default: no `lang`, no nav, no branding, title "404: This page could not be found." GitHub Pages serves `404.html` with HTTP 404. | Verified (HTML) / Inferred (status) | P3 |
| I8 | `.reveal` elements start at `opacity: 0` and depend on client JS (`ScrollReveal`) to become visible. Google renders JS so indexing is fine, but if JS fails users see blank sections; some non-rendering AI fetchers only read raw HTML (text is present, so impact is limited). | Verified (code) / Inferred (impact) | P3 |

**Recommendations**
- Pass the alternate-language URL into `Nav` from each page (data already exists for services via `serviceUrl` and for cases via `workBase`).
- Link each homepage proof stat to its case study; add "Related service" links in each case study (map slug → service key, the inverse of `serviceRelatedCases`).
- Add a visible plain link to the booking page and a contact email/LinkedIn in the footer.
- Branded 404 within the existing layout constraints (see commit `22cd51d` for why root `not-found.tsx` was removed — it needs a root layout).

**Acceptance criteria**
- [ ] On every bilingual page, the language switcher `href` equals that page's `hreflang` alternate.
- [ ] Homepage links to ≥5 case studies; every case study links to ≥1 service page.
- [ ] No orphan pages: every URL in the sitemap is reachable within 3 clicks from `/` via plain `<a href>`.

### 3.7 Founder identity & E-E-A-T

| # | Finding | Label | Priority |
|---|---|---|---|
| F1 | Name inconsistency: **"Erik Oliva Werner"** (schema, hero, image alts) vs **"Erik Werner"** (footer, every page; README). | Verified | P1 |
| F2 | Role inconsistency: "Founder & Senior Growth Advisor" (schema) / "Founder of Greow Digital, Growth Advisor" + "Ex Growth Leader at Funnel & Leadfeeder" (hero) / "Senior Growth Advisor · ex Funnel, Leadfeeder, Telia" (about). | Verified | P2 |
| F3 | No dedicated About/founder page. Biography exists only as a homepage section (`#about-erik`). No external profile links (LinkedIn etc.) anywhere in the codebase. | Verified | P1 |
| F4 | Strong E-E-A-T material exists but is scattered: Director of Growth & Product Experience at Leadfeeder/Dealfront, Funnel PLG results, ICF-accredited coach, keynote and Favro podcast appearances, a founder exit (Happy Vegan). | Verified | — (opportunity) |
| F5 | Case studies have no visible author byline or date. | Verified | P2 |
| F6 | Two portraits in use: `erik-werner.png` (496×443, 372 KB, shown at 44–56 px) and `erik.jpg` (2048×1365, used only in schema). | Verified | P3 |

**Recommendations**
- Pick one canonical name form (recommend "Erik Oliva Werner", already in schema and hero) and use it everywhere; add the short form as `alternateName`.
- Create `/about/` (+ `/sv/om/`) as a `ProfilePage` with career timeline, credentials (ICF), selected results, talks, and `sameAs` links.
- Add "By Erik Oliva Werner · <role> · <date>" bylines to case studies, linking to the About page.

**Acceptance criteria**
- [ ] `grep -r "Erik Werner"` returns no user-facing hits except an intentional `alternateName`.
- [ ] About page exists in EN/SV, is in the sitemap, is linked from nav or footer, and its `Person` node has `sameAs`, `jobTitle`, `knowsAbout`, `image`.
- [ ] Every case study shows author and date and links to the About page.

### 3.8 Service positioning

**Current positioning [Verified]:** "Focused growth, not more initiatives" — a senior growth partner for **B2B SaaS, e-commerce and fintech** in **Stockholm**, sold as Growth Sprint → Growth as a Service retainer (3 tiers) + Fractional Growth Lead, Growth Advisory, Coaching. Hero tags: PLG, Demand Generation, Experimentation, Pricing & Packaging.

| # | Finding | Label | Priority |
|---|---|---|---|
| P1 | The four service pages map cleanly to four distinct intents (GaaS, fractional, advisory, coaching). | Verified ✅ | — |
| P2 | "GTM" appears only as list items ("GTM strategy" in the top pricing tier, "GTM / positioning" workshop). "AI" appears on the core pages only as "AI Hackathon". | Verified | P1 |
| P3 | The case studies, however, are heavily AI- and GTM-flavoured: Sands Entreprenad ("AI-native lead platform", "Agentic development in Claude Code"), Bnbalyze ("now AI-native"), Leadfeeder/Dealfront ("AI-powered onboarding redesign", "usage-based pricing", "unified GTM", "consolidating two go-to-market motions"), Funnel (PLG 0→20% MRR). ~90 AI/GTM mentions live in `work.ts` vs. ~6 on the commercial pages. | Verified | P1 |
| P4 | "Growth as a Service" is a coined/low-familiarity term; buyers more commonly search for "fractional growth lead / fractional CMO / growth consultant / GTM consultant". | Assumption (needs keyword data) | — |
| P5 | Swedish service H1s/labels are mostly English; Swedish buyers may search "tillväxtkonsult", "interim marknadschef", "go-to-market-strategi". | Assumption (needs keyword data) | P2 |

### 3.9 Accessibility

| # | Finding | Label | Priority |
|---|---|---|---|
| A1 | No skip-to-content link. | Verified | P2 |
| A2 | No `prefers-reduced-motion` handling for the `.reveal` animations or logo marquee. | Verified | P2 |
| A3 | Desktop "Services" dropdown `<button>` has no `aria-expanded`/`aria-haspopup`/`aria-controls`; opens on `:hover`/`:focus-within` only (keyboard reachable, but state isn't announced). Mobile toggle is correct (`aria-expanded`, `aria-label`). | Verified | P2 |
| A4 | Language switcher `aria-label` is always English ("Switch to SV/EN"), including on Swedish pages; it also lacks `hreflang`/`lang` on the link. | Verified | P3 |
| A5 | Work tabs use `role="tab"` + `aria-selected` but no `tablist`→`tabpanel` wiring (`aria-controls`, `role="tabpanel"`), and no arrow-key support. | Verified | P3 |
| A6 | Images have meaningful `alt`; decorative marquee duplicates are `aria-hidden` with empty alt. Hero dashboard alt "Growth dashboard" is generic. | Verified ✅ (minor) | P3 |
| A7 | Colour contrast of brand palette (salmon `#FF8773` on light backgrounds, muted greys `#999`) not measured. | Assumption | P2 (verify) |

**Acceptance criteria**
- [ ] axe-core (or Lighthouse a11y) on home, one service, one case, work index in both languages: 0 serious/critical violations; Lighthouse a11y ≥ 95.
- [ ] Animations disabled under `prefers-reduced-motion: reduce`.

### 3.10 Performance signals affecting SEO

| # | Finding | Label | Priority |
|---|---|---|---|
| W1 | **OG/Twitter image `HERO_CAROUSEL_2.png` is 1306×3572 (portrait), 902 KB**, but declared as 1200×630 on every page. Share previews (LinkedIn, Slack, X, AI chat link previews) will crop or reject it. | Verified | **P0** |
| W2 | Same 902 KB PNG is the homepage LCP hero image, rendered with `width=1200 height=800` (aspect mismatch). Images are unoptimised (`images.unoptimized: true`), no WebP/AVIF, no responsive `srcset`. | Verified | P1 |
| W3 | ~20 font files are preloaded on every page (Ubuntu 4 weights × 2 styles + Source Sans 3 5 weights × 2 styles, latin + latin-ext). | Verified | P2 |
| W4 | 372 KB portrait PNG displayed at 44–56 px on every page. | Verified | P2 |
| W5 | Field Core Web Vitals not checked. | Not verified | — |

**Acceptance criteria**
- [ ] A dedicated 1200×630 OG image (≤300 KB) per page type; declared dimensions match actual file dimensions; LinkedIn Post Inspector shows a correct preview.
- [ ] Homepage LCP image ≤150 KB in a modern format with correct intrinsic aspect ratio.
- [ ] Preloaded font files ≤6.
- [ ] Lighthouse mobile performance ≥90 on homepage (lab), and CrUX/PSI field LCP < 2.5 s once data exists.

---

## 4. AI search visibility (GEO / AEO) assessment

AI answer engines (Google AI Overviews/AI Mode, ChatGPT search, Perplexity, Claude, Copilot) favour sources that are (a) crawlable as plain HTML, (b) unambiguous about **who** the entity is, (c) contain **self-contained, quotable** statements (definitions, numbers, Q&A), and (d) are corroborated elsewhere on the web.

| Factor | Status | Label |
|---|---|---|
| Crawlable static HTML, AI bots allowed | ✅ Good | Verified |
| Clear entity (consistent name, About page, `sameAs`, schema on every page) | ❌ Weak — see §3.5, §3.7 | Verified |
| Quotable specific facts | ✅ Strong in case studies (0→20% MRR via PLG, −40% CAC, +100% conversion, 17× organic visibility) but ⚠️ unattributed (no byline/date) and not summarised in extractable form | Verified |
| Definitional / FAQ content ("What is a fractional growth lead?", "How much does…?") | ❌ Absent | Verified |
| Topical coverage of AI Growth and GTM | ❌ No dedicated pages | Verified |
| Off-site corroboration (LinkedIn, podcasts, directories, client mentions) | Unknown | Assumption |
| `llms.txt` | Absent. Low priority: not a ratified standard and no major engine has committed to using it; cheap to add as a curated index. | Verified (absence) |

**Recommendations**
1. Fix entity signals first (§3.7 + J2/J5) — they compound across every query.
2. Add a "TL;DR / Key results" block at the top of each case study: 3–5 bullet facts with client, role, timeframe, metric. These are the sentences AI engines lift.
3. Add FAQ sections (with `FAQPage` schema) to every service page and new AI/GTM pages.
4. Add visible "Last updated" dates.
5. Optionally publish `/llms.txt` listing services, About, and case studies with one-line summaries.

**Acceptance criteria**
- [ ] Each case study opens with a ≤80-word key-results summary that names client, Erik's role, period and ≥2 metrics.
- [ ] Baseline then monthly tracking of a fixed prompt set (e.g. 20 prompts like "fractional growth lead Stockholm", "PLG consultant B2B SaaS Nordics", "AI GTM advisor for SaaS") across ChatGPT, Perplexity, Google AI Mode; record whether Greow/Erik is cited. *(Baseline not yet measured.)*

---

## 5. AI Growth & GTM opportunity map

> Search volumes and competitiveness are **[Assumption]** until validated with Search Console + a keyword tool. The proof points are **[Verified]** from `src/lib/work.ts`.

| Proposed page (EN / SV) | Primary intent (to validate) | Existing proof to link | Priority |
|---|---|---|---|
| `/ai-growth/` — *AI Growth Advisory: building AI-native growth & GTM engines* / `/sv/ai-tillvaxt/` | "AI growth consultant", "AI for growth teams", "AI-native go-to-market", "AI marketing strategy B2B SaaS" | Sands Entreprenad (agentic build, AI-native lead platform, 17× organic visibility), Bnbalyze (AI-native SaaS), Leadfeeder (AI-powered onboarding), "AI Hackathon" workshop | P1 |
| `/gtm-strategy/` — *Go-to-Market Strategy for B2B SaaS* / `/sv/go-to-market-strategi/` | "GTM strategy consultant", "go-to-market strategy B2B SaaS", "GTM advisor" | Leadfeeder/Dealfront (unified GTM, +100% new accounts), RiksTV/Strim (launch, −40% CAC), Growth Partner tier "GTM strategy" | P1 |
| `/product-led-growth/` — *PLG consulting* | "product-led growth consultant", "PLG strategy" | Funnel (0→20% MRR), Leadfeeder (self-serve across plans) | P2 |
| `/pricing-packaging/` — *SaaS pricing & packaging* | "SaaS pricing consultant", "usage-based pricing" | Leadfeeder usage-based pricing transformation | P2 |
| `/about/` (+ `/sv/om/`) | Branded/navigational: "Erik Oliva Werner", "Greow" | All | P1 |
| Pillar/insight articles (e.g. "What is a fractional growth lead?", "AI-native GTM: a practical playbook") | Informational, AI-answer bait | Keynote "Growth — From buzz to bizz", podcast | P3 |

**Positioning recommendation [Assumption, to validate with founder]:** evolve the homepage promise from "Growth as a Service" to **"Senior growth & GTM leadership for B2B SaaS — AI-native, PLG-proven"**, keeping "Growth as a Service" as the *engagement model* rather than the *category*. This aligns the commercial pages with what the case studies already prove.

**Acceptance criteria for each new page**
- [ ] One primary intent per page, no title overlap with existing pages (T1 rule).
- [ ] ≥800 words, definition paragraph in first 100 words, ≥2 linked case studies with metrics, FAQ (4–6 Q) with `FAQPage` + `Service` schema, EN+SV with reciprocal hreflang, in sitemap, linked from nav "Services" and from related case studies.

---

## 6. Prioritised backlog

| Pri | ID | Action | Effort | Files (expected) |
|---|---|---|---|---|
| **P0** | G1 | ✅ **Done 2026-11-10** — submitted `sitemap.xml` in Search Console (status: pending, 0 errors/warnings at submission) | XS | — (GSC) |
| **P0** | G4 | Install GA4 + booking key events; link to GSC (see §10) | S | layouts, `CalEmbed.tsx` |
| **P0** | G2 + I2–I4 | Internal-linking fixes so `/work/`, case studies and all services get discovered (moved up from P1 by GSC data) | S | see I2–I4 rows below |
| **P0** | W1 | Create correct 1200×630 OG image(s); fix declared dimensions | S | `public/images/`, all `metadata` blocks |
| P1 | J2/J3 | Shared site graph (WebSite+Org+Person) on every page in both languages | S | new `src/lib/schema.ts`, layouts, page files |
| P1 | F1/F3/J5 | Consistent founder name; About page with `ProfilePage`, `sameAs` | M | `translations.ts`, `Footer.tsx`, new route ×2, sitemap |
| P1 | T1 | De-duplicate homepage vs GaaS title focus | XS | `translations.ts` |
| P1 | I2 | Language switcher → page-level alternate | S | `Nav.tsx` + every page passing `altHref` |
| P1 | I3/I4 | Home stats → case links; case → service links | S | `HomePage.tsx`, `translations.ts`, `CaseStudy.tsx`, `services.ts` |
| P1 | §5 | AI Growth + GTM service pages (EN/SV) | M–L | `services.ts`, `serviceNav`, new routes, sitemap |
| P1 | W2 | Optimise hero/LCP image | S | `public/images/`, `HomePage.tsx` |
| P1 | T2 | Outcome-led case-study titles | S | case page files / `work.ts` |
| P2 | H5/§4 | Expand service pages + FAQs + `FAQPage` | M | `services.ts`, `ServicePage.tsx` |
| P2 | J4/F5 | Case bylines, dates, Article dates/image | S | `work.ts`, `CaseStudy.tsx` |
| P2 | T3 | Dedicated ≤155-char descriptions | S | `work.ts`, `translations.ts`, `services.ts` |
| P2 | S3/S5 | Data-driven sitemap with real `lastmod` | S | `sitemap.ts` |
| P2 | H3 | Fix heading-level skips | XS | `CaseStudy.tsx`, `HomePage.tsx` |
| P2 | A1–A3 | Skip link, reduced motion, dropdown ARIA | S | `globals.css`, `Nav.tsx`, layouts |
| P2 | W3/W4 | Trim font weights; resize portrait | S | `fonts.ts`, `public/assets/` |
| P2 | J6 | Raster logo ≥112 px for schema | XS | `public/`, layouts |
| P2 | I6 | Plain booking link + email/LinkedIn in footer | XS | `Footer.tsx` |
| P3 | J7/J8 | `Offer`, `VideoObject`, `WebSite` schema | S | schema helper |
| P3 | I7 | Branded 404 | S | `src/app/` |
| P3 | S1/§4 | Explicit AI-crawler rules; optional `llms.txt` | XS | `robots.ts`, `public/` |
| P3 | Hygiene | Remove/archive legacy root `index.html`, `assets/`, root `CNAME`; rewrite README; centralise `SITE_URL` | S | repo root, `src/lib/` |

---

## 7. Global acceptance criteria (definition of done for the SEO workstream)

- [ ] `npm run build` succeeds; a scripted check over `out/**/index.html` confirms for every page: unique title (30–65 chars), description (70–160 chars), self canonical, reciprocal hreflang, exactly one H1, no heading skips, valid JSON-LD containing Organization + Person.
- [ ] Google Rich Results Test: 0 errors on representative pages (home, service, case, about) in EN and SV.
- [ ] Search Console: sitemap processed, 0 "Duplicate without user-selected canonical", 0 "Alternate page with proper canonical" anomalies across language pairs, all sitemap URLs indexed within 4 weeks of launch.
- [ ] Lighthouse (mobile): SEO 100, Accessibility ≥95, Performance ≥90 on homepage.
- [ ] Social previews correct on LinkedIn Post Inspector for home, one service and one case.

---

## 8. Strengths to preserve

- Static export → fast, fully crawlable HTML with no JS dependency for content.
- Correct, reciprocal hreflang with localised Swedish slugs.
- Self-referencing canonicals, trailing-slash consistency.
- Single source of truth for copy (`translations.ts`, `services.ts`, `work.ts`) — makes systematic fixes cheap.
- Deep, metric-rich case studies with client quotes — rare and valuable E-E-A-T material.
- Clear one-intent-per-service-page structure.

---

## 9. Open questions & verification still required

1. **Live behaviour** — confirm redirects (`www`, `http`, no trailing slash), 404 status, and that the deployed HTML matches this build. *(Live site was unreachable from the audit environment.)*
2. **Search Console** — ✅ pulled 2026-11-10, see §10. Remaining: full Page Indexing report export from the GSC UI (the API only inspects one URL at a time).
3. **Keyword demand** for EN/SV AI-growth and GTM terms (validates §5 priorities). GSC has too little data to answer this (§10).
4. **Founder decisions** — canonical name form; LinkedIn and other profile URLs for `sameAs`; whether AI Growth/GTM should become the lead positioning or a service line.
5. **Client permissions** — confirm case-study metrics and quotes are cleared for prominent use in summaries and schema.
6. **AI-citation baseline** — run the prompt set in §4 before changes ship so impact can be measured.

---

## 10. Search Console & analytics data (pulled 2026-11-10)

Source: Google Search Console property `sc-domain:greow.digital` (data through 2026-11-08), via the Cogny connector. All items below are **[Verified]** from GSC unless marked.

### 10.1 Search performance

| Window | Clicks | Impressions | CTR | Avg. position |
|---|---|---|---|---|
| Last 92 days (2026-08-10 → 11-09) | 6 | 137 | 4.4% | 7.4 |
| Last 30 days (2026-10-11 → 11-09) | 1 | 42 | 2.4% | 5.3 |

- **All 6 clicks went to `/sv/`**. No English page got a click.
- **Sweden** accounts for 49 of the 137 impressions and all 6 clicks. The rest are 1–3 impressions each from scattered countries (likely noise).
- **Visible queries:** only 5, totalling 22 impressions: `greow` (13 impr, pos 3.1), `happy vegan butik` (5, pos 10), `personlig mentor online` (2, pos 52), `fractional growth lead` (1, pos 9), `graow` (1, pos 61). The remaining ~115 impressions are anonymised.
- **There is no measurable non-brand demand yet** for Growth as a Service, fractional growth, GTM or AI-growth terms. §5's keyword priorities therefore remain **[Assumption]** and must be validated with an external keyword tool, not GSC.
- Pages with impressions: `/` (42), `/sv/` (25), `/growth-as-a-service/` (22), `/fractional-growth-lead/` (15), `/work/leadfeeder-dealfront/` (14), `/sv/growth-advisory/` (12), `/work/telia-norway/` (11), plus 14 others with 1–9 each.

### 10.2 Indexing (URL Inspection, sampled)

| URL | GSC status | Last crawl |
|---|---|---|
| `/` | Submitted and indexed | 2026-09-28 |
| `/sv/` | Submitted and indexed | 2026-11-01 |
| `/growth-as-a-service/` | Submitted and indexed | 2026-10-10 |
| `/sv/growth-as-a-service/` | Submitted and indexed | 2026-08-29 |
| `/work/telia-norway/` | **Crawled – currently not indexed** | 2026-09-02 |
| `/work/` | **URL is unknown to Google** | — |
| `/work/funnel/` | **URL is unknown to Google** | — |
| `/growth-advisory/` | **URL is unknown to Google** | — |

### 10.3 New and re-prioritised findings

| # | Finding | Label | Priority |
|---|---|---|---|
| G1 | **No sitemap is currently submitted** in GSC. The site generates `/sitemap.xml`, but GSC lists zero sitemaps. Indexed pages say "Submitted and indexed", so one was probably submitted earlier and later removed. | Verified (absence) / Inferred (history) | **P0** |
| G2 | **Key pages are unknown to Google**: `/work/`, `/work/funnel/` (the strongest PLG proof) and `/growth-advisory/`. This confirms the internal-linking gaps in §3.6 (I2–I4) and the missing sitemap matter in practice, not just in theory. | Verified | **P0** |
| G3 | **Case studies get crawled but not indexed** (`/work/telia-norway/`). The likely causes, in order, are: (a) weak internal linking; (b) generic titles and over-long descriptions copied from the intro (T2/T3); (c) the site being new with low authority. The EN/SV pair is not the problem: Google picked the correct canonical. | Verified (status) / Inferred (cause) | P1 |
| G4 | **No analytics on the site.** The only GA4 property connected through Cogny is "Offert Sands Entreprenad"; none exists for greow.digital. The codebase contains no GA4, GTM or other analytics tag. So **sessions for the past 30 days cannot be reported**, and no conversion baseline (booking clicks, Cal.com bookings) exists for the SEO work. | Verified | **P0** |
| G5 | Swedish is the only market that converts right now (all 6 clicks went to `/sv/`). This supports giving Swedish-language AI Growth/GTM pages equal priority (§5 SV slugs, P5). | Verified (data) / Assumption (strategy) | P1 |

**Recommendations**
1. Submit `https://greow.digital/sitemap.xml` in GSC. This can be done via the Cogny connector once you confirm.
2. Install GA4 (a GA4 tag added to the shared layouts, or GTM) with key events `book_call_click` and `cal_booking_completed` (Cal.com embed events). Link GA4 to GSC.
3. Ship the internal-linking fixes (I2, I3, I4) before any new content. They are the most likely reason case pages are undiscovered or not indexed.
4. After deploying, request indexing in the GSC UI for `/work/`, all case studies and all service pages (the API cannot request indexing).

**Acceptance criteria**
- [ ] GSC lists `sitemap.xml` as successfully processed with 30 discovered URLs.
- [ ] URL Inspection shows "Indexed" for all 8 service pages, both work indexes and ≥14 of 18 case studies within 6 weeks of the linking fixes.
- [ ] A GA4 property exists for greow.digital, receives sessions within 24 h of deploy, is linked to GSC, and records booking events.
- [ ] A 30-day baseline (sessions, organic sessions, bookings) is recorded before the content/positioning changes in §5 ship.

---

## Appendix A — Reproduce the verified checks

```bash
npm ci && npx next build                     # static export to out/
cat out/robots.txt; head -40 out/sitemap.xml
# Per-page title/description/canonical/hreflang/H1/JSON-LD:
python3 - <<'EOF'
import re,glob,json,html
for f in sorted(glob.glob('out/**/index.html',recursive=True)):
    s=open(f).read()
    t=re.search(r'<title>(.*?)</title>',s); d=re.search(r'<meta name="description" content="(.*?)"',s)
    c=re.search(r'<link rel="canonical" href="(.*?)"',s)
    h1=[re.sub('<.*?>','',x) for x in re.findall(r'<h1[^>]*>(.*?)</h1>',s,re.S)]
    ld=[n.get('@type') for l in re.findall(r'<script type="application/ld\+json">(.*?)</script>',s,re.S)
        for n in json.loads(html.unescape(l)).get('@graph',[json.loads(html.unescape(l))])]
    print(f, len(html.unescape(t.group(1))) if t else 0, len(html.unescape(d.group(1))) if d else 0,
          c and c.group(1), h1, ld)
EOF
file public/images/HERO_CAROUSEL_2.png        # 1306 x 3572 — declared as 1200x630
grep -n "altHref" src/components/Nav.tsx      # language switcher target
grep -rn "Erik Werner" src                    # name inconsistency
```

## Appendix B — Page inventory (from build)

| Type | EN | SV |
|---|---|---|
| Home | `/` | `/sv/` |
| Services | `/growth-as-a-service/`, `/fractional-growth-lead/`, `/growth-advisory/`, `/growth-coaching/` | `/sv/growth-as-a-service/`, `/sv/interim-growth-lead/`, `/sv/growth-advisory/`, `/sv/growth-coaching/` |
| Work index | `/work/` | `/sv/case/` |
| Case studies (9) | `/work/{sands-entreprenad, leadfeeder-dealfront, funnel, bnbalyze, happy-vegan, dnb-eiendom, refapp, rikstv-strim, telia-norway}/` | `/sv/case/{same slugs}/` |
| System | `/robots.txt`, `/sitemap.xml`, `/404.html` | — |

---

## 11. Implementation log

### 2026-11-10 — Homepage positioning: "AI-Native Growth & GTM Partner"

| Audit item | Change | Status |
|---|---|---|
| T1 (title cannibalisation) | Homepage now targets "AI-Native Growth & GTM Partner"; `/growth-as-a-service/` keeps "Growth as a Service". | ✅ Resolved |
| T3 (description length) | Home descriptions 138 (EN) / 137 (SV) chars. | ✅ Home only |
| F1 (founder name) | Visible name standardised to **Erik Oliva Werner** everywhere (hero, about, footer, service pages, case-study quote attributions); no short form anywhere (schema alias removed; portraits renamed `erik-oliva-werner.png` / `.jpg`). Footer text comes from translations. Planned founder page URL: `/erik-oliva-werner/`. | ✅ |
| J2/J3/J5 (schema) | Shared `src/lib/schema.ts` (WebSite + Organization + Person + ProfessionalService) used by the EN and SV root layouts. Adds `alternateName`, `description`, `knowsAbout`, `homeLocation` Stockholm, `OfferCatalog` of the three capabilities. EN service/case layouts still lack the graph. | ◑ Partial |
| I3 (home → case links) | All homepage results cards and the new capability cards link to their case studies. | ✅ |
| H3 (heading skips) | Homepage H4 → H3 (who-it's-for, feature cards). Case-study pages unchanged. | ◑ Home only |
| A2 (reduced motion) | `prefers-reduced-motion` disables reveal and keyframe animations site-wide. | ✅ |
| §5 planned pages | `src/lib/routes.ts` registry; AI Growth Consultant, AI GTM Systems and founder links render only when `published: true`. `npm run check:links` fails on any broken internal link in `out/`. | ✅ Mechanism; pages not built |
| Local / NAP | Business address **Riddersviksvägen 161, 165 72 Hässelby** in `src/lib/business.ts`, rendered in an `<address>` in the footer of every page and in Organization/ProfessionalService `PostalAddress` + `hasMap`. Click-to-load Google Map in footer (no Google requests until clicked). Must match the Google Business Profile exactly. | ✅ |

### 2026-11-10 — `/ai-growth-consultant/` (EN)

| Item | Change | Status |
|---|---|---|
| §5 AI Growth page | New commercial page targeting "AI growth consultant" intent: title 61 chars, ~2,000 words, Discover → Build → Scale model, 4 offers, 7-question FAQ, contact section with booking embed. | ✅ EN live in build |
| Proof | Sands Entreprenad (17× organic visibility) plus Bnbalyze, Leadfeeder/Dealfront and Funnel cards pulled from `work.ts`. Mentimeter shown as professional experience, explicitly not a client engagement. | ✅ |
| Schema | Page: `Service` + `OfferCatalog`, `FAQPage`, `BreadcrumbList`. Layout: `siteGraph('en')` now on all EN service and work pages, so `#organization` / `#erik` resolve (fixes **J2**). | ✅ |
| Internal links | Added to Services nav, footer, homepage "Ways to work together" and the homepage AI-systems capability card (EN only). Links out to Growth Advisory, Growth as a Service, Fractional Growth Lead and four case studies. | ✅ |
| Language | Swedish version live at `/sv/ai-tillvaxtkonsult/` (title 59, description 158 chars). Reciprocal hreflang en/sv/x-default in HTML and sitemap; in SV menus, footer and homepage. | ✅ |
| Meta description | 164 chars as supplied, slightly over the ~160 guideline. | ⚠️ Accepted |
| I2 (language switcher) | `Nav` accepts a page-level `altHref`; used on the AI Growth pair so EN ↔ SV switch to the matching page. Other pages still fall back to the other homepage. | ◑ Partial |

### 2026-11-10 — `/ai-gtm-systems/` (EN) + `/sv/ai-gtm-system/` (SV)

| Item | Change | Status |
|---|---|---|
| §5 AI GTM page | New EN + SV pages (titles 54 / 50 chars, descriptions 153 / 159). Problem, Growth Operating System stack diagram, Growthship framework (Bridge, Engine Room, Radar, Launchpad), illustrative scenario, agentic web, Sands + Mentimeter, Discover & Design → Build & Connect → Operate & Optimize, FAQ, contact with booking embed. | ✅ |
| Claims | Scenario labelled illustrative; Growthship labelled an operating model, not a product; Mentimeter labelled professional experience, not a client. Proof metrics from `work.ts` (Sands, Bnbalyze, Leadfeeder/Dealfront, Refapp). | ✅ |
| Linking | Promoted from the planned-pages registry to `serviceNav` (`aiGtm`): Services menu, footer, homepage "Ways to work together" and AI-systems capability card, plus related-services on both AI Growth Consultant pages. Language switcher targets the matching translation. | ✅ |
| Overlap | Shares themes with `/ai-growth-consultant/` (Growth OS, Sands, Mentimeter). Intents kept distinct: *consultant* (who/advisory) vs *systems & automation* (what gets built). Both pages cross-link. Monitor GSC for query overlap. | ⚠️ Watch |

### 2026-11-10 — AI GTM Systems: product-led refinement (founder brief)

| Item | Change | Status |
|---|---|---|
| Visual | Growthship diagram (four modules in a clockwise loop around a shared-context core) and a five-stage flow Data → Insight → Agent → Execution → Learning with UI-style cards, replacing the text timeline. | ✅ EN + SV |
| Claim accuracy | New "Built · In development · Possible" section. *Built* lists only what the Sands case documents; *In development* is Mentimeter (employment, not a client); *Possible* is scoped per engagement. Growthship lists relabelled "Examples of what can be built" with a scope note. | ✅ |
| Agentic web | Four capability cards (custom web dev, agent-ready experiences, AI-driven content ops, integrated lead flows) with concrete examples, Sands proof chips and a "why the combination matters" panel. | ✅ |
| Brand | The Growthship framed as Erik's operating model ("How I think about it"), not a product; FAQ clarifies Greow is the consultancy, not a licensed platform. No product schema. | ✅ |

### 2026-11-10 — Sands & Bnbalyze cases strengthened; Mentimeter draft

| Item | Change | Status |
|---|---|---|
| Case structure | Optional `CaseStudy` fields rendered by `CaseStudy.tsx`: `approach`, `built`, `aiCapabilities` (with Live / Designed / v1 paused / 2.0 proven status), `verification`, `relatedServices`, `seo`. "The starting point" relabelled "The business challenge" on both cases. Other cases unchanged. | ✅ EN + SV |
| Claims | No new metrics. Every item restates facts already in the case text; designed (Sands offline-conversion loop) and not-yet-launched (Bnbalyze 2.0, Hemnet) items are labelled as such. Verification line states what figures cover and that no revenue is claimed. | ✅ |
| SEO (T2/T3) | Outcome-led titles (57–62 chars) and descriptions (152–157 chars) for Sands and Bnbalyze in both languages; Article JSON-LD uses the same description. Other case titles still generic. | ◑ 2 of 9 cases |
| Internal links | Case → service links: Sands → AI GTM Systems, AI Growth Consultant, Growth as a Service; Bnbalyze → AI Growth Consultant, AI GTM Systems, Growth Advisory (I4 for these two cases). | ✅ |
| Mentimeter | Unpublished draft in `docs/drafts/mentimeter-experience.md` (EN + SV), framed as employment, no metrics, with an approval checklist. Not built or linked. | ✅ Draft only |

### 2026-11-10 — Animated GTM system diagram on AI GTM Systems (EN/SV)

| Item | Change | Status |
|---|---|---|
| Visual | New section "A GTM system in practice" / "Ett GTM-system i praktiken": Product → Launch board → GTM context → Growth Operating System → Activation, with a feedback loop. HTML/CSS (`GtmSystemDiagram.tsx`, `gsys-*`), not an image: text is crawlable and translated. | ✅ |
| Motion | 5.4 s pulse: columns glow in sequence, a dot travels each connector, activation channels light in turn, the feedback line flows back to Product. Transform/opacity/box-shadow only; fully disabled under `prefers-reduced-motion`. Vertical layout below 1100 px. | ✅ |
| Source | Generalised from a Mentimeter GTM-process sketch supplied by the founder: no Mentimeter brand, products or internal document names; labelled "Illustrative model". | ⚠️ Founder to confirm comfort with publishing |

### 2026-11-10 — Technical SEO pass, measurement framework, Mentimeter draft

| Item | Change | Status |
|---|---|---|
| I2 language switcher | Derived from one translation registry (`src/lib/alternates.ts`); now targets the matching page on all 34 pages (was the other homepage on 28). | ✅ |
| S3/S5 sitemap | Generated from the registry; misleading build-time `lastmod`, `changefreq`, `priority` removed. 34 URLs = 34 indexable pages. | ✅ |
| robots | Explicit AI-crawler groups; non-standard `Host` removed. | ✅ |
| T2/T3 metadata | All 18 case pages and both work indexes have outcome-led titles; all descriptions ≤ 160 chars. | ✅ |
| J2/J6/J8 schema | Logo as 180×180 ImageObject; `sameAs` slot (empty until verified); Service + BreadcrumbList on all service pages; BreadcrumbList + ItemList on work indexes; Article `@id`, image, `isPartOf`. Stable `@id`s documented in `docs/technical-seo.md`. | ✅ |
| Validation | `npm run check:seo`: 34 pages, 0 errors, mutation-tested. Rich Results Test still requires the live URL. | ✅ offline / ⏳ live |
| Measurement | `docs/measurement/`: README, 10 prompts × EN/SV, empty AI-visibility log, GSC monthly log with the real 2026-11-10 baseline, target queries, competitor list. | ✅ |
| Mentimeter | Founder copy as an unpublished EN + SV draft in `docs/drafts/` with a publication checklist and a mapping to the case template. | ✅ Draft only |

### 2026-11-10 — Founder bio page (F3)

| Item | Change | Status |
|---|---|---|
| F3 founder page | `/erik-oliva-werner/` + `/sv/erik-oliva-werner/` (founder copy; name written in full, URL uses the full name). ProfilePage + BreadcrumbList; `Person.url` → bio page, `Person.description` → micro bio. In sitemap and translation registry (36 URLs). | ✅ |
| Internal links | Linked from the homepage founder section, the footer on every page, and onward to cases (DNB, RiksTV, Refapp, Leadfeeder, Funnel, Happy Vegan, Bnbalyze, Sands) and all relevant services. | ✅ |
| Claims | Mentimeter/Growthship carries the employment disclosure; LINK Mobility and Mentimeter are not linked (no case pages). "Connect on LinkedIn" is hidden until a verified URL is added. | ✅ |

### 2026-11-10 — Remaining backlog: share images, performance, accessibility, cleanup

| Item | Change | Status |
|---|---|---|
| Sands claims | "Internal backoffice" removed wherever it was attributed to Sands (AI pages, bio). Backoffice tools remain as a service capability. | ✅ |
| W1 share image (P0) | Branded 1200×630 JPG per language (`og-greow-en.jpg` 41 KB, `og-greow-sv.jpg` 43 KB) on every page and in Organization/Service schema; Swedish pages use the Swedish image. Bio pages use the portrait. | ✅ |
| W2/W4 images | Avatar 363 KB PNG → 3 KB WebP; home hero dashboard 881 KB PNG → 328 KB WebP (900 px); bio portrait shown as 25 KB WebP (original JPG kept for schema/sharing). | ✅ |
| W3 fonts | 20 preloaded font files → 5 (Ubuntu 400/500/700, Source Sans 3 variable normal + italic, latin subset only). | ✅ |
| A1/A3 accessibility | Skip-to-content link on every page (`#main`); Services dropdown has `aria-haspopup`/`aria-controls`. | ✅ |
| A7 contrast | Grey tokens darkened (`--jet-muted` #777 → #6B6B6B, `--jet-dim` #AAA → #6B6B6B) and dimmed white text on dark bands raised to 85% opacity. **Open:** brand salmon/turquoise as text or button colour (e.g. white on salmon CTA, 2.34:1) fails WCAG AA — needs a brand decision. | ◑ |
| Hygiene | Legacy root `index.html`, `assets/`, root `CNAME` removed (deploy uses `out/` and `public/CNAME`); README rewritten for the Next.js site. | ✅ |
| I7 404 | See below. | ✅ |

### 2026-11-10 — Brand-colour contrast + branded 404

| Item | Change | Status |
|---|---|---|
| A7 contrast | New token `--salmon-ink` `#B84432` for salmon text on light backgrounds (5.4:1 on white, 4.8:1 on tints). Salmon buttons and badges keep their salmon background with dark text (7.4:1, was 2.3:1). Turquoise text on white → jungle. Step numbers on the jungle bands → white. Salmon "who it's for" card and salmon work-index metric cards → dark text. axe colour-contrast: 0 failures on 9 representative pages (was 12 failing colour pairs). | ✅ |
| I7 404 | Branded, bilingual 404 ("This page churned." / "Den här sidan har churnat.") with a funnel-report visual (visited 1 → found 0 → conversion rate 0 %). Rendered from `src/app/(services)/page-not-found/`, copied to `out/404.html` by `scripts/postbuild-404.mjs` (part of `npm run build`), route removed afterwards. Swedish shown for missing URLs under `/sv/`. `noindex, follow`. | ✅ |
