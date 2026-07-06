<!-- components/sections/HowItWorks.vue -->
<template>
  <section
    id="how-it-works"
    class="w-full transition-colors duration-300 border-t border-b"
    :class="isDark
      ? 'bg-[#1C1B1C] border-[#0E0E0F]'
      : 'bg-white border-[rgba(0,0,0,0.08)]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div class="flex flex-col gap-12">

        <!-- Heading -->
        <h2
          class="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[40px] tracking-[0.28px] text-center w-full transition-colors duration-300"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Get started in minutes
        </h2>

        <!-- Steps grid -->
        <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-8">

          <!-- Connecting line — desktop only -->
          <div
            class="hidden sm:block absolute h-[2px] top-[48px] left-[15%] right-[15%] transition-colors duration-300"
            :class="isDark ? 'bg-[#525252]' : 'bg-[#E5E5E5]'"
            aria-hidden="true"
          />

          <!-- Step -->
          <div
            v-for="step in steps"
            :key="step.number"
            class="flex flex-col items-center"
          >
            <!-- Number circle -->
            <div class="mb-6 relative z-10">
              <div
                class="w-24 h-24 rounded-full border-4 flex items-center justify-center transition-colors duration-300"
                :class="isDark
                  ? 'bg-[#141414] border-[rgba(56,56,56,0.5)]'
                  : 'bg-[#F3ECFC] border-[#F7F4FC]'"
              >
                <span
                  class="font-sans font-semibold text-[24px] leading-[32px] text-center transition-colors duration-300"
                  :class="isDark ? 'text-[#D2BBFF]' : 'text-[#5B21B6]'"
                >
                  {{ step.number }}
                </span>
              </div>
            </div>

            <!-- Step title -->
            <h3
              class="font-sans font-medium text-[24px] leading-[32px] text-center mb-3 transition-colors duration-300"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              {{ step.title }}
            </h3>

            <!-- Step description -->
            <p
              class="font-sans text-[16px] leading-[24px] tracking-[0.28px] text-center max-w-[320px] transition-colors duration-300"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              {{ step.description }}
            </p>
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

const steps = [
  {
    number: '1',
    title: 'Download & Sign Up',
    description: 'Get the app from your store and create your secure profile in under 2 minutes.',
  },
  {
    number: '2',
    title: 'Verify Identity',
    description: 'Complete our quick KYC process to unlock your full account limits safely.',
  },
  {
    number: '3',
    title: 'Trade, Send, Pay',
    description: 'Fund your wallet and start transacting seamlessly across the continent.',
  },
]
</script>