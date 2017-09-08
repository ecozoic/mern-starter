import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions';
import { isAuthenticated } from '../../selectors';

import Header from '../../components/Header';

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  onLogoutClick: () => {
    dispatch(logout());
  },
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Header);
