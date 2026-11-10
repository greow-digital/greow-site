import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import AiGrowthConsultantPage from '@/components/AiGrowthConsultantPage'
import { translations } from '@/lib/translations'
import { aiGrowth, aiGrowthMeta } from '@/lib/aiGrowthConsultant'

const t = translations.en
const SITE_URL = 'https://greow.digital'
const URL = `${SITE_URL}${aiGrowthMeta.path}`
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`

// English only for now: no Swedish alternate until /sv/ai-tillvaxtkonsult/ exists.
export const metadata: Metadata = {
  title: aiGrowthMeta.title,
  description: aiGrowthMeta.description,
  alternates: { canonical: URL, languages: { en: URL, 'x-default': URL } },
  openGraph: {
    title: aiGrowthMeta.title,
    description: aiGrowthMeta.description,
    url: URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'AI Growth Consultant — Greow' }],
  },
  twitter: { card: 'summary_large_image', title: aiGrowthMeta.title, description: aiGrowthMeta.description, images: [OG_IMAGE] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'AI Growth Consulting',
      serviceType: 'AI growth consulting',
      description: aiGrowthMeta.description,
      url: URL,
      inLanguage: 'en',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: ['Sweden', 'Scandinavia', 'Europe'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI-Native Growth & GTM Consulting',
        itemListElement: aiGrowth.whatIDo.items.map((item) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: item.title, description: item.tagline },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: aiGrowth.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a.join(' ') },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Greow', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'AI Growth Consultant', item: URL },
      ],
    },
  ],
}

export default function AiGrowthConsultantEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav t={t.nav} lang="en" />
      <main>
        <AiGrowthConsultantPage t={t} />
      </main>
      <ScrollReveal />
    </>
  )
}
