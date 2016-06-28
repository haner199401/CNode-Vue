/**
 * Created by haner on 16/6/24.
 *
 */

/**
 * 配置端口,
 * 编译目录,
 * 开发环境
 * @type {{}}
 */
module.exports = {
    build: {
        buildPath: './build',
        env: {
            NODE_ENV: '"production"'
        },
        assetsSubDirectory:'resources',
        productionGzip: true,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 8088
    },
    cleanFolders:['build']//项目根目录为起始
};