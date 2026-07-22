import type { Metadata } from 'next'
import { ubuntu, sourceSans } from '@/lib/fonts'
import '../globals.css'

const SITE_URL = 'https://greow.digital'

// Base metadata shared by every English service page. Individual pages override
// title / description / canonical / openGraph.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  openGraph: { siteName: 'Greow', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image' },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
