const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const resolve = (path) => require('path').resolve(__dirname, path)
module.exports = {
  devtool: isProd ?
    false : '#cheap-module-source-map',
  output: {
    path: resolve('../dist'),
    publicPath: '/',
    filename: '[name].js?[hash]'
  },
  resolve: {
    alias: {
      'static': resolve('../static'),
      'utils': resolve('../src/utils'),
      'server': resolve('../src/server'),
      'client': resolve('../src/client'),
      'pages': resolve('../src/client/pages'),
      'components': resolve('../src/client/components')
    },
    extensions: ['.js', '.vue', '/index.vue']
  },
  module: {
    // noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd ? [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new ExtractTextPlugin({
      filename: 'style.css?[hash]'
    })
  ] : [
    new FriendlyErrorsPlugin()
  ]
}