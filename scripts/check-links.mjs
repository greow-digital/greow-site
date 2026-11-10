// Fails if any built page links to an internal route or file that doesn't
// exist in out/. Run after `next build`:  npm run check:links
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'

const OUT = 'out'
if (!existsSync(OUT)) {
  console.error('out/ not found — run `npm run build` first.')
  process.exit(1)
}

const pages = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (name.endsWith('.html')) pages.push(p)
  }
}
walk(OUT)

const resolves = (path) => {
  const clean = decodeURIComponent(path.split('#')[0].split('?')[0])
  if (clean === '' || clean === '/') return existsSync(join(OUT, 'index.html'))
  const target = join(OUT, clean)
  if (clean.endsWith('/')) return existsSync(join(target, 'index.html'))
  return existsSync(target) || existsSync(`${target}.html`) || existsSync(join(target, 'index.html'))
}

const broken = []
for (const page of pages) {
  const html = readFileSync(page, 'utf8')
  for (const [, href] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    let path = null
    if (href.startsWith('/') && !href.startsWith('//')) path = href
    else if (href.startsWith('https://greow.digital')) path = href.slice('https://greow.digital'.length) || '/'
    if (path === null || path.startsWith('/_next/')) continue
    if (!resolves(path)) broken.push(`${page} → ${href}`)
  }
}

if (broken.length) {
  console.error(`✗ ${broken.length} broken internal link(s):\n  ${[...new Set(broken)].join('\n  ')}`)
  process.exit(1)
}
console.log(`✓ ${pages.length} pages checked, no broken internal links.`)
