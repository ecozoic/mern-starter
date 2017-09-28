import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import RegisterForm from './';

describe('<RegisterForm />', () => {
  it('renders', () => {
    shallow(
      <RegisterForm
        handleSubmit={_.identity}
        hasSubmitError={false}
      />,
    );
  });
});
