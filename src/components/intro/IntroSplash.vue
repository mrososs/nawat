<script setup lang="ts">
/**
 * IntroSplash — first-visit overlay that assembles the NAWAT mark with GSAP,
 * holds for a beat, then fades away and emits `done` (~5s total). The mark is
 * inlined so each radial arm, the diamond ring, and the cyan core can be
 * choreographed individually.
 */
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from '@/animations'

const emit = defineEmits<{ lift: []; done: [] }>()

const root = ref<HTMLElement | null>(null)
const word = 'NAWAT'.split('')
// 8 radial arms, each pre-rotated into place; GSAP scales them in from centre.
const arms = [0, 45, 90, 135, 180, 225, 270, 315]

let ctx: gsap.Context | null = null

onMounted(() => {
  if (!root.value) return
  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => emit('done'),
    })

    gsap.set('.is-arm', { svgOrigin: '50 50', scale: 0, opacity: 0 })
    gsap.set(['.is-ring', '.is-core'], { svgOrigin: '50 50', scale: 0, opacity: 0 })
    gsap.set('.is-ar', { y: 26, opacity: 0 })
    gsap.set('.is-ch', { yPercent: 130, opacity: 0 })

    tl.to('.is-arm', { scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(1.7)', stagger: 0.06 })
      .to('.is-ring', { scale: 1, opacity: 1, duration: 0.5 }, '-=0.35')
      .to('.is-core', { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.2)' }, '-=0.25')
      .to('.is-core', { scale: 1.18, duration: 0.6, repeat: 1, yoyo: true, ease: 'sine.inOut' })
      // Arabic نواة wordmark, then the Latin NAWAT letters cascade beneath it.
      .to('.is-ar', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.55')
      .to('.is-ch', { yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.06 }, '-=0.3')
      // Slow quarter-turn of the whole mark gives the hold some life.
      .to('.is-arms', { rotation: 90, svgOrigin: '50 50', duration: 1.8, ease: 'sine.inOut' }, '<')
      .to('.is-glow', { opacity: 0.9, duration: 1.2, ease: 'sine.inOut' }, '<')
      .to('.is-stage', { scale: 1.04, duration: 0.5, ease: 'power2.in' })
      // Hand off to the page entrance as the overlay begins to lift.
      .add(() => emit('lift'))
      .to(root.value, { opacity: 0, duration: 0.8, ease: 'power2.inOut' })
  }, root.value)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div ref="root" class="intro" role="status" aria-label="NAWAT" aria-live="polite">
    <div class="is-glow" />
    <div class="is-stage">
      <svg class="intro__mark" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <g
            id="is-arm-def"
            stroke="#fff"
            stroke-width="2.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M50 48V21" />
            <path d="M50 31L41 23" />
            <path d="M50 31L59 23" />
            <circle cx="50" cy="16.5" r="3" fill="#fff" stroke="none" />
            <circle cx="40" cy="22.5" r="2.2" fill="#fff" stroke="none" />
            <circle cx="60" cy="22.5" r="2.2" fill="#fff" stroke="none" />
          </g>
        </defs>
        <g class="is-arms">
          <g v-for="a in arms" :key="a" :transform="`rotate(${a} 50 50)`">
            <use class="is-arm" href="#is-arm-def" />
          </g>
        </g>
        <g transform="rotate(45 50 50)">
          <rect
            class="is-ring"
            x="39"
            y="39"
            width="22"
            height="22"
            rx="2"
            fill="none"
            stroke="#fff"
            stroke-width="2.4"
          />
          <rect class="is-core" x="44" y="44" width="12" height="12" rx="1.5" fill="#4AF3F8" />
        </g>
      </svg>
      <div class="intro__lockup">
        <div class="intro__ar is-ar" aria-hidden="true">نواة</div>
        <div class="intro__word" aria-hidden="true">
          <span v-for="(ch, i) in word" :key="i" class="is-ch">{{ ch }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(120% 100% at 50% 18%, #00084a 0%, #00021f 46%, #00010c 100%);
}
.is-glow {
  position: absolute;
  width: min(70vmin, 620px);
  aspect-ratio: 1;
  border-radius: 50%;
  opacity: 0;
  background: radial-gradient(circle, rgba(74, 243, 248, 0.22), transparent 62%);
  filter: blur(8px);
  pointer-events: none;
}
.is-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.1rem, 0.6rem + 2vw, 2rem);
  will-change: transform;
}
.intro__mark {
  width: clamp(110px, 26vmin, 168px);
  height: auto;
  filter: drop-shadow(0 0 36px rgba(74, 243, 248, 0.4));
}
.intro__lockup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.3rem, 0.1rem + 0.8vw, 0.7rem);
}
.intro__ar {
  font-family: "Arslan Wessam B", "thmanyah sans", "IBM Plex Sans Arabic", sans-serif;
  font-weight: 700;
  font-size: clamp(2.2rem, 1.4rem + 4vw, 3.6rem);
  line-height: 1;
  color: #fff;
  will-change: transform, opacity;
}
.intro__word {
  display: flex;
  /* generous tracking echoes the wordmark in the logo */
  font-family: "thmanyah sans", "Plus Jakarta Sans", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(1.05rem, 0.8rem + 1.6vw, 1.6rem);
  letter-spacing: 0.42em;
  /* offset the trailing letter-spacing so the word reads optically centred */
  padding-inline-start: 0.42em;
  color: rgba(255, 255, 255, 0.82);
}
.is-ch {
  display: inline-block;
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  /* If this ever renders under reduced motion, show it static (no transforms). */
  .is-arm,
  .is-ring,
  .is-core,
  .is-ar,
  .is-ch {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
