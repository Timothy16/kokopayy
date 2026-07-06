<!-- components/sections/GlobalFinanceFeatures.vue -->
<template>
  <section
    id="features"
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#1C1B1C]' : 'bg-[#FCFCFC]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-16 lg:py-20">

      <!-- Heading -->
      <div class="text-center max-w-[672px] mx-auto mb-12">
        <h2
          class="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.1] mb-4 transition-colors duration-300"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-foreground'"
        >
          Everything you need for global finance
        </h2>
        <p
          class="font-sans text-[15px] sm:text-[16px] leading-[1.75] transition-colors duration-300 mx-auto w-full lg:w-[90%]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-muted-fg'"
        >
          Designed specifically for the modern African digital economy. Built with
          precision, operating with speed.
        </p>
      </div>

      <!-- Feature cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="flex flex-col items-start gap-4 rounded-[32px] border p-[33px] transition-colors duration-300"
          :class="isDark
            ? 'bg-[rgba(0,0,0,0.18)] border-[rgba(58,54,65,0.72)]'
            : 'bg-white border-[#DDDDDD]'"
        >
          <!-- Icon image — background is baked into the SVG -->
          <img
            :src="feature.icon"
            :alt="feature.title"
            class="w-14 h-14 shrink-0"
          />

          <div class="flex flex-col gap-2 pt-2">
            <h3
              class="font-sans font-medium text-[24px] leading-8 transition-colors duration-300"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-foreground'"
            >
              {{ feature.title }}
            </h3>
            <p
              class="font-sans text-[16px] leading-6 transition-colors duration-300"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-muted-fg'"
            >
              {{ feature.description }}
            </p>
          </div>

          <a
            href="#"
            class="font-sans font-semibold text-[14px] inline-flex items-center gap-1 transition-colors pt-3"
            :style="{ color: isDark ? feature.linkColorDark : feature.linkColorLight }"
          >
            Learn more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const features = [
  {
    title: 'Buy & sell crypto',
    description: 'Trade Bitcoin, USDT, and 15+ coins at the best rates in Africa.',
    icon: '/images/icon-crypto.svg',
    linkColorLight: '#5B21B6',
    linkColorDark: '#D2BBFF',
  },
  {
    title: 'Send to anyone',
    description: 'Seamless P2P transfers across borders with zero delays.',
    icon: '/images/icon-send.svg',
    linkColorLight: '#2B6954',
    linkColorDark: '#4DBA95',
  },
  {
    title: 'Pay every bill',
    description: 'Instantly settle electricity, airtime, data, and cable bills from one app.',
    icon: '/images/icon-bills.svg',
    linkColorLight: '#615D55',
    linkColorDark: '#999386',
  },
]
</script>