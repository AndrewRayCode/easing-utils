var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

var config = {
    entry: './gh-pages/index.js',
    output: {
        filename: 'main.js',
        path: 'gh-pages/js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: /gh-pages\/|src\//,
        }]
    },
    resolve: {
        extensions: [ '', '.js' ],
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          },
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;
