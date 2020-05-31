const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')


module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dev'),
  },
})
