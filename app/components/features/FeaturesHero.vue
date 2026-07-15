<!-- components/features/FeaturesHero.vue -->
<template>
  <section
    class="relative w-full overflow-hidden flex flex-col items-center transition-colors duration-300 pt-[160px] pb-20 px-5 sm:px-10 lg:px-20"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <!-- Dark mode: radial blob -->
    <div
      v-if="isDark"
      class="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px] top-[-100px] blur-[50px] rounded-full"
      style="background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0) 70%)"
      aria-hidden="true"
    />

    <div class="relative z-10 flex flex-col items-center gap-2 w-full max-w-[672px]">
      <h1
        class="font-sans font-bold text-3xl sm:text-4xl lg:text-[35px] leading-tight lg:leading-[72px] tracking-[0.28px] text-center w-full"
        :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
      >
        One app. Everything your money needs.
      </h1>

      <p
        class="pt-2 text-base leading-7 tracking-[0.28px] text-center font-sans"
        :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
      >
        Wallet, crypto, transfers, and bills built for Africans at home and abroad, working together in one secure app.
      </p>

      <div class="flex flex-wrap gap-6 items-center justify-center pt-4">
        <!-- Apple Store -->
        <a href="https://apps.apple.com/ng/app/kokopay/id6443886739" class="shrink-0 transition-opacity hover:opacity-80">
          <img src="/images/icon-apple.svg" alt="Download on the Apple Store" class="h-14 w-auto" />
        </a>

        <!-- Google Play -->
        <a href="https://play.google.com/store/apps/details?id=com.kokosend.kokopay.kokopay" class="shrink-0 transition-opacity hover:opacity-80">
          <img src="/images/icon-google-play.svg" alt="Get it on Google Play" class="h-14 w-auto" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>