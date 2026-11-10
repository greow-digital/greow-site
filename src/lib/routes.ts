// ── Planned pages registry ───────────────────────────────────────────────────
// Pages that are part of the positioning but not built yet. Components link to
// them through `plannedLink()`, which returns null until `published` is true —
// so we never ship a link to a route that doesn't exist.
//
// To launch one: create the EN + SV routes at the URLs below, add them to
// sitemap.ts, then flip `published` to true. `npm run check:links` fails the
// build output if any internal link points at a missing page.

import type { Lang } from './work'

export type PlannedPageKey = 'aiGrowthConsultant' | 'aiGtmSystems' | 'founder'

interface PlannedPage {
  published: boolean
  url: Record<Lang, string>
  label: Record<Lang, string>
}

export const plannedPages: Record<PlannedPageKey, PlannedPage> = {
  aiGrowthConsultant: {
    published: false,
    url: { en: '/ai-growth-consultant/', sv: '/sv/ai-tillvaxtkonsult/' },
    label: { en: 'AI Growth Consultant', sv: 'AI-tillväxtkonsult' },
  },
  aiGtmSystems: {
    published: false,
    url: { en: '/ai-gtm-systems/', sv: '/sv/ai-gtm-system/' },
    label: { en: 'AI GTM Systems', sv: 'AI GTM-system' },
  },
  founder: {
    published: false,
    url: { en: '/erik-oliva-werner/', sv: '/sv/erik-oliva-werner/' },
    label: { en: 'More about Erik', sv: 'Mer om Erik' },
  },
}

export function plannedLink(key: PlannedPageKey, lang: Lang): { href: string; label: string } | null {
  const page = plannedPages[key]
  return page.published ? { href: page.url[lang], label: page.label[lang] } : null
}

// Language-independent wiring for the homepage capability cards: which case
// studies prove each capability, and which service pages it leads to.
export interface CapabilityLinks {
  cases: string[] // case-study slugs from work.ts
  services: string[] // keys from serviceNav in services.ts
  planned: PlannedPageKey[] // rendered only once published
}

export const capabilityLinks: Record<string, CapabilityLinks> = {
  strategy: {
    cases: ['funnel', 'leadfeeder-dealfront'],
    services: ['advisory', 'gaas'],
    planned: [],
  },
  systems: {
    cases: ['sands-entreprenad', 'bnbalyze'],
    services: [],
    planned: ['aiGrowthConsultant', 'aiGtmSystems'],
  },
  execution: {
    cases: ['telia-norway', 'happy-vegan'],
    services: ['fractional', 'gaas'],
    planned: [],
  },
}
