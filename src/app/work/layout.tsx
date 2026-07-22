import type { Metadata } from 'next'
import { ubuntu, sourceSans } from '@/lib/fonts'
import '../globals.css'

const SITE_URL = 'https://greow.digital'

// Base metadata shared by every /work page. Individual pages override
// title / description / canonical / openGraph.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: { siteName: 'Greow', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image' },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
