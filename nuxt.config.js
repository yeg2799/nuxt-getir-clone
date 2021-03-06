const router = require('./config/router.js');
export default {
  watch: ['~/config/*'],
  router,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Getir - Dakikalar İçinde Kapınızda',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://getir.com/images/icons/favicon-32x32.png' }],
  },

  css: ['bootstrap/dist/css/bootstrap.css', '@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/component.js',
    '@/plugins/vue-slick-carousel.js',
    '@/plugins/vue-video-player.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/composition-api/module',
    '@nuxtjs/svg',
    '@nuxt/image',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/svg-sprite', '@nuxt/image', '@nuxtjs/toast'],
  svgSprite: {
    input: '~/assets/icons/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  image: {
    domains: ['nuxtjs.org'],
    dir: 'assets/images',
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 40,
          height: 40,
        },
      },
    },
  },
};
