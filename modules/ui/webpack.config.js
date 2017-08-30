require('dotenv').config();

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

const envConfig = process.env.NODE_ENV === 'development' ?
  require('./webpack/webpack.dev') :
  require('./webpack/webpack.prod');

module.exports = webpackMerge(commonConfig, envConfig);
