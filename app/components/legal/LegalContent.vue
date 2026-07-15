<!-- components/legal/LegalContent.vue -->
<template>
  <section
    class="w-full transition-colors duration-300 pb-24 px-5 sm:px-10 lg:px-20"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <div class="max-w-[800px] mx-auto flex flex-col gap-10">

      <!-- Intro paragraphs (no heading) -->
      <div v-if="intro.length" class="flex flex-col gap-4">
        <p
          v-for="(para, i) in intro"
          :key="`intro-${i}`"
          class="font-sans text-[16px] leading-[28px] tracking-[0.28px] transition-colors duration-300"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
          v-html="para"
        />
      </div>

      <!-- Sections -->
      <div v-for="(section, s) in sections" :key="`sec-${s}`" class="flex flex-col gap-4">

        <h2
          class="font-sans font-bold text-[22px] sm:text-[24px] leading-[32px] tracking-[0.28px] transition-colors duration-300"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          {{ section.title }}
        </h2>

        <p
          v-for="(para, p) in (section.body || [])"
          :key="`sec-${s}-p-${p}`"
          class="font-sans text-[16px] leading-[28px] tracking-[0.28px] transition-colors duration-300"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
          v-html="para"
        />

        <!-- Sub-sections -->
        <div
          v-for="(sub, b) in (section.subsections || [])"
          :key="`sec-${s}-sub-${b}`"
          class="flex flex-col gap-3 pt-2"
        >
          <h3
            class="font-sans font-semibold text-[17px] leading-[26px] tracking-[0.28px] transition-colors duration-300"
            :class="isDark ? 'text-[#D2BBFF]' : 'text-[#5B21B6]'"
          >
            {{ sub.title }}
          </h3>
          <p
            v-for="(para, p) in sub.body"
            :key="`sec-${s}-sub-${b}-p-${p}`"
            class="font-sans text-[16px] leading-[28px] tracking-[0.28px] transition-colors duration-300"
            :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            v-html="para"
          />
        </div>

        <!-- Bullet list -->
        <ul v-if="section.list" class="flex flex-col gap-2 pl-5 pt-1">
          <li
            v-for="(item, l) in section.list"
            :key="`sec-${s}-li-${l}`"
            class="font-sans text-[16px] leading-[28px] tracking-[0.28px] list-disc transition-colors duration-300"
            :class="isDark ? 'text-[#CCC3D8] marker:text-[#D2BBFF]' : 'text-[#525252] marker:text-[#5B21B6]'"
          >
            {{ item }}
          </li>
        </ul>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

defineProps({
  intro:    { type: Array, default: () => [] },
  sections: { type: Array, required: true },
})
</script>