const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过 npm 安装
const webpack = require('webpack') // 用于访问内置插件

function resolve (dir) {
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
    ]
  },
  resolve: {
    extensions: ['.ts', 'tsx', '.js', 'jsx', '.sass', '.css'],
    alias: {
      // '@core': resolve('src/core/'),
      // '@pages': resolve('src/pages/'),
      '@': resolve('src')
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
