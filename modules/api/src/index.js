// load environment configuration
require('dotenv').config();

// express + middleware
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('errorhandler');

// mongo + redis + bluebird
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const redis = require('redis');

const todoRouter = require('./routers/todo');

mongoose.Promise = bluebird;
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// set config defaults
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB = process.env.MONGO_DB || 'app';
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

// test mongo connection
mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`, {
  useMongoClient: true,
})
.then((db) => {
  console.log('Connected to Mongo!');
}, (err) => {
  console.log('Mongo connection failed :(');
  console.log(err);
});

// test redis connection
const redisClient = redis.createClient({ host: REDIS_HOST, port: REDIS_PORT });

redisClient.on('ready', () => {
  console.log('Connected to Redis!');
});

redisClient.on('error', (err) => {
  console.log('Redis connection failed :(');
  console.log(err);
});

// setup express app
const app = express();

app.use(compression());
app.use(bodyParser.json());

if (NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use('/api', todoRouter);

app.use((req, res, next) => {
  res.status(404).send('We ain\'t found shit');
});

if (NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    res.status(500).send('Shit\'s broke yo');
  });
}

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT} `)
});
