var webpack = require('webpack');
var path = require('path');

var outputDir = path.resolve(__dirname, 'dist/');
var rootDir = path.resolve(__dirname, './app');

var config = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  entry: rootDir + '/index.jsx',
  watch: true,
  output: {
    path: outputDir,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: rootDir,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      // to transform css
      { test: /\.css$/, loader: 'style-loader!css-loader' }, 
      // to load fonts and images
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' }
    ]
  }
};

module.exports = config;