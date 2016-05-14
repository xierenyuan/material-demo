"use strict";

let gulp = require('gulp');

let wiredep = require('wiredep').stream;

//es6 转es5 还需要安装 babel-preset-es2015
let babel = require("gulp-babel");

let concat = require('gulp-concat');

let config = require('./gulp/config');

gulp.task('bower', ()=> {
    gulp.src('index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./'));
});

gulp.task('js', ()=> {
    gulp.src('./app/**/*.js')
        .pipe(concat('index.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist'));
});

var webpack = require('gulp-webpack');
//https://github.com/shama/vinyl-named
var named = require('vinyl-named');

gulp.task('default', function () {
    return gulp.src('src/entry.js')
        .pipe(named())
        .pipe(webpack(require('./webpack.config.js')))
       // .pipe(gulp.dest('dist/'));
});
