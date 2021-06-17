import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-input-form-field',
  templateUrl: './input-form-field.component.html',
  styleUrls: ['./input-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFormFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
