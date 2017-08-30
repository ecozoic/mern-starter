module.exports = {
  description: 'react component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'component name please',
  }, {
    type: 'confirm',
    name: 'stateless',
    message: 'is the component stateless',
    default: true,
  }, {
    type: 'confirm',
    name: 'styles',
    message: 'does the component need styles',
    default: true,
  }],
  actions: (data) => {
    const actions = [];

    if (data.stateless) {
      actions.push({
        type: 'add',
        path: 'src/app/components/{{name}}/{{name}}.jsx',
        templateFile: 'plop/templates/component/stateless.hbs',
      });
    } else {
      actions.push({
        type: 'add',
        path: 'src/app/components/{{name}}/{{name}}.jsx',
        templateFile: 'plop/templates/component/stateful.hbs',
      });
    }

    if (data.styles) {
      actions.push({
        type: 'add',
        path: 'src/app/components/{{name}}/{{name}}.scss',
        templateFile: 'plop/templates/component/styles.hbs',
      });
    }

    actions.push({
      type: 'add',
      path: 'src/app/components/{{name}}/index.js',
      templateFile: 'plop/templates/component/index.hbs',
    });

    actions.push({
      type: 'add',
      path: 'src/app/components/{{name}}/{{name}}.spec.jsx',
      templateFile: 'plop/templates/component/spec.hbs',
    });

    return actions;
  },
};
