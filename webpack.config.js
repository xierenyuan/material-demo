"use strict";
let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './app/entry.js',
    output: {
        path: __dirname,
        filename: '[name].js'
       // library: 'app',
        //libraryTarget: 'amd'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理 https://github.com/jtangelder/sass-loader
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            //.js 文件使用 jsx-loader 来编译处理
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    watch: true,
    devtool: 'source-map',
    colors: true,
    resolve:{
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss']
    }
};