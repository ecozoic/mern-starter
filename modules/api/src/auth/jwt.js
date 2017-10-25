const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRE_SECONDS } = process.env;

const setUserInfo = (request) => {
  return {
    _id: request._id,
    username: request.username,
  };
};

const generateToken = (user) => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: JWT_EXPIRE_SECONDS,
  });
};

module.exports = {
  generateToken,
  setUserInfo,
};
