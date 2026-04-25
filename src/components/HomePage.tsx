import type { Translations } from '@/lib/translations'
import CalEmbed from './CalEmbed'

// Feature icons — order matches features.items in translations
const featureIcons = [
  // Senior from day one — star / award
  <svg key="senior" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>,
  // Focus, not output — crosshair / target
  <svg key="focus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M3 12H1.5M22.5 12H21M17.03 6.97l-1.06 1.06M8.03 15.97l-1.06 1.06M17.03 17.03l-1.06-1.06M8.03 8.03 6.97 6.97M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
  </svg>,
  // Experiment-driven — beaker
  <svg key="experiment" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 0 1 .45 2.309l-1.87 5.162a.75.75 0 0 1-.704.479H6.324a.75.75 0 0 1-.704-.479L3.75 17.31A2.25 2.25 0 0 1 4.2 15h15.6Z" />
  </svg>,
  // The full funnel — chart bar
  <svg key="funnel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>,
  // Flexible — arrows (refresh / cycle)
  <svg key="flexible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>,
  // ICF-accredited coach — users / people
  <svg key="coach" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>,
]

const carouselLogos = [
  { src: '/assets/logo-dnb.svg', alt: 'DNB' },
  { src: '/assets/logo-funnel.svg', alt: 'Funnel' },
  { src: '/assets/logo-leadfeeder.svg', alt: 'Leadfeeder' },
  { src: '/assets/logo-happyvegan.svg', alt: 'Happy Vegan' },
  { src: '/assets/logo-ice.svg', alt: 'Ice' },
  { src: '/assets/logo-linkmobility.svg', alt: 'Link Mobility' },
  { src: '/assets/logo-refapp.svg', alt: 'Refapp' },
  { src: '/assets/logo-rikstv.svg', alt: 'RiksTV' },
  { src: '/assets/logo-strim.svg', alt: 'Strim' },
  { src: '/assets/logo-telia.svg', alt: 'Telia' },
] as const

const LogoSet = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <>
    {carouselLogos.map((logo) => (
      <span key={logo.alt} className="logo-item" aria-hidden={ariaHidden || undefined}>
        <img
          src={logo.src}
          alt={ariaHidden ? '' : logo.alt}
          loading="lazy"
          decoding="async"
          height={40}
        />
      </span>
    ))}
  </>
)

interface HomePageProps {
  t: Translations
  lang: 'en' | 'sv'
}

export default function HomePage({ t, lang }: HomePageProps) {
  const baseUrl = lang === 'en' ? '/' : '/sv/'

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge"><span className="dot"></span> {t.hero.badge}</div>
            <h1>
              {t.hero.h1a} <em>{t.hero.h1b}</em>
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-actions">
              <a href="#book" className="btn btn-primary">{t.hero.cta1}</a>
              <a href="#pricing" className="btn btn-secondary">{t.hero.cta2}</a>
            </div>

            <div className="hero-tags">
              {t.hero.tags.map((tag) => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>

            <div className="hero-founder" style={{ animation: 'fadeUp 0.7s 0.4s ease both' }}>
              <img
                src="/assets/erik-werner.png"
                alt={t.hero.founderName}
                className="hero-founder-img"
                width={56}
                height={56}
                loading="eager"
                decoding="async"
              />
              <div>
                <p className="hero-founder-name">{t.hero.founderName}</p>
                <p className="hero-founder-role">{t.hero.founderRole}<br />{t.hero.founderRole2}</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-scroll-track">
              <img
                src="/images/HERO_CAROUSEL_2.png"
                alt="Growth dashboard"
                className="hero-dashboard-img"
                width={1200}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGO CAROUSEL */}
      <div className="logo-carousel">
        <p className="logo-carousel-label">{t.logos.label}</p>
        <div className="logo-track-wrap">
          <div className="logo-track" aria-label={t.logos.label}>
            <LogoSet />
            <LogoSet ariaHidden />
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="section" id="about">
        <div className="container">
          <div className="intro-grid">
            <div className="intro">
              <h2 className="reveal">
                {t.intro.h2a} <em>{t.intro.h2em}</em>
              </h2>
            </div>
            <div className="intro-text reveal">
              <p dangerouslySetInnerHTML={{ __html: t.intro.p1 }} />
              <p>{t.intro.p2}</p>
              <p dangerouslySetInnerHTML={{ __html: t.intro.p3 }} />
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL */}
      <section className="personal section" id="about-erik">
        <div className="container">
          <div className="personal-header reveal">
            <p className="section-label" style={{ justifyContent: 'center' }}>{t.personal.label}</p>
            <h2>{t.personal.h2a} <em>{t.personal.h2em}</em></h2>
          </div>
          <div className="personal-grid">
            <div className="personal-text reveal">
              <p className="personal-lead">
                {t.personal.greeting} <span className="personal-name">{t.personal.name}</span>{t.personal.nameSuffix}
              </p>
              <p className="personal-role">{t.personal.role}</p>
              <p className="personal-body">
                <strong>{t.personal.highlight}</strong> {t.personal.body}
              </p>
              <p className="personal-body">{t.personal.closing}</p>
              <div className="personal-actions">
                <a href="#book" className="btn btn-primary">{t.hero.cta1}</a>
                <a href="#proof" className="btn btn-secondary">{t.proof.label}</a>
              </div>
            </div>
            <div
              className="personal-image reveal"
              role="img"
              aria-label={t.hero.founderName}
            />
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="how section" id="how">
        <div className="container">
          <p className="section-label reveal">{t.how.label}</p>
          <div className="how-steps">
            {t.how.steps.map((step) => (
              <div key={step.num} className="step-card reveal">
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="section">
        <div className="container">
          <p className="section-label reveal">{t.forWhom.label}</p>
          <div className="forwhom-grid">
            {t.forWhom.cards.map((card) => (
              <div key={card.title} className="forwhom-card reveal">
                <h4>{card.title}</h4>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="proof section" id="proof">
        <div className="container">
          <p className="section-label reveal">{t.proof.label}</p>
          <h2 className="reveal">{t.proof.h2a} <em>{t.proof.h2em}</em></h2>
          <p className="proof-intro reveal">{t.proof.intro}</p>
          <div className="proof-grid">
            {t.proof.stats.map((stat, i) => (
              <div
                key={i}
                className={`stat-card reveal${stat.wide ? ' wide' : ''}${'tall' in stat && stat.tall ? ' tall' : ''}`}
              >
                <div className={`stat-value${stat.teal ? ' teal' : ''}`}>{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <span className="stat-company stat-company-logo">
                  <img src={stat.logo} alt={stat.company} loading="lazy" decoding="async" height={28} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPRINT */}
      <section className="sprint section">
        <div className="container">
          <p className="section-label reveal">{t.sprint.label}</p>
          <div className="sprint-box reveal">
            <div>
              <div className="sprint-label">{t.sprint.tag}</div>
              <h3>{t.sprint.h3a} <em>{t.sprint.h3em}</em></h3>
              <p className="sprint-desc">{t.sprint.desc}</p>
              <div className="sprint-outputs">
                {t.sprint.outputs.map((o) => <span key={o}>{o}</span>)}
              </div>
            </div>
            <div className="sprint-price">
              <div className="price-box">
                <div className="price">{t.sprint.price}</div>
                {t.sprint.priceSek && <div className="price-sek">{t.sprint.priceSek}</div>}
                <div className="price-note">{t.sprint.priceNote}</div>
                <a href="#book" className="btn btn-primary">{t.sprint.cta}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="pricing-header reveal">
            <p className="section-label" style={{ justifyContent: 'center' }}>{t.pricing.label}</p>
            <h2>{t.pricing.h2a} <em>{t.pricing.h2em}</em></h2>
            <p>{t.pricing.sub}</p>
          </div>
          <div className="pricing-grid">
            {t.pricing.plans.map((plan) => (
              <div key={plan.tier} className={`price-card reveal${plan.featured ? ' featured' : ''}`}>
                {plan.featured && <span className="popular-badge">{t.pricing.popular}</span>}
                <div className="price-tier">{plan.tier}</div>
                <div className="price-name">{plan.name}</div>
                <div className="price-amount">{plan.amount} <span>{plan.per}</span></div>
                {plan.sek && <div className="price-sek">{plan.sek}</div>}
                <ul className="price-features">
                  {plan.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href="#book" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>{plan.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="how section">
        <div className="container">
          <div className="features-header reveal">
            <p className="section-label" style={{ justifyContent: 'center' }}>{t.features.label}</p>
            <h2>{t.features.h2a} <em>{t.features.h2em}</em></h2>
          </div>
          <div className="feat-grid">
            {t.features.items.map((item, i) => (
              <div key={item.title} className="feat-item reveal">
                <div className="feat-icon">{featureIcons[i]}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section className="extras section" id="extras">
        <div className="container">
          <p className="section-label reveal">{t.extras.label}</p>
          <div className="extras-grid">
            <div className="extras-card reveal">
              <h3>{t.extras.workshops.title}</h3>
              <p className="sub">{t.extras.workshops.sub}</p>
              <div className="extras-list">
                {t.extras.workshops.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <div className="extras-card reveal">
              <h3>{t.extras.coaching.title}</h3>
              <p className="sub">{t.extras.coaching.sub}</p>
              <div className="coaching-prices">
                {t.extras.coaching.sessions.map((s) => (
                  <div key={s.label} className="coaching-row">
                    <span className="sessions">{s.label}</span>
                    <span className="cprice">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / BOOK */}
      <section className="cta-section" id="book">
        <div className="container">
          <h2 className="reveal">{t.cta.h2a} <em>{t.cta.h2em}</em></h2>
          <p className="reveal">{t.cta.sub}</p>
          <CalEmbed />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            <span className="name">Erik Werner</span> · Greow · Growth as a Service · Stockholm
          </div>
          <div className="footer-links">
            {t.footer.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
