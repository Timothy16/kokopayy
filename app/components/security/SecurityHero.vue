<!-- components/security/SecurityHero.vue -->
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

    <div class="relative z-10 max-w-site mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
      <!-- Left: copy -->
      <div class="flex flex-col gap-6 flex-1 w-full">
        <h1
          class="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight lg:leading-[60px] tracking-[0.28px]"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Your money is protected<br />at every layer.
        </h1>

        <p
          class="font-sans text-base leading-[26px] tracking-[0.28px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          We treat your funds and data with the same seriousness as a<br />
          traditional bank and back it with modern technology built for<br />
          peace of mind.
        </p>

        <div class="pt-2">
          <a
            href="#"
            class="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-sans font-medium text-base shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
            style="background-image: linear-gradient(164.23deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)"
          >
            Start Securely
          </a>
        </div>
      </div>

      <!-- Right: image -->
      <div
        class="w-full lg:w-[726px] shrink-0 rounded-[32px] p-2 h-[320px] sm:h-[400px] lg:h-[500px]"
        :class="isDark
          ? 'bg-[rgba(91,33,182,0.18)] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)]'
          : 'bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)]'"
      >
        <img
          src="/images/security-image.png"
          alt="Kokopay security features shown on a phone"
          class="w-full h-full object-cover rounded-[28px]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>