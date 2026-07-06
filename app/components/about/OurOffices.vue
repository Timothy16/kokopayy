<!-- components/about/OurOffices.vue -->
<template>
  <section
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F9]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-20 flex flex-col gap-12">
      <div class="flex flex-col gap-1">
        <h2
          class="font-sans font-medium text-2xl sm:text-3xl leading-tight sm:leading-[40px] tracking-[0.28px]"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Our Offices
        </h2>
        <p
          class="font-sans text-base leading-6 tracking-[0.28px]"
          :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
        >
          We're on the ground, serving you where it matters.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-12 items-stretch">
        <div
          v-for="office in offices"
          :key="office.city"
          class="flex-1 flex flex-col sm:flex-row gap-6 items-start p-[33px] min-h-[190px] border"
          :class="isDark
            ? 'bg-black border-[rgba(221,221,221,0.16)] rounded-[32px]'
            : 'bg-white border-[#DDDDDD] rounded-2xl'"
        >
          <img :src="office.icon" alt="" class="size-16 shrink-0" />

          <div class="flex flex-col gap-2">
            <h3
              class="font-sans font-medium text-2xl leading-8 tracking-[0.28px]"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >
              {{ office.city }}
            </h3>
            <p
              class="font-sans text-base leading-6 tracking-[0.28px]"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
            >
              {{ office.address }}
            </p>
            <a
              :href="office.mapUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 pt-1 text-[#5B21B6] font-sans font-bold text-base leading-5 tracking-[0.28px]"
            >
              View on map
              <img src="/images/icon-arrow-map.svg" alt="" class="w-[9.3px] h-[9.3px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const offices = [
  {
    city: 'Abuja',
    address: '4th Floor, Tower C, Church Gate Plaza, Central Business District.',
    icon: '/images/icon-office-abuja.svg',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Church Gate Plaza, Constitution Avenue, Central Business District, Abuja, FCT, Nigeria'),
  },
  {
    city: 'Nairobi',
    address: 'Western Heights, 8th Floor, Karuna Road, Westlands.',
    icon: '/images/icon-office-nairobi.svg',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Western Heights, Karuna Road, Westlands, Nairobi, Kenya'),
  },
]
</script>