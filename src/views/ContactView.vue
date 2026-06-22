<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Dict } from '@/i18n/dictionary'
import HeroScene from '@/components/hero/HeroScene.vue'
import NwEyebrow from '@/components/core/NwEyebrow.vue'
import NwButton from '@/components/core/NwButton.vue'
import NwInput from '@/components/forms/NwInput.vue'
import NwIcon from '@/components/core/NwIcon.vue'

const { t, tm, rt } = useI18n()
const inquiries = computed(() => tm('contact.iq') as Dict['contact']['iq'])

const sent = ref(false)
const form = reactive({ name: '', email: '', org: '', message: '' })

function submit() {
  sent.value = true
}

function reset() {
  sent.value = false
  form.name = ''
  form.email = ''
  form.org = ''
  form.message = ''
}
</script>

<template>
  <div>
    <section class="hero">
      <HeroScene />
      <div class="wrap">
        <div class="hero__inner hero__inner--contact" data-reveal>
          <NwEyebrow on-dark line>{{ t('contact.eyebrow') }}</NwEyebrow>
          <h1 class="contact__title">{{ t('contact.title') }}</h1>
          <p class="lead contact__lead">{{ t('contact.lead') }}</p>

          <div class="contact-grid">
            <!-- form -->
            <div class="contact-panel">
              <div v-if="sent" class="contact-sent">
                <div class="contact-sent__icon"><NwIcon name="check" /></div>
                <h3 class="contact-sent__title">{{ t('contact.sentT') }}</h3>
                <p class="contact-sent__text">{{ t('contact.sentB') }}</p>
                <NwButton variant="outline" on-dark @click="reset">{{ t('contact.sendAnother') }}</NwButton>
              </div>

              <form v-else class="contact-form" @submit.prevent="submit">
                <div class="contact-form__row">
                  <NwInput v-model="form.name" :label="t('contact.fullName')" on-dark :placeholder="t('contact.phName')" required />
                  <NwInput v-model="form.email" :label="t('contact.email')" on-dark type="email" :placeholder="t('contact.phEmail')" required />
                </div>
                <NwInput v-model="form.org" :label="t('contact.org')" on-dark :placeholder="t('contact.phOrg')" />
                <NwInput v-model="form.message" :label="t('contact.message')" on-dark textarea :rows="4" :placeholder="t('contact.phMsg')" />
                <NwButton variant="primary" arrow type="submit">{{ t('contact.send') }}</NwButton>
              </form>
            </div>

            <!-- locations + inquiries -->
            <div class="contact-aside">
              <div>
                <NwEyebrow on-dark>{{ t('contact.locations') }}</NwEyebrow>
                <div class="contact-loc">
                  <span class="contact-loc__icon"><NwIcon name="map-pin" :size="18" /></span>
                  <div>
                    <div class="contact-loc__title">{{ t('contact.hqT') }}</div>
                    <div class="contact-loc__value">{{ t('contact.hqV') }}</div>
                  </div>
                </div>
                <div class="contact-loc">
                  <span class="contact-loc__icon"><NwIcon name="map-pin" :size="18" /></span>
                  <div>
                    <div class="contact-loc__title">{{ t('contact.campusT') }}</div>
                    <div class="contact-loc__value">{{ t('contact.campusV') }}</div>
                  </div>
                </div>
              </div>
              <div>
                <NwEyebrow on-dark>{{ t('contact.inquiries') }}</NwEyebrow>
                <div class="contact-iq">
                  <div v-for="(q, i) in inquiries" :key="i" class="contact-iq__row">
                    <span class="contact-iq__label">{{ rt(q.label) }}</span>
                    <a :href="'mailto:' + rt(q.email)" class="nw-mono contact-iq__email">{{ rt(q.email) }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
