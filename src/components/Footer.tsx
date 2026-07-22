import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { workBase } from '@/lib/work'
import { serviceNav } from '@/lib/services'

interface FooterProps {
  t: Translations
  lang: 'en' | 'sv'
}

// Shared site footer. Home-page anchor links are made absolute so they also
// work from sub-pages (e.g. /work/*, /growth-as-a-service/), where a bare
// "#pricing" would go nowhere.
export default function Footer({ t, lang }: FooterProps) {
  const home = lang === 'en' ? '/' : '/sv/'
  const moreLabel = lang === 'en' ? 'More' : 'Mer'

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <span className="name">Erik Werner</span> · Greow · Growth as a Service · Stockholm
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <div className="footer-col">
            <span className="footer-col-title">{t.nav.services}</span>
            {serviceNav.map((s) => (
              <Link key={s.key} href={s.url[lang]}>{s.label[lang]}</Link>
            ))}
          </div>
          <div className="footer-col">
            <span className="footer-col-title">{moreLabel}</span>
            <Link href={workBase[lang]}>{t.nav.work}</Link>
            {t.footer.links.map((link) => (
              <a key={link.label} href={link.href.startsWith('#') ? `${home}${link.href}` : link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  )
}
