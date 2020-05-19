const merge = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'dist')
  },
})