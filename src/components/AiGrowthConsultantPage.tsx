import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { aiGrowthByLang } from '@/lib/aiGrowthConsultant'
import { projects, workIndexCopy, type Lang } from '@/lib/work'
import { serviceNav, servicesFor, serviceUrl } from '@/lib/services'
import CalEmbed from './CalEmbed'
import Footer from './Footer'

// /ai-growth-consultant/ (EN) and /sv/ai-tillvaxtkonsult/ (SV) — built from
// the existing Greow section patterns (service-hero, section-label, capability
// cards, jungle "how" band, related case cards, cta-section).
export default function AiGrowthConsultantPage({ t, lang }: { t: Translations; lang: Lang }) {
  const c = aiGrowthByLang[lang]
  const caseBySlug = (slug: string) => projects[lang].find((p) => p.slug === slug)
  const sands = caseBySlug(c.experience.sands.slug)
  const moreCases = c.experience.moreCases
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
          <p className="service-sub">{c.hero.lead}</p>
          <p className="ai-hero-body">{c.hero.body}</p>
          <p className="ai-hero-tagline">{c.hero.tagline}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">{c.hero.cta}</a>
            <a href="#how-it-works" className="btn btn-secondary">{c.how.label}</a>
          </div>
          <div className="hero-founder">
            <img
              src="/assets/erik-oliva-werner.png"
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

      {/* THE OPPORTUNITY */}
      <section className="section service-sec white" aria-labelledby="ai-opportunity">
        <div className="container">
          <div className="service-sec-inner">
            <p className="section-label">{c.opportunity.label}</p>
            <h2 id="ai-opportunity">
              {c.opportunity.h2a} <em>{c.opportunity.h2b}</em>
            </h2>
            <div className="service-text">
              {c.opportunity.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="ai-questions">
              {c.opportunity.questions.map((q) => <li key={q}>{q}</li>)}
            </ul>
            <div className="service-text">
              {c.opportunity.outro.map((p, i) => (
                <p key={p}>{i === c.opportunity.outro.length - 1 ? <strong>{p}</strong> : p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="capabilities section" aria-labelledby="ai-what">
        <div className="container">
          <div className="capabilities-header">
            <p className="section-label">{c.whatIDo.label}</p>
            <h2 id="ai-what">{c.whatIDo.h2}</h2>
            <p>{c.whatIDo.intro}</p>
          </div>
          <div className="capability-grid ai-offer-grid">
            {c.whatIDo.items.map((item) => (
              <article key={item.num} className="capability-card">
                <div className="capability-num" aria-hidden="true">{item.num}</div>
                <h3>{item.title}</h3>
                <p className="ai-card-tagline">{item.tagline}</p>
                {item.body.map((p) => <p key={p} className="capability-body">{p}</p>)}
                {item.list.length > 0 && (
                  <>
                    <p className="capability-sub">{item.listLabel}</p>
                    <ul className="capability-points">
                      {item.list.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  </>
                )}
                {item.outro.map((p) => <p key={p} className="ai-card-outro">{p}</p>)}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Discover, Build, Scale */}
      <section className="how section" id="how-it-works" aria-labelledby="ai-how">
        <div className="container">
          <p className="section-label">{c.how.label}</p>
          <h2 id="ai-how" className="ai-how-heading">{c.how.h2}</h2>
          <div className="ai-how-intro">
            {c.how.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ol className="how-steps ai-steps">
            {c.how.steps.map((step) => (
              <li key={step.num} className="step-card">
                <div className="step-num" aria-hidden="true">{step.num}</div>
                <h3>{step.title}</h3>
                <p className="ai-step-tagline">{step.tagline}</p>
                {step.body.map((p) => <p key={p}>{p}</p>)}
                <p className="ai-step-outcome">
                  <span>{c.how.outcomeLabel}:</span> {step.outcome}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* REAL-WORLD EXPERIENCE */}
      <section className="section service-sec white" aria-labelledby="ai-experience">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.experience.label}</p>
            <h2 id="ai-experience">{c.experience.h2}</h2>
            <div className="service-text ai-narrow">
              {c.experience.intro.map((p) => <p key={p}>{p}</p>)}
            </div>

            <div className="ai-env-grid">
              {/* Sands — verified Greow case study */}
              <article className="ai-env-card">
                <p className="capability-sub">{c.experience.sands.name}</p>
                <h3>{c.experience.sands.heading}</h3>
                {c.experience.sands.body.map((p) => <p key={p} className="capability-body">{p}</p>)}
                <p className="capability-sub">{c.experience.sands.listLabel}</p>
                <ul className="capability-points">
                  {c.experience.sands.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <p className="ai-card-outro">{c.experience.sands.outro}</p>
                {sands?.href && (
                  <Link href={sands.href} className="capability-case ai-env-proof">
                    <span className="capability-case-metric">{sands.metric.value}</span>
                    <span className="capability-case-text">
                      <span className="capability-case-label">{sands.metric.label}</span>
                      <span className="capability-case-client">{c.experience.sands.cta}</span>
                    </span>
                  </Link>
                )}
              </article>

              {/* Mentimeter — professional leadership experience, not a client case */}
              <article className="ai-env-card">
                <p className="capability-sub">{c.experience.mentimeter.name}</p>
                <h3>{c.experience.mentimeter.heading}</h3>
                {c.experience.mentimeter.body.map((p) => <p key={p} className="capability-body">{p}</p>)}
                <dl className="ai-gos">
                  {c.experience.mentimeter.capabilities.map((cap) => (
                    <div key={cap.title}>
                      <dt>{cap.title}</dt>
                      <dd>{cap.body}</dd>
                    </div>
                  ))}
                </dl>
                {c.experience.mentimeter.outro.map((p) => <p key={p} className="capability-body">{p}</p>)}
                <p className="ai-disclaimer">{c.experience.mentimeter.disclaimer}</p>
              </article>
            </div>

            {moreCases.length > 0 && (
              <div className="ai-more-cases">
                <p className="capability-sub">{c.experience.moreLabel}</p>
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

      {/* WHY WORK WITH ME */}
      <section className="section service-sec soft" aria-labelledby="ai-why">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.why.label}</p>
            <h2 id="ai-why">{c.why.h2}</h2>
            <div className="service-text ai-narrow">
              {c.why.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <p className="capability-sub ai-pillars-label">{c.why.pillarsLabel}</p>
            <div className="ai-pillars">
              {c.why.pillars.map((pillar) => (
                <div key={pillar.title} className="service-card">
                  <strong>{pillar.title}.</strong> {pillar.body}
                </div>
              ))}
            </div>
            <p className="ai-closing">
              {c.why.closing[0]} <strong>{c.why.closing[1]}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH + RELATED SERVICES */}
      <section className="section service-sec white" aria-labelledby="ai-who">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.who.label}</p>
            <h2 id="ai-who">{c.who.h2}</h2>
            <div className="ai-audiences">
              {c.who.audiences.map((a) => (
                <div key={a.title} className="ai-audience">
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
            <p className="ai-closing">{c.who.closing}</p>

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
      <section className="section service-sec soft" aria-labelledby="ai-faq">
        <div className="container">
          <div className="service-sec-inner">
            <p className="section-label">{c.faq.label}</p>
            <h2 id="ai-faq">{c.faq.h2}</h2>
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
      <section className="cta-section ai-cta" id="contact" aria-labelledby="ai-contact">
        <div className="container">
          <h2 id="ai-contact">
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
