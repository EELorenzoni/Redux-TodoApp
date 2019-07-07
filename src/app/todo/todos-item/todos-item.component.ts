import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputPhysical', { static: false }) txtInputPhysical: ElementRef;

  public form: FormGroup;
  editing: boolean;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.createForm();
    this.getComponent('checkField').valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });

  }
  getComponent(nameComponent: string): AbstractControl {
    return this.form.get(nameComponent);
  }
  createForm() {
    this.form = new FormGroup({
      checkField: new FormControl(this.todo.completed),
      txtInput: new FormControl(this.todo.text, Validators.required)
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputPhysical.nativeElement.focus();
    });
  }

  endEdition() {
    this.editing = false;
    const txtInput = this.getComponent('txtInput');

    if (txtInput.invalid || txtInput.value === this.todo.text) {
      return;
    }

    const action = new EditTodoAction(this.todo.id, txtInput.value);
    this.store.dispatch(action);
  }

  deletItem() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
