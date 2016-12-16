const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'head'
});
module.exports = {
  entry: [
    './src/main.ts'
  ],
  debug: true,
  devtool: 'source-map',
  resolve: {
      root: path.resolve(__dirname),
      extensions: ['', '.ts'],
      alias : {
          src: 'src'
      }
  },
  module:{
    loaders: [
        {
            test: /\.ts$/,
            loader: 'babel-loader!ts-loader',
            exclude: /node_modules/
        }
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

