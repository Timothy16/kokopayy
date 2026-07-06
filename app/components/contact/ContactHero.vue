<!-- components/contact/ContactHero.vue -->
<template>
  <section
    class="relative w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-300 pt-[160px] pb-[80px] px-5 sm:px-10 lg:px-20"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <!-- Dark mode: centered radial blob -->
    <div
      v-if="isDark"
      class="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px] top-0 blur-[50px] rounded-full"
      style="background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0) 70%)"
      aria-hidden="true"
    />

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center gap-2 w-full">

      <!-- Headline -->
      <h1
        class="font-sans font-bold text-[36px] sm:text-[42px] lg:text-[48px] leading-[56px] tracking-[0.28px] text-center w-full transition-colors duration-300"
        :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
      >
        {{ isDark ? "We're here to help" : "We're here to help." }}
      </h1>

      <!-- Subtitle -->
      <div class="pt-2 w-full flex justify-center">
        <p
          class="font-sans text-center leading-[28px] max-w-[508px] transition-colors duration-300"
          :class="isDark
            ? 'text-[#CCC3D8] text-[16px]'
            : 'text-[#525252] text-[18px]'"
        >
          Questions, issues, or feedback reach our team any time. Real humans, fast responses, 24/7.
        </p>
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