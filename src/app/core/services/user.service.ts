import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  private context = "/users";


  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.baseUrl}${this.context}`).pipe(map((resp) => resp));
  }

  getUserById(userId): Observable<IUser> {
    return this.http.get<IUser>(`${environment.baseUrl}${this.context}/${userId}`).pipe(map((resp) => resp));
  }

  addUser(user: IUser) {
    return this.http.post(`${environment.baseUrl}${this.context}`, user).pipe(map((resp) => resp));
  }

  updateUser(User: IUser) {
    return this.http
      .put(`${this.context}/${User.id}`, User)
      .pipe(map((resp) => resp));
  }

  deleteUser(User: IUser) {
    return this.http
      .delete(`${this.context}/${User.id}`)
      .pipe(map((resp) => resp));
  }
}

