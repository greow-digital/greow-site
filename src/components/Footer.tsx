import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { workBase } from '@/lib/work'

interface FooterProps {
  t: Translations
  lang: 'en' | 'sv'
}

// Shared site footer. Home-page anchor links are made absolute so they also
// work from sub-pages (e.g. /work/*), where a bare "#pricing" would go nowhere.
export default function Footer({ t, lang }: FooterProps) {
  const home = lang === 'en' ? '/' : '/sv/'

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <span className="name">Erik Werner</span> · Greow · Growth as a Service · Stockholm
        </div>
        <div className="footer-links">
          <Link href={workBase[lang]}>{t.nav.work}</Link>
          {t.footer.links.map((link) => (
            <a key={link.label} href={link.href.startsWith('#') ? `${home}${link.href}` : link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
