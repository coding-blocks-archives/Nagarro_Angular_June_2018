import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  @Input('todo') todo;
  @Output() newTodo = new EventEmitter();
  printTodoList() {
    let todolist = this.todo.map(a => {
      let newObject = {};
      Object.keys(a).forEach(propertyKey => {
        newObject[propertyKey] = a[propertyKey];
      });
      console.log(newObject);
      return newObject ;
    });
    console.log(todolist[0] === this.todo[0]);
    todolist[0].fruit = 'lichi';
    // todolist[0].fruit = 'lichi';
    this.newTodo.emit(todolist);
  }
}
