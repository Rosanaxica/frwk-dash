import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';

const routes: Routes = [{ path: '', component: AlbumsComponent },
{ path: 'create', component: CreateAlbumComponent },
{ path: ':id', component: CreateAlbumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
