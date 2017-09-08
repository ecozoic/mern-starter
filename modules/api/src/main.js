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

// passport + jwt
const passport = require('passport');

const { local, jwt } = require('./auth/strategy');
const config = require('./config');
const User = require('./models/user');
const todoRouter = require('./routers/todo');

// set mongoose and redis promises
mongoose.Promise = bluebird;
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// test mongo connection
mongoose.connect(config.MONGO_URL, {
  useMongoClient: true,
})
  .then(() => {
    console.log('Connected to Mongo! :)');
  }, (err) => {
    console.log('Mongo connection failed :(');
    console.log(err);
  });

// test redis connection
const redisClient = redis.createClient({
  host: config.REDIS_HOST,
  port: config.REDIS_PORT,
});

redisClient.on('ready', () => {
  console.log('Connected to Redis! :)');
});

redisClient.on('error', (err) => {
  console.log('Redis connection failed :(');
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

if (config.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use('/api', todoRouter);

app.use((req, res) => {
  res.status(404).send('We ain\'t found shit');
});

if (config.NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use((err, req, res) => {
    res.status(500).send('Shit\'s broke yo');
  });
}

app.listen(config.PORT, () => {
  console.log(`App listening on port: ${config.PORT}`);
});
