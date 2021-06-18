import { ITodo } from "../../../core/interfaces/ITodo";
import { TodoService } from "../../../core/services/todo.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.scss"],
})
export class CreateTodoComponent implements OnInit {
  constructor(public todoService: TodoService, protected form: FormBuilder) {}
  formTodo: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formTodo = new FormGroup({
      title: new FormControl("", Validators.required),
    });
  }

  createTodo() {
    let todo: ITodo={
      title:this.formTodo.controls['title'].value,
      userId:2,
      completed: false
    };
    this.todoService.addTodo(todo).subscribe((resp) => resp);
  }

  submit(){
    this.formTodo.markAllAsTouched
    if(this.formTodo.valid){
      this.createTodo()
    }
  }
  resetForm(){
    this.formTodo.reset()
  }
}
