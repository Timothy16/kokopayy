<!-- components/security/ProtectionInAction.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#1C1B1C]' : 'bg-[#F1EEF6]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-20 flex flex-col gap-12 items-center">
      <!-- Heading -->
      <div class="flex flex-col items-center gap-4 w-full">
        <h2
          class="font-sans font-bold text-3xl sm:text-4xl text-center leading-tight sm:leading-[40px] tracking-[0.28px]"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Security that works while you sleep.
        </h2>
        <p
          class="font-sans text-base leading-[26px] tracking-[0.28px] text-center max-w-[672px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          Our multi-layered approach ensures that from the moment you log in to the completion<br class="hidden sm:block" />
          of a trade, your assets are shielded.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative w-full flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
        <!-- Connector line: desktop only -->
        <div
          class="hidden lg:block absolute left-0 right-0 h-px"
          style="top: 32px"
          :class="isDark ? 'bg-[#343434]' : 'bg-[#CCCCCC]'"
          aria-hidden="true"
        />

        <div
          v-for="step in steps"
          :key="step.number"
          class="relative flex-1 flex flex-col items-center w-full"
        >
          <!-- Number badge -->
          <div class="flex flex-col items-center pb-8 relative z-10">
            <div
              class="size-16 rounded-full flex items-center justify-center border-4"
              :class="isDark
                ? 'bg-[#101010] border-[rgba(67,67,67,0.2)]'
                : 'bg-[#5B21B6] border-white'"
            >
              <span class="font-sans text-2xl leading-8 text-white">{{ step.number }}</span>
            </div>
          </div>

          <!-- Card -->
          <div
            class="flex flex-col gap-4 items-center text-center p-[33px] rounded-[32px] border w-full"
            :class="isDark
              ? 'bg-[#171617] border-[#292929]'
              : 'bg-white border-[#E5E5E5] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.04)]'"
          >
            <span
              class="font-sans text-base leading-5 tracking-[0.28px] uppercase"
              :class="isDark ? 'text-[#D2BBFF]' : 'text-[#5B21B6]'"
            >
              {{ step.label }}
            </span>
            <h3
              class="font-sans text-2xl leading-8 tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              {{ step.title }}
            </h3>
            <p
              class="font-sans text-base leading-[26px] tracking-[0.28px]"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              {{ step.description }}
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

const steps = [
  {
    number: 1,
    label: 'PRE-LOGIN',
    title: 'Account protection',
    description: 'Real-time device fingerprinting and threat detection ensure only you can access your profile.',
  },
  {
    number: 2,
    label: 'DURING ACTION',
    title: 'Transaction protection',
    description: 'Smart contract auditing and address verification prevent funds from being sent to high-risk recipients.',
  },
  {
    number: 3,
    label: 'ALWAYS ON',
    title: 'Ongoing protection',
    description: 'Continuous vulnerability scanning and bug bounty programs keep our infrastructure robust 24/7.',
  },
]
</script>