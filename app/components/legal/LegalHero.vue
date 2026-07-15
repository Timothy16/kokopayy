<!-- components/legal/LegalHero.vue -->
<template>
  <section
    class="relative w-full overflow-hidden flex flex-col items-center transition-colors duration-300 pt-[160px] pb-16 px-5 sm:px-10 lg:px-20"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <!-- Dark mode: radial blob -->
    <div
      v-if="isDark"
      class="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px] top-[-100px] blur-[50px] rounded-full"
      style="background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0) 70%)"
      aria-hidden="true"
    />

    <div class="relative z-10 flex flex-col items-center gap-4 w-full max-w-[672px]">
      <h1
        class="font-sans font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-[0.28px] text-center w-full"
        :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
      >
        {{ title }}
      </h1>

      <p
        v-if="subtitle"
        class="text-base leading-7 tracking-[0.28px] text-center font-sans"
        :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
      >
        {{ subtitle }}
      </p>

      <span
        class="inline-flex items-center px-4 py-2 rounded-full border font-sans text-[13px] font-semibold w-fit transition-colors duration-300"
        :class="isDark
          ? 'bg-[rgba(23,23,28,0.7)] border-[rgba(210,187,255,0.2)] text-[#D2BBFF]'
          : 'bg-[#ede9fe] border-[#ccc3d6] text-[#5B21B6]'"
      >
        Last updated: {{ lastUpdated }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

defineProps({
  title:       { type: String, required: true },
  subtitle:    { type: String, default: '' },
  lastUpdated: { type: String, required: true },
})
</script>