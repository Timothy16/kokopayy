<!-- components/sections/TrustSecurityBento.vue -->
<template>
  <section
    id="security"
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-[#F1EEF6]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div class="flex flex-col gap-12">

        <!-- Heading block -->
        <div v-reveal class="flex flex-col gap-4 items-center">
          <h2
            class="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[40px] tracking-[0.28px] text-center transition-colors duration-300"
            :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
          >
            Security is our foundation
          </h2>
          <p
            class="font-sans text-[18px] leading-[28px] tracking-[0.28px] text-center transition-colors duration-300"
            :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
          >
            We treat your digital assets with the same reverence as a traditional vault.
          </p>
        </div>

        <!-- Bento layout -->
        <div class="flex flex-col lg:flex-row gap-12 items-start">

          <!-- Left: image -->
          <div
            v-reveal
            class="w-full lg:flex-1 h-[320px] sm:h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden p-2 shrink-0 transition-colors duration-300"
            :class="isDark ? 'bg-[rgba(91,33,182,0.16)]' : 'bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)]'"
          >
            <NuxtImg
              src="/images/security-image.png"
              alt="Person using Kokopay securely"
              class="w-full h-full object-cover rounded-[28px]"
            />
          </div>

          <!-- Right: stacked cards -->
          <div class="w-full lg:w-[452px] shrink-0 flex flex-col gap-6">
            <div
              v-for="(card, idx) in securityCards"
              :key="card.title"
              v-reveal="idx"
              class="flex flex-col gap-0 rounded-[32px] border p-[33px] transition-colors duration-300 hover:-translate-y-1 hover:shadow-lg"
              :class="isDark
                ? 'bg-[rgba(61,61,61,0.2)] border-[rgba(46,46,46,0.5)]'
                : 'bg-white border-[#DDDDDD]'"
            >
              <!-- Icon + title row -->
              <div class="flex gap-4 items-start mb-2">
                <img
                  :src="card.icon"
                  :alt="card.title"
                  class="w-6 shrink-0 mt-1"
                />
                <h3
                  class="font-sans font-medium text-[20px] leading-[32px] transition-colors duration-300"
                  :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
                >
                  {{ card.title }}
                </h3>
              </div>
              <!-- Description -->
              <p
                class="font-sans text-[16px] leading-[24px] tracking-[0.28px] transition-colors duration-300"
                :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
              >
                {{ card.description }}
              </p>
            </div>
          </div>

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

const securityCards = [
  {
    title: 'End-to-End Encryption',
    description: 'All data and transactions are secured using AES-256 military-grade encryption.',
    icon: '/images/icon-encryption.svg',
  },
  {
    title: '24/7 Fraud Monitoring',
    description: 'AI-driven systems detect and prevent suspicious activity before it happens.',
    icon: '/images/icon-fraud.svg',
  },
  {
    title: 'Multi-Factor Auth',
    description: 'Optional extra layers of security via authenticator apps or SMS.',
    icon: '/images/icon-mfa.svg',
  },
]
</script>