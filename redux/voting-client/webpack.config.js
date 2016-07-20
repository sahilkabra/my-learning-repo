var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');

var htmlPluginConfig = new htmlPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:11080',
        'webpack/hot/only-dev-server',
        './app/index.js'
    ],
    module: {
        loaders: [
            //find all files with .jsx and load with babel excluding node modules
            {test: /\.jsx?$/, loader: 'react-hot!babel', exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: 'app_bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        htmlPluginConfig,
        new webpack.HotModuleReplacementPlugin()
    ]
};
