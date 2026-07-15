<!-- components/shared/FinalCtaBanner.vue -->
<template>
  <section
    class="relative w-full overflow-hidden flex flex-col items-center justify-center"
    :class="isDark ? 'py-20 px-5 sm:px-10 lg:px-20' : 'py-24 px-5 sm:px-10 lg:px-20'"
    :style="isDark
      ? 'background-image: linear-gradient(167.17deg, rgba(124,58,237,0.36) 0%, rgba(91,33,182,0.36) 100%)'
      : 'background-image: linear-gradient(165.96deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)'"
  >
    <!-- Decorative circles -->
    <div
      v-if="!isDark"
      class="pointer-events-none absolute top-0 right-[-192px] size-[384px] rounded-full bg-[rgba(255,255,255,0.05)]"
      aria-hidden="true"
    />
    <template v-else>
      <div
        class="pointer-events-none absolute top-[-250px] right-[-185px] size-[500px] rounded-full blur-[50px] opacity-50 bg-[rgba(255,255,255,0.05)]"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[-165px] w-[327px] h-[328px] rounded-full"
        style="background: linear-gradient(to right, rgba(146,77,237,0.04), rgba(205,181,252,0.04))"
        aria-hidden="true"
      />
    </template>

    <div class="relative z-10 flex flex-col items-center gap-8 max-w-[1280px] w-full">
      <h2
        class="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[56px] text-center text-white tracking-[0.28px]"
        v-html="heading"
      />

      <div class="flex flex-wrap gap-6 items-center justify-center pt-2">
        <!-- Apple Store -->
        <a
          href="https://apps.apple.com/ng/app/kokopay/id6443886739"
          class="shrink-0 transition-opacity hover:opacity-80"
        >
          <img src="/images/icon-apple.svg" alt="Download on the Apple Store" class="h-14 w-auto" />
        </a>

        <!-- Google Play -->
        <a
          href="https://play.google.com/store/apps/details?id=com.kokosend.kokopay.kokopay"
          class="shrink-0 transition-opacity hover:opacity-80"
        >
          <img src="/images/icon-google-play-cta.svg" alt="Get it on Google Play" class="h-14 w-auto" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

defineProps({
  heading: { type: String, default: 'Get Started with Kokopay today' },
})
</script>