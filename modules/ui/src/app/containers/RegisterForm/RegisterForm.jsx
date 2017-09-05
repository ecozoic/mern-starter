import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { register } from '../../actions';

import RegisterForm from '../../components/RegisterForm';

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ username, password }) => {
    dispatch(register(username, password));
  },
});

export default compose(
  connect(
    undefined,
    mapDispatchToProps,
  ),
  reduxForm({
    form: 'register',
  }),
)(RegisterForm);
