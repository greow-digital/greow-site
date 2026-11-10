// ── Translation pairs (EN ↔ SV) ──────────────────────────────────────────────
// Built from the same registries as the sitemap, so every page that has a
// translation gets a language switcher pointing at it — not at the homepage.

import type { Lang } from './work'
import { workBase, projects } from './work'
import { serviceNav } from './services'
import { plannedPages } from './routes'

export const SITE_URL = 'https://greow.digital'

type Pair = Record<Lang, string>

export function translationPairs(): Pair[] {
  const pairs: Pair[] = [
    { en: '/', sv: '/sv/' },
    { en: workBase.en, sv: workBase.sv },
    ...serviceNav
      .filter((s) => !s.available || (s.available.includes('en') && s.available.includes('sv')))
      .map((s) => ({ en: s.url.en, sv: s.url.sv })),
    ...Object.values(plannedPages)
      .filter((p) => p.published)
      .map((p) => ({ en: p.url.en, sv: p.url.sv })),
    ...projects.en
      .filter((p) => p.href)
      .map((p) => ({ en: `${workBase.en}${p.slug}/`, sv: `${workBase.sv}${p.slug}/` })),
  ]
  return pairs
}

const withSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`)

/** The translated path for `pathname`, or null when the page has no pair. */
export function alternatePath(pathname: string, lang: Lang): string | null {
  const path = withSlash(pathname)
  const other: Lang = lang === 'en' ? 'sv' : 'en'
  const pair = translationPairs().find((p) => p[lang] === path)
  return pair ? pair[other] : null
}
