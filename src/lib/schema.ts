// ── Site-wide JSON-LD graph ──────────────────────────────────────────────────
// WebSite + Organization + Person + ProfessionalService, shared by the EN and SV
// root layouts so the founder/company entity is described identically.

import type { Lang } from './work'
import { translations } from './translations'

const SITE_URL = 'https://greow.digital'
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`

const copy = {
  en: {
    jobTitle: 'Founder, AI-Native Growth & GTM Partner',
    personDescription:
      'Senior growth and go-to-market leader based in Stockholm, Sweden. Former growth leader at Funnel and Leadfeeder/Dealfront; combines growth strategy with hands-on, AI-native execution.',
    serviceName: 'Greow — AI-Native Growth & GTM Partner',
    areaServed: ['Sweden', 'Scandinavia', 'Europe'],
    capabilities: ['Growth Strategy & Advisory', 'AI-Native Growth & GTM Systems', 'Hands-on Growth Execution'],
  },
  sv: {
    jobTitle: 'Grundare, AI-native growth- & GTM-partner',
    personDescription:
      'Senior growth- och go-to-market-ledare baserad i Stockholm. Tidigare growth-ledare på Funnel och Leadfeeder/Dealfront; kombinerar tillväxtstrategi med praktiskt, AI-native genomförande.',
    serviceName: 'Greow — AI-native growth- & GTM-partner',
    areaServed: ['Sverige', 'Skandinavien', 'Europa'],
    capabilities: ['Tillväxtstrategi & rådgivning', 'AI-native growth- & GTM-system', 'Praktiskt growth-genomförande'],
  },
} as const

export function siteGraph(lang: Lang) {
  const t = translations[lang]
  const c = copy[lang]
  const home = lang === 'en' ? `${SITE_URL}/` : `${SITE_URL}/sv/`
  const address = {
    '@type': 'PostalAddress',
    addressLocality: 'Stockholm',
    addressRegion: 'Stockholm',
    addressCountry: 'SE',
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: 'Greow',
    alternateName: 'Greow Digital',
    inLanguage: ['en', 'sv'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Greow',
    alternateName: 'Greow Digital',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: OG_IMAGE,
    description: t.meta.description,
    address,
    founder: { '@id': `${SITE_URL}/#erik` },
  }
  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#erik`,
    name: 'Erik Werner',
    alternateName: 'Erik Oliva Werner',
    jobTitle: c.jobTitle,
    description: c.personDescription,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/erik.jpg`,
    homeLocation: { '@type': 'Place', name: 'Stockholm, Sweden', address },
    knowsAbout: [
      'Growth strategy',
      'Go-to-market strategy',
      'Product-led growth',
      'B2B SaaS',
      'AI-native growth systems',
      'Marketing automation',
      'Experimentation',
      'Pricing and packaging',
      'Demand generation',
    ],
  }
  const service = {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: c.serviceName,
    url: home,
    description: t.meta.description,
    inLanguage: lang,
    image: OG_IMAGE,
    provider: { '@id': `${SITE_URL}/#organization` },
    founder: { '@id': `${SITE_URL}/#erik` },
    address,
    areaServed: c.areaServed,
    serviceType: c.capabilities,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: c.serviceName,
      itemListElement: c.capabilities.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  }

  return { '@context': 'https://schema.org', '@graph': [website, organization, person, service] }
}
