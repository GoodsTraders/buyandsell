const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, './client/build')
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader' }],
  },
};
