<script setup lang="ts">
/** NwStat — a headline metric (mono figure + label), used for MW / m² / PUE. */
import { computed } from 'vue'

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
</script>

<template>
  <div :class="classes">
    <div class="nw-stat__value">{{ value }}<span v-if="unit" class="nw-stat__unit">{{ unit }}</span></div>
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
