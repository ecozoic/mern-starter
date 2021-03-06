import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import { Container, Header } from 'semantic-ui-react';

import TodoTable from '../../containers/TodoTable';

const Admin = () => (
  <div>
    <Helmet>
      <title>Admin</title>
    </Helmet>
    <Container style={{ paddingTop: 100 }}>
      <Header as="h1" textAlign="center">Todo Administration</Header>
      <TodoTable />
    </Container>
  </div>
);

Admin.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Admin;
