import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './';

describe('<LoginForm />', () => {
  it('renders', () => {
    shallow(<LoginForm />);
  });
});
