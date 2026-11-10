import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import AiGtmSystemsPage from '@/components/AiGtmSystemsPage'
import { translations } from '@/lib/translations'
import { aiGtmMetaByLang, aiGtmJsonLd } from '@/lib/aiGtmSystems'

const t = translations.en
const SITE_URL = 'https://greow.digital'
const URL = `${SITE_URL}${aiGtmMetaByLang.en.path}`
const SV_URL = `${SITE_URL}${aiGtmMetaByLang.sv.path}`
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`

export const metadata: Metadata = {
  title: aiGtmMetaByLang.en.title,
  description: aiGtmMetaByLang.en.description,
  alternates: { canonical: URL, languages: { en: URL, sv: SV_URL, 'x-default': URL } },
  openGraph: {
    title: aiGtmMetaByLang.en.title,
    description: aiGtmMetaByLang.en.description,
    url: URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AI GTM Systems — Greow' }],
  },
  twitter: { card: 'summary_large_image', title: aiGtmMetaByLang.en.title, description: aiGtmMetaByLang.en.description, images: [OG_IMAGE] },
}

const jsonLd = aiGtmJsonLd('en')

export default function AiGtmSystemsEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav t={t.nav} lang="en" altHref={aiGtmMetaByLang.sv.path} />
      <main>
        <AiGtmSystemsPage t={t} lang="en" />
      </main>
      <ScrollReveal />
    </>
  )
}
