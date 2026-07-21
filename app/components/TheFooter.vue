<!-- components/TheFooter.vue -->
<template>
  <footer
    class="relative overflow-hidden pt-[97px] pb-[48px] transition-colors duration-300 border-t border-[rgba(220,218,231,0.3)]"
    :class="isDark ? 'bg-[#0A0A0B]' : 'bg-white'"
  >
    <!-- Watermark -->
    <div
      class="pointer-events-none absolute -bottom-[50px] left-0 right-0 flex items-end justify-center select-none overflow-hidden"
      aria-hidden="true"
    >
      <span
        class="font-sans font-bold whitespace-nowrap leading-none"
        style="font-size: clamp(80px, 18vw, 259px);"
        :class="isDark ? 'text-[rgba(26,14,47,0.02)]' : 'text-[rgba(26,14,47,0.02)]'"
      >KOKOPAY</span>
    </div>

    <div class="relative max-w-site mx-auto px-5 sm:px-10 lg:px-20">
      <div class="flex flex-col gap-10">

        <!-- Columns grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">

          <!-- Brand -->
          <div class="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <NuxtLink to="/" class="flex items-center">
              <img
                :src="isDark ? '/images/logo-dark.svg' : '/images/logo-light.svg'"
                alt="Kokopay"
                class="h-[34px] w-auto"
                @error="logoFailed = true"
              />
              <span
                v-if="logoFailed"
                class="font-sans font-bold text-[20px]"
                :class="isDark ? 'text-[#E5E2E3]' : 'text-primary'"
              >kokopay</span>
            </NuxtLink>
            <p
              class="font-sans text-[14px] leading-[22.75px] transition-colors duration-300"
              :class="isDark ? 'text-[#A6A6A6]' : 'text-[#777]'"
            >
              The everyday money app for Africans. Buy crypto, send money across borders, and pay bills instantly.
            </p>
          </div>

          <!-- Company -->
          <div class="flex flex-col gap-4">
            <p
              class="font-sans font-bold text-[14px] leading-[20px] transition-colors duration-300"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >Company</p>
            <ul class="flex flex-col gap-[10px]">
              <li v-for="link in companyLinks" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="font-sans text-[14px] leading-[20px] transition-colors hover:text-primary"
                  :class="isDark ? 'text-[#CCC3D8]' : 'text-[#736C93]'"
                >{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div class="flex flex-col gap-4">
            <p
              class="font-sans font-bold text-[14px] leading-[20px] transition-colors duration-300"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >Legal</p>
            <ul class="flex flex-col gap-[10px]">
              <li v-for="link in legalLinks" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="font-sans text-[14px] leading-[20px] transition-colors hover:text-primary"
                  :class="isDark ? 'text-[#CCC3D8]' : 'text-[#736C93]'"
                >{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="flex flex-col gap-4">
            <p
              class="font-sans font-bold text-[14px] leading-[20px] transition-colors duration-300"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >Contact</p>
            <ul class="flex flex-col gap-[10px]">
              <li v-for="item in contactItems" :key="item.label">
                <a
                  :href="item.href"
                  class="font-sans text-[14px] leading-[20px] transition-colors hover:text-primary"
                  :class="isDark ? 'text-[#CCC3D8]' : 'text-[#736C93]'"
                >{{ item.label }}</a>
              </li>
            </ul>
          </div>

          <!-- Address -->
          <div class="col-span-2 sm:col-span-1 flex flex-col gap-4">
            <p
              class="font-sans font-bold text-[14px] leading-[20px] transition-colors duration-300"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#1A1A1A]'"
            >Address</p>
            <ul class="flex flex-col gap-[10px]">
              <li v-for="addr in addresses" :key="addr">
                <span
                  class="font-sans text-[14px] leading-[20px] transition-colors duration-300"
                  :class="isDark ? 'text-[#CCC3D8]' : 'text-[#736C93]'"
                >{{ addr }}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="pt-[33px] border-t border-[rgba(220,218,231,0.3)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            class="font-sans text-[14px] leading-[16px] transition-colors duration-300"
            :class="isDark ? 'text-[#CCC3D8]' : 'text-[#777]'"
          >
            © {{ new Date().getFullYear() }} Kokopay. All rights reserved.
          </p>
          <!-- Social icons — image based -->
          <div class="flex items-center gap-3">
            <a v-for="s in socials" :key="s.label" :href="s.href" :aria-label="s.label" class="shrink-0 transition-opacity hover:opacity-70">
              <img :src="s.icon" :alt="s.label" class="w-11 h-11" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const logoFailed = ref(false)

const companyLinks = [
  { label: 'Home',     to: '/'         },
  { label: 'Features', to: '/features' },
  { label: 'About',    to: '/about'    },
  { label: 'Security', to: '/security' },
  { label: 'FAQ',      to: '/faq'      },
  { label: 'Contact',  to: '/contact'  },
]

const legalLinks = [
  { label: 'Privacy Policy',   to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms'          },
  { label: 'Cookie Policy',    to: '/cookies'        },
]

const contactItems = [
  { label: 'support@mykokopay.com', href: 'mailto:support@mykokopay.com' },
  { label: '+254 116 018 888',      href: 'tel:+254116018888'            },
]

const addresses = [
  'Nigeria Office: 4th Floor, Tower C, Churchgate Plaza, Constitution Avenue, Central Business District, 900211, Abuja, FCT.',
  'Kenya Office: Western Heights, 8th Floor, Westlands, Nairobi.',
  'Dock Road Junction, Corner of Stanley & Dock Road, Waterfront, Cape Town, 8001'
]

const socials = [
  { label: 'Twitter',   href: 'https://x.com/kokopay_wallet?s=11',                                  icon: '/images/twitter.svg'   },
  { label: 'Instagram', href: 'https://www.instagram.com/kokopaylimited?igsh=MTIwdno1OHV5bWJncA==', icon: '/images/instagram.svg' },
]
</script>