import { ITodo } from "./../../../core/interfaces/ITodo";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-dashboard-spotlight-card",
  templateUrl: "./dashboard-spotlight-card.component.html",
  styleUrls: ["./dashboard-spotlight-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSpotlightCardComponent implements OnInit {
  @Input() task: ITodo;
  @Output() viewTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  viewTaskClick() {
    this.viewTask.emit()
  }
}
