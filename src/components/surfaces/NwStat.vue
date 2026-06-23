<script setup lang="ts">
/** NwStat — a headline metric (mono figure + label), used for MW / m² / PUE. */
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { gsap, prefersReducedMotion, onAnimationsReady } from '@/animations'

const props = withDefaults(
  defineProps<{
    value: string | number
    unit?: string
    label?: string
    sub?: string
    onDark?: boolean
    accent?: boolean
  }>(),
  { onDark: false, accent: false },
)

const classes = computed(() => [
  'nw-stat',
  props.onDark ? 'nw-stat--on-dark' : '',
  props.accent ? 'nw-stat--accent' : '',
])

// Count-up only fires for plain numbers (optionally grouped / decimal);
// values like "4 × 50" or "Tier III" render verbatim.
const raw = String(props.value)
const countable = /^\d{1,3}(,\d{3})*(\.\d+)?$|^\d+(\.\d+)?$/.test(raw)
const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
const grouped = raw.includes(',')
const target = countable ? parseFloat(raw.replace(/,/g, '')) : 0

function format(n: number): string {
  const fixed = n.toFixed(decimals)
  if (!grouped) return fixed
  const [int, frac] = fixed.split('.')
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return frac ? `${withCommas}.${frac}` : withCommas
}

const animate = countable && !prefersReducedMotion()
const display = ref(animate ? format(0) : raw)

const root = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

function runCount() {
  const counter = { n: 0 }
  gsap.to(counter, {
    n: target,
    duration: 1.4,
    ease: 'power2.out',
    onUpdate: () => {
      display.value = format(counter.n)
    },
  })
}

onMounted(() => {
  if (!animate || !root.value) return
  // Wait for the intro to lift, then count up the moment the stat is in view
  // (fires immediately for above-the-fold figures like the hero stat bar).
  onAnimationsReady(() => {
    if (!root.value) return
    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer?.disconnect()
          runCount()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(root.value)
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div ref="root" :class="classes">
    <div class="nw-stat__value">{{ display }}<span v-if="unit" class="nw-stat__unit">{{ unit }}</span></div>
    <div v-if="label" class="nw-stat__label">{{ label }}</div>
    <div v-if="sub" class="nw-stat__sub">{{ sub }}</div>
  </div>
</template>

<style>
.nw-stat{ display:flex; flex-direction:column; gap:.25rem; }
.nw-stat__value{
  font-family:var(--font-mono); font-weight:var(--fw-semibold);
  font-variant-numeric:tabular-nums; line-height:1;
  font-size:clamp(2rem,1.3rem+2.2vw,3rem); color:var(--navy-700);
  letter-spacing:-.01em;
}
.nw-stat__value .nw-stat__unit{ font-size:.5em; color:var(--azure-600); margin-left:.25em; letter-spacing:0; }
.nw-stat__label{ font-size:var(--fs-sm); color:var(--text-muted); }
.nw-stat__sub{ font-size:var(--fs-sm); color:var(--text-body); line-height:var(--lh-normal); }
.nw-stat--on-dark .nw-stat__value{ color:#fff; }
.nw-stat--on-dark .nw-stat__value .nw-stat__unit{ color:var(--cyan-500); }
.nw-stat--on-dark .nw-stat__label{ color:var(--text-inverse-muted); }
.nw-stat--on-dark .nw-stat__sub{ color:rgba(255,255,255,.85); }
.nw-stat--accent .nw-stat__value{ color:var(--azure-600); }
</style>
