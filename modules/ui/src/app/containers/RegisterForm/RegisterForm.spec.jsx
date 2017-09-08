import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import RegisterForm from './';

const mockStore = configureMockStore();

describe('<RegisterForm />', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('connects', () => {
    shallow(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );
  });
});
