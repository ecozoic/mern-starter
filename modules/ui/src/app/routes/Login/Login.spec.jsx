import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import Login from './';

describe('<Login />', () => {
  it('renders', () => {
    shallow(
      <MemoryRouter>
        <Route component={Login} />
      </MemoryRouter>,
    );
  });
});
