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
          to="/#cta"
          class="hidden lg:flex items-center px-8 py-4 text-white font-sans font-medium text-[16px] leading-4 rounded-xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.03] whitespace-nowrap"
          style="background-image: linear-gradient(164.58deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)"
        >
          Download App
        </NuxtLink>

        <!-- Mobile hamburger -->
        <button
          class="lg:hidden w-11 h-11 -mr-1 flex items-center justify-center rounded-lg border transition-colors"
          :class="isDark ? 'border-[rgba(74,68,85,0.4)] text-[#E5E2E3]' : 'border-[rgba(109,40,217,0.1)] text-[#1A1A1A]'"
          @click="mobileOpen = true"
          aria-label="Open menu"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav-drawer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  </header>

  <!-- Mobile drawer — teleported so the fixed overlay isn't clipped by the header's backdrop-blur -->
  <Teleport to="body">

    <!-- Backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px]"
        @click="mobileOpen = false"
        aria-hidden="true"
      />
    </Transition>

    <!-- Slide-in panel -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="mobileOpen"
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        class="lg:hidden fixed top-0 right-0 bottom-0 z-[70] w-[84%] max-w-[340px] flex flex-col border-l"
        :class="isDark
          ? 'bg-[#111112] border-[rgba(74,68,85,0.4)]'
          : 'bg-[#FBF7FF] border-[rgba(109,40,217,0.1)]'"
      >
        <!-- Drawer header: logo + close -->
        <div
          class="flex items-center justify-between h-[72px] px-5 border-b shrink-0"
          :class="isDark ? 'border-[rgba(74,68,85,0.4)]' : 'border-[rgba(109,40,217,0.1)]'"
        >
          <NuxtLink to="/" class="flex items-center gap-2" @click="mobileOpen = false">
            <img
              :src="isDark ? '/images/logo-dark.svg' : '/images/logo-light.svg'"
              alt="Kokopay"
              class="h-7 w-auto"
              @error="logoFailed = true"
            />
            <span
              v-if="logoFailed"
              class="font-sans font-bold text-[20px] tracking-tight"
              :class="isDark ? 'text-[#E5E2E3]' : 'text-[#5B21B6]'"
            >
              kokopay
            </span>
          </NuxtLink>

          <button
            class="w-11 h-11 -mr-2 flex items-center justify-center rounded-lg transition-colors"
            :class="isDark ? 'text-[#CCC3D8] hover:text-[#D2BBFF]' : 'text-[#525252] hover:text-[#5B21B6]'"
            @click="mobileOpen = false"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Nav links -->
        <nav class="flex-1 overflow-y-auto px-3 py-4">
          <ul class="flex flex-col gap-1">
            <li v-for="link in navLinks" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="flex items-center min-h-[48px] px-4 font-sans text-[16px] rounded-xl transition-colors duration-200"
                :class="activeSection === link.section
                  ? isDark
                    ? 'text-[#D2BBFF] font-bold bg-[rgba(74,68,85,0.4)]'
                    : 'text-[#5B21B6] font-bold bg-[rgba(109,40,217,0.1)]'
                  : isDark
                    ? 'text-[#CCC3D8] font-medium hover:text-[#D2BBFF] hover:bg-[rgba(74,68,85,0.4)]'
                    : 'text-[#525252] font-medium hover:text-[#5B21B6] hover:bg-[rgba(109,40,217,0.1)]'"
                @click="mobileOpen = false"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Bottom CTA -->
        <div
          class="px-5 pt-4 pb-[max(20px,env(safe-area-inset-bottom))] border-t shrink-0"
          :class="isDark ? 'border-[rgba(74,68,85,0.4)]' : 'border-[rgba(109,40,217,0.1)]'"
        >
          <NuxtLink
            to="/#cta"
            class="flex items-center justify-center w-full min-h-[48px] px-5 text-white font-sans font-semibold text-[15px] rounded-xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.02]"
            style="background-image: linear-gradient(164.58deg, rgb(124,58,237) 0%, rgb(91,33,182) 100%)"
            @click="mobileOpen = false"
          >
            Download App
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
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

// Close drawer on route change (covers back/forward navigation too)
watch(() => route.path, () => { mobileOpen.value = false })

// Lock body scroll while the drawer is open
watch(mobileOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', onScroll, { passive: true })

  // Close on ESC key
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') mobileOpen.value = false
  }
  window.addEventListener('keydown', onKeydown)

  // Auto-close if resized up to desktop breakpoint
  const onResize = () => {
    if (window.innerWidth >= 1024) mobileOpen.value = false
  }
  window.addEventListener('resize', onResize, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('keydown', onKeydown)
    window.removeEventListener('resize', onResize)
    document.body.style.overflow = ''
  })
})
</script>