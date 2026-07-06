<!-- components/about/OurStory.vue -->
<template>
  <section
    class="relative w-full overflow-hidden transition-colors duration-300 pt-[160px] pb-20 px-5 sm:px-10 lg:px-20"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <!-- Dark mode: radial blob -->
    <div
      v-if="isDark"
      class="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px] top-[-100px] blur-[50px] rounded-full"
      style="background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0) 70%)"
      aria-hidden="true"
    />

    <div class="relative z-10 max-w-site mx-auto flex flex-col lg:flex-row gap-12 items-start">
      <!-- Left: copy -->
      <div class="flex flex-col gap-8 flex-1 w-full">
        <div class="flex flex-col gap-4">
          <h1
            class="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight lg:leading-[60px] tracking-[0.28px]"
            :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
          >
            We're building the money app Africa deserves.
          </h1>
          <p
            class="pt-2 font-sans text-base leading-[29.25px] tracking-[0.28px]"
            :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
          >
            Kokopay started with a simple belief that every African, at home or abroad, should be able to move money, trade crypto, and pay bills without friction, fear, or hidden fees.
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <h2
            class="font-sans font-semibold text-2xl leading-10 tracking-[-0.32px]"
            :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
          >
            Money in Africa was too hard for too long.
          </h2>
          <div class="flex flex-col gap-4">
            <p
              class="font-sans text-base leading-6 tracking-[0.28px]"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              For decades, moving money across borders or even within the same region meant navigating a labyrinth of high fees, slow processing times, and complex bureaucracy. We saw students struggling to receive funds from home, and families waiting days for essential remittances.
            </p>
            <p
              class="font-sans text-base leading-6 tracking-[0.28px]"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              The Kokopay answer was born out of this necessity. We've built a platform that leverages modern technology to bypass these legacy hurdles, creating a seamless financial bridge for the continent.
            </p>
          </div>
        </div>
      </div>

      <!-- Right: image -->
      <div class="relative w-full lg:w-[600px] shrink-0">
        <img
          src="/images/p2p-image.png"
          alt="Kokopay team member using the app"
          class="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-[32px]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>