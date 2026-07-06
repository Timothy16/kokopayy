<!-- components/sections/CtaSection.vue -->
<template>
  <section
    id="cta"
    class="relative w-full overflow-hidden transition-colors duration-300"
    :style="isDark
      ? 'background-image: linear-gradient(154.07deg, rgba(124,58,237,0.36) 0%, rgba(91,33,182,0.36) 100%)'
      : 'background-image: linear-gradient(154.07deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)'"
  >
    <!-- Decorative circle -->
    <div
      class="pointer-events-none absolute rounded-full top-[-1px] right-[-365px] w-[710px] h-[711px]"
      :style="isDark
        ? 'background: radial-gradient(circle, rgba(146,77,237,0.04), rgba(205,181,252,0.04))'
        : 'background: rgba(255,255,255,0.05)'"
      aria-hidden="true"
    />

    <div class="relative max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">

        <!-- Left: copy -->
        <div class="flex flex-col gap-6 flex-1 min-w-0">

          <!-- Headline -->
          <h2 class="font-sans font-bold text-[36px] sm:text-[40px] lg:text-[48px] leading-[56px] tracking-[0.28px]">
            <span class="text-white">Ready to take control of </span><br>
            <span class="text-[rgba(255,255,255,0.5)]">your money?</span>
          </h2>

          <!-- Subtitle -->
          <p class="font-sans text-[16px] leading-[28px] tracking-[0.28px] text-[#F3F0EB] opacity-90 max-w-[512px]">
            Join hundreds of thousands of Africans using Kokopay to trade, send, and spend globally.
          </p>

          <!-- Store badges — images only -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a href="#" class="transition-opacity hover:opacity-80 shrink-0">
              <img
                src="/images/icon-apple.svg"
                alt="Download on the App Store"
                class="h-[52px] w-auto"
              />
            </a>
            <a href="#" class="transition-opacity hover:opacity-80 shrink-0">
              <img
                src="/images/icon-google-play.svg"
                alt="Get it on Google Play"
                class="h-[52px] w-auto"
              />
            </a>
          </div>
        </div>

        <!-- Right: phone image — no fixed height, no overflow clip, full image shown -->
        <div class="shrink-0 w-full lg:w-[500px] flex items-end justify-center lg:justify-end">
          <img
            src="/images/cta-phone.png"
            alt="Kokopay app on phone"
            class="w-full lg:w-[580px] h-auto object-contain block"
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
</script>