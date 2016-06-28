var webpack = require('webpack');
var config = require('./config');
var baseWebpackConfig = require('./webpack.base.config');
var merge = require('webpack-merge');
var utils = require('./css.loader.utils');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(baseWebpackConfig,{
    module: {
        loaders: utils.styleLoaders()
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'tmpl.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'bonday.html',
            template: 'tmpl.html',
            inject: true
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:' + config.dev.port })
    ],

    devServer: {
        contentBase: config.build.buildPath,
        proxy: {
            '/api/*': {
                //target: "http://cms.bonday.cn",
                target: "https://cnodejs.org/",
                secure: false
            }
        },
        port: config.dev.port
    }
});
