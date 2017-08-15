const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './out/bundle'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: []
                    },
                },
                exclude: ['/node_modules/', 'dist'],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff(2)?|ttf|eot)(\?.*$|$)/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Todo list with Cycle js',
          template: path.resolve(__dirname, '../index.html')
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
    },
};
