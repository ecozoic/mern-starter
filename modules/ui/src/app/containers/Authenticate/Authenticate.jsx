import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { authenticate } from '../../actions';
import { ActionTypes } from '../../constants';
import { isActionPending } from '../../selectors';

import Authenticate from '../../components/Authenticate';

const mapStateToProps = state => ({
  pending: isActionPending(state, ActionTypes.AUTHENTICATE),
});

const mapDispatchToProps = dispatch => ({
  authenticate: token => dispatch(authenticate(token)),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Authenticate);
