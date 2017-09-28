import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import Authenticate from './';

describe('<Authenticate />', () => {
  it('renders', () => {
    shallow(
      <Authenticate
        authenticate={_.identity}
        pending={true}
      >
        <div>Child</div>
      </Authenticate>,
    );
  });
});
