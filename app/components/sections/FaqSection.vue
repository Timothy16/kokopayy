<!-- components/sections/FaqSection.vue -->
<template>
  <section
    id="faq"
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#1C1B1C]' : 'bg-white'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div class="flex flex-col gap-12 lg:gap-16 items-center w-full max-w-[800px] mx-auto">

        <!-- Heading -->
        <h2
          class="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[44px] tracking-[0.28px] text-center w-full transition-colors duration-300"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Frequently Asked Questions
        </h2>

        <!-- Accordion list -->
        <div class="flex flex-col gap-4 w-full">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="rounded-[16px] border overflow-hidden transition-colors duration-300"
            :class="isDark
              ? 'bg-[rgba(0,0,0,0.18)] border-[rgba(58,54,65,0.72)]'
              : 'bg-white border-[rgba(221,221,221,0.8)]'"
          >
            <!-- Question row -->
            <button
              class="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
              @click="toggle(index)"
            >
              <span
                class="font-sans text-[14px] lg:text-[16px] leading-[24px] tracking-[0.28px] transition-colors duration-300 pr-4"
                :class="openIndex === index
                  ? isDark ? 'text-[#E5E2E3] font-medium' : 'text-[#1A1A1A] font-medium'
                  : isDark ? 'text-[#CCC3D8]' : 'text-[#1A1A1A]'"
              >
                {{ item.question }}
              </span>
              <!-- Chevron -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 shrink-0 transition-transform duration-300"
                :class="[
                  openIndex === index ? 'rotate-180' : 'rotate-0',
                  isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'
                ]"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <!-- Answer — animated expand/collapse -->
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[500px]"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-[500px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="openIndex === index" class="overflow-hidden">
                <p
                  class="font-sans text-[14px] lg:text-[16px] leading-[24px] tracking-[0.28px] px-6 pb-6 transition-colors duration-300"
                  :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
                >
                  {{ item.answer }}
                </p>
              </div>
            </Transition>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

// First item open by default — matching Figma
const openIndex = ref(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: 'How long do transfers take?',
    answer: 'Internal Kokopay transfers are instant. Crypto withdrawals to external wallets depend on network confirmation times but typically complete within minutes. Bank payouts to supported African banks usually clear the same day.',
  },
  {
    question: 'What countries are supported?',
    answer: 'Kokopay currently supports Nigeria, Kenya, Ghana, Rwanda, Tanzania, and South Africa. We are actively expanding to more African countries.',
  },
  {
    question: 'Are there monthly fees?',
    answer: 'Kokopay has no monthly subscription fees. You only pay a small transaction fee when you send money or trade crypto. All fees are shown upfront before you confirm any transaction.',
  },
  {
    question: 'How do I verify my account?',
    answer: 'Account verification is quick and easy. Simply upload a valid government-issued ID and a selfie through the app. Most verifications are completed within minutes.',
  },
]
</script>