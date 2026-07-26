'use client'
import Link from 'next/link'
import { useState } from 'react'
import type { Translations } from '@/lib/translations'
import { workBase } from '@/lib/work'
import { serviceNav } from '@/lib/services'

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
  const [open, setOpen] = useState(false)
  const home = lang === 'en' ? '/' : '/sv/'
  const altHref = lang === 'en' ? '/sv/' : '/'
  const altLabel = lang === 'en' ? 'SV' : 'EN'
  const AltFlag = lang === 'en' ? FlagSV : FlagEN
  const close = () => setOpen(false)

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href={home} className="nav-logo" onClick={close}>
          <span className="logo-icon"><LogoIcon /></span>
          Greow
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          <div className="nav-dropdown">
            <button type="button" className="nav-dropdown-trigger">
              {t.services}
              <svg className="nav-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-card">
                {serviceNav.map((s) => (
                  <Link key={s.key} href={s.url[lang]} className="nav-dropdown-item">
                    <span className={`nav-dropdown-dot accent-${s.accent}`} aria-hidden="true" />
                    <span className="nav-dropdown-text">
                      <span className="nav-dropdown-label">{s.label[lang]}</span>
                      <span className="nav-dropdown-tagline">{s.tagline[lang]}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href={workBase[lang]}>{t.work}</Link>
          <a href={`${home}#pricing`}>{t.pricing}</a>
          <a href={`${home}#how`}>{t.how}</a>
          <Link href={altHref} className="lang-switcher" aria-label={`Switch to ${altLabel}`}>
            <AltFlag />
            <span>{altLabel}</span>
          </Link>
          <a href={`${home}#book`} className="nav-cta">{t.cta}</a>
        </div>

        {/* Mobile controls: flag switcher + hamburger */}
        <div className="nav-mobile-controls">
          <Link href={altHref} className="lang-switcher lang-switcher-mobile" aria-label={`Switch to ${altLabel}`}>
            <AltFlag />
            <span>{altLabel}</span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="nav-mobile-menu">
          <span className="nav-mobile-heading">{t.services}</span>
          {serviceNav.map((s) => (
            <Link key={s.key} href={s.url[lang]} className="nav-mobile-sub" onClick={close}>
              {s.label[lang]}
            </Link>
          ))}
          <Link href={workBase[lang]} onClick={close}>{t.work}</Link>
          <a href={`${home}#pricing`} onClick={close}>{t.pricing}</a>
          <a href={`${home}#how`} onClick={close}>{t.how}</a>
          <a href={`${home}#book`} className="nav-cta-mobile" onClick={close}>{t.cta}</a>
        </div>
      )}
    </nav>
  )
}
