var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public/js');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: {
    app: APP_DIR + '/app.js',
    home: APP_DIR + '/home.js'
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js"
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
