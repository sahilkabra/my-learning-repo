const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./config/loaders');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const HTMLWebpackPluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: {
      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'app': './src/app.module.ts'
  },
  output:{
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: root('dist')
  },
  module:{
    rules: loaders
  },
  resolve: {
      modules: [
          path.resolve('.'),
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
    HTMLWebpackPluginConfig,
    new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
        root('./src'),
        {}
    ),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
    })
  ],
  resolveLoader: {
      modules: [path.join(__dirname, 'node_modules')]
  },
  devServer: {
      port: 15001,
      host: 'localhost',
      historyApiFallback: true,
      stats: 'minimal'
  }
};

function root(__path) {
    return path.join(__dirname, __path)
}
