import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import AddTodo from '../../containers/AddTodo';
import TodoList from '../../containers/TodoList';

import img from '../../../react.png';
import styles from './Home.scss';

/**
 * Homepage component
 */
const Home = () => (
  <div className={styles.home}>
    <Helmet>
      <title>Todo List</title>
    </Helmet>
    <div className={styles.todos}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={img} alt="logo" />
      </div>
      <h1 className={styles.header}>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  </div>
);

Home.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Home;
