var path = require('path');
var config = require('./config');
var utils = require('./css.loader.utils');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var WebpackBuildConfig = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders(!0)
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        filename: utils.assetsPath('js/[name].[hash].js')
    },
    vue: {
        loaders: utils.styleLoaders()
    },
    plugins: [
        new CleanWebpackPlugin(config.cleanFolders,{
            root: path.join(__dirname,'../')
        }),
        new webpack.DefinePlugin({
            'process.env': config.build.env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        // extract css into its own file
        new ExtractTextPlugin(utils.assetsPath('css/[name].[hash].css')),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'tmpl.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                );
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
});


/**
 * gzip
 */
if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin');
    WebpackBuildConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    );
}


module.exports = WebpackBuildConfig;
