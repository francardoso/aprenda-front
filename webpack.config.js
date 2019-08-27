const path = require("path");
const HWP = require("html-webpack-plugin");
module.exports = {
    entry: {
        student: ['babel-polyfill', path.join(__dirname, '/app/private/student/index.js')],
        professor: path.join(__dirname, '/app/private/professor/index.js')
    }, 
    output: {
       filename: "[name]-build.js",
       path: path.join(__dirname, "app/public/javascripts/"),
       publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true
    },
    module:{
       rules:[
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.(gif|eot|woff|woff2|ttf|svg)$/,
                loaders: [
                    'url-loader'
                ]
            },
        ]
    },
    // plugins:[
    //    new HWP(
    //        {template: path.join(__dirname,"/app/index.html")}
    //    )
    // ],
   watch: true,
 }