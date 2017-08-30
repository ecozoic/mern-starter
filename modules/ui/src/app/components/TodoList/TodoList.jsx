import React from 'react';
import PropTypes from 'prop-types';

import { todoShape } from '../../models';
import TodoComponent from '../Todo';

import styles from './TodoList.scss';

/**
 * TodoList component that renders a list of todos
 * @param {Object} props - component props
 * @param {Object[]} props.todos - array of todos
 * @param {Function} props.onTodoClick - function to call when todo is clicked
 */
const TodoList = ({ todos, onTodoClick }) => (
  <ul className={styles.todoList}>
    {todos.map(todo => (
      <TodoComponent
        key={todo.id}
        onClick={() => onTodoClick(todo.id)}
        completed={todo.completed}
        text={todo.text}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
