import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import AiGtmSystemsPage from '@/components/AiGtmSystemsPage'
import { translations } from '@/lib/translations'
import { aiGtmMetaByLang, aiGtmJsonLd } from '@/lib/aiGtmSystems'

const t = translations.sv
const meta = aiGtmMetaByLang.sv
const SITE_URL = 'https://greow.digital'
const URL = `${SITE_URL}${meta.path}`
const EN_URL = `${SITE_URL}${aiGtmMetaByLang.en.path}`
const OG_IMAGE = `${SITE_URL}/images/og-greow-sv.jpg`

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: URL, languages: { en: EN_URL, sv: URL, 'x-default': EN_URL } },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: URL,
    locale: 'sv_SE',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AI GTM-system — Greow' }],
  },
  twitter: { card: 'summary_large_image', title: meta.title, description: meta.description, images: [OG_IMAGE] },
}

const jsonLd = aiGtmJsonLd('sv')

export default function AiGtmSystemSv() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav t={t.nav} lang="sv" altHref={aiGtmMetaByLang.en.path} />
      <main id="main">
        <AiGtmSystemsPage t={t} lang="sv" />
      </main>
      <ScrollReveal />
    </>
  )
}
