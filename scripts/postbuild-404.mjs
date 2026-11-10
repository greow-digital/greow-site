// Turn the rendered /page-not-found/ route into the site's 404.html.
// GitHub Pages serves out/404.html (with HTTP 404) for every missing path.
import { copyFileSync, existsSync, rmSync } from 'node:fs'

const SRC = 'out/page-not-found/index.html'
if (!existsSync(SRC)) {
  console.error(`postbuild-404: ${SRC} not found`)
  process.exit(1)
}
copyFileSync(SRC, 'out/404.html')
// Next's default 404 output, replaced so every copy is the branded page.
if (existsSync('out/404')) copyFileSync(SRC, 'out/404/index.html')
rmSync('out/page-not-found', { recursive: true, force: true })
rmSync('out/page-not-found.txt', { force: true })
console.log('postbuild-404: out/404.html is the branded page; /page-not-found/ removed.')
