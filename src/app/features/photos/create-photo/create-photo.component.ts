import { IPhoto } from "../../../core/interfaces/IPhoto";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PhotosService } from "src/app/core/services/photos.service";

@Component({
  templateUrl: "./create-photo.component.html",
  styleUrls: ["./create-photo.component.scss"],
})
export class CreatePhotoComponent implements OnInit {
  constructor(
    public photoService: PhotosService,
    protected form: FormBuilder
  ) {}
  formPhoto: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formPhoto = new FormGroup({
      title: new FormControl("", Validators.required),
      url: new FormControl("", Validators.required),
      thumbnailUrl: new FormControl("", Validators.required),
    });
  }

  createPhoto() {
    let photo: IPhoto = {
      albumId: 1,
      title: this.formPhoto.controls["title"].value,
      url: this.formPhoto.controls["url"].value,
      thumbnailUrl: this.formPhoto.controls["thumbnailUrl"].value,
    };
    this.photoService.addPhoto(photo).subscribe((resp) => resp);
  }

  submit() {
    this.formPhoto.markAllAsTouched;
    if (this.formPhoto.valid) {
      this.createPhoto();
    }
  }
  resetForm() {
    this.formPhoto.reset();
  }
}
