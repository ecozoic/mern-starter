import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import SemanticField from './';

describe('<SemanticField />', () => {
  it('renders', () => {
    shallow(
      <SemanticField
        input={{
          checked: false,
          name: 'name',
          onBlur: _.identity,
          onChange: _.identity,
          onDragStart: _.identity,
          onDrop: _.identity,
          onFocus: _.identity,
          value: 'value',
        }}
        meta={{
          active: false,
          autofilled: false,
          asyncValidating: false,
          dirty: false,
          dispatch: _.identity,
          error: 'error',
          form: 'form',
          initial: 'initial',
          invalid: false,
          pristine: false,
          submitting: false,
          submitFailed: false,
          touched: false,
          valid: false,
          visited: false,
          warning: 'warning',
        }}
      />,
    );
  });
});
