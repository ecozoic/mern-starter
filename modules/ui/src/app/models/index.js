import PropTypes from 'prop-types';
import { schema } from 'normalizr';

/**
 * PropType shape for Todo model
 * @const
 */
export const todoShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
});

/**
 * Normalizr schema for Todo model
 * @const
 */
export const todoSchema = new schema.Entity('todos');

/**
 * Normalizr schema for a list of Todos
 * @const
 */
export const todoListSchema = [todoSchema];
