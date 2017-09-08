import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { register } from '../../actions';
import { ActionTypes } from '../../constants';
import { isActionRejected } from '../../selectors';

import RegisterForm from '../../components/RegisterForm';

const mapStateToProps = state => ({
  hasSubmitError: isActionRejected(state, ActionTypes.REGISTER),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ username, password }) => (
    new Promise((resolve, reject) => {
      dispatch(register(username, password, resolve, reject));
    })
  ),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  reduxForm({
    form: 'register',
  }),
)(RegisterForm);
