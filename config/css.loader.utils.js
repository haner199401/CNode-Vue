var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path'),
    config = require('./config');


/**
 * 配置资源路径
 * @param _path
 * @returns {string}
 */
exports.assetsPath = function(_path) {
    return path.posix.join(config.build.assetsSubDirectory, _path);
};

exports.styleLoaders = function(isExtract) {
    return [{
        test: /\.scss/,
        loader: isExtract ? ExtractTextPlugin.extract("vue-style-loader", "css-loader!cssnext-loader!sass-loader") : 'vue-style-loader!css-loader!cssnext-loader!sass-loader',
        exclude: /node_modules|bower_components/
    }, {
        test: /\.sass/,
        loader: isExtract ? ExtractTextPlugin.extract("vue-style-loader", "css-loader!cssnext-loader!sass?indentedSyntax") : 'vue-style-loader!css-loader!cssnext-loader!sass?indentedSyntax',
        exclude: /node_modules|bower_components/
    }, {
        test: /\.css/,
        loader: isExtract ? ExtractTextPlugin.extract("style-loader", "css-loader!cssnext-loader") : 'vue-style-loader!css!cssnext'
    }];
};
