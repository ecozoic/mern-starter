import React from 'react';
import _ from 'lodash';
import { shallow } from 'enzyme';

import TodoList from './';

describe('<TodoList />', () => {
  it('renders without crashing', () => {
    const todoList = shallow(
      <TodoList
        todos={[]}
        onTodoClick={_.identity}
      />,
    );

    expect(todoList).toMatchSnapshot();
  });

  it('displays an unordered list', () => {
    const todoList = shallow(
      <TodoList
        todos={[]}
        onTodoClick={_.identity}
      />,
    );

    expect(todoList.find('ul').length).toBe(1);
  });

  it('renders a todo for each todo in props', () => {
    const todos = [
      { id: '1', text: 'Todo 1', completed: false },
      { id: '2', text: 'Todo 2', completed: true },
      { id: '3', text: 'Todo 3', completed: false },
    ];

    const todoList = shallow(
      <TodoList
        todos={todos}
        onTodoClick={_.identity}
      />,
    );

    expect(todoList.find('Todo').length).toBe(3);
  });

  it('renders todo with proper props', () => {
    const todos = [
      { id: '1', text: 'Todo 1', completed: false },
    ];

    const todoList = shallow(
      <TodoList
        todos={todos}
        onTodoClick={_.identity}
      />,
    );

    const todo = todoList.find('Todo');
    const props = todo.props();

    expect(props.completed).toBe(false);
    expect(props.text).toBe('Todo 1');
  });

  it('sets the todo id as the key', () => {
    const todos = [
      { id: '1', text: 'Todo 1', completed: false },
    ];

    const todoList = shallow(
      <TodoList
        todos={todos}
        onTodoClick={_.identity}
      />,
    );

    expect(todoList.find('Todo').key()).toEqual('1');
  });

  it('calls onTodoClick with id of clicked todo', () => {
    const mockFn = jest.fn();

    const todos = [
      { id: '1', text: 'Todo 1', completed: false },
    ];

    const todoList = shallow(
      <TodoList
        todos={todos}
        onTodoClick={mockFn}
      />,
    );

    todoList.find('Todo').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toBe('1');
  });
});
