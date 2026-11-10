import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { workBase } from '@/lib/work'
import { servicesFor } from '@/lib/services'
import { business, mapsUrl } from '@/lib/business'
import FooterMap from './FooterMap'

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
  // footer.left is "Name · rest"; the name gets its own emphasis.
  const [footerName, ...footerRest] = t.footer.left.split(' · ')
  const mapsLabel = lang === 'en' ? 'Open in Google Maps' : 'Öppna i Google Maps'

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <p>
            <span className="name">{footerName}</span> · {footerRest.join(' · ')}
          </p>
          <address className="footer-address">
            {business.legalName}
            <br />
            {business.streetAddress}
            <br />
            {business.postalCode} {business.locality}, {business.countryName[lang]}
            <br />
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              {mapsLabel} <span aria-hidden="true">↗</span>
            </a>
          </address>
          <FooterMap lang={lang} />
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <div className="footer-col">
            <span className="footer-col-title">{t.nav.services}</span>
            {servicesFor(lang).map((s) => (
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
