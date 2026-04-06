import Link from 'next/link'
import type { Translations } from '@/lib/translations'

interface NavProps {
  t: Translations['nav']
  lang: 'en' | 'sv'
}

export default function Nav({ t, lang }: NavProps) {
  const altHref = lang === 'en' ? '/sv/' : '/'
  const altLabel = lang === 'en' ? 'SV' : 'EN'

  return (
    <nav>
      <div className="nav-inner">
        <Link href={lang === 'en' ? '/' : '/sv/'} className="nav-logo">
          <span className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="5" fill="#FF8773" />
              <ellipse cx="16" cy="7" rx="3.5" ry="5" fill="#A5DBC2" />
              <ellipse cx="16" cy="25" rx="3.5" ry="5" fill="#195B5A" />
              <ellipse cx="7.5" cy="12" rx="3.5" ry="5" transform="rotate(-45 7.5 12)" fill="#A5DBC2" />
              <ellipse cx="24.5" cy="12" rx="3.5" ry="5" transform="rotate(45 24.5 12)" fill="#A5DBC2" />
              <ellipse cx="7.5" cy="20" rx="3.5" ry="5" transform="rotate(45 7.5 20)" fill="#A5DBC2" />
              <ellipse cx="24.5" cy="20" rx="3.5" ry="5" transform="rotate(-45 24.5 20)" fill="#A5DBC2" />
            </svg>
          </span>
          Greow
        </Link>
        <div className="nav-links">
          <a href="#how">{t.how}</a>
          <a href="#pricing">{t.pricing}</a>
          <a href="#extras">{t.other}</a>
          <Link href={altHref} className="lang-switcher">{altLabel}</Link>
          <a href="#book" className="nav-cta">{t.cta}</a>
        </div>
      </div>
    </nav>
  )
}
