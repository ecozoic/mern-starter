import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import TodoTable from './';

describe('<TodoTable />', () => {
  it('renders', () => {
    const todos = [
      { _id: '1', text: 'Todo 1', completed: false },
      { _id: '2', text: 'Todo 2', completed: true },
      { _id: '3', text: 'Todo 3', completed: false },
    ];

    shallow(
      <TodoTable
        todos={todos}
        onDeleteTodo={_.identity}
        onInit={_.identity}
      />,
    );
  });
});
