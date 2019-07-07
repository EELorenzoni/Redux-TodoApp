import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] Set Filter';
export type allowedFilters = 'all' | 'completed' | 'pending';
export const filters: allowedFilters[] = ['all', 'completed', 'pending'];

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;
    constructor(public filter: allowedFilters) { }
}

export type actions = SetFilterAction;
