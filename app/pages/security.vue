<!-- pages/security.vue -->
<template>
  <div>
    <SecurityHero />
    <TrustStrip />
    <SecurityPillars />
    <ProtectionInAction />
    <SafetyTips />
    <FinalCtaBanner heading="Bank-grade security, in your pocket"/>
    <!-- More sections will be added here as Figma nodes come in -->
  </div>
</template>

<script setup>
import SecurityHero from '~/components/security/SecurityHero.vue'
import TrustStrip from '~/components/security/TrustStrip.vue'
import SecurityPillars from '~/components/security/SecurityPillars.vue'
import ProtectionInAction from '~/components/security/ProtectionInAction.vue'
import SafetyTips from '~/components/security/SafetyTips.vue'
import FinalCtaBanner from '~/components/shared/FinalCtaBanner.vue'

definePageMeta({ layout: 'default' })

const requestURL = useRequestURL()
const canonicalUrl = `${requestURL.origin}${requestURL.pathname}`
const description =
  'Kokopay keeps your money safe with bank-grade encryption, biometric authentication, and 24/7 fraud monitoring. See how we protect every transaction across Africa.'

useSeoMeta({
  title: 'Security & Safety',
  description,
  ogTitle: 'Kokopay Security & Safety',
  ogDescription: description,
  ogImage: '/favicon.png',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kokopay Security & Safety',
  twitterDescription: description,
  twitterImage: '/favicon.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>