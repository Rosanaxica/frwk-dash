import { PostService } from "../../../core/services/post.service";
import { IPost } from "../../../core/interfaces/IPost";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  constructor(
    public postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  protected listPost: Array<IPost> = [];
  ngOnInit() {
    this.getPostsList();
  }

  getPostsList() {
    this.postService.getPosts().subscribe((resp) => (this.listPost = resp));
  }

  editItem(evt) {
    let post: IPost = evt;
    this.postService.updatePost(post).subscribe((resp) => resp);
  }
  deleteItem(evt) {
    let post: IPost = evt;
    this.postService.deletePost(post).subscribe((resp) => resp);
  }
  addPost() {
    this.router.navigate(["create"], { relativeTo: this.route });
  }
}
