import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScrollReveal from '@/components/ScrollReveal'
import FounderPage from '@/components/FounderPage'
import { translations } from '@/lib/translations'
import { founderMetaByLang, founderJsonLd } from '@/lib/founder'

const t = translations.en
const meta = founderMetaByLang.en
const SITE_URL = 'https://greow.digital'
const URL = `${SITE_URL}${meta.path}`
const EN_URL = `${SITE_URL}${founderMetaByLang.en.path}`
const SV_URL = `${SITE_URL}${founderMetaByLang.sv.path}`
const PHOTO = `${SITE_URL}/images/erik-oliva-werner.jpg`

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: URL, languages: { en: EN_URL, sv: SV_URL, 'x-default': EN_URL } },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: URL,
    type: 'profile',
    locale: 'en_US',
    images: [{ url: PHOTO, width: 2048, height: 1365, alt: 'Erik Oliva Werner' }],
  },
  twitter: { card: 'summary_large_image', title: meta.title, description: meta.description, images: [PHOTO] },
}

const jsonLd = founderJsonLd('en')

export default function FounderEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav t={t.nav} lang="en" />
      <main>
        <FounderPage t={t} lang="en" />
      </main>
      <ScrollReveal />
    </>
  )
}
