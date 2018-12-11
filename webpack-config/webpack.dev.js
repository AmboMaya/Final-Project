const merge = require('webpack-merge')
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  watch: 'true',
  devServer: {
    proxy: {
      '/': 'http://localhost:3000'
    },
    contentBase: './server/public'
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
})

