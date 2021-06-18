import { SidenavService } from "../sidenav.service";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { onSideNavChange, animateText } from "../animations/animations";

@Component({
  selector: "app-left-menu",
  templateUrl: "./left-menu.component.html",
  styleUrls: ["./left-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [onSideNavChange, animateText],
})
export class LeftMenuComponent implements OnInit {
  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: any[] = [
    { name: "Dashboard", link: "../dash", icon: "home" },
    { name: "Todos", link: "todos", icon: "inbox" },
    { name: "Posts", link: "posts", icon: "send" },
    { name: "Albums", link: "albums", icon: "photo" },
  ];

  constructor(private _sidenavService: SidenavService) {}

  ngOnInit() {}

  
  onSidenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }
}
