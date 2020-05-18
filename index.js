const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('./nuxt/nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
config.rootDir = './nuxt'
config.build = {
  ...config.build,
  publicPath: '/hello/_nuxt/'
}

// Modify webpack HMR
if (config.dev) {
  config.build = {
    ...config.build,
    hotMiddleware: {
      path: '/hello/__webpack_hmr/client'
    }
  }
  config.hooks = {
    ...config.hooks,
    'webpack:config': (webpackConfigs) => {
      return webpackConfigs.map(option => {
        if (option.name === 'client') {
          option.entry.app = option.entry.app.map(item => {
            return item.replace('path=', 'path=/hello') // &path=/hello/__webpack_hmr/client
          })
        }
        return option
      })
    }
  }
}

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(['/hello', '/:lang/hello/'], (req, res) => {
    req.url = req.originalUrl
    nuxt.render(req, res)
  })

  // Listen the server
  app.listen(port, host)
}

start()
