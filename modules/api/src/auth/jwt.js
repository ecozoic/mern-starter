const jwt = require('jsonwebtoken');

const config = require('../config');

const JWT_EXPIRE_IN_SECONDS = 3600;

const setUserInfo = (request) => {
  return {
    _id: request._id,
    username: request.username,
  };
};

const generateToken = (user) => {
  return jwt.sign(user, config.JWT_SECRET, {
    expiresIn: JWT_EXPIRE_IN_SECONDS,
  });
};

module.exports = {
  generateToken,
  setUserInfo,
};
