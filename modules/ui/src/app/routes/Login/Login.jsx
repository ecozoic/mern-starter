import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import { Paths } from '../../constants';

import styles from './Login.scss';

const Login = () => (
  <div className={styles.login}>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Login to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button color="teal" fluid size="large">Login</Button>
          </Segment>
        </Form>
        <Message>
          New user? <Link to={Paths.REGISTER}>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

Login.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Login;
