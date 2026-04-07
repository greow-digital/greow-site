import type { Translations } from '@/lib/translations'

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

// Funnel SVG paths (reused in both carousel sets)
const FunnelSvg = ({ id }: { id: string }) => (
  <svg viewBox="0 0 200 28" fill="none" xmlns="http://www.w3.org/2000/svg" height="22" width="157" style={{ height: '22px', width: 'auto' }}>
    <g clipPath={`url(#${id})`}>
      <path d="M181.396 18.6017V-0.00292969H172.094V27.904H190.698V18.6017H181.396Z" fill="currentColor" />
      <path d="M165.116 -0.00292969H146.512V9.2994H165.116V-0.00292969Z" fill="currentColor" />
      <path d="M165.116 18.6016H146.512V27.9039H165.116V18.6016Z" fill="currentColor" />
      <path d="M141.862 18.6016C144.431 18.6016 146.513 16.519 146.513 13.9505C146.513 11.382 144.431 9.29932 141.862 9.29932C139.294 9.29932 137.211 11.382 137.211 13.9505C137.211 16.519 139.294 18.6016 141.862 18.6016Z" fill="currentColor" />
      <path d="M195.35 27.9039C197.919 27.9039 200.002 25.8212 200.002 23.2527C200.002 20.6842 197.919 18.6016 195.35 18.6016C192.782 18.6016 190.699 20.6842 190.699 23.2527C190.699 25.8212 192.782 27.9039 195.35 27.9039Z" fill="currentColor" />
      <path d="M27.9078 -0.00292969H18.6055V9.2994H27.9078V-0.00292969Z" fill="currentColor" />
      <path d="M9.30233 -0.00292969H0V27.904H9.30233V-0.00292969Z" fill="currentColor" />
      <path d="M13.9519 18.6016C16.5204 18.6016 18.6031 16.519 18.6031 13.9505C18.6031 11.382 16.5204 9.29932 13.9519 9.29932C11.3835 9.29932 9.30078 11.382 9.30078 13.9505C9.30078 16.519 11.3835 18.6016 13.9519 18.6016Z" fill="currentColor" />
      <path d="M44.1851 -0.00292969H34.8828V18.6017H44.1851V-0.00292969Z" fill="currentColor" />
      <path d="M62.7906 -0.00292969H53.4883V27.904H62.7906V-0.00292969Z" fill="currentColor" />
      <path d="M48.8387 27.9039C51.4071 27.9039 53.4898 25.8212 53.4898 23.2527C53.4898 20.6842 51.4071 18.6016 48.8387 18.6016C46.2702 18.6016 44.1875 20.6842 44.1875 23.2527C44.1875 25.8212 46.2702 27.9039 48.8387 27.9039Z" fill="currentColor" />
      <path d="M97.6734 9.29932H88.3711V27.904H97.6734V9.29932Z" fill="currentColor" />
      <path d="M79.068 -0.00292969H69.7656V27.904H79.068V-0.00292969Z" fill="currentColor" />
      <path d="M83.7215 9.2994C86.29 9.2994 88.3726 7.21671 88.3726 4.64823C88.3726 2.07976 86.29 -0.00292969 83.7215 -0.00292969C81.153 -0.00292969 79.0703 2.07976 79.0703 4.64823C79.0703 7.21671 81.153 9.2994 83.7215 9.2994Z" fill="currentColor" />
      <path d="M132.556 9.29932H123.254V27.904H132.556V9.29932Z" fill="currentColor" />
      <path d="M113.955 -0.00292969H104.652V27.904H113.955V-0.00292969Z" fill="currentColor" />
      <path d="M118.604 9.2994C121.173 9.2994 123.255 7.21671 123.255 4.64823C123.255 2.07976 121.173 -0.00292969 118.604 -0.00292969C116.036 -0.00292969 113.953 2.07976 113.953 4.64823C113.953 7.21671 116.036 9.2994 118.604 9.2994Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id={id}>
        <rect width="200" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const LeadfeederSvg = () => (
  <svg viewBox="24 8 96 14" xmlns="http://www.w3.org/2000/svg" height="22" width="150" style={{ height: '22px', width: 'auto' }}>
    <path d="M40.4727 11.8311C43.2157 11.8312 45.1152 14.0125 45.1152 16.6504C45.1152 16.9141 45.0978 17.1955 45.0449 17.4941H38.2041C38.468 18.5668 39.2768 19.3232 40.4727 19.3232C41.4924 19.3231 42.2841 18.7951 42.7061 18.0918L44.5518 19.4814C43.8133 20.6245 42.283 21.4336 40.4717 21.4336C37.6411 21.4334 35.7424 19.2883 35.7422 16.6504C35.7422 14.0125 37.7294 11.8311 40.4727 11.8311ZM50.1973 11.8672C51.7798 11.8673 52.6064 12.5175 53.0986 13.502V12.0605H55.4551V21.2051H53.1514V19.71C52.6591 20.7473 51.8323 21.4335 50.1973 21.4336C47.6825 21.4336 45.6778 19.3058 45.6777 16.668C45.6777 14.0301 47.6825 11.8672 50.1973 11.8672ZM66.2871 21.2051H63.9834V19.71C63.491 20.7474 62.6639 21.4336 61.0283 21.4336C58.514 21.4334 56.5089 19.3057 56.5088 16.668C56.5088 14.0302 58.514 11.8674 61.0283 11.8672C62.5934 11.8672 63.4207 12.4996 63.9131 13.4668V8.36719H66.2871V21.2051ZM77.3301 11.8311C80.0732 11.8313 81.9727 14.0125 81.9727 16.6504C81.9726 16.9141 81.9552 17.1955 81.9023 17.4941H75.0615C75.3254 18.5668 76.1342 19.3232 77.3301 19.3232C78.3499 19.3231 79.1415 18.7951 79.5635 18.0918L81.4092 19.4814C80.6706 20.6243 79.1411 21.4335 77.3301 21.4336C74.499 21.4336 72.5988 19.2884 72.5986 16.6504C72.5986 14.0125 74.5868 11.8311 77.3301 11.8311ZM87.2646 11.8311C90.0079 11.8311 91.9072 14.0124 91.9072 16.6504C91.9072 16.9141 91.8898 17.1955 91.8369 17.4941H84.9961C85.2599 18.5667 86.069 19.3231 87.2646 19.3232C88.2846 19.3232 89.076 18.7952 89.498 18.0918L91.3447 19.4814C90.6061 20.6245 89.0759 21.4336 87.2646 21.4336C84.4335 21.4334 82.5343 19.2883 82.5342 16.6504C82.5342 14.0126 84.5215 11.8312 87.2646 11.8311ZM102.247 21.2051H99.9434V19.71C99.4511 20.7474 98.6246 21.4336 96.9893 21.4336C94.4745 21.4336 92.4698 19.3058 92.4697 16.668C92.4697 14.0301 94.4745 11.8672 96.9893 11.8672C98.5543 11.8672 99.3809 12.4997 99.873 13.4668V8.36719H102.247V21.2051ZM108.032 11.8311C110.776 11.8311 112.675 14.0124 112.675 16.6504C112.675 16.9141 112.657 17.1955 112.604 17.4941H105.764C106.028 18.5668 106.836 19.3232 108.032 19.3232C109.052 19.3232 109.844 18.7952 110.266 18.0918L112.112 19.4814C111.374 20.6245 109.844 21.4336 108.032 21.4336C105.201 21.4336 103.302 19.2884 103.302 16.6504C103.302 14.0125 105.289 11.8311 108.032 11.8311ZM30.8887 18.9893H35.4785V21.2051H28.4268V8.89453H30.8887V18.9893ZM72.3887 10.3896H71.7734C71.0703 10.3896 70.7355 10.7585 70.7354 11.4795V12.0605H72.5996V14.083H70.7354V21.2051H68.3613V14.083H67.0771V12.0605H68.3613V11.4443C68.3615 9.59801 69.5572 8.36731 71.4033 8.36719H72.3887V10.3896ZM118.847 11.8496V14.082H118.513C117.141 14.082 116.086 14.9976 116.086 16.5273V21.2051H113.712V12.0605H116.016V13.8018C116.332 12.4828 117.264 11.7618 118.847 11.8496ZM50.584 14.0117C49.0715 14.0117 48.0518 15.2259 48.0518 16.6504C48.0519 18.0396 49.0716 19.2881 50.584 19.2881C52.1488 19.2882 53.1513 18.0923 53.1514 16.668C53.1514 15.2435 52.1488 14.0118 50.584 14.0117ZM61.416 14.0117C59.9035 14.0117 58.8838 15.2259 58.8838 16.6504C58.8839 18.0396 59.9036 19.2881 61.416 19.2881C62.9809 19.2882 63.9833 18.0923 63.9834 16.668C63.9834 15.2435 62.981 14.0118 61.416 14.0117ZM97.376 14.0117C95.8636 14.0119 94.8438 15.226 94.8438 16.6504C94.8439 18.0396 95.8637 19.2879 97.376 19.2881C98.941 19.2883 99.9433 18.0924 99.9434 16.668C99.9434 15.2435 98.9409 14.0117 97.376 14.0117ZM40.4375 13.8721C39.3121 13.8719 38.468 14.6276 38.2041 15.7178H42.7236C42.4597 14.6981 41.5979 13.8721 40.4375 13.8721ZM77.2949 13.8721C76.1698 13.8719 75.3255 14.6276 75.0615 15.7178H79.5811C79.3172 14.6981 78.4553 13.8723 77.2949 13.8721ZM87.2295 13.8721C86.1044 13.8721 85.26 14.6276 84.9961 15.7178H89.5156C89.2516 14.6981 88.39 13.8721 87.2295 13.8721ZM107.997 13.8721C106.872 13.872 106.028 14.6276 105.764 15.7178H110.283C110.019 14.698 109.158 13.8721 107.997 13.8721Z" fill="currentColor" />
  </svg>
)

const LogoSet = ({ prefix }: { prefix: string }) => (
  <>
    <span className="logo-item"><FunnelSvg id={`${prefix}-funnel`} /></span>
    <span className="logo-item"><img src="/assets/logo-dnb.jpg" alt="DNB" /></span>
    <span className="logo-item"><LeadfeederSvg /></span>
    <span className="logo-item"><img src="/assets/logo-dealfront.webp" alt="Dealfront" /></span>
    <span className="logo-item"><img src="/assets/logo-strim.png" alt="Strim" /></span>
    <span className="logo-item"><img src="/assets/logo-telia.png" alt="Telia" /></span>
    <span className="logo-item"><img src="/assets/logo-rikstv.png" alt="RiksTV" /></span>
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
          <img src="/assets/erik-werner.png" alt={t.hero.founderName} className="hero-founder-img" />
          <div>
            <p className="hero-founder-name">{t.hero.founderName}</p>
            <p className="hero-founder-role">{t.hero.founderRole}<br />{t.hero.founderRole2}</p>
          </div>
        </div>
      </section>

      {/* LOGO CAROUSEL */}
      <div className="logo-carousel">
        <p className="logo-carousel-label">{t.logos.label}</p>
        <div className="logo-track-wrap">
          <div className="logo-track">
            <LogoSet prefix="s1" />
            <LogoSet prefix="s2" />
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
                <span className="stat-company">{stat.company}</span>
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
          <div
            className="calendly-inline-widget reveal"
            data-url="https://calendly.com/erik-greow?background_color=a5dbc2&text_color=0a2424&primary_color=ff8773"
            style={{ minWidth: '320px', height: '700px', marginTop: '32px', borderRadius: 'var(--radius)', overflow: 'hidden' }}
          />
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
