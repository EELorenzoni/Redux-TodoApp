import * as fromFilter from './filter.actions';



const initialState: fromFilter.allowedFilters = 'all';

export function reducerFilter(state = initialState, action: fromFilter.actions): fromFilter.allowedFilters {

    switch (action.type) {
        case fromFilter.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
