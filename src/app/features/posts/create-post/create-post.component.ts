import { IPost } from "./../../../core/interfaces/IPost";
import { PostService } from "./../../../core/services/post.service";

import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from "@angular/forms";

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  constructor(
    public photoService: PostService,
    protected form: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  formPost: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formPost = new FormGroup({
      title: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required),
    });
  }

  createPost() {
    let post: IPost = {
      userId: 1,
      title: this.formPost.controls["title"].value,
      body: this.formPost.controls["body"].value,
    };
    this.photoService.addPost(post).subscribe((resp) => this.navigateToList());
  }

  submit() {
    this.formPost.markAllAsTouched;
    if (this.formPost.valid) {
      this.createPost();
    }
  }
  navigateToList() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  resetForm() {
    this.formPost.reset();
  }
}
