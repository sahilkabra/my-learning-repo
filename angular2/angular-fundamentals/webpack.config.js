const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./config/loaders');

const HTMLWebpackPluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: ['./src/index.ts'],
  output:{
    filename: 'app_bundle.js',
    path: __dirname + '/dist'
  },
  debug: true,
  devtool: 'source-map',
  resolve: {
      root: path.resolve(__dirname),
      extensions: ['', '.ts'],
      alias : {
          app: 'src'
      }
  },
  resolveLoaders: {
      modulesDirectories: ['node_modules']
  },
  module:{
    loaders: loaders
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};

