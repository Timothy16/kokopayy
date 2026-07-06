<!-- pages/contact.vue -->
<template>
  <div>
    <ContactHero />
    <ContactMethodsGrid />
    <ContactFormOffices />
    <MiniFaqNudge />
    <FinalCtaBanner heading="Get Started with Kokopay today"/>
  </div>
</template>

<script setup>
import MiniFaqNudge from '~/components/shared/MiniFaqNudge.vue'
import FinalCtaBanner from '~/components/shared/FinalCtaBanner.vue'

definePageMeta({ layout: 'default' })

const requestURL = useRequestURL()
const canonicalUrl = `${requestURL.origin}${requestURL.pathname}`
const description =
  'Get in touch with the Kokopay team. Find support channels, office locations, and answers to common questions about sending money, paying bills, and trading crypto.'

useSeoMeta({
  title: 'Contact Us',
  description,
  ogTitle: 'Contact Kokopay',
  ogDescription: description,
  ogImage: '/favicon.png',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact Kokopay',
  twitterDescription: description,
  twitterImage: '/favicon.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>