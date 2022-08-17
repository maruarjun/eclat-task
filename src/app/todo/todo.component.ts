import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { TodoService } from './services/todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: Todo[];

  constructor(private _dialog: MatDialog, private _todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this._todoService.getTodoList();
  }

  openDialog() {
    const dialogRef = this._dialog.open(AddComponent, {
      data: {
        mode: 'add'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addItem(result);
      }
    });
  }

  addItem(todo: Todo): void {
    this._todoService.addItem(todo);
  }

  deleteTodo(todo: Todo): void {
    const dialogRef = this._dialog.open(DeleteConfirmComponent);

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._todoService.deleteItem(todo);
      }
    });
  }

  editTodo(todo: Todo): void {
    const dialogRef = this._dialog.open(AddComponent, {
      data: {
        mode: 'edit',
        todo: todo,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveEditTodo(result)
      }
    });
  }

  saveEditTodo(todo: Todo): void {
    this._todoService.updateItem(todo);
  }

}
