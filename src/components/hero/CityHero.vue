<script setup lang="ts">
/**
 * CityHero — full-screen interactive campus hero.
 * A looping background video of the NAWAT Quantum campus with clickable
 * hotspot "nodes" over points of interest, a sound toggle, and a scroll cue.
 * Ported from the NAWAT design kit (ui_kits/website CityMap).
 */
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { Dict } from '@/i18n/dictionary'
import NwIcon from '@/components/core/NwIcon.vue'
import heroCity from '@/assets/hero-city.mp4'
import heroPoster from '@/assets/hero-city-poster.jpg'

const { t, tm, rt } = useI18n()
const router = useRouter()

type Node = Dict['home']['nodes'][number]
const nodes = tm('home.nodes') as Node[]

/** Hotspot geometry — position (%) + target route + tooltip drop direction. */
const geo = [
  { x: 52, y: 40, to: '/projects', down: true },
  { x: 66, y: 60, to: '/services', down: false },
  { x: 82, y: 35, to: '/partners', down: true },
  { x: 20, y: 38, to: '/about', down: true },
  { x: 45, y: 84, to: '/contact', down: false },
]

const video = ref<HTMLVideoElement | null>(null)
const muted = ref(true)

function toggleSound() {
  const v = video.value
  if (!v) return
  v.muted = !v.muted
  if (!v.muted) void v.play().catch(() => {})
  muted.value = v.muted
}

function scrollDown() {
  window.scrollTo({ top: (window.innerHeight || 800) - 8, behavior: 'smooth' })
}
</script>

<template>
  <section class="cityhero">
    <video
      ref="video"
      class="cityhero__img"
      :src="heroCity"
      :poster="heroPoster"
      autoplay
      loop
      playsinline
      muted
      preload="metadata"
      aria-label="NAWAT Quantum campus — isometric view"
    />
    <div class="cityhero__tint" />

    <div class="cityhero__nodes">
      <button
        v-for="(g, i) in geo"
        :key="g.to"
        class="cnode"
        :class="{ 'cnode--down': g.down }"
        :style="{ left: g.x + '%', top: g.y + '%' }"
        :aria-label="rt(nodes[i].title)"
        @click="router.push(g.to)"
      >
        <span class="cnode__dot" aria-hidden="true" />
        <span class="cnode__tip" role="tooltip">
          <span class="cnode__k">{{ rt(nodes[i].k) }}</span>
          <span class="cnode__t">{{ rt(nodes[i].title) }}</span>
          <span class="cnode__d">{{ rt(nodes[i].desc) }}</span>
          <span class="cnode__go">{{ rt(nodes[i].cta) }}<NwIcon name="arrow-right" :size="14" /></span>
        </span>
      </button>
    </div>

    <div class="cityhero__hint">
      <span class="cityhero__pulse" />
      <span>{{ t('home.mapHint') }}</span>
    </div>

    <button
      class="cityhero__sound"
      :aria-label="muted ? t('home.soundOn') : t('home.soundOff')"
      :title="muted ? t('home.soundOn') : t('home.soundOff')"
      @click="toggleSound"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <template v-if="muted">
          <line x1="22" x2="16" y1="9" y2="15" />
          <line x1="16" x2="22" y1="9" y2="15" />
        </template>
        <template v-else>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </template>
      </svg>
    </button>

    <button class="cityhero__scroll" :aria-label="t('home.scroll')" @click="scrollDown">
      <span>{{ t('home.scroll') }}</span><NwIcon name="chevron-down" :size="18" />
    </button>
  </section>
</template>
