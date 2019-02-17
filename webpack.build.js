const commonConfig = require('./webpack.js')
const webpackMerge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  entry: {
    'app': ['babel-polyfill', './src/demo/index.tsx'],
  },
  optimization: {
    noEmitOnErrors: true,
    removeAvailableModules: false
  },
  output: {
    path: path.resolve('./build'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./docs/src/index.html'),
      favicon: './docs/asset/favicon.ico',
    })
  ],
})
