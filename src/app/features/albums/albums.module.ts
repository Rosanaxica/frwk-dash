import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';


@NgModule({
  declarations: [AlbumsComponent, CreateAlbumComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    SharedModule
  ]
})
export class AlbumsModule { }
