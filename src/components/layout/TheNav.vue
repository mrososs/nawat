<script setup lang="ts">
/** TheNav — fixed top navigation with language toggle + CTA. */
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '@/stores/locale'
import { useScrolled } from '@/composables/useScrolled'
import NwButton from '@/components/core/NwButton.vue'
import NwIcon from '@/components/core/NwIcon.vue'
import logoWhite from '@/assets/nawat-logo.png'

type NavKey = 'home' | 'services' | 'quantum' | 'partners' | 'about' | 'contact'

const navItems: { key: NavKey; to: string }[] = [
  { key: 'home', to: '/' },
  { key: 'services', to: '/services' },
  { key: 'quantum', to: '/projects' },
  { key: 'partners', to: '/partners' },
  { key: 'about', to: '/about' },
  { key: 'contact', to: '/contact' },
]

const { t } = useI18n()
const locale = useLocaleStore()
const route = useRoute()
const { scrolled } = useScrolled()

const menuOpen = ref(false)

const navClass = computed(() => [
  'nav',
  scrolled.value || menuOpen.value ? 'nav--solid' : 'nav--top',
  { 'nav--open': menuOpen.value },
])

/** Close the mobile menu whenever navigation completes. */
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <nav :class="navClass">
    <RouterLink to="/" aria-label="NAWAT — home">
      <img class="nav__logo" :src="logoWhite" alt="NAWAT" />
    </RouterLink>

    <div class="nav__links">
      <RouterLink
        v-for="item in navItems"
        :key="item.key"
        :to="item.to"
        class="nav__link"
        :class="{ 'nav__link--active': route.path === item.to }"
      >
        {{ t(`nav.${item.key}`) }}
      </RouterLink>
    </div>

    <div class="nav__right">
      <button class="nav__lang" type="button" @click="locale.toggle">{{ t('toggle') }}</button>
      <NwButton class="nav__cta" variant="primary" size="sm" arrow to="/contact">{{ t('nav.cta') }}</NwButton>
      <button
        class="nav__burger"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="nav-mobile"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <NwIcon :name="menuOpen ? 'x' : 'menu'" :size="26" />
      </button>
    </div>

    <Transition name="nav-panel">
      <div v-if="menuOpen" id="nav-mobile" class="nav__mobile">
        <RouterLink
          v-for="item in navItems"
          :key="item.key"
          :to="item.to"
          class="nav__mobile-link"
          :class="{ 'nav__mobile-link--active': route.path === item.to }"
        >
          {{ t(`nav.${item.key}`) }}
        </RouterLink>
        <NwButton variant="primary" size="md" arrow to="/contact" class="nav__mobile-cta">
          {{ t('nav.cta') }}
        </NwButton>
      </div>
    </Transition>
  </nav>
</template>
