import PropTypes from 'prop-types';
import { schema } from 'normalizr';

export const todoShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  __v: PropTypes.number,
});

export const todoSchema = new schema.Entity('todos', {}, { idAttribute: '_id' });

export const todoListSchema = [todoSchema];
