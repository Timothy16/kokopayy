<!-- pages/features.vue -->
<template>
  <div>
    <FeaturesHero />
    <FeatureSpotlightWallet />
    <FeatureSpotlightCrypto />
    <FeatureSpotlightP2P />
    <FeatureSpotlightBills />
    <WhyKokopayStrip />
    <FeaturesFinalCta />
    <!-- More sections will be added here as Figma nodes come in -->
  </div>
</template>

<script setup>
import FeaturesHero from '~/components/features/FeaturesHero.vue'
import FeatureSpotlightWallet from '~/components/features/FeatureSpotlightWallet.vue'
import FeatureSpotlightCrypto from '~/components/features/FeatureSpotlightCrypto.vue'
import FeatureSpotlightP2P from '~/components/features/FeatureSpotlightP2P.vue'
import FeatureSpotlightBills from '~/components/features/FeatureSpotlightBills.vue'
import WhyKokopayStrip from '~/components/features/WhyKokopayStrip.vue'
import FeaturesFinalCta from '~/components/features/FeaturesFinalCta.vue'

definePageMeta({ layout: 'default' })

const requestURL = useRequestURL()
const canonicalUrl = `${requestURL.origin}${requestURL.pathname}`
const description =
  "Explore Kokopay's features: a multi-currency wallet, instant P2P transfers, crypto trading, and bill payments — everything you need to manage money across Africa in one app."

useSeoMeta({
  title: 'Features',
  description,
  ogTitle: 'Kokopay Features',
  ogDescription: description,
  ogImage: '/favicon.png',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kokopay Features',
  twitterDescription: description,
  twitterImage: '/favicon.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>