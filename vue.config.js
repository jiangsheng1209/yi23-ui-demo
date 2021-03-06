const path = require('path');

module.exports = {
    //修改 pages 入口
    pages: {
        index:{
            entry: 'examples/main.js', //入口文件
            tempate: 'public/index.html', // 模板
            filename: 'index.html' //输出文件
        }
    },

    chainWebpack: config => {
        //配置别名
        //@ 默认指向 src 目录，这里要改成 examples
        // 另外也可以新增加一个 ~ 指向packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))

        //把packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/examples/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })

    }
}