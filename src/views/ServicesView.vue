<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Dict } from '@/i18n/dictionary'
import PageHeader from '@/components/sections/PageHeader.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import NwCard from '@/components/surfaces/NwCard.vue'
import NwIcon from '@/components/core/NwIcon.vue'

const { t, tm, rt } = useI18n()
const services = computed(() => tm('services.items') as Dict['services']['items'])
</script>

<template>
  <div>
    <PageHeader :eyebrow="t('services.eyebrow')" :title="t('services.title')" :lead="t('services.lead')" />
    <section class="section">
      <div class="wrap">
        <div class="grid-3" data-stagger>
          <NwCard v-for="(s, i) in services" :key="i" interactive accent :title="rt(s.title)">
            <template #icon><NwIcon :name="rt(s.icon)" /></template>
            <p class="nw-card__body">{{ rt(s.body) }}</p>
          </NwCard>
        </div>
      </div>
    </section>
    <CtaSection />
  </div>
</template>
