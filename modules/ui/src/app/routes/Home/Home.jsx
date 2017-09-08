import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import { Image, Header, Container, Segment } from 'semantic-ui-react';

import AddTodo from '../../containers/AddTodo';
import TodoList from '../../containers/TodoList';

import img from '../../../react.png';

const Home = () => (
  <div>
    <Helmet>
      <title>Todo List</title>
    </Helmet>
    <Container style={{ paddingTop: 100 }}>
      <Image shape="circular" centered src={img} alt="logo" />
      <Header as="h1" textAlign="center">Todo List</Header>
      <Segment style={{ maxWidth: 450, margin: '0 auto' }}>
        <AddTodo />
        <TodoList />
      </Segment>
    </Container>
  </div>
);

Home.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Home;
