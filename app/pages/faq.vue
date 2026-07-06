<!-- pages/faq.vue -->
<template>
  <div>
    <FaqHero v-model="searchQuery" />
    <FaqCategorizedList :search-query="searchQuery" />
    <MiniFaqNudge
      heading="Still need help?"
      body="If you didn't find what you're looking for, our team is here to help."
      link-text="Contact Support Team"
      href="/contact"
      dark-bg="#1C1B1C"
    />
    <FinalCtaBanner heading="Get Started with Kokopay today"/>
  </div>
</template>

<script setup>
import MiniFaqNudge from '~/components/shared/MiniFaqNudge.vue'
import FinalCtaBanner from '~/components/shared/FinalCtaBanner.vue'

definePageMeta({ layout: 'default' })

const searchQuery = ref('')

const requestURL = useRequestURL()
const canonicalUrl = `${requestURL.origin}${requestURL.pathname}`
const description =
  'Find answers to frequently asked questions about Kokopay — account setup, transfers, fees, and security. Still need help? Our support team is here for you.'

useSeoMeta({
  title: 'Frequently Asked Questions',
  description,
  ogTitle: 'Kokopay FAQ',
  ogDescription: description,
  ogImage: '/favicon.png',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kokopay FAQ',
  twitterDescription: description,
  twitterImage: '/favicon.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>