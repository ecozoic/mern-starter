import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import Admin from './';

describe('<Admin />', () => {
  it('renders', () => {
    shallow(
      <MemoryRouter>
        <Route component={Admin} />
      </MemoryRouter>,
    );
  });
});
