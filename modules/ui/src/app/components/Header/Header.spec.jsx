import React from 'react';
import { shallow } from 'enzyme';

import Header from './';

describe('<Header />', () => {
  it('renders', () => {
    shallow(<Header />);
  });
});
