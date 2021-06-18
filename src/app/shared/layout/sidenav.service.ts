import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SidenavService {
  public sideNavState$: Subject<boolean> = new Subject();


  constructor() { }
}
