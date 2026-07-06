<template>
  <div class="min-h-screen bg-page-bg flex items-start justify-center px-10">
    <div class="w-full max-w-[1200px] flex flex-col gap-16 py-16">

      <!-- 1. Title Block -->
      <div class="flex flex-col gap-2">
        <h1 class="font-display font-bold text-[56px] leading-[64px] tracking-[-1.12px] text-accent">
          Kokopay — Design System
        </h1>
        <p class="font-display font-normal text-[36px] leading-[44px] tracking-[-0.36px] text-muted">
          Color, type, and component reference for handoff.
        </p>
      </div>

      <div class="flex flex-wrap gap-8 items-start">

        <!-- 2. Light Mode Colors -->
        <section class="flex flex-col gap-4 w-full pb-0">
          <p class="font-ui font-bold text-[12px] leading-4 tracking-[0.6px] uppercase text-label-muted">
            2. COLOR — LIGHT MODE
          </p>
          <div class="flex gap-6 flex-wrap items-start">
            <div
              v-for="swatch in lightSwatches"
              :key="swatch.label"
              class="flex flex-col gap-2 items-center"
            >
              <div
                class="w-[90px] h-[90px] rounded-full border border-token-border shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)]"
                :style="{ backgroundColor: swatch.color }"
              />
              <div class="flex flex-col items-center font-ui font-normal text-[10px] leading-[15px] text-[#1c1b1b] text-center">
                <span>{{ swatch.label }}</span>
                <span>{{ swatch.color }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. Dark Mode Preview -->
        <section class="flex flex-col gap-4 w-full">
          <p class="font-ui font-bold text-[12px] leading-4 tracking-[0.6px] uppercase text-label-muted">
            3. COLOR — DARK MODE PREVIEW
          </p>
          <div class="bg-[#0f0a1f] border border-[#2d2640] rounded-xl flex gap-8 items-center px-8 py-8">
            <div
              v-for="swatch in darkSwatches"
              :key="swatch.label"
              class="flex flex-col gap-2 items-center shrink-0"
            >
              <div
                class="w-[60px] h-[60px] rounded-full border border-[#2d2640]"
                :style="{ backgroundColor: swatch.color }"
              />
              <span class="font-ui font-normal text-[10px] leading-[15px] text-[#a9a4c2] whitespace-nowrap">
                {{ swatch.label }}
              </span>
            </div>
            <div class="flex-1 flex flex-col items-end">
              <p class="font-ui font-bold text-[18px] leading-7 text-[#f5f3ff]">Text Primary</p>
              <p class="font-ui font-normal text-[14px] leading-5 text-[#a9a4c2]">Supporting Text Content</p>
            </div>
          </div>
        </section>

        <!-- 4. Typography Hierarchy -->
        <section class="flex flex-col gap-8 w-full lg:w-[704px]">
          <p class="font-ui font-bold text-[12px] leading-4 tracking-[0.6px] uppercase text-label-muted">
            4. TYPOGRAPHY HIERARCHY
          </p>
          <div class="bg-white border border-token-border rounded-[14px] flex flex-col gap-6 p-8">
            <div class="flex flex-col gap-1">
              <span class="font-ui text-[10px] leading-[15px] text-accent">HERO HEADLINE (56px)</span>
              <h2 class="font-display font-bold text-[56px] leading-[64px] tracking-[-1.12px] text-[#1c1b1b]">
                The everyday money<br>app
              </h2>
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-ui text-[10px] leading-[15px] text-accent">SECTION HEADING (36px)</span>
              <h3 class="font-display font-bold text-[36px] leading-[44px] tracking-[-0.36px] text-[#1c1b1b]">
                Five currencies, one wallet.
              </h3>
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-ui text-[10px] leading-[15px] text-accent">BODY TEXT (16px)</span>
              <p class="font-ui font-normal text-[16px] leading-6 text-[#4a4453]">
                Managing your global finances should be as simple as sending a text.<br>
                Seamless transfers, instant currency swaps, and premium rewards at your fingertips.
              </p>
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-ui text-[10px] leading-[15px] text-accent">SMALL LABEL (12px BOLD UPPERCASE)</span>
              <span class="font-ui font-bold text-[12px] leading-4 tracking-[0.6px] uppercase text-[#1c1b1b]">
                FEATURES
              </span>
            </div>
          </div>
        </section>

        <!-- 5. Spacing & Radius -->
        <section class="flex flex-col gap-8 w-full lg:w-[336px]">
          <p class="font-ui font-bold text-[12px] leading-4 tracking-[0.6px] uppercase text-label-muted">
            5. SPACING &amp; RADIUS
          </p>
          <div class="bg-white border border-token-border rounded-[14px] flex flex-col gap-8 p-8">
            <div class="flex flex-col gap-4">
              <span class="font-ui text-[10px] leading-[15px] text-accent">SCALE (PX)</span>
              <div class="flex gap-2 items-end">
                <div
                  v-for="size in spacingScale"
                  :key="size"
                  class="bg-primary rounded-sm"
                  :style="{ width: `${size}px`, height: `${size}px` }"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="bg-[#fcf9f8] border border-token-border rounded-[14px] flex items-center justify-between p-6">
                <span class="font-ui text-[16px] leading-6 text-[#1c1b1b]">Cards — 14px radius</span>
                <div class="w-2 h-2 rounded-full bg-token-border" />
              </div>
              <button class="bg-accent text-white font-ui font-bold text-[16px] leading-6 rounded-lg py-4 w-full text-center">
                Buttons — 8px radius
              </button>
              <div class="bg-white border border-[#7b7485] rounded-lg p-4">
                <span class="font-ui text-[16px] leading-6 text-[#7b7485]">Inputs — 8px radius</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 6. Brand Font — Koko Sans -->
        <section class="flex flex-col gap-4 w-full">
          <p class="font-ui font-bold text-[12px] leading-4 tracking-[0.6px] uppercase text-label-muted">
            6. BRAND FONT — KOKO SANS
          </p>
          <div class="bg-white border border-token-border rounded-[14px] flex flex-col gap-6 p-8">
            <div
              v-for="weight in kokoWeights"
              :key="weight.label"
              class="flex items-baseline justify-between border-b border-[#f0edf5] pb-4 last:border-0 last:pb-0"
            >
              <span
                class="font-sans text-[32px] leading-[40px] text-[#1c1b1b]"
                :style="{ fontWeight: weight.value }"
              >
                Koko Sans {{ weight.label }}
              </span>
              <span class="font-ui text-[12px] text-label-muted">{{ weight.value }}</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Design System',
  robots: 'noindex, nofollow',
})

const lightSwatches = [
  { label: 'PRIMARY', color: '#5B21B6' },
  { label: 'DARK', color: '#4C1D95' },
  { label: 'TINT', color: '#EDE9FE' },
  { label: 'PAGE BG', color: '#FAF7F2' },
  { label: 'CARD', color: '#FFFFFF' },
  { label: 'GOLD', color: '#CA8A04' },
  { label: 'TEXT 1', color: '#1A1A1A' },
  { label: 'TEXT 2', color: '#525252' },
]

const darkSwatches = [
  { label: 'PAGE BG', color: '#0F0A1F' },
  { label: 'SURFACE', color: '#1A1430' },
  { label: 'PRIMARY', color: '#8B5CF6' },
  { label: 'CTA BAND', color: '#6D28D9' },
  { label: 'GOLD', color: '#FBBF24' },
]

const spacingScale = [8, 16, 24, 32, 48, 64]

const kokoWeights = [
  { label: 'Regular', value: 400 },
  { label: 'Medium', value: 500 },
  { label: 'SemiBold', value: 600 },
  { label: 'Bold', value: 700 },
]
</script>
