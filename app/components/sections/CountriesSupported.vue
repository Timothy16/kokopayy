<!-- components/sections/CountriesSupported.vue -->
<template>
  <section
    id="countries"
    class="w-full transition-colors duration-300 "
    :class="isDark
      ? 'bg-[#0A0A0B] border-[#1C1B1C]'
      : 'bg-[#F1EEF6] border-[#E8E3F0]'"
  >
    <div class="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20 py-20">

      <!-- Heading block -->
      <div class="flex flex-col items-center gap-4 mb-12">
        <h2
          class="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[44px] text-center tracking-[0] transition-colors duration-300"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Countries Supported
        </h2>
        <p
          class="font-sans font-normal text-[16px] leading-[24px] text-center max-w-[672px] transition-colors duration-300"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          Trade cryptocurrency assets and receive local fiat currency across our growing
          network of African countries using local payment methods.
        </p>
      </div>

      <!-- Cards row -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        <div
          v-for="country in countries"
          :key="country.code"
          class="flex flex-col items-center gap-[4px] rounded-[16px] border p-[25px] transition-colors duration-300"
          :class="isDark
            ? 'bg-[rgba(23,23,28,0.70)] backdrop-blur-[10px] border-[rgba(149,141,161,0.10)]'
            : 'bg-white border-[#E5E7EB]'"
        >
          <!-- Flag with ring -->
          <div
            class="w-12 h-12 rounded-full border-2 p-[2px] shrink-0 overflow-hidden"
            :class="isDark ? 'border-[#4A4455]' : 'border-[#E5E7EB]'"
          >
            <img
              :src="country.flag"
              :alt="`${country.name} flag`"
              class="w-full h-full rounded-full object-cover"
            />
          </div>

          <!-- Country name -->
          <div class="w-full flex flex-col items-center pt-3">
            <span
              class="font-sans font-semibold text-[16px] leading-[24px] text-center transition-colors duration-300"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#111827]'"
            >
              {{ country.name }}
            </span>
          </div>

          <!-- Currency -->
          <div class="w-full flex flex-col items-center">
            <span
              class="font-sans font-normal text-[14px] leading-[16px] text-center transition-colors duration-300"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#6B7280]'"
            >
              {{ country.currencyCode }} · {{ country.currencyShort }}
            </span>
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

const countries = [
  { code: 'ng', name: 'Nigeria',      currencyCode: 'NGN', currencyShort: 'Naira',    flag: '/images/flag-nigeria.svg' },
  { code: 'ke', name: 'Kenya',        currencyCode: 'KES', currencyShort: 'Shilling', flag: '/images/flag-kenya.svg' },
  { code: 'gh', name: 'Ghana',        currencyCode: 'GHS', currencyShort: 'Cedi',     flag: '/images/flag-ghana.svg' },
  { code: 'rw', name: 'Rwanda',       currencyCode: 'RWF', currencyShort: 'Franc',    flag: '/images/flag-rwanda.svg' },
  { code: 'tz', name: 'Tanzania',     currencyCode: 'TZS', currencyShort: 'Shilling', flag: '/images/flag-tanzania.svg' },
  { code: 'za', name: 'South Africa', currencyCode: 'ZAR', currencyShort: 'Rand',     flag: '/images/flag-south-africa.svg' },
]
</script>