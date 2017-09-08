import { connect } from 'react-redux';

import { Paths } from '../../constants';
import { isAuthenticated } from '../../selectors';

import ConditionalRoute from '../../components/ConditionalRoute';

const mapStateToProps = state => ({
  condition: isAuthenticated(state),
  redirectTo: Paths.LOGIN,
});

export default connect(
  mapStateToProps,
)(ConditionalRoute);
