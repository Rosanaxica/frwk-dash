import { AlbumService } from "./../../../core/services/album.service";
import { TodoService } from "./../../../core/services/todo.service";
import { PostService } from "./../../../core/services/post.service";
import { SharedModule } from "../../shared.module";
import { MaterialModule } from "../../material/material.module";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  todosSize;
  albumSize;
  postSize;
  constructor(
    protected postService: PostService,
    protected todoService: TodoService,
    protected albumService: AlbumService,
    protected router: Router,
    protected route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getLenghts();
  }
  getLenghts() {
    this.albumService
      .getAlbums()
      .subscribe((resp) => (this.albumSize = resp.length));
    this.postService
      .getPosts()
      .subscribe((resp) => (this.postSize = resp.length));
    this.todoService
      .getTodos()
      .subscribe((resp) => (this.todosSize = resp.length));
  }
  viewTask() {
    this.router.navigate(["todos"], { relativeTo: this.route });
  }
}
