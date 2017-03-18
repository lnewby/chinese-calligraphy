var webpack = require('webpack');
var path = require('path');

var BUILD_DIR  = path.resolve(__dirname + '/build');
var APP_DIR = path.resolve(__dirname + '/app');

var config = {
  entry: [APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 9000
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        /* test for transpiling, cleaning , styling, autoprefixing LESS files */
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      },
      {
        /* test for handling customer font icons form fontello.com */
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}

module.exports = config
