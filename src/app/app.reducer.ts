import { Todo } from './todo/models/todo.model';
import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import * as fromFilterAction from './filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    todos: Todo[];
    filter: fromFilterAction.allowedFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.reducerFilter
};
