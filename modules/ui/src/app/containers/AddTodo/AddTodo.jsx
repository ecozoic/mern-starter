import { connect } from 'react-redux';

import { addTodo, fetchTodos } from '../../actions';
import AddTodo from '../../components/AddTodo';

const mapDispatchToProps = dispatch => ({
  onSubmit: (todo) => {
    dispatch(addTodo(todo));
  },
  onInit: () => {
    dispatch(fetchTodos());
  },
});

/**
 * React-redux container for Add Todo component
 */
const AddTodoContainer = connect(
  undefined,
  mapDispatchToProps,
)(AddTodo);

export default AddTodoContainer;
