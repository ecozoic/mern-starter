// load environment configuration
const Joi = require('joi');
require('dotenv').config();

const schema = Joi.object().keys({
  PORT: Joi.string().alphanum().required(),
  MONGO_HOST: Joi.string().hostname().required(),
  MONGO_PORT: Joi.string().alphanum().required(),
  MONGO_DB: Joi.string().alphanum().required(),
  JWT_SECRET: Joi.string().alphanum().required(),
  JWT_EXPIRE_SECONDS: Joi.string().alphanum().required(),
  NODE_ENV: Joi.string().valid('production', 'development').required(),
}).unknown(true);

const result = Joi.validate(process.env, schema);

if (result.error) {
  console.log('Configuration invalid! :(');
  console.log(result.error.details);
  process.exit(1);
} else {
  console.log('Configuration valid! :)');
}

// express + middleware
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('errorhandler');

// mongo + bluebird
const bluebird = require('bluebird');
const mongoose = require('mongoose');

// passport + jwt
const passport = require('passport');

const { local, jwt } = require('./auth/strategy');
const User = require('./models/user');
const todoRouter = require('./routers/todo');

const { MONGO_HOST, MONGO_PORT, MONGO_DB, NODE_ENV, PORT } = process.env;

// set mongoose promises
mongoose.Promise = bluebird;

// test mongo connection
mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`, {
  useMongoClient: true,
})
  .then(() => {
    console.log('Connected to Mongo! :)');
  }, (err) => {
    console.log('Mongo connection failed :(');
    console.log(err);
  });

// setup passport
passport.use(jwt);
passport.use(local);

// setup express app
const app = express();

app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use('/api', todoRouter);

app.use((req, res) => {
  res.status(404).send('We ain\'t found shit');
});

if (NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use((err, req, res) => {
    res.status(500).send('Shit\'s broke yo');
  });
}

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
