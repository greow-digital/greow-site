import type { MetadataRoute } from 'next'

const SITE_URL = 'https://greow.digital'

// Everything is crawlable. AI crawlers are listed explicitly so the policy is
// a deliberate, documented choice: search/answer bots (OAI-SearchBot,
// ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User)
// and training/grounding crawlers (GPTBot, ClaudeBot, Google-Extended,
// Applebot-Extended, CCBot) are all allowed. To opt out of model training only,
// move the second group to `disallow: '/'` — citations in AI search keep working.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User'],
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot'],
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
