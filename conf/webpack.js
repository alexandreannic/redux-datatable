const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('docs/src/index.html'),
    }),
  ],
  module: {
    rules: [
      // {test: /\.tsx?$/, loader: "ts-loader"},
      {
        test: /\.tsx?$/,
        include: path.resolve('./src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1'
      },
      // {
      //   test: /\.*/,
      //   use: 'raw-loader'
      // }
    ]
  },
  node: {
    fs: 'empty'
  },
}
