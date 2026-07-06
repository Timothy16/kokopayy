<!-- components/sections/HeroSection.vue -->
<template>
  <section
    id="hero"
    class="relative w-full min-h-screen flex items-center overflow-hidden transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-[#f5f3ff]'"
  >
    <!-- Dark mode: single centered radial blob -->
    <div
      v-if="isDark"
      class="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px] -top-[220px] blur-[50px] rounded-full"
      style="background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0) 70%)"
    />

    <!-- Light mode: two blobs -->
    <template v-else>
      <div class="pointer-events-none absolute rounded-full blur-[80px] w-[700px] h-[700px] -top-[100px] -left-[100px] bg-[rgba(91,33,182,0.08)]" />
      <div class="pointer-events-none absolute rounded-full blur-[80px] w-[550px] h-[550px] top-[80px] -right-[50px] bg-[rgba(91,33,182,0.08)]" />
    </template>

    <!-- Content grid -->
    <div
      class="relative z-10 w-full max-w-[1440px] mx-auto
             px-6 sm:px-8 lg:px-20
             pt-[80px]
             py-16 lg:py-0
             grid lg:grid-cols-[640px_1fr] items-center gap-8"
    >

      <!-- ── Left: copy ── -->
      <div class="flex flex-col gap-6">

        <!-- Tag pill -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[13px] font-semibold w-fit transition-colors duration-300"
          :class="isDark
            ? 'bg-[rgba(23,23,28,0.7)] backdrop-blur-[10px] border-[rgba(210,187,255,0.2)] text-[#D2BBFF]'
            : 'bg-[#ede9fe] border-[#ccc3d6] text-primary'"
        >
          <span
            class="w-2 h-2 rounded-full shrink-0"
            :class="isDark ? 'bg-[#8B5CF6]' : 'bg-primary'"
          />
          The Future of African Finance
        </div>

        <!-- Headline -->
        <h1
          class="font-sans font-bold leading-[1.12] tracking-[-0.03em]"
          style="font-size: clamp(2.4rem, 3.8vw, 3.5rem)"
        >
          <span class="text-foreground transition-colors duration-300">
            Trade Crypto Fast, Send Money, and Pay Bills Across Africa—
          </span>
          <!-- Dark: gradient text. Light: solid primary -->
          <span
            v-if="isDark"
            class="bg-clip-text text-transparent"
            style="background-image: linear-gradient(90deg, #924DED 0%, #CDB5FC 100%)"
          >
            All in One App.
          </span>
          <span v-else class="text-primary">
            All in One App.
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="font-sans text-[16px] leading-[1.65] max-w-[520px] text-muted-fg transition-colors duration-300">
          Experience the premium way to manage your digital wealth. Secure, instant
          transactions with the lowest fees on the continent.
        </p>

        <!-- Store badges -->
        <div class="flex flex-wrap gap-4">
          <a href="#" class="transition-opacity hover:opacity-80 shrink-0">
            <img
              src="/images/icon-apple.svg"
              alt="Download on the App Store"
              class="h-[52px] w-auto"
            />
          </a>
          <a href="#" class="transition-opacity hover:opacity-80 shrink-0">
            <img
              src="/images/icon-google-play.svg"
              alt="Get it on Google Play"
              class="h-[52px] w-auto"
            />
          </a>
        </div>

        <!-- Social proof -->
        <div class="flex items-center gap-4">
          <img
            src="/images/avatar-group.webp"
            alt="500k+ users"
            class="h-10 w-auto"
          />
          <p class="font-sans text-[14px]">
            <strong class="font-bold text-foreground transition-colors duration-300">500k+</strong>
            <span class="text-muted-fg transition-colors duration-300"> users already joined</span>
          </p>
        </div>

      </div>

      <!-- ── Right: phone mockup image (entire visual, including floating cards, is one downloaded image) ── -->
      <div class="flex items-center justify-center lg:h-[680px] lg:overflow-visible">
        <img
          src="/images/hero-phone.webp"
          alt="Kokopay app preview showing balance, transfer, and bill payment screens"
          class="w-[460px] sm:w-[560px] lg:w-[650px] xl:w-[730px] h-auto object-contain transition-all duration-300"
          :class="isDark
            ? 'drop-shadow-[0_32px_80px_rgba(109,40,217,0.35)]'
            : 'drop-shadow-[0_32px_80px_rgba(91,33,182,0.2)]'"
        />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>