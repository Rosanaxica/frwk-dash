import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { CreatePhotoComponent } from './create-photo/create-photo.component';


@NgModule({
  declarations: [PhotosComponent, CreatePhotoComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    SharedModule
  ]
})
export class PhotosModule { }
