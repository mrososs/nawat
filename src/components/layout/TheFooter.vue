<script setup lang="ts">
/** TheFooter — big statement line, route links, legal + social. */
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="wrap">
      <p class="footer__big">{{ t('footer.biga') }}<em>{{ t('footer.bigem') }}</em>{{ t('footer.bigb') }}</p>

      <div class="footer__row">
        <div class="footer__nav">
          <RouterLink to="/projects">{{ t('nav.quantum') }}</RouterLink>
          <RouterLink to="/partners">{{ t('nav.partners') }}</RouterLink>
          <RouterLink to="/services">{{ t('nav.services') }}</RouterLink>
          <RouterLink to="/about">{{ t('nav.about') }}</RouterLink>
          <RouterLink to="/contact">{{ t('footer.careers') }}</RouterLink>
          <RouterLink to="/contact">{{ t('nav.contact') }}</RouterLink>
        </div>
        <div class="footer__legal">
          <a>{{ t('footer.privacy') }}</a><a>{{ t('footer.terms') }}</a><a>LinkedIn</a><a>X</a>
        </div>
      </div>

      <p class="footer__copy">{{ t('footer.copyright') }}</p>
    </div>
  </footer>
</template>
