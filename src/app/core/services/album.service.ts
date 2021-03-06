import { environment } from '../../../environments/environment';
import { IAlbum } from '../interfaces/IAlbum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(public http: HttpClient) { }

  private context ='/albums'

  getAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(`${environment.baseUrl}${this.context}`).pipe(map((resp) => resp));
  }

  getAlbum(albumId): Observable<IAlbum> {
    console.log(albumId)
    return this.http.get<IAlbum>(`${environment.baseUrl}${this.context}/${albumId}`).pipe(map((resp) => resp));
  }

  addAlbum(user: IAlbum) {
    return this.http.post(`${environment.baseUrl}${this.context}`, user).pipe(map((resp) => resp));
  }

  updateAlbum(User: IAlbum) {
    return this.http
      .put(`${environment.baseUrl}${this.context}/${User.id}`, User)
      .pipe(map((resp) => resp));
  }

  deleteAlbum(albumId) {
    return this.http
      .delete(`${environment.baseUrl}${this.context}/${albumId}`)
      .pipe(map((resp) => this.getAlbums()))
  
  }


  
}
