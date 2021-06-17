import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';


@NgModule({
  declarations: [TodosComponent, CreateTodoComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule
  ],
 
})
export class TodosModule { }
