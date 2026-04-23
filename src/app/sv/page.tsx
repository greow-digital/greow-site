import Nav from '@/components/Nav'
import HomePage from '@/components/HomePage'
import ScrollReveal from '@/components/ScrollReveal'
import { translations } from '@/lib/translations'

const t = translations.sv

export default function SvPage() {
  return (
    <>
      <Nav t={t.nav} lang="sv" />
      <main>
        <HomePage t={t} lang="sv" />
      </main>
      <ScrollReveal />
    </>
  )
}
