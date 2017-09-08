# mern-starter ui

A scaffold for React+Redux+Rxjs UIs powered by Webpack.

## Features
* react
* react-router, connected-react-router
* redux, redux-thunk, reselect
* rxjs, redux-observable
* redux-devtools, react-hot-loader
* semantic-ui, css modules
* jest, enzyme, istanbul
* plop  
* gh-pages, heroku, docker

## Development
Start a webpack-dev-server with HMR and redux-devtools:
```
yarn start
```

## Production
Build minified assets in the `/dist/` directory
```
yarn build
```

Visualizations of the webpack build will be produced in the `/webpack/stats` directory. 

## Tests
Execute jest unit tests and generate istanbul coverage reports:
```
yarn test
```

Develop using TDD (webpack-dev-server and jest in ```--watch``` mode):
```
yarn tdd
```

Start jest in ```--watch``` mode without starting webpack-dev-server:

```
yarn test:watch
```

## Documentation
Generate documentation.js documentation in the `/docs/` directory  
```
yarn docs
```

## Configuration
* Add environment-specific configuration settings by creating a `.env` file in the root directory
* `.env.sample` shows an example format with supported values
* If no `.env` file is present or any values are missing, the default values specified in `.env.sample` will be used
* The `.env` file is loaded by webpack at buildtime (via dotenv) and pushstate-server at runtime (via dotenv-cli)

## Plop
The following plop generators are supported:
* component
* container
* epic
* reducer
* route

Run plop:
```
yarn plop
```

Run a specific plop generator:
```
yarn plop component
```