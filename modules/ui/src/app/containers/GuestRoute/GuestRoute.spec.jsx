import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import GuestRoute from './';

const mockStore = configureMockStore();

describe('<GuestRoute />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <GuestRoute />
      </Provider>,
    );
  });
});
