import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // toggle = true;
  // color = 'black';
  // path = 'https://www.google.co.in/logos/doodles/2018/world-cup-2018-day-14-6046718054367232-5688737870643200-ssw.png';
  // hello(): number{
  //   return ('Hello World').length;
  // }
  // clicked(event) {
  //   const path = 'xyz';
  //   this.color = 'blue';
  //   console.log(event);
  //   console.log(path);
  //   if(this.toggle) {
  //     this.path = 'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png';
  //     this.toggle = false;
  //   }
  //   else {
  //     this.path = 'https://www.google.co.in/logos/doodles/2018/world-cup-2018-day-14-6046718054367232-5688737870643200-ssw.png';
  //     this.toggle = true;
  //   }
  // }
  todoList: object[];
  constructor() {
    this.todoList = [{fruit: 'apple'}, {fruit: 'kiwi'}, {fruit: 'orange'}];
  }
  printParentTodo() {
    console.log(this.todoList);
  }
  getTodo(value) {
    console.log(value);
    this.todoList = value;

  }
}
