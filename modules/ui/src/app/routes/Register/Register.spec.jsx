import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import Register from './';

describe('<Register />', () => {
  it('renders', () => {
    shallow(
      <MemoryRouter>
        <Route component={Register} />
      </MemoryRouter>,
    );
  });
});
