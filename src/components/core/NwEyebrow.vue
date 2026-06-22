<script setup lang="ts">
/** NwEyebrow — the uppercase, azure section label sitting above headings. */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{ line?: boolean; onDark?: boolean }>(),
  { line: false, onDark: false },
)

const classes = computed(() => ['nw-eyebrow-c', props.onDark ? 'nw-eyebrow-c--on-dark' : ''])
</script>

<template>
  <span :class="classes">
    <span v-if="line" class="nw-eyebrow-c__line" aria-hidden="true" />
    <slot />
  </span>
</template>

<style>
.nw-eyebrow-c{
  display:inline-flex; align-items:center; gap:.7em;
  font-family:var(--font-sans); font-weight:var(--fw-semibold);
  font-size:var(--fs-eyebrow); letter-spacing:var(--ls-wide);
  text-transform:uppercase; color:var(--text-accent);
}
.nw-eyebrow-c--on-dark{ color:var(--cyan-500); }
.nw-eyebrow-c__line{ width:2.25rem; height:2px; background:currentColor; opacity:.8; border-radius:2px; }
</style>
