<script setup lang="ts">
/** NwInput — labelled text field (or textarea) for contact / partner forms. */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    hint?: string
    required?: boolean
    onDark?: boolean
    textarea?: boolean
    rows?: number
    type?: string
    placeholder?: string
    id?: string
  }>(),
  { required: false, onDark: false, textarea: false, rows: 4, type: 'text' },
)

const model = defineModel<string>({ default: '' })

const fieldId = computed(
  () =>
    props.id ??
    (props.label ? 'nw-' + String(props.label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined),
)

const classes = computed(() => ['nw-field', props.onDark ? 'nw-field--on-dark' : ''])
</script>

<template>
  <label :class="classes" :for="fieldId">
    <span v-if="label" class="nw-field__label">
      {{ label }}<span v-if="required" class="nw-field__req">*</span>
    </span>

    <textarea
      v-if="textarea"
      :id="fieldId"
      v-model="model"
      class="nw-field__control"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
    />
    <input
      v-else
      :id="fieldId"
      v-model="model"
      class="nw-field__control"
      :type="type"
      :placeholder="placeholder"
      :required="required"
    />

    <span v-if="hint" class="nw-field__hint">{{ hint }}</span>
  </label>
</template>

<style>
.nw-field{ display:flex; flex-direction:column; gap:.5rem; font-family:var(--font-sans); }
.nw-field__label{ font-size:var(--fs-sm); font-weight:var(--fw-semibold); color:var(--text-strong); }
.nw-field__req{ color:var(--azure-600); margin-left:.2em; }
.nw-field__control{
  font-family:inherit; font-size:var(--fs-body); color:var(--text-strong);
  background:var(--surface-page); border:1.5px solid var(--border-strong);
  border-radius:var(--radius-md); padding:.75rem .9rem; width:100%;
  transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.nw-field__control::placeholder{ color:var(--gray-400); }
.nw-field__control:hover{ border-color:var(--gray-400); }
.nw-field__control:focus{ outline:none; border-color:var(--azure-500);
  box-shadow:0 0 0 3px rgba(0,162,255,.18); }
.nw-field__control[disabled]{ background:var(--gray-50); color:var(--text-muted); cursor:not-allowed; }
.nw-field__hint{ font-size:var(--fs-xs); color:var(--text-muted); }
/* on dark */
.nw-field--on-dark .nw-field__label{ color:#fff; }
.nw-field--on-dark .nw-field__control{ background:rgba(255,255,255,.06); border-color:var(--border-on-dark); color:#fff; }
.nw-field--on-dark .nw-field__control::placeholder{ color:rgba(255,255,255,.45); }
.nw-field--on-dark .nw-field__control:focus{ border-color:var(--cyan-500); box-shadow:0 0 0 3px rgba(74,243,248,.22); }
.nw-field--on-dark .nw-field__hint{ color:var(--text-inverse-muted); }
</style>
