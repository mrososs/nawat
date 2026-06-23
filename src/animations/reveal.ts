/**
 * Scroll-reveal choreography.
 *
 * `revealScope` scans a freshly-mounted page (or any subtree) for the markup
 * hooks the views already carry and wires each to a ScrollTrigger:
 *
 *   data-reveal[="up|left|right|scale|fade"]  — one element eases in
 *   data-stagger[="up|left|right|scale|fade"] — direct children cascade in
 *   data-parallax[="0.2"]                     — element drifts as you scroll
 *
 * It returns the created triggers so the caller can kill them when the page
 * unmounts. All motion is skipped under `prefers-reduced-motion`; because the
 * stylesheet leaves content visible by default, skipping simply means the
 * page renders statically.
 */
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap'

const EASE = 'power3.out'
const DISTANCE = 44

interface RevealOptions {
  /** Mirror horizontal motion for right-to-left (Arabic) layouts. */
  rtl?: boolean
}

type RevealType = 'up' | 'left' | 'right' | 'scale' | 'fade'

/** Initial (hidden) state for a given reveal flavour. */
function fromVars(type: string, rtl: boolean): gsap.TweenVars {
  switch (type as RevealType) {
    case 'left':
      return { opacity: 0, x: (rtl ? 1 : -1) * DISTANCE }
    case 'right':
      return { opacity: 0, x: (rtl ? -1 : 1) * DISTANCE }
    case 'scale':
      return { opacity: 0, scale: 0.92 }
    case 'fade':
      return { opacity: 0 }
    case 'up':
    default:
      return { opacity: 0, y: DISTANCE }
  }
}

/** Target (settled) state — resets every axis we might have offset. */
const TO_VARS: gsap.TweenVars = { opacity: 1, x: 0, y: 0, scale: 1 }

export function revealScope(
  root: HTMLElement | null,
  opts: RevealOptions = {},
): ScrollTrigger[] {
  if (!root || prefersReducedMotion()) return []

  const rtl = !!opts.rtl
  const triggers: ScrollTrigger[] = []

  // Single elements.
  root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const from = fromVars(el.dataset.reveal || 'up', rtl)
    gsap.set(el, from)
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () =>
          gsap.to(el, { ...TO_VARS, duration: 0.9, ease: EASE }),
      }),
    )
  })

  // Staggered groups — direct children cascade.
  root.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    const items = Array.from(group.children) as HTMLElement[]
    if (!items.length) return
    const from = fromVars(group.dataset.stagger || 'up', rtl)
    gsap.set(items, from)
    triggers.push(
      ScrollTrigger.create({
        trigger: group,
        start: 'top 82%',
        once: true,
        onEnter: () =>
          gsap.to(items, {
            ...TO_VARS,
            duration: 0.8,
            ease: EASE,
            stagger: 0.12,
          }),
      }),
    )
  })

  // Parallax — gentle scrubbed drift across the element's travel.
  root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.2')
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          gsap.set(el, { yPercent: (self.progress - 0.5) * speed * 100 })
        },
      }),
    )
  })

  return triggers
}

/** Kill a batch of triggers and clear any inline transforms they left behind. */
export function disposeTriggers(triggers: ScrollTrigger[]): void {
  triggers.forEach((t) => t.kill())
}
