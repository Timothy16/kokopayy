<!-- components/features/FeaturesFinalCta.vue -->
<template>
  <section
    class="relative w-full overflow-hidden flex flex-col items-center justify-center"
    :class="isDark ? 'pt-20 px-5 sm:px-10 lg:px-20' : 'pt-24 px-5 sm:px-10 lg:px-20'"
    :style="isDark
      ? 'background-image: linear-gradient(159.3deg, rgba(124,58,237,0.36) 0%, rgba(91,33,182,0.36) 100%)'
      : 'background-image: linear-gradient(159.3deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)'"
  >
    <!-- Decorative circle -->
    <div
      class="pointer-events-none absolute rounded-full top-[-1px] right-[-420px] w-[710px] h-[711px]"
      :style="isDark
        ? 'background: radial-gradient(circle, rgba(146,77,237,0.04), rgba(205,181,252,0.04))'
        : 'background: rgba(255,255,255,0.05)'"
      aria-hidden="true"
    />

    <div class="relative z-10 flex flex-col items-center gap-8 max-w-[1280px] w-full">
      <h2
        class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[56px] text-center text-white tracking-[0.28px]"
        style="font-family: 'Space Grotesk', sans-serif"
      >
        Everything you need, in one app.
      </h2>

      <div class="flex flex-wrap gap-6 items-center justify-center pt-2">
        <!-- Apple Store -->
        <a href="#" class="shrink-0 transition-opacity hover:opacity-80">
          <img src="/images/icon-apple.svg" alt="Download on the Apple Store" class="h-14 w-auto" />
        </a>

        <!-- Google Play -->
        <a href="#" class="shrink-0 transition-opacity hover:opacity-80">
          <img src="/images/icon-google-play.svg" alt="Get it on Google Play" class="h-14 w-auto" />
        </a>
      </div>

      <!-- Phone mockup -->
      <div class="w-full max-w-[640px] pt-4">
        <NuxtImg
          src="/images/features-cta-mockup.png"
          alt="Kokopay app overview"
          class="w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>