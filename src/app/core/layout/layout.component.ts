import { SidenavService } from "./sidenav.service";
import { Component, OnInit } from "@angular/core";
import { onMainContentChange } from './animations/animations';

@Component({
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  animations: [ onMainContentChange ]
})
export class LayoutComponent implements OnInit {
  public onSideNavChange: boolean;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe((res) => {
          this.onSideNavChange = res;
    });
  }
  ngOnInit(){
    
  }
}
