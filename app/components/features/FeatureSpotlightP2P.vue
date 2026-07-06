<!-- components/features/FeatureSpotlightP2P.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#1C1B1C]' : 'bg-white'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-20 flex flex-col lg:flex-row gap-12 items-start">
      <!-- Left: copy -->
      <div class="flex-1 flex flex-col gap-6 w-full">
        <h2
          class="font-sans font-bold text-2xl sm:text-3xl leading-tight sm:leading-10 tracking-[0.09px]"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Send money the way Africa moves.
        </h2>

        <p
          class="font-sans text-base leading-7 tracking-[0.28px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          Send to anyone, across borders, instantly. Whether it's family in Lagos or a supplier in Nairobi, your money arrives intact and on time.
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

      <!-- Right: image -->
      <div class="w-full lg:w-[530px] shrink-0">
        <img
          src="/images/feature-p2p.png"
          alt="Kokopay peer-to-peer transfer"
          class="w-full h-[300px] sm:h-[360px] lg:h-[412px] object-cover rounded-[32px]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const features = [
  {
    title: 'Instant transfer',
    description: 'Recipient gets notified in milliseconds.',
    icon: '/images/icon-instant-transfer.svg',
  },
  {
    title: 'Cross-border',
    description: 'Seamless transfers between major African countries.',
    icon: '/images/icon-cross-border.svg',
  },
  {
    title: 'Zero hidden fees',
    description: "Transparent pricing so you always know what you're paying.",
    icon: '/images/icon-zero-fees.svg',
  },
]
</script>