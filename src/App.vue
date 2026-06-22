<script setup lang="ts">
/**
 * App shell — composition surface only: language-aware wrapper, fixed nav,
 * the routed page, and the footer. Page content lives in route views.
 */
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from '@/stores/locale'
import TheNav from '@/components/layout/TheNav.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

const { isArabic } = storeToRefs(useLocaleStore())

const siteClass = computed(() => ['site', isArabic.value ? 'lang-ar' : ''])
</script>

<template>
  <div :class="siteClass">
    <TheNav />
    <RouterView v-slot="{ Component, route }">
      <Transition name="route" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
    <TheFooter />
  </div>
</template>
