import type { Metadata } from 'next'
import Link from 'next/link'
import { ubuntu, sourceSans } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: '404 — Page not found · Greow',
  description: 'The page you were looking for does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <html lang="en" className={`${ubuntu.variable} ${sourceSans.variable}`}>
      <body>
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            textAlign: 'center',
            gap: '16px',
          }}
        >
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', margin: 0 }}>404</h1>
          <p style={{ color: '#444', maxWidth: '420px', lineHeight: 1.6 }}>
            The page you were looking for does not exist or has moved.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/" className="btn btn-primary">Back to home (EN)</Link>
            <Link href="/sv/" className="btn btn-secondary">Tillbaka till start (SV)</Link>
          </div>
        </main>
      </body>
    </html>
  )
}
