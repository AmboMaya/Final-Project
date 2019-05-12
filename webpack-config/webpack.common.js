const path = require('path')

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
  ],
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    //   minSize: 30000,
    //   maxSize: 0,
    //   minChunks: 1,
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 3,
    //   automaticNameDelimiter: '~',
    //   name: true,
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-router|react-redux)[\\/]/,
      //     name: 'vendor',
      //     chunks: 'all',
      //   },
      //   commons: {
      //     name: 'commons',
      //     chunks: 'initial',
      //     minChunks: 2
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true
      //   }
      // }
    // }
  }
}
