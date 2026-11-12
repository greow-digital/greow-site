import { Bricolage_Grotesque, Hanken_Grotesk, Instrument_Serif, JetBrains_Mono } from 'next/font/google'

// Four families, five files. The 'latin' subset already includes å ä ö ø and
// the punctuation used on the site, so 'latin-ext' isn't needed.
//   --font-heading  Bricolage Grotesque (variable)  headings, buttons, numbers
//   --font-body     Hanken Grotesk (variable)       running text
//   --font-accent   Instrument Serif italic         the emphasised phrase in a heading
//   --font-mono     JetBrains Mono (variable)       kickers, labels, UI chrome
const heading = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const body = Hanken_Grotesk({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const accent = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
  variable: '--font-accent',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

export const fontVars = `${heading.variable} ${body.variable} ${accent.variable} ${mono.variable}`
