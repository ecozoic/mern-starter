import React from 'react';
import _ from 'lodash';
import { mount, shallow } from 'enzyme';

import AddTodo from './';

describe('<AddTodo />', () => {
  it('renders without crashing', () => {
    const addTodo = shallow(
      <AddTodo
        onInit={_.identity}
        onSubmit={_.identity}
      />,
    );

    expect(addTodo).toMatchSnapshot();
  });

  describe('handleSubmit()', () => {
    it('prevents default behavior on form submission', () => {
      const preventDefault = jest.fn();

      const event = {
        preventDefault,
      };

      const addTodo = shallow(
        <AddTodo
          onInit={_.identity}
          onSubmit={_.identity}
        />,
      );

      const form = addTodo.find('form');
      form.simulate('submit', event);

      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it('noops for empty and whitespace strings', () => {
      const onSubmit = jest.fn();

      const addTodo = shallow(
        <AddTodo
          onInit={_.identity}
          onSubmit={onSubmit}
        />,
      );

      addTodo.setState({ todo: '' });

      const instance = addTodo.instance();
      const event = { preventDefault: _.identity };

      instance.handleSubmit(event);

      expect(onSubmit).not.toHaveBeenCalled();

      addTodo.setState({ todo: '    ' });

      instance.handleSubmit(event);

      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('calls onSubmit for valid todos', () => {
      const onSubmit = jest.fn();
      const todo = 'todo';

      const addTodo = shallow(
        <AddTodo
          onInit={_.identity}
          onSubmit={onSubmit}
        />,
      );

      addTodo.setState({ todo });

      const instance = addTodo.instance();
      const event = { preventDefault: _.identity };

      instance.handleSubmit(event);

      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith(todo);
    });

    it('resets state after submission', () => {
      const addTodo = shallow(
        <AddTodo
          onInit={_.identity}
          onSubmit={_.identity}
        />,
      );

      addTodo.setState({ todo: 'foo' });

      const instance = addTodo.instance();
      const event = { preventDefault: _.identity };

      instance.handleSubmit(event);

      expect(addTodo.state('todo')).toEqual('');
    });
  });

  describe('handleChange()', () => {
    it('sets state', () => {
      const addTodo = shallow(
        <AddTodo
          onInit={_.identity}
          onSubmit={_.identity}
        />,
      );

      const instance = addTodo.instance();
      const todo = 'todo';
      const event = { target: { value: todo } };

      instance.handleChange(event);

      expect(addTodo.state('todo')).toEqual(todo);
    });
  });

  describe('componentDidMount', () => {
    it('calls onInit after mounting', () => {
      const onInit = jest.fn();

      mount(
        <AddTodo
          onInit={onInit}
          onSubmit={_.identity}
        />,
      );

      expect(onInit).toHaveBeenCalledTimes(1);
    });
  });
});
