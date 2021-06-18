import { IPost } from '../../../core/interfaces/IPost';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {

  @Input() post:IPost
  constructor() { }

  ngOnInit() {
  }

}
