import { DashboardComponent } from '../../public/components/dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path:'', component:LayoutComponent,
  children:[

    {
      path: "",
     component:DashboardComponent
    },
    {
      path: "albums",
      loadChildren: () =>
        import("../../features/albums/albums.module").then((m) => m.AlbumsModule),
    },
    {
      path: "todos",
      loadChildren: () =>
        import("../../features/todos/todos.module").then((m) => m.TodosModule),
    },
    {
      path: "posts",
      loadChildren: () =>
        import("../../features/posts/posts.module").then((m) => m.PostsModule),
    },
    {
      path: "photos",
      loadChildren: () =>
        import("../../features/photos/photos.module").then((m) => m.PhotosModule),
    },
    
    
  ]
},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
