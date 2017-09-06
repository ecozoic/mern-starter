import React from 'react';
import { shallow } from 'enzyme';

import ConditionalRoute from './';

describe('<ConditionalRoute />', () => {
  it('renders', () => {
    shallow(<ConditionalRoute />);
  });
});
