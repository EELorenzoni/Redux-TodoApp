import { Component, OnInit } from '@angular/core';
import * as fromFilterActions from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { SetFilterAction, actions } from '../../filter/filter.actions';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { DeleteCompletedTodosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filters: fromFilterActions.allowedFilters[] = ['all', 'completed', 'pending'];
  currentFilter: fromFilterActions.allowedFilters;
  pendingTasks: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.toCountPendings(state.todos);
    });
  }
  changeFilter(filter: fromFilterActions.allowedFilters) {
    const action = new SetFilterAction(filter);
    this.store.dispatch(action);
  }

  toCountPendings(todos: Todo[]) {
    this.pendingTasks = todos.filter((todo) => !todo.completed).length;
  }

  clearCompleted() {
    const action = new DeleteCompletedTodosAction();
    this.store.dispatch(action);
  }
}
