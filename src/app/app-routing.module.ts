import { AuthGuard } from './core/guards/auth-guard';
import { LoginComponent } from './public/components/login/login.component';
import { Error404Component } from "./public/components/error404/error404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "dash",
    loadChildren: () =>
      import("./core/layout/layout.module").then((m) => m.LayoutModule),
      canActivate:[AuthGuard]
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
