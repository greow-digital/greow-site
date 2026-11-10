import type { MetadataRoute } from 'next'
import { SITE_URL, translationPairs } from '@/lib/alternates'

// Generated from the same registries as the language switcher (homepages,
// services, work index, published case studies), so a new page can't be left
// out. Every URL is listed with its en/sv/x-default alternates.
//
// No lastmod: the site has no per-page modification dates yet, and a build
// timestamp on every URL tells Google nothing. changefreq/priority are
// ignored by Google and omitted.
export default function sitemap(): MetadataRoute.Sitemap {
  return translationPairs().flatMap((pair) => {
    const languages = {
      en: `${SITE_URL}${pair.en}`,
      sv: `${SITE_URL}${pair.sv}`,
      'x-default': `${SITE_URL}${pair.en}`,
    }
    return [
      { url: `${SITE_URL}${pair.en}`, alternates: { languages } },
      { url: `${SITE_URL}${pair.sv}`, alternates: { languages } },
    ]
  })
}
