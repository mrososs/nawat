<script setup lang="ts">
/**
 * NwButton — primary marketing/UI action.
 * Renders a <RouterLink> when `to` is set, an <a> when `href` is set,
 * otherwise a <button>. Theming is via global CSS custom properties.
 */
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    onDark?: boolean
    arrow?: boolean
    disabled?: boolean
    href?: string
    to?: RouteLocationRaw
  }>(),
  { variant: 'primary', size: 'md', onDark: false, arrow: false, disabled: false },
)

const classes = computed(() => [
  'nw-btn',
  `nw-btn--${props.variant}`,
  props.size !== 'md' ? `nw-btn--${props.size}` : '',
  props.onDark ? 'nw-btn--on-dark' : '',
])
</script>

<template>
  <RouterLink v-if="to && !disabled" :to="to" :class="classes">
    <slot />
    <span v-if="arrow" class="nw-btn__arrow" aria-hidden="true">→</span>
  </RouterLink>
  <a v-else-if="href && !disabled" :href="href" :class="classes">
    <slot />
    <span v-if="arrow" class="nw-btn__arrow" aria-hidden="true">→</span>
  </a>
  <button v-else :class="classes" :disabled="disabled">
    <slot />
    <span v-if="arrow" class="nw-btn__arrow" aria-hidden="true">→</span>
  </button>
</template>

<style>
.nw-btn{
  --_pad-y:.75rem; --_pad-x:1.4rem; --_fs:1rem;
  display:inline-flex; align-items:center; justify-content:center; gap:.55em;
  font-family:var(--font-sans); font-weight:var(--fw-semibold);
  font-size:var(--_fs); line-height:1; letter-spacing:.01em;
  padding:var(--_pad-y) var(--_pad-x);
  border-radius:var(--radius-pill); border:var(--border-med) solid transparent;
  cursor:pointer; text-decoration:none; white-space:nowrap;
  transition:background var(--dur-fast) var(--ease-out),
             color var(--dur-fast) var(--ease-out),
             border-color var(--dur-fast) var(--ease-out),
             transform var(--dur-fast) var(--ease-out),
             box-shadow var(--dur-fast) var(--ease-out);
}
.nw-btn:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:3px; }
.nw-btn:active{ transform:translateY(1px); }
.nw-btn[disabled]{ opacity:.45; pointer-events:none; }
.nw-btn .nw-btn__arrow{ transition:transform var(--dur-base) var(--ease-out); }
.nw-btn:hover .nw-btn__arrow{ transform:translateX(3px); }
[dir=rtl] .nw-btn__arrow{ transform:scaleX(-1); }
[dir=rtl] .nw-btn:hover .nw-btn__arrow{ transform:scaleX(-1) translateX(3px); }

/* sizes */
.nw-btn--sm{ --_pad-y:.5rem; --_pad-x:1rem; --_fs:.875rem; }
.nw-btn--lg{ --_pad-y:1rem; --_pad-x:1.9rem; --_fs:1.0625rem; }

/* variants */
.nw-btn--primary{ background:var(--cta-bg); color:var(--cta-text); }
.nw-btn--primary:hover{ background:var(--cta-bg-hover); box-shadow:0 8px 22px rgba(0,162,255,.32); }
.nw-btn--primary:active{ background:var(--cta-bg-active); }

.nw-btn--secondary{ background:var(--navy-700); color:#fff; }
.nw-btn--secondary:hover{ background:var(--navy-600); }

.nw-btn--outline{ background:transparent; color:var(--navy-700); border-color:var(--border-strong); }
.nw-btn--outline:hover{ border-color:var(--navy-700); background:var(--gray-50); }

.nw-btn--ghost{ background:transparent; color:var(--navy-700); border-color:transparent; padding-inline:.4rem; }
.nw-btn--ghost:hover{ color:var(--azure-600); }

/* on dark surfaces */
.nw-btn--on-dark.nw-btn--outline{ color:#fff; border-color:var(--border-on-dark); }
.nw-btn--on-dark.nw-btn--outline:hover{ border-color:#fff; background:rgba(255,255,255,.08); }
.nw-btn--on-dark.nw-btn--ghost{ color:#fff; }
.nw-btn--on-dark.nw-btn--ghost:hover{ color:var(--cyan-500); }
</style>
