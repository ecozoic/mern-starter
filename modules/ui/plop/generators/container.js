module.exports = {
  description: 'react-redux container',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'container name please',
  }, {
    type: 'input',
    name: 'component',
    message: 'named of wrapped component',
  }],
  actions: [{
    type: 'add',
    path: 'src/app/containers/{{name}}/{{name}}.jsx',
    templateFile: 'plop/templates/container/container.hbs',
  }, {
    type : 'add',
    path: 'src/app/containers/{{name}}/index.js',
    templateFile: 'plop/templates/container/index.hbs',
  }, {
    type: 'add',
    path: 'src/app/containers/{{name}}/{{name}}.spec.jsx',
    templateFile: 'plop/templates/container/spec.hbs',
  }],
};
