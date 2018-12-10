const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    path: path.join(__dirname, '../public'),
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
  }
}
