// plugins/color-mode-ssr.server.ts
// Fixes dark mode not persisting visually after a refresh.
//
// Verified against @nuxtjs/color-mode's published source: on the server, the
// module reads the `nuxt-color-mode` cookie into `colorMode.preference` but
// never resolves `colorMode.value` — it stays as the config default ('system').
// Our components style off `isDark = computed(() => colorMode.value === 'dark')`,
// so SSR renders light-mode classes, and Vue's hydration keeps that stale
// markup even though the client state is correctly 'dark'.
//
// This plugin runs server-side only, after the module's own plugin, and copies
// an explicit 'dark' / 'light' cookie value into `colorMode.value` so the
// server renders the same classes the client will compute. If the cookie is
// absent or 'system', we leave the module's default behavior untouched
// (the OS preference can only be detected in the browser).
//
// Requires `storage: 'cookie'` in the colorMode config in nuxt.config.ts.

export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  const cookie = useCookie<string | null>('kokopay-color-mode')

  if (cookie.value === 'dark' || cookie.value === 'light') {
    // @ts-expect-error — `value` is typed readonly; assigning here on the
    // server is intentional and matches what the module itself does when
    // forcing a color mode at the page level.
    colorMode.value = cookie.value
    colorMode.unknown = false
  }
})