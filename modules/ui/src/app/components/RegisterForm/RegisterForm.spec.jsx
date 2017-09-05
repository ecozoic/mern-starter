import React from 'react';
import { shallow } from 'enzyme';

import RegisterForm from './';

describe('<RegisterForm />', () => {
  it('renders', () => {
    shallow(<RegisterForm />);
  });
});
