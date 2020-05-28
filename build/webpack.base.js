const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过 npm 安装
const webpack = require('webpack') // 用于访问内置插件

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.sass', '.css'],
        alias: {
            core: path.resolve('src/core')
        }
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: 'Google Chrome',
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
