
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.json'
          },
          {
            code: 'ar',
            file: 'ar.json'
          },
          {
            code: 'ca',
            file: 'ca.json'
          },
          {
            code: 'de',
            file: 'de.json'
          },
          {
            code: 'es',
            file: 'es.json'
          },
          {
            code: 'fa',
            file: 'fa.json'
          },
          {
            code: 'fi',
            file: 'fi.json'
          },
          {
            code: 'fr',
            file: 'fr.json'
          },
          {
            code: 'id',
            file: 'id.json'
          },
          {
            code: 'it',
            file: 'it.json'
          },
          {
            code: 'ko',
            file: 'ko.json'
          },
          {
            code: 'th',
            file: 'th.json'
          },
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
