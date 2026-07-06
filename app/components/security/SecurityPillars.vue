<!-- components/security/SecurityPillars.vue -->
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
        Enterprise-grade security standards
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <div
          v-for="pillar in pillars"
          :key="pillar.title"
          class="flex flex-col gap-3 p-[33px] rounded-[32px] border h-full"
          :class="isDark
            ? 'bg-[#141415] border-[#434343]'
            : 'bg-white border-[#DDDDDD]'"
        >
          <div
            class="size-12 flex items-center justify-center"
            :class="isDark ? 'rounded-lg' : ''"
            :style="isDark ? { backgroundImage: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' } : {}"
          >
            <img :src="pillar.icon" alt="" :class="isDark ? 'w-6 h-6' : 'size-12'" />
          </div>

          <h3
            class="font-sans font-medium text-2xl leading-8 tracking-[0.28px] pt-3"
            :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
          >
            {{ pillar.title }}
          </h3>

          <p
            class="font-sans text-base leading-[26px] tracking-[0.28px]"
            :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
          >
            {{ pillar.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const pillars = [
  {
    title: 'End-to-end encryption',
    description: 'Every transaction is protected with AES-256 military-grade encryption.',
    icon: '/images/icon-encryption-security.svg',
  },
  {
    title: 'Biometric & 2FA login',
    description: 'Your face, fingerprint, or PIN is the only key to your account.',
    icon: '/images/icon-biometric.svg',
  },
  {
    title: '24/7 fraud monitoring',
    description: 'AI-powered systems watch for suspicious activity and stop it before it happens.',
    icon: '/images/icon-fraud-monitoring.svg',
  },
  {
    title: 'Secure wallet storage',
    description: 'Your crypto is held safely with multiple layers of protection.',
    icon: '/images/icon-wallet.svg',
  },
  {
    title: 'Data privacy',
    description: 'Your personal information is never sold or shared. Ever.',
    icon: '/images/icon-privacy.svg',
  },
  {
    title: 'Verified transactions',
    description: 'Every transfer is confirmed and traceable, so you always know where your money is.',
    icon: '/images/icon-verified.svg',
  },
]
</script>