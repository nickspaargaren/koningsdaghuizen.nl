// https://nuxt.com/docs/4.x/directory-structure/nuxt-config
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
    database: {
      type: 'libsql',
      url: ':memory:',
    },
  },
  srcDir: 'src/',
  compatibilityDate: '2026-05-04',
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'keen-slider/vue.es',
        'zod',
      ],
    },
  },
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
