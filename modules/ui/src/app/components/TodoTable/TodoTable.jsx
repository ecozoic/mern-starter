import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, Button, Icon } from 'semantic-ui-react';

import { todoShape } from '../../models';

class TodoTable extends Component {
  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { todos, onDeleteTodo } = this.props;
    return (
      <Table celled>

        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>_id</Table.HeaderCell>
            <Table.HeaderCell>text</Table.HeaderCell>
            <Table.HeaderCell>completed</Table.HeaderCell>
            <Table.HeaderCell>__v</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {todos.map(todo => (
            <Table.Row key={todo._id}>
              <Table.Cell>{todo._id}</Table.Cell>
              <Table.Cell>{todo.text}</Table.Cell>
              <Table.Cell>{todo.completed.toString()}</Table.Cell>
              <Table.Cell>{todo.__v}</Table.Cell>
              <Table.Cell>
                <Button icon color="red" onClick={() => onDeleteTodo(todo._id)}>
                  <Icon name="trash outline" />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

TodoTable.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onInit: PropTypes.func.isRequired,
};

export default TodoTable;
