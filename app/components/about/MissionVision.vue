<!-- components/about/MissionVision.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0F0F0F]' : 'bg-[#F9F9F9]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-20 flex flex-col lg:flex-row gap-12 items-stretch">
      <!-- Our Mission -->
      <div
        class="relative flex-1 flex flex-col gap-4 p-8 rounded-[32px] overflow-hidden"
        :class="isDark ? 'bg-[#131B22]' : 'bg-[#E8F5FF]'"
      >
        <div
          class="absolute rounded-full size-[236px] -right-[118px] top-0"
          :class="isDark ? 'bg-[rgba(0,0,0,0.2)]' : 'bg-[rgba(0,0,0,0.03)]'"
          aria-hidden="true"
        />

        <img src="/images/icon-mission.svg" alt="" class="relative size-12" />

        <h3
          class="relative font-sans font-medium text-2xl leading-8 tracking-[0.28px] pt-2"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Our Mission
        </h3>

        <p
          class="relative font-sans text-base leading-[26px] tracking-[0.28px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          To give every African simple, secure, and instant control over their money — wherever they live.
        </p>
      </div>

      <!-- Our Vision -->
      <div
        class="relative flex-1 flex flex-col gap-4 p-8 rounded-[32px] overflow-hidden"
        :class="isDark ? 'bg-[#0F1A0F]' : 'bg-[#F2FFF3]'"
      >
        <div
          class="absolute rounded-full size-[236px] -right-[118px] top-0"
          :class="isDark ? 'bg-[rgba(0,0,0,0.2)]' : 'bg-[rgba(0,0,0,0.03)]'"
          aria-hidden="true"
        />

        <img src="/images/icon-vision.svg" alt="" class="relative size-12" />

        <h3
          class="relative font-sans font-medium text-2xl leading-8 tracking-[0.28px] pt-2"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Our Vision
        </h3>

        <p
          class="relative font-sans text-base leading-[26px] tracking-[0.28px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          A connected Africa where sending money home, trading crypto, or paying a bill is as easy as sending a text.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>