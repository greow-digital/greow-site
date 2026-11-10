import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { translations } from '@/lib/translations'

// Rendered as a normal page, then copied to out/404.html by
// scripts/postbuild-404.mjs (GitHub Pages serves 404.html for every missing
// path). The route itself is removed from out/ after the copy.
// One file serves both languages: an inline script switches to Swedish when
// the missing URL is under /sv/.

export const metadata: Metadata = {
  title: '404 – This page churned | Greow',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: true },
}

const copy = {
  en: {
    kicker: 'Error 404',
    h1a: 'This page',
    h1b: 'churned.',
    body: 'We ran the numbers: the page you’re looking for never made it past activation. It may have moved, been renamed or simply never shipped.',
    report: 'Funnel report: this URL',
    rows: [
      { label: 'Visited this URL', value: '1 (you)', width: 100 },
      { label: 'Found the page', value: '0', width: 0 },
    ],
    rateLabel: 'Conversion rate',
    note: 'Statistically significant. Sorry about that.',
    home: 'Back to the homepage →',
    work: 'See the work',
    help: 'Looking for something specific?',
    links: [
      { label: 'Services', href: '/growth-as-a-service/' },
      { label: 'AI Growth Consultant', href: '/ai-growth-consultant/' },
      { label: 'Book a call', href: '/#book' },
    ],
    homeHref: '/',
    workHref: '/work/',
  },
  sv: {
    kicker: 'Fel 404',
    h1a: 'Den här sidan',
    h1b: 'har churnat.',
    body: 'Vi har kört siffrorna: sidan du letar efter tog sig aldrig förbi aktiveringen. Den kan ha flyttats, bytt namn eller aldrig lanserats.',
    report: 'Trattrapport: den här adressen',
    rows: [
      { label: 'Besökte adressen', value: '1 (du)', width: 100 },
      { label: 'Hittade sidan', value: '0', width: 0 },
    ],
    rateLabel: 'Konverteringsgrad',
    note: 'Statistiskt säkerställt. Ledsen för det.',
    home: 'Till startsidan →',
    work: 'Se case',
    help: 'Letar du efter något särskilt?',
    links: [
      { label: 'Tjänster', href: '/sv/growth-as-a-service/' },
      { label: 'AI-tillväxtkonsult', href: '/sv/ai-tillvaxtkonsult/' },
      { label: 'Boka ett samtal', href: '/sv/#book' },
    ],
    homeHref: '/sv/',
    workHref: '/sv/case/',
  },
}

function Block({ lang }: { lang: 'en' | 'sv' }) {
  const c = copy[lang]
  return (
    <div className="nf-grid" data-nf-lang={lang} hidden={lang === 'sv'} lang={lang}>
      <div>
        <p className="section-label">{c.kicker}</p>
        <h1>
          {c.h1a} <em>{c.h1b}</em>
        </h1>
        <p className="nf-body">{c.body}</p>
        <div className="hero-actions nf-actions">
          <Link href={c.homeHref} className="btn btn-primary">{c.home}</Link>
          <Link href={c.workHref} className="btn btn-secondary">{c.work}</Link>
        </div>
        <p className="capability-sub nf-help">{c.help}</p>
        <ul className="nf-links">
          {c.links.map((l) => (
            <li key={l.href}><Link href={l.href} className="capability-link">{l.label} <span aria-hidden="true">→</span></Link></li>
          ))}
        </ul>
      </div>
      <figure className="nf-report" aria-label={`${c.report}: ${c.rateLabel} 0 %`}>
        <figcaption>{c.report}</figcaption>
        {c.rows.map((r, i) => (
          <div key={r.label} className="nf-row">
            <div className="nf-row-head">
              <span>{r.label}</span>
              <strong>{r.value}</strong>
            </div>
            <div className={`nf-bar nf-bar-${i + 1}`} aria-hidden="true">
              <span style={{ width: `${r.width}%` }} />
            </div>
          </div>
        ))}
        <div className="nf-rate">
          <span>{c.rateLabel}</span>
          <strong>0<small>%</small></strong>
        </div>
        <p className="nf-note">{c.note}</p>
      </figure>
    </div>
  )
}

const switchScript = `(function(){if(location.pathname.indexOf('/sv/')!==0)return;var T='404 – Sidan har churnat | Greow';function sv(){document.documentElement.lang='sv';if(document.title!==T)document.title=T;var b=document.querySelectorAll('[data-nf-lang]');for(var i=0;i<b.length;i++){b[i].hidden=b[i].getAttribute('data-nf-lang')!=='sv';}}sv();window.addEventListener('load',function(){sv();setTimeout(sv,300);setTimeout(sv,1200);});})();`

export default function PageNotFound() {
  const t = translations.en
  return (
    <>
      <Nav t={t.nav} lang="en" />
      <main id="main" className="nf">
        <section className="service-hero nf-hero">
          <div className="container">
            <Block lang="en" />
            <Block lang="sv" />
          </div>
        </section>
      </main>
      <script dangerouslySetInnerHTML={{ __html: switchScript }} />
      <Footer t={t} lang="en" />
    </>
  )
}
