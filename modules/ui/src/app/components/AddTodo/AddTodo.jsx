import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Icon } from 'semantic-ui-react';

/**
 * Manages the add todo form
 */
class AddTodo extends React.Component {
  static propTypes = {
    onInit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  /**
   * Create an Add Todo component
   * @param {Object} props - component props
   * @param {Function} props.onInit - function to call during initialization/mounting
   * @param {Function} props.onSubmit - function to call on form submission
   */
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // TODO: only fetch if not initialized
    this.props.onInit();
  }

  handleSubmit(event) {
    const { onSubmit } = this.props;
    const { todo } = this.state;

    event.preventDefault();

    if (!todo || !todo.trim()) {
      return;
    }

    onSubmit(todo);

    this.setState({ todo: '' });
  }

  handleChange(event) {
    this.setState({ todo: event.target.value });
  }

  render() {
    const { todo } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="todo"
            type="text"
            value={todo}
            onChange={this.handleChange}
            action={
              <Button
                type="submit"
                primary
                animated
                disabled={!todo}
              >
                <Button.Content visible>
                  Add Todo
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="plus" />
                </Button.Content>
              </Button>
            }
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
