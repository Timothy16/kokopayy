<!-- components/about/ValuesSection.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-20 flex flex-col gap-12">
      <h2
        class="font-sans font-bold text-3xl sm:text-4xl text-center leading-tight sm:leading-[40px] tracking-[0.28px]"
        :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
      >
        What we stand for
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        <div
          v-for="value in values"
          :key="value.title"
          class="flex flex-col gap-2 p-8 rounded-[32px] border h-full"
          :class="isDark
            ? 'bg-[#141415] border-[#434343]'
            : 'bg-white border-[#DDDDDD]'"
        >
          <img :src="value.icon" alt="" :class="value.iconClass" />

          <h3
            class="font-sans font-medium text-xl leading-5 tracking-[0.28px] pt-2"
            :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
          >
            {{ value.title }}
          </h3>

          <p
            class="font-sans text-base leading-5 tracking-[0.28px]"
            :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
          >
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const values = [
  {
    title: 'Trust first',
    description: "Security is not a feature; it's our foundation. We protect your wealth with bank-grade encryption.",
    icon: '/images/icon-trust-first.svg',
    iconClass: 'w-6 h-[30px]',
  },
  {
    title: 'Built for Africa',
    description: 'Our solutions are tailored to the unique economic landscape of the African continent.',
    icon: '/images/icon-built-for-africa.svg',
    iconClass: 'size-[30px]',
  },
  {
    title: 'Radically simple',
    description: "Finance doesn't have to be confusing. We design for clarity, speed, and ease of use.",
    icon: '/images/icon-radically-simple.svg',
    iconClass: 'size-[33px]',
  },
  {
    title: 'Always available',
    description: "Money never sleeps, and neither does our support team. We're here for you 24/7.",
    icon: '/images/icon-always-available.svg',
    iconClass: 'w-[30px] h-[27px]',
  },
]
</script>