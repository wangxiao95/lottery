const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  '@': resolve('src'),
  'pages': resolve('src/pages'),
  'core': resolve('src/core'),
}
