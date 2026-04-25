import type { MetadataRoute } from 'next'

const SITE_URL = 'https://greow.digital'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/`,
          sv: `${SITE_URL}/sv/`,
          'x-default': `${SITE_URL}/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/`,
          sv: `${SITE_URL}/sv/`,
          'x-default': `${SITE_URL}/`,
        },
      },
    },
  ]
}
