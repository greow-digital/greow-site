import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { type ServiceContent, type ServiceSection, serviceRelatedCases } from '@/lib/services'
import { workBase, workIndexCopy, projects, type Lang } from '@/lib/work'
import Footer from '@/components/Footer'

interface ServicePageProps {
  t: Translations
  lang: Lang
  content: ServiceContent
}

type Layout = 'prose' | 'cards' | 'steps'

function sectionLayout(s: ServiceSection): Layout {
  if (!s.items) return 'prose'
  const h = s.heading.toLowerCase()
  if (h === 'how it works' || h === 'så fungerar det') return 'steps'
  return 'cards'
}

export default function ServicePage({ t, lang, content }: ServicePageProps) {
  const home = lang === 'en' ? '/' : '/sv/'
  const kicker = lang === 'en' ? 'Service' : 'Tjänst'
  const bookLabel = lang === 'en' ? 'Book a call →' : 'Boka ett samtal →'
  const workLabel = lang === 'en' ? 'See the work →' : 'Se casestudier →'
  const relatedLabel = lang === 'en' ? 'Proof' : 'Bevis'
  const relatedHeading = lang === 'en' ? 'See it in the work' : 'Se det i praktiken'
  const allWorkLabel = lang === 'en' ? 'See all work →' : 'Se alla case →'
  const readCase = workIndexCopy[lang].readCase

  const relatedSlugs = serviceRelatedCases[content.slug] ?? []
  const related = relatedSlugs
    .map((slug) => projects[lang].find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

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
          <div className="hero-founder">
            <img
              src="/assets/erik-werner.png"
              alt="Erik Oliva Werner"
              className="hero-founder-img"
              width={44}
              height={44}
              loading="eager"
              decoding="async"
            />
            <div>
              <p className="hero-founder-name">Erik Oliva Werner</p>
              <p className="hero-founder-role">
                {lang === 'en'
                  ? 'Senior Growth Advisor · ex Funnel, Leadfeeder, Telia'
                  : 'Senior Growth Advisor · ex Funnel, Leadfeeder, Telia'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      {content.sections.map((s, i) => {
        const layout = sectionLayout(s)
        const bg = layout === 'steps' ? 'jungle' : i % 2 === 0 ? 'white' : 'soft'
        return (
          <section key={i} className={`section service-sec ${bg}`}>
            <div className="container">
              <div className={`service-sec-inner${layout === 'prose' ? '' : ' wide'}`}>
                <h2>{s.heading}</h2>

                {layout === 'prose' && (
                  <>
                    {s.body && <div className="service-text" dangerouslySetInnerHTML={{ __html: s.body }} />}
                    {s.links && (
                      <div className="service-links">
                        {s.links.map((l) => (
                          <a key={l.href} href={l.href}>{l.label}</a>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {layout === 'steps' && s.items && (
                  <div className="service-steps">
                    {s.items.map((item, j) => (
                      <div key={j} className="service-step">
                        <span className="service-step-num">{j + 1}</span>
                        <span className="service-step-text" dangerouslySetInnerHTML={{ __html: item }} />
                      </div>
                    ))}
                  </div>
                )}

                {layout === 'cards' && s.items && (
                  <div className="service-cards">
                    {s.items.map((item, j) => (
                      <div key={j} className="service-card" dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {/* RELATED WORK */}
      {related.length > 0 && (
        <section className="section service-related">
          <div className="container">
            <div className="service-related-head">
              <p className="section-label">{relatedLabel}</p>
              <h2>{relatedHeading}</h2>
            </div>
            <div className="service-related-grid">
              {related.map((p) =>
                p.href ? (
                  <Link key={p.slug} href={p.href} className={`service-related-card accent-${p.accent}`}>
                    <span className="related-metric">{p.metric.value}</span>
                    <span className="related-metric-label">{p.metric.label}</span>
                    <span className="related-client">{p.client}</span>
                    <span className="related-arrow">{readCase} →</span>
                  </Link>
                ) : null,
              )}
            </div>
            <Link href={workBase[lang]} className="service-related-all">{allWorkLabel}</Link>
          </div>
        </section>
      )}

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
