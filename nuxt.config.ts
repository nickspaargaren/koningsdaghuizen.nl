// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: {
    typeCheck: true,
    strict: true,
  },
  app: {
    head: {
      title: "koningsdaghuizen.nl",
      htmlAttrs: {
        lang: "nl",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Koningsdag Huizen",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/eslint"],
  colorMode: {
    preference: "light",
  },
  css: ["~/assets/css/main.scss"],
  components: {
    dirs: ["~/components"],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
});