import React from 'react';
import { shallow } from 'enzyme';

import Authenticate from './';

describe('<Authenticate />', () => {
  it('renders', () => {
    shallow(<Authenticate />);
  });
});
