<script setup lang="ts">
/**
 * NwIcon — thin wrapper over the curated NAWAT/Lucide line-icon set.
 * Renders a 24px-grid SVG using currentColor so it inherits text color.
 */
import { computed } from 'vue'
import { ICONS } from './icons'

const props = withDefaults(
  defineProps<{
    name: string
    size?: number
    strokeWidth?: number
  }>(),
  { size: 24, strokeWidth: 2 },
)

const inner = computed(() => ICONS[props.name] ?? '')
</script>

<template>
  <svg
    v-if="inner"
    class="nw-icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="inner"
  />
</template>
