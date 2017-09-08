import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'semantic-ui-react';

import { todoShape } from '../../models';
import TodoComponent from '../Todo';

/**
 * Renders a list of todos
 * @param {Object} props - component props
 * @param {Object[]} props.todos - array of todos
 * @param {Function} props.onTodoClick - function to call when todo is clicked
 */
const TodoList = ({ todos, onTodoClick }) => (
  <List animated relaxed size="large" bulleted>
    {todos.map(todo => (
      <TodoComponent
        key={todo._id}
        onClick={() => onTodoClick(todo._id)}
        completed={todo.completed}
        text={todo.text}
      />
    ))}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
