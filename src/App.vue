<script setup lang="ts">
/**
 * App shell — composition surface only: language-aware wrapper, fixed nav,
 * the routed page, and the footer. Page content lives in route views.
 */
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useLocaleStore } from '@/stores/locale'
import TheNav from '@/components/layout/TheNav.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import IntroSplash from '@/components/intro/IntroSplash.vue'
import {
  revealScope,
  disposeTriggers,
  ScrollTrigger,
  prefersReducedMotion,
  onAnimationsReady,
  setAnimationsReady,
  type GsapScrollTrigger,
} from '@/animations'

const { isArabic } = storeToRefs(useLocaleStore())
const route = useRoute()
const router = useRouter()

const siteClass = computed(() => ['site', isArabic.value ? 'lang-ar' : ''])

// First-visit intro: the animated logo plays once per browser session, then
// hands off to the home route. Skipped entirely when motion is reduced.
const INTRO_KEY = 'nawat:intro-seen'
const introActive = ref(
  !prefersReducedMotion() && sessionStorage.getItem(INTRO_KEY) !== '1',
)

onMounted(() => {
  if (introActive.value) {
    // Whatever URL the visitor landed on, the intro resolves to home.
    if (route.path !== '/') router.replace('/')
  } else {
    // No intro — open the gate so entrance animations run immediately.
    setAnimationsReady(true)
  }
})

// As the splash starts fading, let the home entrance play through it.
function onIntroLift() {
  setAnimationsReady(true)
}

// Once the splash has fully faded, drop the overlay and remember the visit.
function onIntroDone() {
  sessionStorage.setItem(INTRO_KEY, '1')
  introActive.value = false
}

// ScrollTriggers belonging to the page currently on screen; rebuilt on every
// route enter and torn down before the next page mounts.
let pageTriggers: GsapScrollTrigger[] = []

function activateReveal(el: HTMLElement) {
  disposeTriggers(pageTriggers)
  pageTriggers = revealScope(el, { rtl: isArabic.value })
  // Recompute start/end positions once the new page has laid out.
  requestAnimationFrame(() => ScrollTrigger.refresh())
}

function onRouteEnter(el: Element) {
  // Defer until the gate opens so the first page's entrance plays as the intro
  // lifts rather than unseen behind it; later navigations run immediately.
  onAnimationsReady(() => activateReveal(el as HTMLElement))
}

function onRouteLeave() {
  disposeTriggers(pageTriggers)
  pageTriggers = []
}
</script>

<template>
  <div :class="siteClass">
    <IntroSplash v-if="introActive" @lift="onIntroLift" @done="onIntroDone" />
    <TheNav />
    <RouterView v-slot="{ Component, route }">
      <Transition
        name="route"
        mode="out-in"
        appear
        @enter="onRouteEnter"
        @before-leave="onRouteLeave"
      >
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
    <TheFooter />
  </div>
</template>
