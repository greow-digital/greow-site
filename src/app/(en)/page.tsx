import Nav from '@/components/Nav'
import HomePage from '@/components/HomePage'
import ScrollReveal from '@/components/ScrollReveal'
import { translations } from '@/lib/translations'
import Script from 'next/script'

const t = translations.en

export default function EnPage() {
  return (
    <>
      <Nav t={t.nav} lang="en" />
      <main>
        <HomePage t={t} lang="en" />
      </main>
      <ScrollReveal />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}
