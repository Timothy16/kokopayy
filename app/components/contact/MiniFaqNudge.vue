<!-- components/contact/MiniFaqNudge.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-[#F1EEF6]'"
  >
    <div
      class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      <div class="flex flex-col gap-1">
        <h3
          class="font-sans font-medium text-2xl leading-8"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Looking for a quick answer?
        </h3>
        <p
          class="font-sans text-base leading-6 tracking-[0.28px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          Most questions are answered in our FAQs.
        </p>
      </div>

      <a
        href="#faq"
        class="flex items-center gap-2 shrink-0"
      >
        <span
          class="text-sm font-semibold tracking-[0.28px] leading-5"
          style="font-family: 'Inter', sans-serif"
          :class="isDark ? 'text-[#D2BBFF]' : 'text-[#5B21B6]'"
        >
          View FAQs
        </span>
        <img
          :src="isDark ? '/images/icon-arrow-right-dark.svg' : '/images/icon-arrow-right-light.svg'"
          alt=""
          class="w-4 h-4"
        />
      </a>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>