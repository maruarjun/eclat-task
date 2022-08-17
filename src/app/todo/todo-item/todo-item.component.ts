import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteEvent = new EventEmitter<Todo>();
  @Output() editEvent = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  editTodo(): void {
    this.editEvent.emit(this.todo);
  }

  deleteTodo(): void {
    this.deleteEvent.emit(this.todo);
  }
}
