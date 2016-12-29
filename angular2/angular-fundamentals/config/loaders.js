const path = require('path');

const loaders = [{
    test: /\.ts$/,
    loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
    exclude: path.resolve(__dirname, 'node_modules'),
}, {
    test: /\.json$/,
    loader: 'json-loader'
}, {
    test: /\.html$/,
    loader: 'html-loader'
}];

module.exports = loaders;

