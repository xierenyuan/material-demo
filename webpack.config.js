"use strict";

let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app/entry.js',
    name: 'app',
    output: {
        path: path.join(__dirname),
        filename: './dist/[name].js'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./dist/[name].css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        //防重复
        new webpack.optimize.DedupePlugin()
    ],
    module: {
        loaders: [
            //file?name=./templates/[name]-[hash:6].html
            {test: /\.html$/, loader: 'file?name=./dist/templates/[name].html'},
            // {test: /\.css$/, loader: 'style!css'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理 https://github.com/jtangelder/sass-loader
            {
                test: /\.scss$/,
                loaders: [ExtractTextPlugin.extract("style"), "css?sourceMap", "sass?sourceMap!autoprefixer"]
            },
            //test:/\.scss$/,loader:  "style!css!autoprefixer!sass?sourceMap"},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                //ng-annotate?add=true
                loaders: ['ng-annotate?add=true', 'babel?sourceMap&presets[]=es2015']/*,
             query: {
             sourceMap: true,
             presets: ['es2015']
             }*/
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    watch: true,
    devtool: 'source-map',
    colors: true,
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss']
    },
    //服务器配置 http://www.cnblogs.com/pingfan1990/p/5100147.html
};