'use client'
import { useEffect } from 'react'

// The site's motion layer, mounted once per page. Everything here is
// progressive enhancement over server-rendered HTML:
//   · scroll reveal (.reveal → .visible), staggered between siblings
//   · auto-reveal + cursor spotlight for the card patterns on sub-pages
//   · count-up on headline metrics
//   · magnetic primary buttons and hero parallax (fine pointers only)
// Under prefers-reduced-motion only the reveal classes are applied (CSS
// already shows .reveal content), nothing moves.

// Cards that get the cursor spotlight and, when below the fold, a reveal.
const CARDS = [
  '.capability-card', '.step-card', '.feat-item', '.price-card', '.stat-card', '.extras-card',
  '.work-case', '.work-more-card', '.appearance-card', '.case-metric', '.case-block', '.case-result',
  '.case-learning', '.service-step', '.service-card', '.service-related-card', '.ai-env-card',
  '.gtm-web-card', '.gtm-mat', '.case-approach-steps > li', '.case-ai-card', '.ai-related-link',
  '.bio-principles > li', '.bio-bio-card', '.gtm-silos > li', '.ai-audience', '.ai-faq details',
  '.gship-module',
].join(',')

// Other blocks worth revealing on scroll when they start below the fold.
const REVEAL_EXTRA = [
  '.service-sec h2', '.service-text', '.service-related-head', '.case-compound', '.ai-questions > li',
  '.gsys', '.gship', '.gtm-stack', '.bio-spaces > li', '.capabilities-header', '.case-built-grid > div',
  '.work-more-header', '.work-cta', '.cap-panel', '.gtm-stage', '.ai-how-heading', '.ai-how-intro', '.gtm-combination',
].join(',')

// Metrics that count up. Only plain numbers ("+100%", "2x", "−40%", "0 → 20%")
// animate; anything else ("2,5M kr", "Built") is left exactly as rendered.
const COUNTERS = [
  '[data-count]', '.case-metric-value', '.work-case-metric-value', '.related-metric',
  '.work-more-metric', '.case-result-value', '.capability-case-metric',
].join(',')
const COUNT_RE = /^(\D*?)(\d{1,4})(\s?(?:%|x|×|\+|%\+)?)$/

function countUp(el: HTMLElement) {
  const text = (el.textContent ?? '').trim()
  const m = COUNT_RE.exec(text)
  if (!m) return
  const [, prefix, num, suffix] = m
  const target = parseInt(num, 10)
  if (target < 2) return
  const duration = 1100 + Math.min(700, target * 4)
  const start = performance.now()
  el.style.fontVariantNumeric = 'tabular-nums'
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - p, 4)
    el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`
    if (p < 1) requestAnimationFrame(tick)
    else el.textContent = text
  }
  requestAnimationFrame(tick)
}

export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const cleanups: (() => void)[] = []

    // ── spotlight + auto reveal ──
    const vh = window.innerHeight
    document.querySelectorAll<HTMLElement>(CARDS).forEach((el) => {
      el.classList.add('spot')
      if (!el.classList.contains('reveal') && el.getBoundingClientRect().top > vh * 0.9) el.classList.add('reveal')
    })
    document.querySelectorAll<HTMLElement>(REVEAL_EXTRA).forEach((el) => {
      if (!el.classList.contains('reveal') && !el.closest('.reveal') && el.getBoundingClientRect().top > vh * 0.9) {
        el.classList.add('reveal')
      }
    })

    // ── reveal, staggered within a parent ──
    const observer = new IntersectionObserver(
      (entries) => {
        const batch = entries.filter((e) => e.isIntersecting)
        const perParent = new Map<Element | null, number>()
        batch.forEach((e) => {
          const el = e.target as HTMLElement
          const parent = el.parentElement
          const i = perParent.get(parent) ?? 0
          perParent.set(parent, i + 1)
          el.style.setProperty('--i', String(Math.min(i, 6)))
          el.classList.add('visible')
          if (!reduce) {
            if (el.matches(COUNTERS)) countUp(el)
            el.querySelectorAll<HTMLElement>(COUNTERS).forEach(countUp)
          }
          observer.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    cleanups.push(() => observer.disconnect())

    // Counters that are not inside a .reveal block
    if (!reduce) {
      const counterObserver = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (!e.isIntersecting) return
          countUp(e.target as HTMLElement)
          counterObserver.unobserve(e.target)
        }),
        { threshold: 0.6 },
      )
      document.querySelectorAll<HTMLElement>(COUNTERS).forEach((el) => {
        if (!el.closest('.reveal')) counterObserver.observe(el)
      })
      cleanups.push(() => counterObserver.disconnect())
    }

    if (fine && !reduce) {
      // ── cursor spotlight ──
      const onMove = (e: PointerEvent) => {
        const card = (e.target as Element | null)?.closest?.<HTMLElement>('.spot')
        if (!card) return
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      document.addEventListener('pointermove', onMove, { passive: true })
      cleanups.push(() => document.removeEventListener('pointermove', onMove))

      // ── magnetic buttons ──
      const magnets = Array.from(document.querySelectorAll<HTMLElement>('.btn-primary, .nav-cta'))
      magnets.forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect()
          el.style.setProperty('--tx', `${((e.clientX - r.left) / r.width - 0.5) * 10}px`)
          el.style.setProperty('--ty', `${((e.clientY - r.top) / r.height - 0.5) * 8}px`)
        }
        const leave = () => { el.style.setProperty('--tx', '0px'); el.style.setProperty('--ty', '0px') }
        el.addEventListener('pointermove', move)
        el.addEventListener('pointerleave', leave)
        cleanups.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave) })
      })

      // ── hero parallax ──
      const hero = document.querySelector<HTMLElement>('.hero')
      if (hero) {
        let raf = 0
        const onHero = (e: PointerEvent) => {
          if (raf) return
          raf = requestAnimationFrame(() => {
            raf = 0
            const r = hero.getBoundingClientRect()
            hero.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
            hero.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
          })
        }
        hero.addEventListener('pointermove', onHero, { passive: true })
        cleanups.push(() => hero.removeEventListener('pointermove', onHero))
      }
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])
  return null
}
