import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTitleComponent implements OnInit {
  @Input() title:string=""

  constructor() { }

  ngOnInit() {
  }

}
