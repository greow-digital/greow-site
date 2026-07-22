import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import WorkIndex from '@/components/work/WorkIndex'
import { translations } from '@/lib/translations'
import { workIndexCopy } from '@/lib/work'

const t = translations.sv
const copy = workIndexCopy.sv
const SITE_URL = 'https://greow.digital'
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: {
    canonical: `${SITE_URL}/sv/case/`,
    languages: {
      en: `${SITE_URL}/work/`,
      sv: `${SITE_URL}/sv/case/`,
      'x-default': `${SITE_URL}/work/`,
    },
  },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: `${SITE_URL}/sv/case/`,
    locale: 'sv_SE',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Greow — Case' }],
  },
}

export default function SvCasePage() {
  return (
    <>
      <Nav t={t.nav} lang="sv" />
      <main>
        <WorkIndex t={t} lang="sv" />
      </main>
      <ScrollReveal />
    </>
  )
}
