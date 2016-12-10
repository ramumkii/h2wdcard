import { createAction } from 'redux-actions';

import {
    ADD_TODO
} from './';

export const addTodo = createAction(ADD_TODO, () =>
    //request.get('/composition/newlyUpdated?size=10')
    'a'
);
