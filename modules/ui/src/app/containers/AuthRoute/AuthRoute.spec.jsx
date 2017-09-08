import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import AuthRoute from './';

const mockStore = configureMockStore();

describe('<AuthRoute />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <AuthRoute />
      </Provider>,
    );
  });
});
