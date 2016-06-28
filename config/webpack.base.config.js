var path = require("path");
var webpack = require("webpack");
var utils = require('./css.loader.utils');
var CompileConfig = require('./config');

module.exports = {
    entry: ['./src/app.js','./src/bonday.js'],
    //entry: './src/app.js',
    output: {
        path: CompileConfig.build.buildPath,
        filename: "bundle.js"
    },
    vue: {
        loaders: {
            sass: 'style!css!sass?indentedSyntax',
            scss: 'style!css!sass'
        }
    },
    module: {
        preLoaders: [

        ],
        loaders: [{
            test: /\.html/,
            loader: 'raw'
        }, {
            test: /\.js$/,
            loader: 'babel!jshint',
            exclude: /node_modules|bower_components/
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.json/,
            loader: 'json'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('image/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
            loader: 'file',
            query: {
                name: utils.assetsPath('font/[name].[ext]?[hash]')
            }
        }]
    },
    devtool: '#eval-source-map',
    resolve: {
        extension: ['', '.js', '.json', '.scss'],
        modulesDirectories: ["node_modules", "bower_components"],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../src/components')
        }
    }
};
