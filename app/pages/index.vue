<!-- pages/index.vue -->
<template>
  <div>
    <HeroSection />
    <CountriesSupported />
    <GlobalFinanceFeatures />
    <P2PSpotlight />
    <HowItWorks />
    <TrustSecurityBento />
    <FaqSection />
    <TestimonialsSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import CountriesSupported from '~/components/sections/CountriesSupported.vue'
import GlobalFinanceFeatures from '~/components/sections/GlobalFinanceFeatures.vue'
import P2PSpotlight from '~/components/sections/P2PSpotlight.vue'
import HowItWorks from '~/components/sections/HowItWorks.vue'
import TrustSecurityBento from '~/components/sections/TrustSecurityBento.vue'
import FaqSection from '~/components/sections/FaqSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import CtaSection from '~/components/sections/CtaSection.vue'

definePageMeta({ layout: 'default' })

const requestURL = useRequestURL()
const canonicalUrl = `${requestURL.origin}${requestURL.pathname}`
const description =
  'Kokopay lets you send money instantly across Africa, pay bills, and trade crypto — all in one secure app. Fast P2P transfers, multi-currency wallets, and bank-grade security.'

useSeoMeta({
  title: 'Send, Spend & Trade Across Africa',
  description,
  ogTitle: 'Kokopay — Send, Spend & Trade Across Africa',
  ogDescription: description,
  ogImage: '/favicon.png',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kokopay — Send, Spend & Trade Across Africa',
  twitterDescription: description,
  twitterImage: '/favicon.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>