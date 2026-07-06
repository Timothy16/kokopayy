<!-- components/features/FeatureSpotlightBills.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-[#F1EEF6]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-20 flex flex-col lg:flex-row gap-12 items-center">
      <!-- Left: image -->
      <div class="w-full lg:flex-1 order-1">
        <img
          src="/images/feature-bills.png"
          alt="Kokopay bill payment"
          class="w-full aspect-[3/2] object-cover rounded-[32px]"
        />
      </div>

      <!-- Right: copy -->
      <div class="flex-1 flex flex-col gap-6 w-full order-2">
        <h2
          class="font-sans font-bold text-2xl sm:text-3xl leading-tight sm:leading-10 tracking-[0.09px]"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Pay every bill without leaving the<br class="hidden sm:block" /> app.
        </h2>

        <p
          class="font-sans text-base leading-7 tracking-[0.28px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          Electricity, airtime, data, cable settle them all in seconds. One app for your crypto, your transfers, and your everyday bills.
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
    title: 'All major billers',
    description: 'Connected to 500+ service providers across the continent.',
    icon: '/images/icon-billers.svg',
  },
  {
    title: 'Instant confirmation',
    description: 'Receipts generated immediately for peace of mind.',
    icon: '/images/icon-instant-confirmation.svg',
  },
  {
    title: 'Saved beneficiaries',
    description: 'Pay recurring bills with just one tap.',
    icon: '/images/icon-saved-beneficiaries.svg',
  },
]
</script>