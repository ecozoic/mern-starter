import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import { Grid, Header, Form, Segment, Button, Message } from 'semantic-ui-react';

import { Paths } from '../../constants';

import SemanticField from '../SemanticField';

const RegisterForm = ({ handleSubmit }) => (
  <Grid
    textAlign="center"
    style={{ height: '100%' }}
    verticalAlign="middle"
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" textAlign="center">
        Register a new account
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
          <Field
            name="confirmPassword"
            component={SemanticField}
            fluid
            icon="repeat"
            iconPosition="left"
            placeholder="Confirm password"
            type="password"
          />
          <Button
            fluid
            primary
            size="large"
            type="submit"
          >
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <Link to={Paths.LOGIN}>Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
