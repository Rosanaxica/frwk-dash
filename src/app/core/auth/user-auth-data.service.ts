import { IUser } from "./../interfaces/IUser";
import { Subject, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserAuthDataService {
  private user$ = new Subject();

  constructor() {}
  public getUserData() {
    return this.user$.asObservable();

  }
 public setUserData(user){
    this.user$.next(user)
  }
}
