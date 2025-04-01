// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint'],
  components: {
    dirs: ['~/components'],
  },
  app: {
    head: {
      title: 'koningsdaghuizen.nl',
      htmlAttrs: {
        lang: 'nl',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Koningsdag Huizen',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['~/assets/css/main.scss'],
  colorMode: {
    preference: 'light',
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  srcDir: 'src/',
  typescript: {
    typeCheck: true,
    strict: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
