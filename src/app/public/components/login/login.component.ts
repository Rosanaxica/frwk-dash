import { AuthService } from "./../../../core/auth/services/auth.service";
import { IUser } from "./../../../core/interfaces/IUser";
import { UserAuthDataService } from "./../../../core/auth/user-auth-data.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public userData: UserAuthDataService,
    public authService: AuthService
  ) {}
  user: IUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  ngOnInit() {}
  

  doLogin() {
    this.userData.user$.next(this.user);
    let userLogged = {
      user: "Rosana",
      pass: "1234",
    };
    this.authService.doLogin(userLogged);
  }
}
