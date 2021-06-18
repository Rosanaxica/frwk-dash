import { ITodo } from '../../../core/interfaces/ITodo';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCardComponent implements OnInit {
@Input() todo:ITodo
  constructor() { }

  ngOnInit() {
  }

}
