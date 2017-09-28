import React from 'react';
import { shallow } from 'enzyme';

import ConditionalRoute from './';

describe('<ConditionalRoute />', () => {
  it('renders', () => {
    shallow(
      <ConditionalRoute
        condition={false}
        redirectTo="redirectTo"
        path="path"
        component={() => <h1>Hey</h1>}
      />,
    );
  });
});
