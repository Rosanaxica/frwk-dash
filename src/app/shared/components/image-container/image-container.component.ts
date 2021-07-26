import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-image-container",
  templateUrl: "./image-container.component.html",
  styleUrls: ["./image-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageContainerComponent implements OnInit {
  @Input() image;
  @Output() onEditItem = new EventEmitter();
  @Output() onDeleteItem = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  editItem(id) {
    this.onEditItem.emit(id);
  }
  deleteItem(id) {
    this.onDeleteItem.emit(id);
  }
}
