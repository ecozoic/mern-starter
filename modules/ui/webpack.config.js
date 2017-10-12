const Joi = require('joi');
const webpackMerge = require('webpack-merge');
require('dotenv').config();

const schema = Joi.object().keys({
  HOST: Joi.string().hostname().when('NODE_ENV', { is: 'development', then: Joi.required() }),
  PORT: Joi.string().alphanum().when('NODE_ENV', { is: 'development', then: Joi.required() }),
  API_URL: Joi.string().uri().when('NODE_ENV', { is: 'development', then: Joi.required() }),
  NODE_ENV: Joi.string().valid('production', 'development').required(),
  BASENAME: Joi.string().required(),
  JWT_STORAGE_KEY: Joi.string().required(),
}).unknown(true);

const result = Joi.validate(process.env, schema);

if (result.error) {
  console.log('Configuration invalid! :(');
  console.log(result.error.details);
  process.exit(1);
} else {
  console.log('Configuration valid! :)');
}

const commonConfig = require('./webpack/webpack.common');

const envConfig = process.env.NODE_ENV === 'development' ?
  require('./webpack/webpack.dev') :
  require('./webpack/webpack.prod');

module.exports = webpackMerge(commonConfig, envConfig);
