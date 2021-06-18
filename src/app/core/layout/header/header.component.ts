import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav

  constructor() { }

  ngOnInit() {
  }

}
