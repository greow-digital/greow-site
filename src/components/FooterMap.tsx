'use client'
import { useState } from 'react'
import { mapsEmbedUrl, businessAddressLine } from '@/lib/business'

// Click-to-load Google Map. Nothing from Google is requested until the visitor
// asks for the map, so pages stay fast and no third-party cookies are set by
// default. The address itself is plain text in the footer for crawlers.
export default function FooterMap({ lang }: { lang: 'en' | 'sv' }) {
  const [show, setShow] = useState(false)
  const copy =
    lang === 'en'
      ? { button: 'Show map', note: 'Loads Google Maps', title: `Map: Greow, ${businessAddressLine}` }
      : { button: 'Visa karta', note: 'Laddar Google Maps', title: `Karta: Greow, ${businessAddressLine}` }

  if (show) {
    return (
      <div className="footer-map">
        <iframe
          src={mapsEmbedUrl}
          title={copy.title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="footer-map footer-map-placeholder">
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
      <button type="button" className="footer-map-btn" onClick={() => setShow(true)}>
        {copy.button}
      </button>
      <span className="footer-map-note">{copy.note}</span>
    </div>
  )
}
