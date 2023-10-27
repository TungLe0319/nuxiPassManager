import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {
        content: [
          "./components/**/*.{js,vue,ts}",
          "./layouts/**/*.vue",
          "./pages/**/*.vue",
          "./plugins/**/*.{js,ts}",
          "./app.vue",
          "./error.vue",
        ],
        css: ["~/assets/main.scss"],
        theme: {
          extend: {},
        },
        plugins: [],
      },
      autoprefixer: {},
    },
  },
});
