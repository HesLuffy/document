// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "DM Sans": true,
      "Noto Sans Simplified Chinese": true
    }
  },
  content: {
    highlight: {
      theme: "github-light"
    }
  },
  css: ['~/assets/css/custom.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})