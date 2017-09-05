import { connect } from 'react-redux';

import { getUser, getToken } from '../../selectors';

import AuthRoute from '../../components/AuthRoute';

const mapStateToProps = state => ({
  isAuthenticated: !!getUser(state) && !!getToken(state),
});

export default connect(
  mapStateToProps,
)(AuthRoute);
