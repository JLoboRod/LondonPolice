var path = require('path')

module.exports = {
  entry: {
    javascript: './app/app.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
    ]
  }

}
