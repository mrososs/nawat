<script setup lang="ts">
/** CtaSection — closing "get involved" band, reused at the foot of pages. */
import { useI18n } from 'vue-i18n'
import HeroScene from '@/components/hero/HeroScene.vue'
import NwEyebrow from '@/components/core/NwEyebrow.vue'
import NwButton from '@/components/core/NwButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="section section--ink section--center">
    <HeroScene :webgl="false" />
    <div class="wrap cta__inner" data-reveal>
      <NwEyebrow on-dark>{{ t('cta.eyebrow') }}</NwEyebrow>
      <h2 class="cta__title">{{ t('cta.title') }}</h2>
      <p class="lead cta__lead">{{ t('cta.lead') }}</p>
      <div class="btn-row btn-row--center">
        <NwButton variant="primary" arrow to="/contact">{{ t('cta.partner') }}</NwButton>
        <NwButton variant="outline" on-dark to="/contact">{{ t('cta.contact') }}</NwButton>
      </div>
    </div>
  </section>
</template>
