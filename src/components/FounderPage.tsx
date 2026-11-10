import Link from 'next/link'
import type { Translations } from '@/lib/translations'
import { founderByLang } from '@/lib/founder'
import { workBase, type Lang } from '@/lib/work'
import { profiles } from '@/lib/business'
import CalEmbed from './CalEmbed'
import Footer from './Footer'

// Founder bio (/erik-oliva-werner/, /sv/erik-oliva-werner/). Uses the existing
// service-hero / service-sec / how / cta-section patterns plus bio-* styles.
export default function FounderPage({ t, lang }: { t: Translations; lang: Lang }) {
  const c = founderByLang[lang]
  const caseHref = (slug: string) => `${workBase[lang]}${slug}/`
  // Only shown once a verified LinkedIn URL is added to profiles.person.
  const linkedin = profiles.person.find((u) => u.includes('linkedin.com'))

  return (
    <>
      {/* HERO */}
      <section className="service-hero bio-hero">
        <div className="container bio-hero-grid">
          <div>
            <p className="section-label">{c.hero.kicker}</p>
            <h1>
              {c.hero.h1a} <em>{c.hero.h1b}</em>
            </h1>
            {c.hero.body.map((p) => <p key={p} className="ai-hero-body">{p}</p>)}
            <div className="hero-actions bio-hero-actions">
              <a href="#contact" className="btn btn-primary">{c.hero.cta}</a>
              <Link href={workBase[lang]} className="btn btn-secondary">{c.hero.cta2}</Link>
            </div>
          </div>
          <figure className="bio-photo">
            <img
              src="/images/erik-oliva-werner-1200.webp"
              alt={c.hero.photoAlt}
              width={1200}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      {/* MY STORY */}
      <section className="section service-sec soft" aria-labelledby="bio-story">
        <div className="container">
          <div className="service-sec-inner">
            <p className="section-label">{c.story.label}</p>
            <h2 id="bio-story">{c.story.h2}</h2>
            <div className="service-text">
              {c.story.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="bio-spaces">
              {c.story.spaces.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <p className="ai-closing">{c.story.outro}</p>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="section service-sec white" aria-labelledby="bio-background">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.background.label}</p>
            <h2 id="bio-background">{c.background.h2}</h2>
            <div className="service-text ai-narrow">
              {c.background.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="bio-background-grid">
              <div>
                <p className="capability-sub">{c.background.orgsLabel}</p>
                <ul className="bio-orgs">
                  {c.background.orgs.map((o) => (
                    <li key={o.name}>
                      {o.slug ? <Link href={caseHref(o.slug)}>{o.name} <span aria-hidden="true">→</span></Link> : <span>{o.name}</span>}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="capability-sub">{c.background.skillsLabel}</p>
                <ul className="capability-points">
                  {c.background.skills.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
            <p className="ai-closing">
              {c.background.outro[0]} <strong>{c.background.outro[1]}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ENTREPRENEURIAL SIDE */}
      <section className="section service-sec soft" aria-labelledby="bio-entrepreneur">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.entrepreneur.label}</p>
            <h2 id="bio-entrepreneur">{c.entrepreneur.h2}</h2>
            <p className="service-text ai-narrow">{c.entrepreneur.intro}</p>
            <div className="bio-ventures">
              {c.entrepreneur.ventures.map((v) => (
                <article key={v.name} className="ai-env-card">
                  <h3>{v.name}</h3>
                  <p className="capability-body">{v.body}</p>
                  {v.slug && (
                    <Link href={caseHref(v.slug)} className="capability-link bio-link">{c.entrepreneur.readCase}</Link>
                  )}
                </article>
              ))}
            </div>
            <p className="ai-closing">
              {c.entrepreneur.outro[0]} <strong>{c.entrepreneur.outro[1]}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH TO GROWTH */}
      <section className="how section" aria-labelledby="bio-approach">
        <div className="container">
          <p className="section-label">{c.approach.label}</p>
          <h2 id="bio-approach" className="ai-how-heading">
            {c.approach.h2a} <em className="gtm-em-light">{c.approach.h2b}</em>
          </h2>
          <div className="ai-how-intro">
            {c.approach.body.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ul className="bio-nots">
            {c.approach.nots.map((n) => <li key={n}>{n}</li>)}
          </ul>
          <p className="gtm-loop">{c.approach.closing}</p>
        </div>
      </section>

      {/* LEADERSHIP & COACHING */}
      <section className="section service-sec white" aria-labelledby="bio-leadership">
        <div className="container">
          <div className="service-sec-inner">
            <p className="section-label">{c.leadership.label}</p>
            <h2 id="bio-leadership">{c.leadership.h2}</h2>
            <div className="service-text">
              {c.leadership.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="ai-questions">
              {c.leadership.questions.map((q) => <li key={q}>{q}</li>)}
            </ul>
            <div className="service-text">
              {c.leadership.outro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <Link href={lang === 'en' ? '/growth-coaching/' : '/sv/growth-coaching/'} className="capability-link bio-link">
              {c.leadership.link}
            </Link>
          </div>
        </div>
      </section>

      {/* NEXT CHAPTER */}
      <section className="section service-sec soft" aria-labelledby="bio-next">
        <div className="container">
          <div className="service-sec-inner">
            <p className="section-label">{c.nextChapter.label}</p>
            <h2 id="bio-next">
              {c.nextChapter.h2a} <em>{c.nextChapter.h2b}</em>
            </h2>
            <div className="service-text">
              {c.nextChapter.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="ai-questions bio-questions-white">
              {c.nextChapter.questions.map((q) => <li key={q}>{q}</li>)}
            </ul>
            <p className="gtm-question">{c.nextChapter.closing}</p>
          </div>
        </div>
      </section>

      {/* WHAT I'M BUILDING */}
      <section className="capabilities section bio-building" aria-labelledby="bio-building">
        <div className="container">
          <div className="capabilities-header">
            <p className="section-label">{c.building.label}</p>
            <h2 id="bio-building">{c.building.h2}</h2>
            <p>{c.building.intro}</p>
          </div>
          <div className="capability-grid">
            {c.building.items.map((item) => (
              <article key={item.key} className="capability-card">
                <p className="capability-sub">{item.kicker}</p>
                <h3>{item.title}</h3>
                {item.body.map((p) => <p key={p} className="capability-body">{p}</p>)}
                {item.list.length > 0 && (
                  <ul className="capability-points">
                    {item.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )}
                {item.outro && <p className="capability-body">{item.outro}</p>}
                {item.note && <p className="ai-disclaimer">{item.note}</p>}
                {item.links.length > 0 && (
                  <div className="capability-links">
                    {item.links.map((l) => (
                      <Link key={l.href} href={l.href} className="capability-link">{l.label}</Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="how section" aria-labelledby="bio-how">
        <div className="container">
          <p className="section-label">{c.howIWork.label}</p>
          <h2 id="bio-how" className="ai-how-heading">
            {c.howIWork.h2a} <em className="gtm-em-light">{c.howIWork.h2b}</em>
          </h2>
          <div className="ai-how-intro">
            {c.howIWork.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ol className="bio-principles">
            {c.howIWork.principles.map((pr, i) => (
              <li key={pr.title}>
                <span className="gtm-stage-step" aria-hidden="true">{i + 1}</span>
                <h3>{pr.title}</h3>
                <p>{pr.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="section service-sec white" aria-labelledby="bio-who">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.who.label}</p>
            <h2 id="bio-who">{c.who.h2}</h2>
            <p className="service-text ai-narrow">{c.who.intro}</p>
            <div className="ai-audiences">
              {c.who.areas.map((a) => (
                <div key={a.title} className="ai-audience">
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  <div className="capability-links">
                    {a.links.map((l) => (
                      <Link key={l.href} href={l.href} className="capability-link">{l.label}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="ai-closing">
              {c.who.outro[0]} <strong>{c.who.outro[1]}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* A LITTLE MORE PERSONAL */}
      <section className="section service-sec soft" aria-labelledby="bio-personal">
        <div className="container">
          <div className="service-sec-inner">
            <p className="section-label">{c.personal.label}</p>
            <h2 id="bio-personal">{c.personal.h2}</h2>
            <div className="service-text">
              {c.personal.body.map((p, i) => (
                <p key={p}>{i === c.personal.body.length - 1 ? <strong>{p}</strong> : p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BIOS */}
      <section className="section service-sec white" aria-labelledby="bio-bios">
        <div className="container">
          <div className="service-sec-inner wide">
            <p className="section-label">{c.bios.label}</p>
            <h2 id="bio-bios">{c.bios.h2}</h2>
            <div className="bio-bios">
              <div className="bio-bio-card">
                <h3>{c.bios.shortLabel}</h3>
                {c.bios.short.map((p) => <p key={p}>{p}</p>)}
              </div>
              <div className="bio-bio-card">
                <h3>{c.bios.microLabel}</h3>
                <p>{c.bios.micro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="cta-section ai-cta" id="contact" aria-labelledby="bio-contact">
        <div className="container">
          <h2 id="bio-contact">
            {c.cta.h2a} <em>{c.cta.h2b}</em>
          </h2>
          {c.cta.body.map((p) => <p key={p}>{p}</p>)}
          <div className="bio-cta-actions">
            <a href="#book-call" className="btn btn-primary">{c.cta.button}</a>
            {linkedin && (
              <a href={linkedin} className="btn btn-secondary" target="_blank" rel="noopener noreferrer me">
                {c.cta.linkedin}
              </a>
            )}
          </div>
          <p className="ai-signature">
            {c.cta.signature.map((line, i) => (
              <span key={line}>
                {i === 0 ? <strong>{line}</strong> : line}
                {i < c.cta.signature.length - 1 && <br />}
              </span>
            ))}
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
