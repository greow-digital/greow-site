import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { workIndexCopy, projects, engagements, type Lang } from '@/lib/work'
import Footer from '@/components/Footer'

interface WorkIndexProps {
  t: Translations
  lang: Lang
}

export default function WorkIndex({ t, lang }: WorkIndexProps) {
  const copy = workIndexCopy[lang]
  const list = projects[lang]
  const more = engagements[lang]
  const home = lang === 'en' ? '/' : '/sv/'
  const featured = list[0]

  return (
    <>
      {/* HERO */}
      <section className="work-hero">
        <div className="container">
          <p className="section-label">{copy.kicker}</p>
          <h1>
            {copy.title} <em>{copy.titleEm}</em>
          </h1>
          <p className="work-hero-sub">{copy.intro}</p>
        </div>
      </section>

      {/* FEATURED CASES */}
      <section className="section work-cases">
        <div className="container">
          <div className="work-case-list">
            {list.map((p) => {
              const inner = (
                <>
                  <div className="work-case-body">
                    <p className="work-case-eyebrow">
                      <span>{copy.featuredLabel}</span>
                      <span className="work-case-year">{p.year}</span>
                    </p>
                    {p.logo ? (
                      <span className="work-case-logo">
                        <img src={p.logo} alt={p.client} height={30} decoding="async" />
                      </span>
                    ) : null}
                    <h2 className="work-case-client">{p.client}</h2>
                    <p className="work-case-title">{p.title}</p>
                    <p className="work-case-blurb">{p.blurb}</p>
                    <div className="work-case-tags">
                      {p.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {p.href && <span className="work-case-link">{copy.readCase} →</span>}
                  </div>
                  <div className={`work-case-metric accent-${p.accent}`}>
                    <div className="work-case-metric-value">{p.metric.value}</div>
                    <div className="work-case-metric-label">{p.metric.label}</div>
                  </div>
                </>
              )
              return p.href ? (
                <Link key={p.slug} href={p.href} className="work-case reveal">
                  {inner}
                </Link>
              ) : (
                <div key={p.slug} className="work-case work-case-static reveal">
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MORE ENGAGEMENTS */}
      {more.length > 0 && (
        <section className="section work-more">
          <div className="container">
            <div className="work-more-header reveal">
              <p className="section-label">{copy.moreLabel}</p>
              <h2>{copy.moreHeading}</h2>
              <p>{copy.moreIntro}</p>
            </div>
            <div className={`work-more-grid count-${more.length}`}>
              {more.map((e) => (
                <div key={e.client} className="work-more-card reveal">
                  <div className="work-more-metric">{e.metric}</div>
                  <p className="work-more-label">{e.label}</p>
                  <span className="work-more-logo">
                    <img src={e.logo} alt={e.client} loading="lazy" decoding="async" height={26} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section work-cta-wrap">
        <div className="container">
          <div className="work-cta reveal">
            <div>
              <h2>{copy.ctaCard.heading}</h2>
              <p>{copy.ctaCard.body}</p>
            </div>
            <a href={`${home}#book`} className="btn btn-primary">
              {copy.ctaCard.button}
            </a>
          </div>
        </div>
      </section>

      <Footer t={t} lang={lang} />
    </>
  )
}
