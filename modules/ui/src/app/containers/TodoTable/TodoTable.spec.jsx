import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import TodoTable from './';

const mockStore = configureMockStore();

describe('<TodoTable />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <TodoTable />
      </Provider>,
    );
  });
});
