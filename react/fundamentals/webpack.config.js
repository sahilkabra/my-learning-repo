var htmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

var HTMLWebpackPluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'  
});
module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: [
    './app/app.js'
  ],
  module:{
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  },
  output:{
    filename: 'app_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};

