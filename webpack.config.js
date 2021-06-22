//导入处理路径的模块
var path = require('path')
// const webpack = require('webpack')
//1、导包
var htmlWebpackPlugin = require('html-webpack-plugin')

//导出一个配置对象，webpack在启动打包的时候，会默认来这个文件查找并读取配置对象中的信息
module.exports = {
    // 项目的入口文件
    entry: path.join(__dirname,'./src/main.js'),//入口文件
    // 项目的出口选项
    output:{
        path:path.join(__dirname,'./dist'),//输出的路径
        filename:'bundle.js'//输出的文件名
    },plugins:[
        // new webpack.HotModuleReplacementPlugin()
        //2、创建一个在内存中生成html的插件
        new htmlWebpackPlugin({
            //3、指定模板页面
            template: path.join(__dirname,'./src/index.html'),
            filename:'index.html'//4、要生成的页面名
        })
    ],
    module:{//此节点是用于配置所有第三方模板加载器的
        rules:[//第三方插件的配置规则 正则表达式
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|jpeg)$/,use:'url-loader'},
            {test:/\.(eot|svg|ttf|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use: {loader: 'babel-loader'},exclude: /node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
  
  }

 