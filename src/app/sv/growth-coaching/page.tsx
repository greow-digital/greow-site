import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import ServicePage from '@/components/ServicePage'
import { translations } from '@/lib/translations'
import { services, serviceUrl, serviceJsonLd } from '@/lib/services'

const t = translations.sv
const content = services.sv['coaching']
const SITE_URL = 'https://greow.digital'
const EN = `${SITE_URL}${serviceUrl('coaching', 'en')}`
const SV = `${SITE_URL}${serviceUrl('coaching', 'sv')}`
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: SV, languages: { en: EN, sv: SV, 'x-default': EN } },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: SV,
    locale: 'sv_SE',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: content.h1 }],
  },
}

export default function GrowthCoachingSv() {
  const jsonLd = serviceJsonLd('sv', 'coaching')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav t={t.nav} lang="sv" />
      <main>
        <ServicePage t={t} lang="sv" content={content} />
      </main>
      <ScrollReveal />
    </>
  )
}
