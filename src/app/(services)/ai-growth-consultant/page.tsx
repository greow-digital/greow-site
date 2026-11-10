import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import AiGrowthConsultantPage from '@/components/AiGrowthConsultantPage'
import { translations } from '@/lib/translations'
import { aiGrowthMeta, aiGrowthMetaByLang, aiGrowthJsonLd } from '@/lib/aiGrowthConsultant'

const t = translations.en
const SITE_URL = 'https://greow.digital'
const URL = `${SITE_URL}${aiGrowthMeta.path}`
const SV_URL = `${SITE_URL}${aiGrowthMetaByLang.sv.path}`
const OG_IMAGE = `${SITE_URL}/images/og-greow-en.jpg`

export const metadata: Metadata = {
  title: aiGrowthMeta.title,
  description: aiGrowthMeta.description,
  alternates: { canonical: URL, languages: { en: URL, sv: SV_URL, 'x-default': URL } },
  openGraph: {
    title: aiGrowthMeta.title,
    description: aiGrowthMeta.description,
    url: URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AI Growth Consultant — Greow' }],
  },
  twitter: { card: 'summary_large_image', title: aiGrowthMeta.title, description: aiGrowthMeta.description, images: [OG_IMAGE] },
}

const jsonLd = aiGrowthJsonLd('en')

export default function AiGrowthConsultantEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav t={t.nav} lang="en" altHref={aiGrowthMetaByLang.sv.path} />
      <main id="main">
        <AiGrowthConsultantPage t={t} lang="en" />
      </main>
      <ScrollReveal />
    </>
  )
}
