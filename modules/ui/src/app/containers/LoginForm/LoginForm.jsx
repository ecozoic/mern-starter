import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { login } from '../../actions';

import LoginForm from '../../components/LoginForm';

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ username, password }) => (
    new Promise((resolve, reject) => {
      dispatch(login(username, password, resolve, reject));
    })
  ),
});

export default compose(
  connect(
    undefined,
    mapDispatchToProps,
  ),
  reduxForm({
    form: 'login',
  }),
)(LoginForm);
