import { CrudService } from './../auth/services/crud-service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { IPhoto } from '../interfaces/IPhoto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends CrudService<IPhoto>{


  constructor(public http: HttpClient) {
    super(http,"/photos")
  }


}
