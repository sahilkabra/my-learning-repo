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
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules: loaders
  },
  resolve: {
      modules: [
          path.resolve('./src'),
          'node_modules'
      ],
      extensions: ['.ts', '.js', '.json'],
      alias : {
          app: 'src'
      }
  },
  context: __dirname,
  target: "web",
  plugins: [
    HTMLWebpackPluginConfig
  ],
  resolveLoader: {
      modules: [path.join(__dirname, 'node_modules')]
  }
};

