import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [TodoService]
})
export class AppComponent {
  todosArray: ITodoList[] = []
  todoType: ITodoType[] = [];

  firstName: string;
  lastName: string;
  todoDetail: ITodoList;

  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    
  }

  /**Add a cricket */
  addTodo(first, last, todo) {

    this.todoDetail = {
      firstName: first,
      lastName: last,
      todo: todo
    };

    /**Call function from service. */
    this._todoService.addTodo(this.todoDetail);
    this.todosArray = this._todoService.gettodo();
  }

}
}
