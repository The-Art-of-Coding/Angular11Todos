import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private _http:HttpClient) { }

  get(): Observable<Todo[]> {
    return this._http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
  }

  delete(todo:Todo):Observable<Todo>{
    return this._http.delete<Todo>('https://jsonplaceholder.typicode.com/todos/' + todo.id);
  }

  addTodo(todo:any):Observable<Todo>{
    return this._http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

}
