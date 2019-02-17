const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  entry: {
    'app': ['babel-polyfill', path.resolve('./docs/src/index.tsx')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./docs/src/index.html'),
      favicon: './docs/asset/favicon.ico',
    })
  ],
})
