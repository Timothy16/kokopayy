<!-- components/about/StatsBand.vue -->
<template>
  <section
    class="w-full py-[60px] px-5 sm:px-10 lg:px-20 transition-colors duration-300"
    :style="isDark ? { backgroundColor: '#1C1B1C' } : { backgroundImage: 'linear-gradient(174deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)' }"
  >
    <div class="max-w-[1040px] mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
      <template v-for="(stat, index) in stats" :key="stat">
        <span
          class="font-sans font-medium text-2xl leading-8 tracking-[0.28px] whitespace-nowrap"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-white'"
        >
          {{ stat }}
        </span>
        <span
          v-if="index < stats.length - 1"
          class="font-sans font-semibold text-2xl leading-8 opacity-30"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-white'"
          aria-hidden="true"
        >
          •
        </span>
      </template>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const stats = [
  '50,000+ users',
  '6+ countries',
  'NGN & KSH supported',
  '24/7 support',
]
</script>