<!-- pages/about.vue -->
<template>
  <div>
    <OurStory />
    <MissionVision />
    <ValuesSection />
    <StatsBand />
    <OurOffices />
    <FinalCtaBanner heading="Join the movement.<br />Your money, your continent, your app." />
    <!-- More sections will be added here as Figma nodes come in -->
  </div>
</template>

<script setup>
import OurStory from '~/components/about/OurStory.vue'
import MissionVision from '~/components/about/MissionVision.vue'
import ValuesSection from '~/components/about/ValuesSection.vue'
import StatsBand from '~/components/about/StatsBand.vue'
import OurOffices from '~/components/about/OurOffices.vue'
import FinalCtaBanner from '~/components/shared/FinalCtaBanner.vue'

definePageMeta({ layout: 'default' })

const requestURL = useRequestURL()
const canonicalUrl = `${requestURL.origin}${requestURL.pathname}`
const description =
  "Learn about Kokopay's mission to make cross-border money movement radically simple for Africa. Discover our story, values, and the offices behind the everyday money app."

useSeoMeta({
  title: 'About Us',
  description,
  ogTitle: 'About Kokopay',
  ogDescription: description,
  ogImage: '/favicon.png',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'About Kokopay',
  twitterDescription: description,
  twitterImage: '/favicon.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>