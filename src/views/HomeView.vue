<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Dict } from '@/i18n/dictionary'
import CityHero from '@/components/hero/CityHero.vue'
import HeroScene from '@/components/hero/HeroScene.vue'
import NwEyebrow from '@/components/core/NwEyebrow.vue'
import NwButton from '@/components/core/NwButton.vue'
import NwStat from '@/components/surfaces/NwStat.vue'
import NwCard from '@/components/surfaces/NwCard.vue'
import NwIcon from '@/components/core/NwIcon.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import logoMarkWhite from '@/assets/logo-mark-white.svg'

const { t, tm, rt } = useI18n()

const pillars = computed(() => tm('pillars') as Dict['pillars'])
const bullets = computed(() => tm('split.bullets') as Dict['split']['bullets'])
const previewServices = computed(() => (tm('services.items') as Dict['services']['items']).slice(0, 3))
</script>

<template>
  <div>
    <!-- FULL-SCREEN INTERACTIVE CITY -->
    <CityHero />

    <!-- HERO TEXT — under the video -->
    <section class="hero hero--under">
      <HeroScene :webgl="false" />
      <div class="wrap">
        <div class="hero__inner hero__inner--under" data-stagger>
          <NwEyebrow on-dark line>{{ t('home.eyebrow') }}</NwEyebrow>
          <h1 class="hero__title">
            {{ t('home.h1a') }}<span class="text-cyan">{{ t('home.h1hl') }}</span>{{ t('home.h1b') }}
          </h1>
          <p class="lead hero__lead">{{ t('home.lead') }}</p>
          <div class="hero__cta">
            <NwButton variant="primary" arrow to="/projects">{{ t('home.explore') }}</NwButton>
            <NwButton variant="outline" on-dark to="/contact">{{ t('home.partner') }}</NwButton>
          </div>
          <div class="hero__statbar">
            <NwStat value="200" unit="MW" :label="t('common.itCapacity')" on-dark />
            <NwStat value="1.20" :label="t('common.pue')" on-dark />
            <NwStat value="0.005" :label="t('common.wue')" on-dark />
            <NwStat value="Tier III" :label="t('common.tier3')" on-dark />
          </div>
        </div>
      </div>
    </section>

    <!-- STATEMENT BAND -->
    <section class="section section--center statement">
      <div class="wrap" data-reveal>
        <NwEyebrow>{{ t('statement.eyebrow') }}</NwEyebrow>
        <h2>{{ t('statement.a') }}<em>{{ t('statement.em') }}</em>{{ t('statement.b') }}</h2>
      </div>
    </section>

    <!-- PILLARS -->
    <section class="section section--subtle">
      <div class="wrap">
        <div class="grid-3" data-stagger>
          <article v-for="(p, i) in pillars" :key="i" class="pillar">
            <div class="pillar__head">
              <span class="pillar__icon"><NwIcon :name="rt(p.icon)" /></span>
              <span class="pillar__num">{{ rt(p.n) }}</span>
            </div>
            <h3>{{ rt(p.title) }}</h3>
            <p>{{ rt(p.body) }}</p>
            <NwButton variant="ghost" size="sm" arrow to="/about">{{ t('common.readMore') }}</NwButton>
          </article>
        </div>
      </div>
    </section>

    <!-- SPLIT FEATURE -->
    <section class="section">
      <div class="wrap">
        <div class="split">
          <div data-reveal>
            <NwEyebrow line>{{ t('split.eyebrow') }}</NwEyebrow>
            <h2 class="split__title">{{ t('split.title') }}</h2>
            <p class="lead split__lead">{{ t('split.lead') }}</p>
            <ul class="split__list">
              <li v-for="(b, i) in bullets" :key="i" class="split__item">
                <span class="split__check"><NwIcon name="check" :size="20" /></span>{{ rt(b) }}
              </li>
            </ul>
            <NwButton variant="secondary" arrow to="/services">{{ t('split.cta') }}</NwButton>
          </div>
          <div class="split__visual" data-reveal>
            <div class="vgrid" />
            <img :src="logoMarkWhite" alt="" data-parallax="0.25" />
            <div class="split__badge">
              <NwStat value="200" unit="MW" :label="t('split.flagship')" on-dark />
              <NwStat value="4 × 50" unit="MW" :label="t('split.pods')" on-dark />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES PREVIEW -->
    <section class="section section--subtle">
      <div class="wrap">
        <div class="section__head section__head--row" data-reveal>
          <div class="section__head-titles">
            <NwEyebrow line>{{ t('servicesHome.eyebrow') }}</NwEyebrow>
            <h2>{{ t('servicesHome.title') }}</h2>
          </div>
          <NwButton variant="ghost" arrow to="/services">{{ t('servicesHome.all') }}</NwButton>
        </div>
        <div class="grid-3" data-stagger>
          <NwCard v-for="(s, i) in previewServices" :key="i" interactive :title="rt(s.title)">
            <template #icon><NwIcon :name="rt(s.icon)" /></template>
            <p class="nw-card__body">{{ rt(s.body) }}</p>
          </NwCard>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
