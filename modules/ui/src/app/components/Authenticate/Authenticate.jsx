import React from 'react';
import PropTypes from 'prop-types';

import config from '../../config';

class Authenticate extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    authenticate: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    const token = localStorage.getItem(config.jwtStorageKey);

    this.state = {
      initialized: !token,
      token,
    };
  }

  componentDidMount() {
    const { initialized, token } = this.state;
    const { authenticate } = this.props;

    if (!initialized) {
      authenticate(token);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { initialized } = this.state;
    const { pending } = this.props;

    if (!initialized && pending && !nextProps.pending) {
      this.setState({
        initialized: true,
      });
    }
  }

  render() {
    const { initialized } = this.state;
    const { children } = this.props;

    if (!initialized) {
      return null;
    }

    return children;
  }
}

export default Authenticate;
