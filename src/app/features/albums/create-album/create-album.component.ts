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
import { map, switchMap } from "rxjs/operators";

@Component({
  templateUrl: "./create-album.component.html",
  styleUrls: ["./create-album.component.scss"],
})
export class CreateAlbumComponent implements OnInit {
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
    //observables aninhados
    this.route.params
      .pipe(
        map((params: any) => params["id"]),
        switchMap((id) => this.albumService.getAlbum(id))
      )
      .subscribe((album) => {
        this.updateForm(album);
      });

    // this.route.params.subscribe((params) => {
    //   const id = params["id"];
    //   if (id) {
    //     this.getAlbumToEdit(id);
    //   }
    // });
  }

  getAlbumToEdit(id) {
    return;
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
