import React from 'react';
import { shallow } from 'enzyme';

import AuthRoute from './';

describe('<AuthRoute />', () => {
  it('renders', () => {
    shallow(<AuthRoute />);
  });
});
