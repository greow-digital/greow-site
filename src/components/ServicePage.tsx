import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { type ServiceContent } from '@/lib/services'
import { workBase, type Lang } from '@/lib/work'
import Footer from '@/components/Footer'

interface ServicePageProps {
  t: Translations
  lang: Lang
  content: ServiceContent
}

export default function ServicePage({ t, lang, content }: ServicePageProps) {
  const home = lang === 'en' ? '/' : '/sv/'
  const kicker = lang === 'en' ? 'Service' : 'Tjänst'
  const bookLabel = lang === 'en' ? 'Book a call →' : 'Boka ett samtal →'
  const workLabel = lang === 'en' ? 'See the work →' : 'Se casestudier →'

  return (
    <>
      {/* HERO */}
      <section className="service-hero">
        <div className="container">
          <p className="section-label">{kicker}</p>
          <h1>{content.h1}</h1>
          <p className="service-sub">{content.sub}</p>
          <div className="hero-actions">
            <a href={`${home}#book`} className="btn btn-primary">{bookLabel}</a>
            <Link href={workBase[lang]} className="btn btn-secondary">{workLabel}</Link>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section service-body-section">
        <div className="container">
          <div className="service-content">
            {content.sections.map((s, i) => (
              <div key={i} className="service-block reveal">
                <h2>{s.heading}</h2>
                {s.body && <div className="service-text" dangerouslySetInnerHTML={{ __html: s.body }} />}
                {s.items && (
                  <ul className="service-list">
                    {s.items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
                {s.links && (
                  <div className="service-links">
                    {s.links.map((l) => (
                      <a key={l.href} href={l.href}>{l.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section service-cta">
        <div className="container">
          <h2 className="reveal">{content.cta.heading}</h2>
          <a href={content.cta.href} className="btn btn-primary reveal">{content.cta.button}</a>
          {content.cta.links && (
            <div className="service-cta-links reveal">
              {content.cta.links.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer t={t} lang={lang} />
    </>
  )
}
