import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import CaseStudyView from '@/components/work/CaseStudy'
import { translations } from '@/lib/translations'
import { caseStudies, caseJsonLd } from '@/lib/work'

const t = translations.en
const data = caseStudies.en['bnbalyze']
const SITE_URL = 'https://greow.digital'
const OG_IMAGE = `${SITE_URL}/images/bnbalyze-og.png`
const URL_PATH = `${SITE_URL}/work/bnbalyze/`

export const metadata: Metadata = {
  title: `${data.client} — Case study · Greow`,
  description: data.intro,
  alternates: {
    canonical: URL_PATH,
    languages: {
      en: URL_PATH,
      sv: `${SITE_URL}/sv/case/bnbalyze/`,
      'x-default': URL_PATH,
    },
  },
  openGraph: {
    title: `${data.client} — ${data.title}`,
    description: data.intro,
    url: URL_PATH,
    type: 'article',
    images: [{ url: OG_IMAGE, width: 2502, height: 1092, alt: `${data.client} — Case study` }],
  },
}

export default function BnbalyzeCaseEn() {
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
