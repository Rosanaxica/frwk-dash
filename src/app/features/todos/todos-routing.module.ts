import { CreateTodoComponent } from "./create-todo/create-todo.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TodosComponent } from "./todos/todos.component";

const routes: Routes = [
  { path: "", component: TodosComponent },
  { path: "create", component: CreateTodoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
