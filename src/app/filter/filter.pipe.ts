import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import * as fromFilter from './filter.actions';
import { allowedFilters, filters } from './filter.actions';

@Pipe({
  name: 'todoFilter'
})
export class FilterPipe implements PipeTransform {
  filters = filters;
  transform(todos: Todo[], filter: fromFilter.allowedFilters): Todo[] {
    switch (filter) {
      case filters[0]:
        return todos;
      case filters[1]:
        return todos.filter((todo) => todo.completed);
      case filters[2]:
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }

}
