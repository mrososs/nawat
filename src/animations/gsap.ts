/**
 * Central GSAP + ScrollTrigger + Lenis setup.
 *
 * Everything animation-related funnels through this module so the plugin is
 * registered exactly once and the smooth-scroll instance is a singleton that
 * ScrollTrigger stays in sync with. Motion is fully gated behind the user's
 * `prefers-reduced-motion` preference.
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

/** Whether the visitor has asked the OS to minimise motion. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

let lenis: Lenis | null = null

/**
 * Boot the smooth-scroll engine once and bridge it to GSAP's ticker so
 * ScrollTrigger reads positions from the same animation frame. No-op when
 * reduced motion is requested (the page then scrolls natively).
 */
export function initSmoothScroll(): Lenis | null {
  if (lenis || prefersReducedMotion()) return lenis

  lenis = new Lenis({
    duration: 1.1,
    // expo-out — the weighty, settled glide of the reference site.
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis?.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  return lenis
}

export function getLenis(): Lenis | null {
  return lenis
}

/** Jump (or glide) to the top — used on route changes to keep Lenis in sync. */
export function scrollToTop(immediate = true): void {
  if (lenis) lenis.scrollTo(0, { immediate })
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
}

/** Instance type of a created ScrollTrigger — handy for typing arrays. */
export type GsapScrollTrigger = InstanceType<typeof ScrollTrigger>

export { gsap, ScrollTrigger }
