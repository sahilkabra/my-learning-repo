const loaders = [{
    test: /\.ts$/,
    loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
    exclude: /node_modules/,
}, {
    test: /.json/,
    loader: 'json'
}];

module.exports = loaders;

