import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
