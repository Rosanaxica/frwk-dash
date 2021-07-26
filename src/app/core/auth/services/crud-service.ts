import { HttpClient } from '@angular/common/http';
import { map, delay,  take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';
export class CrudService<T>{



    constructor(public http: HttpClient, private CONTEXT) { }

      
    list(): Observable<T[]> {
      return this.http.get<T[]>(`${environment.baseUrl}${this.CONTEXT}`).pipe(map((resp) => resp));
    }
  
    getById(id): Observable<T> {
      console.log(id)
      return this.http.get<T>(`${environment.baseUrl}${this.CONTEXT}/${id}`).pipe(map((resp) => resp));
    }
  
    add(record: T) {
      return this.http.post(`${environment.baseUrl}${this.CONTEXT}`, record).pipe(map((resp) => resp));
    }
  
    update(record: T) {
      return this.http
        .put(`${environment.baseUrl}${this.CONTEXT}/${record['id']}`, record)
        .pipe(map((resp) => resp));
    }
  
    delete(id) {
      return this.http
        .delete(`${environment.baseUrl}${this.CONTEXT}/${id}`)
        .pipe(map((resp) => resp))
    
    }
}