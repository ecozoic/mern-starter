import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const SemanticField = ({ input, meta, ...props }) => (
  <Form.Input {...input} {...props} />
);

SemanticField.propTypes = {
  input: PropTypes.shape({
    checked: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    autofilled: PropTypes.bool.isRequired,
    asyncValidating: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    error: PropTypes.string,
    form: PropTypes.string.isRequired,
    initial: PropTypes.any,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    submitFailed: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired,
    warning: PropTypes.string,
  }).isRequired,
};

export default SemanticField;
