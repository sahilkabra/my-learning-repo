var path = require('path');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
webpackConfig.plugins = webpackConfig.plugins.filter(p => !p.chunkNames);

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
        {pattern: 'config/karma.test.shim.js', watched: 'false'}
    ],
    exclude: [
    ],
    preprocessors: {
        'config/karma.test.shim.js': ['webpack']
    },
    webpack: Object.assign({},
        webpackConfig,
        {
            externals: {
            }
        }
    ),
    webpackMiddleware: {
        stats: 'errors-only'
    },
    webpackServer: {
        noInfo: true
    },
    reporters: ['mocha'],
    mochaReporter: {
        output: 'autowatch',
        showDiff: true,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
