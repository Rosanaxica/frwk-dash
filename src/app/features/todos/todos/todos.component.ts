import { ITodo } from "../../../core/interfaces/ITodo";
import { TodoService } from "../../../core/services/todo.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  constructor(
    public todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  protected listTodos: Array<ITodo> = [];
  ngOnInit() {
    this.getTodosList();
  }

  getTodosList() {
    this.todoService.getTodos().subscribe((resp) => (this.listTodos = resp));
  }

  editItem(evt) {
    let todo: ITodo = evt;
    this.todoService.updateTodo(todo).subscribe((resp) => resp);
  }

  deleteItem(evt) {
    let todo: ITodo = evt;
    this.todoService.deleteTodo(todo).subscribe((resp) => resp);
  }
  addTodo() {
    this.router.navigate(["create"], { relativeTo: this.route });
  }
}
