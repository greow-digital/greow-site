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
export const engagements: Record<Lang, Engagement[]> = {
  en: [
    { client: 'Funnel', logo: '/assets/logo-funnel.svg', metric: '0 → 20%', label: 'of MRR via Product-Led Growth, built from scratch in under a year.' },
    { client: 'Telia', logo: '/assets/logo-telia.svg', metric: '+100%', label: 'conversion rate after rebuilding the entire checkout.' },
    { client: 'Happy Vegan', logo: '/assets/logo-happyvegan.svg', metric: '2×', label: 'revenue in 6 months via SEO, CRO and paid search.' },
    { client: 'RiksTV / Strim', logo: '/assets/logo-rikstv.svg', metric: '−40%', label: 'CAC after introducing the STDC framework and performance rig.' },
  ],
  sv: [
    { client: 'Funnel', logo: '/assets/logo-funnel.svg', metric: '0 → 20%', label: 'av MRR via Product-Led Growth, byggt från noll på under ett år.' },
    { client: 'Telia', logo: '/assets/logo-telia.svg', metric: '+100%', label: 'konverteringsgrad efter en total ombyggnad av checkouten.' },
    { client: 'Happy Vegan', logo: '/assets/logo-happyvegan.svg', metric: '2×', label: 'omsättning på 6 månader via SEO, CRO och betald sök.' },
    { client: 'RiksTV / Strim', logo: '/assets/logo-rikstv.svg', metric: '−40%', label: 'CAC efter införandet av STDC-ramverket och en performance-rigg.' },
  ],
}

export const projects: Record<Lang, ProjectSummary[]> = {
  en: [
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
  ],
  sv: [
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
    { value: '17×', label: 'organic search visibility', note: '~90 → ~1,500 impressions/day (Search Console)' },
    { value: '7×', label: 'more leads, quarter over quarter', note: '7 (Jan–Mar) → ~50 (mid-Apr–mid-Jul)' },
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
          'Organic search impressions grew from ~90/day to ~1,500/day (Search Console) — a ~1,500% uplift — as the 80-page architecture, programmatic area pages, internal-linking structure and 301 consolidation matured. Organic went from a non-factor to a genuine channel, producing leads on its own for the first time.',
      },
      {
        value: '7×',
        title: 'Business impact — 7× more leads',
        body:
          'Across two comparable quarters, inbound leads rose from 7 (Jan–Mar) to ~50 (mid-Apr–mid-Jul) — roughly 7× — driven by the new platform, the multi-path funnel (roof test, chat widget, calculator, quote form) and the full Google presence.',
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
    { value: '17×', label: 'organisk synlighet i sök', note: '~90 → ~1 500 visningar/dag (Search Console)' },
    { value: '7×', label: 'fler leads, kvartal mot kvartal', note: '7 (jan–mar) → ~50 (mitten av apr–mitten av jul)' },
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
          'Organiska visningar växte från ~90/dag till ~1 500/dag (Search Console) — en uppgång på ~1 500% — i takt med att 80-sidorsarkitekturen, de programmatiska områdessidorna, den interna länkstrukturen och 301-konsolideringen mognade. Organiskt gick från icke-faktor till en genuin kanal som för första gången genererade leads på egen hand.',
      },
      {
        value: '7×',
        title: 'Affärseffekt — 7× fler leads',
        body:
          'Över två jämförbara kvartal steg inkommande leads från 7 (jan–mar) till ~50 (mitten av apr–mitten av jul) — ungefär 7× — drivet av den nya plattformen, tratten med flera vägar (taktest, chatt-widget, kalkylator, offertformulär) och hela Google-närvaron.',
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

export const caseStudies: Record<Lang, Record<string, CaseStudy>> = {
  en: { 'leadfeeder-dealfront': leadfeederEn, 'sands-entreprenad': sandsEn },
  sv: { 'leadfeeder-dealfront': leadfeederSv, 'sands-entreprenad': sandsSv },
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
