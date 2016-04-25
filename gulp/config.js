
module.exports ={
    webpackConfig:{
        entry: './app/entry.js',
        output: {
            filename: '[name].js'
        },
        module: {
            loaders: [
                {test: /\.css$/, loader: 'style!css'},
                //.js 文件使用 jsx-loader 来编译处理
                {test: /\.js$/, loader: 'jsx-loader?harmony'},
                //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
                {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
                {test: /\.css$/, loader: 'style-loader!css-loader'},
                //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
                {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
            ]
        },
        watch: true,
        devtool: 'source-map'
    }
};