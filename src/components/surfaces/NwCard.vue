<script setup lang="ts">
/** NwCard — surface container for services, projects, articles, panels. */
import { computed, useSlots } from 'vue'

type Pad = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    ink?: boolean
    interactive?: boolean
    accent?: boolean
    pad?: Pad
    title?: string
  }>(),
  { ink: false, interactive: false, accent: false, pad: 'md' },
)

const slots = useSlots()

const classes = computed(() => [
  'nw-card',
  props.ink ? 'nw-card--ink' : '',
  props.interactive ? 'nw-card--interactive' : '',
  props.accent ? 'nw-card--accent' : '',
  props.pad !== 'md' ? `nw-card--pad-${props.pad}` : '',
])
</script>

<template>
  <div :class="classes">
    <div v-if="slots.icon" class="nw-card__icon" aria-hidden="true"><slot name="icon" /></div>
    <h3 v-if="title" class="nw-card__title">{{ title }}</h3>
    <slot />
  </div>
</template>

<style>
.nw-card{
  display:flex; flex-direction:column;
  background:var(--surface-card); color:var(--text-body);
  border:1px solid var(--border-subtle); border-radius:var(--radius-lg);
  padding:var(--space-6);
  transition:transform var(--dur-base) var(--ease-out),
             box-shadow var(--dur-base) var(--ease-out),
             border-color var(--dur-base) var(--ease-out);
}
.nw-card--ink{
  background:var(--surface-ink-2); color:var(--text-inverse-muted);
  border-color:var(--border-on-dark);
}
.nw-card--ink .nw-card__title{ color:#fff; }
.nw-card--pad-sm{ padding:var(--space-5); }
.nw-card--pad-lg{ padding:var(--space-7); }
.nw-card--interactive{ cursor:pointer; }
.nw-card--interactive:hover{
  transform:translateY(-4px);
  box-shadow:var(--shadow-card-hover);
  border-color:var(--azure-400);
}
.nw-card--accent{ border-top:3px solid var(--azure-500); }
.nw-card__title{ font-family:var(--font-display); font-weight:var(--fw-bold);
  color:var(--text-strong); font-size:var(--fs-h4); line-height:var(--lh-snug);
  letter-spacing:0; margin:0; }
.nw-card__icon{ width:2.75rem; height:2.75rem; display:flex; align-items:center; justify-content:center;
  border-radius:var(--radius-md); background:rgba(0,162,255,.10); color:var(--azure-600);
  margin-bottom:var(--space-2); }
.nw-card--ink .nw-card__icon{ background:rgba(74,243,248,.12); color:var(--cyan-500); }
.nw-card__body{ font-size:var(--fs-sm); line-height:var(--lh-relaxed); margin:0; }
.nw-card > * + *{ margin-top:var(--space-3); }
</style>
