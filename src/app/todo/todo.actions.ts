import { Action } from '@ngrx/store';
export const ADD_TODO = '[TODO] Add todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const DELETE_COMPLETED_TODOS = '[TODO] Delete completed todos';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor(public text: string) { }
}
export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) { }
}
export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor(public completado: boolean) { }
}
export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id: number, public text: string) {
    }
}
export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) {
    }
}

export class DeleteCompletedTodosAction implements Action {
    readonly type = DELETE_COMPLETED_TODOS;
}

export type Actions =
    AddTodoAction
    | ToggleTodoAction
    | EditTodoAction
    | DeleteTodoAction
    | ToggleAllTodoAction
    | DeleteCompletedTodosAction;
