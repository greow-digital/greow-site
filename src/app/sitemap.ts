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
    {
      url: `${SITE_URL}/work/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/`,
          sv: `${SITE_URL}/sv/case/`,
          'x-default': `${SITE_URL}/work/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/`,
          sv: `${SITE_URL}/sv/case/`,
          'x-default': `${SITE_URL}/work/`,
        },
      },
    },
    {
      url: `${SITE_URL}/work/leadfeeder-dealfront/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/leadfeeder-dealfront/`,
          sv: `${SITE_URL}/sv/case/leadfeeder-dealfront/`,
          'x-default': `${SITE_URL}/work/leadfeeder-dealfront/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/leadfeeder-dealfront/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/leadfeeder-dealfront/`,
          sv: `${SITE_URL}/sv/case/leadfeeder-dealfront/`,
          'x-default': `${SITE_URL}/work/leadfeeder-dealfront/`,
        },
      },
    },
    {
      url: `${SITE_URL}/work/funnel/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/funnel/`,
          sv: `${SITE_URL}/sv/case/funnel/`,
          'x-default': `${SITE_URL}/work/funnel/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/funnel/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/funnel/`,
          sv: `${SITE_URL}/sv/case/funnel/`,
          'x-default': `${SITE_URL}/work/funnel/`,
        },
      },
    },
    {
      url: `${SITE_URL}/work/rikstv-strim/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/rikstv-strim/`,
          sv: `${SITE_URL}/sv/case/rikstv-strim/`,
          'x-default': `${SITE_URL}/work/rikstv-strim/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/rikstv-strim/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/rikstv-strim/`,
          sv: `${SITE_URL}/sv/case/rikstv-strim/`,
          'x-default': `${SITE_URL}/work/rikstv-strim/`,
        },
      },
    },
    {
      url: `${SITE_URL}/work/bnbalyze/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/bnbalyze/`,
          sv: `${SITE_URL}/sv/case/bnbalyze/`,
          'x-default': `${SITE_URL}/work/bnbalyze/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/bnbalyze/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/bnbalyze/`,
          sv: `${SITE_URL}/sv/case/bnbalyze/`,
          'x-default': `${SITE_URL}/work/bnbalyze/`,
        },
      },
    },
    {
      url: `${SITE_URL}/work/happy-vegan/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/happy-vegan/`,
          sv: `${SITE_URL}/sv/case/happy-vegan/`,
          'x-default': `${SITE_URL}/work/happy-vegan/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/happy-vegan/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/happy-vegan/`,
          sv: `${SITE_URL}/sv/case/happy-vegan/`,
          'x-default': `${SITE_URL}/work/happy-vegan/`,
        },
      },
    },
    {
      url: `${SITE_URL}/work/sands-entreprenad/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/sands-entreprenad/`,
          sv: `${SITE_URL}/sv/case/sands-entreprenad/`,
          'x-default': `${SITE_URL}/work/sands-entreprenad/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/sands-entreprenad/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/sands-entreprenad/`,
          sv: `${SITE_URL}/sv/case/sands-entreprenad/`,
          'x-default': `${SITE_URL}/work/sands-entreprenad/`,
        },
      },
    },
  ]
}
