import { SharedModule } from './../shared.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, LeftMenuComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
    
  ]
})
export class LayoutModule { }
