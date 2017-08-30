const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/font/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  plugins: [
    new SassLintPlugin({
      glob: 'src/**/*.s?(a|c)ss',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfill'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
    }),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce((prev, curr) => {
        // eslint-disable-next-line no-param-reassign
        prev[curr] = JSON.stringify(process.env[curr]);
        return prev;
      }, {}),
    }),
  ],

  performance: {
    hints: false,
  },
};
