const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '/dist'),
    },
    resolve: {
        // extensions: ['', '.js', '.elm'],
        // modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff(2)?|ttf|eot)(\?.*$|$)/,
                loader: 'file-loader',
            },
            {
                test: /\.elm/,
                exclude: [/elm-stuff/, /node_modules/],
                use: {
                    loader: 'elm-webpack-loader',
                    options: { verbose: true, warn: true, debug: true },
                },
            },
        ],
        noParse: /\.(elm)$/,
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        stats: { colors: true },
        compress: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template/index.html',
            filename: 'index.html',
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
        }),
    ],
};
