// Technical SEO + structured-data checks on the static export in out/.
// Run after `npm run build`:  npm run check:seo
// Errors fail the run; warnings are printed but don't.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'

const OUT = process.env.SEO_OUT || 'out'
const SITE = 'https://greow.digital'
const errors = []
const warnings = []
const err = (page, msg) => errors.push(`${page}: ${msg}`)
const warn = (page, msg) => warnings.push(`${page}: ${msg}`)

if (!existsSync(OUT)) {
  console.error('out/ not found — run `npm run build` first.')
  process.exit(1)
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
const first = (html, re) => {
  const m = html.match(re)
  return m ? decode(m[1]) : null
}
const textOf = (html) =>
  decode(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')

// ── collect indexable pages (every index.html except 404) ──
const pages = new Map() // path -> html
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) {
      if (name === '_next' || name === '404') continue
      walk(p)
    } else if (name === 'index.html') {
      const path = '/' + p.slice(OUT.length + 1).replace(/index\.html$/, '')
      pages.set(path, readFileSync(p, 'utf8'))
    }
  }
}
walk(OUT)

// ── schema helpers ──
const REQUIRED = {
  Organization: ['name', 'url', 'logo'],
  Person: ['name'],
  WebSite: ['name', 'url'],
  ProfessionalService: ['name', 'address', 'provider'],
  Service: ['name', 'provider', 'url'],
  BreadcrumbList: ['itemListElement'],
  FAQPage: ['mainEntity'],
  Article: ['headline', 'author', 'publisher', 'image'],
  ItemList: ['itemListElement'],
}
const collectRefs = (node, out = []) => {
  if (Array.isArray(node)) node.forEach((n) => collectRefs(n, out))
  else if (node && typeof node === 'object') {
    const keys = Object.keys(node)
    if (keys.length === 1 && keys[0] === '@id') out.push(node['@id'])
    else for (const k of keys) collectRefs(node[k], out)
  }
  return out
}

const counts = {}
for (const [path, html] of pages) {
  const url = `${SITE}${path}`
  const lang = first(html, /<html lang="([^"]+)"/)
  const expectLang = path.startsWith('/sv/') ? 'sv' : 'en'
  if (lang !== expectLang) err(path, `html lang="${lang}", expected "${expectLang}"`)

  const title = first(html, /<title>([\s\S]*?)<\/title>/)
  const desc = first(html, /<meta name="description" content="([^"]*)"/)
  if (!title) err(path, 'missing <title>')
  else if (title.length < 30 || title.length > 65) warn(path, `title length ${title.length} (30–65): ${title}`)
  if (!desc) err(path, 'missing meta description')
  else if (desc.length < 70 || desc.length > 160) warn(path, `description length ${desc.length} (70–160)`)

  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1])
  if (canonicals.length !== 1) err(path, `${canonicals.length} canonical tags`)
  else if (canonicals[0] !== url) err(path, `canonical ${canonicals[0]} ≠ ${url}`)
  const ogUrl = first(html, /<meta property="og:url" content="([^"]+)"/)
  if (ogUrl !== url) err(path, `og:url ${ogUrl} ≠ ${url}`)
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) err(path, 'noindex on an indexable page')

  const h1 = (html.match(/<h1[\s>]/g) || []).length
  if (h1 !== 1) err(path, `${h1} <h1> elements`)

  // hreflang: reciprocal, targets exist, switcher matches
  const alts = Object.fromEntries([...html.matchAll(/hrefLang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]))
  if (alts[expectLang] !== url) err(path, `hreflang ${expectLang} → ${alts[expectLang]} (should be self)`)
  if (!alts['x-default']) err(path, 'missing x-default hreflang')
  const otherLang = expectLang === 'en' ? 'sv' : 'en'
  if (alts[otherLang]) {
    const otherPath = alts[otherLang].replace(SITE, '')
    const other = pages.get(otherPath)
    if (!other) err(path, `hreflang ${otherLang} target ${otherPath} does not exist`)
    else if (!other.includes(`hrefLang="${expectLang}" href="${url}"`)) err(path, `hreflang not reciprocal with ${otherPath}`)
    const sw = html.match(/<a[^>]*class="lang-switcher[^"]*"[^>]*>/)
    const swHref = sw && first(sw[0], /href="([^"]+)"/)
    if (swHref !== otherPath) err(path, `language switcher → ${swHref}, expected ${otherPath}`)
  }

  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1])
  if (!blocks.length) err(path, 'no JSON-LD')
  const nodes = []
  for (const b of blocks) {
    let data
    try {
      data = JSON.parse(decode(b))
    } catch (e) {
      err(path, `invalid JSON-LD: ${e.message}`)
      continue
    }
    if (data['@context'] !== 'https://schema.org') err(path, 'JSON-LD @context is not https://schema.org')
    for (const n of data['@graph'] || [data]) nodes.push(n)
  }
  const ids = new Set(nodes.map((n) => n['@id']).filter(Boolean))
  const nested = []
  for (const n of nodes) {
    const t = n['@type']
    counts[t] = (counts[t] || 0) + 1
    for (const prop of REQUIRED[t] || []) if (n[prop] === undefined) err(path, `${t} missing "${prop}"`)
    if (n.logo && n.logo['@id']) nested.push(n.logo['@id'])
    if (t === 'BreadcrumbList') {
      const items = n.itemListElement || []
      items.forEach((it, i) => {
        if (it.position !== i + 1) err(path, `breadcrumb position ${it.position} at index ${i}`)
        if (!it.name || !/^https:\/\/greow\.digital\//.test(it.item || '')) err(path, `breadcrumb item ${i + 1} needs name + absolute item URL`)
      })
      if (items.length && items[items.length - 1].item !== url) err(path, `last breadcrumb ${items[items.length - 1].item} ≠ page URL`)
    }
    if (t === 'FAQPage') {
      const visible = textOf(html)
      for (const q of n.mainEntity || []) {
        if (q['@type'] !== 'Question' || !q.name || !q.acceptedAnswer?.text) err(path, 'FAQPage entry missing Question/name/acceptedAnswer.text')
        else if (!visible.includes(q.name)) err(path, `FAQ question not visible on page: "${q.name}"`)
      }
    }
  }
  for (const id of nested) ids.add(id)
  const missing = [...new Set(collectRefs(nodes).filter((r) => !ids.has(r)))]
  if (missing.length) err(path, `unresolved @id reference(s): ${missing.join(', ')}`)
  if (!nodes.some((n) => n['@type'] === 'Organization')) err(path, 'no Organization node')
  if (!nodes.some((n) => n['@type'] === 'Person')) err(path, 'no Person node')
  const person = nodes.find((n) => n['@type'] === 'Person')
  if (person && person.name !== 'Erik Oliva Werner') err(path, `Person name is "${person.name}"`)
  if (path !== '/' && path !== '/sv/' && !nodes.some((n) => n['@type'] === 'BreadcrumbList')) warn(path, 'no BreadcrumbList')
  if (/Erik Werner(?!s)/.test(textOf(html))) err(path, 'short founder name "Erik Werner" in visible text')
}

// ── sitemap ──
const sitemap = readFileSync(join(OUT, 'sitemap.xml'), 'utf8')
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, ''))
const locSet = new Set(locs)
if (locSet.size !== locs.length) err('sitemap.xml', 'duplicate <loc> entries')
for (const p of pages.keys()) if (!locSet.has(p)) err('sitemap.xml', `missing ${p}`)
for (const l of locSet) if (!pages.has(l)) err('sitemap.xml', `lists ${l}, which is not an indexable page`)
if (/<lastmod>/.test(sitemap)) warn('sitemap.xml', 'contains lastmod — make sure it reflects real changes')

// ── robots ──
const robots = readFileSync(join(OUT, 'robots.txt'), 'utf8')
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) err('robots.txt', 'missing Sitemap line')
if (/User-Agent: \*\s*\n(?:[^\n]*\n)*?Disallow: \/\s*$/m.test(robots)) err('robots.txt', 'blocks all crawlers')

// ── internal linking: every page within 3 clicks of / ──
const linksOf = (html) =>
  [...html.matchAll(/<a [^>]*href="(\/[^"#?]*)/g)].map((m) => (m[1].endsWith('/') ? m[1] : `${m[1]}/`))
const depth = new Map([['/', 0]])
const queue = ['/']
while (queue.length) {
  const p = queue.shift()
  for (const l of linksOf(pages.get(p) || '')) if (pages.has(l) && !depth.has(l)) { depth.set(l, depth.get(p) + 1); queue.push(l) }
}
for (const p of pages.keys()) {
  if (!depth.has(p)) err(p, 'not reachable from / via <a href>')
  else if (depth.get(p) > 3) warn(p, `${depth.get(p)} clicks from /`)
}
const inbound = new Map()
for (const [p, html] of pages) for (const l of new Set(linksOf(html))) if (l !== p) inbound.set(l, (inbound.get(l) || 0) + 1)

// ── report ──
console.log(`Checked ${pages.size} indexable pages, ${locs.length} sitemap URLs.`)
console.log('Schema nodes:', Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(', '))
const minIn = [...pages.keys()].map((p) => [p, inbound.get(p) || 0]).sort((a, b) => a[1] - b[1]).slice(0, 3)
console.log('Fewest inbound internal links:', minIn.map(([p, n]) => `${p} (${n})`).join(', '))
if (warnings.length) console.log(`\n⚠ ${warnings.length} warning(s):\n  ${warnings.join('\n  ')}`)
if (errors.length) {
  console.error(`\n✗ ${errors.length} error(s):\n  ${errors.join('\n  ')}`)
  process.exit(1)
}
console.log('\n✓ No errors.')
