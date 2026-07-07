<!-- components/sections/TestimonialsSection.vue -->
<template>
  <section
    id="testimonials"
    class="w-full transition-colors duration-300"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-[#F1EEF6]'"
  >
    <div class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div class="flex flex-col gap-12 lg:gap-16">

        <!-- Heading -->
        <h2
          v-reveal
          class="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[44px] text-center w-full transition-colors duration-300"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
        >
          Trusted by thousands across the diaspora
        </h2>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(testimonial, idx) in testimonials"
            :key="testimonial.name"
            v-reveal="idx"
            class="flex flex-col gap-6 rounded-[32px] border p-[33px] transition-colors duration-300 hover:-translate-y-1 hover:shadow-lg"
            :class="isDark
              ? 'bg-[rgba(61,61,61,0.2)] border-[rgba(58,54,65,0.72)] backdrop-blur-[10px]'
              : 'bg-white border-[#DDDDDD]'"
          >
            <!-- Stars -->
            <div class="flex items-center gap-1">
              <img
                v-for="i in 5"
                :key="i"
                :src="i <= testimonial.rating ? '/images/icon-star-filled.svg' : '/images/icon-star-empty.svg'"
                alt=""
                class="w-5 h-[19px]"
              />
            </div>

            <!-- Quote -->
            <p
              class="font-sans italic text-[16px] leading-[24px] lg:leading-[28px] tracking-[0.28px] flex-1 transition-colors duration-300"
              :class="isDark ? 'text-[#CCC3D8]' : 'text-[#1A1A1A]'"
            >
              {{ testimonial.quote }}
            </p>

            <!-- Author -->
            <div class="flex items-center gap-4 pt-2">
              <!-- Avatar image -->
              <div
                v-if="testimonial.avatar"
                class="w-12 h-12 rounded-full overflow-hidden shrink-0"
              >
                <NuxtImg
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
              <!-- Avatar initials fallback -->
              <div
                v-else
                class="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-sans text-[16px] transition-colors duration-300"
                :class="isDark
                  ? 'bg-[rgba(210,187,255,0.2)] text-[#D2BBFF]'
                  : 'bg-[#EDE9FE] text-[#5B21B6]'"
              >
                {{ testimonial.initials }}
              </div>

              <div class="flex flex-col gap-1">
                <span
                  class="font-sans text-[14px] lg:text-[16px] leading-[20px] tracking-[0.28px] transition-colors duration-300"
                  :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
                >
                  {{ testimonial.name }}
                </span>
                <span
                  class="font-sans text-[12px] lg:text-[14px] leading-[16px] transition-colors duration-300"
                  :class="isDark ? 'text-[#CCC3D8]' : 'text-[#525252]'"
                >
                  {{ testimonial.location }}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const testimonials = [
  {
    name: 'Fatima Al-Rasheed',
    location: 'Lagos, Nigeria',
    avatar: '/images/avatar-fatima.png',
    initials: null,
    rating: 5,
    quote: '"Sending money home used to be a chore with high fees. Kokopay makes it instant and almost free using crypto. Game changer."',
  },
  {
    name: 'Kofi Mensah',
    location: 'Kumasi, Ghana',
    avatar: '/images/avatar-kofi.png',
    initials: null,
    rating: 4,
    quote: '"As a freelancer getting paid in crypto, Kokopay is exactly what I needed to seamlessly convert to cedis and pay my local bills."',
  },
  {
    name: 'Chukwuemeka Nwosu',
    location: 'Nairobi, Kenya',
    avatar: null,
    initials: 'CN',
    rating: 5,
    quote: '"The user interface is so clean and premium. It feels secure, and the customer support actually responds fast."',
  },
]
</script>