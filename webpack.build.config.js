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
        path: path.join(__dirname) + '/release',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        preLoaders: [],
        loaders: [
            {test: /\.html$/, loader: 'file?name=./templates/[name].html'},
            {
                test: /\.scss$/,
                loaders: [ExtractTextPlugin.extract("style"), "css", "sass?autoprefixer"]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['ng-annotate?add=true', 'babel?presets[]=es2015']
            },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    watch: false,
    colors: true,
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./[name].css'),

        //防重复
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};