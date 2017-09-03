import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import { Paths } from '../../constants';

import styles from './Register.scss';

const Register = () => (
  <div className={styles.register}>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Register a new account
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
            <Form.Input
              fluid
              icon="repeat"
              iconPosition="left"
              placeholder="Confirm password"
              type="password"
            />
            <Button color="teal" fluid size="large">Sign Up</Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to={Paths.LOGIN}>Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

Register.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Register;
