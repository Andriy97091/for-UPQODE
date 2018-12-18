var path = require('path');
 
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.css',
    path: path.resolve(__dirname, 'dist')
  }
};