<script setup lang="ts">
/** PageHeader — the dark hero band used atop interior pages. */
import HeroScene from '@/components/hero/HeroScene.vue'
import NwEyebrow from '@/components/core/NwEyebrow.vue'

defineProps<{ eyebrow: string; title: string; lead?: string }>()
</script>

<template>
  <section class="hero">
    <HeroScene />
    <div class="wrap">
      <div class="hero__inner hero__inner--tight" data-reveal>
        <NwEyebrow on-dark line>{{ eyebrow }}</NwEyebrow>
        <h1 class="page-header__title">{{ title }}</h1>
        <p v-if="lead" class="lead page-header__lead">{{ lead }}</p>
      </div>
    </div>
  </section>
</template>
