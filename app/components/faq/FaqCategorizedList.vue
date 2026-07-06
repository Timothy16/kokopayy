<!-- components/faq/FaqCategorizedList.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 pb-20 flex flex-col gap-20">
      <div
        v-for="category in filteredCategories"
        :key="category.title"
        class="flex flex-col gap-8 w-full"
      >
        <h2
          class="font-sans font-semibold text-xl sm:text-2xl uppercase tracking-[-0.6px] leading-8"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          {{ category.title }}
        </h2>

        <div class="flex flex-col gap-4 w-full">
          <div
            v-for="item in category.items"
            :key="item.question"
            class="rounded-xl border overflow-hidden"
            :class="isDark
              ? 'bg-[rgba(0,0,0,0.32)] border-[rgba(229,229,229,0.2)]'
              : 'bg-white border-[#E5E5E5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'"
          >
            <button
              type="button"
              class="w-full flex items-center justify-between gap-4 p-6 text-left"
              @click="toggle(item)"
            >
              <span
                class="font-sans font-medium text-base tracking-[0.28px] leading-5"
                :class="isDark ? 'text-[#CCC3D8]' : 'text-[#323232]'"
              >
                {{ item.question }}
              </span>
              <img
                src="/images/icon-chevron-down.svg"
                alt=""
                class="shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openItems.has(item.question) }"
              />
            </button>

            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              leave-active-class="transition-all duration-200 ease-in"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[500px] opacity-100"
              leave-from-class="max-h-[500px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="openItems.has(item.question)" class="overflow-hidden">
                <p
                  class="font-sans text-base leading-6 tracking-[0.28px] px-6 pb-6"
                  :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
                >
                  {{ item.answer || 'Answer copy pending.' }}
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <p
        v-if="filteredCategories.length === 0"
        class="font-sans text-base text-center py-10"
        :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
      >
        No results found for "{{ searchQuery }}". Try a different keyword.
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  searchQuery: { type: String, default: '' },
})

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const openItems = reactive(new Set())

function toggle(item) {
  if (openItems.has(item.question)) {
    openItems.delete(item.question)
  } else {
    openItems.add(item.question)
  }
}

const categories = [
  {
    title: 'GETTING STARTED',
    items: [
      { question: 'What exactly is Kokopay?', answer: '' },
      { question: 'Can I use Kokopay from outside Africa?', answer: '' },
      { question: 'Which countries and currencies are supported?', answer: '' },
    ],
  },
  {
    title: 'MONEY & TRANSFERS',
    items: [
      { question: 'How fast are peer-to-peer (P2P) transfers?', answer: '' },
      { question: 'Can I send NGN directly to a KSH bank account?', answer: '' },
    ],
  },
  {
    title: 'CRYPTO',
    items: [
      { question: 'What cryptocurrencies can I trade?', answer: '' },
    ],
  },
  {
    title: 'BILLS & PAYMENTS',
    items: [
      { question: 'What bills can I pay with Kokopay?', answer: '' },
    ],
  },
  {
    title: 'SECURITY & SUPPORT',
    items: [
      { question: 'Is my data and money safe?', answer: '' },
      { question: 'How do I get help if I have an issue?', answer: '' },
    ],
  },
]

const filteredCategories = computed(() => {
  const q = props.searchQuery.trim().toLowerCase()
  if (!q) return categories

  return categories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          (item.answer || '').toLowerCase().includes(q)
      ),
    }))
    .filter((category) => category.items.length > 0)
})
</script>