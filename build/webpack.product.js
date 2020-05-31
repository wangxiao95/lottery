const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, '../dist')
  },
})