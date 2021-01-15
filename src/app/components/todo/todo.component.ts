import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ]
  }

}
