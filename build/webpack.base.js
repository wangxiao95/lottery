const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过 npm 安装
const webpack = require('webpack') // 用于访问内置插件
const aliasConfig = require('./webstrom.webpack.config')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js|jsx|ts|tsx?$/,
        use: {
          loader: 'babel-loader'
        },
        include: [resolve('src')]
      },
      {
        test: /\.css|less?$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS

        }],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]",
      },
      {
        test:/\.html$/,
        // 处理HTML文件的img图片（负责引入img，从而能被url-loader处理）
        loader:'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx', '.sass', '.css'],
    alias: aliasConfig,
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'})
  ]
}
