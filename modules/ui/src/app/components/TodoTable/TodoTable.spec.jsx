import React from 'react';
import { shallow } from 'enzyme';

import TodoTable from './';

describe('<TodoTable />', () => {
  it('renders', () => {
    shallow(<TodoTable />);
  });
});
