// Coded illustrations for the site. All decorative: every root is aria-hidden,
// motion is CSS-only (home.css, "ILLUSTRATIONS") and stops under
// prefers-reduced-motion. No raster assets, so they stay sharp and tiny.

type Lang = 'en' | 'sv'

export const LogoMark = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="16" r="5" fill="#FF8773" />
    <ellipse cx="16" cy="7" rx="3.5" ry="5" fill="#A5DBC2" />
    <ellipse cx="16" cy="25" rx="3.5" ry="5" fill="#195B5A" />
    <ellipse cx="7.5" cy="12" rx="3.5" ry="5" transform="rotate(-45 7.5 12)" fill="#A5DBC2" />
    <ellipse cx="24.5" cy="12" rx="3.5" ry="5" transform="rotate(45 24.5 12)" fill="#A5DBC2" />
    <ellipse cx="7.5" cy="20" rx="3.5" ry="5" transform="rotate(45 7.5 20)" fill="#A5DBC2" />
    <ellipse cx="24.5" cy="20" rx="3.5" ry="5" transform="rotate(-45 24.5 20)" fill="#A5DBC2" />
  </svg>
)

// ── HERO: the growth engine ──────────────────────────────────────────────────
// A core with three orbits of channels, plus floating signal cards. The cards
// are illustrative product signals (the same ones the old hero image showed).
const heroCopy = {
  en: {
    agent: 'growth-agent',
    running: 'running',
    log: ['Research ICP accounts', 'Draft 6 ad variants', 'Ship experiment #2'],
    sqls: 'new SQLs',
    week: 'This week',
    won: 'Experiment #2 has WON',
    users: 'new users',
    yesterday: 'Yesterday',
  },
  sv: {
    agent: 'growth-agent',
    running: 'kör',
    log: ['Researcha ICP-konton', 'Skriv 6 annonsvarianter', 'Skeppa experiment #2'],
    sqls: 'nya SQLs',
    week: 'Den här veckan',
    won: 'Experiment #2 har VUNNIT',
    users: 'nya användare',
    yesterday: 'Igår',
  },
}

const orbits: { r: number; dur: number; chips: [string, number][] }[] = [
  { r: 19.5, dur: 36, chips: [['AI', 20], ['Data', 200]] },
  { r: 31.5, dur: 54, chips: [['GTM', 95], ['PLG', 215], ['CRM', 335]] },
  { r: 43.5, dur: 76, chips: [['SEO', 40], ['CRO', 130], ['Ads', 250], ['Email', 310]] },
]

export function HeroVisual({ lang }: { lang: Lang }) {
  const c = heroCopy[lang]
  return (
    <div className="hv" aria-hidden="true">
      <svg className="hv-rings" viewBox="0 0 600 600" fill="none">
        <defs>
          <linearGradient id="hv-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#A5DBC2" />
            <stop offset="1" stopColor="#FF8773" />
          </linearGradient>
          <radialGradient id="hv-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#1E7372" stopOpacity="0.75" />
            <stop offset="0.55" stopColor="#195B5A" stopOpacity="0.22" />
            <stop offset="1" stopColor="#195B5A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="300" r="290" fill="url(#hv-glow)" />
        {[117, 189, 261].map((r, i) => (
          <g key={r}>
            <circle cx="300" cy="300" r={r} stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray={i === 1 ? '2 7' : undefined} />
            <circle
              className={`hv-arc hv-arc-${i + 1}`}
              cx="300" cy="300" r={r}
              stroke="url(#hv-arc)" strokeWidth="2" strokeLinecap="round"
              pathLength={100} strokeDasharray="14 86"
            />
          </g>
        ))}
        {/* spokes */}
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <line key={a} x1="300" y1="300" x2="300" y2="39" stroke="rgba(255,255,255,0.05)" transform={`rotate(${a} 300 300)`} />
        ))}
      </svg>

      {orbits.map((o, i) => (
        <div key={i} className="hv-orbit" style={{ '--dur': `${o.dur}s`, '--r': `${o.r}cqw`, animationDirection: i % 2 ? 'reverse' : 'normal' } as React.CSSProperties}>
          {o.chips.map(([label, a]) => (
            <span key={label} className="hv-chip-pos" style={{ '--a': `${a}deg` } as React.CSSProperties}>
              <span className="hv-chip" style={{ animationDirection: i % 2 ? 'reverse' : 'normal' }}>{label}</span>
            </span>
          ))}
        </div>
      ))}

      <div className="hv-core">
        <span className="hv-core-halo" />
        <LogoMark className="hv-core-mark" />
      </div>

      {/* floating signal cards */}
      <div className="hv-card hv-card-agent">
        <div className="hv-card-head">
          <span className="hv-dots"><i /><i /><i /></span>
          <span className="hv-mono">{c.agent}</span>
          <span className="hv-status"><i />{c.running}</span>
        </div>
        <ul className="hv-log">
          {c.log.map((line, i) => (
            <li key={line} style={{ '--n': i } as React.CSSProperties}>
              <span className="hv-tick">
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.5 5 9l4.5-6" /></svg>
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="hv-card hv-card-chart">
        <div className="hv-card-meta"><span>{c.week}</span><b>+14%</b></div>
        <div className="hv-big">13 <small>{c.sqls}</small></div>
        <svg className="hv-spark" viewBox="0 0 200 60" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hv-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#A5DBC2" stopOpacity="0.45" />
              <stop offset="1" stopColor="#A5DBC2" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 50 C 25 48, 35 38, 55 40 S 85 28, 105 30 S 135 14, 155 16 S 185 6, 200 4 V60 H0Z" fill="url(#hv-fill)" />
          <path className="hv-spark-line" pathLength={1} d="M0 50 C 25 48, 35 38, 55 40 S 85 28, 105 30 S 135 14, 155 16 S 185 6, 200 4" stroke="#A5DBC2" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="hv-card hv-card-win">
        <span className="hv-win-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.75 3v5.7a2.25 2.25 0 0 1-.66 1.6L5 14.5m4.75-11.5h4.5m0 0v5.7c0 .6.24 1.17.66 1.6L19 14.5M5 14.5 3.75 18a2.25 2.25 0 0 0 2.1 3h12.3a2.25 2.25 0 0 0 2.1-3L19 14.5M5 14.5h14" /></svg>
        </span>
        <span>
          <b>{c.won}</b>
          <span className="hv-bars"><i style={{ '--w': '46%' } as React.CSSProperties} /><i style={{ '--w': '92%' } as React.CSSProperties} /></span>
        </span>
        <em>+50%</em>
      </div>
    </div>
  )
}

// ── INTRO: scattered initiatives → one focused line ──────────────────────────
const scatter: [number, number, number, string][] = [
  [22, 40, 38, '#FF8773'], [58, 112, -62, '#A5DBC2'], [34, 172, 140, '#195B5A'], [92, 62, 200, '#195B5A'],
  [118, 150, 15, '#FF8773'], [76, 196, -110, '#A5DBC2'], [142, 30, 95, '#A5DBC2'], [150, 100, -30, '#195B5A'],
  [16, 104, 250, '#A5DBC2'], [112, 204, 60, '#195B5A'], [170, 176, -150, '#FF8773'], [176, 58, 170, '#FF8773'],
]

export function FocusIllustration() {
  return (
    <svg className="focus-ill" viewBox="0 0 560 230" fill="none" aria-hidden="true">
      {/* scattered: dots drifting in every direction */}
      {scatter.map(([x, y, a, col], i) => (
        <g key={i} className="focus-dot" style={{ '--n': i, '--a': `${a}deg` } as React.CSSProperties} transform={`translate(${x} ${y})`}>
          <g className="focus-dot-inner">
            <line x1="0" y1="0" x2="16" y2="0" stroke={col} strokeWidth="1.5" strokeLinecap="round" opacity="0.55" transform={`rotate(${a})`} />
            <circle r="4.5" fill={col} />
          </g>
        </g>
      ))}
      {/* converge */}
      {[40, 80, 115, 150, 190].map((y, i) => (
        <path key={y} className="focus-funnel" style={{ '--n': i } as React.CSSProperties} d={`M196 ${y} C 240 ${y}, 250 115, 292 115`} stroke="#195B5A" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 6" />
      ))}
      <circle cx="304" cy="115" r="22" fill="#fff" stroke="rgba(14,21,20,0.12)" />
      <circle className="focus-lens" cx="304" cy="115" r="22" stroke="#FF8773" strokeWidth="2" />
      <g transform="translate(290 101) scale(0.875)">
        <circle cx="16" cy="16" r="5" fill="#FF8773" />
        <ellipse cx="16" cy="7" rx="3.5" ry="5" fill="#A5DBC2" />
        <ellipse cx="16" cy="25" rx="3.5" ry="5" fill="#195B5A" />
        <ellipse cx="7.5" cy="12" rx="3.5" ry="5" transform="rotate(-45 7.5 12)" fill="#A5DBC2" />
        <ellipse cx="24.5" cy="12" rx="3.5" ry="5" transform="rotate(45 24.5 12)" fill="#A5DBC2" />
        <ellipse cx="7.5" cy="20" rx="3.5" ry="5" transform="rotate(45 7.5 20)" fill="#A5DBC2" />
        <ellipse cx="24.5" cy="20" rx="3.5" ry="5" transform="rotate(-45 24.5 20)" fill="#A5DBC2" />
      </g>
      {/* focused: one compounding line */}
      <path className="focus-line" pathLength={1} d="M330 115 C 380 115, 392 150, 432 128 S 480 60, 540 26" stroke="#195B5A" strokeWidth="3" strokeLinecap="round" />
      <path className="focus-arrow" d="M524 22 541 25 536 42" stroke="#195B5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {[[392, 139], [448, 108], [497, 62]].map(([x, y], i) => (
        <circle key={x} className="focus-step" style={{ '--n': i } as React.CSSProperties} cx={x} cy={y} r="6" fill="#F6F4EE" stroke="#FF8773" strokeWidth="3" />
      ))}
    </svg>
  )
}

// ── CAPABILITIES ─────────────────────────────────────────────────────────────
// 01 Strategy: a route across a contour map, a few deliberate waypoints.
export function StrategyIllustration() {
  return (
    <svg className="cap-ill ill-strategy" viewBox="0 0 440 300" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity="0.13">
        <path d="M-10 250 C 70 190, 130 270, 210 220 S 350 170, 450 210" />
        <path d="M-10 215 C 70 150, 140 235, 215 180 S 350 130, 450 165" />
        <path d="M-10 178 C 75 112, 150 196, 222 140 S 352 92, 450 122" />
        <path d="M-10 140 C 80 74, 160 156, 230 100 S 355 54, 450 80" />
        <path d="M-10 100 C 85 36, 170 116, 238 62 S 358 16, 450 40" />
        <path d="M-10 62 C 90 0, 180 76, 246 24 S 360 -20, 450 2" />
      </g>
      {/* discarded bets */}
      <g className="ill-bets" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="3 6" strokeLinecap="round">
        <path d="M58 248 C 120 262, 190 268, 262 262" />
        <path d="M58 248 C 60 190, 42 130, 76 70" />
      </g>
      <path className="ill-route" pathLength={1} d="M58 248 C 110 232, 128 196, 168 184 S 236 172, 262 132 S 318 78, 372 58" stroke="#FF8773" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="58" cy="248" r="7" fill="currentColor" />
      {[[168, 184], [262, 132]].map(([x, y], i) => (
        <g key={x} className="ill-waypoint" style={{ '--n': i } as React.CSSProperties}>
          <circle cx={x} cy={y} r="14" fill="#A5DBC2" fillOpacity="0.28" className="ill-ping" />
          <circle cx={x} cy={y} r="7" fill="#A5DBC2" stroke="#195B5A" strokeWidth="2" />
        </g>
      ))}
      {/* destination flag */}
      <g className="ill-flag">
        <circle cx="372" cy="58" r="24" fill="#FF8773" fillOpacity="0.2" className="ill-ping" />
        <path d="M372 62V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M372 28h26l-7 9 7 9h-26Z" fill="#FF8773" />
        <circle cx="372" cy="62" r="5" fill="currentColor" />
      </g>
      {/* compass */}
      <g className="ill-compass" transform="translate(372 232)">
        <circle r="30" stroke="currentColor" strokeOpacity="0.25" />
        <circle r="22" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="2 5" />
        <g className="ill-needle">
          <path d="M0-20 5 0 0 20-5 0Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M0-20 5 0H-5Z" fill="#FF8773" />
        </g>
        <circle r="2.5" fill="currentColor" />
      </g>
    </svg>
  )
}

// 02 Systems: a hub wired to the tools, with signals travelling the wires.
const sysNodes: [number, number, string][] = [
  [70, 62, 'M4 18V9m6 9V5m6 13v-7'], // chart
  [64, 232, 'M3 6h18v12H3zM3 7l9 6 9-6'], // mail
  [220, 36, 'M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm5-1.5L20 20'], // search
  [222, 264, 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6m-6 4h6'], // doc
  [374, 70, 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 9a6 6 0 0 1 12 0m2-9a3 3 0 1 0 0-6m1 15a6 6 0 0 0-3-5.2'], // people
  [378, 226, 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z'], // bolt
]

export function SystemsIllustration() {
  return (
    <svg className="cap-ill ill-systems" viewBox="0 0 440 300" fill="none" aria-hidden="true">
      {sysNodes.map(([x, y], i) => {
        const d = `M${x} ${y} C ${(x + 220) / 2} ${y}, ${(x + 220) / 2} 150, 220 150`
        return (
          <g key={i}>
            <path d={d} stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
            <path className="ill-wire" style={{ '--n': i } as React.CSSProperties} d={d} pathLength={100} stroke={i % 2 ? '#FF8773' : '#A5DBC2'} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="10 90" />
          </g>
        )
      })}
      {sysNodes.map(([x, y, icon], i) => (
        <g key={i} className="ill-node" style={{ '--n': i } as React.CSSProperties} transform={`translate(${x} ${y})`}>
          <rect x="-24" y="-24" width="48" height="48" rx="15" fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeOpacity="0.25" />
          <path d={icon} transform="translate(-12 -12)" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      <g transform="translate(220 150)">
        <circle className="ill-hub-ring" r="56" stroke="#A5DBC2" strokeOpacity="0.35" strokeDasharray="3 7" />
        <circle className="ill-ping" r="44" fill="#A5DBC2" fillOpacity="0.14" />
        <circle r="36" fill="#195B5A" stroke="#A5DBC2" strokeOpacity="0.6" />
        {/* spark */}
        <path className="ill-spark" d="M0-17C1.8-6 6-1.8 17 0 6 1.8 1.8 6 0 17-1.8 6-6 1.8-17 0-6-1.8-1.8-6 0-17Z" fill="#FF8773" />
      </g>
    </svg>
  )
}

// 03 Execution: an experiment board — variants racing, one winning, shipped weekly.
export function ExecutionIllustration() {
  const bars = [38, 52, 46, 70, 64, 92, 118, 150]
  return (
    <svg className="cap-ill ill-execution" viewBox="0 0 440 300" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity="0.12">
        {[70, 120, 170, 220].map((y) => <path key={y} d={`M40 ${y}H400`} strokeDasharray="2 6" />)}
      </g>
      <path d="M40 252H400" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      {bars.map((h, i) => (
        <rect
          key={i} className="ill-bar" style={{ '--n': i } as React.CSSProperties}
          x={52 + i * 43} y={252 - h} width="27" height={h} rx="7"
          fill={i === bars.length - 1 ? '#FF8773' : i >= 5 ? '#195B5A' : 'currentColor'}
          fillOpacity={i >= 5 ? 1 : 0.16}
        />
      ))}
      <path className="ill-trend" pathLength={1} d="M65 204 C 110 196, 140 204, 194 176 S 280 150, 322 122 S 362 92, 372 84" stroke="#195B5A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 0" />
      {/* winner badge */}
      <g className="ill-badge" transform="translate(366 66)">
        <circle className="ill-ping" r="26" fill="#FF8773" fillOpacity="0.22" />
        <circle r="17" fill="#FF8773" />
        <path d="M-7 0.5-2 5.5 7-5" stroke="#06100F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* A/B toggle */}
      <g transform="translate(44 34)">
        <rect width="118" height="36" rx="18" fill="currentColor" fillOpacity="0.07" />
        <rect className="ill-toggle" x="4" y="4" width="54" height="28" rx="14" fill="#195B5A" />
        <text x="31" y="23" textAnchor="middle" className="ill-ab ill-ab-a">A</text>
        <text x="87" y="23" textAnchor="middle" className="ill-ab ill-ab-b">B</text>
      </g>
    </svg>
  )
}

// ── PROOF: a quiet chart behind each headline number ─────────────────────────
const sparkPaths = {
  up: 'M0 74 C 40 70, 60 58, 90 56 S 140 40, 170 34 S 220 14, 260 6',
  step: 'M0 74 H50 V58 H104 V40 H158 V22 H212 V6 H260',
  down: 'M0 8 C 40 10, 60 26, 92 30 S 140 52, 172 56 S 224 70, 260 72',
  hockey: 'M0 74 C 60 74, 110 72, 150 62 S 220 30, 260 4',
}
export type SparkKind = keyof typeof sparkPaths

export function Spark({ kind }: { kind: SparkKind }) {
  const d = sparkPaths[kind]
  return (
    <svg className="spark" viewBox="0 0 260 80" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path className="spark-area" d={`${d} V80 H0Z`} fill="currentColor" />
      <path className="spark-line" d={d} pathLength={1} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

// ── SPRINT: a funnel being scanned ───────────────────────────────────────────
export function SprintIllustration() {
  return (
    <svg className="sprint-ill" viewBox="0 0 360 300" fill="none" aria-hidden="true">
      {[[20, 40, 320, 44], [52, 100, 256, 44], [86, 160, 188, 44], [118, 220, 124, 44]].map(([x, y, w, h], i) => (
        <g key={y} className="sprint-layer" style={{ '--n': i } as React.CSSProperties}>
          <rect x={x} y={y} width={w} height={h} rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
          <rect className="sprint-fill" x={x + 6} y={y + 6} width={(w - 12) * [0.82, 0.58, 0.74, 0.4][i]} height={h - 12} rx="9" fill={i === 1 || i === 3 ? '#FF8773' : '#A5DBC2'} fillOpacity={i === 1 || i === 3 ? 0.85 : 0.5} />
        </g>
      ))}
      <g className="sprint-scan">
        <path d="M0 0H360" stroke="#FF8773" strokeWidth="2" />
        <rect x="0" y="-36" width="360" height="36" fill="url(#sprint-scan-g)" />
      </g>
      <defs>
        <linearGradient id="sprint-scan-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF8773" stopOpacity="0" />
          <stop offset="1" stopColor="#FF8773" stopOpacity="0.28" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// ── HOW: one glyph per step ──────────────────────────────────────────────────
export const stepGlyphs = [
  // sprint: magnifier over funnel bars
  <svg key="s1" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 12h20M8 20h14M8 28h9" opacity="0.5" /><circle cx="30" cy="28" r="9" /><path d="m37 35 6 6" />
  </svg>,
  // collaboration: weekly loop
  <svg key="s2" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M40 22a16 16 0 0 0-29-7M8 8v8h8M8 26a16 16 0 0 0 29 7m3 7v-8h-8" /><circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
  </svg>,
  // results: rising steps
  <svg key="s3" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 40h36" opacity="0.5" /><path d="M10 34V28m9 6V22m9 12V16m9 18V8" /><path d="m31 8 6-2 2 6" />
  </svg>,
]
