import { IPhoto } from "./../../interfaces/IPhoto";
import { PhotosService } from "./../../shared/services/photos.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"],
})
export class PhotosComponent implements OnInit {
  protected listPhotos: Array<IPhoto> = [];
  constructor(
    public photoService: PhotosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPhotosList();
  }
  getPhotosList() {
    this.photoService.getPhotos().subscribe((resp) => (this.listPhotos = resp));
  }
  addPhoto() {
    this.router.navigate(["create"], { relativeTo: this.route });
  }
}
