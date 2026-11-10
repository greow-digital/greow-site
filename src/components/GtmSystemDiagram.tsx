import type { AiGtmContent } from '@/lib/aiGtmSystems'

// Animated GTM-system diagram: Product → Launch board → GTM context →
// Growth Operating System → Activation, with a feedback loop back to Product.
// Pure HTML/CSS (gsys-* in globals.css): a pulse travels along each connector,
// each column lights up as it arrives, and activation channels light in turn.
// All motion is decorative and switches off under prefers-reduced-motion.

type GtmSystem = AiGtmContent['gtmSystem']

const I = ({ d, children }: { d?: string; children?: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d ? <path d={d} /> : children}
  </svg>
)

const icons = {
  sparkle: <I d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6" />,
  refresh: <I d="M20 11a8 8 0 0 0-14.6-4.5M4 4v3h3m-3 6a8 8 0 0 0 14.6 4.5M20 20v-3h-3" />,
  tag: <I d="M3 12V4h8l9 9-8 8-9-9Zm4.5-4.5h.01" />,
  puzzle: <I d="M9 4h4v2a2 2 0 1 0 4 0V4h3v6h-2a2 2 0 1 0 0 4h2v6h-6v-2a2 2 0 1 0-4 0v2H4v-6h2a2 2 0 1 0 0-4H4V4h5Z" />,
  build: <I d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5" />,
  calendar: <I d="M4 6h16v14H4zM4 10h16M8 3v4m8-4v4" />,
  check: <I d="M5 12.5 10 17l9-10" />,
  doc: <I d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6m-6 4h6" />,
  layers: <I d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5m-18 4 9 5 9-5" />,
  image: <I d="M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4M15 9h.01" />,
  bolt: <I d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  people: <I d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 9a6 6 0 0 1 12 0m2-9a3 3 0 1 0 0-6m1 15a6 6 0 0 0-3-5.2" />,
  window: <I d="M3 5h18v14H3zM3 9h18M6 7h.01M8.5 7h.01" />,
  mail: <I d="M3 6h18v12H3zM3 7l9 6 9-6" />,
  message: <I d="M4 5h16v11H9l-5 4V5Z" />,
  play: <I d="M7 4v16l13-8L7 4Z" />,
  share: <I d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />,
  chart: <I d="M5 20V10m7 10V4m7 16v-7" />,
  cycle: <I d="M20 11a8 8 0 0 0-14.6-4.5M4 4v3h3m-3 6a8 8 0 0 0 14.6 4.5M20 20v-3h-3" />,
}

const productIcons = [icons.sparkle, icons.refresh, icons.tag, icons.puzzle]
const contextIcons = [icons.doc, icons.layers, icons.image]
const activationIcons = [icons.window, icons.mail, icons.message, icons.play, icons.share]

const Connector = ({ i }: { i: number }) => (
  <li className={`gsys-conn gsys-conn-${i}`} aria-hidden="true">
    <span className="gsys-conn-line" />
    <span className="gsys-conn-dot" />
  </li>
)

export default function GtmSystemDiagram({ g }: { g: GtmSystem }) {
  return (
    <figure className="gsys">
      <div className="gsys-cycle">
        <span className="gsys-cycle-icon" aria-hidden="true">{icons.cycle}</span>
        <span>
          <strong>{g.cycle.label}</strong>
          <span className="gsys-cycle-steps">{g.cycle.steps.join(' › ')}</span>
        </span>
      </div>

      <ol className="gsys-flow">
        {/* 1 · Product */}
        <li className="gsys-col gsys-col-1">
          <h3 className="gsys-col-title">{g.product.title}</h3>
          <ul className="gsys-pills">
            {g.product.items.map((item, i) => (
              <li key={item}><span className="gsys-ico">{productIcons[i]}</span>{item}</li>
            ))}
          </ul>
          <div className="gsys-note">
            <span className="gsys-ico">{icons.build}</span>
            <span><strong>{g.product.noteTitle}</strong>{g.product.noteBody}</span>
          </div>
        </li>
        <Connector i={1} />

        {/* 2 · Launch board */}
        <li className="gsys-col gsys-col-2">
          <h3 className="gsys-col-title">{g.launch.title}</h3>
          <div className="gsys-panel">
            <span className="gsys-ico gsys-ico-lg">{icons.calendar}</span>
            <p className="gsys-lead">{g.launch.lead}</p>
            <ul className="gsys-checks">
              {g.launch.items.map((item) => (
                <li key={item}><span className="gsys-check">{icons.check}</span>{item}</li>
              ))}
            </ul>
          </div>
        </li>
        <Connector i={2} />

        {/* 3 · GTM context */}
        <li className="gsys-col gsys-col-3">
          <h3 className="gsys-col-title">{g.context.title}</h3>
          <ul className="gsys-docs">
            {g.context.items.map((item, i) => (
              <li key={item.title} className={`gsys-doc gsys-doc-${i + 1}`}>
                <span className="gsys-ico gsys-ico-lg">{contextIcons[i]}</span>
                <span><strong>{item.title}</strong>{item.body}</span>
              </li>
            ))}
          </ul>
        </li>
        <Connector i={3} />

        {/* 4 · Growth Operating System */}
        <li className="gsys-col gsys-col-4 gsys-engine">
          <div className="gsys-engine-mark" aria-hidden="true">{icons.layers}</div>
          <h3 className="gsys-engine-title">{g.engine.title}</h3>
          <p className="gsys-engine-body">{g.engine.body}</p>
          <ul className="gsys-tiers">
            {g.engine.tiers.map((tier, i) => (
              <li key={tier.size} className={`gsys-tier gsys-tier-${i + 1}`}>
                <span className="gsys-ico">{i === 0 ? icons.bolt : icons.people}</span>
                <span><strong>{tier.title} ({tier.size})</strong>{tier.body}</span>
              </li>
            ))}
          </ul>
        </li>
        <Connector i={4} />

        {/* 5 · Activation */}
        <li className="gsys-col gsys-col-5">
          <h3 className="gsys-col-title">{g.activation.title}</h3>
          <ul className="gsys-pills gsys-channels">
            {g.activation.items.map((item, i) => (
              <li key={item} className={`gsys-channel gsys-channel-${i + 1}`}>
                <span className="gsys-ico">{activationIcons[i]}</span>{item}
              </li>
            ))}
          </ul>
        </li>
      </ol>

      {/* Feedback loop back to Product */}
      <div className="gsys-feedback">
        <svg className="gsys-loop" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
          <path className="gsys-loop-track" d="M 95 0 V 30 H 5 V 2" />
          <path className="gsys-loop-flow" d="M 95 0 V 30 H 5 V 2" />
        </svg>
        <span className="gsys-loop-arrow" aria-hidden="true">↑</span>
        <div className="gsys-feedback-pill">
          <span className="gsys-ico">{icons.chart}</span>
          <span>
            <strong>{g.feedback.title}</strong>
            <span>{g.feedback.body}</span>
          </span>
        </div>
      </div>

      <figcaption className="gsys-caption">{g.caption}</figcaption>
    </figure>
  )
}
