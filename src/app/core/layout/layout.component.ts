import { Subject, Observable } from "rxjs";
import { IUser } from "./../interfaces/IUser";
import { UserAuthDataService } from "./../auth/user-auth-data.service";
import { SidenavService } from "./sidenav.service";
import { Component, OnInit } from "@angular/core";
import { onMainContentChange } from "./animations/animations";
import { tap } from "rxjs/operators";

@Component({
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  animations: [onMainContentChange],
})
export class LayoutComponent implements OnInit {
  public onSideNavChange: boolean;
  public user$;

  constructor(
    private _sidenavService: SidenavService,
    public userData: UserAuthDataService
  ) {
    this._sidenavService.sideNavState$.subscribe((res) => {
      this.onSideNavChange = res;
    });
  }
  ngOnInit() {
    this.user$ = this.userData.getUserData();
  }
}
