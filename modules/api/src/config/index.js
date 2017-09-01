const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

// TODO: mongo creds
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB = process.env.MONGO_DB || 'app';
const MONGO_URL = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

// TODO: redis creds
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const JWT_SECRET = process.env.JWT_SECRET || 'yolo';

module.exports = {
  PORT,
  NODE_ENV,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB,
  MONGO_URL,
  REDIS_HOST,
  REDIS_PORT,
  JWT_SECRET,
};
