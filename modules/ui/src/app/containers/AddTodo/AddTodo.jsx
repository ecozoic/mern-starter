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

export default connect(
  undefined,
  mapDispatchToProps,
)(AddTodo);
