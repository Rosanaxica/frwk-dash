import { AlbumDeactivateGuard } from './guards/albums-deactivate-guard';
import { AuthGuard } from './guards/auth-guard';
import { AuthService } from './auth/services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthDataService } from './auth/user-auth-data.service';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  
  ],
  providers:[UserAuthDataService, AuthService, AuthGuard, AlbumDeactivateGuard]
})
export class CoreModule { }
