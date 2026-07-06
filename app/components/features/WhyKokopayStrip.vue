<!-- components/features/WhyKokopayStrip.vue -->
<template>
  <section
    class="w-full py-16 transition-colors duration-300"
    :class="isDark ? 'bg-[#1C1B1C]' : 'bg-white border-y border-[#E5E5E5]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-12 items-center">
      <h2
        class="font-sans font-bold text-2xl sm:text-3xl text-center"
        :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
      >
        Built for trust, built for speed.
      </h2>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1120px]">
        <div
          v-for="item in items"
          :key="item.label"
          class="flex flex-col items-center gap-4"
        >
          <img :src="item.icon" alt="" class="size-12" />
          <span
            class="font-sans font-bold text-base leading-5 tracking-[0.28px] text-center"
            :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
          >
            {{ item.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const items = [
  { label: 'Bank-grade security', icon: '/images/icon-bank-grade-security.svg' },
  { label: '24/7 human support', icon: '/images/icon-human-support.svg' },
  { label: 'Available worldwide', icon: '/images/icon-available-worldwide.svg' },
  { label: 'Best local rates', icon: '/images/icon-best-local-rates.svg' },
]
</script>