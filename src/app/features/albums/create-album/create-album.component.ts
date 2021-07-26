import { IAlbum } from "./../../../core/interfaces/IAlbum";
import { AlbumService } from "../../../core/services/album.service";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ITodo } from "src/app/core/interfaces/ITodo";
import { TodoService } from "src/app/core/services/todo.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  templateUrl: "./create-album.component.html",
  styleUrls: ["./create-album.component.scss"],
})
export class CreateAlbumComponent implements OnInit, OnDestroy {
  public id: number = 0;
  public urlId: Subscription;
  constructor(
    public albumService: AlbumService,
    protected form: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  formAlbum: FormGroup;
  ngOnInit() {
    this.createForm();
    this.urlId = this.route.params.subscribe((params) => {
      const id = params["id"];
      if (id) {
        this.getAlbumToEdit(id);
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.urlId.unsubscribe();
  }

  getAlbumToEdit(id) {
    let returnedAlbum: IAlbum;

    this.albumService.getAlbum(id).subscribe((resp) => {
      returnedAlbum = resp;
      this.updateForm(returnedAlbum);
    });
  }

  createForm() {
    this.formAlbum = new FormGroup({
      title: new FormControl("", Validators.required),
    });
  }

  updateForm(album) {
    if (album) {
      this.formAlbum.patchValue({
        title: album.title,
      });
    }
  }

  createAlbum() {
    let album: IAlbum = {
      userId: 1,
      title: this.formAlbum.controls["title"].value,
      body: this.formAlbum.controls["body"].value,
    };
    this.albumService.addAlbum(album).subscribe((resp) => resp);
  }
  submit() {
    if (this.formAlbum.valid) {
      this.createAlbum();
    }
  }
  resetForm() {
    this.formAlbum.reset();
  }
}
