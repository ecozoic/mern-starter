const path = require('path');
const webpack = require('webpack');

const { PORT, HOST, BASENAME, API_URL } = process.env;

// set defaults
const port = +PORT || 8080;
const host = HOST || 'localhost';
const publicPath = BASENAME || '/';
const apiUrl = API_URL || 'http://localhost:8084';

module.exports = {
  entry: {
    polyfill: './src/polyfill',
    vendor: './src/vendor',
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${host}:${port}`,
      'webpack/hot/only-dev-server',
      './src/main.hmr',
    ],
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath,
    filename: 'assets/js/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              camelCase: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath,
    port,
    host,
    proxy: {
      '/api': apiUrl,
    },
  },
};
