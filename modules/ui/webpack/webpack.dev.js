const path = require('path');
const webpack = require('webpack');

const {
  PORT, HOST, BASENAME, API_URL,
} = process.env;

module.exports = {
  entry: {
    polyfill: './src/polyfill',
    vendor: './src/vendor',
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      './src/main.hmr',
    ],
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: BASENAME,
    filename: 'assets/js/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.global\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /^((?!\.global).)*\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.global\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /^((?!\.global).)*\.scss$/,
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
    publicPath: BASENAME,
    port: PORT,
    host: HOST,
    proxy: {
      '/api': API_URL,
    },
  },
};
