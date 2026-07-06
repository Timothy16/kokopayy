<!-- components/sections/P2PSpotlight.vue -->
<template>
  <section
    id="p2p"
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-[#F1EEF6]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-12 justify-center">

        <!-- ── Left: copy ── -->
        <div class="flex flex-col gap-6 flex-1 min-w-0">

          <!-- Headline -->
          <h2
            class="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[44px] tracking-[0.28px] transition-colors duration-300 max-w-[480px]"
            :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
          >
            Money moves the way Africa moves —
            <!-- Dark: gradient. Light: solid primary -->
            <span
              v-if="isDark"
              class="bg-clip-text text-transparent"
              style="background-image: linear-gradient(90deg, #924DED 0%, #CDB5FC 100%)"
            >fast, peer-to-peer, no middlemen.</span>
            <span v-else class="text-[#5B21B6]">fast, peer-to-peer, no middlemen.</span>
          </h2>

          <!-- Description -->
          <p
            class="font-sans text-[16px] leading-[28px] tracking-[0.28px] transition-colors duration-300"
            :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
          >
            We've removed the barriers to entry. Whether you're sending money home to Kumasi or paying a supplier in Nairobi, Kokopay ensures your funds arrive intact and on time.
          </p>

          <!-- Feature list -->
          <div class="flex flex-col gap-6">
            <div
              v-for="item in features"
              :key="item.title"
              class="flex gap-4 items-start"
            >
              <!-- Check icon badge -->
              <div class="shrink-0 pt-[4px]">
                <div class="">
                  <img src="/images/icon-check.svg" alt="" class="" />
                </div>
              </div>

              <!-- Text -->
              <div class="flex flex-col gap-3">
                <h4
                  class="font-sans font-medium text-[20px] leading-[20px] tracking-[0.28px] transition-colors duration-300"
                  :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
                >
                  {{ item.title }}
                </h4>
                <p
                  class="font-sans text-[16px] leading-[24px] tracking-[0.28px] transition-colors duration-300"
                  :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- ── Right: image ── -->
        <div class="relative shrink-0 w-full lg:w-[600px] h-[400px] lg:h-[466px]">

          <!-- Image -->
          <img
            src="/images/p2p-image.png"
            alt="Person using Kokopay app"
            class="absolute inset-0 w-full h-full object-cover rounded-[32px]"
            style="margin-left: 19px; margin-top: 30px; width: calc(100% - 19px); height: calc(100% - 30px)"
          />
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
    title: 'Zero hidden fees',
    description: 'What you see is exactly what they get. Transparent pricing always.',
  },
  {
    title: 'Bank-grade security',
    description: 'Your assets are protected by enterprise-level encryption and cold storage.',
  },
  {
    title: '24/7 Local Support',
    description: 'Real humans ready to help, in your timezone and language.',
  },
]
</script>