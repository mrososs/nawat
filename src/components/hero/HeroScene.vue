<script setup lang="ts">
/**
 * HeroScene — the layered hero backdrop: CSS sky + grid + glowing horizon,
 * with an optional Three.js node-network (webgl) mounted on top.
 */
import HeroCanvas from './HeroCanvas.vue'

withDefaults(defineProps<{ webgl?: boolean }>(), { webgl: true })
</script>

<template>
  <div class="hero__scene" aria-hidden="true">
    <div class="hero__sky" />
    <div class="hero__grid" />
    <HeroCanvas v-if="webgl" />
    <div class="hero__horizon" />
  </div>
</template>
