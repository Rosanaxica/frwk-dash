import { CreatePostComponent } from './create-post/create-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';

const routes: Routes = [{ path: '', component: PostsComponent },
{ path: 'create', component: CreatePostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
