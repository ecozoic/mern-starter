import { connect } from 'react-redux';

import { deleteTodo, fetchTodos } from '../../actions';
import { getTodos } from '../../selectors';

import TodoTable from '../../components/TodoTable';

const mapStateToProps = state => ({
  todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: (_id) => {
    dispatch(deleteTodo(_id));
  },
  onInit: () => {
    dispatch(fetchTodos());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoTable);
