import { AlbumDeactivateGuard } from './../../core/guards/albums-deactivate-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';

const routes: Routes = [{ path: '', component: AlbumsComponent },
{ path: 'create', component: CreateAlbumComponent, canDeactivate:[AlbumDeactivateGuard] },
{ path: ':id', component: CreateAlbumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
