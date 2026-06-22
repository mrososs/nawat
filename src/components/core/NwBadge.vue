<script setup lang="ts">
/** NwBadge / Tag — compact label for categories, statuses, offering types. */
import { computed } from 'vue'

type Variant = 'azure' | 'navy' | 'cyan' | 'outline' | 'on-dark' | 'status'

const props = withDefaults(
  defineProps<{ variant?: Variant; dot?: boolean }>(),
  { variant: 'azure', dot: false },
)

const classes = computed(() => ['nw-badge', `nw-badge--${props.variant}`])
</script>

<template>
  <span :class="classes">
    <span v-if="dot" class="nw-badge__dot" aria-hidden="true" />
    <slot />
  </span>
</template>

<style>
.nw-badge{
  display:inline-flex; align-items:center; gap:.45em;
  font-family:var(--font-sans); font-weight:var(--fw-semibold);
  font-size:var(--fs-xs); letter-spacing:var(--ls-wide); text-transform:uppercase;
  padding:.4em .75em; border-radius:var(--radius-sm); line-height:1;
  border:1px solid transparent; white-space:nowrap;
}
.nw-badge--azure{ background:rgba(0,162,255,.12); color:var(--azure-700); }
.nw-badge--navy{ background:var(--navy-700); color:#fff; }
.nw-badge--cyan{ background:var(--cyan-500); color:var(--navy-900); }
.nw-badge--outline{ background:transparent; color:var(--text-muted); border-color:var(--border-strong); }
.nw-badge--on-dark{ background:rgba(255,255,255,.10); color:#fff; border-color:var(--border-on-dark); }
.nw-badge--status{ background:rgba(31,181,122,.14); color:var(--green-500); letter-spacing:.02em; text-transform:none; }
.nw-badge__dot{ width:.5em; height:.5em; border-radius:50%; background:currentColor; }
</style>
