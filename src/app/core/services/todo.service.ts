import { environment } from '../../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ITodo } from "src/app/core/interfaces/ITodo";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor(public http: HttpClient) {}

  private context = "/todos";

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${environment.baseUrl}${this.context}`).pipe(map((resp) => resp));
  }

    getTodo(): Observable<ITodo> {
    return this.http.get<ITodo>(this.context).pipe(map((resp) => resp));
  }

  addTodo(todo: ITodo) {
    return this.http.post(`${environment.baseUrl}${this.context}`, todo).pipe(map((resp) => resp));
  }

  updateTodo(todo: ITodo) {
    return this.http
      .put(`${environment.baseUrl}${this.context}/${todo.id}`, todo)
      .pipe(map((resp) => resp));
  }

  deleteTodo(todo: ITodo) {
    return this.http
      .delete(`${environment.baseUrl}${this.context}/${todo.id}`)
      .pipe(map((resp) => resp));
  }
}
