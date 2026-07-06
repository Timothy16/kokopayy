<!-- components/TheNavbar.vue -->
<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isDark
      ? 'bg-[#111112] border-b border-[rgba(74,68,85,0.4)]'
      : scrolled
        ? 'backdrop-blur-md shadow-sm border-b border-[rgba(109,40,217,0.1)] bg-[rgba(251,247,255,0.92)]'
        : 'bg-[#FBF7FF] border-b border-[rgba(109,40,217,0.1)]'"
  >
    <nav class="max-w-site mx-auto px-5 sm:px-10 lg:px-20 h-[72px] flex items-center justify-between gap-8">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
        <img
          :src="isDark ? '/images/logo-dark.svg' : '/images/logo-light.svg'"
          alt="Kokopay"
          class="h-8 w-auto"
          @error="logoFailed = true"
        />
        <span
          v-if="logoFailed"
          class="font-sans font-bold text-[22px] tracking-tight"
          :class="isDark ? 'text-[#E5E2E3]' : 'text-[#5B21B6]'"
        >
          kokopay
        </span>
      </NuxtLink>

      <!-- Desktop nav links -->
      <ul class="hidden lg:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="group relative inline-flex flex-col items-center gap-1 font-sans text-[16px] leading-6 py-3 transition-colors duration-200"
            :class="activeSection === link.section
              ? isDark ? 'text-[#D2BBFF] font-bold' : 'text-[#5B21B6] font-bold'
              : isDark
                ? 'text-[#CCC3D8] font-medium hover:text-[#D2BBFF]'
                : 'text-[#525252] font-medium hover:text-[#5B21B6]'"
          >
            <span>{{ link.label }}</span>
            <span
              class="absolute bottom-0 left-0 h-[2px] w-full origin-center transition-transform duration-300 ease-out"
              :class="[
                activeSection === link.section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                isDark ? 'bg-[#D2BBFF]' : 'bg-[#5B21B6]'
              ]"
            />
          </NuxtLink>
        </li>
      </ul>

      <!-- Right side actions -->
      <div class="flex items-center gap-3">

        <!-- Dark / light toggle -->
        <button
          @click="toggleMode"
          class="w-9 h-9 flex items-center justify-center rounded-full border transition-colors"
          :class="isDark
            ? 'border-[rgba(74,68,85,0.4)] text-[#CCC3D8] hover:text-[#D2BBFF] hover:border-[#D2BBFF]'
            : 'border-[rgba(109,40,217,0.1)] text-[#525252] hover:text-[#5B21B6] hover:border-[#5B21B6]'"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Moon — shown in light mode -->
          <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="w-[17px] h-[17px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <!-- Sun — shown in dark mode -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-[17px] h-[17px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>

        <!-- Download App CTA -->
        <NuxtLink
          to="/contact"
          class="hidden lg:flex items-center px-8 py-4 text-white font-sans font-medium text-[16px] leading-4 rounded-xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.03] whitespace-nowrap"
          style="background-image: linear-gradient(164.58deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)"
        >
          Download App
        </NuxtLink>

        <!-- Mobile hamburger -->
        <button
          class="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border transition-colors"
          :class="isDark ? 'border-[rgba(74,68,85,0.4)] text-[#E5E2E3]' : 'border-[rgba(109,40,217,0.1)] text-[#1A1A1A]'"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu drawer -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden backdrop-blur-md border-b px-5 pb-6"
        :class="isDark
          ? 'bg-[#111112] border-[rgba(74,68,85,0.4)]'
          : 'bg-[rgba(251,247,255,0.97)] border-[rgba(109,40,217,0.1)]'"
      >
        <ul class="flex flex-col gap-1 pt-2 pb-4">
          <li v-for="link in navLinks" :key="link.label">
            <NuxtLink
              :to="link.to"
              class="block px-3 py-3 font-sans text-[16px] rounded-lg transition-colors duration-200 border-l-2"
              :class="activeSection === link.section
                ? isDark ? 'text-[#D2BBFF] font-bold border-[#D2BBFF]' : 'text-[#5B21B6] font-bold border-[#5B21B6]'
                : isDark
                  ? 'text-[#CCC3D8] font-medium border-transparent hover:text-[#D2BBFF] hover:border-[#D2BBFF]'
                  : 'text-[#525252] font-medium border-transparent hover:text-[#5B21B6] hover:border-[#5B21B6]'"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink
          to="/contact"
          class="flex items-center justify-center w-full px-5 py-3 text-white font-sans font-semibold text-[15px] rounded-lg transition-transform hover:scale-[1.02]"
          style="background-image: linear-gradient(164.58deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)"
          @click="mobileOpen = false"
        >
          Download App
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useColorMode, useRoute } from '#imports'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const logoFailed = ref(false)
const mobileOpen  = ref(false)
const scrolled    = ref(false)

// Tracks which in-page section is scrolled to, only relevant while on the homepage
const homeScrollSection = ref('home')

const route = useRoute()

// Route-based pages take priority over homepage scroll-spy section
const activeSection = computed(() => {
  if (route.path === '/faq') return 'faq'
  if (route.path === '/contact') return 'contact'
  if (route.path === '/security') return 'security'
  if (route.path === '/about') return 'about'
  if (route.path === '/features') return 'features'
  return homeScrollSection.value
})

const navLinks = [
  { label: 'Home',     to: '/',         section: 'home'     },
  { label: 'Features', to: '/features', section: 'features' },
  { label: 'About',    to: '/about',    section: 'about'    },
  { label: 'Security', to: '/security', section: 'security' },
  { label: 'FAQ',      to: '/faq',      section: 'faq'      },
  { label: 'Contact',  to: '/contact',  section: 'contact'  },
]

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>