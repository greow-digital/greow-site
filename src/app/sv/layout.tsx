import type { Metadata } from 'next'
import { ubuntu, sourceSans } from '@/lib/fonts'
import { translations } from '@/lib/translations'
import { siteGraph } from '@/lib/schema'
import '../globals.css'

const t = translations.sv
const SITE_URL = 'https://greow.digital'
const OG_IMAGE = `${SITE_URL}/images/HERO_CAROUSEL_2.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: t.meta.title,
  description: t.meta.description,
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96.png', type: 'image/png', sizes: '96x96' },
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: `${SITE_URL}/sv/`,
    languages: {
      en: `${SITE_URL}/`,
      sv: `${SITE_URL}/sv/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    url: `${SITE_URL}/sv/`,
    siteName: 'Greow',
    locale: 'sv_SE',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Greow — AI-native growth- & GTM-partner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.meta.title,
    description: t.meta.description,
    images: [OG_IMAGE],
  },
}

export default function SvLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = siteGraph('sv')

  return (
    <html lang="sv" className={`${ubuntu.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
