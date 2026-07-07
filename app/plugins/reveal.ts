// plugins/reveal.ts
// v-reveal: adds "reveal" + "is-visible" (once in view) via one shared IntersectionObserver.
// Registered universally (not .client-only) so SSR can resolve the directive; the observer
// itself only ever runs in the browser.
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    nuxtApp.vueApp.directive('reveal', {})
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const observer = prefersReducedMotion
    ? null
    : new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer!.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
      )

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      if (prefersReducedMotion) return
      el.classList.add('reveal')
      if (typeof binding.value === 'number') {
        el.style.setProperty('--i', String(binding.value))
      }
      observer!.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
