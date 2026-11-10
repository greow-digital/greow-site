import { Ubuntu, Source_Sans_3 } from 'next/font/google'

// Only what the CSS uses. Headings (Ubuntu): 400/500/700, no italics.
// Body (Source Sans 3) is a variable font: one file per style covers every
// weight. The 'latin' subset already includes å ä ö ø and the punctuation used
// on the site, so 'latin-ext' isn't needed. 20 preloaded font files → 5.
export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  variable: '--font-heading',
  display: 'swap',
})

export const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})
