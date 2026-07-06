<!-- components/features/FeatureSpotlightCrypto.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-[#F1EEF6]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-20 flex flex-col lg:flex-row gap-12 items-start">
      <!-- Left: image -->
      <div class="w-full lg:w-[533px] shrink-0 order-1">
        <img
          src="/images/feature-crypto.png"
          alt="Kokopay crypto trading"
          class="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-[32px]"
        />
      </div>

      <!-- Right: copy -->
      <div class="flex-1 flex flex-col gap-6 w-full order-2">
        <h2
          class="font-sans font-bold text-2xl sm:text-3xl leading-tight sm:leading-10 tracking-[0.09px]"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Buy and sell crypto in seconds.
        </h2>

        <p
          class="font-sans text-base leading-7 tracking-[0.28px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          Swap Bitcoin, USDT, and 15+ coins at the best rates in Africa. No complicated trading screens just fast, simple exchange.
        </p>

        <div class="flex flex-col gap-6 pt-2">
          <div
            v-for="item in features"
            :key="item.title"
            class="flex gap-4 items-start"
          >
            <img :src="item.icon" alt="" class="size-10 shrink-0" />
            <div class="flex flex-col gap-0.5">
              <h4
                class="font-sans font-medium text-base leading-5 tracking-[0.28px]"
                :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
              >
                {{ item.title }}
              </h4>
              <p
                class="font-sans text-base leading-6 tracking-[0.28px]"
                :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const features = [
  {
    title: '15+ coins',
    description: 'Top-tier cryptocurrencies available for instant trading.',
    icon: '/images/icon-coins.svg',
  },
  {
    title: 'Best local rates',
    description: 'We find you the best rate, every time.',
    icon: '/images/icon-best-rates.svg',
  },
  {
    title: 'Instant settlement',
    description: 'No waiting for confirmations—your assets are available instantly.',
    icon: '/images/icon-instant-settlement.svg',
  },
]
</script>