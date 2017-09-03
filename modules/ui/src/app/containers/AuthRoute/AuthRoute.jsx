import { connect } from 'react-redux';

import { getUser, getToken } from '../../selectors';

import AuthRoute from '../../components/AuthRoute';

const mapStateToProps = state => ({
  isAuthenticated: !!getUser(state) && !!getToken(state),
});

const AuthRouteContainer = connect(
  mapStateToProps,
)(AuthRoute);

export default AuthRouteContainer;
