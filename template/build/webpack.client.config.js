const glob = require('glob')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const config = merge(base, {
  entry: {
    vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'vue-meta', 'superagent'],
    app: './src/client/entry.js'
  },
  // resolve: {
  //   alias: {
  //   }
  // },
  plugins: [
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      // minChunks: function(module) {
      //   // a module is extracted into the vendor chunk if...
      //   return (
      //     // it's inside node_modules
      //     /node_modules/.test(module.context) &&
      //     // and not a CSS file (due to extract-text-webpack-plugin limitation)
      //     !/\.css$/.test(module.request)
      //   )
      // }
    }),
    // extract webpack runtime & manifest to avoid vendor chunk hash changing
    // on every build.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
})

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    // auto generate service worker
    new SWPrecachePlugin({
      cacheId: 'vue-ssr',
      filename: 'service-worker.js',
      minify: true,
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      runtimeCaching: [{
        urlPattern: '/',
        handler: 'networkFirst'
      }]
    })
  )
}

module.exports = config