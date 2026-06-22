<script setup lang="ts">
/** TheNav — fixed top navigation with language toggle + CTA. */
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '@/stores/locale'
import { useScrolled } from '@/composables/useScrolled'
import NwButton from '@/components/core/NwButton.vue'
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

const navClass = computed(() => ['nav', scrolled.value ? 'nav--solid' : 'nav--top'])
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
      <NwButton variant="primary" size="sm" arrow to="/contact">{{ t('nav.cta') }}</NwButton>
    </div>
  </nav>
</template>
