import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  TodoList: ITodoList[] = [];

  /** Add cricketer in the array List. */
  addTodo(TodoDetail: ITodoList) {
    this.ToDoList.unshift(TodoDetail);
  }

  /**Get the cricket list from the array. */
  gettodo(): ITodoList[] {
    return this.ToDoList;
  }

  constructor() { }

}
