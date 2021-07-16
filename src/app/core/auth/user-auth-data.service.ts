import { IUser } from './../interfaces/IUser';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class UserAuthDataService {
  public user$: Subject<IUser> = new Subject();

  constructor() { }
}
