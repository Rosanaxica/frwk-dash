import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { IPhoto } from '../interfaces/IPhoto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(public http: HttpClient) {}

  private context = "/photos";

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`${environment.baseUrl}${this.context}`).pipe(map((resp) => resp));
  }

    getPhoto(): Observable<IPhoto> {
    return this.http.get<IPhoto>(this.context).pipe(map((resp) => resp));
  }

  addPhoto(photo: IPhoto) {
    return this.http.post(`${environment.baseUrl}${this.context}`, photo).pipe(map((resp) => resp));
  }

  updatePhoto(photo: IPhoto) {
    return this.http
      .put(`${environment.baseUrl}${this.context}/${photo.id}`, photo)
      .pipe(map((resp) => resp));
  }

  deletePhoto(photo: IPhoto) {
    return this.http
      .delete(`${environment.baseUrl}${this.context}/${photo.id}`)
      .pipe(map((resp) => resp));
  }
}
