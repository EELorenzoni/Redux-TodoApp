import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);

  }

  addTodo() {

    if (this.txtInput.invalid) {
      return;
    }

    const action = new fromTodo.AddTodoAction(this.txtInput.value);
    this.store.dispatch(action);
    this.txtInput.setValue('');
  }

}
