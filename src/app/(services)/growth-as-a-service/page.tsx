import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import ServicePage from '@/components/ServicePage'
import { translations } from '@/lib/translations'
import { services, serviceUrl, serviceJsonLd } from '@/lib/services'

const t = translations.en
const content = services.en['gaas']
const SITE_URL = 'https://greow.digital'
const EN = `${SITE_URL}${serviceUrl('gaas', 'en')}`
const SV = `${SITE_URL}${serviceUrl('gaas', 'sv')}`
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: EN, languages: { en: EN, sv: SV, 'x-default': EN } },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: EN,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: content.h1 }],
  },
}

export default function GrowthAsAServiceEn() {
  const jsonLd = serviceJsonLd('en', 'gaas')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav t={t.nav} lang="en" />
      <main>
        <ServicePage t={t} lang="en" content={content} />
      </main>
      <ScrollReveal />
    </>
  )
}
