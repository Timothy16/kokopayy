<!-- components/security/SafetyTips.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-20 flex flex-col lg:flex-row gap-12 items-start">
      <!-- Left column -->
      <div class="flex flex-col gap-6 flex-1 w-full">
        <h2
          class="font-sans font-bold text-3xl sm:text-4xl leading-tight sm:leading-[40px] tracking-[0.28px]"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Safety is a partnership.
        </h2>

        <p
          class="font-sans text-base leading-[26px] tracking-[0.28px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          While we handle the complex technical defense, staying secure is a team effort. Here's how you can play your part in keeping your Kokopay account iron-clad.
        </p>

        <!-- Pro Tip callout -->
        <div
          class="flex gap-4 items-start pl-5 pr-4 py-6 rounded-[32px] border-l-4"
          style="border-left-color: #CA8A04"
          :class="isDark ? 'bg-[#141415]' : 'bg-[#F0EDE9]'"
        >
          <img src="/images/icon-pro-tip.svg" alt="" class="w-[15px] h-5 shrink-0 mt-0.5" />
          <div class="flex flex-col gap-1">
            <span
              class="font-sans font-medium text-base leading-5 tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              Pro Tip
            </span>
            <p
              class="font-sans text-base leading-[26px] tracking-[0.28px]"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              Check your "Login History" in settings regularly to ensure no unknown devices are logged in.
            </p>
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div class="flex flex-col gap-6 flex-1 w-full">
        <div
          v-for="tip in tips"
          :key="tip.title"
          class="flex gap-5 items-center p-6 rounded-[32px] min-h-[120px] border"
          :class="isDark
            ? 'bg-[#141415] border-[#282828]'
            : 'bg-[#EDE9FE] border-transparent'"
        >
          <img :src="tip.icon" alt="" :class="tip.iconClass" class="shrink-0" />
          <div class="flex flex-col gap-1">
            <h4
              class="font-sans font-medium text-base leading-5 tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              {{ tip.title }}
            </h4>
            <p
              class="font-sans text-base leading-[26px] tracking-[0.28px]"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              {{ tip.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const tips = [
  {
    title: 'Enable 2FA',
    description: 'Always use an authenticator app for an extra layer of defense beyond your password.',
    icon: '/images/icon-tip-2fa.svg',
    iconClass: 'w-[42px] h-10',
  },
  {
    title: 'Never share PIN/OTP',
    description: 'Kokopay employees will never ask for your login codes or recovery phrases. Ever.',
    icon: '/images/icon-tip-pin.svg',
    iconClass: 'w-[39px] h-[46px]',
  },
  {
    title: 'Contact support',
    description: 'If you notice anything suspicious, lock your account and message us immediately via the app.',
    icon: '/images/icon-tip-support.svg',
    iconClass: 'w-11 h-[42px]',
  },
]
</script>