import { LoginComponent } from './public/components/login/login.component';
import { Error404Component } from "./public/components/error404/error404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    loadChildren: () =>
      import("./shared/layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "**",
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
