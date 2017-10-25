const graphql = require('graphql');

const Todo = require('../models/todo');

const todoType = new graphql.GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLID),
      resolve: function (obj) {
        return obj._id;
      },
    },
    text: {
      type: graphql.GraphQLString,
    },
    completed: {
      type: graphql.GraphQLBoolean,
    },
  },
});

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    todo: {
      type: todoType,
      args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLID) },
      },
      resolve: function (_, { id }) {
        return Todo.findById(id);
      },
    },
    todos: {
      type: new graphql.GraphQLList(todoType),
      resolve: function () {
        return Todo.find();
      },
    },
  },
});

const schema = new graphql.GraphQLSchema({ query: queryType });

module.exports = schema;
