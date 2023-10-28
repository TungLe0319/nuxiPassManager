
import { resolve } from "node:path";

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  ,

  alias: {
    cookie: resolve(__dirname, "node_modules/cookie"),
  },
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
    "@nuxtjs/tailwindcss",
    "@hebilicious/authjs-nuxt",
    "@pinia/nuxt",
  ],

  // pinia: {
  //   storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  // },
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
        css: ["~/assets/main.postcss"],
        theme: {
          extend: {},
        },
        plugins: [],
      },
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET, // You can generate one with `openssl rand -base64 32`
    },
    // github: {
    //   clientId: process.env.NUXT_GITHUB_CLIENT_ID,
    //   clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET,
    // },
    google: {
      clientId: process.env.NUXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
      },
    },
  },
});
