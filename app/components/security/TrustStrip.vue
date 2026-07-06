<!-- components/security/TrustStrip.vue -->
<template>
  <section
    class="w-full py-8 px-5 sm:px-10 lg:px-20 transition-colors duration-300"
    :style="isDark ? { backgroundColor: '#1C1B1C' } : { backgroundImage: 'linear-gradient(176.62deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)' }"
  >
    <div class="max-w-site mx-auto flex flex-wrap items-center justify-between gap-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="flex items-center gap-3"
      >
        <span
          class="inline-block shrink-0"
          :class="stat.iconClass"
          :style="{
            maskImage: `url(${stat.icon})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url(${stat.icon})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            backgroundColor: isDark ? '#E5E2E3' : '#FFFFFF'
          }"
        />
        <span
          class="font-sans font-medium text-base tracking-[0.28px] leading-5 whitespace-nowrap"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-white'"
        >
          {{ stat.label }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const stats = [
  {
    label: 'Bank-grade encryption',
    icon: '/images/icon-shield.svg',
    iconClass: 'w-4 h-5',
  },
  {
    label: '24/7 monitoring',
    icon: '/images/icon-monitoring.svg',
    iconClass: 'w-[18px] h-[18px]',
  },
  {
    label: '50,000+ users protected',
    icon: '/images/icon-users.svg',
    iconClass: 'w-6 h-3',
  },
  {
    label: 'Human support',
    icon: '/images/icon-headset.svg',
    iconClass: 'w-[18px] h-[21px]',
  },
]
</script>