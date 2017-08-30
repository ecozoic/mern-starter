import React from 'react';
import _ from 'lodash';
import { shallow } from 'enzyme';

import Todo from './';

describe('<Todo />', () => {
  it('renders without crashing', () => {
    const todo = shallow(
      <Todo
        onClick={_.identity}
        text="Todo"
        completed={false}
      />,
    );

    expect(todo).toMatchSnapshot();
  });

  it('displays todo text', () => {
    const todo = shallow(
      <Todo
        onClick={_.identity}
        text="Todo"
        completed={false}
      />,
    );

    const expected = 'Todo';
    const actual = todo.find('li').text();

    expect(actual).toBe(expected);
  });

  it('has completed class if completed', () => {
    const todo = shallow(
      <Todo
        onClick={_.identity}
        text="Todo"
        completed
      />,
    );

    const classes = todo.find('li').props().className.split(' ');

    expect(classes.indexOf('completed') > -1).toEqual(true);
  });

  it('does not have completed class if incomplete', () => {
    const todo = shallow(
      <Todo
        onClick={_.identity}
        text="Todo"
        completed={false}
      />,
    );

    const classes = todo.find('li').props().className.split(' ');

    expect(classes.indexOf('completed') > -1).toEqual(false);
  });

  it('fires onclick when clicked', () => {
    const mockFn = jest.fn();

    const todo = shallow(
      <Todo
        onClick={mockFn}
        text="Todo"
        completed={false}
      />,
    );

    todo.find('li').simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
