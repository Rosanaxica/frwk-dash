import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../public/components/dashboard/dashboard.component';
import { LoginComponent } from '../public/components/login/login.component';
import { Error404Component } from '../public/components/error404/error404.component';



@NgModule({
  declarations: [DashboardComponent,LoginComponent,Error404Component],
  imports: [
    CommonModule,
  
  ]
})
export class CoreModule { }
