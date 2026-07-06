<!-- components/contact/ContactMethodsGrid.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <div
      class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
    >
      <!-- Email us -->
      <div
        class="flex flex-col p-[33px] rounded-xl border h-full"
        :class="isDark ? 'bg-[#141415] border-[#DDDDDD33]' : 'bg-white border-[#DDDDDD]'"
      >
        <div class="size-12 rounded-lg flex items-center justify-center mb-6 bg-[#EDE9FE]">
          <img src="/images/icon-email.svg" alt="" />
        </div>
        <h3
          class="font-sans font-semibold text-2xl leading-8 tracking-[0.28px] mb-2"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Email us
        </h3>
        <p
          class="font-sans text-base leading-6 tracking-[0.28px] mb-4"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          Drop us a line and we'll get back to you within 2 hours.
        </p>
        <a
          href="mailto:support@mykokopay.com"
          class="font-sans font-bold text-base leading-5 tracking-[0.28px] mt-auto"
          :class="isDark
            ? 'bg-clip-text text-transparent bg-[linear-gradient(174deg,#7C3AED_0%,#5B21B6_100%)]'
            : 'text-[#5B21B6]'"
        >
          support@mykokopay.com
        </a>
      </div>

      <!-- Call us -->
      <div
        class="flex flex-col p-[33px] rounded-xl border h-full"
        :class="isDark ? 'bg-[#141415] border-[#DDDDDD33]' : 'bg-white border-[#DDDDDD]'"
      >
        <div class="size-12 rounded-lg flex items-center justify-center mb-6 bg-[#EDE9FE]">
          <img src="/images/icon-phone.svg" alt="" />
        </div>
        <h3
          class="font-sans font-semibold text-2xl leading-8 tracking-[0.28px] mb-2"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Call us
        </h3>
        <div class="flex flex-col gap-1">
          <p class="font-sans text-base leading-6">
            <span class="font-bold" :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'">+234 810 746 2814</span>
            <span :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"> (Nigeria)</span>
          </p>
          <p class="font-sans text-base leading-6">
            <span class="font-bold" :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'">+254 706 587 063</span>
            <span :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"> (Kenya)</span>
          </p>
        </div>
      </div>

      <!-- In-app support -->
      <div
        class="flex flex-col p-[33px] rounded-xl border h-full"
        :class="isDark ? 'bg-[#141415] border-[#DDDDDD33]' : 'bg-white border-[#DDDDDD]'"
      >
        <div class="size-12 rounded-lg flex items-center justify-center mb-6 bg-[#EDE9FE]">
          <img src="/images/icon-chat.svg" alt="" />
        </div>
        <h3
          class="font-sans font-semibold text-2xl leading-8 tracking-[0.28px] mb-2"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          In-app support
        </h3>
        <p
          class="font-sans text-base leading-6 tracking-[0.28px] mb-4"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          The fastest way to get help — chat with us directly inside the Kokopay app.
        </p>
        <a
          href="#"
          class="font-sans font-bold text-base leading-5 tracking-[0.28px] flex items-center gap-1 text-[#805600] mt-auto"
        >
          Open app
          <img src="/images/icon-arrow-right.svg" alt="" class="w-3 h-3" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>