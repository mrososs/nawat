<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Dict } from '@/i18n/dictionary'
import PageHeader from '@/components/sections/PageHeader.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import NwEyebrow from '@/components/core/NwEyebrow.vue'
import NwButton from '@/components/core/NwButton.vue'
import NwBadge from '@/components/core/NwBadge.vue'
import NwCard from '@/components/surfaces/NwCard.vue'
import NwIcon from '@/components/core/NwIcon.vue'

const { t, tm, rt } = useI18n()
const values = computed(() => tm('about.values') as Dict['about']['values'])

const ceoInitials = computed(() => {
  const parts = t('about.ceoName').trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
})
</script>

<template>
  <div>
    <PageHeader :eyebrow="t('about.eyebrow')" :title="t('about.title')" :lead="t('about.lead')" />

    <section class="section section--tight-top">
      <div class="wrap grid-2" data-stagger>
        <NwCard accent :title="t('about.missionT')"><p class="nw-card__body">{{ t('about.missionB') }}</p></NwCard>
        <NwCard accent :title="t('about.visionT')"><p class="nw-card__body">{{ t('about.visionB') }}</p></NwCard>
      </div>
    </section>

    <section class="section section--subtle section--flush-top">
      <div class="wrap split" data-reveal>
        <div>
          <NwEyebrow line>{{ t('about.khayiraEyebrow') }}</NwEyebrow>
          <h2 class="khayira__title">{{ t('about.khayiraTitle') }}</h2>
          <p class="lead khayira__lead">{{ t('about.khayiraLead') }}</p>
          <NwButton variant="ghost" arrow href="https://khayiraholding.com">{{ t('about.khayiraCta') }}</NwButton>
        </div>
        <div class="ceo-card">
          <div class="ceo-avatar nw-mono" :aria-label="t('about.ceoName')">{{ ceoInitials }}</div>
          <div>
            <NwBadge variant="outline">{{ t('about.leadBadge') }}</NwBadge>
            <div class="ceo-name">{{ t('about.ceoName') }}</div>
            <div class="ceo-role">{{ t('about.ceoRole') }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ink">
      <div class="wrap">
        <div class="section__head" data-reveal>
          <NwEyebrow on-dark line>{{ t('about.valuesEyebrow') }}</NwEyebrow>
          <h2>{{ t('about.valuesTitle') }}</h2>
        </div>
        <div class="grid-4" data-stagger>
          <NwCard v-for="(v, i) in values" :key="i" ink :title="rt(v.title)">
            <template #icon><NwIcon :name="rt(v.icon)" /></template>
            <p class="nw-card__body">{{ rt(v.body) }}</p>
          </NwCard>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
