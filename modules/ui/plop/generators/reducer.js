module.exports = {
  description: 'redux reducer',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'reducer name please',
  }],
  actions: [{
    type: 'add',
    path: 'src/app/reducers/{{name}}.js',
    templateFile: 'plop/templates/reducer/reducer.hbs',
  }, {
    type: 'add',
    path: 'src/app/reducers/{{name}}.spec.js',
    templateFile: 'plop/templates/reducer/spec.hbs',
  }],
};
