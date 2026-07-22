'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import {
  workIndexCopy,
  projects,
  engagements,
  appearances,
  caseOrder,
  engagementKind,
  engagementKindLabel,
  type Lang,
} from '@/lib/work'
import Footer from '@/components/Footer'

interface WorkIndexProps {
  t: Translations
  lang: Lang
}

export default function WorkIndex({ t, lang }: WorkIndexProps) {
  const copy = workIndexCopy[lang]
  const list = [...projects[lang]].sort(
    (a, b) => caseOrder.indexOf(a.slug) - caseOrder.indexOf(b.slug),
  )
  const more = engagements[lang]
  const talks = appearances[lang]
  const home = lang === 'en' ? '/' : '/sv/'
  const [tab, setTab] = useState<'cases' | 'appearances'>('cases')

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

          <div className="work-tabs" role="tablist" aria-label={copy.kicker}>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'cases'}
              className={`work-tab${tab === 'cases' ? ' active' : ''}`}
              onClick={() => setTab('cases')}
            >
              {copy.casesTab} <span className="work-tab-count">{list.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'appearances'}
              className={`work-tab${tab === 'appearances' ? ' active' : ''}`}
              onClick={() => setTab('appearances')}
            >
              {copy.appearancesTab} <span className="work-tab-count">{talks.length}</span>
            </button>
          </div>
        </div>
      </section>

      {/* CASE STUDIES PANEL */}
      <div hidden={tab !== 'cases'}>
        <section className="section work-cases">
          <div className="container">
            <div className="work-case-list">
              {list.map((p) => {
                const inner = (
                  <>
                    <div className="work-case-body">
                      <p className="work-case-eyebrow">
                        <span className={`work-case-type type-${engagementKind[p.slug]}`}>
                          {engagementKindLabel[lang][engagementKind[p.slug]]}
                        </span>
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
      </div>

      {/* APPEARANCES PANEL */}
      <div hidden={tab !== 'appearances'}>
        <section className="section work-appearances">
          <div className="container">
            <div className="work-more-header">
              <p className="section-label">{copy.appearancesLabel}</p>
              <h2>{copy.appearancesHeading}</h2>
              <p>{copy.appearancesIntro}</p>
            </div>
            <div className="appearance-grid">
              {talks.map((a) => (
                <a
                  key={a.videoId}
                  href={a.url}
                  className="appearance-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="appearance-thumb">
                    <img
                      src={`https://i.ytimg.com/vi/${a.videoId}/hqdefault.jpg`}
                      alt={a.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="appearance-play" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span className="appearance-body">
                    <span className="appearance-type">{a.type}</span>
                    <span className="appearance-title">{a.title}</span>
                    <span className="appearance-desc">{a.description}</span>
                    <span className="appearance-foot">
                      <span className="appearance-meta">{a.meta}</span>
                      <span className="appearance-watch">{copy.watch}</span>
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

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
