import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import CaseStudyView from '@/components/work/CaseStudy'
import { translations } from '@/lib/translations'
import { caseStudies, caseJsonLd } from '@/lib/work'

const t = translations.en
const data = caseStudies.en['refapp']
const SITE_URL = 'https://greow.digital'
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`
const URL_PATH = `${SITE_URL}/work/refapp/`

export const metadata: Metadata = {
  title: `${data.client} — Case study · Greow`,
  description: data.intro,
  alternates: {
    canonical: URL_PATH,
    languages: {
      en: URL_PATH,
      sv: `${SITE_URL}/sv/case/refapp/`,
      'x-default': URL_PATH,
    },
  },
  openGraph: {
    title: `${data.client} — ${data.title}`,
    description: data.intro,
    url: URL_PATH,
    type: 'article',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${data.client} — Case study` }],
  },
}

export default function RefappCaseEn() {
  const jsonLd = caseJsonLd('en', data)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav t={t.nav} lang="en" />
      <main>
        <CaseStudyView t={t} lang="en" data={data} />
      </main>
      <ScrollReveal />
    </>
  )
}
