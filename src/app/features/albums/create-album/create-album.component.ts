import { AlbumService } from "../../../core/services/album.service";
import { IAlbum } from "../../../core/interfaces/IAlbum";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ITodo } from "src/app/core/interfaces/ITodo";
import { TodoService } from "src/app/core/services/todo.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./create-album.component.html",
  styleUrls: ["./create-album.component.scss"],
})
export class CreateAlbumComponent implements OnInit {
  constructor(
    public albumService: AlbumService,
    protected form: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  formAlbum: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formAlbum = new FormGroup({
      title: new FormControl("", Validators.required),
    });
  }

  createAlbum() {
    let album: IAlbum={
      userId: 1,
      title: this.formAlbum.controls["title"].value,
      body: this.formAlbum.controls["body"].value,
    };
    this.albumService.addAlbum(album).subscribe((resp) => resp);
  }
  submit() {
    if (this.formAlbum.valid) {
     this.createAlbum()
    }
  }
  resetForm() {
    this.formAlbum.reset();
  }
}
