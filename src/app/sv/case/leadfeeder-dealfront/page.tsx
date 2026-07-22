import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import CaseStudyView from '@/components/work/CaseStudy'
import { translations } from '@/lib/translations'
import { caseStudies, caseJsonLd } from '@/lib/work'

const t = translations.sv
const data = caseStudies.sv['leadfeeder-dealfront']
const SITE_URL = 'https://greow.digital'
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`
const URL_PATH = `${SITE_URL}/sv/case/leadfeeder-dealfront/`

export const metadata: Metadata = {
  title: `${data.client} — Case · Greow`,
  description: data.intro,
  alternates: {
    canonical: URL_PATH,
    languages: {
      en: `${SITE_URL}/work/leadfeeder-dealfront/`,
      sv: URL_PATH,
      'x-default': `${SITE_URL}/work/leadfeeder-dealfront/`,
    },
  },
  openGraph: {
    title: `${data.client} — ${data.title}`,
    description: data.intro,
    url: URL_PATH,
    type: 'article',
    locale: 'sv_SE',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${data.client} — Case` }],
  },
}

export default function LeadfeederCaseSv() {
  const jsonLd = caseJsonLd('sv', data)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav t={t.nav} lang="sv" />
      <main>
        <CaseStudyView t={t} lang="sv" data={data} />
      </main>
      <ScrollReveal />
    </>
  )
}
