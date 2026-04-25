import type { Metadata } from 'next'
import { ubuntu, sourceSans } from '@/lib/fonts'
import { translations } from '@/lib/translations'
import '../globals.css'

const t = translations.en
const SITE_URL = 'https://greow.digital'
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: t.meta.title,
  description: t.meta.description,
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      sv: `${SITE_URL}/sv/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    url: `${SITE_URL}/`,
    siteName: 'Greow',
    locale: 'en_US',
    alternateLocale: ['sv_SE'],
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Greow — Growth as a Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.meta.title,
    description: t.meta.description,
    images: [OG_IMAGE],
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Greow',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: OG_IMAGE,
    description: t.meta.description,
    address: { '@type': 'PostalAddress', addressLocality: 'Stockholm', addressCountry: 'SE' },
    founder: { '@id': `${SITE_URL}/#erik` },
  }
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#erik`,
    name: 'Erik Oliva Werner',
    jobTitle: 'Founder & Senior Growth Advisor',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/erik.jpg`,
    address: { '@type': 'PostalAddress', addressLocality: 'Stockholm', addressCountry: 'SE' },
  }
  const service = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: 'Greow — Growth as a Service',
    url: SITE_URL,
    description: t.meta.description,
    inLanguage: 'en',
    image: OG_IMAGE,
    provider: { '@id': `${SITE_URL}/#organization` },
    founder: { '@id': `${SITE_URL}/#erik` },
    address: { '@type': 'PostalAddress', addressLocality: 'Stockholm', addressCountry: 'SE' },
    serviceType: 'Growth as a Service',
    areaServed: ['Sweden', 'Scandinavia', 'Europe'],
    knowsAbout: ['Product-Led Growth', 'B2B SaaS', 'Demand Generation', 'Experimentation', 'Pricing Strategy'],
  }
  const jsonLd = { '@context': 'https://schema.org', '@graph': [organization, person, service] }

  return (
    <html lang="en" className={`${ubuntu.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
