<!-- components/contact/ContactFormOffices.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#1C1B1C]' : 'bg-white'"
  >
    <div
      class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-[1fr_414px] gap-12 items-start"
    >
      <!-- Left: Contact Form -->
      <div
        class="flex flex-col gap-6 w-full p-6 sm:p-8 lg:pt-12 lg:px-12 lg:pb-16 rounded-xl"
        :class="isDark
          ? 'bg-[#161616] border border-[rgba(238,238,238,0.08)]'
          : 'bg-[#F1EEF6] shadow-[0px_4px_10px_rgba(0,0,0,0.04)]'"
      >
        <form class="flex flex-col gap-6 w-full" @submit.prevent="handleSubmit">
          <!-- Full Name / Email -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div class="flex flex-col gap-2 w-full">
              <label
                for="full-name"
                class="font-sans font-bold text-base tracking-[0.28px]"
                :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
              >
                Full Name
              </label>
              <input
                id="full-name"
                v-model="form.fullName"
                type="text"
                placeholder="Sekinat Ibrahim"
                class="w-full rounded-lg px-[17px] py-[15px] text-base font-sans placeholder-[#888888] focus:outline-none"
                :class="isDark
                  ? 'bg-[rgba(0,0,0,0.2)] border border-[rgba(229,229,229,0.2)] text-[#E5E2E3]'
                  : 'bg-white border border-[#E5E5E5] text-[#1A1A1A]'"
              />
            </div>
            <div class="flex flex-col gap-2 w-full">
              <label
                for="email"
                class="font-sans font-bold text-base tracking-[0.28px]"
                :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
              >
                Email Address
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Sekinat@example.com"
                class="w-full rounded-lg px-[17px] py-[15px] text-base font-sans placeholder-[#888888] focus:outline-none"
                :class="isDark
                  ? 'bg-[rgba(0,0,0,0.2)] border border-[rgba(229,229,229,0.2)] text-[#E5E2E3]'
                  : 'bg-white border border-[#E5E5E5] text-[#1A1A1A]'"
              />
            </div>
          </div>

          <!-- Topic -->
          <div class="flex flex-col gap-2 w-full">
            <label
              for="topic"
              class="font-sans font-bold text-base tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              Topic
            </label>
            <div class="relative w-full">
              <select
                id="topic"
                v-model="form.topic"
                class="w-full appearance-none rounded-lg px-[17px] py-[13px] text-base font-sans focus:outline-none"
                :class="isDark
                  ? 'bg-[rgba(0,0,0,0.2)] border border-[rgba(229,229,229,0.2)] text-[#E5E2E3]'
                  : 'bg-white border border-[#E5E5E5] text-[#1A1A1A]'"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Account Support</option>
                <option value="billing">Billing</option>
                <option value="partnership">Partnership</option>
              </select>
              <img
                src="/images/icon-chevron-down.svg"
                alt=""
                class="pointer-events-none absolute right-[17px] top-1/2 -translate-y-1/2 w-6 h-6"
              />
            </div>
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-2 w-full">
            <label
              for="message"
              class="font-sans font-bold text-base tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="How can we help you?"
              class="w-full rounded-lg px-[17px] pt-[13px] pb-4 text-base font-sans placeholder-[#888888] resize-none focus:outline-none"
              :class="isDark
                ? 'bg-[rgba(0,0,0,0.2)] border border-[rgba(229,229,229,0.2)] text-[#E5E2E3]'
                : 'bg-white border border-[#E5E5E5] text-[#1A1A1A]'"
            />
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="font-sans font-medium text-base text-white rounded-lg px-10 py-4 self-start"
            style="background-image: linear-gradient(163.58deg, #7C3AED 0%, #5B21B6 100%)"
          >
            Send message
          </button>
        </form>
      </div>

      <!-- Right: Offices -->
      <div class="flex flex-col gap-6 w-full">
        <!-- Support Hours -->
        <div
          class="flex flex-col gap-6 p-[33px] rounded-xl border"
          :class="isDark
            ? 'bg-[rgba(83,56,199,0.26)] border-[rgba(56,0,147,0.1)]'
            : 'bg-[rgba(237,233,254,0.4)] border-[rgba(56,0,147,0.1)]'"
        >
          <div class="flex items-center gap-2">
            <img src="/images/icon-clock.svg" alt="" class="w-[17px] h-[17px]" />
            <span
              class="font-sans font-medium text-base tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#5B21B6]'"
            >
              SUPPORT HOURS
            </span>
          </div>
          <p
            class="font-sans font-medium text-2xl leading-8 tracking-[0.28px]"
            :class="isDark ? 'text-[#E5E2E3]' : 'text-[#5B21B6]'"
          >
            24/7 — we never close.
          </p>
        </div>

        <!-- Abuja Office -->
        <div
          class="flex items-baseline gap-4 p-[33px] rounded-xl border"
          :class="isDark
            ? 'bg-[rgba(0,0,0,0.2)] border-[rgba(229,229,229,0.16)]'
            : 'bg-white border-[#E5E5E5]'"
        >
          <img src="/images/icon-location.svg" alt="" class="w-4 h-5 shrink-0" />
          <div class="flex flex-col gap-2">
            <h4
              class="font-sans font-medium text-2xl leading-8 tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              Abuja Office
            </h4>
            <p
              class="font-sans text-base leading-[26px] tracking-[0.28px]"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              4th Floor, Tower C, Church Gate Plaza, Constitution Avenue, Central Business District, Abuja, FCT.
            </p>
          </div>
        </div>

        <!-- Nairobi Office -->
        <div
          class="flex items-baseline gap-4 p-[33px] rounded-xl border"
          :class="isDark
            ? 'bg-[rgba(0,0,0,0.2)] border-[rgba(229,229,229,0.16)]'
            : 'bg-white border-[#E5E5E5]'"
        >
          <img src="/images/icon-location.svg" alt="" class="w-4 h-5 shrink-0" />
          <div class="flex flex-col gap-2">
            <h4
              class="font-sans font-medium text-2xl leading-8 tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              Nairobi Office
            </h4>
            <p
              class="font-sans text-base leading-[26px] tracking-[0.28px]"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              Western Heights, 8th Floor, Westlands, Nairobi.
            </p>
          </div>
        </div>

        <!-- Cape Town Office -->
        <div
          class="flex items-baseline gap-4 p-[33px] rounded-xl border"
          :class="isDark
            ? 'bg-[rgba(0,0,0,0.2)] border-[rgba(229,229,229,0.16)]'
            : 'bg-white border-[#E5E5E5]'"
        >
          <img src="/images/icon-location.svg" alt="" class="w-4 h-5 shrink-0" />
          <div class="flex flex-col gap-2">
            <h4
              class="font-sans font-medium text-2xl leading-8 tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              Cape Town Office
            </h4>
            <p
              class="font-sans text-base leading-[26px] tracking-[0.28px]"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              Dock Road Junction, Corner of Stanley &amp; Dock Road, Waterfront, Cape Town, 8001.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

// WhatsApp number in international format, digits only (no + or spaces)
const WHATSAPP_NUMBER = '254116018888'

const topicLabels = {
  general: 'General Inquiry',
  support: 'Account Support',
  billing: 'Billing',
  partnership: 'Partnership',
}

const form = reactive({
  fullName: '',
  email: '',
  topic: 'general',
  message: ''
})

function handleSubmit() {
  const lines = [
    `Name: ${form.fullName}`,
    `Email: ${form.email}`,
    `Topic: ${topicLabels[form.topic]}`,
    '',
    form.message,
  ]

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
  window.open(url, '_blank', 'noopener')
}
</script>