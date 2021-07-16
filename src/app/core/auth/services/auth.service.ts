import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router) {}
  userAuthenticated: boolean = false;

  doLogin(user) {
    if (user.email === "Rosana" && user.pass === "1234") {
      this.router.navigate(["dash"]);
    }
  }

  isUserAuthenticated() {
    return this.userAuthenticated;
  }
}
