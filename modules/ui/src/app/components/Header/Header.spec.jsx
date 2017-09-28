import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import Header from './';

describe('<Header />', () => {
  it('renders', () => {
    shallow(
      <Header
        isAuthenticated={false}
        onLogoutClick={_.identity}
      />,
    );
  });
});
