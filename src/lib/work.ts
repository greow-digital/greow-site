// ── Work / Case studies content ──────────────────────────────────────────────
// Bilingual data that drives the Work index page and each case study.
// Add a new case = add a CaseStudy entry (both languages) + a ProjectSummary.

export type Lang = 'en' | 'sv'

// Base URLs per language for the Work section
export const workBase: Record<Lang, string> = {
  en: '/work/',
  sv: '/sv/case/',
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface Metric {
  value: string
  label: string
  note?: string
}

export interface CaseBlock {
  title: string
  body?: string
  items?: string[]
}

export interface CaseAct {
  label: string
  title: string
  subtitle: string
  blocks: CaseBlock[]
}

export interface ResultItem {
  value?: string
  title: string
  body: string
}

export interface CaseStudy {
  slug: string
  accent: 'jungle' | 'salmon' | 'turquoise'
  kicker: string
  client: string
  title: string
  intro: string
  // Optional showcase image straddling the hero and the metrics band.
  heroImage?: { src: string; alt?: string }
  meta: { label: string; value: string }[]
  metrics: Metric[]
  overview: { heading: string; body: string[] }
  startingPoint: { label: string; heading: string; lead: string; points: string[]; goal: string }
  // Optional: a highlighted "what I owned" section rendered after the starting point.
  ownership?: { label: string; heading: string; intro: string; items: string[]; outro?: string }
  // Optional: a single highlighted callout box (e.g. "proof before platform").
  proof?: { label: string; heading: string; body: string }
  acts: CaseAct[]
  results: {
    label: string
    heading: string
    intro: string
    items: ResultItem[]
    // Optional secondary "built to compound" checklist.
    compound?: { heading: string; points: string[] }
  }
  // Optional: a "key learnings" section rendered after the results.
  keyLearnings?: { label: string; heading: string; items: { title: string; body: string }[] }
  // Optional: shown only when the engagement involved a build.
  techStack?: { label: string; items: string[] }
  role: { label: string; heading: string; body: string; items?: string[] }
  quote: { text: string; author: string; role: string }
  cta: { heading: string; body: string; button: string }
}

export interface ProjectSummary {
  slug: string
  href: string | null // null = no dedicated case page yet
  accent: 'jungle' | 'salmon' | 'turquoise'
  client: string
  logo?: string // optional brand mark shown on the featured card
  title: string
  blurb: string
  tags: string[]
  metric: { value: string; label: string }
  year: string
}

export interface Engagement {
  client: string
  logo: string
  metric: string
  label: string
}

export interface WorkIndexCopy {
  meta: { title: string; description: string }
  kicker: string
  title: string
  titleEm: string
  intro: string
  featuredLabel: string
  moreLabel: string
  moreHeading: string
  moreIntro: string
  ctaCard: { heading: string; body: string; button: string }
  readCase: string
}

// ── Shared registry ──────────────────────────────────────────────────────────

// Curated engagements reused from the homepage proof section — shown on the
// Work index as a portfolio strip alongside the full case studies.
// All former engagements have graduated to full case studies. New teaser-only
// engagements can be added here; the Work index renders this strip only when
// it's non-empty.
export const engagements: Record<Lang, Engagement[]> = {
  en: [],
  sv: [],
}

export const projects: Record<Lang, ProjectSummary[]> = {
  en: [
    {
      slug: 'sands-entreprenad',
      href: '/work/sands-entreprenad/',
      accent: 'jungle',
      client: 'Sands Entreprenad',
      logo: '/assets/logo-sandsentreprenad.svg',
      title: 'An AI-native lead platform for a Stockholm roofing contractor',
      blurb: 'From a single proof-of-concept landing page to a full digital presence they own outright — an ~80-page platform, a multi-path lead funnel, and their entire Google presence, built and run end-to-end.',
      tags: ['Next.js', 'Sanity CMS', 'SEO', 'Google Ads', 'Agentic build'],
      metric: { value: '17×', label: 'organic search visibility' },
      year: '2025',
    },
    {
      slug: 'leadfeeder-dealfront',
      href: '/work/leadfeeder-dealfront/',
      accent: 'salmon',
      client: 'Leadfeeder / Dealfront',
      logo: '/assets/logo-leadfeeder.svg',
      title: 'A post-merger B2B SaaS turned into a unified, self-serve growth platform',
      blurb: 'As Director of Growth & Product Experience, I led the shift to product-led growth across two merged platforms — self-serve across all plans, an AI-powered onboarding redesign, a usage-based pricing transformation and a unified GTM.',
      tags: ['PLG', 'Onboarding', 'Pricing', 'Product UX', 'GTM'],
      metric: { value: '100%', label: 'more new accounts' },
      year: '2025–26',
    },
    {
      slug: 'funnel',
      href: '/work/funnel/',
      accent: 'turquoise',
      client: 'Funnel.io',
      logo: '/assets/logo-funnel.svg',
      title: 'A new product-led growth engine for a sales-led B2B SaaS',
      blurb: 'As Growth Product Lead for Acquisition, I built Funnel’s self-serve motion from zero to 20% of total MRR — and ran the website as a product, rebuilding brand, pricing, SEO, CRO and an experimentation engine across the whole acquisition surface.',
      tags: ['PLG', 'Website', 'SEO', 'CRO', 'Experimentation'],
      metric: { value: '0 → 20%', label: 'of MRR via PLG' },
      year: '2022–25',
    },
    {
      slug: 'rikstv-strim',
      href: '/work/rikstv-strim/',
      accent: 'salmon',
      client: 'RiksTV & Strim.no',
      logo: '/assets/logo-rikstv.svg',
      title: 'Launching Norway’s first B2C streaming service — and transforming a TV distributor’s digital sales',
      blurb: 'As Head of Growth & Acquisition, I built Strim.no’s acquisition engine from zero — team, agencies, channels, creative and measurement — cutting CAC by 40% and beating subscriber targets, while rebuilding rikstv.no and leading digital sales for the established business.',
      tags: ['Growth leadership', 'Acquisition', 'Performance', 'Attribution', 'E-commerce'],
      metric: { value: '−40%', label: 'lower CAC' },
      year: '2018–20',
    },
    {
      slug: 'telia-norway',
      href: '/work/telia-norway/',
      accent: 'turquoise',
      client: 'Telia Norway',
      logo: '/assets/logo-telia.svg',
      title: 'E-commerce from a secondary channel to a scalable growth platform',
      blurb: 'As E-Commerce Manager, I rebuilt Telia Norway’s webshop across B2C and B2B, stood up an agile product organisation, rebuilt performance marketing, and launched the company’s first omnichannel programme — doubling conversion.',
      tags: ['E-commerce', 'Agile', 'CRO', 'Performance', 'Omnichannel'],
      metric: { value: '2×', label: 'e-commerce conversion' },
      year: '2014–17',
    },
    {
      slug: 'bnbalyze',
      href: '/work/bnbalyze/',
      accent: 'jungle',
      client: 'Bnbalyze',
      title: 'A vibe-coding experiment that became a full proptech SaaS — now AI-native',
      blurb: 'A solo build: a short-term-rental calculator that grew into a complete SaaS platform, reached 100+ organic users and real-estate pilots — and is being rebuilt as an agentic property analyst that keeps verified facts and AI judgement strictly separate.',
      tags: ['Founder', 'Full-stack', 'AI pipeline', 'Proptech', 'Vibe-coding'],
      metric: { value: '100+', label: 'organic users' },
      year: 'Ongoing',
    },
    {
      slug: 'happy-vegan',
      href: '/work/happy-vegan/',
      accent: 'turquoise',
      client: 'Happy Vegan',
      logo: '/assets/logo-happyvegan.svg',
      title: 'Sweden’s largest vegan online store, built solo — from zero to a successful exit',
      blurb: 'A solo side project I built, grew and sold in two years: brand, storefront, paid and organic growth, CRM, and the entire physical grocery operation — sourcing, cold-chain, 10,000+ SKUs and 500+ monthly shipments.',
      tags: ['Founder', 'E-commerce', 'Performance', 'SEO', 'Operations'],
      metric: { value: 'SEK 2.5M', label: 'revenue, then exit' },
      year: '2022–24',
    },
  ],
  sv: [
    {
      slug: 'sands-entreprenad',
      href: '/sv/case/sands-entreprenad/',
      accent: 'jungle',
      client: 'Sands Entreprenad',
      logo: '/assets/logo-sandsentreprenad.svg',
      title: 'En AI-native leadplattform för en takentreprenör i Stockholm',
      blurb: 'Från en enda proof-of-concept-landningssida till en komplett digital närvaro som de äger fullt ut — en plattform på ~80 sidor, en lead-tratt med flera vägar in och hela deras Google-närvaro, byggd och driven från start till mål.',
      tags: ['Next.js', 'Sanity CMS', 'SEO', 'Google Ads', 'Agentiskt byggd'],
      metric: { value: '17×', label: 'organisk synlighet i sök' },
      year: '2025',
    },
    {
      slug: 'leadfeeder-dealfront',
      href: '/sv/case/leadfeeder-dealfront/',
      accent: 'salmon',
      client: 'Leadfeeder / Dealfront',
      logo: '/assets/logo-leadfeeder.svg',
      title: 'En post-merger-SaaS förvandlad till en enhetlig, self-serve growth-plattform',
      blurb: 'Som Director of Growth & Product Experience ledde jag skiftet till product-led growth över två sammanslagna plattformar — self-serve över alla planer, en AI-driven onboarding-omgörning, en användningsbaserad pricing-transformation och en enad GTM.',
      tags: ['PLG', 'Onboarding', 'Pricing', 'Produkt-UX', 'GTM'],
      metric: { value: '100%', label: 'fler nya konton' },
      year: '2025–26',
    },
    {
      slug: 'funnel',
      href: '/sv/case/funnel/',
      accent: 'turquoise',
      client: 'Funnel.io',
      logo: '/assets/logo-funnel.svg',
      title: 'En ny product-led growth-motor för en säljledd B2B-SaaS',
      blurb: 'Som Growth Product Lead för Acquisition byggde jag Funnels self-serve-motion från noll till 20% av total MRR — och drev webbplatsen som en produkt, byggde om varumärke, pricing, SEO, CRO och en experimenteringsmotor över hela förvärvsytan.',
      tags: ['PLG', 'Webbplats', 'SEO', 'CRO', 'Experimentering'],
      metric: { value: '0 → 20%', label: 'av MRR via PLG' },
      year: '2022–25',
    },
    {
      slug: 'rikstv-strim',
      href: '/sv/case/rikstv-strim/',
      accent: 'salmon',
      client: 'RiksTV & Strim.no',
      logo: '/assets/logo-rikstv.svg',
      title: 'Lanserade Norges första B2C-streamingtjänst — och transformerade en TV-distributörs digitala försäljning',
      blurb: 'Som Head of Growth & Acquisition byggde jag Strim.nos förvärvsmotor från noll — team, byråer, kanaler, kreativ och mätning — sänkte CAC med 40% och slog prenumerantmålen, samtidigt som jag byggde om rikstv.no och ledde digital försäljning för den etablerade affären.',
      tags: ['Growth-ledarskap', 'Förvärv', 'Performance', 'Attribution', 'E-handel'],
      metric: { value: '−40%', label: 'lägre CAC' },
      year: '2018–20',
    },
    {
      slug: 'telia-norway',
      href: '/sv/case/telia-norway/',
      accent: 'turquoise',
      client: 'Telia Norway',
      logo: '/assets/logo-telia.svg',
      title: 'E-handel från en sekundär kanal till en skalbar tillväxtplattform',
      blurb: 'Som E-Commerce Manager byggde jag om Telia Norges webbshop över B2C och B2B, satte upp en agil produktorganisation, byggde om performance marketing, och lanserade bolagets första omnikanalprogram — och fördubblade konverteringen.',
      tags: ['E-handel', 'Agilt', 'CRO', 'Performance', 'Omnikanal'],
      metric: { value: '2×', label: 'e-handelskonvertering' },
      year: '2014–17',
    },
    {
      slug: 'bnbalyze',
      href: '/sv/case/bnbalyze/',
      accent: 'jungle',
      client: 'Bnbalyze',
      title: 'Ett vibe-coding-experiment som blev en komplett proptech-SaaS — nu AI-native',
      blurb: 'Ett solobygge: en kalkylator för korttidsuthyrning som växte till en komplett SaaS-plattform, nådde 100+ organiska användare och fastighetsmäklarpiloter — och byggs nu om till en agentisk fastighetsanalytiker som håller verifierade fakta och AI-omdöme strikt åtskilda.',
      tags: ['Grundare', 'Full-stack', 'AI-pipeline', 'Proptech', 'Vibe-coding'],
      metric: { value: '100+', label: 'organiska användare' },
      year: 'Pågående',
    },
    {
      slug: 'happy-vegan',
      href: '/sv/case/happy-vegan/',
      accent: 'turquoise',
      client: 'Happy Vegan',
      logo: '/assets/logo-happyvegan.svg',
      title: 'Sveriges största veganska nätbutik, byggd solo — från noll till en lyckad exit',
      blurb: 'Ett soloprojekt jag byggde, växte och sålde på två år: varumärke, butik, betald och organisk tillväxt, CRM, och hela den fysiska livsmedelsverksamheten — inköp, kylkedja, 10 000+ artiklar och 500+ försändelser i månaden.',
      tags: ['Grundare', 'E-handel', 'Performance', 'SEO', 'Drift'],
      metric: { value: '2,5M kr', label: 'omsättning, sedan exit' },
      year: '2022–24',
    },
  ],
}

export const workIndexCopy: Record<Lang, WorkIndexCopy> = {
  en: {
    meta: {
      title: 'Work · Greow',
      description:
        'Selected work by Greow — platforms, growth engines and the systems that turn traffic into revenue. Including the Sands Entreprenad AI-native lead platform.',
    },
    kicker: 'Work',
    title: 'Work that',
    titleEm: 'compounds.',
    intro:
      'A look at what I build and run — platforms, growth engines and the systems that turn traffic into revenue. Fewer, deeper engagements where I own the outcome end-to-end.',
    featuredLabel: 'Case study',
    moreLabel: 'Track record',
    moreHeading: 'More engagements',
    moreIntro:
      'Selected results from growth roles and advisory work across B2B SaaS, e-commerce and fintech.',
    ctaCard: {
      heading: 'Want to be the next case?',
      body: 'Let’s talk about what a channel you own could look like for your business.',
      button: 'Book a call →',
    },
    readCase: 'Read the case',
  },
  sv: {
    meta: {
      title: 'Case · Greow',
      description:
        'Utvalda case från Greow — plattformar, growth-motorer och systemen som gör trafik till intäkter. Inklusive Sands Entreprenads AI-native leadplattform.',
    },
    kicker: 'Case',
    title: 'Arbete som',
    titleEm: 'växer med tiden.',
    intro:
      'En inblick i vad jag bygger och driver — plattformar, growth-motorer och systemen som gör trafik till intäkter. Färre, djupare uppdrag där jag äger resultatet från start till mål.',
    featuredLabel: 'Case study',
    moreLabel: 'Meritlista',
    moreHeading: 'Fler uppdrag',
    moreIntro:
      'Utvalda resultat från growth-roller och rådgivning inom B2B SaaS, e-handel och fintech.',
    ctaCard: {
      heading: 'Vill du bli nästa case?',
      body: 'Låt oss prata om hur en kanal du äger själv skulle kunna se ut för din verksamhet.',
      button: 'Boka ett samtal →',
    },
    readCase: 'Läs caset',
  },
}

// ── Sands Entreprenad case study ─────────────────────────────────────────────

const sandsEn: CaseStudy = {
  slug: 'sands-entreprenad',
  accent: 'jungle',
  kicker: 'Case study',
  client: 'Sands Entreprenad',
  title: 'An AI-native lead platform for a Stockholm roofing contractor.',
  intro:
    'From a single proof-of-concept landing page to a full digital presence they own outright — built and run end-to-end.',
  meta: [
    { label: 'Role', value: 'End-to-end — build, SEO, paid, CRO' },
    { label: 'Industry', value: 'Roofing / construction' },
    { label: 'Location', value: 'Greater Stockholm' },
    { label: 'Build', value: 'Agentically, in Claude Code' },
  ],
  metrics: [
    { value: '17×', label: 'organic search visibility', note: '~1,500% uplift in organic impressions (Search Console)' },
    { value: '7×', label: 'more leads, quarter over quarter', note: 'Across two comparable quarters' },
    { value: 'Owned', label: 'channel, not rented', note: 'From renting leads on marketplaces → their own engine' },
  ],
  overview: {
    heading: 'Out of the marketplace, into a channel they own.',
    body: [
      'Sands Entreprenad, a roofing contractor covering greater Stockholm, was dependent on expensive third-party lead marketplaces like Offerta — where you pay a high price per lead, get dropped into a “provider selection” for the customer to choose from, and pay whether or not you win the job. It’s costly, brutally competitive, and rents you demand you never own. The client wanted out — to build a lead-generation engine they fully own themselves.',
      'The engagement started small and low-risk — an isolated landing page with paid ads driving to it, as a proof of concept. It performed well enough that the client asked me to rebuild their entire website, and from there I took ownership of their whole Google presence: paid search, SEO, reviews, Google Business Profile, and full click-to-job measurement — all funneling into a channel they own outright.',
      'The platform was built agentically from inside Claude Code, with a deliberate code-plus-CMS architecture and a lightweight automation that gives the client a measurable lead funnel without a heavy CRM. The result: 17× organic search visibility and roughly 7× more leads quarter-over-quarter.',
    ],
  },
  startingPoint: {
    label: 'The starting point',
    heading: 'Renting demand, not owning it.',
    lead: 'Before the rebuild, growth was capped by a channel Sands didn’t control.',
    points: [
      'Dependent on paid lead marketplaces (Offerta and similar): high cost per lead, placed in a bidding “provider selection” against several competitors, and charged with no guarantee of winning the work.',
      'A competitive local market of expensive roofing keywords, and no structure to capture demand across the county’s municipalities.',
      'An old site that didn’t turn visitors into quote requests.',
      'No real focus on Google presence — search, reviews or profile.',
    ],
    goal: 'The goal: a modern platform that ranks on local roofing searches, makes it effortless to request a quote, and traces every lead from ad click to closed job — so marketing can optimize toward actual work.',
  },
  proof: {
    label: 'How it started',
    heading: 'Proof before platform.',
    body:
      'Rather than pitch a big rebuild cold, I started with a single isolated landing page and paid ads pointed at it — a contained, low-risk test of demand and messaging. It converted well enough that the client wanted the whole site rebuilt around the same approach. That proof is what earned the full mandate: platform, SEO, and the entire Google presence.',
  },
  acts: [
    {
      label: 'Act I',
      title: 'The Build',
      subtitle: 'A modern platform, built agentically.',
      blocks: [
        {
          title: 'Platform & content architecture',
          body:
            'A Next.js site of ~80 pages: 31 local-area pages (one per municipality), 40+ project references, and a guide library — a structure designed to capture demand across the whole county.',
        },
        {
          title: 'Lead generation & conversion',
          body: 'Multiple paths into one funnel, all feeding a single pipeline with GA4 conversion tracking imported to Google Ads at a value per lead:',
          items: [
            'An interactive “roof test” — the visitor answers a few questions and gets a personal assessment before the form.',
            'A scripted chat widget on the same logic, with a real roofing expert as the avatar to feel human.',
            'A quote form and a price calculator with the ROT deduction built in.',
          ],
        },
        {
          title: 'Performance — Core Web Vitals',
          body:
            'Drone videos on project cards and the hero load without hurting speed: a still image as base layer, video fetched only as the element nears the viewport, respecting reduced-motion and data-saver modes.',
        },
        {
          title: 'Design & data quality',
          body:
            'A “bold and clean” design line, real drone photography of actual roofs instead of placeholders, and a date-driven hero that rotates seasonal messaging automatically. I also ran a full reconciliation of the CMS’s 47 projects — using the actual quotes as ground truth to match the right images to the right project.',
        },
        {
          title: 'Agentic development in Claude Code',
          body:
            'The whole platform was built agentically — but the interesting part was an architecture decision that emerged. I first built everything with content in code — fast, total control — but Sands’ editors needed to publish themselves, without a developer in the loop. So I broke the editorial parts out into a headless CMS (Sanity). The result is a deliberate hybrid: code owns what’s stable (area structure, design, logic); the CMS owns what the editor controls daily (projects, images, copy). Publish a new project and it appears automatically on the right area page and in the homepage feed. The unusual part: instead of clicking through a studio UI, I used Sanity’s MCP server to build the entire structure — schema, content model, entries, image uploads — directly from inside Claude Code, in the same flow as the code.',
        },
        {
          title: 'Automation — a lead funnel without a heavy CRM',
          body:
            'The quote form posts to an edge API route, which calls a Google Apps Script webhook; the script writes the lead into a Google Sheet and emails Sands simultaneously — the same event fires the GA4 / Google Ads conversion. The client works in a tool they already know, gets every request in their inbox, and pays no CRM cost. I hardened the script after a real production incident (a formatting quirk shifted where new rows landed), so it always writes to the correct row.',
        },
      ],
    },
    {
      label: 'Act II',
      title: 'The Google Presence',
      subtitle: 'Built and run end-to-end.',
      blocks: [
        {
          title: 'Paid Search',
          body:
            'Built and managed the Google Ads program with clean branded ads, a disciplined negative-keyword strategy, CPC caps and dayparting — kept efficient rather than spendy — with value-based bidding driven by the imported lead value, so it optimizes toward real requests, not clicks.',
        },
        {
          title: 'SEO — programmatic & technical',
          body:
            'The 31 area pages carry unique content with auto-generated per-municipality meta descriptions. A hub-and-spoke internal-linking structure concentrates authority on the money pages with varied anchor text. Structured data (BreadcrumbList, FAQ), visible breadcrumbs, and 301 redirects during the migration consolidate the old site’s authority instead of splitting it.',
        },
        {
          title: 'Reviews & Google Business Profile',
          body:
            'The client had never focused on this. I built a review-generation process and grew their Google reviews, and optimized the Business Profile to drive local-pack and Maps visibility — the fastest route to showing up for high-intent local roofing searches.',
        },
        {
          title: 'Measurement rigor',
          body:
            'Robust tracking end-to-end (fixed a form-submit event so bidding could finally see real leads; hardened the automation), an automated weekly Ads + GA4 + Search Console report, and an offline-conversion loop designed to optimize toward closed, profitable jobs rather than raw lead volume. Along the way I navigated real platform issues — Google’s auto-apply removing strategic keywords, a “Limited Ad Serving” policy cap, and brand-name confusion with a near-identical competitor — and resolved each.',
        },
      ],
    },
  ],
  results: {
    label: 'Results',
    heading: 'Compounding, not renting.',
    intro: 'After the new platform, the multi-path lead funnel and the full Google presence went live.',
    items: [
      {
        value: 'Owned',
        title: 'Owned the channel',
        body:
          'Sands went from renting leads on marketplaces — paying per lead with no guarantee of the job — to a lead-generation engine they fully own, where the cost is a fixed platform they control and every lead comes to them first, not to a bidding pool.',
      },
      {
        value: '17×',
        title: 'SEO impact — 17× organic visibility',
        body:
          'Organic search impressions grew roughly 1,500% (Search Console) — a 17× uplift — as the 80-page architecture, programmatic area pages, internal-linking structure and 301 consolidation matured. Organic went from a non-factor to a genuine channel, producing leads on its own for the first time.',
      },
      {
        value: '7×',
        title: 'Business impact — 7× more leads',
        body:
          'Across two comparable quarters, inbound leads rose roughly 7× — driven by the new platform, the multi-path funnel (roof test, chat widget, calculator, quote form) and the full Google presence.',
      },
    ],
    compound: {
      heading: 'Built to compound',
      points: [
        'A scalable platform where every new project the client publishes automatically strengthens a relevant area page.',
        'An editorial workspace the client owns, with no developer dependency.',
        'A measurable funnel from ad click to quote request, with value-based bidding optimizing toward closed, profitable jobs.',
        'A growing Google review base and optimized Business Profile driving local-pack visibility.',
      ],
    },
  },
  techStack: {
    label: 'Tech stack',
    items: [
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'Tailwind',
      'Sanity CMS (via Sanity MCP)',
      'Google Apps Script + Sheets',
      'GA4 & Google Ads',
      'Vercel',
      'Built in Claude Code',
    ],
  },
  role: {
    label: 'My role',
    heading: 'End-to-end ownership.',
    body:
      'Engineering, agentic build workflow, SEO strategy, paid search, Google Business Profile & reviews, conversion design, CMS architecture, and copy.',
  },
  quote: {
    text:
      'They were renting their leads — paying per lead on a marketplace, with no guarantee of the job. I built them a channel they own outright: one landing page that became an entire digital presence, ranking 17× higher and generating 7× the leads, every request traced from click to closed job.',
    author: 'Erik Werner',
    role: 'Greow',
  },
  cta: {
    heading: 'Want a channel you own?',
    body: 'If you’re renting demand on a marketplace, let’s talk about building an engine you control instead.',
    button: 'Book a call →',
  },
}

const sandsSv: CaseStudy = {
  slug: 'sands-entreprenad',
  accent: 'jungle',
  kicker: 'Case study',
  client: 'Sands Entreprenad',
  title: 'En AI-native leadplattform för en takentreprenör i Stockholm.',
  intro:
    'Från en enda proof-of-concept-landningssida till en komplett digital närvaro som de äger fullt ut — byggd och driven från start till mål.',
  meta: [
    { label: 'Roll', value: 'End-to-end — bygge, SEO, betald sök, CRO' },
    { label: 'Bransch', value: 'Tak / bygg' },
    { label: 'Plats', value: 'Storstockholm' },
    { label: 'Byggd', value: 'Agentiskt, i Claude Code' },
  ],
  metrics: [
    { value: '17×', label: 'organisk synlighet i sök', note: 'En uppgång på ~1 500% i organiska visningar (Search Console)' },
    { value: '7×', label: 'fler leads, kvartal mot kvartal', note: 'Över två jämförbara kvartal' },
    { value: 'Ägd', label: 'kanal, inte hyrd', note: 'Från att hyra leads på marknadsplatser → sin egen motor' },
  ],
  overview: {
    heading: 'Ut ur marknadsplatsen, in i en kanal de äger.',
    body: [
      'Sands Entreprenad, en takentreprenör som täcker Storstockholm, var beroende av dyra tredjeparts-marknadsplatser för leads som Offerta — där du betalar ett högt pris per lead, hamnar i ett “leverantörsurval” som kunden får välja ur, och betalar oavsett om du vinner jobbet eller inte. Det är kostsamt, stenhårt konkurrensutsatt och hyr ut efterfrågan du aldrig äger. Kunden ville ur det — och bygga en lead-motor de äger helt själva.',
      'Uppdraget började smått och lågrisk — en isolerad landningssida med betald annonsering mot den, som ett proof of concept. Den presterade tillräckligt bra för att kunden bad mig bygga om hela webbplatsen, och därifrån tog jag över hela deras Google-närvaro: betald sök, SEO, recensioner, Google Företagsprofil och full mätning från klick till jobb — allt in i en kanal de äger fullt ut.',
      'Plattformen byggdes agentiskt inifrån Claude Code, med en medveten arkitektur av kod plus CMS och en lättviktig automation som ger kunden en mätbar lead-tratt utan ett tungt CRM. Resultatet: 17× organisk synlighet i sök och ungefär 7× fler leads kvartal mot kvartal.',
    ],
  },
  startingPoint: {
    label: 'Utgångsläget',
    heading: 'Hyrde efterfrågan — ägde den inte.',
    lead: 'Före ombyggnaden var tillväxten begränsad av en kanal Sands inte kontrollerade.',
    points: [
      'Beroende av marknadsplatser för leads (Offerta och liknande): hög kostnad per lead, placerad i ett budgivnings-“leverantörsurval” mot flera konkurrenter, och debiterad utan garanti att vinna jobbet.',
      'En konkurrensutsatt lokal marknad med dyra tak-sökord, och ingen struktur för att fånga efterfrågan över länets kommuner.',
      'En gammal sajt som inte gjorde besökare till offertförfrågningar.',
      'Inget verkligt fokus på Google-närvaro — sök, recensioner eller profil.',
    ],
    goal: 'Målet: en modern plattform som rankar på lokala tak-sökningar, gör det enkelt att begära offert, och spårar varje lead från annonsklick till stängt jobb — så att marknadsföringen kan optimera mot faktiska jobb.',
  },
  proof: {
    label: 'Så började det',
    heading: 'Bevis före plattform.',
    body:
      'Istället för att pitcha en stor ombyggnad kallt började jag med en enda isolerad landningssida och betald annonsering mot den — ett avgränsat, lågrisk-test av efterfrågan och budskap. Den konverterade tillräckligt bra för att kunden ville bygga om hela sajten kring samma upplägg. Det beviset gav det fulla mandatet: plattform, SEO och hela Google-närvaron.',
  },
  acts: [
    {
      label: 'Akt I',
      title: 'Bygget',
      subtitle: 'En modern plattform, byggd agentiskt.',
      blocks: [
        {
          title: 'Plattform & innehållsarkitektur',
          body:
            'En Next.js-sajt på ~80 sidor: 31 lokala områdessidor (en per kommun), 40+ projektreferenser och ett guidebibliotek — en struktur byggd för att fånga efterfrågan över hela länet.',
        },
        {
          title: 'Leadgenerering & konvertering',
          body: 'Flera vägar in i en tratt, alla in i samma pipeline med GA4-konverteringsmätning importerad till Google Ads med ett värde per lead:',
          items: [
            'Ett interaktivt “taktest” — besökaren svarar på några frågor och får en personlig bedömning innan formuläret.',
            'En scriptad chatt-widget på samma logik, med en riktig takexpert som avatar för att kännas mänsklig.',
            'Ett offertformulär och en priskalkylator med ROT-avdraget inbyggt.',
          ],
        },
        {
          title: 'Prestanda — Core Web Vitals',
          body:
            'Drönarvideor på projektkort och i hero laddar utan att skada hastigheten: en stillbild som baslager, video hämtas först när elementet närmar sig vyn, med hänsyn till reduced-motion och datasparläge.',
        },
        {
          title: 'Design & datakvalitet',
          body:
            'En “bold and clean” designlinje, riktiga drönarbilder på faktiska tak istället för platshållare, och en datumstyrd hero som roterar säsongsbudskap automatiskt. Jag gjorde också en full avstämning av CMS:ets 47 projekt — med de faktiska offerterna som facit för att matcha rätt bilder till rätt projekt.',
        },
        {
          title: 'Agentisk utveckling i Claude Code',
          body:
            'Hela plattformen byggdes agentiskt — men det intressanta var ett arkitekturbeslut som växte fram. Jag byggde först allt med innehållet i koden — snabbt, total kontroll — men Sands redaktörer behövde kunna publicera själva, utan en utvecklare i loopen. Så jag bröt ut de redaktionella delarna i ett headless CMS (Sanity). Resultatet är en medveten hybrid: koden äger det som är stabilt (områdesstruktur, design, logik); CMS:et äger det redaktören styr dagligen (projekt, bilder, text). Publicera ett nytt projekt och det dyker upp automatiskt på rätt områdessida och i flödet på startsidan. Det ovanliga: istället för att klicka mig genom ett studio-UI använde jag Sanitys MCP-server för att bygga hela strukturen — schema, innehållsmodell, poster, bilduppladdningar — direkt inifrån Claude Code, i samma flöde som koden.',
        },
        {
          title: 'Automation — en lead-tratt utan tungt CRM',
          body:
            'Offertformuläret postar till en edge-API-route, som anropar en Google Apps Script-webhook; scriptet skriver in leaden i ett Google Sheet och mejlar Sands samtidigt — samma händelse triggar GA4/Google Ads-konverteringen. Kunden jobbar i ett verktyg de redan kan, får varje förfrågan i inkorgen, och betalar ingen CRM-kostnad. Jag härdade scriptet efter en riktig produktionsincident (en formateringsegenhet flyttade var nya rader hamnade), så att det alltid skriver till rätt rad.',
        },
      ],
    },
    {
      label: 'Akt II',
      title: 'Google-närvaron',
      subtitle: 'Byggd och driven från start till mål.',
      blocks: [
        {
          title: 'Betald sök',
          body:
            'Byggde och skötte Google Ads-programmet med rena varumärkesannonser, en disciplinerad strategi för negativa sökord, CPC-tak och dayparting — hållet effektivt snarare än dyrt — med värdebaserad budgivning driven av det importerade lead-värdet, så det optimerar mot riktiga förfrågningar, inte klick.',
        },
        {
          title: 'SEO — programmatisk & teknisk',
          body:
            'De 31 områdessidorna bär unikt innehåll med auto-genererade meta-beskrivningar per kommun. En hub-and-spoke-struktur för intern länkning koncentrerar auktoritet på money-sidorna med varierad ankartext. Strukturerad data (BreadcrumbList, FAQ), synliga brödsmulor och 301-omdirigeringar under migreringen konsoliderar den gamla sajtens auktoritet istället för att splittra den.',
        },
        {
          title: 'Recensioner & Google Företagsprofil',
          body:
            'Kunden hade aldrig fokuserat på detta. Jag byggde en process för att generera recensioner och ökade deras Google-omdömen, och optimerade Företagsprofilen för att driva synlighet i lokala paketet och på Maps — den snabbaste vägen till att synas på lokala tak-sökningar med hög köpintention.',
        },
        {
          title: 'Mätdisciplin',
          body:
            'Robust mätning hela vägen (fixade en form-submit-händelse så budgivningen äntligen kunde se riktiga leads; härdade automationen), en automatiserad veckorapport med Ads + GA4 + Search Console, och en offline-konverteringsloop byggd för att optimera mot stängda, lönsamma jobb snarare än ren lead-volym. På vägen navigerade jag riktiga plattformsproblem — Googles auto-apply som tog bort strategiska sökord, ett “Limited Ad Serving”-policytak och namnförväxling med en nästan identisk konkurrent — och löste varje.',
        },
      ],
    },
  ],
  results: {
    label: 'Resultat',
    heading: 'Växer med tiden — hyr inte.',
    intro: 'Efter att den nya plattformen, lead-tratten med flera vägar och hela Google-närvaron gått live.',
    items: [
      {
        value: 'Ägd',
        title: 'Ägde kanalen',
        body:
          'Sands gick från att hyra leads på marknadsplatser — betala per lead utan garanti för jobbet — till en lead-motor de äger fullt ut, där kostnaden är en fast plattform de kontrollerar och varje lead kommer till dem först, inte till en budgivningspool.',
      },
      {
        value: '17×',
        title: 'SEO-effekt — 17× organisk synlighet',
        body:
          'Organiska visningar växte ungefär 1 500% (Search Console) — en 17× uppgång — i takt med att 80-sidorsarkitekturen, de programmatiska områdessidorna, den interna länkstrukturen och 301-konsolideringen mognade. Organiskt gick från icke-faktor till en genuin kanal som för första gången genererade leads på egen hand.',
      },
      {
        value: '7×',
        title: 'Affärseffekt — 7× fler leads',
        body:
          'Över två jämförbara kvartal steg inkommande leads ungefär 7× — drivet av den nya plattformen, tratten med flera vägar (taktest, chatt-widget, kalkylator, offertformulär) och hela Google-närvaron.',
      },
    ],
    compound: {
      heading: 'Byggd för att växa med tiden',
      points: [
        'En skalbar plattform där varje nytt projekt kunden publicerar automatiskt stärker en relevant områdessida.',
        'En redaktionell arbetsyta kunden äger, utan beroende av en utvecklare.',
        'En mätbar tratt från annonsklick till offertförfrågan, med värdebaserad budgivning som optimerar mot stängda, lönsamma jobb.',
        'En växande bas av Google-recensioner och en optimerad Företagsprofil som driver synlighet i lokala paketet.',
      ],
    },
  },
  techStack: {
    label: 'Teknik',
    items: [
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'Tailwind',
      'Sanity CMS (via Sanity MCP)',
      'Google Apps Script + Sheets',
      'GA4 & Google Ads',
      'Vercel',
      'Byggd i Claude Code',
    ],
  },
  role: {
    label: 'Min roll',
    heading: 'End-to-end-ägarskap.',
    body:
      'Utveckling, agentiskt byggflöde, SEO-strategi, betald sök, Google Företagsprofil & recensioner, konverteringsdesign, CMS-arkitektur och copy.',
  },
  quote: {
    text:
      'De hyrde sina leads — betalade per lead på en marknadsplats, utan garanti för jobbet. Jag byggde dem en kanal de äger fullt ut: en landningssida som blev en hel digital närvaro, som rankar 17× högre och genererar 7× fler leads, varje förfrågan spårad från klick till stängt jobb.',
    author: 'Erik Werner',
    role: 'Greow',
  },
  cta: {
    heading: 'Vill du ha en kanal du äger?',
    body: 'Om du hyr efterfrågan på en marknadsplats — låt oss prata om att bygga en motor du kontrollerar istället.',
    button: 'Boka ett samtal →',
  },
}

// ── Leadfeeder / Dealfront case study ────────────────────────────────────────

const leadfeederEn: CaseStudy = {
  slug: 'leadfeeder-dealfront',
  accent: 'salmon',
  kicker: 'Case study',
  client: 'Leadfeeder / Dealfront',
  title: 'Turning a post-merger B2B SaaS into a unified, self-serve growth platform.',
  intro:
    'Doubling new account creation and improving critical activation by more than 10% — with one product and go-to-market strategy across Leadfeeder and Dealfront.',
  meta: [
    { label: 'Role', value: 'Director of Growth & Product Experience' },
    { label: 'Period', value: 'Sep 2025 – Jun 2026' },
    { label: 'Scope', value: 'PLG · onboarding · pricing · UX · GTM' },
    { label: 'Context', value: 'Post-merger — Leadfeeder × Echobot → Dealfront' },
  ],
  metrics: [
    { value: '100%', label: 'uplift in new account creation', note: 'Self-serve launched as a primary growth channel' },
    { value: '10%+', label: 'improvement in tracker installation', note: 'The most critical activation milestone in Leadfeeder' },
    { value: 'Full', label: 'self-serve across all plans', note: 'Evaluate, buy and expand without sales involvement' },
  ],
  overview: {
    heading: 'Two platforms, one growth system.',
    body: [
      'Leadfeeder is a B2B SaaS platform that identifies the companies visiting a website and turns anonymous traffic into actionable sales intelligence. It operates as part of Dealfront — created through the PE-backed merger of Leadfeeder and Echobot, two complementary products serving thousands of B2B customers across Europe.',
      'When I joined, the company was navigating a pivotal post-merger transition: two brands, two platforms, two pricing models, fragmented product experiences, and a go-to-market motion that had not yet fully consolidated. My mandate was to lead growth strategy and product experience across the funnel — from acquisition and first use to activation, monetization, and expansion.',
      'I led the shift toward product-led growth, launched self-serve purchasing across all plans, redesigned onboarding, transformed pricing and packaging, and set the roadmap for a more unified product experience. The result: a 100% uplift in new account creation and a more than 10% improvement in tracker installation — the most important activation milestone in the Leadfeeder journey.',
    ],
  },
  startingPoint: {
    label: 'The starting point',
    heading: 'A strong product inside a fragmented org.',
    lead:
      'Leadfeeder’s core value was clear — reveal which companies visit a website and help teams act on that intent. The challenge was making that value accessible and scalable inside a newly merged organization, where the journey still reflected two separate products and commercial models.',
    points: [
      'Brand and market positioning',
      'Acquisition funnels',
      'Product onboarding',
      'Pricing and packaging',
      'Analytics and attribution',
      'Navigation and information architecture',
      'Product-led and sales-assisted motions',
    ],
    goal:
      'The opportunity wasn’t simply to improve individual screens. It was to create a coherent growth system across product, marketing, sales, data and revenue.',
  },
  ownership: {
    label: 'What I owned',
    heading: 'Growth strategy and the end-to-end product experience.',
    intro:
      'As Director of Growth & Product Experience, I owned growth strategy and the product experience across markets — turning commercial objectives into product experiences, from creating an account and installing the tracker to discovering value, choosing a plan, upgrading, expanding, or entering a sales-assisted journey. The work sat at the intersection of:',
    items: [
      'Product',
      'Engineering',
      'Design',
      'Marketing',
      'Data & analytics',
      'Sales',
      'Customer success',
      'Revenue operations',
      'Executive leadership',
    ],
    outro:
      'The role combined strategy, cross-functional leadership, discovery, prioritization, experimentation, implementation and measurement.',
  },
  acts: [
    {
      label: 'Act I',
      title: 'Making self-serve a primary growth channel',
      subtitle: 'Launching product-led growth across the platform.',
      blocks: [
        {
          title: 'Beyond a checkout button',
          body:
            'Self-serve existed only in parts of the journey rather than as a complete operating model. Enabling it across every plan tier meant the product had to support the full commercial lifecycle:',
          items: [
            'Account creation, trial and free-user journeys',
            'Plan selection, monthly and annual billing, card and invoice options',
            'Feature and volume entitlements, and product gates',
            'Post-trial experiences, upgrades, add-ons and credit consumption',
            'Sales handoffs for complex plans, and expansion through more users or usage',
          ],
        },
        {
          title: 'One source of pricing truth',
          body:
            'Pricing had to be equally true on the website, inside the product, and in the billing system. Any mismatch risked revenue leakage, customer confusion, support cases, or access to the wrong functionality — so acquisition, entitlements, checkout and upgrade moments were connected into one system.',
        },
        {
          title: 'A primary channel, for the first time',
          body:
            'By joining acquisition, entitlements, checkout and expansion, self-serve became a primary growth channel alongside direct sales for the first time — contributing to a 100% increase in new account creation.',
        },
      ],
    },
    {
      label: 'Act II',
      title: 'Redesigning activation',
      subtitle: 'For Leadfeeder, value depends on installing a website tracker — the most critical, and most friction-heavy, activation milestone.',
      blocks: [
        {
          title: 'AI-powered progressive onboarding',
          body:
            'Instead of confronting every user with one large setup wall, I led the design of an onboarding flow that adapted to the user’s readiness and guided them through installation step by step — balancing “make setup easy” with “demonstrate enough value that setup feels worthwhile.” This improved tracker installation by more than 10%.',
        },
        {
          title: 'From overlays to an embedded system',
          body:
            'The existing onboarding leaned heavily on Userpilot overlays, tooltips and checklists — fine for quick interventions, but unable to support a deeply contextual journey. I developed the direction for a product-native onboarding system built into the application:',
          items: [
            'A dedicated onboarding hub and contextual next actions inside the Lobby',
            'Persona-based guidance and embedded education',
            'Progress tracking and a gamified checklist',
            'Credit rewards for meaningful activation actions',
          ],
        },
        {
          title: 'Smart demo data',
          body:
            'To solve the empty-state problem, I introduced smart demo data: instead of asking users to install the tracker before seeing any value, the product could demonstrate a credible version of the outcome, then guide users toward activating it with their own data — an activation strategy around onboarding, the Lobby, installation and time-to-value, not just a sequence of tooltips.',
        },
      ],
    },
    {
      label: 'Act III',
      title: 'Transforming pricing and monetization',
      subtitle: 'Moving from a complex model to one that’s clear, usage-based, and built into the product.',
      blocks: [
        {
          title: 'Usage-based, self-serve-first',
          body:
            'I led the transition to a usage-based, self-serve-first pricing structure designed to make the buying decision clearer and support expansion as usage grows — moving customers from value to purchase without unnecessary human intervention, while retaining sales-assisted paths for complex deals. The implementation covered:',
          items: [
            'Product-wide feature gating and usage / credit logic',
            'Self-serve checkout and post-trial conversion',
            'Upgrade flows, plan and volume expansion',
            'Product-led sales signals and correct access & entitlements',
          ],
        },
        {
          title: 'Pricing as a living system',
          body:
            'I positioned pricing as an ongoing product discipline rather than a one-time launch, connecting monetization to actual product behavior. The post-launch roadmap included:',
          items: [
            'Contextual upgrade recommendations based on feature and volume usage',
            'A dedicated in-product pricing experience and improved checkout',
            'Self-serve downgrade paths and smarter cancellation flows',
            'Churn-prevention interventions and behavior-based discount experiments',
            'Continuous analysis of funnel drop-offs and objections',
          ],
        },
      ],
    },
    {
      label: 'Act IV',
      title: 'Unifying the product experience',
      subtitle: 'A discovery-led roadmap organized around the customer’s journey, not the company’s previous product boundaries.',
      blocks: [
        {
          title: 'Web Visitors',
          body:
            'The core Leadfeeder experience. I led the strategic direction for a UX overhaul centered on one clear loop — find a high-intent visitor → qualify the company → take action — structured around customer research, journey mapping and an information-architecture blueprint rather than assumptions, to reduce cognitive load and shorten time-to-first-value.',
        },
        {
          title: 'Lists as an execution hub',
          body:
            'I defined the direction for Lists as the product’s prospecting and execution hub — identify → organize → activate — a place to organize intent, build segments, collaborate and trigger downstream actions across CRM workflows, exports, campaigns and audience activation.',
        },
        {
          title: 'Campaigns & audience activation',
          body:
            'Campaign capabilities were fragmented — Display Ads under Promote, LinkedIn Audience Sync hidden in Integrations. I developed the strategy to consolidate them under one first-class Campaigns surface (Display, LinkedIn Sync, future Adform and The Trade Desk audiences, creation and measurement), making a clear path from identifying an audience to activating and measuring it.',
        },
        {
          title: 'In-product brand rollout',
          body:
            'The initial rebrand changed the logo, type and colors, but the deeper product still reflected multiple visual systems. I led translating the brand into the product — design tokens and theming, component states, navigation and naming, empty/loading/error states, paywall experiences, iconography, accessibility and consistent product copy — so a coherent interface could reduce cognitive load and let teams build faster.',
        },
      ],
    },
    {
      label: 'Act V',
      title: 'Unifying GTM infrastructure',
      subtitle: 'Rebuilding measurement on one dependable foundation.',
      blocks: [
        {
          title: 'Dealfront as the base',
          body:
            'The existing Google Tag Manager environments carried duplicated trackers, legacy scripts, inconsistent domain references and cross-site attribution logic accumulated across two companies. I led the migration on a clear principle: use Dealfront as the base, rebuild Leadfeeder within the new structure, and selectively retain only what remained necessary — avoiding a blind merge that carries technical debt forward.',
        },
        {
          title: 'The cleanup',
          body: 'The work — critical but mostly invisible — covered:',
          items: [
            'Standardizing GA4 and conversion events; auditing duplicated Leadfeeder trackers',
            'Reviewing attribution-cookie sharing and cross-domain linker settings',
            'Cleaning CookieHub, validating Consent Mode, aligning Intercom dependencies',
            'Reviewing partner / advertising scripts and verifying account ownership',
            'Preserving essential RevOps attribution logic; removing obsolete and legacy implementations',
          ],
        },
      ],
    },
  ],
  results: {
    label: 'Results',
    heading: 'One platform, compounding.',
    intro: 'After the PLG launch, the activation redesign, the pricing transformation and the unification work went live.',
    items: [
      {
        value: '100%',
        title: 'Doubled new account creation',
        body:
          'The PLG launch and redesigned acquisition journey doubled new account creation, establishing self-serve as a primary growth channel alongside direct sales.',
      },
      {
        value: '10%+',
        title: 'Improved critical activation',
        body:
          'Progressive onboarding increased tracker installation by more than 10% — improving the most important prerequisite for users to experience Leadfeeder’s core value.',
      },
      {
        value: 'Full',
        title: 'Self-serve across all plans',
        body:
          'For the first time, customers could evaluate, select, purchase and expand across the full plan structure through product-native flows — reducing dependency on Sales and Customer Success for standard commercial actions.',
      },
      {
        value: '2→1',
        title: 'One strategy across two platforms',
        body:
          'I brought Leadfeeder and Dealfront under a shared direction for acquisition, activation, monetization, UX, brand and measurement — the foundation for a cohesive customer experience and a scalable European GTM motion.',
      },
    ],
  },
  keyLearnings: {
    label: 'Key learnings',
    heading: 'What the transformation taught.',
    items: [
      {
        title: 'PLG is an operating model, not a signup form.',
        body: 'Sustainable self-serve requires alignment across onboarding, entitlements, pricing, billing, data, product and sales.',
      },
      {
        title: 'Activation begins with motivation, not instructions.',
        body: 'Users complete a technical setup when the product first demonstrates why the effort is worthwhile.',
      },
      {
        title: 'Pricing belongs inside the product.',
        body: 'Packaging, gates, upgrades and usage signals must form one coherent experience, not a separate commercial layer.',
      },
      {
        title: 'Post-merger unification requires selective consolidation.',
        body: 'Combining everything preserves complexity. Choose a future-state architecture and migrate only what still creates value.',
      },
      {
        title: 'Measurement is part of the customer experience.',
        body: 'Reliable attribution and event data are prerequisites for experimentation, monetization and confident decisions.',
      },
      {
        title: 'Roadmaps should follow outcomes, not legacy boundaries.',
        body: 'Web Visitors, Lists, Campaigns, onboarding and pricing get more powerful when designed as one connected journey.',
      },
    ],
  },
  role: {
    label: 'My role',
    heading: 'Growth and product experience, end-to-end.',
    body:
      'I led growth and product experience across PLG, onboarding, activation, pricing, monetization, UX strategy, product discovery and unified GTM — turning a fragmented post-merger product into a unified self-serve growth platform.',
    items: [
      'Growth & PLG strategy',
      'Acquisition & account-creation funnels',
      'AI-powered progressive onboarding',
      'Activation & tracker-installation optimization',
      'Pricing & packaging transformation',
      'Self-serve purchasing & expansion',
      'Monetization & churn-prevention strategy',
      'Product UX & information architecture',
      'In-product brand rollout',
      'Campaign & audience-activation strategy',
      'GTM migration, analytics, attribution & consent',
      'Cross-functional alignment across Product, Engineering, Marketing, Sales, Data & Leadership',
    ],
  },
  quote: {
    text:
      'I helped turn a fragmented post-merger product into a unified self-serve growth platform — doubling new account creation, improving critical activation by more than 10%, and creating one product and GTM strategy across Leadfeeder and Dealfront.',
    author: 'Erik Werner',
    role: 'Director of Growth & Product Experience, Dealfront',
  },
  cta: {
    heading: 'Building a self-serve growth engine?',
    body: 'If you’re taking a product product-led — onboarding, activation, pricing and expansion — let’s talk about the operating model behind it.',
    button: 'Book a call →',
  },
}

const leadfeederSv: CaseStudy = {
  slug: 'leadfeeder-dealfront',
  accent: 'salmon',
  kicker: 'Case study',
  client: 'Leadfeeder / Dealfront',
  title: 'Från splittrad post-merger-SaaS till en enhetlig, self-serve growth-plattform.',
  intro:
    'Fördubblade antalet nya konton och förbättrade den mest kritiska aktiveringen med över 10% — med en gemensam produkt- och go-to-market-strategi över Leadfeeder och Dealfront.',
  meta: [
    { label: 'Roll', value: 'Director of Growth & Product Experience' },
    { label: 'Period', value: 'Sep 2025 – Jun 2026' },
    { label: 'Omfattning', value: 'PLG · onboarding · pricing · UX · GTM' },
    { label: 'Kontext', value: 'Post-merger — Leadfeeder × Echobot → Dealfront' },
  ],
  metrics: [
    { value: '100%', label: 'ökning av nya konton', note: 'Self-serve lanserat som en primär tillväxtkanal' },
    { value: '10%+', label: 'förbättrad tracker-installation', note: 'Den mest kritiska aktiveringen i Leadfeeder' },
    { value: 'Full', label: 'self-serve över alla planer', note: 'Utvärdera, köpa och expandera utan säljinblandning' },
  ],
  overview: {
    heading: 'Två plattformar, ett tillväxtsystem.',
    body: [
      'Leadfeeder är en B2B SaaS-plattform som identifierar företagen som besöker en webbplats och gör anonym trafik till användbar säljinsikt. Den är en del av Dealfront — skapat genom den PE-backade sammanslagningen av Leadfeeder och Echobot, två kompletterande produkter som betjänar tusentals B2B-kunder i Europa.',
      'När jag klev in navigerade bolaget en avgörande post-merger-övergång: två varumärken, två plattformar, två prismodeller, splittrade produktupplevelser och en go-to-market-motor som ännu inte konsoliderats fullt ut. Mitt uppdrag var att leda growth-strategin och produktupplevelsen genom hela tratten — från förvärv och första användning till aktivering, monetisering och expansion.',
      'Jag ledde skiftet mot product-led growth, lanserade self-serve-köp över alla planer, gjorde om onboardingen, transformerade pricing och paketering, och satte roadmapen för en mer enhetlig produktupplevelse. Resultatet: 100% ökning av nya konton och en förbättring på över 10% av tracker-installationen — den viktigaste aktiveringen i Leadfeeder-resan.',
    ],
  },
  startingPoint: {
    label: 'Utgångsläget',
    heading: 'En stark produkt i en splittrad organisation.',
    lead:
      'Leadfeeders kärnvärde var tydligt — visa vilka företag som besöker en webbplats och hjälpa team att agera på den intentionen. Utmaningen var att göra det värdet tillgängligt och skalbart i en nyss sammanslagen organisation, där resan fortfarande speglade två separata produkter och kommersiella modeller.',
    points: [
      'Varumärke och marknadspositionering',
      'Förvärvstrattar',
      'Produkt-onboarding',
      'Pricing och paketering',
      'Analys och attribution',
      'Navigation och informationsarkitektur',
      'Product-led och säljassisterade motioner',
    ],
    goal:
      'Möjligheten var inte bara att förbättra enskilda vyer. Den var att skapa ett sammanhängande tillväxtsystem över produkt, marknad, sälj, data och intäkter.',
  },
  ownership: {
    label: 'Vad jag ägde',
    heading: 'Growth-strategin och hela produktupplevelsen.',
    intro:
      'Som Director of Growth & Product Experience ägde jag growth-strategin och produktupplevelsen över marknader — och översatte kommersiella mål till produktupplevelser, från att skapa ett konto och installera trackern till att upptäcka värde, välja en plan, uppgradera, expandera eller gå in i en säljassisterad resa. Arbetet låg i skärningspunkten mellan:',
    items: [
      'Produkt',
      'Utveckling',
      'Design',
      'Marknad',
      'Data & analys',
      'Sälj',
      'Customer success',
      'Revenue operations',
      'Ledning',
    ],
    outro:
      'Rollen kombinerade strategi, tvärfunktionellt ledarskap, discovery, prioritering, experimentering, implementering och mätning.',
  },
  acts: [
    {
      label: 'Akt I',
      title: 'Göra self-serve till en primär tillväxtkanal',
      subtitle: 'Lansera product-led growth över plattformen.',
      blocks: [
        {
          title: 'Mer än en köp-knapp',
          body:
            'Self-serve fanns bara i delar av resan snarare än som en komplett operativ modell. Att möjliggöra det över varje plannivå innebar att produkten behövde stödja hela den kommersiella livscykeln:',
          items: [
            'Kontoskapande, trial- och gratisanvändar-resor',
            'Planval, månads- och årsbetalning, kort- och fakturaalternativ',
            'Funktions- och volymrättigheter, samt produktgrindar',
            'Post-trial-upplevelser, uppgraderingar, tillägg och kreditförbrukning',
            'Säljöverlämningar för komplexa planer, och expansion via fler användare eller mer användning',
          ],
        },
        {
          title: 'En enda sanning för pricing',
          body:
            'Priset måste vara lika sant på webbplatsen, i produkten och i faktureringssystemet. Varje avvikelse riskerade intäktsläckage, kundförvirring, supportärenden eller åtkomst till fel funktionalitet — så förvärv, rättigheter, checkout och uppgraderingsögonblick kopplades ihop till ett system.',
        },
        {
          title: 'En primär kanal, för första gången',
          body:
            'Genom att koppla ihop förvärv, rättigheter, checkout och expansion blev self-serve för första gången en primär tillväxtkanal vid sidan av direktförsäljning — vilket bidrog till en 100-procentig ökning av nya konton.',
        },
      ],
    },
    {
      label: 'Akt II',
      title: 'Göra om aktiveringen',
      subtitle: 'För Leadfeeder beror värdet på att installera en webbplats-tracker — den mest kritiska, och mest friktionstunga, aktiveringen.',
      blocks: [
        {
          title: 'AI-driven progressiv onboarding',
          body:
            'Istället för att möta varje användare med en enda stor installationsvägg ledde jag designen av ett onboarding-flöde som anpassade sig till användarens mognad och guidade dem genom installationen steg för steg — och balanserade “gör installationen enkel” med “visa tillräckligt värde för att den ska kännas värd besväret.” Detta förbättrade tracker-installationen med över 10%.',
        },
        {
          title: 'Från overlays till ett inbyggt system',
          body:
            'Den befintliga onboardingen lutade sig tungt mot Userpilot-overlays, tooltips och checklistor — bra för snabba insatser, men oförmögna att stödja en djupt kontextuell resa. Jag utvecklade riktningen för ett produkt-native onboarding-system inbyggt i applikationen:',
          items: [
            'En dedikerad onboarding-hub och kontextuella nästa steg i Lobbyn',
            'Personabaserad vägledning och inbäddad utbildning',
            'Progress-spårning och en gamifierad checklista',
            'Kreditbelöningar för meningsfulla aktiveringsåtgärder',
          ],
        },
        {
          title: 'Smart demodata',
          body:
            'För att lösa empty-state-problemet införde jag smart demodata: istället för att be användare installera trackern innan de ser något värde kunde produkten visa en trovärdig version av utfallet och sedan guida användare mot att aktivera det med sin egen data — en aktiveringsstrategi kring onboarding, Lobbyn, installation och time-to-value, inte bara en sekvens av tooltips.',
        },
      ],
    },
    {
      label: 'Akt III',
      title: 'Transformera pricing och monetisering',
      subtitle: 'Från en komplex modell till en som är tydlig, användningsbaserad och inbyggd i produkten.',
      blocks: [
        {
          title: 'Användningsbaserad, self-serve-först',
          body:
            'Jag ledde övergången till en användningsbaserad, self-serve-först prisstruktur byggd för att göra köpbeslutet tydligare och stödja expansion när användningen växer — och flyttade kunder från värde till köp utan onödig mänsklig inblandning, samtidigt som säljassisterade vägar behölls för komplexa affärer. Implementationen omfattade:',
          items: [
            'Produktövergripande funktionsgrindar och användnings- / kreditlogik',
            'Self-serve-checkout och post-trial-konvertering',
            'Uppgraderingsflöden, plan- och volymexpansion',
            'Product-led sales-signaler och korrekt åtkomst & rättigheter',
          ],
        },
        {
          title: 'Pricing som ett levande system',
          body:
            'Jag positionerade pricing som en löpande produktdisciplin snarare än en engångslansering, och kopplade monetisering till faktiskt produktbeteende. Roadmapen efter lansering omfattade:',
          items: [
            'Kontextuella uppgraderingsrekommendationer baserade på funktions- och volymanvändning',
            'En dedikerad in-product-prisupplevelse och förbättrad checkout',
            'Self-serve-nedgraderingsvägar och smartare avslutsflöden',
            'Churn-förebyggande insatser och beteendebaserade rabattexperiment',
            'Kontinuerlig analys av trattens avhopp och invändningar',
          ],
        },
      ],
    },
    {
      label: 'Akt IV',
      title: 'Ena produktupplevelsen',
      subtitle: 'En discovery-ledd roadmap organiserad kring kundens resa, inte bolagets tidigare produktgränser.',
      blocks: [
        {
          title: 'Web Visitors',
          body:
            'Kärnupplevelsen i Leadfeeder. Jag ledde den strategiska riktningen för en UX-översyn centrerad kring en tydlig loop — hitta en besökare med hög intention → kvalificera företaget → agera — strukturerad kring kundresearch, journey mapping och en informationsarkitektur-ritning snarare än antaganden, för att minska kognitiv belastning och korta time-to-first-value.',
        },
        {
          title: 'Lists som en exekveringshub',
          body:
            'Jag definierade riktningen för Lists som produktens prospekterings- och exekveringshub — identifiera → organisera → aktivera — en plats att organisera intention, bygga segment, samarbeta och trigga nedströms åtgärder över CRM-flöden, exporter, kampanjer och audience-aktivering.',
        },
        {
          title: 'Kampanjer & audience-aktivering',
          body:
            'Kampanjfunktionerna var splittrade — Display Ads under Promote, LinkedIn Audience Sync gömt i Integrations. Jag utvecklade strategin att konsolidera dem under en förstklassig Campaigns-yta (Display, LinkedIn Sync, framtida Adform- och The Trade Desk-audiences, skapande och mätning), med en tydlig väg från att identifiera en audience till att aktivera och mäta den.',
        },
        {
          title: 'In-product brand-utrullning',
          body:
            'Den initiala rebrandingen ändrade logotyp, typografi och färger, men den djupare produkten speglade fortfarande flera visuella system. Jag ledde översättningen av varumärket in i produkten — design tokens och theming, komponenttillstånd, navigation och namngivning, empty/loading/error-tillstånd, paywall-upplevelser, ikonografi, tillgänglighet och konsekvent produkttext — så att ett sammanhängande gränssnitt kunde minska kognitiv belastning och låta teamen bygga snabbare.',
        },
      ],
    },
    {
      label: 'Akt V',
      title: 'Ena GTM-infrastrukturen',
      subtitle: 'Bygga om mätningen på en tillförlitlig grund.',
      blocks: [
        {
          title: 'Dealfront som bas',
          body:
            'De befintliga Google Tag Manager-miljöerna bar på dubblerade trackers, legacy-skript, inkonsekventa domänreferenser och attribution-logik över webbplatser, ackumulerad över två bolag. Jag ledde migreringen på en tydlig princip: använd Dealfront som bas, bygg om Leadfeeder inom den nya strukturen, och behåll selektivt bara det som fortfarande behövdes — och undvek en blind sammanslagning som drar teknisk skuld vidare.',
        },
        {
          title: 'Städningen',
          body: 'Arbetet — kritiskt men mestadels osynligt — omfattade:',
          items: [
            'Standardisera GA4 och konverteringshändelser; granska dubblerade Leadfeeder-trackers',
            'Se över attribution-cookie-delning och cross-domain-linker-inställningar',
            'Städa CookieHub, validera Consent Mode, samordna Intercom-beroenden',
            'Granska partner- / annonsskript och verifiera kontoägarskap',
            'Bevara nödvändig RevOps-attribution; ta bort föråldrade och legacy-implementationer',
          ],
        },
      ],
    },
  ],
  results: {
    label: 'Resultat',
    heading: 'En plattform, som växer med tiden.',
    intro: 'Efter att PLG-lanseringen, aktiverings-omgörningen, pricing-transformationen och enande-arbetet gått live.',
    items: [
      {
        value: '100%',
        title: 'Fördubblade nya konton',
        body:
          'PLG-lanseringen och den omgjorda förvärvsresan fördubblade antalet nya konton och etablerade self-serve som en primär tillväxtkanal vid sidan av direktförsäljning.',
      },
      {
        value: '10%+',
        title: 'Förbättrade kritisk aktivering',
        body:
          'Progressiv onboarding ökade tracker-installationen med över 10% — och förbättrade den viktigaste förutsättningen för att användare ska uppleva Leadfeeders kärnvärde.',
      },
      {
        value: 'Full',
        title: 'Self-serve över alla planer',
        body:
          'För första gången kunde kunder utvärdera, välja, köpa och expandera över hela planstrukturen genom produkt-native flöden — vilket minskade beroendet av Sälj och Customer Success för vanliga kommersiella åtgärder.',
      },
      {
        value: '2→1',
        title: 'En strategi över två plattformar',
        body:
          'Jag förde Leadfeeder och Dealfront under en gemensam riktning för förvärv, aktivering, monetisering, UX, varumärke och mätning — grunden för en sammanhängande kundupplevelse och en skalbar europeisk GTM-motor.',
      },
    ],
  },
  keyLearnings: {
    label: 'Lärdomar',
    heading: 'Vad transformationen lärde mig.',
    items: [
      {
        title: 'PLG är en operativ modell, inte ett registreringsformulär.',
        body: 'Hållbar self-serve kräver samordning över onboarding, rättigheter, pricing, fakturering, data, produkt och sälj.',
      },
      {
        title: 'Aktivering börjar med motivation, inte instruktioner.',
        body: 'Användare slutför en teknisk installation när produkten först visar varför besväret är värt det.',
      },
      {
        title: 'Pricing hör hemma inne i produkten.',
        body: 'Paketering, grindar, uppgraderingar och användningssignaler måste bilda en sammanhängande upplevelse, inte ett separat kommersiellt lager.',
      },
      {
        title: 'Post-merger-enande kräver selektiv konsolidering.',
        body: 'Att kombinera allt bevarar komplexiteten. Välj en framtida arkitektur och migrera bara det som fortfarande skapar värde.',
      },
      {
        title: 'Mätning är en del av kundupplevelsen.',
        body: 'Tillförlitlig attribution och event-data är förutsättningar för experimentering, monetisering och trygga beslut.',
      },
      {
        title: 'Roadmaps bör följa utfall, inte legacy-gränser.',
        body: 'Web Visitors, Lists, Campaigns, onboarding och pricing blir kraftfullare när de designas som en sammankopplad resa.',
      },
    ],
  },
  role: {
    label: 'Min roll',
    heading: 'Growth och produktupplevelse, från start till mål.',
    body:
      'Jag ledde growth och produktupplevelse över PLG, onboarding, aktivering, pricing, monetisering, UX-strategi, produkt-discovery och enad GTM — och gjorde en splittrad post-merger-produkt till en enhetlig self-serve growth-plattform.',
    items: [
      'Growth- & PLG-strategi',
      'Förvärvs- & kontoskapande-trattar',
      'AI-driven progressiv onboarding',
      'Aktiverings- & tracker-installations-optimering',
      'Pricing- & paketerings-transformation',
      'Self-serve-köp & expansion',
      'Monetiserings- & churn-förebyggande strategi',
      'Produkt-UX & informationsarkitektur',
      'In-product brand-utrullning',
      'Kampanj- & audience-aktiverings-strategi',
      'GTM-migrering, analys, attribution & consent',
      'Tvärfunktionell samordning över Produkt, Utveckling, Marknad, Sälj, Data & Ledning',
    ],
  },
  quote: {
    text:
      'Jag hjälpte till att göra en splittrad post-merger-produkt till en enhetlig self-serve growth-plattform — fördubblade antalet nya konton, förbättrade kritisk aktivering med över 10%, och skapade en gemensam produkt- och GTM-strategi över Leadfeeder och Dealfront.',
    author: 'Erik Werner',
    role: 'Director of Growth & Product Experience, Dealfront',
  },
  cta: {
    heading: 'Bygger du en self-serve growth-motor?',
    body: 'Om du tar en produkt product-led — onboarding, aktivering, pricing och expansion — låt oss prata om den operativa modellen bakom.',
    button: 'Boka ett samtal →',
  },
}

// ── Happy Vegan case study ───────────────────────────────────────────────────

const happyVeganEn: CaseStudy = {
  slug: 'happy-vegan',
  accent: 'turquoise',
  kicker: 'Case study',
  client: 'Happy Vegan',
  title: 'Building Sweden’s largest vegan online store as a solo side project.',
  intro:
    'From zero to SEK 2.5 million in revenue, 500+ monthly orders and a successful exit — brand, storefront, growth and the entire physical operation, built and run by one person in two years.',
  meta: [
    { label: 'Role', value: 'Founder & solo operator' },
    { label: 'Period', value: '2022 – 2024' },
    { label: 'Scope', value: 'Brand · e-commerce · growth · operations' },
    { label: 'Outcome', value: 'Built, scaled and sold — successful exit' },
  ],
  metrics: [
    { value: '2.5M', label: 'SEK revenue in under a year', note: 'From zero, built as a solo side project' },
    { value: '500+', label: 'orders shipped per month', note: 'At peak — sourcing to fulfilment, all solo' },
    { value: '#1', label: 'vegan online store in Sweden', note: 'Reached in under two years, then a successful exit' },
  ],
  overview: {
    heading: 'One person, an entire retail company.',
    body: [
      'Happy Vegan was a vegan e-commerce store I launched in 2022 as a side project alongside my full-time work as a consultant. It started with a personal ambition: to see whether I could independently build a serious consumer brand and take it all the way from an idea to a functioning retail business.',
      'I rebuilt the store from scratch, created the brand, launched it to market, and personally managed every part of the business — from sourcing, purchasing, warehousing and fulfilment to UX, conversion optimization, paid acquisition, CRM and email marketing.',
      'In less than one year, Happy Vegan generated SEK 2.5 million in revenue. It grew to more than 500 orders per month, attracted over 20,000 organic sessions annually, and became Sweden’s largest vegan online store in under two years. I then sold the business in a successful exit.',
    ],
  },
  startingPoint: {
    label: 'The starting point',
    heading: 'The hardest kind of e-commerce, solo.',
    lead:
      'Happy Vegan was created during a difficult period for the category. The rapid growth of the vegan movement had begun to slow, demand was becoming less predictable, and running an online grocery store involved far more complexity than conventional e-commerce. Products could require:',
    points: [
      'Refrigerated storage and shipping',
      'Expiration-date management and careful stock rotation',
      'Food-handling procedures, licences and certificates',
      'Reliable packaging and fulfilment',
      'Detailed product and allergen information',
    ],
    goal:
      'I entered that environment with no team, operator or established infrastructure. The challenge wasn’t simply to build a website — it was to create the complete retail operation behind it while generating enough demand to make the business commercially viable.',
  },
  ownership: {
    label: 'What made it distinctive',
    heading: 'An entire retail company, owned end-to-end.',
    intro:
      'Happy Vegan was not just a website or a marketing assignment — it was a full retail company I created and operated independently. There was no internal team dividing the work. I was simultaneously responsible for:',
    items: [
      'Founder & business strategy',
      'Brand & creative direction',
      'E-commerce development',
      'UX & conversion optimization',
      'Performance marketing',
      'SEO & organic growth',
      'CRM & lifecycle marketing',
      'Buying & supplier relationships',
      'Inventory & warehouse operations',
      'Food compliance',
      'Fulfilment & customer service',
      'Commercial performance',
      'Preparing & completing the exit',
    ],
    outro:
      'Every part of the business — from an ad impression to a refrigerated product arriving at the customer’s door — was designed, built or managed by me.',
  },
  acts: [
    {
      label: 'Act I',
      title: 'Building the brand and store',
      subtitle: 'A focused destination for vegan customers, rebuilt from scratch.',
      blocks: [
        {
          title: 'From scratch on WordPress',
          body:
            'I rebuilt Happy Vegan completely on WordPress and created its visual identity, online experience, product structure and commercial positioning — a focused destination where vegan customers could discover and buy without searching through the non-vegan assortment of a general grocery store.',
        },
        {
          title: 'Everything under one roof',
          body: 'I independently handled the full storefront and its commercial systems:',
          items: [
            'Brand identity and visual direction',
            'Website design, development and technical operations',
            'UX and conversion-rate optimization',
            'Product catalogue, merchandising, photography and content',
            'Pricing and promotional strategy',
            'Klarna payments, Google Analytics and conversion tracking',
          ],
        },
        {
          title: 'Iterating the purchase journey',
          body:
            'The store had to support a large, constantly changing catalogue while staying easy to navigate and trustworthy for first-time customers. I continuously improved the journey using behavior, sales and conversion data — adjusting navigation, product presentation, promotions and checkout friction as the business grew.',
        },
      ],
    },
    {
      label: 'Act II',
      title: 'Building the growth engine',
      subtitle: 'Paid, owned and organic — three channels feeding one store.',
      blocks: [
        {
          title: 'Paid acquisition',
          body:
            'I built and managed the full paid-acquisition operation across Meta and Google Ads. Because I owned both the storefront and the marketing, I could connect campaign performance directly to product selection, merchandising, pricing and conversion improvements:',
          items: [
            'Campaign structure and audience targeting',
            'Creative production; product and promotional campaigns',
            'Budget management and performance analysis',
            'Continuous testing and optimization',
          ],
        },
        {
          title: 'CRM & email automation',
          body:
            'I set up the CRM and built automated email journeys in Mailchimp — an owned retention channel that reduced dependence on repeatedly paying to reach existing customers:',
          items: [
            'New-customer onboarding and abandoned-cart recovery',
            'Product and campaign launches',
            'Repeat purchasing and customer reactivation',
            'Ongoing brand communication',
          ],
        },
        {
          title: 'Organic growth',
          body:
            'Alongside paid marketing, I grew the store’s organic visibility through product content, category structure, search optimization and continued catalogue growth — reaching more than 20,000 organic sessions per year, a recurring acquisition channel beyond advertising.',
        },
      ],
    },
    {
      label: 'Act III',
      title: 'Building the physical operation',
      subtitle: 'The hardest part wasn’t the website — it was the operation behind it.',
      blocks: [
        {
          title: 'Sourcing to shipping',
          body: 'I independently set up and ran the entire physical operation:',
          items: [
            'Supplier sourcing, negotiation, purchasing and replenishment',
            'Warehouse structure and inventory management — 10,000+ items in stock',
            'Expiration-date monitoring and cold-goods handling',
            'Packaging and fulfilment — 500+ monthly shipments',
            'Food-related licences and certificates',
            'Customer service and returns',
          ],
        },
        {
          title: 'Balancing the business',
          body:
            'Running an online grocery business meant balancing product availability against cash flow, storage constraints, expiration risk and changing demand. Cold products added another layer: packaging and fulfilment had to preserve quality while staying commercially sustainable.',
        },
        {
          title: 'All of it, alongside a full-time job',
          body:
            'Throughout, I was still responsible for marketing, technology, analytics, UX, purchasing and customer experience — all while continuing my full-time consulting work. That made Happy Vegan as much an operational achievement as a digital one.',
        },
      ],
    },
  ],
  results: {
    label: 'Results',
    heading: 'Zero to market leader — and out.',
    intro: 'Built during a broader downturn in the vegan category, making the growth an uphill effort rather than the result of a rising market.',
    items: [
      {
        value: '2.5M',
        title: 'SEK 2.5 million in revenue',
        body:
          'Happy Vegan grew from zero to SEK 2.5 million in revenue in under a year — the combination of a focused brand, a large specialist assortment, paid acquisition, organic visibility, email automation and continuous conversion optimization.',
      },
      {
        value: '500+',
        title: 'More than 500 monthly orders',
        body:
          'At its peak the store processed and shipped over 500 orders per month. I personally built and managed the systems required to support that volume — from procurement and stock control to packaging and customer communication.',
      },
      {
        value: '#1',
        title: 'Sweden’s largest vegan online store',
        body:
          'In under two years, Happy Vegan grew into Sweden’s largest dedicated vegan online store — a destination combining specialist positioning with the convenience of e-commerce.',
      },
      {
        value: 'Exit',
        title: 'A successful exit',
        body:
          'Rather than simply closing it, I prepared and sold the company in a successful deal — completing the full journey: idea → brand → platform → operations → growth → market leadership → sale.',
      },
    ],
  },
  keyLearnings: {
    label: 'Key learnings',
    heading: 'What building the whole thing taught.',
    items: [
      {
        title: 'A digital business is only as strong as its operation.',
        body: 'The website could generate demand, but sourcing, inventory, fulfilment and customer experience determined whether the business could retain it.',
      },
      {
        title: 'Specialist positioning can compete with larger retailers.',
        body: 'A focused assortment and clear identity gave customers a reason to choose Happy Vegan over general grocery stores.',
      },
      {
        title: 'Owning the complete funnel creates faster learning.',
        body: 'Controlling acquisition, UX, merchandising, CRM and fulfilment let me spot problems and ship improvements without organizational delay.',
      },
      {
        title: 'Revenue and operational complexity scale together.',
        body: 'More orders meant greater demands on inventory, cold-chain handling, customer service and working capital.',
      },
      {
        title: 'Knowing when to exit is part of building well.',
        body: 'Selling the company turned two years of intense execution into a completed entrepreneurial outcome.',
      },
    ],
  },
  techStack: {
    label: 'Tech & growth stack',
    items: [
      'WordPress',
      'Klarna',
      'Mailchimp',
      'Meta Ads',
      'Google Ads',
      'Google Analytics',
      'SEO',
      'CRM automation',
      'Conversion tracking',
      'Custom ops workflows',
    ],
  },
  role: {
    label: 'Ownership',
    heading: 'Conceived, built, grown and sold — solo.',
    body:
      'Happy Vegan was conceived, rebuilt, launched, grown, operated and sold entirely by me while I worked full-time as a consultant — brand, technology, marketing, customer experience, purchasing, supplier relationships, warehouse, logistics, compliance, financial performance and the eventual sale.',
  },
  quote: {
    text:
      'I built Happy Vegan from scratch as a solo side project, grew it to SEK 2.5 million in revenue and more than 500 monthly orders, made it Sweden’s largest vegan online store, and completed a successful exit — all within two years.',
    author: 'Erik Werner',
    role: 'Founder, Happy Vegan',
  },
  cta: {
    heading: 'From idea to exit?',
    body: 'Whether it’s a brand from zero or a growth engine on top of an existing one, let’s talk about building something that compounds.',
    button: 'Book a call →',
  },
}

const happyVeganSv: CaseStudy = {
  slug: 'happy-vegan',
  accent: 'turquoise',
  kicker: 'Case study',
  client: 'Happy Vegan',
  title: 'Byggde Sveriges största veganska nätbutik som ett soloprojekt vid sidan om.',
  intro:
    'Från noll till 2,5 miljoner kronor i omsättning, 500+ ordrar i månaden och en lyckad exit — varumärke, butik, tillväxt och hela den fysiska verksamheten, byggd och driven av en enda person på två år.',
  meta: [
    { label: 'Roll', value: 'Grundare & soloperatör' },
    { label: 'Period', value: '2022 – 2024' },
    { label: 'Omfattning', value: 'Varumärke · e-handel · tillväxt · drift' },
    { label: 'Utfall', value: 'Byggd, skalad och såld — lyckad exit' },
  ],
  metrics: [
    { value: '2,5M', label: 'kr i omsättning på under ett år', note: 'Från noll, byggt som ett soloprojekt vid sidan om' },
    { value: '500+', label: 'ordrar skickade per månad', note: 'Som mest — från inköp till frakt, allt solo' },
    { value: '#1', label: 'veganska nätbutik i Sverige', note: 'Nått på under två år, sedan en lyckad exit' },
  ],
  overview: {
    heading: 'En person, ett helt detaljhandelsbolag.',
    body: [
      'Happy Vegan var en vegansk e-handel som jag lanserade 2022 som ett sidoprojekt vid sidan av mitt heltidsarbete som konsult. Det började med en personlig ambition: att se om jag på egen hand kunde bygga ett seriöst konsumentvarumärke och ta det hela vägen från idé till en fungerande detaljhandelsverksamhet.',
      'Jag byggde om butiken från grunden, skapade varumärket, lanserade det på marknaden och skötte personligen varje del av verksamheten — från inköp, lager och frakt till UX, konverteringsoptimering, betald annonsering, CRM och e-postmarknadsföring.',
      'På mindre än ett år omsatte Happy Vegan 2,5 miljoner kronor. Det växte till mer än 500 ordrar i månaden, lockade över 20 000 organiska sessioner per år och blev Sveriges största veganska nätbutik på under två år. Sedan sålde jag verksamheten i en lyckad exit.',
    ],
  },
  startingPoint: {
    label: 'Utgångsläget',
    heading: 'Den svåraste sortens e-handel, solo.',
    lead:
      'Happy Vegan skapades under en tuff period för kategorin. Den snabba tillväxten i veganrörelsen hade börjat mattas av, efterfrågan blev mindre förutsägbar, och att driva en nätbaserad livsmedelsbutik innebar långt mer komplexitet än vanlig e-handel. Produkterna kunde kräva:',
    points: [
      'Kyld lagring och frakt',
      'Hantering av utgångsdatum och noggrann lageromsättning',
      'Livsmedelshantering, licenser och certifikat',
      'Tillförlitlig förpackning och frakt',
      'Detaljerad produkt- och allergeninformation',
    ],
    goal:
      'Jag klev in i den miljön utan team, operatör eller etablerad infrastruktur. Utmaningen var inte bara att bygga en webbplats — den var att skapa hela detaljhandelsverksamheten bakom den, samtidigt som jag genererade tillräckligt med efterfrågan för att göra affären kommersiellt hållbar.',
  },
  ownership: {
    label: 'Vad som gjorde det unikt',
    heading: 'Ett helt detaljhandelsbolag, ägt från start till mål.',
    intro:
      'Happy Vegan var inte bara en webbplats eller ett marknadsföringsuppdrag — det var ett komplett detaljhandelsbolag som jag skapade och drev på egen hand. Det fanns inget internt team som delade upp arbetet. Jag var samtidigt ansvarig för:',
    items: [
      'Grundare & affärsstrategi',
      'Varumärke & kreativ riktning',
      'E-handelsutveckling',
      'UX & konverteringsoptimering',
      'Performance marketing',
      'SEO & organisk tillväxt',
      'CRM & lifecycle-marknadsföring',
      'Inköp & leverantörsrelationer',
      'Lager & lagerdrift',
      'Livsmedelsregelefterlevnad',
      'Frakt & kundservice',
      'Kommersiellt resultat',
      'Förbereda & genomföra exiten',
    ],
    outro:
      'Varje del av verksamheten — från en annonsvisning till en kyld produkt som anländer till kundens dörr — var designad, byggd eller skött av mig.',
  },
  acts: [
    {
      label: 'Akt I',
      title: 'Bygga varumärket och butiken',
      subtitle: 'En fokuserad destination för veganska kunder, ombyggd från grunden.',
      blocks: [
        {
          title: 'Från grunden på WordPress',
          body:
            'Jag byggde om Happy Vegan helt på WordPress och skapade dess visuella identitet, onlineupplevelse, produktstruktur och kommersiella positionering — en fokuserad destination där veganska kunder kunde upptäcka och köpa utan att leta genom det icke-veganska sortimentet i en vanlig livsmedelsbutik.',
        },
        {
          title: 'Allt under ett tak',
          body: 'Jag skötte på egen hand hela butiken och dess kommersiella system:',
          items: [
            'Varumärkesidentitet och visuell riktning',
            'Webbdesign, utveckling och teknisk drift',
            'UX och konverteringsoptimering',
            'Produktkatalog, merchandising, foto och innehåll',
            'Pris- och kampanjstrategi',
            'Klarna-betalningar, Google Analytics och konverteringsmätning',
          ],
        },
        {
          title: 'Iterera köpresan',
          body:
            'Butiken behövde stödja en stor, ständigt föränderlig katalog och samtidigt vara enkel att navigera och trovärdig för förstagångskunder. Jag förbättrade köpresan kontinuerligt med beteende-, försäljnings- och konverteringsdata — och justerade navigation, produktpresentation, kampanjer och checkout-friktion i takt med att verksamheten växte.',
        },
      ],
    },
    {
      label: 'Akt II',
      title: 'Bygga tillväxtmotorn',
      subtitle: 'Betalt, ägt och organiskt — tre kanaler som matade en butik.',
      blocks: [
        {
          title: 'Betald annonsering',
          body:
            'Jag byggde och skötte hela den betalda annonseringen över Meta och Google Ads. Eftersom jag ägde både butiken och marknadsföringen kunde jag koppla kampanjresultat direkt till produkturval, merchandising, pris och konverteringsförbättringar:',
          items: [
            'Kampanjstruktur och målgruppsstyrning',
            'Kreativproduktion; produkt- och kampanjannonsering',
            'Budgethantering och resultatanalys',
            'Löpande testning och optimering',
          ],
        },
        {
          title: 'CRM & e-postautomation',
          body:
            'Jag satte upp CRM:et och byggde automatiserade e-postflöden i Mailchimp — en ägd retentionskanal som minskade beroendet av att gång på gång betala för att nå befintliga kunder:',
          items: [
            'Onboarding av nya kunder och återhämtning av övergivna varukorgar',
            'Produkt- och kampanjlanseringar',
            'Återköp och kundreaktivering',
            'Löpande varumärkeskommunikation',
          ],
        },
        {
          title: 'Organisk tillväxt',
          body:
            'Vid sidan av den betalda marknadsföringen byggde jag butikens organiska synlighet genom produktinnehåll, kategoristruktur, sökoptimering och fortsatt katalogtillväxt — och nådde mer än 20 000 organiska sessioner per år, en återkommande förvärvskanal bortom annonsering.',
        },
      ],
    },
    {
      label: 'Akt III',
      title: 'Bygga den fysiska verksamheten',
      subtitle: 'Det svåraste var inte webbplatsen — det var verksamheten bakom den.',
      blocks: [
        {
          title: 'Från inköp till frakt',
          body: 'Jag satte på egen hand upp och drev hela den fysiska verksamheten:',
          items: [
            'Leverantörssökning, förhandling, inköp och påfyllnad',
            'Lagerstruktur och lagerhantering — 10 000+ artiklar i lager',
            'Bevakning av utgångsdatum och hantering av kylvaror',
            'Förpackning och frakt — 500+ försändelser per månad',
            'Livsmedelsrelaterade licenser och certifikat',
            'Kundservice och returer',
          ],
        },
        {
          title: 'Balansera affären',
          body:
            'Att driva en nätbaserad livsmedelsbutik innebar att balansera produkttillgänglighet mot kassaflöde, lagerutrymme, utgångsdatumsrisk och föränderlig efterfrågan. Kylvaror la till ytterligare ett lager: förpackning och frakt måste bevara kvaliteten och samtidigt vara kommersiellt hållbara.',
        },
        {
          title: 'Allt detta, vid sidan av ett heltidsjobb',
          body:
            'Hela tiden var jag fortfarande ansvarig för marknadsföring, teknik, analys, UX, inköp och kundupplevelse — allt medan jag fortsatte mitt heltidsarbete som konsult. Det gjorde Happy Vegan lika mycket till en operativ bedrift som en digital.',
        },
      ],
    },
  ],
  results: {
    label: 'Resultat',
    heading: 'Från noll till marknadsledare — och ut.',
    intro: 'Byggt under en bredare nedgång i vegankategorin, vilket gjorde tillväxten till en uppförsbacke snarare än resultatet av en stigande marknad.',
    items: [
      {
        value: '2,5M',
        title: '2,5 miljoner kr i omsättning',
        body:
          'Happy Vegan växte från noll till 2,5 miljoner kronor i omsättning på under ett år — kombinationen av ett fokuserat varumärke, ett stort specialistsortiment, betald annonsering, organisk synlighet, e-postautomation och löpande konverteringsoptimering.',
      },
      {
        value: '500+',
        title: 'Mer än 500 ordrar i månaden',
        body:
          'Som mest hanterade och skickade butiken över 500 ordrar i månaden. Jag byggde och skötte personligen de system som krävdes för den volymen — från inköp och lagerstyrning till förpackning och kundkommunikation.',
      },
      {
        value: '#1',
        title: 'Sveriges största veganska nätbutik',
        body:
          'På under två år växte Happy Vegan till Sveriges största renodlade veganska nätbutik — en destination som kombinerade specialistpositionering med e-handelns bekvämlighet.',
      },
      {
        value: 'Exit',
        title: 'En lyckad exit',
        body:
          'Istället för att bara lägga ner den förberedde och sålde jag bolaget i en lyckad affär — och slutförde hela resan: idé → varumärke → plattform → drift → tillväxt → marknadsledarskap → försäljning.',
      },
    ],
  },
  keyLearnings: {
    label: 'Lärdomar',
    heading: 'Vad det lärde mig att bygga allt.',
    items: [
      {
        title: 'En digital affär är bara så stark som sin verksamhet.',
        body: 'Webbplatsen kunde skapa efterfrågan, men inköp, lager, frakt och kundupplevelse avgjorde om affären kunde behålla den.',
      },
      {
        title: 'Specialistpositionering kan konkurrera med större kedjor.',
        body: 'Ett fokuserat sortiment och en tydlig identitet gav kunderna en anledning att välja Happy Vegan framför vanliga livsmedelsbutiker.',
      },
      {
        title: 'Att äga hela tratten skapar snabbare lärande.',
        body: 'Att kontrollera förvärv, UX, merchandising, CRM och frakt lät mig upptäcka problem och släppa förbättringar utan organisatorisk fördröjning.',
      },
      {
        title: 'Omsättning och operativ komplexitet skalar tillsammans.',
        body: 'Fler ordrar innebar större krav på lager, kylkedja, kundservice och rörelsekapital.',
      },
      {
        title: 'Att veta när man ska göra exit är en del av att bygga väl.',
        body: 'Att sälja bolaget förvandlade två års intensivt genomförande till ett fullbordat entreprenöriellt utfall.',
      },
    ],
  },
  techStack: {
    label: 'Teknik & tillväxt-stack',
    items: [
      'WordPress',
      'Klarna',
      'Mailchimp',
      'Meta Ads',
      'Google Ads',
      'Google Analytics',
      'SEO',
      'CRM-automation',
      'Konverteringsmätning',
      'Egna operativa flöden',
    ],
  },
  role: {
    label: 'Ägarskap',
    heading: 'Tänkt ut, byggd, växt och såld — solo.',
    body:
      'Happy Vegan tänktes ut, byggdes om, lanserades, växtes, drevs och såldes helt av mig medan jag arbetade heltid som konsult — varumärke, teknik, marknadsföring, kundupplevelse, inköp, leverantörsrelationer, lager, logistik, regelefterlevnad, ekonomiskt resultat och den slutliga försäljningen.',
  },
  quote: {
    text:
      'Jag byggde Happy Vegan från grunden som ett soloprojekt vid sidan om, växte det till 2,5 miljoner kronor i omsättning och mer än 500 ordrar i månaden, gjorde det till Sveriges största veganska nätbutik, och genomförde en lyckad exit — allt inom två år.',
    author: 'Erik Werner',
    role: 'Grundare, Happy Vegan',
  },
  cta: {
    heading: 'Från idé till exit?',
    body: 'Oavsett om det är ett varumärke från noll eller en tillväxtmotor ovanpå en befintlig affär — låt oss prata om att bygga något som växer med tiden.',
    button: 'Boka ett samtal →',
  },
}

// ── Bnbalyze case study ──────────────────────────────────────────────────────

const bnbalyzeEn: CaseStudy = {
  slug: 'bnbalyze',
  accent: 'jungle',
  kicker: 'Case study',
  client: 'Bnbalyze',
  title: 'A vibe-coding experiment that became a full proptech SaaS.',
  intro:
    'Built independently, adopted by 100+ organic users, tested with real-estate pilots — and now being rebuilt with AI at its core.',
  heroImage: { src: '/images/bnbalyze-og.png', alt: 'Bnbalyze — AI-native property investment analysis' },
  meta: [
    { label: 'Role', value: 'Founder & solo builder' },
    { label: 'Type', value: 'Proptech SaaS — property investment analysis' },
    { label: 'Scope', value: 'Product · full-stack · AI pipeline · GTM' },
    { label: 'Build', value: 'Vibe-coded (Lovable) → AI-native (Next.js + Claude)' },
  ],
  metrics: [
    { value: '100+', label: 'self-serve users, acquired organically', note: 'No paid-acquisition campaign or manual onboarding' },
    { value: 'Pilots', label: 'real-estate pros onboarded', note: 'Validated the product with the industry' },
    { value: '2.0', label: 'an AI-native rebuild underway', note: 'From a calculator to an agentic property analyst' },
  ],
  overview: {
    heading: 'A vibe-coding test that turned into a product.',
    body: [
      'Bnbalyze began as a personal experiment: I wanted to see how far I could take an idea through vibe coding with Lovable. The initial concept was a simple calculator for evaluating the short-term-rental potential of a property.',
      'It quickly grew into a full SaaS platform — user accounts, market-data integrations, comparable-property maps, interactive financial modelling, subscriptions, downloadable reports, analytics, an internal CRM and admin tooling. I conceived, designed, built and operated the entire product independently.',
      'Bnbalyze moved beyond a technical experiment. I onboarded real-estate professionals as pilot customers and attracted more than 100 self-serve users organically, without a paid-acquisition campaign. The original product was later paused — and I am now building Bnbalyze 2.0: a ground-up, AI-native rebuild combining deterministic financial calculations with visual property analysis, autonomous area research, official market statistics and regulatory risk assessment.',
    ],
  },
  startingPoint: {
    label: 'The starting point',
    heading: 'Property analysis is fragmented and slow.',
    lead:
      'Evaluating a property as an investment means stitching sources together by hand. Buyers typically need to combine:',
    points: [
      'Property listings',
      'Short-term-rental platforms',
      'Mortgage calculators',
      'Local market information',
      'Regulatory research',
      'Spreadsheets',
    ],
    goal:
      'Real-estate agents face a related problem — they may see a property’s investment potential but lack a structured, credible way to communicate it. My goal was to bring that whole process into one connected experience — and to test how far I could independently take a real product with an emerging vibe-coding workflow.',
  },
  acts: [
    {
      label: 'Act I',
      title: 'From experiment to SaaS platform',
      subtitle: 'Built independently with Lovable, React, TypeScript and Supabase.',
      blocks: [
        {
          title: 'From address to report',
          body:
            'The journey was straightforward — search an address → confirm the property → add financing → analyze the market → explore scenarios → download a report. A single search returned a full investment analysis, with assumptions kept editable through interactive maps, charts, tables and sliders, and a completed analysis downloadable as a professional PDF:',
          items: [
            'Average daily rate, occupancy and estimated rental revenue',
            'Nearby comparable short-term rentals',
            'Purchase, mortgage and operating costs',
            'Annual profit and cash-on-cash return',
            'Investment score and estimated payback period',
            'Ten-year rental-growth and property-appreciation scenarios',
          ],
        },
        {
          title: 'The platform behind the calculator',
          body:
            'What began as an interface experiment grew into a complete SaaS architecture. Supabase handled the database, auth, backend functions, caching and access controls; Google Maps and Places powered address search and comparables; Airbtics, AirDNA and Apify supplied rental-market intelligence; Stripe handled subscriptions and usage limits. On top of that I built:',
          items: [
            'A custom auth and user-management flow',
            'A normalized data layer between external APIs and the product',
            'Market-data caching to control cost and improve performance',
            'Interactive mortgage, ROI and payback calculations',
            'Custom PDF report generation',
            'An internal CRM, product analytics and GA4',
            'Slack operational notifications and admin tooling',
            'A marketing site and blog CMS',
            'Row-level security and protected backend functions',
          ],
        },
        {
          title: 'One stable internal format',
          body:
            'A particularly important decision was to translate every external API response into one stable internal format. That abstraction let me migrate the Airbtics integration from its old API setup to the public API without rebuilding the analysis interface or the report system.',
        },
      ],
    },
    {
      label: 'Act II',
      title: 'Real-world validation',
      subtitle: 'Moving from a technical experiment to something people could find, understand and use.',
      blocks: [
        {
          title: 'Real-estate pilot customers',
          body:
            'Once the platform was functional, I onboarded real-estate professionals as pilot customers — giving agents a data-driven way to communicate a property’s rental and investment potential, support conversations with investment-minded buyers, and share a report after a viewing. Their feedback showed which figures buyers cared about first, what made the analysis feel credible, how much detail an agent needed, and where the product could support the existing sales process. The agents contributed feedback and context; all product strategy, design, development and integrations remained entirely mine.',
        },
        {
          title: 'UX research with Hyper Island',
          body:
            'I also ran a collaboration with UX students from Hyper Island to challenge my assumptions through structured research — user interviews, journey mapping, usability testing, prototype evaluation and hypothesis testing. The central challenge was communicating complex financial and market information without overwhelming the user. The findings sharpened the information hierarchy, the customer journey and the relationship between high-level recommendations and detailed data — and I translated the research into product decisions and implemented them myself.',
        },
        {
          title: '100+ organic users',
          body:
            'Alongside the pilots, Bnbalyze attracted more than 100 self-serve users organically — people who discovered, understood and used the platform without a paid campaign or manual onboarding. For a project that began as a vibe-coding experiment, that organic adoption was meaningful evidence the problem and product resonated beyond my initial assumptions.',
        },
      ],
    },
    {
      label: 'Act III',
      title: 'Rebuilding with AI at its core',
      subtitle: 'Not an AI assistant bolted onto the calculator — a ground-up rebuild with AI inside the analysis pipeline itself.',
      blocks: [
        {
          title: 'The pause, and a sharper question',
          body:
            'I paused active development when other priorities took over, and the distance clarified the strongest opportunity. v1 was good at calculating an investment from market data and inputs — but it couldn’t understand a property’s actual condition, research the area itself, or judge whether short-term-rental regulation undermined the case. The central question for 2.0 became: how do you build an AI-driven property analysis reliable enough to inform an investment decision? My answer was to keep facts and judgement strictly separate. An LLM should never guess a price, calculate a mortgage or invent a return — but it’s excellent at interpreting images, researching an area, spotting contextual risks and explaining a complex case.',
        },
        {
          title: 'Structured listing ingestion',
          body:
            'A user submits an Idealista or Hemnet listing URL, and a Next.js / TypeScript pipeline runs several stages in parallel. Apify and residential proxies extract the asking price, floor area, coordinates, attributes and images directly from the listing — the portals use anti-bot protection, so reliable ingestion needed dedicated infrastructure. An LLM never reads or guesses these figures.',
        },
        {
          title: 'Visual property analysis',
          body:
            'Claude Opus inspects room-labelled photos and assesses the property’s actual condition. In testing it flagged a virtual-staging render that didn’t represent the real room and recognized a dated 1990s kitchen — producing a realistic €35,000–€65,000 renovation range instead of a generic €3,000–€9,000 estimate.',
        },
        {
          title: 'Autonomous area research',
          body:
            'A web-research agent investigates schools, transport, amenities and planned developments. On a real Seville listing it returned 22 sources, identified 11 schools by name and uncovered a €400 million urban-regeneration project — none of which the user had to research manually.',
        },
        {
          title: 'Official price statistics',
          body:
            'Spanish house-price data is retrieved deterministically from the national statistics institute (INE). Quarterly index data and year-over-year movements are computed in code, not estimated by an LLM.',
        },
        {
          title: 'A regulatory gate',
          body:
            'Short-term-rental feasibility is classified RED, AMBER or GREEN — and the regulatory result appears before the projected returns, so a legal obstacle can’t be overlooked just because the yield looks attractive.',
        },
        {
          title: 'A deterministic financial model',
          body:
            'Mortgage math, break-even and ten-year projections are implemented and unit-tested in TypeScript; the LLM never touches these numbers. It writes a grounded investment memo only after the calculations are complete, and the memo is validated against the underlying figures to prevent invented financial claims.',
        },
        {
          title: 'Engineering reliable AI workflows',
          body:
            'LLM calls don’t always return the expected structure. I designed the pipeline so one imperfect response degrades a single section rather than crashing the analysis — tolerant schema validation, isolated error handling and fallbacks at every stage. Model routing sends expensive vision work to a stronger model while research, structuring and memo generation use a cheaper one, lowering cost per analysis without compromising quality where it matters most.',
        },
        {
          title: 'Where it stands now',
          body:
            'The core 2.0 pipeline is proven end-to-end on real listings — structured ingestion, visual analysis, area research, official statistics, regulatory assessment and deterministic modelling working together, with the financial model under automated test coverage. Next:',
          items: [
            'Full support for Swedish Hemnet listings',
            'Swedish market statistics through SCB',
            'A user-selected mode for buying a home vs. evaluating an investment',
          ],
        },
      ],
    },
  ],
  results: {
    label: 'Results',
    heading: 'What the experiment proved.',
    intro: 'From a personal vibe-coding test to a product people could find, understand and use on their own.',
    items: [
      {
        value: '100+',
        title: 'Organic self-serve adoption',
        body:
          'More than 100 users discovered and tried the platform without a paid-acquisition campaign or manual onboarding — evidence the problem and product resonated beyond my initial assumptions.',
      },
      {
        value: 'Pilots',
        title: 'Validated with real-estate pros',
        body:
          'I onboarded agents as pilot customers, giving them a data-driven way to communicate a property’s rental and investment potential — and a report they could share after a viewing or meeting.',
      },
      {
        value: 'Solo',
        title: 'Idea to full SaaS, independently',
        body:
          'Product strategy, UX, architecture, frontend and backend, integrations, security, analytics and commercial development — every part owned and built by one person.',
      },
      {
        value: '2.0',
        title: 'Now an AI-native rebuild',
        body:
          'A ground-up rebuild is proven end-to-end on real listings, evolving the product from a rental calculator into an agentic property analyst that separates verified facts from machine judgement.',
      },
    ],
  },
  techStack: {
    label: 'Tech stack',
    items: [
      'Lovable',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Supabase',
      'Next.js',
      'Claude',
      'Apify + residential proxies',
      'Google Maps & Places',
      'Airbtics / AirDNA',
      'Stripe',
      'INE market data',
      'GA4',
      'Slack',
      'Automated testing',
    ],
  },
  role: {
    label: 'Ownership',
    heading: 'Conceived, built and validated — solo.',
    body:
      'Bnbalyze was conceived, designed, built, integrated, operated and validated entirely by me:',
    items: [
      'Product strategy',
      'Vibe-coding workflow',
      'UX',
      'Architecture',
      'Frontend & backend development',
      'Financial modelling',
      'Integrations',
      'Security',
      'Analytics',
      'Pilot recruitment',
      'External research coordination',
      'Commercial development',
    ],
  },
  quote: {
    text:
      'What started as a vibe-coding experiment became a complete proptech SaaS with real-estate pilots and more than 100 organic users — and is now evolving into an AI-native property analyst built around a clear separation between verified facts and machine-generated judgement.',
    author: 'Erik Werner',
    role: 'Founder, Bnbalyze',
  },
  cta: {
    heading: 'Have an idea worth testing?',
    body: 'From a vibe-coded prototype to an AI-native product, let’s talk about building something real — fast, and without blurring facts and judgement.',
    button: 'Book a call →',
  },
}

const bnbalyzeSv: CaseStudy = {
  slug: 'bnbalyze',
  accent: 'jungle',
  kicker: 'Case study',
  client: 'Bnbalyze',
  title: 'Ett vibe-coding-experiment som blev en komplett proptech-SaaS.',
  intro:
    'Byggd på egen hand, använd av 100+ organiska användare, testad med fastighetsmäklarpiloter — och nu ombyggd med AI i kärnan.',
  heroImage: { src: '/images/bnbalyze-og.png', alt: 'Bnbalyze — AI-native fastighetsinvesteringsanalys' },
  meta: [
    { label: 'Roll', value: 'Grundare & solobyggare' },
    { label: 'Typ', value: 'Proptech-SaaS — fastighetsinvesteringsanalys' },
    { label: 'Omfattning', value: 'Produkt · full-stack · AI-pipeline · GTM' },
    { label: 'Byggd', value: 'Vibe-kodad (Lovable) → AI-native (Next.js + Claude)' },
  ],
  metrics: [
    { value: '100+', label: 'self-serve-användare, organiskt', note: 'Ingen betald kampanj eller manuell onboarding' },
    { value: 'Piloter', label: 'fastighetsmäklare onboardade', note: 'Validerade produkten med branschen' },
    { value: '2.0', label: 'en AI-native ombyggnad pågår', note: 'Från kalkylator till en agentisk fastighetsanalytiker' },
  ],
  overview: {
    heading: 'Ett vibe-coding-test som blev en produkt.',
    body: [
      'Bnbalyze började som ett personligt experiment: jag ville se hur långt jag kunde ta en idé genom vibe coding med Lovable. Den ursprungliga idén var en enkel kalkylator för att bedöma en fastighets potential för korttidsuthyrning.',
      'Det växte snabbt till en komplett SaaS-plattform — användarkonton, marknadsdataintegrationer, kartor med jämförbara fastigheter, interaktiv finansiell modellering, prenumerationer, nedladdningsbara rapporter, analys, ett internt CRM och admin-verktyg. Jag tänkte ut, designade, byggde och drev hela produkten på egen hand.',
      'Bnbalyze gick bortom ett tekniskt experiment. Jag onboardade fastighetsmäklare som pilotkunder och lockade mer än 100 self-serve-användare organiskt, utan en betald kampanj. Den ursprungliga produkten pausades senare — och jag bygger nu Bnbalyze 2.0: en AI-native ombyggnad från grunden som kombinerar deterministiska finansiella beräkningar med visuell fastighetsanalys, autonom områdesresearch, officiell marknadsstatistik och bedömning av regulatorisk risk.',
    ],
  },
  startingPoint: {
    label: 'Utgångsläget',
    heading: 'Fastighetsanalys är splittrad och långsam.',
    lead:
      'Att bedöma en fastighet som investering innebär att sy ihop källor för hand. Köpare behöver oftast kombinera:',
    points: [
      'Fastighetsannonser',
      'Korttidsuthyrningsplattformar',
      'Bolånekalkylatorer',
      'Lokal marknadsinformation',
      'Regulatorisk research',
      'Kalkylark',
    ],
    goal:
      'Fastighetsmäklare har ett besläktat problem — de kan se en fastighets investeringspotential men saknar ett strukturerat, trovärdigt sätt att kommunicera den. Mitt mål var att föra in hela den processen i en sammankopplad upplevelse — och att testa hur långt jag på egen hand kunde ta en riktig produkt med ett framväxande vibe-coding-arbetsflöde.',
  },
  acts: [
    {
      label: 'Akt I',
      title: 'Från experiment till SaaS-plattform',
      subtitle: 'Byggd på egen hand med Lovable, React, TypeScript och Supabase.',
      blocks: [
        {
          title: 'Från adress till rapport',
          body:
            'Resan var enkel — sök en adress → bekräfta fastigheten → lägg till finansiering → analysera marknaden → utforska scenarier → ladda ner en rapport. En enda sökning gav en fullständig investeringsanalys, med antaganden som gick att redigera via interaktiva kartor, diagram, tabeller och reglage, och en färdig analys kunde laddas ner som en professionell PDF:',
          items: [
            'Genomsnittligt dygnspris, beläggning och uppskattad hyresintäkt',
            'Närliggande jämförbara korttidsuthyrningar',
            'Köp-, bolåne- och driftskostnader',
            'Årlig vinst och cash-on-cash-avkastning',
            'Investeringsbetyg och uppskattad återbetalningstid',
            'Tioåriga scenarier för hyrestillväxt och värdeökning',
          ],
        },
        {
          title: 'Plattformen bakom kalkylatorn',
          body:
            'Det som började som ett gränssnittsexperiment växte till en komplett SaaS-arkitektur. Supabase skötte databas, autentisering, backend-funktioner, caching och åtkomstkontroll; Google Maps och Places drev adressökning och jämförelseobjekt; Airbtics, AirDNA och Apify levererade marknadsdata; Stripe skötte prenumerationer och användningsgränser. Ovanpå det byggde jag:',
          items: [
            'Ett eget flöde för autentisering och användarhantering',
            'Ett normaliserat datalager mellan externa API:er och produkten',
            'Caching av marknadsdata för att styra kostnad och prestanda',
            'Interaktiva bolåne-, ROI- och återbetalningsberäkningar',
            'Egen PDF-rapportgenerering',
            'Ett internt CRM, produktanalys och GA4',
            'Slack-driftsnotiser och admin-verktyg',
            'En marknadssajt och ett blogg-CMS',
            'Row-level-säkerhet och skyddade backend-funktioner',
          ],
        },
        {
          title: 'Ett stabilt internt format',
          body:
            'Ett särskilt viktigt beslut var att översätta varje externt API-svar till ett stabilt internt format. Den abstraktionen lät mig migrera Airbtics-integrationen från dess gamla API-upplägg till det publika API:et utan att bygga om analysgränssnittet eller rapportsystemet.',
        },
      ],
    },
    {
      label: 'Akt II',
      title: 'Validering i verkligheten',
      subtitle: 'Från ett tekniskt experiment till något människor kunde hitta, förstå och använda.',
      blocks: [
        {
          title: 'Pilotkunder från fastighetsbranschen',
          body:
            'När plattformen fungerade onboardade jag fastighetsmäklare som pilotkunder — och gav mäklare ett datadrivet sätt att kommunicera en fastighets uthyrnings- och investeringspotential, stödja samtal med investeringsinriktade köpare, och dela en rapport efter en visning. Deras feedback visade vilka siffror köpare brydde sig om först, vad som fick analysen att kännas trovärdig, hur mycket detalj en mäklare behövde, och var produkten kunde stödja den befintliga säljprocessen. Mäklarna bidrog med feedback och kontext; all produktstrategi, design, utveckling och integration förblev helt mitt ansvar.',
        },
        {
          title: 'UX-research med Hyper Island',
          body:
            'Jag drev också ett samarbete med UX-studenter från Hyper Island för att utmana mina antaganden genom strukturerad research — användarintervjuer, journey mapping, användbarhetstester, prototyputvärdering och hypotestestning. Den centrala utmaningen var att kommunicera komplex finansiell och marknadsinformation utan att överväldiga användaren. Insikterna skärpte informationshierarkin, kundresan och relationen mellan övergripande rekommendationer och detaljerad data — och jag översatte researchen till produktbeslut och implementerade dem själv.',
        },
        {
          title: '100+ organiska användare',
          body:
            'Vid sidan av piloterna lockade Bnbalyze mer än 100 self-serve-användare organiskt — människor som hittade, förstod och använde plattformen utan en betald kampanj eller manuell onboarding. För ett projekt som började som ett vibe-coding-experiment var det organiska upptaget ett meningsfullt bevis på att problemet och produkten gav genklang bortom mina första antaganden.',
        },
      ],
    },
    {
      label: 'Akt III',
      title: 'Bygga om med AI i kärnan',
      subtitle: 'Ingen AI-assistent påklistrad på kalkylatorn — en ombyggnad från grunden med AI inuti själva analys-pipelinen.',
      blocks: [
        {
          title: 'Pausen, och en skarpare fråga',
          body:
            'Jag pausade den aktiva utvecklingen när andra prioriteringar tog över, och avståndet klargjorde den starkaste möjligheten. v1 var bra på att beräkna en investering utifrån marknadsdata och indata — men den kunde inte förstå fastighetens faktiska skick, researcha området själv, eller bedöma om reglering av korttidsuthyrning underminerade caset. Den centrala frågan för 2.0 blev: hur bygger man en AI-driven fastighetsanalys som är tillförlitlig nog att ligga till grund för ett investeringsbeslut? Mitt svar var att hålla fakta och omdöme strikt åtskilda. En LLM ska aldrig gissa ett pris, beräkna ett bolån eller hitta på en avkastning — men den är utmärkt på att tolka bilder, researcha ett område, upptäcka kontextuella risker och förklara ett komplext case.',
        },
        {
          title: 'Strukturerad annonsinläsning',
          body:
            'En användare skickar en Idealista- eller Hemnet-annonslänk, och en Next.js / TypeScript-pipeline kör flera steg parallellt. Apify och residential proxies extraherar utropspris, boyta, koordinater, attribut och bilder direkt från annonsen — portalerna använder anti-bot-skydd, så tillförlitlig inläsning krävde dedikerad infrastruktur. En LLM läser eller gissar aldrig dessa siffror.',
        },
        {
          title: 'Visuell fastighetsanalys',
          body:
            'Claude Opus granskar rumsmärkta foton och bedömer fastighetens faktiska skick. I tester flaggade den en virtual-staging-rendering som inte motsvarade det verkliga rummet och kände igen ett daterat 1990-talskök — och gav ett realistiskt renoveringsintervall på 35 000–65 000 € istället för en generisk uppskattning på 3 000–9 000 €.',
        },
        {
          title: 'Autonom områdesresearch',
          body:
            'En web-research-agent undersöker skolor, kollektivtrafik, service och planerade utvecklingsprojekt. På en verklig annons i Sevilla returnerade den 22 källor, identifierade 11 skolor vid namn och hittade ett stadsförnyelseprojekt på 400 miljoner € — utan att användaren behövde researcha något av det manuellt.',
        },
        {
          title: 'Officiell prisstatistik',
          body:
            'Spansk bostadsprisdata hämtas deterministiskt från det nationella statistikinstitutet (INE). Kvartalsvis indexdata och årsförändringar beräknas i kod, inte uppskattas av en LLM.',
        },
        {
          title: 'En regulatorisk grind',
          body:
            'Möjligheten till korttidsuthyrning klassas som RÖD, GUL eller GRÖN — och det regulatoriska resultatet visas före den projicerade avkastningen, så att ett juridiskt hinder inte kan förbises bara för att avkastningen ser attraktiv ut.',
        },
        {
          title: 'En deterministisk finansiell modell',
          body:
            'Bolånematematik, break-even och tioårsprognoser är implementerade och enhetstestade i TypeScript; LLM:en rör aldrig dessa siffror. Den skriver ett förankrat investerings-memo först när beräkningarna är klara, och memot valideras mot de underliggande siffrorna för att förhindra påhittade finansiella påståenden.',
        },
        {
          title: 'Att bygga tillförlitliga AI-flöden',
          body:
            'LLM-anrop returnerar inte alltid den förväntade strukturen. Jag designade pipelinen så att ett bristfälligt svar försämrar en enskild sektion snarare än kraschar hela analysen — tolerant schemavalidering, isolerad felhantering och fallbacks i varje steg. Modellrouting skickar dyra vision-uppgifter till en starkare modell medan research, strukturering och memo-generering använder en billigare, vilket sänker kostnaden per analys utan att kompromissa med kvaliteten där den betyder mest.',
        },
        {
          title: 'Var det står nu',
          body:
            'Kärnan i 2.0-pipelinen är bevisad från start till mål på verkliga annonser — strukturerad inläsning, visuell analys, områdesresearch, officiell statistik, regulatorisk bedömning och deterministisk modellering fungerar tillsammans, med den finansiella modellen under automatiserad testtäckning. Härnäst:',
          items: [
            'Fullt stöd för svenska Hemnet-annonser',
            'Svensk marknadsstatistik via SCB',
            'Ett användarvalt läge för att köpa bostad kontra att utvärdera en investering',
          ],
        },
      ],
    },
  ],
  results: {
    label: 'Resultat',
    heading: 'Vad experimentet bevisade.',
    intro: 'Från ett personligt vibe-coding-test till en produkt människor kunde hitta, förstå och använda på egen hand.',
    items: [
      {
        value: '100+',
        title: 'Organiskt self-serve-upptag',
        body:
          'Mer än 100 användare hittade och testade plattformen utan en betald kampanj eller manuell onboarding — ett bevis på att problemet och produkten gav genklang bortom mina första antaganden.',
      },
      {
        value: 'Piloter',
        title: 'Validerad med fastighetsmäklare',
        body:
          'Jag onboardade mäklare som pilotkunder och gav dem ett datadrivet sätt att kommunicera en fastighets uthyrnings- och investeringspotential — och en rapport att dela efter en visning eller ett möte.',
      },
      {
        value: 'Solo',
        title: 'Idé till komplett SaaS, på egen hand',
        body:
          'Produktstrategi, UX, arkitektur, frontend och backend, integrationer, säkerhet, analys och kommersiell utveckling — varje del ägd och byggd av en enda person.',
      },
      {
        value: '2.0',
        title: 'Nu en AI-native ombyggnad',
        body:
          'En ombyggnad från grunden är bevisad från start till mål på verkliga annonser, och utvecklar produkten från en hyreskalkylator till en agentisk fastighetsanalytiker som skiljer verifierade fakta från maskinellt omdöme.',
      },
    ],
  },
  techStack: {
    label: 'Teknik-stack',
    items: [
      'Lovable',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Supabase',
      'Next.js',
      'Claude',
      'Apify + residential proxies',
      'Google Maps & Places',
      'Airbtics / AirDNA',
      'Stripe',
      'INE-marknadsdata',
      'GA4',
      'Slack',
      'Automatiserad testning',
    ],
  },
  role: {
    label: 'Ägarskap',
    heading: 'Tänkt ut, byggd och validerad — solo.',
    body:
      'Bnbalyze tänktes ut, designades, byggdes, integrerades, drevs och validerades helt av mig:',
    items: [
      'Produktstrategi',
      'Vibe-coding-arbetsflöde',
      'UX',
      'Arkitektur',
      'Frontend- & backend-utveckling',
      'Finansiell modellering',
      'Integrationer',
      'Säkerhet',
      'Analys',
      'Pilotrekrytering',
      'Samordning av extern research',
      'Kommersiell utveckling',
    ],
  },
  quote: {
    text:
      'Det som började som ett vibe-coding-experiment blev en komplett proptech-SaaS med fastighetsmäklarpiloter och mer än 100 organiska användare — och utvecklas nu till en AI-native fastighetsanalytiker byggd kring en tydlig åtskillnad mellan verifierade fakta och maskingenererat omdöme.',
    author: 'Erik Werner',
    role: 'Grundare, Bnbalyze',
  },
  cta: {
    heading: 'Har du en idé värd att testa?',
    body: 'Från en vibe-kodad prototyp till en AI-native produkt — låt oss prata om att bygga något på riktigt, snabbt, och utan att sudda ut gränsen mellan fakta och omdöme.',
    button: 'Boka ett samtal →',
  },
}

// ── Funnel.io case study ─────────────────────────────────────────────────────

const funnelEn: CaseStudy = {
  slug: 'funnel',
  accent: 'turquoise',
  kicker: 'Case study',
  client: 'Funnel.io',
  title: 'Building a new product-led growth engine for a sales-led B2B SaaS.',
  intro:
    'Taking self-serve from zero to 20% of total MRR while improving acquisition across every major channel — website, SEO, paid, experimentation and pricing, run as one connected system.',
  meta: [
    { label: 'Role', value: 'Growth Product Lead, Acquisition (ex PM)' },
    { label: 'Period', value: 'May 2022 – Jun 2025' },
    { label: 'Scope', value: 'PLG · website · SEO · CRO · experimentation' },
    { label: 'Type', value: 'B2B SaaS — marketing data platform' },
  ],
  metrics: [
    { value: '0 → 20%', label: 'of total MRR via PLG', note: 'A self-serve channel built from scratch in under two years' },
    { value: '50%', label: 'growth in organic traffic', note: 'From a brand, website and SEO overhaul' },
    { value: '−30%', label: 'lower CAC, year over year', note: 'Stronger organic, conversion and self-serve combined' },
  ],
  overview: {
    heading: 'From sales-led to a compounding growth system.',
    body: [
      'Funnel.io is a B2B SaaS data platform that helps marketing teams collect, connect and visualise their performance data. I joined in 2022 as an embedded growth consultant. Funnel had strong product-market fit and a growing sales-led business — but no self-serve revenue channel, an underperforming website and no systematic approach to experimentation.',
      'The brief was deliberately open-ended: own growth. In practice that meant building the infrastructure, commercial motion and experimentation culture needed to make acquisition and monetisation more efficient over time.',
      'Over three years my role evolved from embedded consultant and Product Manager to Growth Product Lead for Acquisition. I owned the complete acquisition surface and led the creation of a PLG motion that grew from zero to 20% of total MRR in under two years.',
    ],
  },
  startingPoint: {
    label: 'The starting point',
    heading: 'A strong product, an immature growth engine.',
    lead:
      'Funnel had a strong product and an established sales-led motion, but its growth infrastructure hadn’t matured to the same level. The main challenges:',
    points: [
      'No product-led or self-serve purchasing channel',
      'A website that didn’t convert efficiently',
      'Ad-hoc experimentation without consistent hypotheses or measurement',
      'Limited connection between acquisition data and product decisions',
      'High customer-acquisition costs and untapped organic search potential',
      'Growth initiatives distributed across functions without one owner',
    ],
    goal:
      'The opportunity was to treat acquisition as a connected product system rather than a collection of independent marketing channels — connecting positioning, website, paid, SEO, experimentation, onboarding, activation, attribution and revenue.',
  },
  ownership: {
    label: 'What I owned',
    heading: 'The acquisition surface, end-to-end.',
    intro:
      'I owned Funnel’s acquisition experience end-to-end, and acted as Product Manager for funnel.io — leading developers and designers to ship website experiences, growth infrastructure and customer-facing improvements. My remit spanned:',
    items: [
      'The marketing website as a product',
      'Product-led growth',
      'Free trials & self-serve onboarding',
      'Activation strategy & measurement',
      'Pricing & monetisation',
      'SEO & organic acquisition',
      'Performance marketing',
      'Conversion-rate optimisation',
      'Experimentation strategy',
      'RevOps & attribution',
      'Growth analytics & infrastructure',
    ],
    outro:
      'The work combined commercial strategy with hands-on product leadership — defining problems, writing briefs, prioritising opportunities, running sprints, aligning stakeholders and measuring outcomes.',
  },
  acts: [
    {
      label: 'Act I',
      title: 'Building an experimentation engine',
      subtitle: 'Turning ad-hoc tests into a repeatable growth capability.',
      blocks: [
        {
          title: 'From ad hoc to a system',
          body:
            'When I joined, experimentation was largely ad hoc — individual tests could launch, but there was no shared structure for defining hypotheses, choosing opportunities, prioritising work or evaluating results, which made it hard to build institutional knowledge. I created a systematic framework that standardised:',
          items: [
            'Problem definition and hypothesis design',
            'Opportunity prioritisation and experiment briefs',
            'Success metrics and test analysis',
            'Documentation, knowledge sharing and how learnings informed future decisions',
          ],
        },
        {
          title: '70% more experiments, 2× the velocity',
          body:
            'Within a year Funnel was running 70% more experiments at twice the previous velocity. More importantly, the insights fed back into the website, product, positioning, pricing and acquisition strategy — experimentation became part of how the organisation made decisions rather than an occasional optimisation exercise.',
        },
      ],
    },
    {
      label: 'Act II',
      title: 'Rebuilding the acquisition experience',
      subtitle: 'A fundamental rethink of brand, pricing and website — treated as a product, not a redesign.',
      blocks: [
        {
          title: 'Not a cosmetic redesign',
          body:
            'A complete overhaul of Funnel’s brand, pricing and website — rethinking how Funnel positioned itself, which audiences it addressed, how product value and pricing were communicated, how users moved from discovery to conversion, and how the site supported both sales-led and self-serve journeys.',
        },
        {
          title: 'The website as a product',
          body:
            'I treated the website as a continuously evolving product, combining qualitative insight, behavioural data, SEO opportunities, conversion analysis and experimentation to improve the whole acquisition journey. The work covered:',
          items: [
            'Brand and positioning rollout',
            'Information architecture and product / value communication',
            'Pricing experience and conversion paths',
            'Search visibility and landing-page performance',
            'Analytics, attribution and lead-generation journeys',
            'Continuous CRO',
          ],
        },
        {
          title: 'Measurable across the funnel',
          body:
            'The overhaul produced 50% growth in organic traffic, a 20% increase in marketing-qualified leads and more than a 30% reduction in CAC year over year — not just a stronger website, but a more efficient acquisition system that improved both organic and paid channels.',
        },
      ],
    },
    {
      label: 'Act III',
      title: 'Creating the PLG motion',
      subtitle: 'A self-serve route to revenue, built from the ground up.',
      blocks: [
        {
          title: 'From no self-serve to a new channel',
          body:
            'When I joined, Funnel had no self-serve channel — prospects moved through a predominantly sales-led process, limiting the company’s ability to serve users who wanted to evaluate and adopt independently. I built the PLG motion from the ground up:',
          items: [
            'Free-trial infrastructure and self-serve acquisition journeys',
            'Product onboarding, activation metrics and trial-behaviour measurement',
            'Conversion paths and commercial packaging',
            'Product and sales handoffs',
            'The operating model required to scale the channel',
          ],
        },
        {
          title: 'Defining meaningful activation',
          body:
            'A central part was defining meaningful activation — which behaviours showed a user had understood the product, experienced its value and was likely to convert. Those signals informed onboarding, experimentation, prioritisation and the relationship between product-led and sales-assisted growth.',
        },
        {
          title: 'Zero to 20% of total MRR',
          body:
            'This wasn’t simply a new signup flow — it connected the website, product experience, commercial model, data and internal teams around one new route to revenue. Within two years the PLG motion grew from zero to 20% of Funnel’s total MRR, a meaningful new channel alongside the existing sales-led business.',
        },
      ],
    },
  ],
  results: {
    label: 'Results',
    heading: 'A compounding acquisition system.',
    intro: 'Across acquisition, conversion and a brand-new self-serve channel.',
    items: [
      {
        value: '0 → 20%',
        title: 'PLG from zero to 20% of MRR',
        body:
          'I created Funnel’s self-serve growth motion from scratch. Within two years it generated 20% of total monthly recurring revenue — a significant new commercial channel that hadn’t existed when I joined.',
      },
      {
        value: '50%',
        title: '50% organic traffic growth',
        body:
          'The brand and website overhaul, combined with a more structured SEO approach, increased organic traffic by 50%.',
      },
      {
        value: '20%',
        title: '20% more marketing-qualified leads',
        body:
          'Improved positioning, conversion journeys and acquisition performance increased MQL volume by 20%.',
      },
      {
        value: '−30%',
        title: 'More than 30% lower CAC',
        body:
          'Stronger organic acquisition, better conversion, systematic optimisation and a new self-serve motion reduced customer-acquisition cost by more than 30% year over year.',
      },
    ],
  },
  keyLearnings: {
    label: 'Key learnings',
    heading: 'What the engagement taught.',
    items: [
      {
        title: 'PLG requires more than opening the product.',
        body: 'A successful self-serve motion depends on acquisition, onboarding, activation, pricing, measurement and revenue operations working as one system.',
      },
      {
        title: 'The website should be managed like a product.',
        body: 'Continuous discovery, prioritisation, experimentation and iteration create more value than occasional redesigns.',
      },
      {
        title: 'Experiment velocity matters, but learning quality matters more.',
        body: 'A strong framework makes individual tests cumulative by feeding their insights into future decisions.',
      },
      {
        title: 'Sales-led and product-led growth can reinforce each other.',
        body: 'Self-serve created a new revenue channel without requiring Funnel to abandon its established sales motion.',
      },
      {
        title: 'Growth ownership needs to cross organisational boundaries.',
        body: 'The largest gains came from connecting product, marketing, data, design, engineering and revenue rather than optimising each function independently.',
      },
    ],
  },
  role: {
    label: 'My role',
    heading: 'Growth product leadership across the whole acquisition surface.',
    body:
      'I operated as the de facto Product Manager for Funnel’s growth surface, working directly with developers and designers to move initiatives from opportunity to shipped experience — and managing website, acquisition, onboarding and monetisation as parts of one customer journey rather than disconnected functions:',
    items: [
      'Building the PLG motion from concept to 20% of total MRR',
      'Managing the website as a product',
      'Leading the brand, pricing and website overhaul',
      'Establishing Funnel’s experimentation framework',
      'Owning SEO, CRO and performance marketing',
      'Developing activation and onboarding strategy',
      'Building growth analytics, RevOps and attribution infrastructure',
      'Leading developers and designers',
      'Connecting Product, Marketing, Sales and Revenue Operations around shared outcomes',
    ],
  },
  quote: {
    text:
      'I helped turn Funnel’s acquisition model from a primarily sales-led motion into a compounding growth system — building PLG from zero to 20% of total MRR while increasing organic traffic by 50%, growing MQLs by 20%, and reducing CAC by more than 30%.',
    author: 'Erik Werner',
    role: 'Growth Product Lead — Acquisition, Funnel.io',
  },
  cta: {
    heading: 'Building a PLG motion?',
    body: 'If you’re adding self-serve alongside a sales-led business, let’s talk about the system — acquisition, activation, pricing and experimentation — that makes it compound.',
    button: 'Book a call →',
  },
}

const funnelSv: CaseStudy = {
  slug: 'funnel',
  accent: 'turquoise',
  kicker: 'Case study',
  client: 'Funnel.io',
  title: 'Byggde en ny product-led growth-motor för en säljledd B2B-SaaS.',
  intro:
    'Tog self-serve från noll till 20% av total MRR och förbättrade förvärvet över varje större kanal — webbplats, SEO, betald sök, experimentering och pricing, drivet som ett sammankopplat system.',
  meta: [
    { label: 'Roll', value: 'Growth Product Lead, Acquisition (tidigare PM)' },
    { label: 'Period', value: 'Maj 2022 – Jun 2025' },
    { label: 'Omfattning', value: 'PLG · webbplats · SEO · CRO · experimentering' },
    { label: 'Typ', value: 'B2B-SaaS — plattform för marknadsföringsdata' },
  ],
  metrics: [
    { value: '0 → 20%', label: 'av total MRR via PLG', note: 'En self-serve-kanal byggd från noll på under två år' },
    { value: '50%', label: 'tillväxt i organisk trafik', note: 'Från en omgörning av varumärke, webbplats och SEO' },
    { value: '−30%', label: 'lägre CAC, år över år', note: 'Starkare organiskt, konvertering och self-serve tillsammans' },
  ],
  overview: {
    heading: 'Från säljledd till ett tillväxtsystem som växer med tiden.',
    body: [
      'Funnel.io är en B2B-SaaS-dataplattform som hjälper marknadsteam att samla in, koppla ihop och visualisera sin performance-data. Jag klev in 2022 som en inbäddad growth-konsult. Funnel hade stark product-market fit och en växande säljledd affär — men ingen self-serve-intäktskanal, en underpresterande webbplats och inget systematiskt sätt att experimentera.',
      'Uppdraget var medvetet öppet: äg growth. I praktiken innebar det att bygga infrastrukturen, den kommersiella motorn och experimenteringskulturen som krävdes för att göra förvärv och monetisering effektivare över tid.',
      'Under tre år utvecklades min roll från inbäddad konsult och Product Manager till Growth Product Lead för Acquisition. Jag ägde hela förvärvsytan och ledde skapandet av en PLG-motor som växte från noll till 20% av total MRR på under två år.',
    ],
  },
  startingPoint: {
    label: 'Utgångsläget',
    heading: 'En stark produkt, en omogen tillväxtmotor.',
    lead:
      'Funnel hade en stark produkt och en etablerad säljledd motion, men tillväxtinfrastrukturen hade inte mognat till samma nivå. De främsta utmaningarna:',
    points: [
      'Ingen product-led eller self-serve-köpkanal',
      'En webbplats som inte konverterade effektivt',
      'Ad-hoc-experimentering utan konsekventa hypoteser eller mätning',
      'Begränsad koppling mellan förvärvsdata och produktbeslut',
      'Höga förvärvskostnader och outnyttjad potential i organisk sök',
      'Tillväxtinitiativ utspridda över funktioner utan en ägare',
    ],
    goal:
      'Möjligheten var att behandla förvärv som ett sammankopplat produktsystem snarare än en samling oberoende marknadskanaler — och koppla ihop positionering, webbplats, betald sök, SEO, experimentering, onboarding, aktivering, attribution och intäkter.',
  },
  ownership: {
    label: 'Vad jag ägde',
    heading: 'Förvärvsytan, från start till mål.',
    intro:
      'Jag ägde Funnels förvärvsupplevelse från start till mål, och agerade Product Manager för funnel.io — ledde utvecklare och designers för att leverera webbplatsupplevelser, tillväxtinfrastruktur och kundnära förbättringar. Mitt ansvar spände över:',
    items: [
      'Marknadswebbplatsen som en produkt',
      'Product-led growth',
      'Free trials & self-serve-onboarding',
      'Aktiveringsstrategi & mätning',
      'Pricing & monetisering',
      'SEO & organiskt förvärv',
      'Performance marketing',
      'Konverteringsoptimering',
      'Experimenteringsstrategi',
      'RevOps & attribution',
      'Tillväxtanalys & infrastruktur',
    ],
    outro:
      'Arbetet kombinerade kommersiell strategi med praktiskt produktledarskap — att definiera problem, skriva briefs, prioritera möjligheter, köra sprintar, samordna intressenter och mäta utfall.',
  },
  acts: [
    {
      label: 'Akt I',
      title: 'Bygga en experimenteringsmotor',
      subtitle: 'Göra ad-hoc-tester till en repeterbar tillväxtförmåga.',
      blocks: [
        {
          title: 'Från ad hoc till ett system',
          body:
            'När jag klev in var experimenteringen till stor del ad hoc — enskilda tester kunde lanseras, men det fanns ingen gemensam struktur för att definiera hypoteser, välja möjligheter, prioritera arbete eller utvärdera resultat, vilket gjorde det svårt att bygga institutionell kunskap. Jag skapade ett systematiskt ramverk som standardiserade:',
          items: [
            'Problemdefinition och hypotesdesign',
            'Prioritering av möjligheter och experiment-briefs',
            'Framgångsmått och testanalys',
            'Dokumentation, kunskapsdelning och hur lärdomar informerade framtida beslut',
          ],
        },
        {
          title: '70% fler experiment, 2× hastigheten',
          body:
            'Inom ett år körde Funnel 70% fler experiment i dubbla den tidigare hastigheten. Ännu viktigare: insikterna matades tillbaka in i webbplatsen, produkten, positioneringen, pricingen och förvärvsstrategin — experimentering blev en del av hur organisationen fattade beslut snarare än en enstaka optimeringsövning.',
        },
      ],
    },
    {
      label: 'Akt II',
      title: 'Bygga om förvärvsupplevelsen',
      subtitle: 'Ett grundläggande omtänk av varumärke, pricing och webbplats — behandlat som en produkt, inte en redesign.',
      blocks: [
        {
          title: 'Ingen kosmetisk redesign',
          body:
            'En komplett omgörning av Funnels varumärke, pricing och webbplats — ett omtänk av hur Funnel positionerade sig, vilka målgrupper det adresserade, hur produktvärde och pris kommunicerades, hur användare rörde sig från upptäckt till konvertering, och hur sajten stödde både säljledda och self-serve-resor.',
        },
        {
          title: 'Webbplatsen som en produkt',
          body:
            'Jag behandlade webbplatsen som en produkt i ständig utveckling, och kombinerade kvalitativa insikter, beteendedata, SEO-möjligheter, konverteringsanalys och experimentering för att förbättra hela förvärvsresan. Arbetet omfattade:',
          items: [
            'Utrullning av varumärke och positionering',
            'Informationsarkitektur och produkt- / värdekommunikation',
            'Prisupplevelse och konverteringsvägar',
            'Söksynlighet och landningssidors prestanda',
            'Analys, attribution och leadgenereringsresor',
            'Löpande CRO',
          ],
        },
        {
          title: 'Mätbart genom hela tratten',
          body:
            'Omgörningen gav 50% tillväxt i organisk trafik, en 20-procentig ökning av marketing-qualified leads och mer än 30% lägre CAC år över år — inte bara en starkare webbplats, utan ett effektivare förvärvssystem som förbättrade både organiska och betalda kanaler.',
        },
      ],
    },
    {
      label: 'Akt III',
      title: 'Skapa PLG-motorn',
      subtitle: 'En self-serve-väg till intäkter, byggd från grunden.',
      blocks: [
        {
          title: 'Från ingen self-serve till en ny kanal',
          body:
            'När jag klev in hade Funnel ingen self-serve-kanal — prospekt rörde sig genom en övervägande säljledd process, vilket begränsade förmågan att betjäna användare som ville utvärdera och adoptera på egen hand. Jag byggde PLG-motorn från grunden:',
          items: [
            'Free-trial-infrastruktur och self-serve-förvärvsresor',
            'Produkt-onboarding, aktiveringsmått och mätning av trial-beteende',
            'Konverteringsvägar och kommersiell paketering',
            'Produkt- och säljöverlämningar',
            'Den operativa modellen som krävdes för att skala kanalen',
          ],
        },
        {
          title: 'Definiera meningsfull aktivering',
          body:
            'En central del var att definiera meningsfull aktivering — vilka beteenden som visade att en användare förstått produkten, upplevt dess värde och sannolikt skulle konvertera. Dessa signaler informerade onboarding, experimentering, prioritering och relationen mellan product-led och säljassisterad tillväxt.',
        },
        {
          title: 'Från noll till 20% av total MRR',
          body:
            'Detta var inte bara ett nytt registreringsflöde — det kopplade ihop webbplatsen, produktupplevelsen, den kommersiella modellen, datan och de interna teamen kring en ny väg till intäkter. Inom två år växte PLG-motorn från noll till 20% av Funnels totala MRR, en meningsfull ny kanal vid sidan av den befintliga säljledda affären.',
        },
      ],
    },
  ],
  results: {
    label: 'Resultat',
    heading: 'Ett förvärvssystem som växer med tiden.',
    intro: 'Över förvärv, konvertering och en helt ny self-serve-kanal.',
    items: [
      {
        value: '0 → 20%',
        title: 'PLG från noll till 20% av MRR',
        body:
          'Jag skapade Funnels self-serve-motor från grunden. Inom två år genererade den 20% av total månatlig återkommande intäkt — en betydande ny kommersiell kanal som inte fanns när jag klev in.',
      },
      {
        value: '50%',
        title: '50% tillväxt i organisk trafik',
        body:
          'Omgörningen av varumärke och webbplats, kombinerad med ett mer strukturerat SEO-arbete, ökade den organiska trafiken med 50%.',
      },
      {
        value: '20%',
        title: '20% fler marketing-qualified leads',
        body:
          'Förbättrad positionering, konverteringsresor och förvärvsprestanda ökade MQL-volymen med 20%.',
      },
      {
        value: '−30%',
        title: 'Mer än 30% lägre CAC',
        body:
          'Starkare organiskt förvärv, bättre konvertering, systematisk optimering och en ny self-serve-motion minskade förvärvskostnaden med mer än 30% år över år.',
      },
    ],
  },
  keyLearnings: {
    label: 'Lärdomar',
    heading: 'Vad uppdraget lärde mig.',
    items: [
      {
        title: 'PLG kräver mer än att öppna produkten.',
        body: 'En framgångsrik self-serve-motion beror på att förvärv, onboarding, aktivering, pricing, mätning och revenue operations fungerar som ett system.',
      },
      {
        title: 'Webbplatsen bör drivas som en produkt.',
        body: 'Löpande discovery, prioritering, experimentering och iteration skapar mer värde än enstaka redesigns.',
      },
      {
        title: 'Experimenthastighet spelar roll, men lärandekvalitet spelar större roll.',
        body: 'Ett starkt ramverk gör enskilda tester kumulativa genom att mata deras insikter in i framtida beslut.',
      },
      {
        title: 'Säljledd och product-led growth kan förstärka varandra.',
        body: 'Self-serve skapade en ny intäktskanal utan att kräva att Funnel övergav sin etablerade säljmotion.',
      },
      {
        title: 'Tillväxtägarskap måste korsa organisatoriska gränser.',
        body: 'De största vinsterna kom från att koppla ihop produkt, marknad, data, design, utveckling och intäkter snarare än att optimera varje funktion för sig.',
      },
    ],
  },
  role: {
    label: 'Min roll',
    heading: 'Growth-produktledarskap över hela förvärvsytan.',
    body:
      'Jag agerade de facto Product Manager för Funnels tillväxtyta, arbetade direkt med utvecklare och designers för att flytta initiativ från möjlighet till levererad upplevelse — och drev webbplats, förvärv, onboarding och monetisering som delar av en kundresa snarare än frånkopplade funktioner:',
    items: [
      'Bygga PLG-motorn från koncept till 20% av total MRR',
      'Driva webbplatsen som en produkt',
      'Leda omgörningen av varumärke, pricing och webbplats',
      'Etablera Funnels experimenteringsramverk',
      'Äga SEO, CRO och performance marketing',
      'Utveckla aktiverings- och onboarding-strategi',
      'Bygga tillväxtanalys, RevOps och attribution-infrastruktur',
      'Leda utvecklare och designers',
      'Koppla ihop Produkt, Marknad, Sälj och Revenue Operations kring gemensamma utfall',
    ],
  },
  quote: {
    text:
      'Jag hjälpte till att förvandla Funnels förvärvsmodell från en primärt säljledd motion till ett tillväxtsystem som växer med tiden — byggde PLG från noll till 20% av total MRR samtidigt som jag ökade organisk trafik med 50%, växte MQL med 20% och sänkte CAC med mer än 30%.',
    author: 'Erik Werner',
    role: 'Growth Product Lead — Acquisition, Funnel.io',
  },
  cta: {
    heading: 'Bygger du en PLG-motion?',
    body: 'Om du lägger till self-serve vid sidan av en säljledd affär — låt oss prata om systemet (förvärv, aktivering, pricing och experimentering) som får det att växa med tiden.',
    button: 'Boka ett samtal →',
  },
}

// ── RiksTV & Strim.no case study ─────────────────────────────────────────────

const rikstvEn: CaseStudy = {
  slug: 'rikstv-strim',
  accent: 'salmon',
  kicker: 'Case study',
  client: 'RiksTV & Strim.no',
  title: 'Launching Norway’s first pure B2C streaming service — while transforming digital sales for a major TV distributor.',
  intro:
    'Built Strim.no’s acquisition engine from zero and cut CAC by 40%, exceeding subscriber targets ahead of schedule — while simultaneously rebuilding RiksTV’s website and leading digital sales for the established core business.',
  meta: [
    { label: 'Role', value: 'Head of Growth & Acquisition' },
    { label: 'Period', value: 'Oct 2018 – Jun 2020' },
    { label: 'Scope', value: 'Digital sales · performance · measurement · agencies' },
    { label: 'Context', value: 'Norway — TV distribution + a new B2C streaming launch' },
  ],
  metrics: [
    { value: '−40%', label: 'lower customer acquisition cost', note: 'From disciplined budgets, creative iteration and measurement' },
    { value: 'Launch', label: 'Strim.no built from zero', note: 'Norway’s first pure B2C streaming subscription' },
    { value: 'Ahead', label: 'of schedule on subscriber targets', note: 'Growth targets exceeded early' },
  ],
  overview: {
    heading: 'Two products, two growth logics, at once.',
    body: [
      'RiksTV is one of Norway’s largest television distributors, serving hundreds of thousands of households with digital TV. In 2018 the company decided to launch Strim.no — Norway’s first pure B2C streaming subscription service — as a digital-first product alongside RiksTV’s established distribution business.',
      'I held a dual leadership role. For RiksTV, I led digital sales and e-commerce across an established brand, existing infrastructure and a mature customer base. For Strim, I started with a blank page: no dedicated team, acquisition engine, channel strategy, measurement framework, agency setup or proven commercial model.',
      'My responsibility was to build all of it — and to establish whether Strim could acquire and retain subscribers at a commercially sustainable cost.',
    ],
  },
  startingPoint: {
    label: 'The starting point',
    heading: 'A new category, with no data to optimise against.',
    lead:
      'RiksTV was an established subscription business — the challenge there was efficiency and e-commerce. Strim was a new category proposition with no historical performance data; the acquisition model, operating structure and measurement all had to be created while the product entered the market. Strim needed to:',
    points: [
      'Establish a distinctive market position and build awareness from zero',
      'Explain a new way of purchasing television content',
      'Create a scalable subscriber-acquisition model',
      'Identify the right channel mix and develop effective creative',
      'Measure conversion and acquisition cost reliably',
      'Balance subscriber growth with commercial sustainability',
    ],
    goal:
      'The task was to build a complete commercial growth system for a product entering the market — while simultaneously making an established digital business more efficient.',
  },
  ownership: {
    label: 'What I owned',
    heading: 'Growth and acquisition across both businesses.',
    intro:
      'At RiksTV I owned digital sales, e-commerce, website, paid acquisition, agencies and conversion. At Strim I owned the complete commercial growth system — meaning I was simultaneously improving an established digital business and building an entirely new one:',
    items: [
      'Digital sales & e-commerce',
      'Website development',
      'Product & proposition',
      'Team & operating model',
      'Channel strategy',
      'Paid search, social & programmatic',
      'Creative strategy',
      'Agency selection & management',
      'Measurement & attribution',
      'Budget allocation & CAC economics',
      'Subscriber-growth performance',
    ],
  },
  acts: [
    {
      label: 'Act I',
      title: 'Building Strim’s growth engine from zero',
      subtitle: 'One connected acquisition operation, not several disconnected channels.',
      blocks: [
        {
          title: 'Agency partners as one operation',
          body:
            'I selected and onboarded specialist media and creative agency partners across paid search, paid social, programmatic and creative development. Rather than treating them as separate suppliers, I built a shared performance structure around them:',
          items: [
            'Clear commercial and channel briefs, with defined responsibilities',
            'Shared success metrics and regular performance reviews',
            'Creative feedback loops and testing / optimisation cadences',
            'Transparent budget decisions',
          ],
        },
      ],
    },
    {
      label: 'Act II',
      title: 'Establishing measurement and attribution',
      subtitle: 'Decisions based on subscribers and economics — not impressions or traffic.',
      blocks: [
        {
          title: 'Beyond clicks to subscribers',
          body:
            'Strim needed to understand far more than how many people clicked an ad. I implemented the measurement and attribution framework required to answer the questions that actually mattered:',
          items: [
            'Which channels generated subscribers',
            'Which campaigns and creatives performed best',
            'How acquisition costs differed by audience and source',
            'Where users dropped out of the journey',
            'How budgets should be distributed, and whether growth stayed viable',
          ],
        },
        {
          title: 'A shared foundation for performance',
          body:
            'The framework created a common language across internal stakeholders, agencies, channels and creative teams — so decisions could be based on subscriber outcomes and acquisition economics rather than platform-specific vanity metrics.',
        },
      ],
    },
    {
      label: 'Act III',
      title: 'Rebuilding the performance strategy',
      subtitle: 'Faster learning and stronger commercial discipline.',
      blocks: [
        {
          title: 'Faster creative iteration',
          body:
            'Streaming is a highly creative-dependent category — performance varies with the content promoted, the proposition, the audience and the timing. I introduced tighter iteration cycles between campaign data and creative production, using performance insight to continuously refine messaging, formats and concepts rather than treating creative as a fixed deliverable.',
        },
        {
          title: 'Budget allocation on marginal returns',
          body:
            'Budgets were evaluated on the additional subscriber value each channel could generate — not historical allocation or average platform metrics. That made it possible to scale channels while they stayed efficient and redirect investment when marginal returns deteriorated.',
        },
        {
          title: 'Agency accountability',
          body:
            'Clearer briefs, feedback structures and optimisation cadences meant every partner worked toward shared commercial outcomes, with channel results connected to subscriber growth and CAC. Together, these changes reduced Strim’s customer acquisition cost by 40% while subscriber-growth targets were exceeded ahead of schedule.',
        },
      ],
    },
    {
      label: 'Act IV',
      title: 'Transforming RiksTV’s digital sales',
      subtitle: 'A different playbook for the established core business.',
      blocks: [
        {
          title: 'Optimising an established business',
          body:
            'Alongside launching Strim, I remained responsible for digital sales and acquisition at RiksTV — a business with established products, awareness, infrastructure and a broad subscriber base. My work included rebuilding rikstv.no, improving the e-commerce journey, managing digital-sales performance, overseeing paid-acquisition partners and optimising conversion across existing and new customers. The new site had to explain a more complex TV offering, support package selection and convert within an established subscription model.',
        },
        {
          title: 'Two growth logics at once',
          body:
            'Managing RiksTV and Strim simultaneously meant holding two separate growth logics: optimisation and transformation for an established business, and validation and rapid scaling for a new digital service — while sharing knowledge, capabilities and commercial discipline across both.',
        },
      ],
    },
  ],
  results: {
    label: 'Results',
    heading: 'A launch and a transformation, in parallel.',
    intro: 'Two products, two commercial models, one coordinated growth operation.',
    items: [
      {
        value: 'Launch',
        title: 'Strim launched from zero',
        body:
          'I built the team, agency structure, channel strategy, creative process, measurement framework and acquisition operation to bring Strim to market — moving it from a strategic concept to an operating B2C subscription business with a measurable growth engine.',
      },
      {
        value: '−40%',
        title: '40% reduction in CAC',
        body:
          'The rebuilt performance strategy cut customer acquisition cost by 40% — driven by more disciplined budget allocation, tighter creative iteration, better measurement and stronger agency management.',
      },
      {
        value: 'Ahead',
        title: 'Subscriber targets exceeded early',
        body:
          'Strim grew faster than planned and exceeded its subscriber-acquisition targets ahead of schedule, while improving acquisition efficiency.',
      },
      {
        value: '2',
        title: 'Two products, two commercial models',
        body:
          'In parallel I led the rebuild of rikstv.no and continued managing digital sales for the mature distribution business — running separate strategies for an established product and a ground-up streaming service while sharing capability and commercial discipline across both.',
      },
    ],
  },
  keyLearnings: {
    label: 'Key learnings',
    heading: 'What launching-and-transforming taught.',
    items: [
      {
        title: 'A new product needs operating infrastructure before it can scale.',
        body: 'Channels, agencies, creative, measurement and decision cadences had to be built together, not bolted on later.',
      },
      {
        title: 'Subscriber growth only matters when the economics work.',
        body: 'CAC was treated as a central product and commercial constraint — not just a marketing metric.',
      },
      {
        title: 'Creative and performance can’t operate separately.',
        body: 'Faster feedback between channel data and creative production materially improved acquisition efficiency.',
      },
      {
        title: 'Attribution creates organisational alignment.',
        body: 'A shared measurement framework let internal teams and agencies optimise toward subscriber outcomes rather than channel-specific vanity metrics.',
      },
      {
        title: 'Established and new products need different growth systems.',
        body: 'RiksTV benefited from structured optimisation; Strim required rapid validation and infrastructure creation.',
      },
      {
        title: 'Agency management is a growth capability.',
        body: 'Clear briefs, shared metrics, fast feedback and commercial accountability turned external partners into one coordinated acquisition operation.',
      },
    ],
  },
  role: {
    label: 'My role',
    heading: 'Growth and acquisition across RiksTV and Strim.no.',
    body:
      'I led growth and acquisition across both businesses — launching a new B2C streaming service while transforming digital sales for an established distributor:',
    items: [
      'Launching Strim’s growth operation from scratch',
      'Developing the product and commercial proposition',
      'Building the team and agency model',
      'Selecting and onboarding media and creative partners',
      'Creating the measurement and attribution framework',
      'Leading paid search, paid social and programmatic strategy',
      'Directing creative testing and iteration',
      'Managing budgets based on marginal returns',
      'Reducing CAC by 40% and exceeding subscriber targets ahead of schedule',
      'Rebuilding rikstv.no and leading RiksTV digital sales & e-commerce',
    ],
  },
  quote: {
    text:
      'I built Strim’s acquisition engine from zero, reduced CAC by 40%, and exceeded subscriber targets ahead of schedule — while simultaneously rebuilding RiksTV’s website and leading digital sales for the established core business.',
    author: 'Erik Werner',
    role: 'Head of Growth & Acquisition, RiksTV & Strim.no',
  },
  cta: {
    heading: 'Launching something new?',
    body: 'Whether it’s a new product from zero or a more efficient engine for an established one, let’s talk about the acquisition system behind it.',
    button: 'Book a call →',
  },
}

const rikstvSv: CaseStudy = {
  slug: 'rikstv-strim',
  accent: 'salmon',
  kicker: 'Case study',
  client: 'RiksTV & Strim.no',
  title: 'Lanserade Norges första rena B2C-streamingtjänst — samtidigt som jag transformerade digital försäljning för en stor TV-distributör.',
  intro:
    'Byggde Strim.nos förvärvsmotor från noll och sänkte CAC med 40%, och överträffade prenumerantmålen före tidplan — samtidigt som jag byggde om RiksTVs webbplats och ledde digital försäljning för den etablerade kärnaffären.',
  meta: [
    { label: 'Roll', value: 'Head of Growth & Acquisition' },
    { label: 'Period', value: 'Okt 2018 – Jun 2020' },
    { label: 'Omfattning', value: 'Digital försäljning · performance · mätning · byråer' },
    { label: 'Kontext', value: 'Norge — TV-distribution + en ny B2C-streaminglansering' },
  ],
  metrics: [
    { value: '−40%', label: 'lägre kundförvärvskostnad', note: 'Från disciplinerade budgetar, kreativ iteration och mätning' },
    { value: 'Lansering', label: 'Strim.no byggd från noll', note: 'Norges första rena B2C-streamingprenumeration' },
    { value: 'Före', label: 'tidplan på prenumerantmålen', note: 'Tillväxtmålen överträffades tidigt' },
  ],
  overview: {
    heading: 'Två produkter, två tillväxtlogiker, samtidigt.',
    body: [
      'RiksTV är en av Norges största TV-distributörer och betjänar hundratusentals hushåll med digital-TV. 2018 beslutade bolaget att lansera Strim.no — Norges första rena B2C-streamingprenumeration — som en digital-first-produkt vid sidan av RiksTVs etablerade distributionsaffär.',
      'Jag hade en dubbel ledarroll. För RiksTV ledde jag digital försäljning och e-handel över ett etablerat varumärke, befintlig infrastruktur och en mogen kundbas. För Strim började jag med ett blankt papper: inget dedikerat team, ingen förvärvsmotor, kanalstrategi, mätramverk, byråuppsättning eller beprövad kommersiell modell.',
      'Mitt ansvar var att bygga allt detta — och att fastställa om Strim kunde förvärva och behålla prenumeranter till en kommersiellt hållbar kostnad.',
    ],
  },
  startingPoint: {
    label: 'Utgångsläget',
    heading: 'En ny kategori, utan data att optimera mot.',
    lead:
      'RiksTV var en etablerad prenumerationsaffär — där handlade utmaningen om effektivitet och e-handel. Strim var ett nytt kategorierbjudande utan historisk performance-data; förvärvsmodellen, den operativa strukturen och mätningen fick alla skapas medan produkten gick ut på marknaden. Strim behövde:',
    points: [
      'Etablera en distinkt marknadsposition och bygga kännedom från noll',
      'Förklara ett nytt sätt att köpa TV-innehåll',
      'Skapa en skalbar modell för prenumerantförvärv',
      'Identifiera rätt kanalmix och utveckla effektiv kreativ',
      'Mäta konvertering och förvärvskostnad tillförlitligt',
      'Balansera prenumeranttillväxt med kommersiell hållbarhet',
    ],
    goal:
      'Uppgiften var att bygga ett komplett kommersiellt tillväxtsystem för en produkt på väg in på marknaden — samtidigt som jag gjorde en etablerad digital affär effektivare.',
  },
  ownership: {
    label: 'Vad jag ägde',
    heading: 'Growth och förvärv över båda affärerna.',
    intro:
      'På RiksTV ägde jag digital försäljning, e-handel, webbplats, betalt förvärv, byråer och konvertering. På Strim ägde jag hela det kommersiella tillväxtsystemet — vilket innebar att jag samtidigt förbättrade en etablerad digital affär och byggde en helt ny:',
    items: [
      'Digital försäljning & e-handel',
      'Webbplatsutveckling',
      'Produkt & erbjudande',
      'Team & operativ modell',
      'Kanalstrategi',
      'Betald sök, social & programmatic',
      'Kreativ strategi',
      'Byråval & byråstyrning',
      'Mätning & attribution',
      'Budgetallokering & CAC-ekonomi',
      'Prenumeranttillväxt',
    ],
  },
  acts: [
    {
      label: 'Akt I',
      title: 'Bygga Strims tillväxtmotor från noll',
      subtitle: 'En sammankopplad förvärvsoperation, inte flera frånkopplade kanaler.',
      blocks: [
        {
          title: 'Byråpartners som en operation',
          body:
            'Jag valde och onboardade specialiserade medie- och kreativbyråpartners inom betald sök, betald social, programmatic och kreativutveckling. Istället för att behandla dem som separata leverantörer byggde jag en gemensam performance-struktur runt dem:',
          items: [
            'Tydliga kommersiella och kanalbriefs, med definierat ansvar',
            'Gemensamma framgångsmått och regelbundna performance-genomgångar',
            'Kreativa feedback-loopar och test- / optimeringscykler',
            'Transparenta budgetbeslut',
          ],
        },
      ],
    },
    {
      label: 'Akt II',
      title: 'Etablera mätning och attribution',
      subtitle: 'Beslut baserade på prenumeranter och ekonomi — inte visningar eller trafik.',
      blocks: [
        {
          title: 'Bortom klick till prenumeranter',
          body:
            'Strim behövde förstå långt mer än hur många som klickade på en annons. Jag implementerade det mät- och attributionsramverk som krävdes för att besvara frågorna som faktiskt spelade roll:',
          items: [
            'Vilka kanaler som genererade prenumeranter',
            'Vilka kampanjer och kreativ som presterade bäst',
            'Hur förvärvskostnaderna skilde sig efter målgrupp och källa',
            'Var användare hoppade av resan',
            'Hur budgetar borde fördelas, och om tillväxten förblev hållbar',
          ],
        },
        {
          title: 'En gemensam grund för performance',
          body:
            'Ramverket skapade ett gemensamt språk över interna intressenter, byråer, kanaler och kreativteam — så att beslut kunde baseras på prenumerantutfall och förvärvsekonomi snarare än plattformsspecifika fåfängemått.',
        },
      ],
    },
    {
      label: 'Akt III',
      title: 'Bygga om performance-strategin',
      subtitle: 'Snabbare lärande och starkare kommersiell disciplin.',
      blocks: [
        {
          title: 'Snabbare kreativ iteration',
          body:
            'Streaming är en starkt kreativberoende kategori — performance varierar med innehållet som marknadsförs, erbjudandet, målgruppen och tajmingen. Jag införde tätare iterationscykler mellan kampanjdata och kreativproduktion, och använde performance-insikter för att löpande förfina budskap, format och koncept snarare än att behandla kreativ som en fast leverabel.',
        },
        {
          title: 'Budgetallokering på marginalavkastning',
          body:
            'Budgetar utvärderades utifrån det ytterligare prenumerantvärde varje kanal kunde generera — inte historisk allokering eller genomsnittliga plattformsmått. Det gjorde det möjligt att skala kanaler så länge de var effektiva och styra om investeringar när marginalavkastningen försämrades.',
        },
        {
          title: 'Byråansvar',
          body:
            'Tydligare briefs, feedback-strukturer och optimeringscykler innebar att varje partner arbetade mot gemensamma kommersiella utfall, med kanalresultat kopplade till prenumeranttillväxt och CAC. Tillsammans sänkte dessa förändringar Strims kundförvärvskostnad med 40% samtidigt som prenumerantmålen överträffades före tidplan.',
        },
      ],
    },
    {
      label: 'Akt IV',
      title: 'Transformera RiksTVs digitala försäljning',
      subtitle: 'En annan spelbok för den etablerade kärnaffären.',
      blocks: [
        {
          title: 'Optimera en etablerad affär',
          body:
            'Vid sidan av Strim-lanseringen var jag fortsatt ansvarig för digital försäljning och förvärv på RiksTV — en affär med etablerade produkter, kännedom, infrastruktur och en bred prenumerantbas. Mitt arbete omfattade att bygga om rikstv.no, förbättra e-handelsresan, styra digital försäljning, övervaka partners för betalt förvärv och optimera konvertering över både befintliga och nya kunder. Den nya sajten behövde förklara ett mer komplext TV-erbjudande, stödja paketval och konvertera inom en etablerad prenumerationsmodell.',
        },
        {
          title: 'Två tillväxtlogiker samtidigt',
          body:
            'Att driva RiksTV och Strim samtidigt innebar att hålla två separata tillväxtlogiker: optimering och transformation för en etablerad affär, och validering och snabb skalning för en ny digital tjänst — samtidigt som kunskap, förmågor och kommersiell disciplin delades över båda.',
        },
      ],
    },
  ],
  results: {
    label: 'Resultat',
    heading: 'En lansering och en transformation, parallellt.',
    intro: 'Två produkter, två kommersiella modeller, en samordnad tillväxtoperation.',
    items: [
      {
        value: 'Lansering',
        title: 'Strim lanserad från noll',
        body:
          'Jag byggde teamet, byråstrukturen, kanalstrategin, kreativprocessen, mätramverket och förvärvsoperationen för att ta Strim till marknaden — och flyttade det från ett strategiskt koncept till en operativ B2C-prenumerationsaffär med en mätbar tillväxtmotor.',
      },
      {
        value: '−40%',
        title: '40% lägre CAC',
        body:
          'Den ombyggda performance-strategin sänkte kundförvärvskostnaden med 40% — drivet av mer disciplinerad budgetallokering, tätare kreativ iteration, bättre mätning och starkare byråstyrning.',
      },
      {
        value: 'Före',
        title: 'Prenumerantmål överträffade tidigt',
        body:
          'Strim växte snabbare än planerat och överträffade sina mål för prenumerantförvärv före tidplan, samtidigt som förvärvseffektiviteten förbättrades.',
      },
      {
        value: '2',
        title: 'Två produkter, två kommersiella modeller',
        body:
          'Parallellt ledde jag ombyggnaden av rikstv.no och fortsatte styra digital försäljning för den mogna distributionsaffären — och körde separata strategier för en etablerad produkt och en streamingtjänst byggd från grunden, samtidigt som förmåga och kommersiell disciplin delades över båda.',
      },
    ],
  },
  keyLearnings: {
    label: 'Lärdomar',
    heading: 'Vad det lärde mig att lansera-och-transformera.',
    items: [
      {
        title: 'En ny produkt behöver operativ infrastruktur innan den kan skala.',
        body: 'Kanaler, byråer, kreativ, mätning och beslutscykler måste byggas tillsammans, inte skruvas på i efterhand.',
      },
      {
        title: 'Prenumeranttillväxt spelar bara roll när ekonomin fungerar.',
        body: 'CAC behandlades som en central produkt- och affärsbegränsning — inte bara ett marknadsföringsmått.',
      },
      {
        title: 'Kreativ och performance kan inte drivas separat.',
        body: 'Snabbare feedback mellan kanaldata och kreativproduktion förbättrade förvärvseffektiviteten påtagligt.',
      },
      {
        title: 'Attribution skapar organisatorisk samsyn.',
        body: 'Ett gemensamt mätramverk lät interna team och byråer optimera mot prenumerantutfall snarare än kanalspecifika fåfängemått.',
      },
      {
        title: 'Etablerade och nya produkter behöver olika tillväxtsystem.',
        body: 'RiksTV gynnades av strukturerad optimering; Strim krävde snabb validering och skapande av infrastruktur.',
      },
      {
        title: 'Byråstyrning är en tillväxtförmåga.',
        body: 'Tydliga briefs, gemensamma mått, snabb feedback och kommersiellt ansvar gjorde externa partners till en samordnad förvärvsoperation.',
      },
    ],
  },
  role: {
    label: 'Min roll',
    heading: 'Growth och förvärv över RiksTV och Strim.no.',
    body:
      'Jag ledde growth och förvärv över båda affärerna — lanserade en ny B2C-streamingtjänst samtidigt som jag transformerade digital försäljning för en etablerad distributör:',
    items: [
      'Lansera Strims tillväxtoperation från grunden',
      'Utveckla produkten och det kommersiella erbjudandet',
      'Bygga teamet och byråmodellen',
      'Välja och onboarda medie- och kreativpartners',
      'Skapa mät- och attributionsramverket',
      'Leda strategi för betald sök, betald social och programmatic',
      'Styra kreativ testning och iteration',
      'Hantera budgetar baserat på marginalavkastning',
      'Sänka CAC med 40% och överträffa prenumerantmålen före tidplan',
      'Bygga om rikstv.no och leda RiksTVs digitala försäljning & e-handel',
    ],
  },
  quote: {
    text:
      'Jag byggde Strims förvärvsmotor från noll, sänkte CAC med 40%, och överträffade prenumerantmålen före tidplan — samtidigt som jag byggde om RiksTVs webbplats och ledde digital försäljning för den etablerade kärnaffären.',
    author: 'Erik Werner',
    role: 'Head of Growth & Acquisition, RiksTV & Strim.no',
  },
  cta: {
    heading: 'Lanserar du något nytt?',
    body: 'Oavsett om det är en ny produkt från noll eller en effektivare motor för en etablerad — låt oss prata om förvärvssystemet bakom.',
    button: 'Boka ett samtal →',
  },
}

// ── Telia Norway case study ──────────────────────────────────────────────────

const teliaEn: CaseStudy = {
  slug: 'telia-norway',
  accent: 'turquoise',
  kicker: 'Case study',
  client: 'Telia Norway',
  title: 'Turning e-commerce from a secondary channel into a scalable growth platform.',
  intro:
    'Doubling conversion and launching Telia Norway’s first omnichannel programme — a full platform rebuild across B2C and B2B, an agile product organisation built from scratch, and a rebuilt performance-marketing operation.',
  meta: [
    { label: 'Role', value: 'E-Commerce Manager' },
    { label: 'Period', value: 'Aug 2014 – Jul 2017' },
    { label: 'Scope', value: 'E-commerce · agile · performance · omnichannel' },
    { label: 'Context', value: 'Norway — telecom, consumer & business' },
  ],
  metrics: [
    { value: '2×', label: 'e-commerce conversion rate', note: 'A 100% increase from the rebuild and optimisation programme' },
    { value: 'Rebuild', label: 'of the platform, B2C & B2B', note: 'From a static sales site to a managed product' },
    { value: '1st', label: 'omnichannel programme for Telia Norway', note: 'Connecting digital commerce and physical retail' },
  ],
  overview: {
    heading: 'From a supporting channel to a growth platform.',
    body: [
      'Telia Norway is one of Scandinavia’s largest telecommunications companies, serving both consumer and business customers. When I joined in 2014, the digital sales channel was underperforming: an inflexible, slow-to-develop platform, weak conversion, and no structured product-development or performance-marketing model. Digital commerce operated as a secondary channel rather than a central revenue driver.',
      'My mandate was to change that. I took ownership of the e-commerce platform across B2C and B2B, rebuilt it from scratch, established an agile product organisation, and transformed the company’s approach to digital acquisition and measurement.',
      'The new platform doubled e-commerce conversion and created the foundation for Telia Norway’s first omnichannel programme, connecting online and physical retail journeys.',
    ],
  },
  startingPoint: {
    label: 'The starting point',
    heading: 'A complex category on an inflexible platform.',
    lead:
      'Telecoms is a complex e-commerce category — customers aren’t simply buying a product. A single journey might require them to:',
    points: [
      'Select a subscription and choose a device',
      'Compare contract structures, data and service allowances',
      'Verify eligibility, transfer a number, pass identity and credit checks',
      'Decide between online and in-store fulfilment',
      'Navigate different consumer and business requirements',
    ],
    goal:
      'Telia’s existing platform made these journeys harder than necessary — slow to change, expensive to maintain, and poorly suited to continuous optimisation, with no shared operating model connecting e-commerce, technology, design, analytics, media and physical retail. The opportunity was to rebuild both the platform and the system around it.',
  },
  ownership: {
    label: 'What I owned',
    heading: 'Digital commerce performance, end-to-end.',
    intro:
      'I had end-to-end responsibility for Telia Norway’s digital commerce across B2C and B2B — leading a team of developers, designers, analysts and channel specialists while coordinating Marketing, Sales, Technology and Retail:',
    items: [
      'E-commerce strategy & digital sales',
      'The webshop as a product',
      'Platform rebuild',
      'Conversion-rate optimisation',
      'Product roadmap & prioritisation',
      'Agile development',
      'Performance marketing',
      'Measurement & attribution',
      'Agency selection & management',
      'Paid search, display & affiliates',
      'Omnichannel strategy',
      'Cross-functional team leadership',
    ],
  },
  acts: [
    {
      label: 'Act I',
      title: 'Rebuilding the e-commerce platform',
      subtitle: 'From a static sales website to a flexible, continuously optimisable product.',
      blocks: [
        {
          title: 'A rebuild from the ground up',
          body:
            'The existing webshop was too inflexible for Telia’s digital ambitions — product changes, campaigns and experience improvements took too long to reach market. I led a complete rebuild, aimed not just at modernising the interface but at a foundation that could:',
          items: [
            'Simplify complex purchasing journeys',
            'Support both B2C and B2B propositions',
            'Improve conversion and make campaigns faster to launch',
            'Allow continuous testing and reduce dependency on large releases',
            'Support future omnichannel capabilities',
          ],
        },
        {
          title: 'E-commerce as a product',
          body:
            'The rebuild created a more flexible foundation for subscriptions, devices, offers, customer data and commercial campaigns — and changed the role of e-commerce inside Telia. It became a product with an actively managed roadmap rather than a static sales website.',
        },
      ],
    },
    {
      label: 'Act II',
      title: 'Establishing agile product development',
      subtitle: 'A faster, more customer-focused way of building digital commerce.',
      blocks: [
        {
          title: 'A cross-functional product team',
          body:
            'A new platform alone wouldn’t solve the delivery problem. I established an agile, cross-functional team combining development, UX and design, analytics, e-commerce, channel expertise and commercial stakeholders — with a structured process to define problems, prioritise the roadmap, break work into smaller releases, run cycles, measure and iterate on evidence.',
        },
        {
          title: 'Incremental delivery, clearer ownership',
          body:
            'This sharply reduced the time to launch features, improvements and campaigns. Instead of waiting for large releases, the team delivered incrementally, learned from behaviour and continuously improved — and e-commerce performance became a shared cross-functional responsibility rather than disconnected requests passed between departments.',
        },
      ],
    },
    {
      label: 'Act III',
      title: 'Doubling conversion',
      subtitle: 'Optimising the purchase journey with platform and commercial performance measured together.',
      blocks: [
        {
          title: 'Reducing friction end-to-end',
          body:
            'With a flexible platform and faster delivery in place, I led continuous optimisation of the purchasing journey, reducing friction across:',
          items: [
            'Product discovery and offer / subscription comparison',
            'Device selection and checkout',
            'Forms and validation',
            'B2B and B2C-specific journeys',
            'Campaign landing pages and the mobile experience',
          ],
        },
        {
          title: 'Measured together — a 100% uplift',
          body:
            'Product development and commercial performance were measured together, so changes were prioritised by their effect on behaviour and sales rather than internal assumptions. The combined rebuild and optimisation programme produced a 100% increase in e-commerce conversion — moving digital sales closer to a primary growth channel rather than a supporting surface.',
        },
      ],
    },
    {
      label: 'Act IV',
      title: 'Rebuilding performance marketing',
      subtitle: 'A measurable, commercially accountable acquisition operation.',
      blocks: [
        {
          title: 'From activity metrics to revenue',
          body:
            'Telia’s paid-acquisition model needed to become measurable and accountable. I rebuilt the performance-marketing operation across paid search, display and affiliates:',
          items: [
            'Selecting and onboarding new agency partners',
            'Establishing channel strategies and clearer campaign / creative briefs',
            'Implementing performance reviews and structured optimisation routines',
            'Improving measurement and attribution, connecting media to digital sales',
          ],
        },
        {
          title: 'Owning both sides of the click',
          body:
            'Because I owned both the e-commerce experience and the acquisition channels, media performance could be connected directly to landing pages, product journeys and conversion outcomes — moving beyond channel-level activity metrics to understand which investments actually contributed to acquisition and revenue.',
        },
      ],
    },
    {
      label: 'Act V',
      title: 'Launching Telia’s first omnichannel programme',
      subtitle: 'Connecting digital commerce and physical retail into one path to purchase.',
      blocks: [
        {
          title: 'Connecting online and offline',
          body:
            'Customers didn’t think of Telia as separate online and offline businesses — they expected to research in one channel, continue in another, and get a consistent experience. Internally, digital commerce and physical retail had operated as distinct journeys. I led the initiative to connect them, aligning digital acquisition, online discovery, e-commerce, physical stores, customer data and sales journeys across B2C and B2B.',
        },
        {
          title: 'Omnichannel as a capability',
          body:
            'A customer might discover an offer through advertising, research it online and complete the purchase in a store — or start in-store and continue digitally. Connecting these journeys improved continuity and gave Telia a stronger foundation for understanding the complete path to purchase, establishing omnichannel as a strategic capability rather than a collection of isolated cross-channel campaigns.',
        },
      ],
    },
  ],
  results: {
    label: 'Results',
    heading: 'A platform, an operating model, and a new capability.',
    intro: 'A rebuild that changed the commercial role of digital sales inside the organisation.',
    items: [
      {
        value: '2×',
        title: 'Conversion increased by 100%',
        body:
          'The new platform, simplified purchase journeys and continuous optimisation programme doubled e-commerce conversion.',
      },
      {
        value: 'Rebuild',
        title: 'E-commerce platform rebuilt',
        body:
          'A complete rebuild of Telia Norway’s webshop across consumer and business segments — more flexible, easier to optimise and significantly faster to develop, with releases shipping in smaller, faster cycles.',
      },
      {
        value: '1st',
        title: 'First omnichannel programme launched',
        body:
          'Telia Norway’s first initiative connecting digital commerce and physical retail across B2C and B2B — omnichannel established as a strategic capability, not a one-off campaign.',
      },
      {
        value: 'Agile',
        title: 'An agile product organisation, from scratch',
        body:
          'I created and led a cross-functional team of developers, designers, analysts and channel specialists — and rebuilt performance marketing with new agencies, measurement and attribution across paid search, display and affiliates.',
      },
    ],
  },
  keyLearnings: {
    label: 'Key learnings',
    heading: 'What the transformation taught.',
    items: [
      {
        title: 'Platform transformation requires operating-model transformation.',
        body: 'Rebuilding the technology created potential; the agile team made continuous improvement possible.',
      },
      {
        title: 'E-commerce should be managed as a product.',
        body: 'A roadmap based on customer behaviour and commercial outcomes beats a queue of stakeholder requests.',
      },
      {
        title: 'Conversion and acquisition must be optimised together.',
        body: 'Media efficiency depends on what happens after the click; platform performance depends on the quality of acquired traffic.',
      },
      {
        title: 'Complex products require simpler journeys.',
        body: 'The digital experience should absorb telecom’s difficult choices and dependencies rather than pass them to the customer.',
      },
      {
        title: 'Omnichannel is a customer journey, not a channel project.',
        body: 'Customers move naturally between online and offline; the organisation and its data need to support that behaviour.',
      },
      {
        title: 'Faster deployment creates commercial advantage.',
        body: 'Shorter release cycles let Telia respond more quickly to campaigns, customer insight and market changes.',
      },
    ],
  },
  role: {
    label: 'My role',
    heading: 'E-commerce transformation across B2C and B2B.',
    body:
      'I led Telia Norway’s e-commerce transformation, coordinating across Digital, Marketing, Sales, Technology, Analytics and Retail:',
    items: [
      'E-commerce and digital-sales strategy',
      'Complete platform rebuild',
      'Product roadmap and prioritisation',
      'Agile team design and leadership',
      'UX and conversion-rate optimisation',
      'Performance-marketing strategy',
      'Measurement and attribution',
      'Agency selection and management',
      'Paid search, display and affiliates',
      'Omnichannel strategy and implementation',
    ],
  },
  quote: {
    text:
      'I rebuilt Telia Norway’s e-commerce platform and operating model, doubled conversion, transformed performance marketing, and launched the company’s first omnichannel programme across B2C and B2B.',
    author: 'Erik Werner',
    role: 'E-Commerce Manager, Telia Norway',
  },
  cta: {
    heading: 'Turning e-commerce into a growth platform?',
    body: 'Whether it’s a rebuild, an operating-model shift or connecting online and offline, let’s talk about the system that makes digital sales compound.',
    button: 'Book a call →',
  },
}

const teliaSv: CaseStudy = {
  slug: 'telia-norway',
  accent: 'turquoise',
  kicker: 'Case study',
  client: 'Telia Norway',
  title: 'Förvandlade e-handel från en sekundär kanal till en skalbar tillväxtplattform.',
  intro:
    'Fördubblade konverteringen och lanserade Telia Norges första omnikanalprogram — en total plattformsombyggnad över B2C och B2B, en agil produktorganisation byggd från grunden, och en ombyggd performance-marketing-operation.',
  meta: [
    { label: 'Roll', value: 'E-Commerce Manager' },
    { label: 'Period', value: 'Aug 2014 – Jul 2017' },
    { label: 'Omfattning', value: 'E-handel · agilt · performance · omnikanal' },
    { label: 'Kontext', value: 'Norge — telekom, konsument & företag' },
  ],
  metrics: [
    { value: '2×', label: 'e-handelns konverteringsgrad', note: 'En 100-procentig ökning från ombyggnaden och optimeringsprogrammet' },
    { value: 'Ombyggd', label: 'plattform, B2C & B2B', note: 'Från en statisk säljsajt till en styrd produkt' },
    { value: '1:a', label: 'omnikanalprogrammet för Telia Norge', note: 'Kopplar ihop digital handel och fysisk butik' },
  ],
  overview: {
    heading: 'Från en stödjande kanal till en tillväxtplattform.',
    body: [
      'Telia Norge är ett av Skandinaviens största telekombolag och betjänar både konsument- och företagskunder. När jag klev in 2014 underpresterade den digitala säljkanalen: en oflexibel plattform som var långsam att utveckla, svag konvertering och ingen strukturerad modell för produktutveckling eller performance marketing. Digital handel fungerade som en sekundär kanal snarare än en central intäktsdrivare.',
      'Mitt uppdrag var att ändra på det. Jag tog ägarskap över e-handelsplattformen över B2C och B2B, byggde om den från grunden, etablerade en agil produktorganisation och transformerade bolagets sätt att arbeta med digitalt förvärv och mätning.',
      'Den nya plattformen fördubblade e-handelns konvertering och skapade grunden för Telia Norges första omnikanalprogram, som kopplade ihop resor online och i fysisk butik.',
    ],
  },
  startingPoint: {
    label: 'Utgångsläget',
    heading: 'En komplex kategori på en oflexibel plattform.',
    lead:
      'Telekom är en komplex e-handelskategori — kunder köper inte bara en produkt. En enda resa kan kräva att de:',
    points: [
      'Väljer ett abonnemang och en enhet',
      'Jämför avtalsstrukturer, data- och tjänstepotter',
      'Verifierar behörighet, flyttar ett nummer, klarar identitets- och kreditkontroller',
      'Väljer mellan leverans online och i butik',
      'Navigerar olika krav för konsument och företag',
    ],
    goal:
      'Telias befintliga plattform gjorde dessa resor svårare än nödvändigt — långsam att ändra, dyr att underhålla och dåligt lämpad för löpande optimering, utan en gemensam operativ modell som kopplade ihop e-handel, teknik, design, analys, media och fysisk butik. Möjligheten var att bygga om både plattformen och systemet runt den.',
  },
  ownership: {
    label: 'Vad jag ägde',
    heading: 'Digital handelsprestanda, från start till mål.',
    intro:
      'Jag hade helhetsansvar för Telia Norges digitala handel över B2C och B2B — och ledde ett team av utvecklare, designers, analytiker och kanalspecialister samtidigt som jag samordnade Marknad, Sälj, Teknik och Retail:',
    items: [
      'E-handelsstrategi & digital försäljning',
      'Webbshoppen som en produkt',
      'Plattformsombyggnad',
      'Konverteringsoptimering',
      'Produkt-roadmap & prioritering',
      'Agil utveckling',
      'Performance marketing',
      'Mätning & attribution',
      'Byråval & byråstyrning',
      'Betald sök, display & affiliates',
      'Omnikanalstrategi',
      'Tvärfunktionellt teamledarskap',
    ],
  },
  acts: [
    {
      label: 'Akt I',
      title: 'Bygga om e-handelsplattformen',
      subtitle: 'Från en statisk säljsajt till en flexibel, löpande optimerbar produkt.',
      blocks: [
        {
          title: 'En ombyggnad från grunden',
          body:
            'Den befintliga webbshoppen var för oflexibel för Telias digitala ambitioner — produktändringar, kampanjer och upplevelseförbättringar tog för lång tid att nå marknaden. Jag ledde en total ombyggnad, inriktad inte bara på att modernisera gränssnittet utan på en grund som kunde:',
          items: [
            'Förenkla komplexa köpresor',
            'Stödja både B2C- och B2B-erbjudanden',
            'Förbättra konvertering och göra kampanjer snabbare att lansera',
            'Möjliggöra löpande testning och minska beroendet av stora releaser',
            'Stödja framtida omnikanalförmågor',
          ],
        },
        {
          title: 'E-handel som en produkt',
          body:
            'Ombyggnaden skapade en mer flexibel grund för abonnemang, enheter, erbjudanden, kunddata och kommersiella kampanjer — och förändrade e-handelns roll inom Telia. Den blev en produkt med en aktivt styrd roadmap snarare än en statisk säljsajt.',
        },
      ],
    },
    {
      label: 'Akt II',
      title: 'Etablera agil produktutveckling',
      subtitle: 'Ett snabbare, mer kundfokuserat sätt att bygga digital handel.',
      blocks: [
        {
          title: 'Ett tvärfunktionellt produktteam',
          body:
            'En ny plattform ensam skulle inte lösa leveransproblemet. Jag etablerade ett agilt, tvärfunktionellt team som kombinerade utveckling, UX och design, analys, e-handel, kanalexpertis och kommersiella intressenter — med en strukturerad process för att definiera problem, prioritera roadmapen, bryta ner arbete i mindre releaser, köra cykler, mäta och iterera på evidens.',
        },
        {
          title: 'Inkrementell leverans, tydligare ägarskap',
          body:
            'Detta minskade kraftigt tiden att lansera funktioner, förbättringar och kampanjer. Istället för att vänta på stora releaser levererade teamet inkrementellt, lärde av beteende och förbättrade löpande — och e-handelsprestanda blev ett gemensamt tvärfunktionellt ansvar snarare än frånkopplade förfrågningar som skickades mellan avdelningar.',
        },
      ],
    },
    {
      label: 'Akt III',
      title: 'Fördubbla konverteringen',
      subtitle: 'Optimera köpresan med plattforms- och kommersiell prestanda mätta tillsammans.',
      blocks: [
        {
          title: 'Minska friktion hela vägen',
          body:
            'Med en flexibel plattform och snabbare leverans på plats ledde jag löpande optimering av köpresan och minskade friktion över:',
          items: [
            'Produktupptäckt och jämförelse av erbjudanden / abonnemang',
            'Enhetsval och checkout',
            'Formulär och validering',
            'B2B- och B2C-specifika resor',
            'Kampanjlandningssidor och mobilupplevelsen',
          ],
        },
        {
          title: 'Mätt tillsammans — en 100-procentig uppgång',
          body:
            'Produktutveckling och kommersiell prestanda mättes tillsammans, så att förändringar prioriterades efter sin effekt på beteende och försäljning snarare än interna antaganden. Den kombinerade ombyggnaden och optimeringen gav en 100-procentig ökning av e-handelns konvertering — och flyttade digital försäljning närmare en primär tillväxtkanal snarare än en stödjande yta.',
        },
      ],
    },
    {
      label: 'Akt IV',
      title: 'Bygga om performance marketing',
      subtitle: 'En mätbar, kommersiellt ansvarig förvärvsoperation.',
      blocks: [
        {
          title: 'Från aktivitetsmått till intäkter',
          body:
            'Telias modell för betalt förvärv behövde bli mätbar och ansvarig. Jag byggde om performance-marketing-operationen över betald sök, display och affiliates:',
          items: [
            'Välja och onboarda nya byråpartners',
            'Etablera kanalstrategier och tydligare kampanj- / kreativbriefs',
            'Införa performance-genomgångar och strukturerade optimeringsrutiner',
            'Förbättra mätning och attribution, koppla media till digital försäljning',
          ],
        },
        {
          title: 'Äga båda sidor av klicket',
          body:
            'Eftersom jag ägde både e-handelsupplevelsen och förvärvskanalerna kunde media-prestanda kopplas direkt till landningssidor, produktresor och konverteringsutfall — och gick bortom aktivitetsmått på kanalnivå för att förstå vilka investeringar som faktiskt bidrog till förvärv och intäkter.',
        },
      ],
    },
    {
      label: 'Akt V',
      title: 'Lansera Telias första omnikanalprogram',
      subtitle: 'Koppla ihop digital handel och fysisk butik till en väg till köp.',
      blocks: [
        {
          title: 'Koppla ihop online och offline',
          body:
            'Kunder tänkte inte på Telia som separata online- och offline-affärer — de förväntade sig att researcha i en kanal, fortsätta i en annan och få en konsekvent upplevelse. Internt hade digital handel och fysisk butik drivits som skilda resor. Jag ledde initiativet att koppla ihop dem, och samordnade digitalt förvärv, online-upptäckt, e-handel, fysiska butiker, kunddata och säljresor över B2C och B2B.',
        },
        {
          title: 'Omnikanal som en förmåga',
          body:
            'En kund kunde upptäcka ett erbjudande genom annonsering, researcha det online och slutföra köpet i en butik — eller börja i butik och fortsätta digitalt. Att koppla ihop dessa resor förbättrade kontinuiteten och gav Telia en starkare grund för att förstå hela vägen till köp, och etablerade omnikanal som en strategisk förmåga snarare än en samling isolerade kampanjer mellan kanaler.',
        },
      ],
    },
  ],
  results: {
    label: 'Resultat',
    heading: 'En plattform, en operativ modell och en ny förmåga.',
    intro: 'En ombyggnad som förändrade den digitala försäljningens kommersiella roll i organisationen.',
    items: [
      {
        value: '2×',
        title: 'Konvertering ökad med 100%',
        body:
          'Den nya plattformen, förenklade köpresor och det löpande optimeringsprogrammet fördubblade e-handelns konvertering.',
      },
      {
        value: 'Ombyggd',
        title: 'E-handelsplattformen ombyggd',
        body:
          'En total ombyggnad av Telia Norges webbshop över konsument- och företagssegment — mer flexibel, enklare att optimera och betydligt snabbare att utveckla, med releaser i mindre, snabbare cykler.',
      },
      {
        value: '1:a',
        title: 'Första omnikanalprogrammet lanserat',
        body:
          'Telia Norges första initiativ som kopplade ihop digital handel och fysisk butik över B2C och B2B — omnikanal etablerad som en strategisk förmåga, inte en engångskampanj.',
      },
      {
        value: 'Agilt',
        title: 'En agil produktorganisation, från grunden',
        body:
          'Jag skapade och ledde ett tvärfunktionellt team av utvecklare, designers, analytiker och kanalspecialister — och byggde om performance marketing med nya byråer, mätning och attribution över betald sök, display och affiliates.',
      },
    ],
  },
  keyLearnings: {
    label: 'Lärdomar',
    heading: 'Vad transformationen lärde mig.',
    items: [
      {
        title: 'Plattformstransformation kräver transformation av den operativa modellen.',
        body: 'Att bygga om tekniken skapade potential; det agila teamet gjorde löpande förbättring möjlig.',
      },
      {
        title: 'E-handel bör drivas som en produkt.',
        body: 'En roadmap baserad på kundbeteende och kommersiella utfall slår en kö av intressentförfrågningar.',
      },
      {
        title: 'Konvertering och förvärv måste optimeras tillsammans.',
        body: 'Media-effektivitet beror på vad som händer efter klicket; plattformsprestanda beror på kvaliteten på den förvärvade trafiken.',
      },
      {
        title: 'Komplexa produkter kräver enklare resor.',
        body: 'Den digitala upplevelsen bör absorbera telekomens svåra val och beroenden snarare än att skicka dem vidare till kunden.',
      },
      {
        title: 'Omnikanal är en kundresa, inte ett kanalprojekt.',
        body: 'Kunder rör sig naturligt mellan online och offline; organisationen och dess data behöver stödja det beteendet.',
      },
      {
        title: 'Snabbare leverans skapar kommersiell fördel.',
        body: 'Kortare releasecykler lät Telia svara snabbare på kampanjer, kundinsikt och marknadsförändringar.',
      },
    ],
  },
  role: {
    label: 'Min roll',
    heading: 'E-handelstransformation över B2C och B2B.',
    body:
      'Jag ledde Telia Norges e-handelstransformation och samordnade över Digital, Marknad, Sälj, Teknik, Analys och Retail:',
    items: [
      'E-handels- och digital försäljningsstrategi',
      'Total plattformsombyggnad',
      'Produkt-roadmap och prioritering',
      'Design och ledning av agilt team',
      'UX och konverteringsoptimering',
      'Performance-marketing-strategi',
      'Mätning och attribution',
      'Byråval och byråstyrning',
      'Betald sök, display och affiliates',
      'Omnikanalstrategi och implementering',
    ],
  },
  quote: {
    text:
      'Jag byggde om Telia Norges e-handelsplattform och operativa modell, fördubblade konverteringen, transformerade performance marketing, och lanserade bolagets första omnikanalprogram över B2C och B2B.',
    author: 'Erik Werner',
    role: 'E-Commerce Manager, Telia Norway',
  },
  cta: {
    heading: 'Gör e-handel till en tillväxtplattform?',
    body: 'Oavsett om det är en ombyggnad, ett skifte i operativ modell eller att koppla ihop online och offline — låt oss prata om systemet som får digital försäljning att växa med tiden.',
    button: 'Boka ett samtal →',
  },
}

export const caseStudies: Record<Lang, Record<string, CaseStudy>> = {
  en: { 'sands-entreprenad': sandsEn, 'leadfeeder-dealfront': leadfeederEn, 'funnel': funnelEn, 'rikstv-strim': rikstvEn, 'telia-norway': teliaEn, 'bnbalyze': bnbalyzeEn, 'happy-vegan': happyVeganEn },
  sv: { 'sands-entreprenad': sandsSv, 'leadfeeder-dealfront': leadfeederSv, 'funnel': funnelSv, 'rikstv-strim': rikstvSv, 'telia-norway': teliaSv, 'bnbalyze': bnbalyzeSv, 'happy-vegan': happyVeganSv },
}

// ── SEO helpers ──────────────────────────────────────────────────────────────

const SITE_URL = 'https://greow.digital'

export function caseUrl(lang: Lang, slug: string): string {
  return `${SITE_URL}${workBase[lang]}${slug}/`
}

// BreadcrumbList + Article JSON-LD for a case-study page.
export function caseJsonLd(lang: Lang, data: CaseStudy) {
  const home = lang === 'en' ? `${SITE_URL}/` : `${SITE_URL}/sv/`
  const workLabel = lang === 'en' ? 'Work' : 'Case'
  const url = caseUrl(lang, data.slug)

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Greow', item: home },
      { '@type': 'ListItem', position: 2, name: workLabel, item: `${SITE_URL}${workBase[lang]}` },
      { '@type': 'ListItem', position: 3, name: data.client, item: url },
    ],
  }

  const article = {
    '@type': 'Article',
    headline: data.title,
    description: data.intro,
    about: data.client,
    inLanguage: lang,
    url,
    author: { '@id': `${SITE_URL}/#erik` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: url,
  }

  return { '@context': 'https://schema.org', '@graph': [breadcrumb, article] }
}
