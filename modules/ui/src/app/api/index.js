import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { todoListSchema } from '../models';

const TODOS = [
  { id: _.uniqueId(), text: 'foo', completed: false },
  { id: _.uniqueId(), text: 'bar', completed: false },
  { id: _.uniqueId(), text: 'baz', completed: false },
];

/**
 * Fetches Todos from API
 * @returns Observable of normalized todos
 */
export const getTodos = () => Observable.of(
  normalize(TODOS, todoListSchema),
);
