var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('ghostwriter-html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/frontend/main.js'),

  output: {
    path: path.join(__dirname, 'build/frontend'),
    publicPath: '/~/frontend/',
    filename: '[name]-[chunkhash].js',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', ['css', 'postcss']) },
      { test: /\.(png|jpg)$/, loader: 'file' },
      { test: /\.(ttf|eot|svg|woff|woff2)(\?\S*)?$/, loader: 'file' },
      { test: /\.json$/, loader: 'json' },
    ],
  },

  postcss: function () {
      return [autoprefixer];
  },

  plugins: [
		new ExtractTextPlugin(
      '[name]-[chunkhash].css',
      { allChunks: true }
    ),
    new webpack.ProvidePlugin({
      'React': 'react',
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src/frontend/assets'), to: 'assets' },
    ]),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: path.join(__dirname, 'src/frontend/main.html')
    }),
  ],
};
