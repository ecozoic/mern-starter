import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import { Paths } from '../../constants';

import SemanticField from '../SemanticField';

const LoginForm = ({ handleSubmit, hasSubmitError }) => (
  <Grid
    textAlign="center"
    style={{ height: '100%' }}
    verticalAlign="middle"
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" textAlign="center">
        Login to your account
      </Header>
      <Form size="large" onSubmit={handleSubmit}>
        <Segment>
          <Field
            name="username"
            component={SemanticField}
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Username"
          />
          <Field
            name="password"
            component={SemanticField}
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button
            fluid
            primary
            size="large"
            type="submit"
          >
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New user? <Link to={Paths.REGISTER}>Sign Up</Link>
      </Message>
      {hasSubmitError &&
        <Message error>
          Invalid username or password
        </Message>
      }
    </Grid.Column>
  </Grid>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hasSubmitError: PropTypes.bool.isRequired,
};

export default LoginForm;
