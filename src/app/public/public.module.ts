import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { Error404Component } from "./components/error404/error404.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [ LoginComponent, Error404Component],
  imports: [CommonModule, SharedModule],
  exports: [ LoginComponent, Error404Component],
})
export class PublicModule {}
