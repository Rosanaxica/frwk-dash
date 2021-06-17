import { CreatePhotoComponent } from './create-photo/create-photo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosComponent } from './photos.component';

const routes: Routes = [{ path: '', component: PhotosComponent },
{ path: 'create', component: CreatePhotoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
