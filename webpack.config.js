'use strict'

const path = require('path');

module.exports = {
    //开启监听，默认 false
    watch:true,
    watchOptions: {
        //忽略文件夹
        ignored:/node_modules/,
        //延迟 300 毫秒 build
        aggregateTimeout:300,
        //每秒询问 1000 次文件是否变化
        poll:1000
    },
    entry: {
        index:'./src/index.js',
        search:'./src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production',
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader'},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // {test:/\.(png|jpg|gif|jpeg)$/,use:'file-loader'},
            {test:/\.(png|jpg|gif|jpeg)$/,use:[{
                loader:'url-loader',
                options:{
                    limit:20480
                }
            }]},
            {test:/\.(woff|woff2|eot|ttf|otf)$/,use:'file-loader'}
        ]
    }
}