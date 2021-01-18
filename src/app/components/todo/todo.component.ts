import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  title:string;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.get().subscribe(
      todos => {
        this.todos = todos;
      }
    )
  }

  onDelete(todo:any){
    this.todoService.delete(todo).subscribe(response => {
      this.todos = this.todos.filter(item => item.id != todo.id);
    },
    error => {
      console.log(error);
    });
  }

  addTodo(){
    this.todoService.addTodo({title: this.title, completed: false}).subscribe(
      todo => {
        this.todos.push(todo);
        this.title = "";
      }
    )
  }

}
