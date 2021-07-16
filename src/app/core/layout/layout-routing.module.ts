import { AuthGuard } from './../guards/auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path:'', component:LayoutComponent,
  children:[

    {
      path: "",
     component:DashboardComponent,
     canActivate:[AuthGuard]
    },
    {
      path: "albums",
      loadChildren: () =>
        import("../../features/albums/albums.module").then((m) => m.AlbumsModule),
        canActivate:[AuthGuard]
    },
    {
      path: "todos",
      loadChildren: () =>
        import("../../features/todos/todos.module").then((m) => m.TodosModule),
        canActivate:[AuthGuard]
    },
    {
      path: "posts",
      loadChildren: () =>
        import("../../features/posts/posts.module").then((m) => m.PostsModule),
        canActivate:[AuthGuard]
    },
    {
      path: "photos",
      loadChildren: () =>
        import("../../features/photos/photos.module").then((m) => m.PhotosModule),
        canActivate:[AuthGuard]
    },
    
    
  ]
},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
