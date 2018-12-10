const path = require('path')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    path: path.join(__dirname, '../server/public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$|\.scss$|\.sass$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      include: [/\.html$/, /\.js$/, /\.jpg$/, /\.png$/]
    })
  ]
}
