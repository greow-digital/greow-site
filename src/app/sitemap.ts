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
      url: `${SITE_URL}/growth-as-a-service/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/growth-as-a-service/`,
          sv: `${SITE_URL}/sv/growth-as-a-service/`,
          'x-default': `${SITE_URL}/growth-as-a-service/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/growth-as-a-service/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/growth-as-a-service/`,
          sv: `${SITE_URL}/sv/growth-as-a-service/`,
          'x-default': `${SITE_URL}/growth-as-a-service/`,
        },
      },
    },
    {
      url: `${SITE_URL}/fractional-growth-lead/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/fractional-growth-lead/`,
          sv: `${SITE_URL}/sv/interim-growth-lead/`,
          'x-default': `${SITE_URL}/fractional-growth-lead/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/interim-growth-lead/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/fractional-growth-lead/`,
          sv: `${SITE_URL}/sv/interim-growth-lead/`,
          'x-default': `${SITE_URL}/fractional-growth-lead/`,
        },
      },
    },
    {
      url: `${SITE_URL}/growth-advisory/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/growth-advisory/`,
          sv: `${SITE_URL}/sv/growth-advisory/`,
          'x-default': `${SITE_URL}/growth-advisory/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/growth-advisory/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/growth-advisory/`,
          sv: `${SITE_URL}/sv/growth-advisory/`,
          'x-default': `${SITE_URL}/growth-advisory/`,
        },
      },
    },
    {
      url: `${SITE_URL}/growth-coaching/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/growth-coaching/`,
          sv: `${SITE_URL}/sv/growth-coaching/`,
          'x-default': `${SITE_URL}/growth-coaching/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/growth-coaching/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/growth-coaching/`,
          sv: `${SITE_URL}/sv/growth-coaching/`,
          'x-default': `${SITE_URL}/growth-coaching/`,
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
      url: `${SITE_URL}/work/telia-norway/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/telia-norway/`,
          sv: `${SITE_URL}/sv/case/telia-norway/`,
          'x-default': `${SITE_URL}/work/telia-norway/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/telia-norway/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/telia-norway/`,
          sv: `${SITE_URL}/sv/case/telia-norway/`,
          'x-default': `${SITE_URL}/work/telia-norway/`,
        },
      },
    },
    {
      url: `${SITE_URL}/work/dnb-eiendom/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/dnb-eiendom/`,
          sv: `${SITE_URL}/sv/case/dnb-eiendom/`,
          'x-default': `${SITE_URL}/work/dnb-eiendom/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/dnb-eiendom/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/dnb-eiendom/`,
          sv: `${SITE_URL}/sv/case/dnb-eiendom/`,
          'x-default': `${SITE_URL}/work/dnb-eiendom/`,
        },
      },
    },
    {
      url: `${SITE_URL}/work/refapp/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/refapp/`,
          sv: `${SITE_URL}/sv/case/refapp/`,
          'x-default': `${SITE_URL}/work/refapp/`,
        },
      },
    },
    {
      url: `${SITE_URL}/sv/case/refapp/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}/work/refapp/`,
          sv: `${SITE_URL}/sv/case/refapp/`,
          'x-default': `${SITE_URL}/work/refapp/`,
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
