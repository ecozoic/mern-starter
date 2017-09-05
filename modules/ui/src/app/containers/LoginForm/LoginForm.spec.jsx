import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LoginForm from './';

const mockStore = configureMockStore();

describe('<LoginForm />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
  });
});
