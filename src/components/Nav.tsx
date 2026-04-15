import Link from 'next/link'
import type { Translations } from '@/lib/translations'

interface NavProps {
  t: Translations['nav']
  lang: 'en' | 'sv'
}

// Circular UK flag (English)
const FlagEN = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20, borderRadius: '50%', display: 'block', flexShrink: 0 }}>
    <defs>
      <clipPath id="flag-en-circle">
        <circle cx="10" cy="10" r="10" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-en-circle)">
      <rect width="20" height="20" fill="#012169" />
      {/* diagonal white */}
      <line x1="0" y1="0" x2="20" y2="20" stroke="white" strokeWidth="4" />
      <line x1="20" y1="0" x2="0" y2="20" stroke="white" strokeWidth="4" />
      {/* diagonal red */}
      <line x1="0" y1="0" x2="20" y2="20" stroke="#C8102E" strokeWidth="2.4" />
      <line x1="20" y1="0" x2="0" y2="20" stroke="#C8102E" strokeWidth="2.4" />
      {/* cross white */}
      <rect x="8" y="0" width="4" height="20" fill="white" />
      <rect x="0" y="8" width="20" height="4" fill="white" />
      {/* cross red */}
      <rect x="8.8" y="0" width="2.4" height="20" fill="#C8102E" />
      <rect x="0" y="8.8" width="20" height="2.4" fill="#C8102E" />
    </g>
  </svg>
)

// Circular Swedish flag
const FlagSV = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20, borderRadius: '50%', display: 'block', flexShrink: 0 }}>
    <defs>
      <clipPath id="flag-sv-circle">
        <circle cx="10" cy="10" r="10" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-sv-circle)">
      <rect width="20" height="20" fill="#006AA7" />
      <rect x="6" y="0" width="3" height="20" fill="#FECC02" />
      <rect x="0" y="8.5" width="20" height="3" fill="#FECC02" />
    </g>
  </svg>
)

const LogoIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="5" fill="#FF8773" />
    <ellipse cx="16" cy="7" rx="3.5" ry="5" fill="#A5DBC2" />
    <ellipse cx="16" cy="25" rx="3.5" ry="5" fill="#195B5A" />
    <ellipse cx="7.5" cy="12" rx="3.5" ry="5" transform="rotate(-45 7.5 12)" fill="#A5DBC2" />
    <ellipse cx="24.5" cy="12" rx="3.5" ry="5" transform="rotate(45 24.5 12)" fill="#A5DBC2" />
    <ellipse cx="7.5" cy="20" rx="3.5" ry="5" transform="rotate(45 7.5 20)" fill="#A5DBC2" />
    <ellipse cx="24.5" cy="20" rx="3.5" ry="5" transform="rotate(-45 24.5 20)" fill="#A5DBC2" />
  </svg>
)

export default function Nav({ t, lang }: NavProps) {
  const altHref = lang === 'en' ? '/sv/' : '/'
  const altLabel = lang === 'en' ? 'SV' : 'EN'
  const AltFlag = lang === 'en' ? FlagSV : FlagEN

  return (
    <nav>
      <div className="nav-inner">
        <Link href={lang === 'en' ? '/' : '/sv/'} className="nav-logo">
          <span className="logo-icon"><LogoIcon /></span>
          Greow
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#how">{t.how}</a>
          <a href="#pricing">{t.pricing}</a>
          <a href="#extras">{t.other}</a>
          <Link href={altHref} className="lang-switcher" aria-label={`Switch to ${altLabel}`}>
            <AltFlag />
            <span>{altLabel}</span>
          </Link>
          <a href="#book" className="nav-cta">{t.cta}</a>
        </div>

        {/* Mobile: flag switcher always visible */}
        <Link href={altHref} className="lang-switcher lang-switcher-mobile" aria-label={`Switch to ${altLabel}`}>
          <AltFlag />
          <span>{altLabel}</span>
        </Link>
      </div>
    </nav>
  )
}
