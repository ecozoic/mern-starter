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

const AddTodoContainer = connect(
  undefined,
  mapDispatchToProps,
)(AddTodo);

export default AddTodoContainer;
