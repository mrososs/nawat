<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Dict } from '@/i18n/dictionary'
import PageHeader from '@/components/sections/PageHeader.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import NwEyebrow from '@/components/core/NwEyebrow.vue'
import NwBadge from '@/components/core/NwBadge.vue'
import NwCard from '@/components/surfaces/NwCard.vue'
import NwStat from '@/components/surfaces/NwStat.vue'
import NwIcon from '@/components/core/NwIcon.vue'

const { t, tm, rt } = useI18n()
const offerings = computed(() => tm('partners.offerings') as Dict['partners']['offerings'])
const ecosystem = computed(() => tm('partners.ecosystem') as Dict['partners']['ecosystem'])
</script>

<template>
  <div>
    <PageHeader :eyebrow="t('partners.eyebrow')" :title="t('partners.title')" :lead="t('partners.lead')" />

    <section class="section section--tight-top">
      <div class="wrap">
        <div class="grid-3" data-stagger>
          <NwCard v-for="(o, i) in offerings" :key="i" accent interactive :title="rt(o.title)">
            <NwBadge variant="azure" class="offer-badge">{{ rt(o.tag) }}</NwBadge>
            <p class="nw-card__body">{{ rt(o.body) }}</p>
          </NwCard>
        </div>
        <div class="metric-row" data-reveal>
          <NwStat value="1.20" :label="t('partners.m1')" accent />
          <NwStat value="Tier III" :label="t('partners.m2')" />
          <NwStat value="24" unit="mo" :label="t('partners.m3')" accent />
          <NwStat value="12.5" unit="MW" :label="t('partners.m4')" />
        </div>
      </div>
    </section>

    <section class="section section--subtle">
      <div class="wrap">
        <div class="section__head" data-reveal>
          <NwEyebrow line>{{ t('partners.ecoEyebrow') }}</NwEyebrow>
          <h2>{{ t('partners.ecoTitle') }}</h2>
          <p class="lead">{{ t('partners.ecoLead') }}</p>
        </div>
        <div class="grid-2" data-stagger>
          <NwCard v-for="(e, i) in ecosystem" :key="i" :title="rt(e.title)">
            <template #icon><NwIcon :name="rt(e.icon)" /></template>
            <p class="nw-card__body">{{ rt(e.body) }}</p>
            <p class="nw-mono nw-card__meta">{{ rt(e.meta) }}</p>
          </NwCard>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
