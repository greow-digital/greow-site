// ── Service pages content ────────────────────────────────────────────────────
// Bilingual data for the four service landing pages, plus the nav/URL registry
// and a Service JSON-LD helper. One primary keyword per page (no cannibalisation).

import type { Lang } from './work'

const SITE_URL = 'https://greow.digital'

export interface ServiceSection {
  heading: string
  body?: string // may contain inline HTML links
  items?: string[] // may contain inline HTML (bold leads)
  links?: { label: string; href: string }[]
}

export interface ServiceContent {
  slug: string // matches a key in serviceNav
  meta: { title: string; description: string }
  h1: string
  sub: string
  sections: ServiceSection[]
  cta: { heading: string; button: string; href: string; links?: { label: string; href: string }[] }
  schema: { name: string; serviceType: string; description: string }
}

export interface ServiceNavItem {
  key: string
  label: Record<Lang, string>
  url: Record<Lang, string>
}

export const serviceNav: ServiceNavItem[] = [
  {
    key: 'gaas',
    label: { en: 'Growth as a Service', sv: 'Growth as a Service' },
    url: { en: '/growth-as-a-service/', sv: '/sv/growth-as-a-service/' },
  },
  {
    key: 'fractional',
    label: { en: 'Fractional Growth Lead', sv: 'Interim tillväxtchef' },
    url: { en: '/fractional-growth-lead/', sv: '/sv/interim-growth-lead/' },
  },
  {
    key: 'advisory',
    label: { en: 'Growth Advisory', sv: 'Growth Advisory' },
    url: { en: '/growth-advisory/', sv: '/sv/growth-advisory/' },
  },
  {
    key: 'coaching',
    label: { en: 'Coaching & Mentorship', sv: 'Coaching & mentorskap' },
    url: { en: '/growth-coaching/', sv: '/sv/growth-coaching/' },
  },
]

export function serviceUrl(key: string, lang: Lang): string {
  return serviceNav.find((s) => s.key === key)!.url[lang]
}

// ── English content ──────────────────────────────────────────────────────────

const servicesEn: Record<string, ServiceContent> = {
  gaas: {
    slug: 'gaas',
    meta: {
      title: 'Growth as a Service — A Senior Growth Partner On Demand | Greow',
      description:
        'Growth as a Service: senior growth leadership without a full-time hire. Direction, prioritisation and momentum for B2B SaaS, e-commerce and fintech. Based in Stockholm.',
    },
    h1: 'Growth as a Service',
    sub: 'Senior growth leadership — without the full-time hire.',
    sections: [
      {
        heading: 'What Growth as a Service means',
        body: 'Most companies don’t need another agency running more campaigns. They need someone senior to decide what actually matters and make it happen. Growth as a Service gives you that: a senior growth partner embedded in your team, setting direction, killing low-value work, and driving the few initiatives that move revenue — on a monthly retainer, not a 12-month contract.',
      },
      {
        heading: 'Who it’s for',
        body: 'Founders and teams in B2B SaaS, e-commerce and fintech who have traction but scattered effort — too many initiatives, unclear priorities, and no senior owner of growth. If you’re between “we can’t justify a full-time VP of Growth” and “an agency won’t own the outcome,” this is the gap it fills.',
      },
      {
        heading: 'How it works',
        items: [
          '<strong>Direction</strong> — we find the real constraint on growth, not the loudest one.',
          '<strong>Prioritisation</strong> — a focused roadmap; fewer bets, higher conviction.',
          '<strong>Momentum</strong> — weekly execution and iteration, with measurable outcomes you can see.',
        ],
      },
      {
        heading: 'What you get',
        body: 'A senior partner (not a junior account manager), a clear growth roadmap, hands-on execution across acquisition, activation and retention, and honest reporting on what’s working.',
        links: [
          { label: 'See pricing →', href: '/#pricing' },
          { label: 'See the work →', href: '/work/' },
        ],
      },
    ],
    cta: { heading: 'Ready to build your growth engine?', button: 'Book a call →', href: '/#book' },
    schema: {
      name: 'Growth as a Service',
      serviceType: 'Fractional growth leadership',
      description: 'Senior growth leadership on a monthly retainer for B2B SaaS, e-commerce and fintech.',
    },
  },
  fractional: {
    slug: 'fractional',
    meta: {
      title: 'Fractional Growth Lead — Senior Growth Leadership, Part-Time | Greow',
      description:
        'Hire a fractional growth lead: senior, hands-on growth leadership a few days a month. Own your roadmap without a full-time VP of Growth. B2B SaaS, e-commerce, fintech.',
    },
    h1: 'Fractional Growth Lead',
    sub: 'The senior growth owner your team needs — a few days a month.',
    sections: [
      {
        heading: 'What a fractional growth lead does',
        body: 'A fractional (or interim) growth lead is a senior operator who owns your growth function part-time. You get the judgment of a VP of Growth — roadmap, priorities, team direction, execution oversight — without the cost or commitment of a full-time hire. Ideal when growth has outgrown the founder’s attention but doesn’t yet justify a senior full-time role.',
      },
      {
        heading: 'When to bring one in',
        items: [
          'You’re scaling and no one senior owns growth end-to-end.',
          'You have marketers or agencies executing, but no one steering.',
          'You need to hire a growth team later — and want the right structure built first.',
          'You’re raising or post-raise and need to show a credible growth engine, fast.',
        ],
      },
      {
        heading: 'Fractional vs. full-time vs. agency',
        items: [
          '<strong>Full-time VP:</strong> €150k+/year and a 3-month hiring cycle. Overkill before product-market-fit-at-scale.',
          '<strong>Agency:</strong> executes tasks, rarely owns outcomes or strategy.',
          '<strong>Fractional growth lead:</strong> senior ownership, embedded in your team, from day one — at a fraction of the cost.',
        ],
      },
      {
        heading: 'How I work',
        body: 'Embedded a few days a month: I set the growth roadmap, prioritise ruthlessly, run execution with your team or partners, and report on real outcomes. Senior from the first call — no handoff to juniors.',
        links: [
          { label: 'See the work →', href: '/work/' },
          { label: 'See pricing →', href: '/#pricing' },
        ],
      },
    ],
    cta: { heading: 'Need a senior owner for growth?', button: 'Book a call →', href: '/#book' },
    schema: {
      name: 'Fractional Growth Lead',
      serviceType: 'Fractional / interim growth leadership',
      description: 'Senior, hands-on growth leadership part-time for B2B SaaS, e-commerce and fintech — roadmap ownership without a full-time VP of Growth.',
    },
  },
  advisory: {
    slug: 'advisory',
    meta: {
      title: 'Growth Advisory — A Senior Sounding Board for Founders | Greow',
      description:
        'Growth advisory for founders and leadership teams: senior, outside perspective on strategy, priorities and growth decisions. B2B SaaS, e-commerce and fintech. Stockholm.',
    },
    h1: 'Growth Advisory',
    sub: 'A senior sounding board — for the decisions that actually matter.',
    sections: [
      {
        heading: 'What growth advisory is',
        body: 'Sometimes you don’t need someone to run growth — you need someone senior to think with. Growth advisory is exactly that: a trusted outside perspective on your strategy, priorities and hardest growth decisions. Regular sessions where we pressure-test your thinking, challenge assumptions, and make sure you’re solving the right problem before you spend a quarter on the wrong one.',
      },
      {
        heading: 'Who it’s for',
        body: 'Founders, CEOs and leadership teams in B2B SaaS, e-commerce and fintech who already have capable people executing — but want a senior advisor to steer the big calls: positioning, pricing, channel strategy, when to hire, what to kill.',
      },
      {
        heading: 'How it works',
        items: [
          '<strong>Regular sessions</strong> — a recurring cadence (typically monthly or bi-weekly) built around your real decisions, not a fixed curriculum.',
          '<strong>On-call between sessions</strong> — a direct line for the questions that can’t wait.',
          '<strong>Clarity, not homework</strong> — you leave each session knowing what matters and what to ignore.',
        ],
      },
      {
        heading: 'Advisory vs. hands-on partnership',
        body: 'Choose advisory when you have execution covered and need senior judgment. Choose <a href="/growth-as-a-service/">Growth as a Service</a> or a <a href="/fractional-growth-lead/">fractional growth lead</a> when you need someone to own and drive the work. Not sure which? <a href="/#book">Book a call →</a>',
      },
    ],
    cta: {
      heading: 'Want a senior advisor in your corner?',
      button: 'Book a call →',
      href: '/#book',
      links: [{ label: 'See the work →', href: '/work/' }],
    },
    schema: {
      name: 'Growth Advisory',
      serviceType: 'Growth advisory',
      description: 'A senior outside perspective on strategy, priorities and growth decisions for founders and leadership teams in B2B SaaS, e-commerce and fintech.',
    },
  },
  coaching: {
    slug: 'coaching',
    meta: {
      title: 'Growth Coaching & Mentorship — Level Up as a Growth Leader | Greow',
      description:
        '1:1 growth coaching and mentorship for marketers and founders growing into growth leadership. Practical, senior guidance over 6, 10 or 20 sessions. Remote or Stockholm.',
    },
    h1: 'Coaching & Mentorship',
    sub: 'Grow as a growth leader — with a senior operator in your corner.',
    sections: [
      {
        heading: 'Coaching built for growth people',
        body: 'Whether you’re a marketer stepping into growth, a founder owning growth yourself, or a growth lead without a senior peer to learn from — this is 1:1 coaching from someone who’s done the work. Not generic career coaching: practical, specific guidance on the real problems on your desk right now.',
      },
      {
        heading: 'Who it’s for',
        items: [
          'Marketers moving into a growth role and building the skillset.',
          'Founders running growth themselves who want to do it better.',
          'Growth leads who are senior in title but want a mentor a step ahead.',
        ],
      },
      {
        heading: 'What we work on',
        body: 'Prioritisation and focus · experimentation and measurement · acquisition, activation and retention · stakeholder and leadership skills · career direction. We shape it around your goals, not a fixed syllabus.',
      },
      {
        heading: 'How it works',
        body: 'Packages of 6, 10 or 20 sessions, run remotely or in Stockholm. Regular 1:1s, real work between them, and honest feedback. You set the goals; I help you get there faster.',
      },
    ],
    cta: {
      heading: 'Ready to level up?',
      button: 'Book a call →',
      href: '/#book',
      links: [{ label: 'See pricing →', href: '/#pricing' }],
    },
    schema: {
      name: 'Growth Coaching & Mentorship',
      serviceType: 'Coaching',
      description: '1:1 growth coaching and mentorship for marketers and founders growing into growth leadership, over 6, 10 or 20 sessions.',
    },
  },
}

// ── Swedish content ──────────────────────────────────────────────────────────

const servicesSv: Record<string, ServiceContent> = {
  gaas: {
    slug: 'gaas',
    meta: {
      title: 'Growth as a Service — En senior tillväxtpartner på deltid | Greow',
      description:
        'Growth as a Service: senior tillväxtkompetens utan att anställa heltid. Riktning, prioritering och momentum för B2B SaaS, e-handel och fintech. Baserad i Stockholm.',
    },
    h1: 'Growth as a Service',
    sub: 'Senior tillväxtkompetens — utan att anställa heltid.',
    sections: [
      {
        heading: 'Vad Growth as a Service innebär',
        body: 'De flesta bolag behöver inte ännu en byrå som drar fler kampanjer. De behöver någon senior som avgör vad som faktiskt spelar roll — och får det gjort. Growth as a Service ger dig just det: en senior tillväxtpartner som jobbar nära ditt team, sätter riktning, rensar bort lågvärdesarbete och driver de få initiativ som faktiskt påverkar intäkterna — på månadsbasis, inte på ett tolvmånaderskontrakt.',
      },
      {
        heading: 'Vem det passar',
        body: 'Grundare och team inom B2B SaaS, e-handel och fintech som har tempo men splittrat fokus — för många initiativ, otydliga prioriteringar och ingen senior som äger tillväxten. Om du befinner dig mellan “vi kan inte motivera en heltidsanställd tillväxtchef” och “en byrå tar inte ansvar för resultatet” — då är det här luckan som fylls.',
      },
      {
        heading: 'Så fungerar det',
        items: [
          '<strong>Riktning</strong> — vi hittar den verkliga flaskhalsen för tillväxt, inte den som hörs mest.',
          '<strong>Prioritering</strong> — en fokuserad roadmap; färre satsningar, högre övertygelse.',
          '<strong>Momentum</strong> — veckovis exekvering och iteration, med mätbara resultat du kan se.',
        ],
      },
      {
        heading: 'Vad du får',
        body: 'En senior partner (inte en junior projektledare), en tydlig tillväxt-roadmap, praktisk exekvering inom förvärv, aktivering och retention, och ärlig rapportering på vad som fungerar.',
        links: [
          { label: 'Se priser →', href: '/sv/#pricing' },
          { label: 'Se casestudier →', href: '/sv/case/' },
        ],
      },
    ],
    cta: { heading: 'Redo att bygga din tillväxtmotor?', button: 'Boka ett samtal →', href: '/sv/#book' },
    schema: {
      name: 'Growth as a Service',
      serviceType: 'Fractional growth leadership',
      description: 'Senior tillväxtledning på månadsbasis för B2B SaaS, e-handel och fintech.',
    },
  },
  fractional: {
    slug: 'fractional',
    meta: {
      title: 'Interim tillväxtchef — Senior tillväxtledning på deltid | Greow',
      description:
        'Anlita en interim tillväxtchef (fractional growth lead): senior, praktisk tillväxtledning några dagar i månaden. Äg din roadmap utan en heltidsanställd tillväxtchef.',
    },
    h1: 'Interim tillväxtchef',
    sub: 'Den seniora tillväxtägaren ditt team behöver — några dagar i månaden.',
    sections: [
      {
        heading: 'Vad en interim tillväxtchef gör',
        body: 'En interim (eller fraktionell) tillväxtchef är en senior operatör som äger din tillväxtfunktion på deltid. Du får omdömet från en tillväxtchef — roadmap, prioriteringar, riktning för teamet, koll på exekveringen — utan kostnaden och bindningen för en heltidsanställning. Perfekt när tillväxten har vuxit ur grundarens tid, men ännu inte motiverar en senior heltidsroll.',
      },
      {
        heading: 'När du bör ta in en',
        items: [
          'Ni skalar och ingen senior äger tillväxten från början till slut.',
          'Ni har marknadsförare eller byråer som exekverar — men ingen som styr.',
          'Ni ska bygga ett tillväxtteam längre fram och vill ha rätt struktur på plats först.',
          'Ni tar in kapital eller är precis efter en runda och behöver visa en trovärdig tillväxtmotor, snabbt.',
        ],
      },
      {
        heading: 'Interim vs. heltid vs. byrå',
        items: [
          '<strong>Heltidsanställd tillväxtchef:</strong> 1,5 MSEK+/år och tre månaders rekrytering. Överdrivet innan ni skalar på riktigt.',
          '<strong>Byrå:</strong> utför uppgifter, men äger sällan strategin eller resultatet.',
          '<strong>Interim tillväxtchef:</strong> senior ägare, en del av ditt team, från dag ett — till en bråkdel av kostnaden.',
        ],
      },
      {
        heading: 'Så jobbar jag',
        body: 'Nära ert team några dagar i månaden: jag sätter tillväxt-roadmapen, prioriterar stenhårt, driver exekveringen med ert team eller era partners och rapporterar på verkliga resultat. Senior från första samtalet — ingen överlämning till juniorer.',
        links: [
          { label: 'Se casestudier →', href: '/sv/case/' },
          { label: 'Se priser →', href: '/sv/#pricing' },
        ],
      },
    ],
    cta: { heading: 'Behöver ni en senior ägare för tillväxten?', button: 'Boka ett samtal →', href: '/sv/#book' },
    schema: {
      name: 'Interim tillväxtchef',
      serviceType: 'Fractional / interim growth leadership',
      description: 'Senior, praktisk tillväxtledning på deltid för B2B SaaS, e-handel och fintech — ägarskap av roadmapen utan en heltidsanställd tillväxtchef.',
    },
  },
  advisory: {
    slug: 'advisory',
    meta: {
      title: 'Growth Advisory — Ett senior bollplank för grundare | Greow',
      description:
        'Growth advisory för grundare och ledningsteam: ett senior, externt perspektiv på strategi, prioriteringar och tillväxtbeslut. B2B SaaS, e-handel och fintech. Stockholm.',
    },
    h1: 'Growth Advisory',
    sub: 'Ett senior bollplank — för besluten som faktiskt spelar roll.',
    sections: [
      {
        heading: 'Vad growth advisory är',
        body: 'Ibland behöver du inte någon som driver tillväxten — du behöver någon senior att tänka med. Growth advisory är precis det: ett externt perspektiv du kan lita på, kring din strategi, dina prioriteringar och dina svåraste tillväxtbeslut. Återkommande sessioner där vi stresstestar ditt tänk, utmanar antaganden och säkerställer att du löser rätt problem — innan du lägger ett kvartal på fel.',
      },
      {
        heading: 'Vem det passar',
        body: 'Grundare, vd:ar och ledningsteam inom B2B SaaS, e-handel och fintech som redan har kompetenta personer som exekverar — men vill ha en senior rådgivare för de stora besluten: positionering, prissättning, kanalstrategi, när ni ska anställa, vad ni ska lägga ner.',
      },
      {
        heading: 'Så fungerar det',
        items: [
          '<strong>Återkommande sessioner</strong> — en fast kadens (oftast varje eller varannan vecka, eller månadsvis) byggd kring dina verkliga beslut, inte ett förbestämt upplägg.',
          '<strong>Tillgänglig mellan sessionerna</strong> — en direktlinje för frågorna som inte kan vänta.',
          '<strong>Klarhet, inte läxor</strong> — du lämnar varje session med koll på vad som spelar roll och vad du kan ignorera.',
        ],
      },
      {
        heading: 'Advisory vs. praktiskt partnerskap',
        body: 'Välj advisory när ni har exekveringen på plats och behöver seniort omdöme. Välj <a href="/sv/growth-as-a-service/">Growth as a Service</a> eller en <a href="/sv/interim-growth-lead/">interim tillväxtchef</a> när ni behöver någon som äger och driver arbetet. Osäker på vilket? <a href="/sv/#book">Boka ett samtal →</a>',
      },
    ],
    cta: {
      heading: 'Vill du ha en senior rådgivare vid din sida?',
      button: 'Boka ett samtal →',
      href: '/sv/#book',
      links: [{ label: 'Se casestudier →', href: '/sv/case/' }],
    },
    schema: {
      name: 'Growth Advisory',
      serviceType: 'Growth advisory',
      description: 'Ett senior externt perspektiv på strategi, prioriteringar och tillväxtbeslut för grundare och ledningsteam inom B2B SaaS, e-handel och fintech.',
    },
  },
  coaching: {
    slug: 'coaching',
    meta: {
      title: 'Growth-coaching & mentorskap — Väx som tillväxtledare | Greow',
      description:
        '1:1 growth-coaching och mentorskap för marknadsförare och grundare som växer in i tillväxtledarskap. Praktisk, senior vägledning över 6, 10 eller 20 sessioner.',
    },
    h1: 'Coaching & mentorskap',
    sub: 'Väx som tillväxtledare — med en senior operatör vid din sida.',
    sections: [
      {
        heading: 'Coaching byggd för growth-människor',
        body: 'Oavsett om du är en marknadsförare på väg in i growth, en grundare som äger tillväxten själv, eller en growth lead utan en senior kollega att lära av — det här är 1:1-coaching från någon som gjort jobbet. Ingen generisk karriärcoaching: praktisk, konkret vägledning kring de verkliga problem som ligger på ditt bord just nu.',
      },
      {
        heading: 'Vem det passar',
        items: [
          'Marknadsförare som går in i en growth-roll och bygger kompetensen.',
          'Grundare som driver tillväxten själva och vill göra det bättre.',
          'Growth leads som är seniora på titeln men vill ha en mentor ett steg före.',
        ],
      },
      {
        heading: 'Vad vi jobbar med',
        body: 'Prioritering och fokus · experiment och mätning · förvärv, aktivering och retention · ledarskap och att hantera intressenter · karriärriktning. Vi formar det efter dina mål, inte ett förbestämt upplägg.',
      },
      {
        heading: 'Så fungerar det',
        body: 'Paket om 6, 10 eller 20 sessioner, på distans eller i Stockholm. Regelbundna 1:1-samtal, riktigt arbete mellan dem och ärlig feedback. Du sätter målen; jag hjälper dig nå dem snabbare.',
      },
    ],
    cta: {
      heading: 'Redo att ta nästa steg?',
      button: 'Boka ett samtal →',
      href: '/sv/#book',
      links: [{ label: 'Se priser →', href: '/sv/#pricing' }],
    },
    schema: {
      name: 'Growth-coaching & mentorskap',
      serviceType: 'Coaching',
      description: '1:1 growth-coaching och mentorskap för marknadsförare och grundare som växer in i tillväxtledarskap, över 6, 10 eller 20 sessioner.',
    },
  },
}

export const services: Record<Lang, Record<string, ServiceContent>> = {
  en: servicesEn,
  sv: servicesSv,
}

// Service JSON-LD tied to the existing #organization node.
export function serviceJsonLd(lang: Lang, key: string) {
  const content = services[lang][key]
  const areaServed = lang === 'en' ? ['Sweden', 'Scandinavia', 'Europe'] : ['Sverige', 'Skandinavien', 'Europa']
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.schema.name,
    serviceType: content.schema.serviceType,
    description: content.schema.description,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed,
    inLanguage: lang,
    url: `${SITE_URL}${serviceUrl(key, lang)}`,
  }
}
