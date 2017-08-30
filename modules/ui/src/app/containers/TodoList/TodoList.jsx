import { connect } from 'react-redux';

import { toggleTodo } from '../../actions';
import { getTodos } from '../../selectors';
import TodoList from '../../components/TodoList';

const mapStateToProps = state => ({
  todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

/**
 * React-redux container for TodoList component
 */
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
