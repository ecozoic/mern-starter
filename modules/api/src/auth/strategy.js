const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const config = require('../config');
const User = require('../models/user');

const localLogin = new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, { error: 'Invalid username or password' });
    }

    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return done(err);
      }

      if (!isMatch) {
        return done(null, false, { error: 'Invalid username or password' });
      }

      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload._id, (err, user) => {
    if (err) {
      return done(err);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

module.exports = {
  local: localLogin,
  jwt: jwtLogin,
};
