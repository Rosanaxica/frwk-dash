import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/IPost';
import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) {}

  private context = "/posts";

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.baseUrl}${this.context}`).pipe(map((resp) => resp));
  }

    getPost(): Observable<IPost> {
    return this.http.get<IPost>(this.context).pipe(map((resp) => resp));
  }

  addPost(photo: IPost) {
    return this.http.post(`${environment.baseUrl}${this.context}`, photo).pipe(map((resp) => resp));
  }

  updatePost(photo: IPost) {
    return this.http
      .put(`${environment.baseUrl}${this.context}/${photo.id}`, photo)
      .pipe(map((resp) => resp));
  }

  deletePost(photo: IPost) {
    return this.http
      .delete(`${environment.baseUrl}${this.context}/${photo.id}`)
      .pipe(map((resp) => resp));
  }
}
