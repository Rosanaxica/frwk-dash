import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-total-card',
  templateUrl: './total-card.component.html',
  styleUrls: ['./total-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCardComponent implements OnInit {
  @Input() number
  @Input() text
  @Input() color

  constructor() { }

  ngOnInit() {
  }

}
