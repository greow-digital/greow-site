import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { type CaseStudy, workBase, engagementKind, engagementKindLabel, type Lang } from '@/lib/work'
import Footer from '@/components/Footer'

interface CaseStudyProps {
  t: Translations
  lang: Lang
  data: CaseStudy
}

export default function CaseStudyView({ t, lang, data }: CaseStudyProps) {
  const home = lang === 'en' ? '/' : '/sv/'
  const backLabel = t.nav.work

  return (
    <>
      {/* HERO */}
      <section className={`case-hero accent-jungle${data.heroImage ? ' has-media' : ''}`}>
        <div className="container">
          <Link href={workBase[lang]} className="case-back">
            ← {backLabel}
          </Link>
          <p className="case-eyebrow">
            <span className={`case-type type-${engagementKind[data.slug]}`}>
              {engagementKindLabel[lang][engagementKind[data.slug]]}
            </span>
            <span className="case-eyebrow-client">{data.client}</span>
          </p>
          <h1>{data.title}</h1>
          <p className="case-intro">{data.intro}</p>
          <dl className="case-meta">
            {data.meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
          {data.heroImage && (
            <figure className="case-hero-media">
              <img src={data.heroImage.src} alt={data.heroImage.alt ?? data.client} decoding="async" />
            </figure>
          )}
        </div>
      </section>

      {/* HEADLINE METRICS */}
      <section className={`case-metrics-band${data.heroImage ? ' has-media' : ''}`}>
        <div className="container">
          <div className="case-metrics">
            {data.metrics.map((m) => (
              <div key={m.label} className="case-metric reveal">
                <div className="case-metric-value">{m.value}</div>
                <div className="case-metric-label">{m.label}</div>
                {m.note && <div className="case-metric-note">{m.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section case-section">
        <div className="container">
          <div className="case-overview">
            <h2 className="reveal">{data.overview.heading}</h2>
            <div className="case-overview-body reveal">
              {data.overview.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STARTING POINT */}
      <section className="section case-starting">
        <div className="container">
          <p className="section-label reveal">{data.startingPoint.label}</p>
          <h2 className="reveal">{data.startingPoint.heading}</h2>
          <p className="case-lead reveal">{data.startingPoint.lead}</p>
          <ul className="case-points">
            {data.startingPoint.points.map((point, i) => (
              <li key={i} className="reveal">
                {point}
              </li>
            ))}
          </ul>
          <div className="case-goal reveal">{data.startingPoint.goal}</div>
        </div>
      </section>

      {/* WHAT I OWNED */}
      {data.ownership && (
        <section className="section case-ownership">
          <div className="container">
            <div className="case-ownership-header reveal">
              <p className="section-label">{data.ownership.label}</p>
              <h2>{data.ownership.heading}</h2>
              <p>{data.ownership.intro}</p>
            </div>
            <div className="case-ownership-tags reveal">
              {data.ownership.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {data.ownership.outro && <p className="case-ownership-outro reveal">{data.ownership.outro}</p>}
          </div>
        </section>
      )}

      {/* PROOF CALLOUT */}
      {data.proof && (
        <section className="section case-proof-wrap">
          <div className="container">
            <div className="case-proof reveal">
              <p className="section-label">{data.proof.label}</p>
              <h3>{data.proof.heading}</h3>
              <p>{data.proof.body}</p>
            </div>
          </div>
        </section>
      )}

      {/* ACTS */}
      {data.acts.map((act) => (
        <section key={act.label} className="section case-act">
          <div className="container">
            <div className="case-act-header reveal">
              <p className="section-label">{act.label}</p>
              <h2>{act.title}</h2>
              <p className="case-act-subtitle">{act.subtitle}</p>
            </div>
            <div className="case-blocks">
              {act.blocks.map((block, i) => (
                <div key={block.title} className="case-block reveal">
                  <div className="case-block-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="case-block-content">
                    <h4>{block.title}</h4>
                    {block.body && <p>{block.body}</p>}
                    {block.items && (
                      <ul className="case-block-items">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* RESULTS */}
      <section className="section case-results">
        <div className="container">
          <div className="case-results-header reveal">
            <p className="section-label">{data.results.label}</p>
            <h2>{data.results.heading}</h2>
            <p>{data.results.intro}</p>
          </div>
          <div className={`case-results-grid cols-${data.results.items.length}`}>
            {data.results.items.map((item) => (
              <div key={item.title} className="case-result reveal">
                {item.value && <div className="case-result-value">{item.value}</div>}
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          {data.results.compound && (
            <div className="case-compound reveal">
              <h3>{data.results.compound.heading}</h3>
              <ul>
                {data.results.compound.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* KEY LEARNINGS */}
      {data.keyLearnings && (
        <section className="section case-learnings">
          <div className="container">
            <div className="case-learnings-header reveal">
              <p className="section-label">{data.keyLearnings.label}</p>
              <h2>{data.keyLearnings.heading}</h2>
            </div>
            <div className="case-learnings-grid">
              {data.keyLearnings.items.map((item) => (
                <div key={item.title} className="case-learning reveal">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QUOTE */}
      <section className="case-quote">
        <div className="container">
          <blockquote className="reveal">
            <p>“{data.quote.text}”</p>
            <footer>
              <span className="case-quote-author">{data.quote.author}</span>
              <span className="case-quote-role">{data.quote.role}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* TECH + ROLE */}
      <section className="section case-details">
        <div className="container">
          <div className={`case-details-grid${data.techStack ? '' : ' single'}`}>
            {data.techStack && (
              <div className="case-detail reveal">
                <p className="section-label">{data.techStack.label}</p>
                <div className="case-stack">
                  {data.techStack.items.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="case-detail reveal">
              <p className="section-label">{data.role.label}</p>
              <h3>{data.role.heading}</h3>
              <p>{data.role.body}</p>
              {data.role.items && (
                <ul className="case-role-list">
                  {data.role.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section case-cta">
        <div className="container">
          <h2 className="reveal">{data.cta.heading}</h2>
          <p className="reveal">{data.cta.body}</p>
          <a href={`${home}#book`} className="btn btn-primary reveal">
            {data.cta.button}
          </a>
        </div>
      </section>

      <Footer t={t} lang={lang} />
    </>
  )
}
