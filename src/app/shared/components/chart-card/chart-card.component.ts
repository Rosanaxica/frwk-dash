import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
