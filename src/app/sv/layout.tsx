import type { Metadata } from 'next'
import { ubuntu, sourceSans } from '@/lib/fonts'
import { translations } from '@/lib/translations'
import '../globals.css'

const t = translations.sv

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: 'https://greow.digital/sv/',
    languages: {
      en: 'https://greow.digital/',
      sv: 'https://greow.digital/sv/',
    },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    url: 'https://greow.digital/sv/',
    siteName: 'Greow',
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: t.meta.title,
    description: t.meta.description,
  },
}

export default function SvLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Greow',
    url: 'https://greow.digital',
    description: t.meta.description,
    founder: { '@type': 'Person', name: 'Erik Werner' },
    address: { '@type': 'PostalAddress', addressLocality: 'Stockholm', addressCountry: 'SE' },
    serviceType: 'Growth as a Service',
    areaServed: ['Sverige', 'Skandinavien', 'Europa'],
    knowsAbout: ['Product-Led Growth', 'B2B SaaS', 'Demand Generation', 'Experimentation', 'Pricing Strategy'],
  }

  return (
    <html lang="sv" className={`${ubuntu.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="alternate" hrefLang="en" href="https://greow.digital/" />
        <link rel="alternate" hrefLang="sv" href="https://greow.digital/sv/" />
        <link rel="alternate" hrefLang="x-default" href="https://greow.digital/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
