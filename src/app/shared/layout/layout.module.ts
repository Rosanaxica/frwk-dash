import { SidenavService } from './sidenav.service';
import { DashboardComponent } from '../../public/components/dashboard/dashboard.component';
import { SharedModule } from './../shared.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, LeftMenuComponent,DashboardComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    
  ],
  providers: [ SidenavService ],
})
export class LayoutModule { }
