/**
 * 开发
 * @Class
 * @auther xierenhong
 * @date 16/6/1
 */
"use strict";
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let path = require('path');

module.exports = {
    entry: {
        app: './app/entry.js'
    },
    output: {
        path: path.join(__dirname) + '/dist',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        preLoaders: [],
        loaders: [
            {test: /\.html$/, loader: 'file?name=./templates/[name].html'},
            {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap', 'autoprefixer']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ng-annotate?add=true!babel?sourceMap&presets[]=es2015'
            },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    watch: true,
    colors: true,
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./[name].css')
    ],
    // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        grogress: true
    }
};