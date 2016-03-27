var webpack = require('webpack');

module.exports = {
  context: __dirname + '/before',
  entry: [
    './ru.html',
    './en.html',
    './ru.txt',
    './en.txt',
  ],
  output: {
    path: __dirname + '/after',
    publicPath: '/',
    filename: 'ignore.js'
  },
  module: {
    loaders: [
      {
        test: /ru\.html$/,
        loaders: [
          'file?name=[name].[ext]',
          '../../index.js?lang=ru&mode=name'
        ],
      },
      {
        test: /en\.html$/,
        loaders: [
          'file?name=[name].[ext]',
          '../../index.js?lang=en&mode=digit'
        ],
      },
      {
        test: /ru\.txt$/,
        loaders: [
          'file?name=[name].[ext]',
          '../../index.js?lang=ru'
        ],
      },
      {
        test: /en\.txt$/,
        loaders: [
          'file?name=[name].[ext]',
          '../../index.js?lang=en'
        ],
      },
    ],
  },
}
