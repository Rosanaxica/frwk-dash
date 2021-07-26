import { Observable } from "rxjs";
import { CreateAlbumComponent } from "../../features/albums/create-album/create-album.component";
import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable()
export class AlbumDeactivateGuard implements CanDeactivate<CreateAlbumComponent> {
  canDeactivate(
    component: CreateAlbumComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(`desativaçao`)
    return true;
  }
}
