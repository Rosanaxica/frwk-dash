import { ITodo } from "../../../core/interfaces/ITodo";
import { TodoService } from "../../../core/services/todo.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.scss"],
})
export class CreateTodoComponent implements OnInit {
  constructor(
    public todoService: TodoService,
    protected form: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  formTodo: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formTodo = new FormGroup({
      title: new FormControl("", Validators.required),
    });
  }u

  createTodo() {
    let todo: ITodo = {
      title: this.formTodo.controls["title"].value,
      userId: 2,
      completed: false,
    };
    this.todoService.addTodo(todo).subscribe((resp) => this.navigateToList());
  }

  submit() {
    this.formTodo.markAllAsTouched;
    if (this.formTodo.valid) {
      this.createTodo();
    }
  }
  navigateToList() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  resetForm() {
    this.formTodo.reset();
  }
}
