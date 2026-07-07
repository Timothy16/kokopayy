// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/image'],
  colorMode: {
    classSuffix: '',
    preference: 'light',  // respects OS setting on first visit; remembers user toggle
    fallback: 'light',     // fallback if OS preference cannot be determined
    storage: 'cookie',     // cookie is sent with the request, so SSR renders the correct mode
  },
  image: {
    format: ['webp'],
    quality: 80,
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Kokopay — Send, Spend & Trade Across Africa',
      titleTemplate: '%s | Kokopay',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Kokopay lets you send money instantly across Africa, pay bills, and trade crypto — all in one secure app. Fast P2P transfers, multi-currency support, and bank-grade security.',
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Kokopay' },
        { property: 'og:title', content: 'Kokopay — Send, Spend & Trade Across Africa' },
        {
          property: 'og:description',
          content:
            'Send money instantly across Africa, pay bills, and trade crypto — all in one secure app.',
        },
        { property: 'og:image', content: '/favicon.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kokopay — Send, Spend & Trade Across Africa' },
        {
          name: 'twitter:description',
          content:
            'Send money instantly across Africa, pay bills, and trade crypto — all in one secure app.',
        },
        { name: 'twitter:image', content: '/favicon.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Plus+Jakarta+Sans:wght@700&display=swap',
        },
      ],
    },
  },
})