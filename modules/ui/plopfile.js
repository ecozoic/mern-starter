const { component, container, epic, reducer, route } = require('./plop/generators');

module.exports = function (plop) {
  plop.setGenerator('component', component);
  plop.setGenerator('container', container);
  plop.setGenerator('epic', epic);
  plop.setGenerator('reducer', reducer);
  plop.setGenerator('route', route);
};
