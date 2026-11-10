import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { aiGtmByLang } from '@/lib/aiGtmSystems'
import { projects, workIndexCopy, type Lang } from '@/lib/work'
import { serviceNav, servicesFor, serviceUrl } from '@/lib/services'
import CalEmbed from './CalEmbed'
import GtmSystemDiagram from './GtmSystemDiagram'
import Footer from './Footer'

// /ai-gtm-systems/ (EN) and /sv/ai-gtm-system/ (SV). Shares the section
// patterns and ai-* styles of the AI Growth Consultant page; gtm-* styles add
// the silo cards, the stack diagram and the scenario timeline.
// Simple line icons for the four Growthship modules (decorative).
const moduleIcons: Record<string, JSX.Element> = {
  bridge: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17h18M5 17V9m14 8V9M3 9c3 0 6-3 9-3s6 3 9 3M9 17v-5m6 5v-5" />
    </svg>
  ),
  radar: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="M12 12l6-6" /><circle cx="15.5" cy="9" r="1" fill="currentColor" />
    </svg>
  ),
  engine: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9l2.1 2.1m10 10 2.1 2.1M4.9 19.1 7 17m10-10 2.1-2.1" />
    </svg>
  ),
  launchpad: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c3 2.5 4.5 6 4 10l-2 3h-4l-2-3c-.5-4 1-7.5 4-10Z" /><circle cx="12" cy="9.5" r="1.5" /><path d="M8 13l-3 3 3 1m8-4 3 3-3 1M10 19l2 2 2-2" />
    </svg>
  ),
}

export default function AiGtmSystemsPage({ t, lang }: { t: Translations; lang: Lang }) {
  const c = aiGtmByLang[lang]
  const caseBySlug = (slug: string) => projects[lang].find((p) => p.slug === slug)
  const sands = caseBySlug(c.realWorld.sands.slug)
  const moreCases = c.realWorld.moreCases
    .map(caseBySlug)
    .filter((p): p is NonNullable<typeof p> => Boolean(p && p.href))
  const available = new Set(servicesFor(lang).map((s) => s.key))
  const relatedServices = c.who.relatedServices
    .filter((key) => available.has(key))
    .map((key) => {
      const s = serviceNav.find((n) => n.key === key)!
      return { href: serviceUrl(key, lang), label: s.label[lang], tagline: s.tagline[lang] }
    })

  return (
    <>
      {/* HERO */}
      <section className="service-hero ai-hero">
        <div className="container">
          <p className="section-label">{c.hero.kicker}</p>
          <h1>
            {c.hero.h1a} <em>{c.hero.h1b}</em>
          </h1>
          <p className="service-sub gtm-hero-sub">{c.hero.sub}</p>
          {c.hero.body.map((p) => <p key={p} className="ai-hero-body">{p}</p>)}
          <div className="hero-actions gtm-hero-actions">
            <a href="#contact" className="btn btn-primary">{c.hero.cta}</a>
            <a href="#growth-os" className="btn btn-secondary">{c.hero.cta2}</a>
          </div>
          <div className="hero-founder">
            <img
              src="/assets/erik-oliva-werner-avatar.webp"
              alt="Erik Oliva Werner"
              className="hero-founder-img"
              width={44}
              height={44}
              loading="eager"
              decoding="async"
            />
            <div>
              <p className="hero-founder-name">Erik Oliva Werner</p>
              <p className="hero-founder-role">{c.hero.founderRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section service-sec soft" aria-labelledby="gtm-problem">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.problem.label}</p>
            <h2 id="gtm-problem">
              {c.problem.h2a} <em>{c.problem.h2b}</em>
            </h2>
            <div className="service-text ai-narrow">
              {c.problem.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="gtm-silos">
              {c.problem.silos.map((s) => (
                <li key={s.system}>
                  <strong>{s.system}</strong> {s.knows}
                </li>
              ))}
            </ul>
            <p className="ai-closing">{c.problem.gap}</p>
            <p className="gtm-people">{c.problem.peopleLead}</p>
            <ul className="gtm-chores">
              {c.problem.chores.map((chore) => <li key={chore}>{chore}</li>)}
            </ul>
            <p className="ai-closing">{c.problem.aiNote}</p>
            <p className="gtm-question">{c.problem.question}</p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION — Growth Operating System */}
      <section className="section service-sec white" id="growth-os" aria-labelledby="gtm-solution">
        <div className="container">
          <div className="service-sec-inner wide gtm-solution">
            <div>
              <p className="section-label">{c.solution.label}</p>
              <h2 id="gtm-solution">
                {c.solution.h2a} <em>{c.solution.h2b}</em>
              </h2>
              <div className="service-text">
                {c.solution.body.map((p) => <p key={p}>{p}</p>)}
              </div>
              <p className="ai-closing">
                {c.solution.closing[0]} <strong>{c.solution.closing[1]}</strong>
              </p>
            </div>
            <figure className="gtm-stack">
              <figcaption>{c.solution.stackLabel}</figcaption>
              <ol>
                {c.solution.layers.map((layer, i) => (
                  <li key={layer.title} className={`gtm-layer gtm-layer-${i + 1}`}>
                    <strong>{layer.title}</strong>
                    <span>{layer.body}</span>
                  </li>
                ))}
              </ol>
            </figure>
          </div>
        </div>
      </section>

      {/* THE GROWTHSHIP FRAMEWORK */}
      <section className="capabilities section" aria-labelledby="gtm-growthship">
        <div className="container">
          <div className="capabilities-header">
            <p className="section-label">{c.growthship.label}</p>
            <h2 id="gtm-growthship">{c.growthship.h2}</h2>
            {c.growthship.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <figure className="gship">
            <figcaption>{c.growthship.diagram.caption}</figcaption>
            <div className="gship-grid">
              <div className="gship-core">
                <strong>{c.growthship.diagram.core}</strong>
                <span>{c.growthship.diagram.coreSub}</span>
              </div>
              {c.growthship.diagram.modules.map((m, i) => (
                <div key={m.key} className={`gship-module gship-${m.key}`}>
                  <span className="gship-icon">{moduleIcons[m.key]}</span>
                  <span className="gship-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </div>
              ))}
              <span className="gship-arrow gship-a1" aria-hidden="true">→</span>
              <span className="gship-arrow gship-a2" aria-hidden="true">↓</span>
              <span className="gship-arrow gship-a3" aria-hidden="true">←</span>
              <span className="gship-arrow gship-a4" aria-hidden="true">↑</span>
            </div>
            <p className="gship-loop"><span aria-hidden="true">↻</span> {c.growthship.diagram.loop}</p>
          </figure>
          <p className="gship-scope">{c.growthship.scopeNote}</p>
          <div className="capability-grid ai-offer-grid">
            {c.growthship.items.map((item) => (
              <article key={item.num} className="capability-card">
                <div className="capability-num" aria-hidden="true">{item.num}</div>
                <h3>{item.title}</h3>
                <p className="ai-card-tagline">{item.tagline}</p>
                {item.body.map((p) => <p key={p} className="capability-body">{p}</p>)}
                <p className="capability-sub">{c.growthship.enableLabel}</p>
                <ul className="capability-points">
                  {item.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <p className="gtm-outcome">
                  <span>{c.growthship.outcomeLabel}:</span> {item.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE BIGGER PICTURE — illustrative scenario */}
      <section className="how section" aria-labelledby="gtm-bigger">
        <div className="container">
          <p className="section-label">{c.bigPicture.label}</p>
          <h2 id="gtm-bigger" className="ai-how-heading">
            {c.bigPicture.h2a} <em className="gtm-em-light">{c.bigPicture.h2b}</em>
          </h2>
          <div className="ai-how-intro">
            {c.bigPicture.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ol className="gtm-flow">
            {c.bigPicture.stages.map((stage, i) => (
              <li key={stage.key} className={`gtm-stage gtm-stage-${stage.key}`}>
                <div className="gtm-stage-head">
                  <span className="gtm-stage-step" aria-hidden="true">{i + 1}</span>
                  <span className="gtm-stage-name">{stage.name}</span>
                  <span className="gtm-stage-module">{stage.module}</span>
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
                <div className="gtm-ui" aria-hidden="true">
                  <span className="gtm-ui-bar"><i /><i /><i /></span>
                  <span className="gtm-ui-chip"><b />{stage.chip}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="gtm-loop">{c.bigPicture.loop}</p>
          <p className="gtm-loop-closing">{c.bigPicture.closing}</p>
          <p className="gtm-disclaimer-light">{c.bigPicture.disclaimer}</p>
        </div>
      </section>

      {/* GTM SYSTEM IN PRACTICE — animated diagram */}
      <section className="section service-sec soft gsys-section" aria-labelledby="gtm-system">
        <div className="container">
          <div className="gsys-header">
            <p className="section-label">{c.gtmSystem.label}</p>
            <h2 id="gtm-system">
              {c.gtmSystem.h2a} <em>{c.gtmSystem.h2b}</em>
            </h2>
            <p className="service-text">{c.gtmSystem.intro}</p>
          </div>
          <GtmSystemDiagram g={c.gtmSystem} />
        </div>
      </section>

      {/* AGENTIC WEB */}
      <section className="section service-sec white" aria-labelledby="gtm-web">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.agenticWeb.label}</p>
            <h2 id="gtm-web">{c.agenticWeb.h2}</h2>
            <div className="service-text ai-narrow">
              {c.agenticWeb.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <h3 className="gtm-subheading">{c.agenticWeb.h3}</h3>
            <p className="ai-closing gtm-lead">{c.agenticWeb.lead}</p>
            <div className="gtm-web-grid">
              {c.agenticWeb.layers.map((layer) => (
                <article key={layer.num} className="gtm-web-card">
                  <span className="gtm-web-num" aria-hidden="true">{layer.num}</span>
                  <h4>{layer.title}</h4>
                  <p>{layer.body}</p>
                  <p className="capability-sub">{c.agenticWeb.examplesLabel}</p>
                  <ul className="capability-points">
                    {layer.examples.map((ex) => <li key={ex}>{ex}</li>)}
                  </ul>
                  {layer.proofCase && sands?.href ? (
                    <Link href={sands.href} className="gtm-proof">
                      <span aria-hidden="true">✓</span> {layer.proof}
                    </Link>
                  ) : (
                    <p className="gtm-proof">
                      <span aria-hidden="true">✓</span> {layer.proof}
                    </p>
                  )}
                </article>
              ))}
            </div>
            <div className="gtm-combination">
              <h4>{c.agenticWeb.combination.h3}</h4>
              <p>{c.agenticWeb.combination.body}</p>
            </div>
            <p className="ai-closing">
              {c.agenticWeb.closing[0]} <strong>{c.agenticWeb.closing[1]}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* REAL-WORLD APPLICATION */}
      <section className="section service-sec soft" aria-labelledby="gtm-real">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.realWorld.label}</p>
            <h2 id="gtm-real">{c.realWorld.h2}</h2>
            <div className="service-text ai-narrow">
              {c.realWorld.intro.map((p) => <p key={p}>{p}</p>)}
            </div>

            <div className="ai-env-grid">
              <article className="ai-env-card">
                <p className="capability-sub">{c.realWorld.sands.name}</p>
                <h3>{c.realWorld.sands.heading}</h3>
                {c.realWorld.sands.body.map((p) => <p key={p} className="capability-body">{p}</p>)}
                <p className="capability-sub">{c.realWorld.sands.listLabel}</p>
                <ul className="capability-points">
                  {c.realWorld.sands.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <p className="capability-body">{c.realWorld.sands.outro}</p>
                <p className="ai-card-outro">{c.realWorld.sands.principle}</p>
                {sands?.href && (
                  <Link href={sands.href} className="capability-case ai-env-proof">
                    <span className="capability-case-metric">{sands.metric.value}</span>
                    <span className="capability-case-text">
                      <span className="capability-case-label">{sands.metric.label}</span>
                      <span className="capability-case-client">{c.realWorld.sands.cta}</span>
                    </span>
                  </Link>
                )}
              </article>

              {/* Mentimeter — professional experience, not a client engagement or product */}
              <article className="ai-env-card">
                <p className="capability-sub">{c.realWorld.mentimeter.name}</p>
                <h3>{c.realWorld.mentimeter.heading}</h3>
                {c.realWorld.mentimeter.body.map((p) => <p key={p} className="capability-body">{p}</p>)}
                <dl className="ai-gos">
                  {c.realWorld.mentimeter.areas.map((area) => (
                    <div key={area.title}>
                      <dt>{area.title}</dt>
                      <dd>{area.body}</dd>
                    </div>
                  ))}
                </dl>
                {c.realWorld.mentimeter.outro.map((p) => <p key={p} className="capability-body">{p}</p>)}
                <p className="ai-disclaimer">{c.realWorld.mentimeter.disclaimer}</p>
              </article>
            </div>

            {moreCases.length > 0 && (
              <div className="ai-more-cases">
                <p className="capability-sub">{c.realWorld.moreLabel}</p>
                <div className="service-related-grid">
                  {moreCases.map((p) => (
                    <Link key={p.slug} href={p.href!} className={`service-related-card accent-${p.accent}`}>
                      <span className="related-metric">{p.metric.value}</span>
                      <span className="related-metric-label">{p.metric.label}</span>
                      <span className="related-client">{p.client}</span>
                      <span className="related-arrow">{workIndexCopy[lang].readCase} →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BUILT · IN DEVELOPMENT · POSSIBLE */}
      <section className="section service-sec white" aria-labelledby="gtm-maturity">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.maturity.label}</p>
            <h2 id="gtm-maturity">{c.maturity.h2}</h2>
            <p className="service-text ai-narrow">{c.maturity.intro}</p>
            <div className="gtm-maturity">
              {c.maturity.columns.map((col) => (
                <article key={col.key} className={`gtm-mat gtm-mat-${col.key}`}>
                  <span className="gtm-mat-badge">{col.badge}</span>
                  <h3>{col.title}</h3>
                  <p className="gtm-mat-context">{col.context}</p>
                  <ul className="capability-points">
                    {col.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {col.link && sands?.href && (
                    <Link href={sands.href} className="capability-link">{col.link}</Link>
                  )}
                  {col.note && <p className="gtm-mat-note">{col.note}</p>}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE BUILD IT */}
      <section className="how section" id="how-we-build" aria-labelledby="gtm-build">
        <div className="container">
          <p className="section-label">{c.build.label}</p>
          <h2 id="gtm-build" className="ai-how-heading">{c.build.h2}</h2>
          <div className="ai-how-intro">
            {c.build.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ol className="how-steps ai-steps">
            {c.build.steps.map((step) => (
              <li key={step.num} className="step-card">
                <div className="step-num" aria-hidden="true">{step.num}</div>
                <h3>{step.title}</h3>
                <p className="ai-step-tagline">{step.tagline}</p>
                {step.body.map((p) => <p key={p}>{p}</p>)}
                <p className="ai-step-outcome"><span>{c.build.deliverablesLabel}</span></p>
                <ul className="gtm-deliverables">
                  {step.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY GREOW */}
      <section className="section service-sec white" aria-labelledby="gtm-why">
        <div className="container">
          <div className="service-sec-inner">
            <p className="section-label">{c.why.label}</p>
            <h2 id="gtm-why">{c.why.h2}</h2>
            <div className="service-text">
              {c.why.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="ai-questions gtm-needs">
              {c.why.needs.map((n) => <li key={n}>{n}</li>)}
            </ul>
            <div className="service-text">
              {c.why.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <p className="ai-closing">
              {c.why.closing[0]} <strong>{c.why.closing[1]}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR + RELATED SERVICES */}
      <section className="section service-sec soft" aria-labelledby="gtm-who">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.who.label}</p>
            <h2 id="gtm-who">{c.who.h2}</h2>
            <div className="ai-audiences gtm-audiences">
              {c.who.audiences.map((a) => (
                <div key={a.title} className="ai-audience">
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
            {relatedServices.length > 0 && (
              <nav className="ai-related-services" aria-label={c.who.relatedLabel}>
                <p className="capability-sub">{c.who.relatedLabel}</p>
                <div className="ai-related-grid">
                  {relatedServices.map((s) => (
                    <Link key={s.href} href={s.href} className="ai-related-link">
                      <span className="ai-related-name">{s.label} <span aria-hidden="true">→</span></span>
                      <span className="ai-related-tagline">{s.tagline}</span>
                    </Link>
                  ))}
                </div>
              </nav>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section service-sec white" aria-labelledby="gtm-faq">
        <div className="container">
          <div className="service-sec-inner">
            <p className="section-label">{c.faq.label}</p>
            <h2 id="gtm-faq">{c.faq.h2}</h2>
            <div className="ai-faq">
              {c.faq.items.map((item) => (
                <details key={item.q}>
                  <summary>
                    <h3>{item.q}</h3>
                  </summary>
                  <div className="ai-faq-answer">
                    {item.a.map((p) => <p key={p}>{p}</p>)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="cta-section ai-cta" id="contact" aria-labelledby="gtm-contact">
        <div className="container">
          <h2 id="gtm-contact">
            {c.cta.h2a} <em>{c.cta.h2b}</em>
          </h2>
          {c.cta.body.map((p) => <p key={p}>{p}</p>)}
          <p className="ai-cta-kicker">{c.cta.kicker}</p>
          <a href="#book-call" className="btn btn-primary">{c.cta.button}</a>
          <p className="ai-signature">
            <strong>{c.cta.signature[0]}</strong>
            <br />
            {c.cta.signature[1]}
            <br />
            {c.cta.signature[2]}
          </p>
          <div id="book-call">
            <CalEmbed />
          </div>
        </div>
      </section>

      <Footer t={t} lang={lang} />
    </>
  )
}
