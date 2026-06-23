/**
 * Animations-ready gate.
 *
 * The first-visit intro covers the page while it plays, so the home entrance
 * (scroll reveals + stat counters) must not start until the splash begins to
 * lift — otherwise it animates unseen behind the overlay. Components subscribe
 * here and the app flips the gate open at the right moment (immediately when
 * there is no intro, or as the splash lifts).
 */
let ready = false
const subscribers = new Set<() => void>()

export function animationsReady(): boolean {
  return ready
}

/** Run `cb` now if already open, otherwise once the gate opens. */
export function onAnimationsReady(cb: () => void): void {
  if (ready) cb()
  else subscribers.add(cb)
}

export function setAnimationsReady(value = true): void {
  ready = value
  if (value) {
    subscribers.forEach((cb) => cb())
    subscribers.clear()
  }
}
