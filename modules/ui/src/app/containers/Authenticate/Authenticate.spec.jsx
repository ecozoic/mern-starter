import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Authenticate from './';

const mockStore = configureMockStore();

describe('<Authenticate />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <Authenticate />
      </Provider>,
    );
  });
});
