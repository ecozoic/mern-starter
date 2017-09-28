import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import LoginForm from './';

describe('<LoginForm />', () => {
  it('renders', () => {
    shallow(
      <LoginForm
        handleSubmit={_.identity}
        hasSubmitError={false}
      />,
    );
  });
});
