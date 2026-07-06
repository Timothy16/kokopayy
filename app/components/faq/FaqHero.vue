<!-- components/faq/FaqHero.vue -->
<template>
  <section
    class="relative w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-300 pt-[160px] pb-20 px-5 sm:px-10 lg:px-20"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <!-- Dark mode: centered radial blob -->
    <div
      v-if="isDark"
      class="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px] top-0 blur-[50px] rounded-full"
      style="background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0) 70%)"
      aria-hidden="true"
    />

    <div class="relative z-10 flex flex-col items-center gap-2 w-full max-w-[600px]">
      <h1
        class="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[60px] tracking-[0.28px] text-center w-full transition-colors duration-300"
        :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
      >
        Questions? We've got answers.
      </h1>

      <p
        class="pt-2 text-center leading-7 tracking-[0.28px] font-sans transition-colors duration-300"
        :class="isDark ? 'text-[#CCC3D8] text-base' : 'text-[#525252] text-base'"
      >
        Everything you need to know about using Kokopay — your money, your security, and how it all works.
      </p>

      <div class="w-full pt-6">
        <div class="relative w-full">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for questions about transfers, security, or crypto..."
            class="w-full rounded-xl pl-[52px] pr-[17px] py-[19px] text-base font-sans focus:outline-none"
            :class="isDark
              ? 'bg-[rgba(255,255,255,0.08)] border border-[#434343] text-[#CCC3D8] placeholder-[#CCC3D8]'
              : 'bg-white border border-[#E5E5E5] text-[#1A1A1A] placeholder-[#6B7280] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'"
          />
          <img
            src="/images/icon-search.svg"
            alt=""
            class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-[22px] h-[22px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const searchQuery = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>