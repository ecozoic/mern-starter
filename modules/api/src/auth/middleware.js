const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });
const login = passport.authenticate('local', { session: false });

module.exports = {
  auth,
  login,
};
