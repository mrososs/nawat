<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Dict } from '@/i18n/dictionary'
import HeroScene from '@/components/hero/HeroScene.vue'
import NwEyebrow from '@/components/core/NwEyebrow.vue'
import NwStat from '@/components/surfaces/NwStat.vue'
import NwCard from '@/components/surfaces/NwCard.vue'
import NwIcon from '@/components/core/NwIcon.vue'
import CtaSection from '@/components/sections/CtaSection.vue'

const { t, tm, rt } = useI18n()
const phases = computed(() => tm('quantum.phases') as Dict['quantum']['phases'])
const infra = computed(() => tm('quantum.infra') as Dict['quantum']['infra'])
const fillClass = ['phase__fill--25', 'phase__fill--50', 'phase__fill--75', 'phase__fill--100']
</script>

<template>
  <div>
    <section class="hero">
      <HeroScene />
      <div class="wrap">
        <div class="hero__inner" data-reveal>
          <NwEyebrow on-dark line>{{ t('quantum.eyebrow') }}</NwEyebrow>
          <h1 class="hero__title hero__title--narrow">{{ t('quantum.title') }}</h1>
          <p class="lead hero__lead--wide">{{ t('quantum.lead') }}</p>
          <p class="nw-mono quantum__coords">{{ t('quantum.coords') }}</p>
          <div class="hero__statbar">
            <NwStat value="200" unit="MW" :label="t('common.itCapacity')" on-dark />
            <NwStat value="210,000" unit="m²" :label="t('common.plotArea')" on-dark />
            <NwStat value="4 × 50" unit="MW" :label="t('common.pods')" on-dark />
            <NwStat value="1.20" :label="t('common.pue')" on-dark />
          </div>
        </div>
      </div>
    </section>

    <section class="section section--subtle">
      <div class="wrap">
        <div class="section__head" data-reveal>
          <NwEyebrow line>{{ t('quantum.phasedEyebrow') }}</NwEyebrow>
          <h2>{{ t('quantum.phasedTitle') }}</h2>
        </div>
        <div class="grid-4" data-stagger>
          <div v-for="(p, i) in phases" :key="i" class="phase">
            <div class="phase__day nw-mono">{{ rt(p.day) }}</div>
            <div class="phase__mw nw-mono">{{ rt(p.mw) }}</div>
            <div class="phase__note">{{ rt(p.note) }}</div>
            <div class="phase__bar"><span :class="fillClass[i]" /></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ink">
      <div class="wrap">
        <div class="section__head" data-reveal>
          <NwEyebrow on-dark line>{{ t('quantum.infraEyebrow') }}</NwEyebrow>
          <h2>{{ t('quantum.infraTitle') }}</h2>
        </div>
        <div class="grid-3" data-stagger>
          <NwCard v-for="(s, i) in infra" :key="i" ink :title="rt(s.title)">
            <template #icon><NwIcon :name="rt(s.icon)" /></template>
            <p class="nw-card__body">{{ rt(s.body) }}</p>
          </NwCard>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
