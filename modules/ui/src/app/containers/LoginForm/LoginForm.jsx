import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { login } from '../../actions';
import { ActionTypes } from '../../constants';
import { isActionRejected } from '../../selectors';

import LoginForm from '../../components/LoginForm';

const mapStateToProps = state => ({
  hasSubmitError: isActionRejected(state, ActionTypes.LOGIN),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ username, password }) => (
    new Promise((resolve, reject) => {
      dispatch(login(username, password, resolve, reject));
    })
  ),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  reduxForm({
    form: 'login',
  }),
)(LoginForm);
