import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";

@Component({
  selector: "app-button-group",
  templateUrl: "./button-group.component.html",
  styleUrls: ["./button-group.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnInit {
  @Output() primaryButton: EventEmitter<any> = new EventEmitter();
  @Output() secondaryButton: EventEmitter<any> = new EventEmitter();
  @Input() buttonGroup = {
    primaryName: "Editar",
    primaryColor: "primary",
    secondaryName: "Cancelar",
    secondayColor: "warn",
  };
  constructor() {}

  ngOnInit() {}

  onPrimaryButtonClick(evt) {
    this.primaryButton.emit(evt);
  }
  onSecondaryButtonClick(evt) {
    this.secondaryButton.emit(evt);
  }
}
