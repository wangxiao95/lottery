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
    open: 'Google Chrome',
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
