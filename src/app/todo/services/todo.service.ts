import { Injectable } from '@angular/core';
import { Todo } from '../todo';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[] = [];

  constructor(private _storageService: StorageService) {
    this.todoList = _storageService.getData(todoListStorageKey) || [] ;
  }

  saveList(): void {
    this._storageService.setData(todoListStorageKey, this.todoList);
  }

  getTodoList(): Todo[] {
    return this.todoList;
  }

  addItem(item: Todo): void {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: Todo): void {
    const index = this.todoList.findIndex(todo => todo.id === item.id);
    this.todoList[index] = item;
    this.saveList();
  }

  deleteItem(item: Todo): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
